<p align="center">
  <img src="https://raw.githubusercontent.com/ElJijuna/simple-languages/main/public/assets/logo.svg" alt="code-languages logo" width="400">
</p>

# code-languages

[![npm version](https://img.shields.io/npm/v/code-languages.svg)](https://www.npmjs.com/package/code-languages)
[![Pull Request](https://github.com/ElJijuna/code-languages/actions/workflows/pull-request.yml/badge.svg)](https://github.com/ElJijuna/code-languages/actions/workflows/pull-request.yml)
[![Docs](https://github.com/ElJijuna/code-languages/actions/workflows/docs.yml/badge.svg)](https://github.com/ElJijuna/code-languages/actions/workflows/docs.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-ready-3178c6.svg)](https://www.typescriptlang.org)
[![Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen.svg)](package.json)

Structured metadata for programming languages, packaged as a typed, tree-shakeable TypeScript library.

`code-languages` is useful when you need a small source of truth for language names, slugs, file extensions, release metadata, websites, paradigms, logos, and reference colors in developer tools, docs sites, learning platforms, or editor-like interfaces.

## Features

- TypeScript-first data model
- Zero runtime dependencies
- ESM and CommonJS builds
- Subpath imports for per-language usage
- Tree-shakeable exports
- Localized content in English, Spanish, Italian, French, German, and Portuguese
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
import { abap } from "code-languages/abap";
import { actionscript } from "code-languages/actionscript";

console.log(abap.version);
console.log(actionscript.extensions);
```

Import from the package root when bundle size is not a concern:

```ts
import {
  abap,
  actionscript,
} from "code-languages";

console.log(localizeLanguage(abap).description);
console.log(localizeLanguage(actionscript, "es").description);
```

## API

Every language object satisfies the `Language` interface:

```ts
export type BaseLocale = "en" | "es" | "it" | "fr" | "de" | "pt";
export type Locale = BaseLocale | `${BaseLocale}-${string}` | string;

export interface LanguageContent {
  name: string;
  description: string;
  longDescription: string;
}

export type LanguageStatus = "active" | "experimental" | "legacy" | "historical";

export interface Language {
  slug: string;
  aliases?: string[]; // lookup aliases, e.g. ["golang"] for go
  status?: LanguageStatus; // absent means "active"
  relations?: {
    supersetOf?: string[]; // e.g. TypeScript → ["javascript"]
    dialectOf?: string[]; // e.g. T-SQL → ["sql"]
    compilesTo?: string[]; // e.g. Elm → ["javascript"]
  };
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
  color: `#${string}`;
  i18n: {
    en: LanguageContent;
    es?: LanguageContent;
    it?: LanguageContent;
    fr?: LanguageContent;
    de?: LanguageContent;
    pt?: LanguageContent;
  };
}
```

Use the fluent API when you want one entry point for localization, dynamic loading,
and filename detection:

```ts
import { api } from "code-languages/api";

const astro = api.language("astro").locale("es-PE").get();
const vue = await api.language("vue").locale("en-US").load();
const detected = api.detect("src/App.vue").locale("es").get();
const ambiguous = await api.detectAll("include/config.h").locale("en").load();

console.log(astro?.resolvedLocale); // "es"
console.log(vue?.slug); // "vue"
console.log(detected?.name); // "Vue"
console.log(ambiguous.map((language) => language.slug)); // ["c", "cpp"]
```

`api.language(...)` normalizes lookup values to the package slug format, so inputs
such as `"Visual Basic"` and `"Jupyter Notebook!"` resolve to `visual-basic` and
`jupyter-notebook`. Language aliases are resolved before normalization, so `"golang"`,
`"C#"`, `"F#"`, `"C++"`, `"wasm"`, or `"elisp"` find `go`, `csharp`, `fsharp`, `cpp`,
`webassembly`, and `emacs-lisp`. When the slug is a known literal, `get()` and `load()`
are typed as always returning a language — no `undefined` check needed.

`get()` reads from the bundled in-memory catalog. `load()` uses explicit dynamic
imports so bundlers can lazy-load individual language modules when the consumer
build supports code splitting.

Use `api.runtime(value)` to query languages that run on a specific platform or runtime environment:

```ts
import { api } from "code-languages/api";

// Get runtime metadata
const info = api.runtime('node').info();
// {
//   slug: 'node',
//   name: 'Node.js',
//   color: '#339933',
//   logo: 'https://cdn.simpleicons.org/nodedotjs',
//   website: 'https://nodejs.org',
//   aliases: ['node', 'nodejs', 'node.js'],
//   packageManagers: ['npm', 'pnpm', 'Yarn', 'Bun'],
// }

// Get languages that target this runtime
const langs = api.runtime('node').langs().get();
const langsEs = api.runtime('.net').langs().locale('es').get();
await api.runtime('jvm').langs().load();

// Returns undefined / [] for unknown values
api.runtime('unknown-xyz').info();         // undefined
api.runtime('unknown-xyz').langs().get();  // []
```

Supported runtime aliases include: `node` / `nodejs` / `node.js`, `bun`, `deno`, `browser`,
`.net` / `dotnet`, `jvm` / `java`, `android`, `ios`, `python`, `ruby`, `rust`, `go` / `golang`,
`wasm`, `sql`, and many more. Searches `tooling.runtimes` and `tooling.ecosystems` on each language.

Use `api.packageManager(value)` to query languages that use a specific package manager:

```ts
import { api } from "code-languages/api";

// Get package manager metadata
const info = api.packageManager('npm').info();
// {
//   slug: 'npm',
//   name: 'npm',
//   color: '#CB3837',
//   logo: 'https://cdn.simpleicons.org/npm',
//   website: 'https://npmjs.com',
//   aliases: ['npm'],
// }

// Get languages that use this package manager
const langs = api.packageManager('cargo').langs().get();
const langsEs = api.packageManager('pip').langs().locale('es').get();

// Get runtime platforms that include this package manager
const runtimes = api.packageManager('npm').runtimes();
// [{ name: 'Node.js', ... }, { name: 'Bun', ... }, { name: 'Deno', ... }]

// Returns undefined / [] for unknown values
api.packageManager('unknown-xyz').info();      // undefined
api.packageManager('unknown-xyz').langs().get(); // []
api.packageManager('unknown-xyz').runtimes();  // []
```

Supported package manager aliases include: `npm`, `pnpm`, `yarn`, `pip`, `poetry`, `uv`,
`cargo`, `maven`, `gradle`, `nuget`, `composer`, `hex`, `spm`, `rubygems`, `go-mod`,
`luarocks`, `opam`, `cpan`, and more. Searches `tooling.packageManagers` on each language.

Use `api.category(value)` to filter languages by their domain of use:

```ts
import { api, getCategories } from "code-languages";

// frontend  — targets the browser only (CSS, HTML, WGSL…)
api.category('frontend').langs().get();

// backend   — runs on a server runtime (Python, Go, Ruby, PHP, Java, C#…)
api.category('backend').langs().locale('es').get();

// fullstack — targets both browser and server (JavaScript, TypeScript…)
api.category('fullstack').langs().get();

// systems   — low-level / native / embedded (C, C++, Rust, Zig…)
api.category('systems').langs().get();

// data-science — data, ML, scientific computing (R, Julia, Python…)
api.category('data-science').langs().locale('pt').get();

// scripting — shell and scripting languages (Bash, Zsh, PowerShell…)
api.category('scripting').langs().get();

// other     — everything that does not match any of the above
api.category('other').langs().get();

// async load and locale chaining work the same as other collection methods
await api.category('backend').langs().locale('pt').load();

// list all available categories
getCategories();
// → ['frontend', 'backend', 'fullstack', 'systems', 'data-science', 'scripting', 'other']
```

Categories are inferred from each language's `tooling.runtimes` and `tooling.ecosystems` —
no extra data is needed in individual language files.  
`frontend`, `backend`, and `fullstack` are mutually exclusive; the remaining categories
can overlap (Python appears in both `backend` and `data-science`).

Use `api.paradigm(value)` to filter languages by programming paradigm:

```ts
import { api, getParadigms } from "code-languages";

// Get paradigm metadata
const info = api.paradigm('functional').info();
// {
//   slug: 'functional',
//   name: 'Functional',
//   description: 'Computation through function evaluation, immutability, and avoiding side effects.',
//   aliases: ['functional', 'fp', 'pure-functional'],
// }

// Get languages that belong to this paradigm
const langs = api.paradigm('functional').langs().get();
const langsEs = api.paradigm('oop').langs().locale('es').get();
await api.paradigm('object-oriented').langs().load();

// Returns undefined / [] for unknown values
api.paradigm('unknown-xyz').info();         // undefined
api.paradigm('unknown-xyz').langs().get();  // []

// List all available paradigms
getParadigms();
```

Supported paradigm aliases include: `functional` / `fp`, `object-oriented` / `oop`,
`imperative` / `procedural`, `declarative`, `logic`, `concurrent`, `reactive`, `scripting` / `shell`,
`query`, `markup`, `templating`, `array`, `systems` / `low-level`, `stack-based` / `concatenative`,
`shader` / `gpu`, and more. Searches `paradigms` on each language.

Use `api.ecosystem(value)` to filter languages by technology ecosystem:

```ts
import { api, getEcosystems } from "code-languages";

// Get ecosystem metadata
const info = api.ecosystem('jvm').info();
// {
//   slug: 'jvm',
//   name: 'JVM',
//   description: 'Languages that run on the Java Virtual Machine.',
//   aliases: ['jvm', 'java'],
// }

// Get languages that belong to this ecosystem
const langs = api.ecosystem('jvm').langs().get();
const langsEs = api.ecosystem('data-science').langs().locale('es').get();
await api.ecosystem('web').langs().load();

// Returns undefined / [] for unknown values
api.ecosystem('unknown-xyz').info();         // undefined
api.ecosystem('unknown-xyz').langs().get();  // []

// List all available ecosystems
getEcosystems();
```

Supported ecosystem aliases include: `web` / `frontend`, `node` / `nodejs`, `jvm` / `java`,
`dotnet` / `.net`, `data-science` / `ml`, `embedded` / `iot`, `game-dev` / `games`,
`blockchain` / `web3`, `mobile`, `wasm`, `cloud`, `kubernetes` / `k8s`, `systems`,
`formal-methods` / `verification`, `gpu` / `graphics`, and more. Searches `tooling.ecosystems` on each language.

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
3. English fallback, for example `ja-JP` -> `en`.

English, Spanish, Italian, French, German, and Portuguese are supported base locales.
The current Italian, French, German, and Portuguese translations were initially
generated with `translategemma:4b`; translation reviews and corrections are welcome.

Use `detectLanguage` or `detectLanguages` to infer languages from filenames:

```ts
import { detectLanguage, detectLanguages } from "code-languages/detect";

console.log(detectLanguage("src/index.ts")?.slug); // "typescript"
console.log(detectLanguage("Dockerfile")?.slug); // "dockerfile"
console.log(detectLanguages("include/config.h").map((language) => language.slug)); // ["c", "cpp"]
```

Use `detectLanguageSlug` or `detectLanguageSlugs` when you only need the slug
and want to avoid importing the full language catalog:

```ts
import { detectLanguageSlug, detectLanguageSlugs } from "code-languages/detect-slugs";

console.log(detectLanguageSlug("src/index.ts")); // "typescript"
console.log(detectLanguageSlugs("include/config.h")); // ["c", "cpp"]
```

Use `detectProjectLanguages` to summarize a project file list by detected language:

```ts
import { detectProjectLanguages } from "code-languages/detect-slugs";

const files = ["src/index.ts", "src/app.ts", "README.md", "styles/main.css", "LICENSE"];

console.log(detectProjectLanguages(files));
// [
//   { slug: "typescript", files: 2 },
//   { slug: "css", files: 1 },
//   { slug: "markdown", files: 1 }
// ]
```

Use `api.extension(value)` to list every language that registers an extension or exact filename:

```ts
import { api } from "code-languages/api";

api.extension(".h").langs().get().map((language) => language.slug); // ["c", "cpp"]
api.extension("ts").langs().locale("es").get(); // leading dot optional
api.extension("Dockerfile").langs().get(); // exact filename entries work too
await api.extension(".vue").langs().load();
```

Use `detectLanguageByShebang` or `detectLanguageSlugByShebang` to detect extensionless
scripts from their first line:

```ts
import { detectLanguageByShebang } from "code-languages/detect";
import { detectLanguageSlugByShebang } from "code-languages/detect-slugs";

detectLanguageSlugByShebang("#!/bin/bash\necho hi"); // "bash"
detectLanguageSlugByShebang("#!/usr/bin/env python3\nprint(1)"); // "python"
detectLanguageSlugByShebang("#!/usr/bin/env -S deno run --allow-net"); // "typescript"
detectLanguageByShebang("#!/usr/bin/env node\nconsole.log(1)")?.slug; // "javascript"
```

Shebang detection handles direct interpreter paths, `env` indirection with flags, and
versioned interpreters such as `python3.12` or `perl5.36`.

Use `api.search(query)` for ranked lookup across names, slugs, and aliases:

```ts
import { api } from "code-languages/api";

api.search("type").get().map((language) => language.slug); // ["typescript", ...]
api.search("golang").get().at(0)?.slug; // "go" — exact alias match ranks first
api.search("script").locale("es").get(); // ranked + localized
```

Use `api.status(value)` to filter by lifecycle status (`active`, `experimental`,
`legacy`, `historical`; languages without a `status` count as `active`):

```ts
import { api, getStatuses } from "code-languages";

api.status("legacy").langs().get(); // VBScript, ActionScript, ...
api.status("experimental").langs().locale("es").get();
getStatuses(); // ["active", "experimental", "legacy", "historical"]
```

Use `api.related(slug)` to walk the `relations` graph in both directions:

```ts
import { api } from "code-languages/api";

api.related("javascript").langs().get(); // TypeScript, CoffeeScript, Elm, ...
api.related("typescript").langs().get(); // JavaScript
api.related("sql").langs().get(); // T-SQL, PL/SQL, PL/pgSQL, PRQL
```

Filters compose. Every language collection is chainable: call `.category()`, `.paradigm()`, `.runtime()`,
`.packageManager()`, `.ecosystem()`, `.extension()`, `.status()`, or `.related()` on any
`langs()`, `languages()`, `search()`, or `detectAll()` result to intersect filters.
Order does not matter, and `.locale()` can be set at any point in the chain:

```ts
import { api } from "code-languages/api";

// Backend languages that are also functional
api.category("backend").langs().paradigm("functional").get(); // Elixir, Erlang, ...

// Active languages that run on Node.js, localized
api.languages().runtime("node").status("active").locale("es").get();

// Systems languages registering the .h extension
api.category("systems").langs().extension(".h").get(); // C, C++

// Ranked search narrowed by lifecycle status
api.search("script").status("active").get();
```

Collections also offer cheap helpers that skip localization: `.slugs()` returns the
matching catalog slugs, `.count()` the number of matches, and `.first()` the first
match localized (or `undefined` when the collection is empty):

```ts
api.category("backend").langs().paradigm("functional").slugs(); // ["clojure", "elixir", ...]
api.runtime("node").langs().count(); // number of matching languages
api.search("golang").first()?.slug; // "go"
```

## Supported Languages

The catalog currently includes 313 language entries. Each row can be imported directly
from its package subpath.

| Logo | Language | Slug | Extensions | Version | Import |
|---|---|---|---|---|---|
| <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" alt="ABAP logo" width="24" height="24"> | ABAP | `abap` | `.abap` | `ABAP Platform 2025 FPS01` | `code-languages/abap` |
| <img src="https://icons.iconarchive.com/icons/fatcow/farm-fresh/32/page-white-actionscript-icon.png" alt="ActionScript logo" width="24" height="24"> | ActionScript | `actionscript` | `.as` | `3.0` | `code-languages/actionscript` |
| <img src="https://cdn.simpleicons.org/ada/02F88C" alt="Ada logo" width="24" height="24"> | Ada | `ada` | `.adb`, `.ads`, `.ada` | `Ada 2022` | `code-languages/ada` |
| <img src="https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@master/icons/file_type_agda.svg" alt="Agda logo" width="24" height="24"> | Agda | `agda` | `.agda`, `.lagda`, `.lagda.md`, `.lagda.rst`, `.lagda.tex` | `2.8.0` | `code-languages/agda` |
| <img src="https://raw.githubusercontent.com/ElJijuna/code-languages/main/public/assets/placeholders/algol.svg" alt="ALGOL logo" width="24" height="24"> | ALGOL | `algol` | `.alg`, `.algol` | `ALGOL 68` | `code-languages/algol` |
| <img src="https://avatars.githubusercontent.com/u/30268214?v=4" alt="Alloy logo" width="24" height="24"> | Alloy | `alloy` | `.als` | `Alloy 6` | `code-languages/alloy` |
| <img src="https://ampl.com/wp-content/uploads/AMPL-favicon-36x29-1.svg" alt="AMPL logo" width="24" height="24"> | AMPL | `ampl` | `.mod`, `.dat`, `.run` | `stable` | `code-languages/ampl` |
| <img src="https://raw.githubusercontent.com/ElJijuna/code-languages/main/public/assets/placeholders/angelscript.svg" alt="AngelScript logo" width="24" height="24"> | AngelScript | `angelscript` | `.as`, `.angelscript` | `2.36.1` | `code-languages/angelscript` |
| <img src="https://antelang.org/img/apple-touch-icon.png" alt="Ante logo" width="24" height="24"> | Ante | `ante` | `.ante` | `experimental` | `code-languages/ante` |
| <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_antlr.svg" alt="ANTLR Grammar logo" width="24" height="24"> | ANTLR Grammar | `antlr` | `.g4` | `4.13.2` | `code-languages/antlr` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Salesforce.com_logo.svg" alt="Apex logo" width="24" height="24"> | Apex | `apex` | `.cls`, `.trigger` | `API 66.0` | `code-languages/apex` |
| <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_apl.svg" alt="APL logo" width="24" height="24"> | APL | `apl` | `.apl`, `.dyalog` | `ISO/IEC 13751:2001` | `code-languages/apl` |
| <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_applescript.svg" alt="AppleScript logo" width="24" height="24"> | AppleScript | `applescript` | `.applescript`, `.scpt`, `.scptd` | `2.8` | `code-languages/applescript` |
| <img src="https://cdn.simpleicons.org/arangodb/DDE072" alt="AQL logo" width="24" height="24"> | AQL | `aql` | `.aql` | `ArangoDB AQL` | `code-languages/aql` |
| <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_arduino.svg" alt="Arduino Sketch logo" width="24" height="24"> | Arduino Sketch | `arduino` | `.ino`, `.pde` | `Arduino API 1.0` | `code-languages/arduino` |
| <img src="https://cdn.simpleicons.org/asciidoctor/E40046" alt="AsciiDoc logo" width="24" height="24"> | AsciiDoc | `asciidoc` | `.adoc`, `.asciidoc`, `.asc` | `pre-spec` | `code-languages/asciidoc` |
| <img src="https://cdn.simpleicons.org/dotnet/512BD4" alt="ASP/ASPX logo" width="24" height="24"> | ASP/ASPX | `asp` | `.asp`, `.aspx`, `.ascx`, `.ashx`, `.asmx`, `.master` | `4.8.1` | `code-languages/asp` |
| <img src="https://cdn.simpleicons.org/assemblyscript/007AAC" alt="Assembly logo" width="24" height="24"> | Assembly | `assembly` | `.asm`, `.s`, `.S`, `.inc` | `Architecture-specific` | `code-languages/assembly` |
| <img src="https://avatars.githubusercontent.com/u/28916798?v=4" alt="AssemblyScript logo" width="24" height="24"> | AssemblyScript | `assemblyscript` | `.as` | `0.28.19` | `code-languages/assemblyscript` |
| <img src="https://astro.build/assets/press/astro-icon-light.svg" alt="Astro logo" width="24" height="24"> | Astro | `astro` | `.astro` | `7.2.4` | `code-languages/astro` |
| <img src="https://avatars.githubusercontent.com/u/17337956?v=4" alt="Austral logo" width="24" height="24"> | Austral | `austral` | `.aum`, `.aui` | `0.1.0` | `code-languages/austral` |
| <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_autohotkey.svg" alt="AutoHotkey logo" width="24" height="24"> | AutoHotkey | `autohotkey` | `.ahk`, `.ah2` | `2.0` | `code-languages/autohotkey` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Apache_Avro_Logo.svg" alt="Avro IDL logo" width="24" height="24"> | Avro IDL | `avro-idl` | `.avdl` | `1.12.2` | `code-languages/avro-idl` |
| <img src="https://cdn.simpleicons.org/gnu/A42E2B" alt="awk logo" width="24" height="24"> | awk | `awk` | `.awk` | `GNU Awk 5.4.1` | `code-languages/awk` |
| <img src="https://ballerina.io/images/ballerina-logo.svg" alt="Ballerina logo" width="24" height="24"> | Ballerina | `ballerina` | `.bal` | `2201.12.0` | `code-languages/ballerina` |
| <img src="https://bashlogo.com/img/symbol/svg/full_colored_dark.svg" alt="Bash logo" width="24" height="24"> | Bash | `bash` | `.sh`, `.bash`, `.bashrc`, `.bash_profile`, `.bash_login`, `.profile` | `5.3` | `code-languages/bash` |
| <img src="https://avatars.githubusercontent.com/u/5598624?v=4" alt="BASIC logo" width="24" height="24"> | BASIC | `basic` | `.bas`, `.bi`, `.bb` | `FreeBASIC 1.10.1` | `code-languages/basic` |
| <img src="https://icons.iconarchive.com/icons/simpleicons-team/simple/128/windowsterminal-icon.png" alt="Batch logo" width="24" height="24"> | Batch | `batch` | `.bat`, `.cmd` | `Windows Command Processor` | `code-languages/batch` |
| <img src="https://cdn.simpleicons.org/bazel/43A047" alt="Bazel logo" width="24" height="24"> | Bazel | `bazel` | `BUILD.bazel`, `WORKSPACE`, `WORKSPACE.bazel`, `MODULE.bazel` | `9.2.0` | `code-languages/bazel` |
| <img src="https://raw.githubusercontent.com/ElJijuna/code-languages/main/public/assets/placeholders/bcpl.svg" alt="BCPL logo" width="24" height="24"> | BCPL | `bcpl` | `.bcpl` | `Cintsys BCPL` | `code-languages/bcpl` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/9/92/LaTeX_logo.svg" alt="BibTeX logo" width="24" height="24"> | BibTeX | `bibtex` | `.bib`, `.bibtex` | `stable` | `code-languages/bibtex` |
| <img src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/azure-bicep.svg" alt="Bicep logo" width="24" height="24"> | Bicep | `bicep` | `.bicep`, `.bicepparam` | `0.46.1` | `code-languages/bicep` |
| <img src="https://cdn.simpleicons.org/laravel/FF2D20" alt="Blade logo" width="24" height="24"> | Blade | `blade` | `.blade.php` | `Laravel 12.x` | `code-languages/blade` |
| <img src="https://raw.githubusercontent.com/ElJijuna/code-languages/main/public/assets/placeholders/bosque.svg" alt="Bosque logo" width="24" height="24"> | Bosque | `bosque` | `.bsq` | `experimental` | `code-languages/bosque` |
| <img src="https://mlochbaum.github.io/BQN/favicon.ico" alt="BQN logo" width="24" height="24"> | BQN | `bqn` | `.bqn` | `BQN specification` | `code-languages/bqn` |
| <img src="https://raw.githubusercontent.com/ElJijuna/code-languages/main/public/assets/placeholders/brainfuck.svg" alt="Brainfuck logo" width="24" height="24"> | Brainfuck | `brainfuck` | `.bf`, `.b` | `stable` | `code-languages/brainfuck` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" alt="C logo" width="24" height="24"> | C | `c` | `.c`, `.h` | `C23` | `code-languages/c` |
| <img src="https://avatars.githubusercontent.com/u/53541653?v=4" alt="C3 logo" width="24" height="24"> | C3 | `c3` | `.c3`, `.c3i` | `0.7.5` | `code-languages/c3` |
| <img src="https://avatars.githubusercontent.com/u/65030650?v=4" alt="Cairo logo" width="24" height="24"> | Cairo | `cairo` | `.cairo` | `2.19.0` | `code-languages/cairo` |
| <img src="https://capnproto.org/images/logo.png" alt="Cap'n Proto logo" width="24" height="24"> | Cap'n Proto | `capnproto` | `.capnp` | `stable` | `code-languages/capnproto` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Carbon_logo.png" alt="Carbon logo" width="24" height="24"> | Carbon | `carbon` | `.carbon` | `0.0.0 nightly` | `code-languages/carbon` |
| <img src="https://www.gstatic.com/devrel-devsite/prod/v20cdb2337f656fc22df509b6d5402b3836a1b55334a8eea3301423a87970c4d5/cel/images/touchicon-180.png" alt="Common Expression Language logo" width="24" height="24"> | Common Expression Language | `cel` | `.cel` | `0.25.3` | `code-languages/cel` |
| <img src="https://chapel-lang.org/images/chapel-logo.png" alt="Chapel logo" width="24" height="24"> | Chapel | `chapel` | `.chpl` | `2.9.0` | `code-languages/chapel` |
| <img src="https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@master/icons/file_type_circom.svg" alt="Circom logo" width="24" height="24"> | Circom | `circom` | `.circom` | `2.2.3` | `code-languages/circom` |
| <img src="https://avatars.githubusercontent.com/u/66125257?v=4" alt="Clarity logo" width="24" height="24"> | Clarity | `clarity` | `.clar` | `Clarity 3` | `code-languages/clarity` |
| <img src="https://cdn.simpleicons.org/clojure/5881D8" alt="Clojure logo" width="24" height="24"> | Clojure | `clojure` | `.clj`, `.cljs`, `.cljc`, `.edn`, `.bb` | `1.12.5` | `code-languages/clojure` |
| <img src="https://cmake.org/wp-content/uploads/2023/08/CMake-Logo.svg" alt="CMake logo" width="24" height="24"> | CMake | `cmake` | `CMakeLists.txt`, `.cmake` | `4.4.2` | `code-languages/cmake` |
| <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_cobol.svg" alt="COBOL logo" width="24" height="24"> | COBOL | `cobol` | `.cob`, `.cbl`, `.cobol`, `.cpy` | `ISO/IEC 1989:2023` | `code-languages/cobol` |
| <img src="https://cdn.simpleicons.org/coffeescript/2F2625" alt="CoffeeScript logo" width="24" height="24"> | CoffeeScript | `coffeescript` | `.coffee`, `.litcoffee`, `.cson` | `2.7.0` | `code-languages/coffeescript` |
| <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_cf.svg" alt="ColdFusion logo" width="24" height="24"> | ColdFusion | `coldfusion` | `.cfm`, `.cfml`, `.cfc` | `ColdFusion 2025` | `code-languages/coldfusion` |
| <img src="https://avatars.githubusercontent.com/u/621198?v=4" alt="Coq / Rocq logo" width="24" height="24"> | Coq / Rocq | `coq` | `.v` | `9.2.0` | `code-languages/coq` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" alt="C++ logo" width="24" height="24"> | C++ | `cpp` | `.cpp`, `.cc`, `.cxx`, `.h`, `.hpp`, `.hh`, `.hxx` | `C++23` | `code-languages/cpp` |
| <img src="https://cdn.simpleicons.org/apachecassandra/1287B1" alt="CQL logo" width="24" height="24"> | CQL | `cql` | `.cql` | `CQL 3` | `code-languages/cql` |
| <img src="https://cdn.simpleicons.org/crystal/000000" alt="Crystal logo" width="24" height="24"> | Crystal | `crystal` | `.cr` | `1.21.0` | `code-languages/crystal` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg" alt="C# logo" width="24" height="24"> | C# | `csharp` | `.cs`, `.csx` | `14` | `code-languages/csharp` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg" alt="CSS logo" width="24" height="24"> | CSS | `css` | `.css` | `Living Standard` | `code-languages/css` |
| <img src="https://cdn.simpleicons.org/nvidia/76B900" alt="CUDA logo" width="24" height="24"> | CUDA | `cuda` | `.cu`, `.cuh` | `13.4.0` | `code-languages/cuda` |
| <img src="https://avatars.githubusercontent.com/u/43867057?s=200&v=4" alt="CUE logo" width="24" height="24"> | CUE | `cue` | `.cue` | `0.17.1` | `code-languages/cue` |
| <img src="https://www.curry-language.org/assets/img/curry-32x32.png" alt="Curry logo" width="24" height="24"> | Curry | `curry` | `.curry`, `.lcurry` | `Curry 0.9.0` | `code-languages/curry` |
| <img src="https://avatars.githubusercontent.com/u/9947495?v=4" alt="Common Workflow Language logo" width="24" height="24"> | Common Workflow Language | `cwl` | `.cwl` | `v1.2` | `code-languages/cwl` |
| <img src="https://dist.neo4j.com/wp-content/uploads/20210423072428/neo4j-logo-2020-1.svg" alt="Cypher logo" width="24" height="24"> | Cypher | `cypher` | `.cypher`, `.cyp` | `25` | `code-languages/cypher` |
| <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_cython.svg" alt="Cython logo" width="24" height="24"> | Cython | `cython` | `.pyx`, `.pxd`, `.pxi` | `3.3.0` | `code-languages/cython` |
| <img src="https://cdn.simpleicons.org/d/BA595E" alt="D logo" width="24" height="24"> | D | `d` | `.d`, `.di` | `2.112.1` | `code-languages/d` |
| <img src="https://dafny.org/images/dafny-favicon.svg" alt="Dafny logo" width="24" height="24"> | Dafny | `dafny` | `.dfy` | `4.11.0` | `code-languages/dafny` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Dart_programming_language_logo.svg" alt="Dart logo" width="24" height="24"> | Dart | `dart` | `.dart` | `3.13.1` | `code-languages/dart` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" alt="DAX logo" width="24" height="24"> | DAX | `dax` | `.dax` | `DAX 2025` | `code-languages/dax` |
| <img src="https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@master/icons/file_type_dhall.svg" alt="Dhall logo" width="24" height="24"> | Dhall | `dhall` | `.dhall` | `23.1.0` | `code-languages/dhall` |
| <img src="https://avatars.githubusercontent.com/u/20116735?v=4" alt="DITA logo" width="24" height="24"> | DITA | `dita` | `.dita`, `.ditamap`, `.ditaval` | `1.3` | `code-languages/dita` |
| <img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" alt="Dockerfile logo" width="24" height="24"> | Dockerfile | `dockerfile` | `Dockerfile`, `.dockerfile` | `1.10` | `code-languages/dockerfile` |
| <img src="https://graphviz.org/Resources/favicon.png" alt="DOT logo" width="24" height="24"> | DOT | `dot` | `.dot`, `.gv` | `stable` | `code-languages/dot` |
| <img src="https://avatars.githubusercontent.com/u/63060917?v=4" alt="Earthly logo" width="24" height="24"> | Earthly | `earthly` | `Earthfile` | `0.8.16` | `code-languages/earthly` |
| <img src="https://avatars.githubusercontent.com/u/200293856?v=4" alt="EdgeQL logo" width="24" height="24"> | EdgeQL | `edgeql` | `.edgeql` | `Gel 6` | `code-languages/edgeql` |
| <img src="https://editorconfig.org/logo.png" alt="EditorConfig logo" width="24" height="24"> | EditorConfig | `editorconfig` | `.editorconfig` | `stable` | `code-languages/editorconfig` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Eiffel_logo.svg" alt="Eiffel logo" width="24" height="24"> | Eiffel | `eiffel` | `.e` | `24.05` | `code-languages/eiffel` |
| <img src="https://cdn.simpleicons.org/ejs/B4CA65" alt="EJS logo" width="24" height="24"> | EJS | `ejs` | `.ejs` | `3.1.10` | `code-languages/ejs` |
| <img src="https://cdn.simpleicons.org/elixir/4B275F" alt="Elixir logo" width="24" height="24"> | Elixir | `elixir` | `.ex`, `.exs`, `.eex`, `.leex`, `.heex` | `1.20.3` | `code-languages/elixir` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Elm_logo.svg" alt="Elm logo" width="24" height="24"> | Elm | `elm` | `.elm` | `0.19.2` | `code-languages/elm` |
| <img src="https://cdn.simpleicons.org/gnuemacs/7F5AB6" alt="Emacs Lisp logo" width="24" height="24"> | Emacs Lisp | `emacs-lisp` | `.el` | `Emacs 30.1` | `code-languages/emacs-lisp` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Ruby_logo.svg" alt="ERB logo" width="24" height="24"> | ERB | `erb` | `.erb`, `.rhtml`, `.html.erb` | `Ruby stdlib` | `code-languages/erb` |
| <img src="https://cdn.simpleicons.org/erlang/A90533" alt="Erlang logo" width="24" height="24"> | Erlang | `erlang` | `.erl`, `.hrl`, `.app.src`, `.escript`, `.xrl`, `.yrl`, `rebar.config` | `OTP 29.0.5` | `code-languages/erlang` |
| <img src="https://factorcode.org/favicon-96x96.png" alt="Factor logo" width="24" height="24"> | Factor | `factor` | `.factor` | `0.101` | `code-languages/factor` |
| <img src="https://faust.grame.fr/img/faustText.svg" alt="Faust logo" width="24" height="24"> | Faust | `faust` | `.dsp` | `stable` | `code-languages/faust` |
| <img src="https://fe-lang.org/favicon.png" alt="Fe logo" width="24" height="24"> | Fe | `fe` | `.fe` | `experimental` | `code-languages/fe` |
| <img src="https://fennel-lang.org/logo.svg" alt="Fennel logo" width="24" height="24"> | Fennel | `fennel` | `.fnl` | `1.6.1` | `code-languages/fennel` |
| <img src="https://fishshell.com/assets/img/Terminal_Logo2_CRT_Flat.png" alt="Fish logo" width="24" height="24"> | Fish | `fish` | `.fish` | `4.8.1` | `code-languages/fish` |
| <img src="https://flatbuffers.dev/assets/images/favicon.png" alt="FlatBuffers logo" width="24" height="24"> | FlatBuffers | `flatbuffers` | `.fbs` | `25.12.19` | `code-languages/flatbuffers` |
| <img src="https://avatars.githubusercontent.com/u/16831634?v=4" alt="Flix logo" width="24" height="24"> | Flix | `flix` | `.flix` | `0.60.0` | `code-languages/flix` |
| <img src="https://avatars.githubusercontent.com/u/5713248?v=4" alt="Flux logo" width="24" height="24"> | Flux | `flux` | `.flux` | `0.200.0` | `code-languages/flux` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Gforth_Logo.png" alt="Forth logo" width="24" height="24"> | Forth | `forth` | `.fs`, `.fth`, `.forth`, `.4th` | `Forth 2012` | `code-languages/forth` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Fortran_logo.svg" alt="Fortran logo" width="24" height="24"> | Fortran | `fortran` | `.f`, `.for`, `.ftn`, `.f90`, `.f95`, `.f03`, `.f08`, `.f18`, `.f23` | `Fortran 2023` | `code-languages/fortran` |
| <img src="https://cdn.simpleicons.org/facebook/1877F2" alt="FQL logo" width="24" height="24"> | FQL | `fql` | `.fql` | `legacy` | `code-languages/fql` |
| <img src="https://freemarker.apache.org/favicon.png" alt="FreeMarker logo" width="24" height="24"> | FreeMarker | `freemarker` | `.ftl`, `.ftlh`, `.ftlx` | `2.3.34` | `code-languages/freemarker` |
| <img src="https://cdn.simpleicons.org/fsharp/378BBA" alt="F# logo" width="24" height="24"> | F# | `fsharp` | `.fs`, `.fsi`, `.fsx`, `.fsscript` | `10` | `code-languages/fsharp` |
| <img src="https://fstar-lang.org/favicon.ico" alt="F* logo" width="24" height="24"> | F* | `fstar` | `.fst`, `.fsti` | `2026.04.17` | `code-languages/fstar` |
| <img src="https://raw.githubusercontent.com/diku-dk/futhark/master/assets/logo.svg" alt="Futhark logo" width="24" height="24"> | Futhark | `futhark` | `.fut` | `0.25.32` | `code-languages/futhark` |
| <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_gcode.svg" alt="G-code logo" width="24" height="24"> | G-code | `gcode` | `.gcode`, `.gco`, `.nc`, `.cnc`, `.tap` | `RS-274` | `code-languages/gcode` |
| <img src="https://cdn.simpleicons.org/godotengine/478CBF" alt="GDScript logo" width="24" height="24"> | GDScript | `gdscript` | `.gd` | `4.7` | `code-languages/gdscript` |
| <img src="https://cdn.simpleicons.org/gnu/A42E2B" alt="Gettext logo" width="24" height="24"> | Gettext | `gettext` | `.po`, `.pot` | `stable` | `code-languages/gettext` |
| <img src="https://cdn.simpleicons.org/git/F05032" alt="Git logo" width="24" height="24"> | Git | `git` | `.git`, `.gitignore`, `.gitattributes`, `.gitmodules`, `.gitkeep` | `2.55.0` | `code-languages/git` |
| <img src="https://cdn.simpleicons.org/gleam/FFAFF3" alt="Gleam logo" width="24" height="24"> | Gleam | `gleam` | `.gleam` | `1.18.1` | `code-languages/gleam` |
| <img src="https://cdn.simpleicons.org/opengl/5586A4" alt="GLSL logo" width="24" height="24"> | GLSL | `glsl` | `.glsl`, `.vert`, `.frag`, `.geom`, `.tesc`, `.tese`, `.comp`, `.vs`, `.fs` | `4.60` | `code-languages/glsl` |
| <img src="https://cdn.simpleicons.org/gamemaker/000000" alt="GML logo" width="24" height="24"> | GML | `gml` | `.gml` | `2024.13.0` | `code-languages/gml` |
| <img src="https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg" alt="Go logo" width="24" height="24"> | Go | `go` | `.go` | `1.27.0` | `code-languages/go` |
| <img src="https://cdn.simpleicons.org/gradle/02303A" alt="Gradle logo" width="24" height="24"> | Gradle | `gradle` | `.gradle`, `.gradle.kts` | `9.7.1` | `code-languages/gradle` |
| <img src="https://avatars.githubusercontent.com/u/54953488?v=4" alt="Grain logo" width="24" height="24"> | Grain | `grain` | `.gr` | `grain-v0.7.2` | `code-languages/grain` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg" alt="GraphQL logo" width="24" height="24"> | GraphQL | `graphql` | `.graphql`, `.gql`, `.graphqls` | `September 2025` | `code-languages/graphql` |
| <img src="https://cdn.simpleicons.org/apache/6B7280" alt="Gremlin logo" width="24" height="24"> | Gremlin | `gremlin` | `.gremlin`, `.grem` | `stable` | `code-languages/gremlin` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/Groovy-logo.svg" alt="Groovy logo" width="24" height="24"> | Groovy | `groovy` | `.groovy`, `.gvy`, `.gy`, `.gsh` | `5.1.0` | `code-languages/groovy` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Hack_%28programming_language%29_logo.svg" alt="Hack logo" width="24" height="24"> | Hack | `hack` | `.hack`, `.hh`, `.hhi` | `HHVM 4.x` | `code-languages/hack` |
| <img src="https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@master/icons/file_type_haml.svg" alt="Haml logo" width="24" height="24"> | Haml | `haml` | `.haml` | `7.4.1` | `code-languages/haml` |
| <img src="https://cdn.simpleicons.org/handlebarsdotjs/000000" alt="Handlebars logo" width="24" height="24"> | Handlebars | `handlebars` | `.hbs`, `.handlebars` | `4.7.9` | `code-languages/handlebars` |
| <img src="https://harelang.org/mascot.png" alt="Hare logo" width="24" height="24"> | Hare | `hare` | `.ha` | `0.25.1` | `code-languages/hare` |
| <img src="https://cdn.simpleicons.org/haskell/5D4F85" alt="Haskell logo" width="24" height="24"> | Haskell | `haskell` | `.hs`, `.lhs`, `.hsc`, `.hs-boot`, `.hsig`, `.cabal` | `GHC 9.14.1` | `code-languages/haskell` |
| <img src="https://cdn.simpleicons.org/haxe/EA8220" alt="Haxe logo" width="24" height="24"> | Haxe | `haxe` | `.hx`, `.hxml` | `4.3.7` | `code-languages/haxe` |
| <img src="https://cdn.simpleicons.org/hashicorp/844FBA" alt="HCL logo" width="24" height="24"> | HCL | `hcl` | `.hcl`, `.tf`, `.tfvars`, `.pkr.hcl`, `.nomad` | `2.24.0` | `code-languages/hcl` |
| <img src="https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@master/icons/file_type_hlsl.svg" alt="HLSL logo" width="24" height="24"> | HLSL | `hlsl` | `.hlsl`, `.fx`, `.fxh`, `.hlsli` | `Shader Model 6.9` | `code-languages/hlsl` |
| <img src="https://raw.githubusercontent.com/ElJijuna/code-languages/main/public/assets/placeholders/hocon.svg" alt="HOCON logo" width="24" height="24"> | HOCON | `hocon` | `.hocon` | `1.4.3` | `code-languages/hocon` |
| <img src="https://www.w3.org/html/logo/downloads/HTML5_Badge.svg" alt="HTML logo" width="24" height="24"> | HTML | `html` | `.html`, `.htm` | `Living Standard` | `code-languages/html` |
| <img src="https://avatars.githubusercontent.com/u/10551643?v=4" alt="Hy logo" width="24" height="24"> | Hy | `hy` | `.hy` | `1.0.0` | `code-languages/hy` |
| <img src="https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@master/icons/file_type_idris.svg" alt="Idris logo" width="24" height="24"> | Idris | `idris` | `.idr`, `.lidr`, `.ipkg` | `0.8.0` | `code-languages/idris` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Configure.svg" alt="INI logo" width="24" height="24"> | INI | `ini` | `.ini` | `Informal format` | `code-languages/ini` |
| <img src="https://use.ink/img/favicon.png" alt="Ink! logo" width="24" height="24"> | Ink! | `ink` | `.ink` | `Ink! 6` | `code-languages/ink` |
| <img src="https://avatars.githubusercontent.com/u/1987090?v=4" alt="Ink logo" width="24" height="24"> | Ink | `ink-narrative` | `.ink` | `1.2.0` | `code-languages/ink-narrative` |
| <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_io.svg" alt="Io logo" width="24" height="24"> | Io | `io` | `.io` | `2017.09.06` | `code-languages/io` |
| <img src="https://isabelle.in.tum.de/img/favicon.ico" alt="Isabelle logo" width="24" height="24"> | Isabelle | `isabelle` | `.thy` | `Isabelle2025-2` | `code-languages/isabelle` |
| <img src="https://avatars.githubusercontent.com/u/583748?v=4" alt="J logo" width="24" height="24"> | J | `j` | `.ijs` | `J9.6` | `code-languages/j` |
| <img src="https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@master/icons/file_type_janet.svg" alt="Janet logo" width="24" height="24"> | Janet | `janet` | `.janet`, `.jdn` | `1.41.2` | `code-languages/janet` |
| <img src="https://www.vectorlogo.zone/logos/java/java-icon.svg" alt="Java logo" width="24" height="24"> | Java | `java` | `.java` | `26` | `code-languages/java` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript logo" width="24" height="24"> | JavaScript | `javascript` | `.js`, `.mjs`, `.cjs`, `.jsx` | `ECMAScript 2025` | `code-languages/javascript` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="JCL logo" width="24" height="24"> | JCL | `jcl` | `.jcl` | `z/OS 3.1` | `code-languages/jcl` |
| <img src="https://cdn.simpleicons.org/jinja/B41717" alt="Jinja logo" width="24" height="24"> | Jinja | `jinja` | `.jinja`, `.jinja2`, `.j2` | `3.1.6` | `code-languages/jinja` |
| <img src="https://jmespath.org/_static/img/logo.png" alt="JMESPath logo" width="24" height="24"> | JMESPath | `jmespath` | `.jmespath`, `.jp` | `stable` | `code-languages/jmespath` |
| <img src="https://avatars.githubusercontent.com/u/125535133?v=4" alt="jq logo" width="24" height="24"> | jq | `jq` | `.jq` | `1.8.1` | `code-languages/jq` |
| <img src="https://www.json.org/img/json160.gif" alt="JSON logo" width="24" height="24"> | JSON | `json` | `.json` | `RFC 8259` | `code-languages/json` |
| <img src="https://json5.dev/favicon.svg" alt="JSON5 logo" width="24" height="24"> | JSON5 | `json5` | `.json5` | `2.2.3` | `code-languages/json5` |
| <img src="https://jsonata.org/images/jsonata-button.png" alt="JSONata logo" width="24" height="24"> | JSONata | `jsonata` | `.jsonata` | `stable` | `code-languages/jsonata` |
| <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_json.svg" alt="JSONC logo" width="24" height="24"> | JSONC | `jsonc` | `.jsonc`, `.code-workspace` | `JSON with Comments` | `code-languages/jsonc` |
| <img src="https://jsonnet.org/img/isologo.svg" alt="Jsonnet logo" width="24" height="24"> | Jsonnet | `jsonnet` | `.jsonnet`, `.libsonnet` | `0.22.0` | `code-languages/jsonnet` |
| <img src="https://cdn.simpleicons.org/julia/9558B2" alt="Julia logo" width="24" height="24"> | Julia | `julia` | `.jl` | `1.12.6` | `code-languages/julia` |
| <img src="https://cdn.simpleicons.org/jupyter/F37626" alt="Jupyter Notebook logo" width="24" height="24"> | Jupyter Notebook | `jupyter-notebook` | `.ipynb` | `nbformat 4.5` | `code-languages/jupyter-notebook` |
| <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_just.svg" alt="Just logo" width="24" height="24"> | Just | `just` | `justfile`, `Justfile`, `.just` | `1.55.1` | `code-languages/just` |
| <img src="https://avatars.githubusercontent.com/u/121281745?v=4" alt="KCL logo" width="24" height="24"> | KCL | `kcl` | `.k`, `.kcl` | `0.11.2` | `code-languages/kcl` |
| <img src="https://kdl.dev/assets/apple-touch-icon-DYakp7eY.png" alt="KDL logo" width="24" height="24"> | KDL | `kdl` | `.kdl` | `2.0.0` | `code-languages/kdl` |
| <img src="https://koka-lang.github.io/koka/doc/images/koka-logo-filled.png" alt="Koka logo" width="24" height="24"> | Koka | `koka` | `.kk` | `3.2.2` | `code-languages/koka` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png" alt="Kotlin logo" width="24" height="24"> | Kotlin | `kotlin` | `.kt`, `.kts` | `2.4.10` | `code-languages/kotlin` |
| <img src="https://learn.microsoft.com/favicon.ico" alt="KQL logo" width="24" height="24"> | KQL | `kql` | `.kql` | `stable` | `code-languages/kql` |
| <img src="https://cdn.simpleicons.org/leanpub/262425" alt="Lean logo" width="24" height="24"> | Lean | `lean` | `.lean` | `4.33.1` | `code-languages/lean` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LESS_Logo.svg" alt="Less logo" width="24" height="24"> | Less | `less` | `.less` | `4.9.0` | `code-languages/less` |
| <img src="https://raw.githubusercontent.com/ElJijuna/code-languages/main/public/assets/placeholders/lex.svg" alt="Lex logo" width="24" height="24"> | Lex | `lex` | `.l`, `.lex` | `POSIX lex / flex 2.6.4` | `code-languages/lex` |
| <img src="https://ligolang.org/img/logo/logo.png" alt="Ligo logo" width="24" height="24"> | Ligo | `ligo` | `.ligo`, `.mligo`, `.religo`, `.jsligo` | `1.x` | `code-languages/ligo` |
| <img src="https://cdn.simpleicons.org/gnu/A42E2B" alt="Linker Script logo" width="24" height="24"> | Linker Script | `linkerscript` | `.ld`, `.lds`, `.x` | `stable` | `code-languages/linkerscript` |
| <img src="https://cdn.simpleicons.org/shopify/7AB55C" alt="Liquid logo" width="24" height="24"> | Liquid | `liquid` | `.liquid` | `10.29.0` | `code-languages/liquid` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Lisp_logo.svg" alt="Lisp logo" width="24" height="24"> | Lisp | `lisp` | `.lisp`, `.lsp`, `.cl`, `.asd` | `ANSI INCITS 226-1994` | `code-languages/lisp` |
| <img src="https://cdn.simpleicons.org/llvm/262D3A" alt="LLVM IR logo" width="24" height="24"> | LLVM IR | `llvm-ir` | `.ll`, `.bc` | `22.1.8` | `code-languages/llvm-ir` |
| <img src="https://raw.githubusercontent.com/aardappel/lobster/master/docs/lobster.png" alt="Lobster logo" width="24" height="24"> | Lobster | `lobster` | `.lobster` | `development snapshot` | `code-languages/lobster` |
| <img src="https://people.eecs.berkeley.edu/~bh/ucblogo.png" alt="Logo logo" width="24" height="24"> | Logo | `logo` | `.logo`, `.lgo` | `UCBLogo 6.2` | `code-languages/logo` |
| <img src="https://www.lua.org/images/lua-logo.gif" alt="Lua logo" width="24" height="24"> | Lua | `lua` | `.lua`, `.rockspec` | `5.5.1` | `code-languages/lua` |
| <img src="https://cdn.simpleicons.org/roblox/000000" alt="Luau logo" width="24" height="24"> | Luau | `luau` | `.luau` | `0.734` | `code-languages/luau` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Heckert_gnu.small.png" alt="Makefile logo" width="24" height="24"> | Makefile | `makefile` | `Makefile`, `makefile`, `GNUmakefile`, `.mk`, `.mak` | `4.4.1` | `code-languages/makefile` |
| <img src="https://cdn.simpleicons.org/python/3776AB" alt="Mako logo" width="24" height="24"> | Mako | `mako` | `.mako`, `.mao` | `1.3.10` | `code-languages/mako` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg" alt="Markdown logo" width="24" height="24"> | Markdown | `markdown` | `.md`, `.markdown`, `.mdown`, `.mkd` | `CommonMark 4.0` | `code-languages/markdown` |
| <img src="https://marlowe.iohk.io/marlowe-footer-logo-large-dark-mode.svg" alt="Marlowe logo" width="24" height="24"> | Marlowe | `marlowe` | `.marlowe` | `Marlowe Runtime` | `code-languages/marlowe` |
| <img src="https://cdn.simpleicons.org/wolfram/DD1100" alt="Wolfram Language logo" width="24" height="24"> | Wolfram Language | `mathematica` | `.wl`, `.wls`, `.nb` | `14.3` | `code-languages/mathematica` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Matlab_Logo.png" alt="MATLAB logo" width="24" height="24"> | MATLAB | `matlab` | `.m`, `.mlx` | `R2026a` | `code-languages/matlab` |
| <img src="https://maxima.sourceforge.io/img/maxima.svg" alt="Maxima logo" width="24" height="24"> | Maxima | `maxima` | `.mac`, `.wxm` | `5.50.0` | `code-languages/maxima` |
| <img src="https://cdn.simpleicons.org/mdx/1B1F24" alt="MDX logo" width="24" height="24"> | MDX | `mdx` | `.mdx` | `3.1.1` | `code-languages/mdx` |
| <img src="https://www.mercurylang.org/favicon.ico" alt="Mercury logo" width="24" height="24"> | Mercury | `mercury` | `.m` | `22.01.8` | `code-languages/mercury` |
| <img src="https://cdn.simpleicons.org/mermaid/FF3670" alt="Mermaid logo" width="24" height="24"> | Mermaid | `mermaid` | `.mmd`, `.mermaid` | `11.17.0` | `code-languages/mermaid` |
| <img src="https://raw.githubusercontent.com/mesonbuild/meson/master/graphics/meson_logo.svg" alt="Meson logo" width="24" height="24"> | Meson | `meson` | `meson.build`, `meson_options.txt`, `meson.options`, `.wrap` | `1.12.0` | `code-languages/meson` |
| <img src="https://developer.apple.com/assets/elements/icons/metal/metal-256x256_2x.png" alt="Metal logo" width="24" height="24"> | Metal | `metal` | `.metal` | `Metal 4` | `code-languages/metal` |
| <img src="https://avatars.githubusercontent.com/u/3727943?v=4" alt="Modelica logo" width="24" height="24"> | Modelica | `modelica` | `.mo` | `3.6.1` | `code-languages/modelica` |
| <img src="https://raw.githubusercontent.com/ElJijuna/code-languages/main/public/assets/placeholders/modula-2.svg" alt="Modula-2 logo" width="24" height="24"> | Modula-2 | `modula-2` | `.mod`, `.def` | `ISO/IEC 10514-1:1996` | `code-languages/modula-2` |
| <img src="https://avatars.githubusercontent.com/u/107116314?v=4" alt="Mojo logo" width="24" height="24"> | Mojo | `mojo` | `.mojo` | `0.26.1` | `code-languages/mojo` |
| <img src="https://avatars.githubusercontent.com/u/124476259?v=4" alt="MoonBit logo" width="24" height="24"> | MoonBit | `moonbit` | `.mbt` | `0.9.2` | `code-languages/moonbit` |
| <img src="https://avatars.githubusercontent.com/u/108696678?v=4" alt="Move logo" width="24" height="24"> | Move | `move` | `.move` | `2.0.0` | `code-languages/move` |
| <img src="https://avatars.githubusercontent.com/u/1506671?v=4" alt="MUMPS logo" width="24" height="24"> | MUMPS | `mumps` | `.mac`, `.int`, `.ro`, `.mro` | `InterSystems IRIS 2025.1` | `code-languages/mumps` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Mustache-js-logo.png" alt="Mustache logo" width="24" height="24"> | Mustache | `mustache` | `.mustache`, `.mst` | `1.0` | `code-languages/mustache` |
| <img src="https://cdn.simpleicons.org/couchbase/EA2328" alt="N1QL logo" width="24" height="24"> | N1QL | `n1ql` | `.n1ql` | `stable` | `code-languages/n1ql` |
| <img src="https://avatars.githubusercontent.com/u/6698688?v=4" alt="Nextflow logo" width="24" height="24"> | Nextflow | `nextflow` | `.nf` | `26.04.4` | `code-languages/nextflow` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg" alt="nginx logo" width="24" height="24"> | nginx | `nginx` | `nginx.conf`, `.nginx`, `.conf` | `1.30.4` | `code-languages/nginx` |
| <img src="https://avatars.githubusercontent.com/u/83021462?v=4" alt="Nickel logo" width="24" height="24"> | Nickel | `nickel` | `.ncl` | `1.17.0` | `code-languages/nickel` |
| <img src="https://cdn.simpleicons.org/nim/FFE953" alt="Nim logo" width="24" height="24"> | Nim | `nim` | `.nim`, `.nims`, `.nimble` | `2.2.10` | `code-languages/nim` |
| <img src="https://cdn.simpleicons.org/nixos/5277C3" alt="Nix logo" width="24" height="24"> | Nix | `nix` | `.nix` | `2.35.2` | `code-languages/nix` |
| <img src="https://avatars.githubusercontent.com/u/72610319?v=4" alt="Noir logo" width="24" height="24"> | Noir | `noir` | `.nr` | `1.0.0-beta` | `code-languages/noir` |
| <img src="https://cdn.simpleicons.org/nunjucks/1C4A1C" alt="Nunjucks logo" width="24" height="24"> | Nunjucks | `nunjucks` | `.njk`, `.nunjucks` | `3.2.4` | `code-languages/nunjucks` |
| <img src="https://cdn.simpleicons.org/nushell/3AA675" alt="Nushell logo" width="24" height="24"> | Nushell | `nushell` | `.nu` | `0.115.0` | `code-languages/nushell` |
| <img src="https://raw.githubusercontent.com/ElJijuna/code-languages/main/public/assets/placeholders/oberon.svg" alt="Oberon logo" width="24" height="24"> | Oberon | `oberon` | `.ob`, `.mod` | `Oberon-2` | `code-languages/oberon` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Apple_logo_grey.svg" alt="Objective-C logo" width="24" height="24"> | Objective-C | `objective-c` | `.m`, `.mm` | `2.0` | `code-languages/objective-c` |
| <img src="https://cdn.simpleicons.org/ocaml/EC6813" alt="OCaml logo" width="24" height="24"> | OCaml | `ocaml` | `.ml`, `.mli`, `.mll`, `.mly`, `.mlt`, `.eliom`, `.eliomi` | `5.6.0` | `code-languages/ocaml` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Gnu-octave-logo.svg" alt="Octave logo" width="24" height="24"> | Octave | `octave` | `.m`, `.octave` | `9.3.0` | `code-languages/octave` |
| <img src="https://avatars.githubusercontent.com/u/12533910?v=4" alt="Odin logo" width="24" height="24"> | Odin | `odin` | `.odin` | `dev-2026-02` | `code-languages/odin` |
| <img src="https://cdn.simpleicons.org/openapiinitiative/6BA539" alt="OpenAPI logo" width="24" height="24"> | OpenAPI | `openapi` | `.openapi.json`, `.openapi.yaml`, `.openapi.yml` | `3.2.0` | `code-languages/openapi` |
| <img src="https://cdn.simpleicons.org/khronosgroup/CC3333" alt="OpenCL C logo" width="24" height="24"> | OpenCL C | `opencl` | `.cl`, `.clh` | `OpenCL C 3.0` | `code-languages/opencl` |
| <img src="https://avatars.githubusercontent.com/u/1864477?v=4" alt="OpenSCAD logo" width="24" height="24"> | OpenSCAD | `openscad` | `.scad` | `2021.01` | `code-languages/openscad` |
| <img src="https://orgmode.org/resources/img/org-mode-unicorn.svg" alt="Org-mode logo" width="24" height="24"> | Org-mode | `org` | `.org` | `9.8` | `code-languages/org` |
| <img src="https://cdn.simpleicons.org/lazarus/000000" alt="Pascal logo" width="24" height="24"> | Pascal | `pascal` | `.pas`, `.pp`, `.inc`, `.lpr`, `.dpr`, `.dfm` | `3.2.2` | `code-languages/pascal` |
| <img src="https://cdn.simpleicons.org/perl/39457E" alt="Perl logo" width="24" height="24"> | Perl | `perl` | `.pl`, `.pm`, `.pod`, `.t`, `.psgi` | `5.44.0` | `code-languages/perl` |
| <img src="https://www.php.net/images/logos/new-php-logo.svg" alt="PHP logo" width="24" height="24"> | PHP | `php` | `.php`, `.phtml`, `.php3`, `.php4`, `.php5`, `.phps` | `8.5.9` | `code-languages/php` |
| <img src="https://cdn.simpleicons.org/tradingview/131722" alt="Pine Script logo" width="24" height="24"> | Pine Script | `pine-script` | `.pine` | `v6` | `code-languages/pine-script` |
| <img src="https://avatars.githubusercontent.com/u/10639145?v=4" alt="Pkl logo" width="24" height="24"> | Pkl | `pkl` | `.pkl` | `0.31.1` | `code-languages/pkl` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="PL/I logo" width="24" height="24"> | PL/I | `pl-i` | `.pli`, `.pl1` | `Enterprise PL/I 6.2` | `code-languages/pl-i` |
| <img src="https://plantuml.com/logo3.png" alt="PlantUML logo" width="24" height="24"> | PlantUML | `plantuml` | `.puml`, `.plantuml`, `.iuml` | `1.2026.6` | `code-languages/plantuml` |
| <img src="https://cdn.simpleicons.org/postgresql/4169E1" alt="PL/pgSQL logo" width="24" height="24"> | PL/pgSQL | `plpgsql` | `.pgsql`, `.plpgsql` | `stable` | `code-languages/plpgsql` |
| <img src="https://github.com/oracle.png" alt="Oracle PL/SQL logo" width="24" height="24"> | Oracle PL/SQL | `plsql` | `.pls`, `.pks`, `.pkb`, `.plsql` | `Oracle Database 26ai` | `code-languages/plsql` |
| <img src="https://cdn.simpleicons.org/perl/39457E" alt="Plain Old Documentation logo" width="24" height="24"> | Plain Old Documentation | `pod` | `.pod` | `Perl 5.44.0` | `code-languages/pod` |
| <img src="https://avatars.githubusercontent.com/u/14593805?v=4" alt="Pony logo" width="24" height="24"> | Pony | `pony` | `.pony` | `0.61.1` | `code-languages/pony` |
| <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_postscript.svg" alt="PostScript logo" width="24" height="24"> | PostScript | `postscript` | `.ps`, `.eps` | `PostScript 3` | `code-languages/postscript` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" alt="Power Query M logo" width="24" height="24"> | Power Query M | `powerquery` | `.pq`, `.pqm` | `Power Query M 2025` | `code-languages/powerquery` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/PowerShell_5.0_icon.png" alt="PowerShell logo" width="24" height="24"> | PowerShell | `powershell` | `.ps1`, `.psm1`, `.psd1`, `.ps1xml` | `7.6.5` | `code-languages/powershell` |
| <img src="https://cdn.simpleicons.org/processingfoundation/006699" alt="Processing logo" width="24" height="24"> | Processing | `processing` | `.pde` | `4.4.5` | `code-languages/processing` |
| <img src="https://www.swi-prolog.org/icons/swipl.png" alt="Prolog logo" width="24" height="24"> | Prolog | `prolog` | `.pl`, `.pro`, `.prolog`, `.P` | `SWI-Prolog 10.0` | `code-languages/prolog` |
| <img src="https://cdn.simpleicons.org/prometheus/E6522C" alt="PromQL logo" width="24" height="24"> | PromQL | `promql` | `.promql` | `Prometheus 3.x` | `code-languages/promql` |
| <img src="https://cdn.simpleicons.org/openjdk/437291" alt="Java Properties logo" width="24" height="24"> | Java Properties | `properties` | `.properties` | `stable` | `code-languages/properties` |
| <img src="https://cdn.simpleicons.org/google/4285F4" alt="Protocol Buffers logo" width="24" height="24"> | Protocol Buffers | `protobuf` | `.proto` | `36.0` | `code-languages/protobuf` |
| <img src="https://avatars.githubusercontent.com/u/102252800?v=4" alt="PRQL logo" width="24" height="24"> | PRQL | `prql` | `.prql` | `0.13.0` | `code-languages/prql` |
| <img src="https://cdn.simpleicons.org/pug/A86454" alt="Pug logo" width="24" height="24"> | Pug | `pug` | `.pug`, `.jade` | `3.0.4` | `code-languages/pug` |
| <img src="https://cdn.simpleicons.org/puppet/FFAE1A" alt="Puppet logo" width="24" height="24"> | Puppet | `puppet` | `.pp`, `.epp` | `Puppet 8` | `code-languages/puppet` |
| <img src="https://cdn.simpleicons.org/purescript/14161A" alt="PureScript logo" width="24" height="24"> | PureScript | `purescript` | `.purs` | `0.15.16` | `code-languages/purescript` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Python-logo-notext.svg" alt="Python logo" width="24" height="24"> | Python | `python` | `.py`, `.pyw` | `3.14.7` | `code-languages/python` |
| <img src="https://avatars.githubusercontent.com/u/11446750?v=4" alt="q / kdb+ logo" width="24" height="24"> | q / kdb+ | `q` | `.q`, `.k` | `q 4.1` | `code-languages/q` |
| <img src="https://d33sqmjvzgs8hq.cloudfront.net/wp-content/themes/oneqt/assets/images/favicon-32x32.png" alt="qmake logo" width="24" height="24"> | qmake | `qmake` | `.pri`, `.prf` | `stable` | `code-languages/qmake` |
| <img src="https://cdn.simpleicons.org/qt/41CD52" alt="QML logo" width="24" height="24"> | QML | `qml` | `.qml`, `.qmltypes`, `.qmlproject` | `Qt 6.11.1` | `code-languages/qml` |
| <img src="https://github.com/microsoft.png" alt="Q# logo" width="24" height="24"> | Q# | `qsharp` | `.qs` | `Q# 1.0` | `code-languages/qsharp` |
| <img src="https://www.r-project.org/logo/Rlogo.svg" alt="R logo" width="24" height="24"> | R | `r` | `.r`, `.R`, `.rmd`, `.Rmd`, `.qmd`, `.Rprofile` | `4.6.1` | `code-languages/r` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Racket-logo.svg" alt="Racket logo" width="24" height="24"> | Racket | `racket` | `.rkt`, `.rktd`, `.rktl`, `.scrbl` | `9.3` | `code-languages/racket` |
| <img src="https://github.com/Raku.png" alt="Raku logo" width="24" height="24"> | Raku | `raku` | `.raku`, `.rakumod`, `.rakudoc`, `.rakutest`, `.p6`, `.pm6` | `6.d` | `code-languages/raku` |
| <img src="https://cdn.simpleicons.org/dotnet/512BD4" alt="Razor logo" width="24" height="24"> | Razor | `razor` | `.cshtml`, `.razor` | `10.0.11` | `code-languages/razor` |
| <img src="https://cdn.simpleicons.org/reason/DD4B39" alt="ReasonML logo" width="24" height="24"> | ReasonML | `reasonml` | `.re`, `.rei` | `3.13.0` | `code-languages/reasonml` |
| <img src="https://www.rebol.com/graphics/reb-logo.gif" alt="Rebol logo" width="24" height="24"> | Rebol | `rebol` | `.r`, `.reb`, `.rebol` | `Rebol 3` | `code-languages/rebol` |
| <img src="https://static.red-lang.org/red-logo.svg" alt="Red logo" width="24" height="24"> | Red | `red` | `.red`, `.reds` | `0.6.6` | `code-languages/red` |
| <img src="https://raw.githubusercontent.com/open-policy-agent/opa/main/logo/logo.svg" alt="Rego logo" width="24" height="24"> | Rego | `rego` | `.rego` | `OPA 1.19.1` | `code-languages/rego` |
| <img src="https://avatars.githubusercontent.com/u/1900740?v=4" alt="Ren'Py logo" width="24" height="24"> | Ren'Py | `renpy` | `.rpy`, `.rpym` | `8.3.7` | `code-languages/renpy` |
| <img src="https://cdn.simpleicons.org/rescript/E6484A" alt="ReScript logo" width="24" height="24"> | ReScript | `rescript` | `.res`, `.resi` | `12.3.0` | `code-languages/rescript` |
| <img src="https://cdn.simpleicons.org/readthedocs/8CA1AF" alt="reStructuredText logo" width="24" height="24"> | reStructuredText | `restructuredtext` | `.rst`, `.rest` | `Docutils 0.22.2` | `code-languages/restructuredtext` |
| <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_rexx.svg" alt="REXX logo" width="24" height="24"> | REXX | `rexx` | `.rexx`, `.rex` | `ANSI X3.274-1996` | `code-languages/rexx` |
| <img src="https://avatars.githubusercontent.com/u/96867701?v=4" alt="Roc logo" width="24" height="24"> | Roc | `roc` | `.roc` | `development snapshot` | `code-languages/roc` |
| <img src="https://avatars.githubusercontent.com/u/733939?v=4" alt="RPG logo" width="24" height="24"> | RPG | `rpg` | `.rpg`, `.rpgle`, `.sqlrpgle`, `.clle`, `.dspf` | `RPG IV Free-Form (IBM i 7.5)` | `code-languages/rpg` |
| <img src="https://www.ruby-lang.org/images/header-ruby-logo.png" alt="Ruby logo" width="24" height="24"> | Ruby | `ruby` | `.rb`, `.rbw`, `.rake`, `.gemspec`, `Gemfile`, `Rakefile`, `config.ru` | `4.0.6` | `code-languages/ruby` |
| <img src="https://www.rust-lang.org/logos/rust-logo-512x512.png" alt="Rust logo" width="24" height="24"> | Rust | `rust` | `.rs` | `1.98.0` | `code-languages/rust` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/1/10/SAS_logo_horiz.svg" alt="SAS logo" width="24" height="24"> | SAS | `sas` | `.sas` | `SAS 9.4` | `code-languages/sas` |
| <img src="https://cdn.simpleicons.org/scala/DC322F" alt="Scala logo" width="24" height="24"> | Scala | `scala` | `.scala`, `.sc` | `3.8.4` | `code-languages/scala` |
| <img src="https://cdn.simpleicons.org/racket/9F1D20" alt="Scheme logo" width="24" height="24"> | Scheme | `scheme` | `.scm`, `.ss`, `.sld`, `.sls` | `R7RS small` | `code-languages/scheme` |
| <img src="https://sass-lang.com/assets/img/logos/logo.svg" alt="Sass logo" width="24" height="24"> | Sass | `scss` | `.scss`, `.sass` | `1.103.1` | `code-languages/scss` |
| <img src="https://selflanguage.org/img/self-logo.png" alt="Self logo" width="24" height="24"> | Self | `self` | `.self` | `2024.1` | `code-languages/self` |
| <img src="https://raw.githubusercontent.com/ElJijuna/code-languages/main/public/assets/placeholders/simula.svg" alt="Simula logo" width="24" height="24"> | Simula | `simula` | `.sim`, `.simula` | `Simula 67` | `code-languages/simula` |
| <img src="https://avatars.githubusercontent.com/u/29205606?v=4" alt="Slang logo" width="24" height="24"> | Slang | `slang` | `.slang` | `stable` | `code-languages/slang` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Smalltalk_Balloon.svg" alt="Smalltalk logo" width="24" height="24"> | Smalltalk | `smalltalk` | `.st` | `ANSI INCITS 319-1998` | `code-languages/smalltalk` |
| <img src="https://www.smarty.net/images/logo_print.gif" alt="Smarty logo" width="24" height="24"> | Smarty | `smarty` | `.tpl`, `.smarty` | `5.5.1` | `code-languages/smarty` |
| <img src="https://avatars.githubusercontent.com/u/133827778?v=4" alt="Smithy logo" width="24" height="24"> | Smithy | `smithy` | `.smithy` | `IDL 2.0` | `code-languages/smithy` |
| <img src="https://avatars.githubusercontent.com/u/33450111?v=4" alt="Snakemake logo" width="24" height="24"> | Snakemake | `snakemake` | `.smk`, `Snakefile` | `9.23.1` | `code-languages/snakemake` |
| <img src="https://raw.githubusercontent.com/ElJijuna/code-languages/main/public/assets/placeholders/snobol.svg" alt="SNOBOL logo" width="24" height="24"> | SNOBOL | `snobol` | `.sno`, `.snobol` | `SNOBOL4` | `code-languages/snobol` |
| <img src="https://cdn.simpleicons.org/solidity/363636" alt="Solidity logo" width="24" height="24"> | Solidity | `solidity` | `.sol` | `0.8.36` | `code-languages/solidity` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Salesforce.com_logo.svg" alt="SOQL logo" width="24" height="24"> | SOQL | `soql` | `.soql` | `stable` | `code-languages/soql` |
| <img src="https://avatars.githubusercontent.com/u/7767877?v=4" alt="SPARK logo" width="24" height="24"> | SPARK | `spark` | `.spark`, `.adb`, `.ads` | `SPARK Community 2021` | `code-languages/spark` |
| <img src="https://www.w3.org/RDF/icons/rdf_flyer.svg" alt="SPARQL logo" width="24" height="24"> | SPARQL | `sparql` | `.sparql`, `.rq` | `1.1` | `code-languages/sparql` |
| <img src="https://cdn.simpleicons.org/splunk/000000" alt="SPL logo" width="24" height="24"> | SPL | `spl` | `.spl` | `stable` | `code-languages/spl` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/e/ea/SPSS_logo.svg" alt="SPSS logo" width="24" height="24"> | SPSS | `spss` | `.sps`, `.spss` | `29.0` | `code-languages/spss` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" alt="SQL logo" width="24" height="24"> | SQL | `sql` | `.sql` | `SQL:2023` | `code-languages/sql` |
| <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_squirrel.svg" alt="Squirrel logo" width="24" height="24"> | Squirrel | `squirrel` | `.nut` | `3.2` | `code-languages/squirrel` |
| <img src="https://avatars.githubusercontent.com/u/62883579?v=4" alt="Standard ML logo" width="24" height="24"> | Standard ML | `standard-ml` | `.sml`, `.sig`, `.fun` | `The Definition 1997` | `code-languages/standard-ml` |
| <img src="https://cdn.simpleicons.org/bazel/43A047" alt="Starlark logo" width="24" height="24"> | Starlark | `starlark` | `.bzl`, `.star`, `.sky` | `Bazel Starlark` | `code-languages/starlark` |
| <img src="https://www.stata.com/includes/images/stata-logo-blue.svg" alt="Stata logo" width="24" height="24"> | Stata | `stata` | `.do`, `.ado`, `.mata` | `19` | `code-languages/stata` |
| <img src="https://cdn.simpleicons.org/stylus/333333" alt="Stylus logo" width="24" height="24"> | Stylus | `stylus` | `.styl` | `0.64.0` | `code-languages/stylus` |
| <img src="https://avatars.githubusercontent.com/u/1706741?v=4" alt="SuperCollider logo" width="24" height="24"> | SuperCollider | `supercollider` | `.scd`, `.sc` | `3.13.0` | `code-languages/supercollider` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" alt="Svelte logo" width="24" height="24"> | Svelte | `svelte` | `.svelte` | `5.56.10` | `code-languages/svelte` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/SVG_Logo.svg" alt="SVG logo" width="24" height="24"> | SVG | `svg` | `.svg`, `.svgz` | `SVG 2` | `code-languages/svg` |
| <img src="https://cdn.simpleicons.org/subversion/809CC9" alt="SVN logo" width="24" height="24"> | SVN | `svn` | `.svn`, `svnserve.conf` | `1.14.5` | `code-languages/svn` |
| <img src="https://avatars.githubusercontent.com/u/55993183?v=4" alt="Sway logo" width="24" height="24"> | Sway | `sway` | `.sw` | `0.69.0` | `code-languages/sway` |
| <img src="https://www.swift.org/assets/images/swift.svg" alt="Swift logo" width="24" height="24"> | Swift | `swift` | `.swift` | `6.3.3` | `code-languages/swift` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Tcl.svg" alt="Tcl/Tk logo" width="24" height="24"> | Tcl/Tk | `tcl` | `.tcl`, `.tm`, `.test` | `9.0.4` | `code-languages/tcl` |
| <img src="https://raw.githubusercontent.com/ElJijuna/code-languages/main/public/assets/placeholders/tcsh.svg" alt="Tcsh logo" width="24" height="24"> | Tcsh | `tcsh` | `.tcsh`, `.csh`, `.tcshrc`, `.cshrc` | `6.24.16` | `code-languages/tcsh` |
| <img src="https://cdn.simpleicons.org/latex/008080" alt="TeX logo" width="24" height="24"> | TeX | `tex` | `.tex`, `.sty`, `.cls`, `.dtx`, `.ins`, `.ltx` | `TeX Live 2026` | `code-languages/tex` |
| <img src="https://textile-lang.com/icon.svg" alt="Textile logo" width="24" height="24"> | Textile | `textile` | `.textile` | `4.1.4` | `code-languages/textile` |
| <img src="https://cdn.simpleicons.org/apache/D22128" alt="Apache Thrift logo" width="24" height="24"> | Apache Thrift | `thrift` | `.thrift` | `0.23.0` | `code-languages/thrift` |
| <img src="https://avatars.githubusercontent.com/u/315978?v=4" alt="TLA+ logo" width="24" height="24"> | TLA+ | `tla-plus` | `.tla` | `TLA+ 2` | `code-languages/tla-plus` |
| <img src="https://cdn.simpleicons.org/toml/9C4221" alt="TOML logo" width="24" height="24"> | TOML | `toml` | `.toml` | `1.1.0` | `code-languages/toml` |
| <img src="https://cdn.simpleicons.org/gnu/A42E2B" alt="Troff/Groff logo" width="24" height="24"> | Troff/Groff | `troff` | `.roff`, `.troff`, `.man`, `.me`, `.ms` | `GNU groff 1.24.1` | `code-languages/troff` |
| <img src="https://icons.iconarchive.com/icons/simpleicons-team/simple/128/microsoft-sqlserver-icon.png" alt="T-SQL logo" width="24" height="24"> | T-SQL | `tsql` | `.sql`, `.tsql` | `SQL Server 2025 (17.x)` | `code-languages/tsql` |
| <img src="https://avatars.githubusercontent.com/u/2966890?v=4" alt="Twee/Twine logo" width="24" height="24"> | Twee/Twine | `twee` | `.tw`, `.twee`, `.tw2` | `2.10.0` | `code-languages/twee` |
| <img src="https://twig.symfony.com/images/logo.png" alt="Twig logo" width="24" height="24"> | Twig | `twig` | `.twig` | `3.28.0` | `code-languages/twig` |
| <img src="https://www.typescriptlang.org/icons/icon-512x512.png" alt="TypeScript logo" width="24" height="24"> | TypeScript | `typescript` | `.ts`, `.tsx`, `.mts`, `.cts` | `7.0` | `code-languages/typescript` |
| <img src="https://raw.githubusercontent.com/ElJijuna/code-languages/main/public/assets/placeholders/typespec.svg" alt="TypeSpec logo" width="24" height="24"> | TypeSpec | `typespec` | `.tsp` | `1.0` | `code-languages/typespec` |
| <img src="https://cdn.simpleicons.org/typst/239DAD" alt="Typst logo" width="24" height="24"> | Typst | `typst` | `.typ` | `0.15.1` | `code-languages/typst` |
| <img src="https://avatars.githubusercontent.com/u/18563978?v=4" alt="Unison logo" width="24" height="24"> | Unison | `unison` | `.u`, `.uu` | `0.5.28` | `code-languages/unison` |
| <img src="https://cdn.simpleicons.org/v/5D87BF" alt="V logo" width="24" height="24"> | V | `v` | `.v`, `.vsh` | `weekly.2025.49` | `code-languages/v` |
| <img src="https://cdn.simpleicons.org/gnome/4A86CF" alt="Vala logo" width="24" height="24"> | Vala | `vala` | `.vala`, `.vapi` | `0.56.18` | `code-languages/vala` |
| <img src="https://avatars.githubusercontent.com/u/67560249?v=4" alt="Vale logo" width="24" height="24"> | Vale | `vale` | `.vale` | `experimental` | `code-languages/vale` |
| <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_vba.svg" alt="VBA logo" width="24" height="24"> | VBA | `vba` | `.bas`, `.cls`, `.frm`, `.vba` | `VBA 7.1` | `code-languages/vba` |
| <img src="https://raw.githubusercontent.com/ElJijuna/code-languages/main/public/assets/placeholders/vbscript.svg" alt="VBScript logo" width="24" height="24"> | VBScript | `vbscript` | `.vbs`, `.vbe` | `5.8` | `code-languages/vbscript` |
| <img src="https://velocity.apache.org/engine/devel/images/velocity-logo.png" alt="Apache Velocity logo" width="24" height="24"> | Apache Velocity | `velocity` | `.vm`, `.vtl` | `2.4.1` | `code-languages/velocity` |
| <img src="https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@master/icons/file_type_verilog.svg" alt="Verilog/SystemVerilog logo" width="24" height="24"> | Verilog/SystemVerilog | `verilog` | `.v`, `.vh`, `.sv`, `.svh` | `IEEE 1800-2023` | `code-languages/verilog` |
| <img src="https://cdn.simpleicons.org/epicgames" alt="Verse logo" width="24" height="24"> | Verse | `verse` | `.verse` | `UEFN Verse` | `code-languages/verse` |
| <img src="https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@master/icons/file_type_vhdl.svg" alt="VHDL logo" width="24" height="24"> | VHDL | `vhdl` | `.vhd`, `.vhdl` | `IEEE 1076-2019` | `code-languages/vhdl` |
| <img src="https://cdn.simpleicons.org/vim/019733" alt="Vim script logo" width="24" height="24"> | Vim script | `vimscript` | `.vim`, `.vimrc`, `.gvimrc` | `Vim 9.1` | `code-languages/vimscript` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/VB.NET_Logo.svg" alt="Visual Basic logo" width="24" height="24"> | Visual Basic | `visual-basic` | `.vb` | `17.13` | `code-languages/visual-basic` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Vue logo" width="24" height="24"> | Vue | `vue` | `.vue` | `3.5.41` | `code-languages/vue` |
| <img src="https://avatars.githubusercontent.com/u/37288461?v=4" alt="Vyper logo" width="24" height="24"> | Vyper | `vyper` | `.vy` | `0.4.3` | `code-languages/vyper` |
| <img src="https://avatars.githubusercontent.com/u/23492081?v=4" alt="WDL logo" width="24" height="24"> | WDL | `wdl` | `.wdl` | `1.2.0` | `code-languages/wdl` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/1/1f/WebAssembly_Logo.svg" alt="WebAssembly logo" width="24" height="24"> | WebAssembly | `webassembly` | `.wasm`, `.wat` | `3.0` | `code-languages/webassembly` |
| <img src="https://cdn.simpleicons.org/webgpu/005A9C" alt="WGSL logo" width="24" height="24"> | WGSL | `wgsl` | `.wgsl` | `Candidate Recommendation Draft 2026-05-07` | `code-languages/wgsl` |
| <img src="https://avatars.githubusercontent.com/u/8763410?v=4" alt="Wren logo" width="24" height="24"> | Wren | `wren` | `.wren` | `0.4.0` | `code-languages/wren` |
| <img src="https://cdn.simpleicons.org/dotnet/512BD4" alt="XAML logo" width="24" height="24"> | XAML | `xaml` | `.xaml`, `.baml` | `Platform-specific` | `code-languages/xaml` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/6/68/XML.svg" alt="XML logo" width="24" height="24"> | XML | `xml` | `.xml`, `.xsd`, `.xsl`, `.xslt` | `XML 1.0 Fifth Edition` | `code-languages/xml` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/6/68/XML.svg" alt="XPath logo" width="24" height="24"> | XPath | `xpath` | `.xpath`, `.xpth` | `XPath 3.1` | `code-languages/xpath` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/6/68/XML.svg" alt="XQuery logo" width="24" height="24"> | XQuery | `xquery` | `.xq`, `.xql`, `.xqm`, `.xquery`, `.xqy` | `XQuery 3.1` | `code-languages/xquery` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/6/68/XML.svg" alt="XSLT logo" width="24" height="24"> | XSLT | `xslt` | `.xsl`, `.xslt` | `XSLT 3.0` | `code-languages/xslt` |
| <img src="https://cdn.simpleicons.org/gnu/A42E2B" alt="Yacc logo" width="24" height="24"> | Yacc | `yacc` | `.y`, `.yacc` | `POSIX yacc / Bison 3.8.2` | `code-languages/yacc` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Official_YAML_Logo.svg" alt="YAML logo" width="24" height="24"> | YAML | `yaml` | `.yaml`, `.yml` | `1.2.2` | `code-languages/yaml` |
| <img src="https://avatars.githubusercontent.com/u/6306898?v=4" alt="YARA logo" width="24" height="24"> | YARA | `yara` | `.yar`, `.yara` | `4.5.5` | `code-languages/yara` |
| <img src="https://avatars.githubusercontent.com/u/10666805?v=4" alt="Zeek logo" width="24" height="24"> | Zeek | `zeek` | `.zeek`, `.bro` | `8.0.8` | `code-languages/zeek` |
| <img src="https://cdn.simpleicons.org/zig/F7A41D" alt="Zig logo" width="24" height="24"> | Zig | `zig` | `.zig`, `.zon` | `0.16.0` | `code-languages/zig` |
| <img src="https://avatars.githubusercontent.com/u/1642052?v=4" alt="Ziggy logo" width="24" height="24"> | Ziggy | `ziggy` | `.ziggy`, `.ziggy-schema` | `0.1.0` | `code-languages/ziggy` |
| <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Z_Shell_Logo_Color_Horizontal.svg" alt="zsh logo" width="24" height="24"> | zsh | `zsh` | `.zsh`, `.zshrc`, `.zshenv`, `.zprofile`, `.zlogin`, `.zlogout`, `.zsh-theme` | `5.9.2` | `code-languages/zsh` |

## Development

```bash
npm ci
npm run check
npm run build
```

Common scripts:

| Script | Purpose |
|---|---|
| `npm run format` | Format and auto-fix with Biome |
| `npm run format:check` | Check formatting with Biome (read-only) |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint with auto-fix |
| `npm run typecheck` | Run TypeScript without emitting files |
| `npm test` | Run Vitest |
| `npm run bench` | Run manual performance benchmarks |
| `npm run build` | Build ESM, CommonJS, and declaration files |
| `npm run check` | Run format:check, lint, typecheck, and tests |
| `npm run check:language-versions -- --language typescript` | Check release metadata for one language |
| `npm run website:prepare` | Build the static website data, unit test summary, and benchmark summary |
| `npm run website:serve` | Preview the static website locally |

## Website

The static website lives in [`docs`](docs) and is generated from the package build.
It includes a live filename detector, localized language lookup, the full language
catalog, unit test summary, and benchmark summary.

```bash
npm run website:prepare
npm run website:serve
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for setup instructions, field rules, and the process for adding a new language.

## License

MIT
