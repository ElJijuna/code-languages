import { readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const languagesDir = "src/languages";
const reportPath = "language-version-report.json";

const manualChecks = {
  c: "ISO standards do not expose a stable free machine-readable latest-version endpoint.",
  cpp: "ISO standards do not expose a stable free machine-readable latest-version endpoint.",
  css: "CSS is maintained as living specifications rather than one package version.",
  dockerfile:
    "Dockerfile syntax versions depend on the BuildKit frontend image and should be reviewed manually.",
  html: "HTML is maintained as a living standard.",
  javascript:
    "ECMAScript editions are published yearly and should be checked against ECMA-262 release status.",
  json: "RFC 8259 is stable and should be reviewed manually when a replacement RFC appears.",
  sql: "SQL standards should be reviewed manually against ISO/IEC 9075 publications.",
  xml: "XML 1.0 Fifth Edition is stable and should be reviewed manually if W3C publishes a new edition.",
  yaml: "YAML specification updates should be reviewed manually against yaml.org/spec.",
};

const checkers = {
  async astro() {
    const json = await fetchJson("https://registry.npmjs.org/astro/latest");

    return {
      latestVersion: json.version,
      sourceUrl: "https://registry.npmjs.org/astro/latest",
    };
  },
  async bash() {
    const html = await fetchText("https://ftp.gnu.org/gnu/bash/");
    const versions = [...html.matchAll(/bash-(\d+\.\d+(?:\.\d+)?)\.tar\.gz/g)].map(
      (match) => match[1],
    );

    return {
      latestVersion: latestSemver(versions),
      sourceUrl: "https://ftp.gnu.org/gnu/bash/",
    };
  },
  async go() {
    const text = await fetchText("https://go.dev/VERSION?m=text");
    const match = text.match(/^go(\d+\.\d+(?:\.\d+)?)/m);

    return {
      latestVersion: match?.[1],
      sourceUrl: "https://go.dev/VERSION?m=text",
    };
  },
  async groovy() {
    const xml = await fetchText(
      "https://repo1.maven.org/maven2/org/apache/groovy/groovy/maven-metadata.xml",
    );
    const versions = [...xml.matchAll(/<version>([^<]+)<\/version>/g)]
      .map((match) => match[1])
      .filter((version) => /^\d+\.\d+\.\d+$/.test(version));

    return {
      latestVersion: latestSemver(versions),
      sourceUrl: "https://repo1.maven.org/maven2/org/apache/groovy/groovy/maven-metadata.xml",
    };
  },
  async java() {
    const json = await fetchJson("https://api.adoptium.net/v3/info/available_releases");
    const releases = json.available_releases ?? [];
    const latest = Math.max(...releases.map(Number).filter(Number.isFinite));

    return {
      latestVersion: String(latest),
      sourceUrl: "https://api.adoptium.net/v3/info/available_releases",
    };
  },
  async kotlin() {
    const json = await fetchJson("https://api.github.com/repos/JetBrains/kotlin/releases/latest");

    return {
      latestVersion: normalizeVersion(json.tag_name),
      sourceUrl: "https://api.github.com/repos/JetBrains/kotlin/releases/latest",
    };
  },
  async markdown() {
    const html = await fetchText("https://spec.commonmark.org/");
    const versions = [...html.matchAll(/\/(\d+\.\d+(?:\.\d+)?)\//g)].map((match) => match[1]);

    return {
      latestVersion: `CommonMark ${latestSemver(versions)}`,
      sourceUrl: "https://spec.commonmark.org/",
    };
  },
  async php() {
    const html = await fetchText("https://www.php.net/downloads");
    const match = html.match(/Current Stable PHP (\d+\.\d+\.\d+)/);

    return {
      latestVersion: match?.[1],
      sourceUrl: "https://www.php.net/downloads",
    };
  },
  async python() {
    const html = await fetchText("https://www.python.org/downloads/");
    const match = html.match(/Latest Python 3 Release - Python (\d+\.\d+\.\d+)/);

    return {
      latestVersion: match?.[1],
      sourceUrl: "https://www.python.org/downloads/",
    };
  },
  async rust() {
    const toml = await fetchText("https://static.rust-lang.org/dist/channel-rust-stable.toml");
    const match = toml.match(/pkg\.rust\]\s+version = "(\d+\.\d+\.\d+)/);

    return {
      latestVersion: match?.[1],
      sourceUrl: "https://static.rust-lang.org/dist/channel-rust-stable.toml",
    };
  },
  async scss() {
    const json = await fetchJson("https://registry.npmjs.org/sass/latest");

    return {
      latestVersion: json.version,
      sourceUrl: "https://registry.npmjs.org/sass/latest",
    };
  },
  async swift() {
    const json = await fetchJson("https://api.github.com/repos/swiftlang/swift/releases/latest");
    const match = String(json.tag_name ?? json.name ?? "").match(
      /swift-(\d+\.\d+(?:\.\d+)?)-RELEASE/,
    );

    return {
      latestVersion: match?.[1],
      sourceUrl: "https://api.github.com/repos/swiftlang/swift/releases/latest",
    };
  },
  async typescript() {
    const json = await fetchJson("https://registry.npmjs.org/typescript/latest");

    return {
      latestVersion: majorMinor(json.version),
      sourceUrl: "https://registry.npmjs.org/typescript/latest",
    };
  },
};

async function main() {
  const options = parseOptions(process.argv.slice(2));
  const languages = await readLanguages();
  const report = await buildReport(languages);

  await writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`);
  printReport(report);

  if (options.createIssues) {
    await createIssues(report.updates);
  }

  if (report.errors.length > 0 && options.failOnError) {
    process.exitCode = 1;
  }
}

function parseOptions(args) {
  return {
    createIssues: args.includes("--create-issues"),
    failOnError: args.includes("--fail-on-error"),
  };
}

async function readLanguages() {
  const files = await readdir(languagesDir);
  const languages = [];

  for (const file of files.filter((name) => name.endsWith(".ts")).sort()) {
    const filePath = join(languagesDir, file);
    const source = await readFile(filePath, "utf8");
    const slug = source.match(/slug:\s*"([^"]+)"/)?.[1];
    const version = source.match(/version:\s*"([^"]+)"/)?.[1];
    const name = source.match(/name:\s*"([^"]+)"/)?.[1] ?? slug;

    if (slug && version) {
      languages.push({ filePath, name, slug, version });
    }
  }

  return languages;
}

async function buildReport(languages) {
  const report = {
    checkedAt: new Date().toISOString(),
    updates: [],
    current: [],
    skipped: [],
    errors: [],
  };

  for (const language of languages) {
    const checker = checkers[language.slug];

    if (!checker) {
      report.skipped.push({
        ...language,
        reason: manualChecks[language.slug] ?? "No automated version checker configured yet.",
      });
      continue;
    }

    try {
      const result = await checker(language);

      if (!result.latestVersion) {
        throw new Error("Could not detect latest version from source");
      }

      const item = {
        ...language,
        latestVersion: result.latestVersion,
        sourceUrl: result.sourceUrl,
      };

      if (isUpdateAvailable(language.version, result.latestVersion)) {
        report.updates.push(item);
      } else {
        report.current.push(item);
      }
    } catch (error) {
      report.errors.push({
        ...language,
        message: error instanceof Error ? error.message : String(error),
      });
    }
  }

  return report;
}

async function createIssues(updates) {
  const token = process.env.GITHUB_TOKEN;
  const repository = process.env.GITHUB_REPOSITORY;

  if (!token || !repository) {
    throw new Error("GITHUB_TOKEN and GITHUB_REPOSITORY are required to create issues");
  }

  const [owner, repo] = repository.split("/");

  for (const update of updates) {
    const title = `chore: update ${update.name} metadata to ${update.latestVersion}`;
    const existingIssue = await findOpenIssue({ owner, repo, title, token });

    if (existingIssue) {
      console.log(`Issue already exists: ${title}`);
      continue;
    }

    await githubRequest(`/repos/${owner}/${repo}/issues`, {
      method: "POST",
      token,
      body: {
        title,
        body: [
          `The automated language version check found a pending ${update.name} update.`,
          "",
          `- Language: ${update.name} (${update.slug})`,
          `- Current version: ${update.version}`,
          `- Detected version: ${update.latestVersion}`,
          `- Source: ${update.sourceUrl}`,
          `- File: \`${update.filePath}\``,
          "",
          "Please verify the upstream source before updating the metadata.",
        ].join("\n"),
      },
    });

    console.log(`Created issue: ${title}`);
  }
}

