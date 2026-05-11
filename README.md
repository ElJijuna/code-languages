# code-languages

[![npm version](https://img.shields.io/npm/v/code-languages.svg)](https://www.npmjs.com/package/code-languages)
[![CI](https://github.com/ElJijuna/code-languages/actions/workflows/ci.yml/badge.svg)](https://github.com/ElJijuna/code-languages/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-ready-3178c6.svg)](https://www.typescriptlang.org)
[![Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen.svg)](package.json)

Structured metadata for programming languages, packaged as a typed, tree-shakeable TypeScript library.

`code-languages` is useful when you need a small source of truth for language names, slugs, file extensions, release metadata, websites, paradigms, and logos in developer tools, docs sites, learning platforms, or editor-like interfaces. It currently includes metadata for 19 languages.

## Features

- TypeScript-first data model
- Zero runtime dependencies
- ESM and CommonJS builds
- Subpath imports for per-language usage
- Tree-shakeable exports
- Works in Node.js and modern bundlers

## Installation

```bash
npm install code-languages
```

## Usage

Import only the language metadata you need:

```ts
import { typescript } from "code-languages/typescript";
import { localizeLanguage } from "code-languages/i18n";

const localized = localizeLanguage(typescript, "en");

console.log(localized.name);
console.log(localized.description);
console.log(typescript.extensions);
console.log(typescript.paradigms);
```

Import multiple languages:

```ts
import { bash } from "code-languages/bash";
import { c } from "code-languages/c";
import { css } from "code-languages/css";
import { dockerfile } from "code-languages/dockerfile";
import { groovy } from "code-languages/groovy";
import { javascript } from "code-languages/javascript";
import { java } from "code-languages/java";
import { html } from "code-languages/html";
import { kotlin } from "code-languages/kotlin";
import { markdown } from "code-languages/markdown";
import { python } from "code-languages/python";
import { json } from "code-languages/json";
import { sql } from "code-languages/sql";
import { swift } from "code-languages/swift";
import { xml } from "code-languages/xml";
import { yaml } from "code-languages/yaml";

console.log(bash.version);
console.log(c.extensions);
console.log(css.paradigms);
console.log(dockerfile.i18n.en.name);
console.log(groovy.version);
console.log(javascript.website);
console.log(java.version);
console.log(html.extensions);
console.log(kotlin.version);
console.log(markdown.website);
console.log(python.publishedDate);
console.log(json.i18n.en.description);
console.log(sql.i18n.en.name);
console.log(swift.version);
console.log(xml.extensions);
console.log(yaml.version);
```

Import from the package root when bundle size is not a concern:

```ts
import {
  bash,
  c,
  css,
  dockerfile,
  go,
  groovy,
  html,
  java,
  json,
  kotlin,
  localizeLanguage,
  markdown,
  rust,
  sql,
  swift,
  typescript,
  xml,
  yaml,
} from "code-languages";

console.log(localizeLanguage(bash, "es").description);
console.log(c.version);
console.log(localizeLanguage(css).name);
console.log(dockerfile.website);
console.log(localizeLanguage(groovy).description);
console.log(localizeLanguage(java).name);
console.log(html.website);
console.log(localizeLanguage(kotlin, "es-PE").description);
console.log(markdown.extensions);
console.log(go.logo);
console.log(json.website);
console.log(sql.extensions);
console.log(swift.i18n.en.description);
console.log(localizeLanguage(xml, "es").name);
console.log(yaml.paradigms);
```

## API

Every language object satisfies the `Language` interface:

```ts
export type Locale = "en" | "es";

export interface LanguageContent {
  name: string;
  description: string;
  longDescription: string;
}

export interface Language {
  slug: string;
  publishedDate: string;
  extensions: string[];
  author: string;
  website: string;
  paradigms: string[];
  version: string;
  logo: string;
  i18n: {
    en: LanguageContent;
    es?: LanguageContent;
  };
}
```

Use `localizeLanguage` to read localized display content with English fallback:

```ts
import { json } from "code-languages/json";
import { localizeLanguage } from "code-languages/i18n";

const language = localizeLanguage(json, "es-PE");

console.log(language.name);
console.log(language.longDescription);
console.log(language.resolvedLocale); // "es"
```

`localizeLanguage` resolves locales in this order:

1. Exact locale, for example `es`.
2. Base language from a regional locale, for example `es-PE` -> `es`.
3. English fallback, for example `fr-FR` -> `en`.

## Supported Languages

| Language | Slug | Extensions | Version | Import |
|---|---|---|---|---|
| Bash | `bash` | `.sh`, `.bash`, `.bashrc`, `.bash_profile`, `.bash_login`, `.profile` | `5.3` | `code-languages/bash` |
| C | `c` | `.c`, `.h` | `C23` | `code-languages/c` |
| Dockerfile | `dockerfile` | `Dockerfile`, `.dockerfile` | `1.10` | `code-languages/dockerfile` |
| Groovy | `groovy` | `.groovy`, `.gvy`, `.gy`, `.gsh` | `5.0.5` | `code-languages/groovy` |
| TypeScript | `typescript` | `.ts`, `.tsx`, `.mts`, `.cts` | `6.0` | `code-languages/typescript` |
| JavaScript | `javascript` | `.js`, `.mjs`, `.cjs`, `.jsx` | `ECMAScript 2025` | `code-languages/javascript` |
| JSON | `json` | `.json` | `RFC 8259` | `code-languages/json` |
| SQL | `sql` | `.sql` | `SQL:2023` | `code-languages/sql` |
| Java | `java` | `.java` | `26` | `code-languages/java` |
| Swift | `swift` | `.swift` | `6.2.2` | `code-languages/swift` |
| Kotlin | `kotlin` | `.kt`, `.kts` | `2.3.20` | `code-languages/kotlin` |
| HTML | `html` | `.html`, `.htm` | `Living Standard` | `code-languages/html` |
| CSS | `css` | `.css` | `Living Standard` | `code-languages/css` |
| Markdown | `markdown` | `.md`, `.markdown`, `.mdown`, `.mkd` | `CommonMark 0.31.2` | `code-languages/markdown` |
| XML | `xml` | `.xml`, `.xsd`, `.xsl`, `.xslt` | `XML 1.0 Fifth Edition` | `code-languages/xml` |
| YAML | `yaml` | `.yaml`, `.yml` | `1.2.2` | `code-languages/yaml` |
| Python | `python` | `.py`, `.pyw` | `3.14.4` | `code-languages/python` |
| Rust | `rust` | `.rs` | `1.95.0` | `code-languages/rust` |
| Go | `go` | `.go` | `1.26.3` | `code-languages/go` |

## Development

```bash
npm ci
npm run check
npm run build
```

Common scripts:

| Script | Purpose |
|---|---|
| `npm run lint` | Run Biome checks |
| `npm run typecheck` | Run TypeScript without emitting files |
| `npm test` | Run Vitest |
| `npm run build` | Build ESM, CommonJS, and declaration files |
| `npm run check` | Run lint, typecheck, and tests |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for setup instructions, field rules, and the process for adding a new language.

## License

MIT
