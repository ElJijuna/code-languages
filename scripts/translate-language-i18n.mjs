import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const targetLocales = [
  { code: "de", label: "German" },
  { code: "pt", label: "Portuguese" },
];

const options = parseArgs(process.argv.slice(2));
const languagesDir = path.resolve(options.languagesDir ?? "src/languages");
const model = options.model ?? "translategemma:4b";
const maxAttempts = 3;

const files = await listLanguageFiles(languagesDir, options.only);
let changedFiles = 0;

for (const file of files) {
  const filePath = path.join(languagesDir, file);
  const source = await readFile(filePath, "utf8");
  const languageName = getLanguageName(source);
  const english = extractLocaleContent(source, "en");
  const missingLocales = targetLocales.filter(
    ({ code }) => options.overwrite || !hasLocale(source, code),
  );

  if (missingLocales.length === 0) {
    console.log(`skip ${file}: already has de and pt`);
    continue;
  }

  let nextSource = source;

  for (const target of missingLocales) {
    console.log(`translate ${file}: ${target.code}`);
    const translated = await translateContent({
      content: english,
      languageName,
      model,
      target,
    });

    const localeBlock = formatLocaleBlock(target.code, {
      name: english.name,
      description: translated.description,
      longDescription: translated.longDescription,
    });

    nextSource = options.overwrite
      ? replaceLocale(nextSource, target.code, localeBlock)
      : insertLocale(nextSource, localeBlock);
  }

  if (nextSource !== source) {
    changedFiles += 1;

    if (options.dryRun) {
      console.log(
        `dry-run ${file}: would write ${missingLocales.map(({ code }) => code).join(", ")}`,
      );
    } else {
      await writeFile(filePath, nextSource);
      console.log(`write ${file}: ${missingLocales.map(({ code }) => code).join(", ")}`);
    }
  }
}

console.log(`${options.dryRun ? "checked" : "updated"} ${changedFiles} file(s)`);

function parseArgs(args) {
  const parsed = {
    dryRun: false,
    overwrite: false,
  };

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];

    if (arg === "--dry-run") {
      parsed.dryRun = true;
      continue;
    }

    if (arg === "--overwrite") {
      parsed.overwrite = true;
      continue;
    }

    if (arg === "--model") {
      index += 1;
      parsed.model = readArgValue(args, index, arg);
      continue;
    }

    if (arg === "--languages-dir") {
      index += 1;
      parsed.languagesDir = readArgValue(args, index, arg);
      continue;
    }

    if (arg === "--only") {
      index += 1;
      parsed.only = readArgValue(args, index, arg)
        .split(",")
        .map((value) => value.trim())
        .filter(Boolean);
      continue;
    }

    throw new Error(`Unknown option: ${arg}`);
  }

  return parsed;
}

function readArgValue(args, index, name) {
  const value = args[index];

  if (!value || value.startsWith("--")) {
    throw new Error(`Missing value for ${name}`);
  }

  return value;
}

async function listLanguageFiles(dir, only) {
  const requested = new Set(only?.map((file) => (file.endsWith(".ts") ? file : `${file}.ts`)));
  const entries = await readdir(dir);
  const languageFiles = entries.filter((file) => file.endsWith(".ts")).sort();

  if (!requested.size) {
    return languageFiles;
  }

  return languageFiles.filter(
    (file) => requested.has(file) || requested.has(file.replace(/\.ts$/, "")),
  );
}

function getLanguageName(source) {
  return extractLocaleContent(source, "en").name;
}

function hasLocale(source, locale) {
  return new RegExp(`\\n\\s{4}${locale}:\\s*\\{`).test(source);
}

function extractLocaleContent(source, locale) {
  const block = extractObjectBlock(source, `${locale}:`);

  return {
    name: extractStringProperty(block, "name"),
    description: extractStringProperty(block, "description"),
    longDescription: extractStringProperty(block, "longDescription"),
  };
}

function extractStringProperty(block, property) {
  const match = new RegExp(`${property}:\\s*("(?:(?:\\\\.)|[^"\\\\])*")`, "s").exec(block);

  if (!match) {
    throw new Error(`Could not find string property "${property}"`);
  }

  return JSON.parse(match[1]);
}

function extractObjectBlock(source, marker) {
  const markerIndex = source.indexOf(marker);

  if (markerIndex === -1) {
    throw new Error(`Could not find object marker "${marker}"`);
  }

  const openIndex = source.indexOf("{", markerIndex);

  if (openIndex === -1) {
    throw new Error(`Could not find opening brace for "${marker}"`);
  }

  const closeIndex = findMatchingBrace(source, openIndex);
  return source.slice(openIndex, closeIndex + 1);
}

function findMatchingBrace(source, openIndex) {
  let depth = 0;
  let quote = null;
  let escaped = false;

  for (let index = openIndex; index < source.length; index += 1) {
    const char = source[index];

    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        quote = null;
      }

      continue;
    }

    if (char === '"' || char === "'" || char === "`") {
      quote = char;
      continue;
    }

    if (char === "{") {
      depth += 1;
      continue;
    }

    if (char === "}") {
      depth -= 1;

      if (depth === 0) {
        return index;
      }
    }
  }

  throw new Error("Could not find matching closing brace");
}