async function findOpenIssue({ owner, repo, title, token }) {
  const query = `repo:${owner}/${repo} is:issue is:open in:title "${title}"`;
  const result = await githubRequest(`/search/issues?q=${encodeURIComponent(query)}`, {
    token,
  });

  return result.items?.find((issue) => issue.title === title);
}

async function fetchJson(url) {
  const response = await fetchWithHeaders(url);

  return response.json();
}

async function fetchText(url) {
  const response = await fetchWithHeaders(url);

  return response.text();
}

async function fetchWithHeaders(url) {
  const response = await fetch(url, {
    headers: {
      Accept: "application/json, text/plain, */*",
      "User-Agent": "code-languages-version-check",
    },
  });

  if (!response.ok) {
    throw new Error(`Request failed with ${response.status} for ${url}`);
  }

  return response;
}

async function githubRequest(path, { body, method = "GET", token }) {
  const response = await fetch(`https://api.github.com${path}`, {
    method,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "User-Agent": "code-languages-version-check",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`GitHub request failed with ${response.status}: ${text}`);
  }

  return response.json();
}

function latestSemver(versions) {
  return [...new Set(versions)].sort(compareSemver).at(-1);
}

function compareSemver(left, right) {
  const a = left.split(".").map(Number);
  const b = right.split(".").map(Number);

  for (let index = 0; index < Math.max(a.length, b.length); index += 1) {
    const difference = (a[index] ?? 0) - (b[index] ?? 0);

    if (difference !== 0) {
      return difference;
    }
  }

  return 0;
}

