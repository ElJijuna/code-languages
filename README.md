# code-languages

[![npm version](https://img.shields.io/npm/v/code-languages.svg)](https://www.npmjs.com/package/code-languages)
[![CI](https://github.com/ElJijuna/code-languages/actions/workflows/ci.yml/badge.svg)](https://github.com/ElJijuna/code-languages/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-ready-3178c6.svg)](https://www.typescriptlang.org)
[![Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen.svg)](package.json)

Structured metadata for programming languages, packaged as a typed, tree-shakeable TypeScript library.

`code-languages` is useful when you need a small source of truth for language names, slugs, file extensions, release metadata, websites, paradigms, and logos in developer tools, docs sites, learning platforms, or editor-like interfaces. It currently includes metadata for 38 languages.

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
import { astro } from "code-languages/astro";
import { assembly } from "code-languages/assembly";
import { bash } from "code-languages/bash";
import { c } from "code-languages/c";
import { cobol } from "code-languages/cobol";
import { cpp } from "code-languages/cpp";
import { csharp } from "code-languages/csharp";
import { css } from "code-languages/css";
import { dart } from "code-languages/dart";
import { dockerfile } from "code-languages/dockerfile";
import { graphql } from "code-languages/graphql";
import { groovy } from "code-languages/groovy";
import { javascript } from "code-languages/javascript";
import { java } from "code-languages/java";
import { html } from "code-languages/html";
import { kotlin } from "code-languages/kotlin";
import { less } from "code-languages/less";
import { makefile } from "code-languages/makefile";
import { markdown } from "code-languages/markdown";
import { nginx } from "code-languages/nginx";
import { objectiveC } from "code-languages/objective-c";
import { php } from "code-languages/php";
import { powershell } from "code-languages/powershell";
import { python } from "code-languages/python";
import { scss } from "code-languages/scss";
import { json } from "code-languages/json";
import { sql } from "code-languages/sql";
import { svg } from "code-languages/svg";
import { swift } from "code-languages/swift";
import { visualBasic } from "code-languages/visual-basic";
import { vue } from "code-languages/vue";
import { webassembly } from "code-languages/webassembly";
import { xml } from "code-languages/xml";
import { yaml } from "code-languages/yaml";
import { zsh } from "code-languages/zsh";

console.log(astro.version);
console.log(assembly.extensions);
console.log(bash.version);
console.log(c.extensions);
console.log(cpp.i18n.en.name);
console.log(csharp.website);
console.log(css.paradigms);
console.log(dockerfile.i18n.en.name);
console.log(graphql.version);
console.log(groovy.version);
console.log(javascript.website);
console.log(java.version);
console.log(html.extensions);
console.log(kotlin.version);
console.log(less.extensions);
console.log(makefile.extensions);
console.log(markdown.website);
console.log(nginx.version);
console.log(objectiveC.version);
console.log(php.version);
console.log(powershell.extensions);
console.log(python.publishedDate);
console.log(scss.extensions);
console.log(json.i18n.en.description);
console.log(sql.i18n.en.name);
console.log(svg.extensions);
console.log(swift.version);
console.log(visualBasic.i18n.en.name);
console.log(vue.website);
console.log(webassembly.extensions);
console.log(xml.extensions);
console.log(yaml.version);
console.log(zsh.extensions);
```

Import from the package root when bundle size is not a concern:

```ts
import {
  astro,
  assembly,
  bash,
  c,
  cpp,
  csharp,
  css,
  detectLanguage,
  detectLanguages,
  dockerfile,
  go,
  graphql,
  groovy,
  html,
  java,
  json,
  kotlin,
  less,
  makefile,
  localizeLanguage,
  markdown,
  nginx,
  objectiveC,
  php,
  powershell,
  rust,
  scss,
  sql,
  svg,
  swift,
  typescript,
  visualBasic,
  vue,
  webassembly,
  xml,
  yaml,
  zsh,
} from "code-languages";

console.log(localizeLanguage(astro, "es").description);
console.log(localizeLanguage(assembly).description);
console.log(detectLanguage("src/index.ts")?.slug);
console.log(detectLanguages("include/config.h").map((language) => language.slug));
console.log(localizeLanguage(bash, "es").description);
console.log(c.version);
console.log(cpp.website);
console.log(localizeLanguage(csharp).description);
console.log(localizeLanguage(css).name);
console.log(dockerfile.website);
console.log(localizeLanguage(graphql, "es").description);
console.log(localizeLanguage(groovy).description);
console.log(localizeLanguage(java).name);
console.log(html.website);
console.log(localizeLanguage(kotlin, "es-PE").description);
console.log(localizeLanguage(less, "es").name);
console.log(localizeLanguage(makefile).description);
console.log(markdown.extensions);
console.log(localizeLanguage(nginx, "es").description);
console.log(objectiveC.extensions);
console.log(localizeLanguage(php, "es").description);
console.log(localizeLanguage(powershell).name);
console.log(go.logo);
console.log(localizeLanguage(scss).name);
console.log(json.website);
console.log(sql.extensions);
console.log(localizeLanguage(svg, "es").description);
console.log(swift.i18n.en.description);
console.log(localizeLanguage(visualBasic, "es").description);
console.log(localizeLanguage(vue, "es").description);
console.log(localizeLanguage(webassembly).name);
console.log(localizeLanguage(xml, "es").name);
console.log(yaml.paradigms);
console.log(zsh.version);
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
  tooling?: {
    runtimes?: string[];
    packageManagers?: string[];
    ecosystems?: string[];
  };
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

Use `detectLanguage` or `detectLanguages` to infer languages from filenames:

```ts
import { detectLanguage, detectLanguages } from "code-languages/detect";

console.log(detectLanguage("src/index.ts")?.slug); // "typescript"
console.log(detectLanguage("Dockerfile")?.slug); // "dockerfile"
console.log(detectLanguages("include/config.h").map((language) => language.slug)); // ["c", "cpp"]
```

## Supported Languages

| Logo | Language | Slug | Extensions | Version | Import |
|---|---|---|---|---|---|
| <img src="https://astro.build/assets/press/astro-icon-light.svg" alt="Astro logo" width="24" height="24"> | Astro | `astro` | `.astro` | `6.3.1` | `code-languages/astro` |
| <img src="https://cdn.simpleicons.org/assemblyscript/007AAC" alt="Assembly logo" width="24" height="24"> | Assembly | `assembly` | `.asm`, `.s`, `.S`, `.inc` | `Architecture-specific` | `code-languages/assembly` |
| <img src="https://bashlogo.com/img/symbol/svg/full_colored_dark.svg" alt="Bash logo" width="24" height="24"> | Bash | `bash` | `.sh`, `.bash`, `.bashrc`, `.bash_profile`, `.bash_login`, `.profile` | `5.3` | `code-languages/bash` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" alt="C logo" width="24" height="24"> | C | `c` | `.c`, `.h` | `C23` | `code-languages/c` |
| <img src="https://logo.svgcdn.com/devicon/cobol-original.png" alt="COBOL logo" width="24" height="24"> | COBOL | `cobol` | `.cob`, `.cbl`, `.cobol`, `.cpy` | `ISO/IEC 1989:2023` | `code-languages/cobol` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" alt="C++ logo" width="24" height="24"> | C++ | `cpp` | `.cpp`, `.cc`, `.cxx`, `.h`, `.hpp`, `.hh`, `.hxx` | `C++23` | `code-languages/cpp` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg" alt="C# logo" width="24" height="24"> | C# | `csharp` | `.cs`, `.csx` | `14` | `code-languages/csharp` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg" alt="CSS logo" width="24" height="24"> | CSS | `css` | `.css` | `Living Standard` | `code-languages/css` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Dart_programming_language_logo.svg" alt="Dart logo" width="24" height="24"> | Dart | `dart` | `.dart` | `3.11.6` | `code-languages/dart` |
| <img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" alt="Dockerfile logo" width="24" height="24"> | Dockerfile | `dockerfile` | `Dockerfile`, `.dockerfile` | `1.10` | `code-languages/dockerfile` |
| <img src="https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg" alt="Go logo" width="24" height="24"> | Go | `go` | `.go` | `1.26.3` | `code-languages/go` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg" alt="GraphQL logo" width="24" height="24"> | GraphQL | `graphql` | `.graphql`, `.gql`, `.graphqls` | `September 2025` | `code-languages/graphql` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/Groovy-logo.svg" alt="Groovy logo" width="24" height="24"> | Groovy | `groovy` | `.groovy`, `.gvy`, `.gy`, `.gsh` | `5.0.5` | `code-languages/groovy` |
| <img src="https://www.w3.org/html/logo/downloads/HTML5_Badge.svg" alt="HTML logo" width="24" height="24"> | HTML | `html` | `.html`, `.htm` | `Living Standard` | `code-languages/html` |
| <img src="https://www.vectorlogo.zone/logos/java/java-icon.svg" alt="Java logo" width="24" height="24"> | Java | `java` | `.java` | `26` | `code-languages/java` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript logo" width="24" height="24"> | JavaScript | `javascript` | `.js`, `.mjs`, `.cjs`, `.jsx` | `ECMAScript 2025` | `code-languages/javascript` |
| <img src="https://www.json.org/img/json160.gif" alt="JSON logo" width="24" height="24"> | JSON | `json` | `.json` | `RFC 8259` | `code-languages/json` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png" alt="Kotlin logo" width="24" height="24"> | Kotlin | `kotlin` | `.kt`, `.kts` | `2.3.20` | `code-languages/kotlin` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LESS_Logo.svg" alt="Less logo" width="24" height="24"> | Less | `less` | `.less` | `4.4.1` | `code-languages/less` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Heckert_gnu.small.png" alt="Makefile logo" width="24" height="24"> | Makefile | `makefile` | `Makefile`, `makefile`, `GNUmakefile`, `.mk`, `.mak` | `4.4.1` | `code-languages/makefile` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg" alt="Markdown logo" width="24" height="24"> | Markdown | `markdown` | `.md`, `.markdown`, `.mdown`, `.mkd` | `CommonMark 0.31.2` | `code-languages/markdown` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg" alt="nginx logo" width="24" height="24"> | nginx | `nginx` | `nginx.conf`, `.nginx`, `.conf` | `1.30.0` | `code-languages/nginx` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Apple_logo_grey.svg" alt="Objective-C logo" width="24" height="24"> | Objective-C | `objective-c` | `.m`, `.mm` | `2.0` | `code-languages/objective-c` |
| <img src="https://www.php.net/images/logos/new-php-logo.svg" alt="PHP logo" width="24" height="24"> | PHP | `php` | `.php`, `.phtml`, `.php3`, `.php4`, `.php5`, `.phps` | `8.5.6` | `code-languages/php` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/PowerShell_5.0_icon.png" alt="PowerShell logo" width="24" height="24"> | PowerShell | `powershell` | `.ps1`, `.psm1`, `.psd1`, `.ps1xml` | `7.6.1` | `code-languages/powershell` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Python-logo-notext.svg" alt="Python logo" width="24" height="24"> | Python | `python` | `.py`, `.pyw` | `3.14.4` | `code-languages/python` |
| <img src="https://www.rust-lang.org/logos/rust-logo-512x512.png" alt="Rust logo" width="24" height="24"> | Rust | `rust` | `.rs` | `1.95.0` | `code-languages/rust` |
| <img src="https://sass-lang.com/assets/img/logos/logo.svg" alt="Sass logo" width="24" height="24"> | Sass | `scss` | `.scss`, `.sass` | `1.99.0` | `code-languages/scss` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" alt="SQL logo" width="24" height="24"> | SQL | `sql` | `.sql` | `SQL:2023` | `code-languages/sql` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/SVG_Logo.svg" alt="SVG logo" width="24" height="24"> | SVG | `svg` | `.svg`, `.svgz` | `SVG 2` | `code-languages/svg` |
| <img src="https://www.swift.org/assets/images/swift.svg" alt="Swift logo" width="24" height="24"> | Swift | `swift` | `.swift` | `6.2.2` | `code-languages/swift` |
| <img src="https://www.typescriptlang.org/icons/icon-512x512.png" alt="TypeScript logo" width="24" height="24"> | TypeScript | `typescript` | `.ts`, `.tsx`, `.mts`, `.cts` | `6.0` | `code-languages/typescript` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/VB.NET_Logo.svg" alt="Visual Basic logo" width="24" height="24"> | Visual Basic | `visual-basic` | `.vb` | `17.13` | `code-languages/visual-basic` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Vue logo" width="24" height="24"> | Vue | `vue` | `.vue` | `3.5.34` | `code-languages/vue` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/1/1f/WebAssembly_Logo.svg" alt="WebAssembly logo" width="24" height="24"> | WebAssembly | `webassembly` | `.wasm`, `.wat` | `3.0` | `code-languages/webassembly` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/6/68/XML.svg" alt="XML logo" width="24" height="24"> | XML | `xml` | `.xml`, `.xsd`, `.xsl`, `.xslt` | `XML 1.0 Fifth Edition` | `code-languages/xml` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Official_YAML_Logo.svg" alt="YAML logo" width="24" height="24"> | YAML | `yaml` | `.yaml`, `.yml` | `1.2.2` | `code-languages/yaml` |
| <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Z_Shell_Logo_Color_Horizontal.svg" alt="zsh logo" width="24" height="24"> | zsh | `zsh` | `.zsh`, `.zshrc`, `.zprofile`, `.zlogin`, `.zlogout`, `.zshenv` | `5.9` | `code-languages/zsh` |

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