async function translateContent({ content, languageName, model, target }) {
  const sourceParagraphs = splitParagraphs(content.longDescription);
  let previousError;

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    const prompt = buildTranslationPrompt({
      attempt,
      content,
      languageName,
      previousError,
      sourceParagraphs,
      target,
    });
    const translated = await requestTranslation({ model, prompt });

    try {
      return normalizeTranslation(translated, target.code, sourceParagraphs.length);
    } catch (error) {
      previousError = error;
      console.warn(`retry ${target.code}: ${error.message}`);
    }
  }

  throw new Error(
    `${target.code} translation failed after ${maxAttempts} attempts: ${previousError.message}`,
  );
}

function buildTranslationPrompt({
  attempt,
  content,
  languageName,
  previousError,
  sourceParagraphs,
  target,
}) {
  const instructions = [
    `Translate the programming-language metadata for ${languageName} into ${target.label}.`,
    "Return only compact JSON with exactly these keys: description, longDescriptionParagraphs.",
    "longDescriptionParagraphs must be an array of translated paragraphs.",
    `longDescriptionParagraphs must contain exactly ${sourceParagraphs.length} strings.`,
    "Do not merge paragraphs.",
    "Do not translate the programming language name, product names, runtime names, framework names, or file extensions.",
    "Keep the description at 160 characters or fewer.",
    "Preserve plain text only. Do not use Markdown.",
  ];

  if (attempt > 1 && previousError) {
    instructions.push(`Previous response was invalid: ${previousError.message}`);
  }

  return [
    ...instructions,
    "",
    JSON.stringify({
      description: content.description,
      longDescriptionParagraphs: sourceParagraphs,
    }),
  ].join("\n");
}

async function requestTranslation({ model, prompt }) {
  const response = await fetch("http://127.0.0.1:11434/api/generate", {
    body: JSON.stringify({
      format: "json",
      model,
      options: {
        temperature: 0,
      },
      prompt,
      stream: false,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (!response.ok) {
    throw new Error(`Ollama request failed: ${response.status} ${response.statusText}`);
  }

  const payload = await response.json();
  return JSON.parse(payload.response);
}

function normalizeTranslation(translated, locale, expectedParagraphCount) {
  const description = String(translated.description ?? "").trim();
  const longDescription = getLongDescription(translated);
  const paragraphs = splitParagraphs(longDescription);

  if (!description) {
    throw new Error(`Empty ${locale} description returned by Ollama`);
  }

  if (description.length > 160) {
    throw new Error(`${locale} description is ${description.length} characters; expected <= 160`);
  }

  if (paragraphs.length !== expectedParagraphCount) {
    throw new Error(
      `${locale} longDescription has ${paragraphs.length} paragraph(s); expected ${expectedParagraphCount}`,
    );
  }

  return {
    description,
    longDescription: paragraphs.join("\n\n"),
  };
}

function getLongDescription(translated) {
  if (Array.isArray(translated.longDescriptionParagraphs)) {
    return translated.longDescriptionParagraphs
      .map((paragraph) => String(paragraph).trim())
      .join("\n\n");
  }

  return String(translated.longDescription ?? "").trim();
}

function splitParagraphs(value) {
  return String(value)
    .trim()
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function formatLocaleBlock(locale, content) {
  return [
    `    ${locale}: {`,
    `      name: ${formatString(content.name)},`,
    ...formatStringProperty("description", content.description),
    "      longDescription:",
    `        ${formatString(content.longDescription)},`,
    "    },",
  ].join("\n");
}

function formatStringProperty(property, value) {
  const literal = formatString(value);
  const singleLine = `      ${property}: ${literal},`;

  if (singleLine.length <= 100) {
    return [singleLine];
  }

  return [`      ${property}:`, `        ${literal},`];
}

function formatString(value) {
  return JSON.stringify(value).replace(/[\u007f-\uffff]/g, (char) => {
    return `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}`;
  });
}

function insertLocale(source, localeBlock) {
  const i18nStart = source.indexOf("  i18n: {");

  if (i18nStart === -1) {
    throw new Error("Could not find i18n object");
  }

  const openIndex = source.indexOf("{", i18nStart);
  const closeIndex = findMatchingBrace(source, openIndex);
  const closeLineStart = source.lastIndexOf("\n", closeIndex) + 1;
  return `${source.slice(0, closeLineStart)}${localeBlock}\n${source.slice(closeLineStart)}`;
}

function replaceLocale(source, locale, localeBlock) {
  if (!hasLocale(source, locale)) {
    return insertLocale(source, localeBlock);
  }

  const blockStart = source.search(new RegExp(`\\n\\s{4}${locale}:\\s*\\{`));
  const openIndex = source.indexOf("{", blockStart);
  const closeIndex = findMatchingBrace(source, openIndex);
  const trailingCommaEnd = source[closeIndex + 1] === "," ? closeIndex + 2 : closeIndex + 1;
  return `${source.slice(0, blockStart + 1)}${localeBlock}${source.slice(trailingCommaEnd)}`;
}