function normalizeVersion(value) {
  return String(value ?? "")
    .replace(/^v/i, "")
    .replace(/^kotlin-?/i, "")
    .trim();
}

function majorMinor(value) {
  const match = String(value ?? "").match(/^(\d+\.\d+)/);

  return match?.[1] ?? value;
}

function normalizeComparable(value) {
  return normalizeVersion(value)
    .replace(/^commonmark\s+/i, "")
    .trim()
    .toLowerCase();
}

function isUpdateAvailable(currentVersion, latestVersion) {
  const current = normalizeComparable(currentVersion);
  const latest = normalizeComparable(latestVersion);
  const currentSemver = current.match(/\d+(?:\.\d+){0,2}/)?.[0];
  const latestSemver = latest.match(/\d+(?:\.\d+){0,2}/)?.[0];

  if (currentSemver && latestSemver) {
    return compareSemver(currentSemver, latestSemver) < 0;
  }

  return current !== latest;
}

function printReport(report) {
  console.log(`Checked at: ${report.checkedAt}`);
  console.log(`Current: ${report.current.length}`);
  console.log(`Updates: ${report.updates.length}`);
  console.log(`Skipped: ${report.skipped.length}`);
  console.log(`Errors: ${report.errors.length}`);

  for (const update of report.updates) {
    console.log(
      `Update available: ${update.name} ${update.version} -> ${update.latestVersion} (${update.sourceUrl})`,
    );
  }

  for (const error of report.errors) {
    console.log(`Error: ${error.name} (${error.slug}) - ${error.message}`);
  }
}

await main();
