# code-languages

[![npm version](https://img.shields.io/npm/v/code-languages.svg)](https://www.npmjs.com/package/code-languages)
[![CI](https://github.com/ElJijuna/code-languages/actions/workflows/ci.yml/badge.svg)](https://github.com/ElJijuna/code-languages/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-ready-3178c6.svg)](https://www.typescriptlang.org)
[![Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen.svg)](package.json)

Structured metadata for programming languages, packaged as a typed, tree-shakeable TypeScript library.

`code-languages` is useful when you need a small source of truth for language names, slugs, file extensions, release metadata, websites, paradigms, and logos in developer tools, docs sites, learning platforms, or editor-like interfaces. It currently includes metadata for 7 languages.

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

console.log(typescript.name);
console.log(typescript.extensions);
console.log(typescript.paradigms);
```

Import multiple languages:

```ts
import { javascript } from "code-languages/javascript";
import { java } from "code-languages/java";
import { html } from "code-languages/html";
import { python } from "code-languages/python";

console.log(javascript.website);
console.log(java.version);
console.log(html.extensions);
console.log(python.publishedDate);
```

Import from the package root when bundle size is not a concern:

```ts
import { go, html, java, rust, typescript } from "code-languages";

console.log(java.name);
console.log(html.website);
console.log(go.logo);
```

## API

Every language object satisfies the `Language` interface:

```ts
export interface Language {
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  publishedDate: string;
  extensions: string[];
  author: string;
  website: string;
  paradigms: string[];
  version: string;
  logo: string;
}
```

## Supported Languages

| Language | Slug | Extensions | Version | Import |
|---|---|---|---|---|
| TypeScript | `typescript` | `.ts`, `.tsx`, `.mts`, `.cts` | `6.0` | `code-languages/typescript` |
| JavaScript | `javascript` | `.js`, `.mjs`, `.cjs`, `.jsx` | `ECMAScript 2025` | `code-languages/javascript` |
| Java | `java` | `.java` | `26` | `code-languages/java` |
| HTML | `html` | `.html`, `.htm` | `Living Standard` | `code-languages/html` |
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
