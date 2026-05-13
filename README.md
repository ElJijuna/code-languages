# code-languages

[![npm version](https://img.shields.io/npm/v/code-languages.svg)](https://www.npmjs.com/package/code-languages)
[![CI](https://github.com/ElJijuna/code-languages/actions/workflows/ci.yml/badge.svg)](https://github.com/ElJijuna/code-languages/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-ready-3178c6.svg)](https://www.typescriptlang.org)
[![Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen.svg)](package.json)

Structured metadata for programming languages, packaged as a typed, tree-shakeable TypeScript library.

`code-languages` is useful when you need a small source of truth for language names, slugs, file extensions, release metadata, websites, paradigms, and logos in developer tools, docs sites, learning platforms, or editor-like interfaces. It currently includes metadata for 58 languages.

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
import { abap } from "code-languages/abap";
import { asp } from "code-languages/asp";
import { astro } from "code-languages/astro";
import { assembly } from "code-languages/assembly";
import { bash } from "code-languages/bash";
import { batch } from "code-languages/batch";
import { c } from "code-languages/c";
import { cmake } from "code-languages/cmake";
import { coffeescript } from "code-languages/coffeescript";
import { cobol } from "code-languages/cobol";
import { cpp } from "code-languages/cpp";
import { csharp } from "code-languages/csharp";
import { css } from "code-languages/css";
import { cuda } from "code-languages/cuda";
import { dart } from "code-languages/dart";
import { dockerfile } from "code-languages/dockerfile";
import { fsharp } from "code-languages/fsharp";
import { git } from "code-languages/git";
import { gradle } from "code-languages/gradle";
import { graphql } from "code-languages/graphql";
import { groovy } from "code-languages/groovy";
import { javascript } from "code-languages/javascript";
import { java } from "code-languages/java";
import { html } from "code-languages/html";
import { julia } from "code-languages/julia";
import { kotlin } from "code-languages/kotlin";
import { less } from "code-languages/less";
import { lua } from "code-languages/lua";
import { makefile } from "code-languages/makefile";
import { matlab } from "code-languages/matlab";
import { markdown } from "code-languages/markdown";
import { nginx } from "code-languages/nginx";
import { objectiveC } from "code-languages/objective-c";
import { pascal } from "code-languages/pascal";
import { php } from "code-languages/php";
import { powershell } from "code-languages/powershell";
import { pug } from "code-languages/pug";
import { python } from "code-languages/python";
import { r } from "code-languages/r";
import { ruby } from "code-languages/ruby";
import { scala } from "code-languages/scala";
import { scss } from "code-languages/scss";
import { json } from "code-languages/json";
import { sql } from "code-languages/sql";
import { svg } from "code-languages/svg";
import { svelte } from "code-languages/svelte";
import { swift } from "code-languages/swift";
import { toml } from "code-languages/toml";
import { visualBasic } from "code-languages/visual-basic";
import { vue } from "code-languages/vue";
import { webassembly } from "code-languages/webassembly";
import { xml } from "code-languages/xml";
import { yaml } from "code-languages/yaml";
import { zig } from "code-languages/zig";
import { zsh } from "code-languages/zsh";

console.log(abap.version);
console.log(asp.extensions);
console.log(astro.version);
console.log(assembly.extensions);
console.log(bash.version);
console.log(batch.extensions);
console.log(c.extensions);
console.log(cmake.extensions);
console.log(coffeescript.version);
console.log(cpp.i18n.en.name);
console.log(csharp.website);
console.log(css.paradigms);
console.log(cuda.version);
console.log(dockerfile.i18n.en.name);
console.log(fsharp.version);
console.log(git.extensions);
console.log(gradle.extensions);
console.log(graphql.version);
console.log(groovy.version);
console.log(javascript.website);
console.log(java.version);
console.log(html.extensions);
console.log(julia.version);
console.log(kotlin.version);
console.log(less.extensions);
console.log(lua.version);
console.log(makefile.extensions);
console.log(matlab.version);
console.log(markdown.website);
console.log(nginx.version);
console.log(objectiveC.version);
console.log(pascal.version);
console.log(php.version);
console.log(powershell.extensions);
console.log(pug.version);
console.log(python.publishedDate);
console.log(r.version);
console.log(ruby.website);
console.log(scala.version);
console.log(scss.extensions);
console.log(json.i18n.en.description);
console.log(sql.i18n.en.name);
console.log(svg.extensions);
console.log(svelte.version);
console.log(swift.version);
console.log(toml.version);
console.log(visualBasic.i18n.en.name);
console.log(vue.website);
console.log(webassembly.extensions);
console.log(xml.extensions);
console.log(yaml.version);
console.log(zig.version);
console.log(zsh.extensions);
```

Import from the package root when bundle size is not a concern:

```ts
import {
  abap,
  asp,
  astro,
  assembly,
  bash,
  c,
  cmake,
  coffeescript,
  cpp,
  csharp,
  css,
  cuda,
  detectLanguage,
  detectLanguages,
  dockerfile,
  fsharp,
  go,
  graphql,
  groovy,
  html,
  java,
  json,
  julia,
  kotlin,
  less,
  lua,
  makefile,
  matlab,
  localizeLanguage,
  markdown,
  nginx,
  objectiveC,
  pascal,
  php,
  powershell,
  pug,
  rust,
  r,
  ruby,
  scala,
  scss,
  sql,
  svg,
  svelte,
  swift,
  toml,
  typescript,
  visualBasic,
  vue,
  webassembly,
  xml,
  yaml,
  zig,
  zsh,
} from "code-languages";

console.log(localizeLanguage(abap).description);
console.log(localizeLanguage(asp, "es").description);
console.log(localizeLanguage(astro, "es").description);
console.log(localizeLanguage(assembly).description);
console.log(detectLanguage("src/index.ts")?.slug);
console.log(detectLanguages("include/config.h").map((language) => language.slug));
console.log(localizeLanguage(bash, "es").description);
console.log(c.version);
console.log(localizeLanguage(cmake).description);
console.log(localizeLanguage(coffeescript).name);
console.log(cpp.website);
console.log(localizeLanguage(csharp).description);
console.log(localizeLanguage(css).name);
console.log(localizeLanguage(cuda, "es").description);
console.log(dockerfile.website);
console.log(localizeLanguage(fsharp, "es").description);
console.log(localizeLanguage(graphql, "es").description);
console.log(localizeLanguage(groovy).description);
console.log(localizeLanguage(java).name);
console.log(html.website);
console.log(localizeLanguage(julia, "es").description);
console.log(localizeLanguage(kotlin, "es-PE").description);
console.log(localizeLanguage(less, "es").name);
console.log(localizeLanguage(lua, "es").description);
console.log(localizeLanguage(makefile).description);
console.log(localizeLanguage(matlab, "es").description);
console.log(markdown.extensions);
console.log(localizeLanguage(nginx, "es").description);
console.log(objectiveC.extensions);
console.log(localizeLanguage(pascal, "es").description);
console.log(localizeLanguage(php, "es").description);
console.log(localizeLanguage(powershell).name);
console.log(localizeLanguage(pug, "es").description);
console.log(go.logo);
console.log(localizeLanguage(r, "es").description);
console.log(localizeLanguage(ruby, "es").description);
console.log(localizeLanguage(scala, "es").description);
console.log(localizeLanguage(scss).name);
console.log(json.website);
console.log(sql.extensions);
console.log(localizeLanguage(svg, "es").description);
console.log(localizeLanguage(svelte).name);
console.log(swift.i18n.en.description);
console.log(localizeLanguage(toml, "es").description);
console.log(localizeLanguage(visualBasic, "es").description);
console.log(localizeLanguage(vue, "es").description);
console.log(localizeLanguage(webassembly).name);
console.log(localizeLanguage(xml, "es").name);
console.log(yaml.paradigms);
console.log(localizeLanguage(zig, "es").description);
console.log(zsh.version);
```

## API

Every language object satisfies the `Language` interface:

```ts
export type Locale = "en" | "es" | `en-${string}` | `es-${string}` | string;

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

`get()` reads from the bundled in-memory catalog. `load()` uses explicit dynamic
imports so bundlers can lazy-load individual language modules when the consumer
build supports code splitting.

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
| <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" alt="ABAP logo" width="24" height="24"> | ABAP | `abap` | `.abap` | `ABAP Platform 2025 FPS01` | `code-languages/abap` |
| <img src="https://cdn.simpleicons.org/dotnet/512BD4" alt="ASP/ASPX logo" width="24" height="24"> | ASP/ASPX | `asp` | `.asp`, `.aspx`, `.ascx`, `.ashx`, `.asmx`, `.master` | `4.8.1` | `code-languages/asp` |
| <img src="https://astro.build/assets/press/astro-icon-light.svg" alt="Astro logo" width="24" height="24"> | Astro | `astro` | `.astro` | `6.3.1` | `code-languages/astro` |
| <img src="https://cdn.simpleicons.org/assemblyscript/007AAC" alt="Assembly logo" width="24" height="24"> | Assembly | `assembly` | `.asm`, `.s`, `.S`, `.inc` | `Architecture-specific` | `code-languages/assembly` |
| <img src="https://bashlogo.com/img/symbol/svg/full_colored_dark.svg" alt="Bash logo" width="24" height="24"> | Bash | `bash` | `.sh`, `.bash`, `.bashrc`, `.bash_profile`, `.bash_login`, `.profile` | `5.3` | `code-languages/bash` |
| <img src="https://icons.iconarchive.com/icons/simpleicons-team/simple/128/windowsterminal-icon.png" alt="Batch logo" width="24" height="24"> | Batch | `batch` | `.bat`, `.cmd` | `Windows Command Processor` | `code-languages/batch` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" alt="C logo" width="24" height="24"> | C | `c` | `.c`, `.h` | `C23` | `code-languages/c` |
| <img src="https://cmake.org/wp-content/uploads/2023/08/CMake-Logo.svg" alt="CMake logo" width="24" height="24"> | CMake | `cmake` | `CMakeLists.txt`, `.cmake` | `4.3.2` | `code-languages/cmake` |
| <img src="https://cdn.simpleicons.org/coffeescript/2F2625" alt="CoffeeScript logo" width="24" height="24"> | CoffeeScript | `coffeescript` | `.coffee`, `.litcoffee`, `.cson` | `2.7.0` | `code-languages/coffeescript` |
| <img src="https://logo.svgcdn.com/devicon/cobol-original.png" alt="COBOL logo" width="24" height="24"> | COBOL | `cobol` | `.cob`, `.cbl`, `.cobol`, `.cpy` | `ISO/IEC 1989:2023` | `code-languages/cobol` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" alt="C++ logo" width="24" height="24"> | C++ | `cpp` | `.cpp`, `.cc`, `.cxx`, `.h`, `.hpp`, `.hh`, `.hxx` | `C++23` | `code-languages/cpp` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg" alt="C# logo" width="24" height="24"> | C# | `csharp` | `.cs`, `.csx` | `14` | `code-languages/csharp` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg" alt="CSS logo" width="24" height="24"> | CSS | `css` | `.css` | `Living Standard` | `code-languages/css` |
| <img src="https://cdn.simpleicons.org/nvidia/76B900" alt="CUDA logo" width="24" height="24"> | CUDA | `cuda` | `.cu`, `.cuh` | `13.2.1` | `code-languages/cuda` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Dart_programming_language_logo.svg" alt="Dart logo" width="24" height="24"> | Dart | `dart` | `.dart` | `3.11.6` | `code-languages/dart` |
| <img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" alt="Dockerfile logo" width="24" height="24"> | Dockerfile | `dockerfile` | `Dockerfile`, `.dockerfile` | `1.10` | `code-languages/dockerfile` |
| <img src="https://cdn.simpleicons.org/fsharp/378BBA" alt="F# logo" width="24" height="24"> | F# | `fsharp` | `.fs`, `.fsi`, `.fsx`, `.fsscript` | `10` | `code-languages/fsharp` |
| <img src="https://cdn.simpleicons.org/git/F05032" alt="Git logo" width="24" height="24"> | Git | `git` | `.git`, `.gitignore`, `.gitattributes`, `.gitmodules`, `.gitkeep` | `2.54.0` | `code-languages/git` |
| <img src="https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg" alt="Go logo" width="24" height="24"> | Go | `go` | `.go` | `1.26.3` | `code-languages/go` |
| <img src="https://cdn.simpleicons.org/gradle/02303A" alt="Gradle logo" width="24" height="24"> | Gradle | `gradle` | `.gradle`, `.gradle.kts` | `9.5.1` | `code-languages/gradle` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg" alt="GraphQL logo" width="24" height="24"> | GraphQL | `graphql` | `.graphql`, `.gql`, `.graphqls` | `September 2025` | `code-languages/graphql` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/Groovy-logo.svg" alt="Groovy logo" width="24" height="24"> | Groovy | `groovy` | `.groovy`, `.gvy`, `.gy`, `.gsh` | `5.0.5` | `code-languages/groovy` |
| <img src="https://www.w3.org/html/logo/downloads/HTML5_Badge.svg" alt="HTML logo" width="24" height="24"> | HTML | `html` | `.html`, `.htm` | `Living Standard` | `code-languages/html` |
| <img src="https://www.vectorlogo.zone/logos/java/java-icon.svg" alt="Java logo" width="24" height="24"> | Java | `java` | `.java` | `26` | `code-languages/java` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript logo" width="24" height="24"> | JavaScript | `javascript` | `.js`, `.mjs`, `.cjs`, `.jsx` | `ECMAScript 2025` | `code-languages/javascript` |
| <img src="https://www.json.org/img/json160.gif" alt="JSON logo" width="24" height="24"> | JSON | `json` | `.json` | `RFC 8259` | `code-languages/json` |
| <img src="https://cdn.simpleicons.org/julia/9558B2" alt="Julia logo" width="24" height="24"> | Julia | `julia` | `.jl` | `1.12.6` | `code-languages/julia` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png" alt="Kotlin logo" width="24" height="24"> | Kotlin | `kotlin` | `.kt`, `.kts` | `2.3.20` | `code-languages/kotlin` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LESS_Logo.svg" alt="Less logo" width="24" height="24"> | Less | `less` | `.less` | `4.4.1` | `code-languages/less` |
| <img src="https://www.lua.org/images/lua-logo.gif" alt="Lua logo" width="24" height="24"> | Lua | `lua` | `.lua`, `.rockspec` | `5.5.0` | `code-languages/lua` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Heckert_gnu.small.png" alt="Makefile logo" width="24" height="24"> | Makefile | `makefile` | `Makefile`, `makefile`, `GNUmakefile`, `.mk`, `.mak` | `4.4.1` | `code-languages/makefile` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Matlab_Logo.png" alt="MATLAB logo" width="24" height="24"> | MATLAB | `matlab` | `.m`, `.mlx` | `R2026a` | `code-languages/matlab` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg" alt="Markdown logo" width="24" height="24"> | Markdown | `markdown` | `.md`, `.markdown`, `.mdown`, `.mkd` | `CommonMark 0.31.2` | `code-languages/markdown` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg" alt="nginx logo" width="24" height="24"> | nginx | `nginx` | `nginx.conf`, `.nginx`, `.conf` | `1.30.0` | `code-languages/nginx` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Apple_logo_grey.svg" alt="Objective-C logo" width="24" height="24"> | Objective-C | `objective-c` | `.m`, `.mm` | `2.0` | `code-languages/objective-c` |
| <img src="https://cdn.simpleicons.org/lazarus/000000" alt="Pascal logo" width="24" height="24"> | Pascal | `pascal` | `.pas`, `.pp`, `.inc`, `.lpr`, `.dpr`, `.dfm` | `3.2.2` | `code-languages/pascal` |
| <img src="https://www.php.net/images/logos/new-php-logo.svg" alt="PHP logo" width="24" height="24"> | PHP | `php` | `.php`, `.phtml`, `.php3`, `.php4`, `.php5`, `.phps` | `8.5.6` | `code-languages/php` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/PowerShell_5.0_icon.png" alt="PowerShell logo" width="24" height="24"> | PowerShell | `powershell` | `.ps1`, `.psm1`, `.psd1`, `.ps1xml` | `7.6.1` | `code-languages/powershell` |
| <img src="https://cdn.simpleicons.org/pug/A86454" alt="Pug logo" width="24" height="24"> | Pug | `pug` | `.pug`, `.jade` | `3.0.3` | `code-languages/pug` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Python-logo-notext.svg" alt="Python logo" width="24" height="24"> | Python | `python` | `.py`, `.pyw` | `3.14.4` | `code-languages/python` |
| <img src="https://www.r-project.org/logo/Rlogo.svg" alt="R logo" width="24" height="24"> | R | `r` | `.r`, `.R`, `.rmd`, `.Rmd`, `.qmd`, `.Rprofile` | `4.6.0` | `code-languages/r` |
| <img src="https://www.ruby-lang.org/images/header-ruby-logo.png" alt="Ruby logo" width="24" height="24"> | Ruby | `ruby` | `.rb`, `.rbw`, `.rake`, `.gemspec`, `Gemfile`, `Rakefile`, `config.ru` | `4.0.3` | `code-languages/ruby` |
| <img src="https://www.rust-lang.org/logos/rust-logo-512x512.png" alt="Rust logo" width="24" height="24"> | Rust | `rust` | `.rs` | `1.95.0` | `code-languages/rust` |
| <img src="https://cdn.simpleicons.org/scala/DC322F" alt="Scala logo" width="24" height="24"> | Scala | `scala` | `.scala`, `.sc` | `3.7.4` | `code-languages/scala` |
| <img src="https://sass-lang.com/assets/img/logos/logo.svg" alt="Sass logo" width="24" height="24"> | Sass | `scss` | `.scss`, `.sass` | `1.99.0` | `code-languages/scss` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" alt="SQL logo" width="24" height="24"> | SQL | `sql` | `.sql` | `SQL:2023` | `code-languages/sql` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/SVG_Logo.svg" alt="SVG logo" width="24" height="24"> | SVG | `svg` | `.svg`, `.svgz` | `SVG 2` | `code-languages/svg` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" alt="Svelte logo" width="24" height="24"> | Svelte | `svelte` | `.svelte` | `5.55.5` | `code-languages/svelte` |
| <img src="https://www.swift.org/assets/images/swift.svg" alt="Swift logo" width="24" height="24"> | Swift | `swift` | `.swift` | `6.2.2` | `code-languages/swift` |
| <img src="https://cdn.simpleicons.org/toml/9C4221" alt="TOML logo" width="24" height="24"> | TOML | `toml` | `.toml` | `1.0.0` | `code-languages/toml` |
| <img src="https://www.typescriptlang.org/icons/icon-512x512.png" alt="TypeScript logo" width="24" height="24"> | TypeScript | `typescript` | `.ts`, `.tsx`, `.mts`, `.cts` | `6.0` | `code-languages/typescript` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/VB.NET_Logo.svg" alt="Visual Basic logo" width="24" height="24"> | Visual Basic | `visual-basic` | `.vb` | `17.13` | `code-languages/visual-basic` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Vue logo" width="24" height="24"> | Vue | `vue` | `.vue` | `3.5.34` | `code-languages/vue` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/1/1f/WebAssembly_Logo.svg" alt="WebAssembly logo" width="24" height="24"> | WebAssembly | `webassembly` | `.wasm`, `.wat` | `3.0` | `code-languages/webassembly` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/6/68/XML.svg" alt="XML logo" width="24" height="24"> | XML | `xml` | `.xml`, `.xsd`, `.xsl`, `.xslt` | `XML 1.0 Fifth Edition` | `code-languages/xml` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Official_YAML_Logo.svg" alt="YAML logo" width="24" height="24"> | YAML | `yaml` | `.yaml`, `.yml` | `1.2.2` | `code-languages/yaml` |
| <img src="https://cdn.simpleicons.org/zig/F7A41D" alt="Zig logo" width="24" height="24"> | Zig | `zig` | `.zig`, `.zon` | `0.16.0` | `code-languages/zig` |
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
