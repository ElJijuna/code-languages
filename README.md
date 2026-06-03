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
- Localized content in English, Spanish, Italian, and French
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
`jupyter-notebook`.

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

## Supported Languages

The catalog currently includes 203 language entries. Each row can be imported directly
from its package subpath.

| Logo | Language | Slug | Extensions | Version | Import |
|---|---|---|---|---|---|
| <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" alt="ABAP logo" width="24" height="24"> | ABAP | `abap` | `.abap` | `ABAP Platform 2025 FPS01` | `code-languages/abap` |
| <img src="https://icons.iconarchive.com/icons/fatcow/farm-fresh/32/page-white-actionscript-icon.png" alt="ActionScript logo" width="24" height="24"> | ActionScript | `actionscript` | `.as` | `3.0` | `code-languages/actionscript` |
| <img src="https://cdn.simpleicons.org/ada/02F88C" alt="Ada logo" width="24" height="24"> | Ada | `ada` | `.adb`, `.ads`, `.ada` | `Ada 2022` | `code-languages/ada` |
| <img src="https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@master/icons/file_type_agda.svg" alt="Agda logo" width="24" height="24"> | Agda | `agda` | `.agda`, `.lagda`, `.lagda.md`, `.lagda.rst`, `.lagda.tex` | `2.8.0` | `code-languages/agda` |
| <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_antlr.svg" alt="ANTLR Grammar logo" width="24" height="24"> | ANTLR Grammar | `antlr` | `.g4` | `4.13.2` | `code-languages/antlr` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Salesforce.com_logo.svg" alt="Apex logo" width="24" height="24"> | Apex | `apex` | `.cls`, `.trigger` | `API 66.0` | `code-languages/apex` |
| <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_apl.svg" alt="APL logo" width="24" height="24"> | APL | `apl` | `.apl`, `.dyalog` | `ISO/IEC 13751:2001` | `code-languages/apl` |
| <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_applescript.svg" alt="AppleScript logo" width="24" height="24"> | AppleScript | `applescript` | `.applescript`, `.scpt`, `.scptd` | `2.8` | `code-languages/applescript` |
| <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_arduino.svg" alt="Arduino Sketch logo" width="24" height="24"> | Arduino Sketch | `arduino` | `.ino`, `.pde` | `Arduino API 1.0` | `code-languages/arduino` |
| <img src="https://cdn.simpleicons.org/asciidoctor/E40046" alt="AsciiDoc logo" width="24" height="24"> | AsciiDoc | `asciidoc` | `.adoc`, `.asciidoc`, `.asc` | `pre-spec` | `code-languages/asciidoc` |
| <img src="https://cdn.simpleicons.org/dotnet/512BD4" alt="ASP/ASPX logo" width="24" height="24"> | ASP/ASPX | `asp` | `.asp`, `.aspx`, `.ascx`, `.ashx`, `.asmx`, `.master` | `4.8.1` | `code-languages/asp` |
| <img src="https://astro.build/assets/press/astro-icon-light.svg" alt="Astro logo" width="24" height="24"> | Astro | `astro` | `.astro` | `6.4.2` | `code-languages/astro` |
| <img src="https://cdn.simpleicons.org/assemblyscript/007AAC" alt="Assembly logo" width="24" height="24"> | Assembly | `assembly` | `.asm`, `.s`, `.S`, `.inc` | `Architecture-specific` | `code-languages/assembly` |
| <img src="https://www.gnu.org/graphics/heckert_gnu.small.png" alt="awk logo" width="24" height="24"> | awk | `awk` | `.awk` | `GNU Awk 5.4.0` | `code-languages/awk` |
| <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_autohotkey.svg" alt="AutoHotkey logo" width="24" height="24"> | AutoHotkey | `autohotkey` | `.ahk`, `.ah2` | `2.0` | `code-languages/autohotkey` |
| <img src="https://bashlogo.com/img/symbol/svg/full_colored_dark.svg" alt="Bash logo" width="24" height="24"> | Bash | `bash` | `.sh`, `.bash`, `.bashrc`, `.bash_profile`, `.bash_login`, `.profile` | `5.3` | `code-languages/bash` |
| <img src="https://icons.iconarchive.com/icons/simpleicons-team/simple/128/windowsterminal-icon.png" alt="Batch logo" width="24" height="24"> | Batch | `batch` | `.bat`, `.cmd` | `Windows Command Processor` | `code-languages/batch` |
| <img src="https://ballerina.io/images/ballerina-logo.svg" alt="Ballerina logo" width="24" height="24"> | Ballerina | `ballerina` | `.bal` | `2201.12.0` | `code-languages/ballerina` |
| <img src="https://cdn.simpleicons.org/bazel/43A047" alt="Bazel logo" width="24" height="24"> | Bazel | `bazel` | `BUILD.bazel`, `WORKSPACE`, `WORKSPACE.bazel`, `MODULE.bazel` | `9.1.0` | `code-languages/bazel` |
| <img src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/azure-bicep.svg" alt="Bicep logo" width="24" height="24"> | Bicep | `bicep` | `.bicep`, `.bicepparam` | `0.43.8` | `code-languages/bicep` |
| <img src="https://cdn.simpleicons.org/laravel/FF2D20" alt="Blade logo" width="24" height="24"> | Blade | `blade` | `.blade.php` | `Laravel 12.x` | `code-languages/blade` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" alt="C logo" width="24" height="24"> | C | `c` | `.c`, `.h` | `C23` | `code-languages/c` |
| <img src="https://avatars.githubusercontent.com/u/65030650?v=4" alt="Cairo logo" width="24" height="24"> | Cairo | `cairo` | `.cairo` | `2.11.4` | `code-languages/cairo` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Carbon_logo.png" alt="Carbon logo" width="24" height="24"> | Carbon | `carbon` | `.carbon` | `0.0.0 nightly` | `code-languages/carbon` |
| <img src="https://chapel-lang.org/images/chapel-logo.png" alt="Chapel logo" width="24" height="24"> | Chapel | `chapel` | `.chpl` | `2.8.0` | `code-languages/chapel` |
| <img src="https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@master/icons/file_type_circom.svg" alt="Circom logo" width="24" height="24"> | Circom | `circom` | `.circom` | `2.2.3` | `code-languages/circom` |
| <img src="https://cmake.org/wp-content/uploads/2023/08/CMake-Logo.svg" alt="CMake logo" width="24" height="24"> | CMake | `cmake` | `CMakeLists.txt`, `.cmake` | `4.3.3` | `code-languages/cmake` |
| <img src="https://cdn.simpleicons.org/clojure/5881D8" alt="Clojure logo" width="24" height="24"> | Clojure | `clojure` | `.clj`, `.cljs`, `.cljc`, `.edn`, `.bb` | `1.12.5` | `code-languages/clojure` |
| <img src="https://cdn.simpleicons.org/coffeescript/2F2625" alt="CoffeeScript logo" width="24" height="24"> | CoffeeScript | `coffeescript` | `.coffee`, `.litcoffee`, `.cson` | `2.7.0` | `code-languages/coffeescript` |
| <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_cf.svg" alt="ColdFusion logo" width="24" height="24"> | ColdFusion | `coldfusion` | `.cfm`, `.cfml`, `.cfc` | `ColdFusion 2025` | `code-languages/coldfusion` |
| <img src="https://logo.svgcdn.com/devicon/cobol-original.png" alt="COBOL logo" width="24" height="24"> | COBOL | `cobol` | `.cob`, `.cbl`, `.cobol`, `.cpy` | `ISO/IEC 1989:2023` | `code-languages/cobol` |
| <img src="https://avatars.githubusercontent.com/u/621198?v=4" alt="Coq / Rocq logo" width="24" height="24"> | Coq / Rocq | `coq` | `.v` | `9.2.0` | `code-languages/coq` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" alt="C++ logo" width="24" height="24"> | C++ | `cpp` | `.cpp`, `.cc`, `.cxx`, `.h`, `.hpp`, `.hh`, `.hxx` | `C++23` | `code-languages/cpp` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg" alt="C# logo" width="24" height="24"> | C# | `csharp` | `.cs`, `.csx` | `14` | `code-languages/csharp` |
| <img src="https://cdn.simpleicons.org/crystal/000000" alt="Crystal logo" width="24" height="24"> | Crystal | `crystal` | `.cr` | `1.20.2` | `code-languages/crystal` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg" alt="CSS logo" width="24" height="24"> | CSS | `css` | `.css` | `Living Standard` | `code-languages/css` |
| <img src="https://avatars.githubusercontent.com/u/43867057?s=200&v=4" alt="CUE logo" width="24" height="24"> | CUE | `cue` | `.cue` | `0.16.1` | `code-languages/cue` |
| <img src="https://cdn.simpleicons.org/nvidia/76B900" alt="CUDA logo" width="24" height="24"> | CUDA | `cuda` | `.cu`, `.cuh` | `13.3.0` | `code-languages/cuda` |
| <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_cython.svg" alt="Cython logo" width="24" height="24"> | Cython | `cython` | `.pyx`, `.pxd`, `.pxi` | `3.2.5` | `code-languages/cython` |
| <img src="https://dist.neo4j.com/wp-content/uploads/20210423072428/neo4j-logo-2020-1.svg" alt="Cypher logo" width="24" height="24"> | Cypher | `cypher` | `.cypher`, `.cyp` | `25` | `code-languages/cypher` |
| <img src="https://cdn.simpleicons.org/d/BA595E" alt="D logo" width="24" height="24"> | D | `d` | `.d`, `.di` | `2.112.0` | `code-languages/d` |
| <img src="https://dummyimage.com/32x32/0B6D91/ffffff.png&text=D" alt="Dafny logo" width="24" height="24"> | Dafny | `dafny` | `.dfy` | `4.11.0` | `code-languages/dafny` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Dart_programming_language_logo.svg" alt="Dart logo" width="24" height="24"> | Dart | `dart` | `.dart` | `3.12.1` | `code-languages/dart` |
| <img src="https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@master/icons/file_type_dhall.svg" alt="Dhall logo" width="24" height="24"> | Dhall | `dhall` | `.dhall` | `23.1.0` | `code-languages/dhall` |
| <img src="https://avatars.githubusercontent.com/u/20116735?v=4" alt="DITA logo" width="24" height="24"> | DITA | `dita` | `.dita`, `.ditamap`, `.ditaval` | `1.3` | `code-languages/dita` |
| <img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" alt="Dockerfile logo" width="24" height="24"> | Dockerfile | `dockerfile` | `Dockerfile`, `.dockerfile` | `1.10` | `code-languages/dockerfile` |
| <img src="https://cdn.simpleicons.org/ejs/B4CA65" alt="EJS logo" width="24" height="24"> | EJS | `ejs` | `.ejs` | `3.1.10` | `code-languages/ejs` |
| <img src="https://avatars.githubusercontent.com/u/3589265?v=4" alt="Eiffel logo" width="24" height="24"> | Eiffel | `eiffel` | `.e` | `24.05` | `code-languages/eiffel` |
| <img src="https://avatars.githubusercontent.com/u/63060917?v=4" alt="Earthly logo" width="24" height="24"> | Earthly | `earthly` | `Earthfile` | `0.8.16` | `code-languages/earthly` |
| <img src="https://cdn.simpleicons.org/elixir/4B275F" alt="Elixir logo" width="24" height="24"> | Elixir | `elixir` | `.ex`, `.exs`, `.eex`, `.leex`, `.heex` | `1.19.5` | `code-languages/elixir` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Elm_logo.svg" alt="Elm logo" width="24" height="24"> | Elm | `elm` | `.elm` | `0.19.1` | `code-languages/elm` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Ruby_logo.svg" alt="ERB logo" width="24" height="24"> | ERB | `erb` | `.erb`, `.rhtml`, `.html.erb` | `Ruby stdlib` | `code-languages/erb` |
| <img src="https://cdn.simpleicons.org/erlang/A90533" alt="Erlang logo" width="24" height="24"> | Erlang | `erlang` | `.erl`, `.hrl`, `.app.src`, `.escript`, `.xrl`, `.yrl`, `rebar.config` | `OTP 29.0` | `code-languages/erlang` |
| <img src="https://fishshell.com/assets/img/Terminal_Logo2_CRT_Flat.png" alt="Fish logo" width="24" height="24"> | Fish | `fish` | `.fish` | `4.7.1` | `code-languages/fish` |
| <img src="https://avatars.githubusercontent.com/u/5713248?v=4" alt="Flux logo" width="24" height="24"> | Flux | `flux` | `.flux` | `0.200.0` | `code-languages/flux` |
| <img src="https://fennel-lang.org/logo.svg" alt="Fennel logo" width="24" height="24"> | Fennel | `fennel` | `.fnl` | `1.6.1` | `code-languages/fennel` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Fortran_logo.svg" alt="Fortran logo" width="24" height="24"> | Fortran | `fortran` | `.f`, `.for`, `.ftn`, `.f90`, `.f95`, `.f03`, `.f08`, `.f18`, `.f23` | `Fortran 2023` | `code-languages/fortran` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Gforth_Logo.png" alt="Forth logo" width="24" height="24"> | Forth | `forth` | `.fs`, `.fth`, `.forth`, `.4th` | `Forth 2012` | `code-languages/forth` |
| <img src="https://dummyimage.com/32x32/326CE5/ffffff.png&text=FM" alt="FreeMarker logo" width="24" height="24"> | FreeMarker | `freemarker` | `.ftl`, `.ftlh`, `.ftlx` | `2.3.34` | `code-languages/freemarker` |
| <img src="https://cdn.simpleicons.org/fsharp/378BBA" alt="F# logo" width="24" height="24"> | F# | `fsharp` | `.fs`, `.fsi`, `.fsx`, `.fsscript` | `10` | `code-languages/fsharp` |
| <img src="https://dummyimage.com/32x32/572E91/ffffff.png&text=F%2A" alt="F* logo" width="24" height="24"> | F* | `fstar` | `.fst`, `.fsti` | `2026.04.17` | `code-languages/fstar` |
| <img src="https://cdn.simpleicons.org/godotengine/478CBF" alt="GDScript logo" width="24" height="24"> | GDScript | `gdscript` | `.gd` | `4.6` | `code-languages/gdscript` |
| <img src="https://cdn.simpleicons.org/git/F05032" alt="Git logo" width="24" height="24"> | Git | `git` | `.git`, `.gitignore`, `.gitattributes`, `.gitmodules`, `.gitkeep` | `2.54.0` | `code-languages/git` |
| <img src="https://cdn.simpleicons.org/gleam/FFAFF3" alt="Gleam logo" width="24" height="24"> | Gleam | `gleam` | `.gleam` | `1.16.0` | `code-languages/gleam` |
| <img src="https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg" alt="Go logo" width="24" height="24"> | Go | `go` | `.go` | `1.26.3` | `code-languages/go` |
| <img src="https://avatars.githubusercontent.com/u/54953488?v=4" alt="Grain logo" width="24" height="24"> | Grain | `grain` | `.gr` | `grain-v0.7.2` | `code-languages/grain` |
| <img src="https://cdn.simpleicons.org/gradle/02303A" alt="Gradle logo" width="24" height="24"> | Gradle | `gradle` | `.gradle`, `.gradle.kts` | `9.5.1` | `code-languages/gradle` |
| <img src="https://cdn.simpleicons.org/opengl/5586A4" alt="GLSL logo" width="24" height="24"> | GLSL | `glsl` | `.glsl`, `.vert`, `.frag`, `.geom`, `.tesc`, `.tese`, `.comp`, `.vs`, `.fs` | `4.60` | `code-languages/glsl` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg" alt="GraphQL logo" width="24" height="24"> | GraphQL | `graphql` | `.graphql`, `.gql`, `.graphqls` | `September 2025` | `code-languages/graphql` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/Groovy-logo.svg" alt="Groovy logo" width="24" height="24"> | Groovy | `groovy` | `.groovy`, `.gvy`, `.gy`, `.gsh` | `5.0.5` | `code-languages/groovy` |
| <img src="https://cdn.simpleicons.org/handlebarsdotjs/000000" alt="Handlebars logo" width="24" height="24"> | Handlebars | `handlebars` | `.hbs`, `.handlebars` | `4.7.9` | `code-languages/handlebars` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Hack_%28programming_language%29_logo.svg" alt="Hack logo" width="24" height="24"> | Hack | `hack` | `.hack`, `.hh`, `.hhi` | `HHVM 4.x` | `code-languages/hack` |
| <img src="https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@master/icons/file_type_haml.svg" alt="Haml logo" width="24" height="24"> | Haml | `haml` | `.haml` | `7.2.0` | `code-languages/haml` |
| <img src="https://harelang.org/mascot.png" alt="Hare logo" width="24" height="24"> | Hare | `hare` | `.ha` | `0.25.1` | `code-languages/hare` |
| <img src="https://cdn.simpleicons.org/haskell/5D4F85" alt="Haskell logo" width="24" height="24"> | Haskell | `haskell` | `.hs`, `.lhs`, `.hsc`, `.hs-boot`, `.hsig`, `.cabal` | `GHC 9.14.1` | `code-languages/haskell` |
| <img src="https://cdn.simpleicons.org/haxe/EA8220" alt="Haxe logo" width="24" height="24"> | Haxe | `haxe` | `.hx`, `.hxml` | `4.3.7` | `code-languages/haxe` |
| <img src="https://cdn.simpleicons.org/hashicorp/844FBA" alt="HCL logo" width="24" height="24"> | HCL | `hcl` | `.hcl`, `.tf`, `.tfvars`, `.pkr.hcl`, `.nomad` | `2.24.0` | `code-languages/hcl` |
| <img src="https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@master/icons/file_type_hlsl.svg" alt="HLSL logo" width="24" height="24"> | HLSL | `hlsl` | `.hlsl`, `.fx`, `.fxh`, `.hlsli` | `Shader Model 6.9` | `code-languages/hlsl` |
| <img src="https://avatars.githubusercontent.com/u/2981764?v=4" alt="HOCON logo" width="24" height="24"> | HOCON | `hocon` | `.hocon` | `1.4.3` | `code-languages/hocon` |
| <img src="https://www.w3.org/html/logo/downloads/HTML5_Badge.svg" alt="HTML logo" width="24" height="24"> | HTML | `html` | `.html`, `.htm` | `Living Standard` | `code-languages/html` |
| <img src="https://avatars.githubusercontent.com/u/10551643?v=4" alt="Hy logo" width="24" height="24"> | Hy | `hy` | `.hy` | `1.0.0` | `code-languages/hy` |
| <img src="https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@master/icons/file_type_idris.svg" alt="Idris logo" width="24" height="24"> | Idris | `idris` | `.idr`, `.lidr`, `.ipkg` | `0.8.0` | `code-languages/idris` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Configure.svg" alt="INI logo" width="24" height="24"> | INI | `ini` | `.ini` | `Informal format` | `code-languages/ini` |
| <img src="https://dummyimage.com/32x32/6A5ACD/ffffff.png&text=Is" alt="Isabelle logo" width="24" height="24"> | Isabelle | `isabelle` | `.thy` | `Isabelle2025-2` | `code-languages/isabelle` |
| <img src="https://www.vectorlogo.zone/logos/java/java-icon.svg" alt="Java logo" width="24" height="24"> | Java | `java` | `.java` | `26` | `code-languages/java` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript logo" width="24" height="24"> | JavaScript | `javascript` | `.js`, `.mjs`, `.cjs`, `.jsx` | `ECMAScript 2025` | `code-languages/javascript` |
| <img src="https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@master/icons/file_type_janet.svg" alt="Janet logo" width="24" height="24"> | Janet | `janet` | `.janet`, `.jdn` | `1.41.2` | `code-languages/janet` |
| <img src="https://cdn.simpleicons.org/jinja/B41717" alt="Jinja logo" width="24" height="24"> | Jinja | `jinja` | `.jinja`, `.jinja2`, `.j2` | `3.1.6` | `code-languages/jinja` |
| <img src="https://www.json.org/img/json160.gif" alt="JSON logo" width="24" height="24"> | JSON | `json` | `.json` | `RFC 8259` | `code-languages/json` |
| <img src="https://avatars.githubusercontent.com/u/10512965?v=4" alt="JSON5 logo" width="24" height="24"> | JSON5 | `json5` | `.json5` | `2.2.3` | `code-languages/json5` |
| <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_json.svg" alt="JSONC logo" width="24" height="24"> | JSONC | `jsonc` | `.jsonc`, `.code-workspace` | `JSON with Comments` | `code-languages/jsonc` |
| <img src="https://jsonnet.org/img/isologo.svg" alt="Jsonnet logo" width="24" height="24"> | Jsonnet | `jsonnet` | `.jsonnet`, `.libsonnet` | `0.22.0` | `code-languages/jsonnet` |
| <img src="https://cdn.simpleicons.org/jupyter/F37626" alt="Jupyter Notebook logo" width="24" height="24"> | Jupyter Notebook | `jupyter-notebook` | `.ipynb` | `nbformat 4.5` | `code-languages/jupyter-notebook` |
| <img src="https://cdn.simpleicons.org/julia/9558B2" alt="Julia logo" width="24" height="24"> | Julia | `julia` | `.jl` | `1.12.6` | `code-languages/julia` |
| <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_just.svg" alt="Just logo" width="24" height="24"> | Just | `just` | `justfile`, `Justfile`, `.just` | `1.44.0` | `code-languages/just` |
| <img src="https://avatars.githubusercontent.com/u/121281745?v=4" alt="KCL logo" width="24" height="24"> | KCL | `kcl` | `.k`, `.kcl` | `0.11.2` | `code-languages/kcl` |
| <img src="https://dummyimage.com/32x32/6B4E9B/ffffff.png&text=KDL" alt="KDL logo" width="24" height="24"> | KDL | `kdl` | `.kdl` | `2.0.0` | `code-languages/kdl` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png" alt="Kotlin logo" width="24" height="24"> | Kotlin | `kotlin` | `.kt`, `.kts` | `2.3.20` | `code-languages/kotlin` |
| <img src="https://cdn.simpleicons.org/leanpub/262425" alt="Lean logo" width="24" height="24"> | Lean | `lean` | `.lean` | `4.30.0` | `code-languages/lean` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LESS_Logo.svg" alt="Less logo" width="24" height="24"> | Less | `less` | `.less` | `4.4.1` | `code-languages/less` |
| <img src="https://cdn.simpleicons.org/shopify/7AB55C" alt="Liquid logo" width="24" height="24"> | Liquid | `liquid` | `.liquid` | `10.27.0` | `code-languages/liquid` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Lisp_logo.svg" alt="Lisp logo" width="24" height="24"> | Lisp | `lisp` | `.lisp`, `.lsp`, `.cl`, `.asd` | `ANSI INCITS 226-1994` | `code-languages/lisp` |
| <img src="https://cdn.simpleicons.org/llvm/262D3A" alt="LLVM IR logo" width="24" height="24"> | LLVM IR | `llvm-ir` | `.ll`, `.bc` | `22.1.6` | `code-languages/llvm-ir` |
| <img src="https://www.lua.org/images/lua-logo.gif" alt="Lua logo" width="24" height="24"> | Lua | `lua` | `.lua`, `.rockspec` | `5.5.0` | `code-languages/lua` |
| <img src="https://cdn.simpleicons.org/roblox/000000" alt="Luau logo" width="24" height="24"> | Luau | `luau` | `.luau` | `0.723` | `code-languages/luau` |
| <img src="https://cdn.simpleicons.org/python/3776AB" alt="Mako logo" width="24" height="24"> | Mako | `mako` | `.mako`, `.mao` | `1.3.10` | `code-languages/mako` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Heckert_gnu.small.png" alt="Makefile logo" width="24" height="24"> | Makefile | `makefile` | `Makefile`, `makefile`, `GNUmakefile`, `.mk`, `.mak` | `4.4.1` | `code-languages/makefile` |
| <img src="https://cdn.simpleicons.org/wolfram/DD1100" alt="Wolfram Language logo" width="24" height="24"> | Wolfram Language | `mathematica` | `.wl`, `.wls`, `.nb` | `14.3` | `code-languages/mathematica` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Matlab_Logo.png" alt="MATLAB logo" width="24" height="24"> | MATLAB | `matlab` | `.m`, `.mlx` | `R2026a` | `code-languages/matlab` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg" alt="Markdown logo" width="24" height="24"> | Markdown | `markdown` | `.md`, `.markdown`, `.mdown`, `.mkd` | `CommonMark 0.31.2` | `code-languages/markdown` |
| <img src="https://cdn.simpleicons.org/mdx/1B1F24" alt="MDX logo" width="24" height="24"> | MDX | `mdx` | `.mdx` | `3.1.1` | `code-languages/mdx` |
| <img src="https://cdn.simpleicons.org/mermaid/FF3670" alt="Mermaid logo" width="24" height="24"> | Mermaid | `mermaid` | `.mmd`, `.mermaid` | `11.15.0` | `code-languages/mermaid` |
| <img src="https://raw.githubusercontent.com/mesonbuild/meson/master/graphics/meson_logo.svg" alt="Meson logo" width="24" height="24"> | Meson | `meson` | `meson.build`, `meson_options.txt`, `meson.options`, `.wrap` | `1.11.1` | `code-languages/meson` |
| <img src="https://developer.apple.com/assets/elements/icons/metal/metal-256x256_2x.png" alt="Metal logo" width="24" height="24"> | Metal | `metal` | `.metal` | `Metal 4` | `code-languages/metal` |
| <img src="https://avatars.githubusercontent.com/u/107116314?v=4" alt="Mojo logo" width="24" height="24"> | Mojo | `mojo` | `.mojo` | `0.26.1` | `code-languages/mojo` |
| <img src="https://avatars.githubusercontent.com/u/124476259?v=4" alt="MoonBit logo" width="24" height="24"> | MoonBit | `moonbit` | `.mbt` | `0.9.2` | `code-languages/moonbit` |
| <img src="https://avatars.githubusercontent.com/u/108696678?v=4" alt="Move logo" width="24" height="24"> | Move | `move` | `.move` | `2.0.0` | `code-languages/move` |
| <img src="https://avatars.githubusercontent.com/u/197655?s=200&v=4" alt="Mustache logo" width="24" height="24"> | Mustache | `mustache` | `.mustache`, `.mst` | `1.0` | `code-languages/mustache` |
| <img src="https://cdn.simpleicons.org/subversion/809CC9" alt="SVN logo" width="24" height="24"> | SVN | `svn` | `.svn`, `svnserve.conf` | `1.14.5` | `code-languages/svn` |
| <img src="https://avatars.githubusercontent.com/u/83021462?v=4" alt="Nickel logo" width="24" height="24"> | Nickel | `nickel` | `.ncl` | `1.16.0` | `code-languages/nickel` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg" alt="nginx logo" width="24" height="24"> | nginx | `nginx` | `nginx.conf`, `.nginx`, `.conf` | `1.30.2` | `code-languages/nginx` |
| <img src="https://cdn.simpleicons.org/nim/FFE953" alt="Nim logo" width="24" height="24"> | Nim | `nim` | `.nim`, `.nims`, `.nimble` | `2.2.10` | `code-languages/nim` |
| <img src="https://cdn.simpleicons.org/nixos/5277C3" alt="Nix logo" width="24" height="24"> | Nix | `nix` | `.nix` | `2.34.7` | `code-languages/nix` |
| <img src="https://avatars.githubusercontent.com/u/131524?v=4" alt="Nunjucks logo" width="24" height="24"> | Nunjucks | `nunjucks` | `.njk`, `.nunjucks` | `3.2.4` | `code-languages/nunjucks` |
| <img src="https://avatars.githubusercontent.com/u/50749585?v=4" alt="Nushell logo" width="24" height="24"> | Nushell | `nushell` | `.nu` | `0.113.1` | `code-languages/nushell` |
| <img src="https://cdn.simpleicons.org/ocaml/EC6813" alt="OCaml logo" width="24" height="24"> | OCaml | `ocaml` | `.ml`, `.mli`, `.mll`, `.mly`, `.mlt`, `.eliom`, `.eliomi` | `5.6.0` | `code-languages/ocaml` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Apple_logo_grey.svg" alt="Objective-C logo" width="24" height="24"> | Objective-C | `objective-c` | `.m`, `.mm` | `2.0` | `code-languages/objective-c` |
| <img src="https://avatars.githubusercontent.com/u/12533910?v=4" alt="Odin logo" width="24" height="24"> | Odin | `odin` | `.odin` | `dev-2026-02` | `code-languages/odin` |
| <img src="https://cdn.simpleicons.org/khronosgroup/CC3333" alt="OpenCL C logo" width="24" height="24"> | OpenCL C | `opencl` | `.cl`, `.clh` | `OpenCL C 3.0` | `code-languages/opencl` |
| <img src="https://cdn.simpleicons.org/openapiinitiative/6BA539" alt="OpenAPI logo" width="24" height="24"> | OpenAPI | `openapi` | `.openapi.json`, `.openapi.yaml`, `.openapi.yml` | `3.2.0` | `code-languages/openapi` |
| <img src="https://cdn.simpleicons.org/lazarus/000000" alt="Pascal logo" width="24" height="24"> | Pascal | `pascal` | `.pas`, `.pp`, `.inc`, `.lpr`, `.dpr`, `.dfm` | `3.2.2` | `code-languages/pascal` |
| <img src="https://avatars.githubusercontent.com/u/10639145?v=4" alt="Pkl logo" width="24" height="24"> | Pkl | `pkl` | `.pkl` | `0.28.2` | `code-languages/pkl` |
| <img src="https://cdn.simpleicons.org/perl/39457E" alt="Perl logo" width="24" height="24"> | Perl | `perl` | `.pl`, `.pm`, `.pod`, `.t`, `.psgi` | `5.42.2` | `code-languages/perl` |
| <img src="https://www.php.net/images/logos/new-php-logo.svg" alt="PHP logo" width="24" height="24"> | PHP | `php` | `.php`, `.phtml`, `.php3`, `.php4`, `.php5`, `.phps` | `8.5.6` | `code-languages/php` |
| <img src="https://cdn.simpleicons.org/tradingview/131722" alt="Pine Script logo" width="24" height="24"> | Pine Script | `pine-script` | `.pine` | `v6` | `code-languages/pine-script` |
| <img src="https://plantuml.com/logo3.png" alt="PlantUML logo" width="24" height="24"> | PlantUML | `plantuml` | `.puml`, `.plantuml`, `.iuml` | `1.2026.5` | `code-languages/plantuml` |
| <img src="https://github.com/oracle.png" alt="Oracle PL/SQL logo" width="24" height="24"> | Oracle PL/SQL | `plsql` | `.pls`, `.pks`, `.pkb`, `.plsql` | `Oracle Database 26ai` | `code-languages/plsql` |
| <img src="https://avatars.githubusercontent.com/u/14593805?v=4" alt="Pony logo" width="24" height="24"> | Pony | `pony` | `.pony` | `0.61.1` | `code-languages/pony` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/PowerShell_5.0_icon.png" alt="PowerShell logo" width="24" height="24"> | PowerShell | `powershell` | `.ps1`, `.psm1`, `.psd1`, `.ps1xml` | `7.6.2` | `code-languages/powershell` |
| <img src="https://www.swi-prolog.org/icons/swipl.png" alt="Prolog logo" width="24" height="24"> | Prolog | `prolog` | `.pl`, `.pro`, `.prolog`, `.P` | `SWI-Prolog 10.0` | `code-languages/prolog` |
| <img src="https://cdn.simpleicons.org/prometheus/E6522C" alt="PromQL logo" width="24" height="24"> | PromQL | `promql` | `.promql` | `Prometheus 3.x` | `code-languages/promql` |
| <img src="https://cdn.simpleicons.org/google/4285F4" alt="Protocol Buffers logo" width="24" height="24"> | Protocol Buffers | `protobuf` | `.proto` | `35.0` | `code-languages/protobuf` |
| <img src="https://cdn.simpleicons.org/pug/A86454" alt="Pug logo" width="24" height="24"> | Pug | `pug` | `.pug`, `.jade` | `3.0.4` | `code-languages/pug` |
| <img src="https://cdn.simpleicons.org/puppet/FFAE1A" alt="Puppet logo" width="24" height="24"> | Puppet | `puppet` | `.pp`, `.epp` | `Puppet 8` | `code-languages/puppet` |
| <img src="https://cdn.simpleicons.org/purescript/14161A" alt="PureScript logo" width="24" height="24"> | PureScript | `purescript` | `.purs` | `0.15.15` | `code-languages/purescript` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Python-logo-notext.svg" alt="Python logo" width="24" height="24"> | Python | `python` | `.py`, `.pyw` | `3.14.4` | `code-languages/python` |
| <img src="https://cdn.simpleicons.org/qt/41CD52" alt="QML logo" width="24" height="24"> | QML | `qml` | `.qml`, `.qmltypes`, `.qmlproject` | `Qt 6.11.1` | `code-languages/qml` |
| <img src="https://github.com/microsoft.png" alt="Q# logo" width="24" height="24"> | Q# | `qsharp` | `.qs` | `Q# 1.0` | `code-languages/qsharp` |
| <img src="https://www.r-project.org/logo/Rlogo.svg" alt="R logo" width="24" height="24"> | R | `r` | `.r`, `.R`, `.rmd`, `.Rmd`, `.qmd`, `.Rprofile` | `4.6.0` | `code-languages/r` |
| <img src="https://github.com/Raku.png" alt="Raku logo" width="24" height="24"> | Raku | `raku` | `.raku`, `.rakumod`, `.rakudoc`, `.rakutest`, `.p6`, `.pm6` | `6.d` | `code-languages/raku` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Racket-logo.svg" alt="Racket logo" width="24" height="24"> | Racket | `racket` | `.rkt`, `.rktd`, `.rktl`, `.scrbl` | `9.2` | `code-languages/racket` |
| <img src="https://cdn.simpleicons.org/dotnet/512BD4" alt="Razor logo" width="24" height="24"> | Razor | `razor` | `.cshtml`, `.razor` | `10.0.8` | `code-languages/razor` |
| <img src="https://cdn.simpleicons.org/reason/DD4B39" alt="ReasonML logo" width="24" height="24"> | ReasonML | `reasonml` | `.re`, `.rei` | `3.13.0` | `code-languages/reasonml` |
| <img src="https://raw.githubusercontent.com/open-policy-agent/opa/main/logo/logo.svg" alt="Rego logo" width="24" height="24"> | Rego | `rego` | `.rego` | `OPA 1.17.0` | `code-languages/rego` |
| <img src="https://cdn.simpleicons.org/rescript/E6484A" alt="ReScript logo" width="24" height="24"> | ReScript | `rescript` | `.res`, `.resi` | `12.0.0` | `code-languages/rescript` |
| <img src="https://cdn.simpleicons.org/readthedocs/8CA1AF" alt="reStructuredText logo" width="24" height="24"> | reStructuredText | `restructuredtext` | `.rst`, `.rest` | `Docutils 0.22.2` | `code-languages/restructuredtext` |
| <img src="https://www.ruby-lang.org/images/header-ruby-logo.png" alt="Ruby logo" width="24" height="24"> | Ruby | `ruby` | `.rb`, `.rbw`, `.rake`, `.gemspec`, `Gemfile`, `Rakefile`, `config.ru` | `4.0.5` | `code-languages/ruby` |
| <img src="https://www.rust-lang.org/logos/rust-logo-512x512.png" alt="Rust logo" width="24" height="24"> | Rust | `rust` | `.rs` | `1.96.0` | `code-languages/rust` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/1/10/SAS_logo_horiz.svg" alt="SAS logo" width="24" height="24"> | SAS | `sas` | `.sas` | `SAS 9.4` | `code-languages/sas` |
| <img src="https://cdn.simpleicons.org/scala/DC322F" alt="Scala logo" width="24" height="24"> | Scala | `scala` | `.scala`, `.sc` | `3.8.3` | `code-languages/scala` |
| <img src="https://sass-lang.com/assets/img/logos/logo.svg" alt="Sass logo" width="24" height="24"> | Sass | `scss` | `.scss`, `.sass` | `1.100.0` | `code-languages/scss` |
| <img src="https://cdn.simpleicons.org/racket/9F1D20" alt="Scheme logo" width="24" height="24"> | Scheme | `scheme` | `.scm`, `.ss`, `.sld`, `.sls` | `R7RS small` | `code-languages/scheme` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Smalltalk_Balloon.svg" alt="Smalltalk logo" width="24" height="24"> | Smalltalk | `smalltalk` | `.st` | `ANSI INCITS 319-1998` | `code-languages/smalltalk` |
| <img src="https://www.smarty.net/images/logo_print.gif" alt="Smarty logo" width="24" height="24"> | Smarty | `smarty` | `.tpl`, `.smarty` | `5.5.1` | `code-languages/smarty` |
| <img src="https://cdn.simpleicons.org/solidity/363636" alt="Solidity logo" width="24" height="24"> | Solidity | `solidity` | `.sol` | `0.8.35` | `code-languages/solidity` |
| <img src="https://www.w3.org/RDF/icons/rdf_flyer.svg" alt="SPARQL logo" width="24" height="24"> | SPARQL | `sparql` | `.sparql`, `.rq` | `1.1` | `code-languages/sparql` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" alt="SQL logo" width="24" height="24"> | SQL | `sql` | `.sql` | `SQL:2023` | `code-languages/sql` |
| <img src="https://avatars.githubusercontent.com/u/62883579?v=4" alt="Standard ML logo" width="24" height="24"> | Standard ML | `standard-ml` | `.sml`, `.sig`, `.fun` | `The Definition 1997` | `code-languages/standard-ml` |
| <img src="https://cdn.simpleicons.org/bazel/43A047" alt="Starlark logo" width="24" height="24"> | Starlark | `starlark` | `.bzl`, `.star`, `.sky` | `Bazel Starlark` | `code-languages/starlark` |
| <img src="https://www.stata.com/includes/images/stata-logo-blue.svg" alt="Stata logo" width="24" height="24"> | Stata | `stata` | `.do`, `.ado`, `.mata` | `19` | `code-languages/stata` |
| <img src="https://cdn.simpleicons.org/stylus/333333" alt="Stylus logo" width="24" height="24"> | Stylus | `stylus` | `.styl` | `0.64.0` | `code-languages/stylus` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/SVG_Logo.svg" alt="SVG logo" width="24" height="24"> | SVG | `svg` | `.svg`, `.svgz` | `SVG 2` | `code-languages/svg` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" alt="Svelte logo" width="24" height="24"> | Svelte | `svelte` | `.svelte` | `5.56.1` | `code-languages/svelte` |
| <img src="https://www.swift.org/assets/images/swift.svg" alt="Swift logo" width="24" height="24"> | Swift | `swift` | `.swift` | `6.2.2` | `code-languages/swift` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Tcl.svg" alt="Tcl/Tk logo" width="24" height="24"> | Tcl/Tk | `tcl` | `.tcl`, `.tm`, `.test` | `9.0.3` | `code-languages/tcl` |
| <img src="https://cdn.simpleicons.org/latex/008080" alt="TeX logo" width="24" height="24"> | TeX | `tex` | `.tex`, `.sty`, `.cls`, `.dtx`, `.ins`, `.ltx` | `TeX Live 2026` | `code-languages/tex` |
| <img src="https://cdn.simpleicons.org/apache/D22128" alt="Apache Thrift logo" width="24" height="24"> | Apache Thrift | `thrift` | `.thrift` | `0.22.0` | `code-languages/thrift` |
| <img src="https://avatars.githubusercontent.com/u/315978?v=4" alt="TLA+ logo" width="24" height="24"> | TLA+ | `tla-plus` | `.tla` | `TLA+ 2` | `code-languages/tla-plus` |
| <img src="https://cdn.simpleicons.org/toml/9C4221" alt="TOML logo" width="24" height="24"> | TOML | `toml` | `.toml` | `1.1.0` | `code-languages/toml` |
| <img src="https://twig.symfony.com/images/logo.png" alt="Twig logo" width="24" height="24"> | Twig | `twig` | `.twig` | `3.27.1` | `code-languages/twig` |
| <img src="https://www.typescriptlang.org/icons/icon-512x512.png" alt="TypeScript logo" width="24" height="24"> | TypeScript | `typescript` | `.ts`, `.tsx`, `.mts`, `.cts` | `6.0` | `code-languages/typescript` |
| <img src="https://cdn.simpleicons.org/typst/239DAD" alt="Typst logo" width="24" height="24"> | Typst | `typst` | `.typ` | `0.14.2` | `code-languages/typst` |
| <img src="https://avatars.githubusercontent.com/u/18563978?v=4" alt="Unison logo" width="24" height="24"> | Unison | `unison` | `.u`, `.uu` | `0.5.28` | `code-languages/unison` |
| <img src="https://cdn.simpleicons.org/v/5D87BF" alt="V logo" width="24" height="24"> | V | `v` | `.v`, `.vsh` | `weekly.2025.49` | `code-languages/v` |
| <img src="https://cdn.simpleicons.org/gnome/4A86CF" alt="Vala logo" width="24" height="24"> | Vala | `vala` | `.vala`, `.vapi` | `0.56.18` | `code-languages/vala` |
| <img src="https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@master/icons/file_type_verilog.svg" alt="Verilog/SystemVerilog logo" width="24" height="24"> | Verilog/SystemVerilog | `verilog` | `.v`, `.vh`, `.sv`, `.svh` | `IEEE 1800-2023` | `code-languages/verilog` |
| <img src="https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@master/icons/file_type_vhdl.svg" alt="VHDL logo" width="24" height="24"> | VHDL | `vhdl` | `.vhd`, `.vhdl` | `IEEE 1076-2019` | `code-languages/vhdl` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/VB.NET_Logo.svg" alt="Visual Basic logo" width="24" height="24"> | Visual Basic | `visual-basic` | `.vb` | `17.13` | `code-languages/visual-basic` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Vue logo" width="24" height="24"> | Vue | `vue` | `.vue` | `3.5.35` | `code-languages/vue` |
| <img src="https://avatars.githubusercontent.com/u/37288461?v=4" alt="Vyper logo" width="24" height="24"> | Vyper | `vyper` | `.vy` | `0.4.3` | `code-languages/vyper` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/1/1f/WebAssembly_Logo.svg" alt="WebAssembly logo" width="24" height="24"> | WebAssembly | `webassembly` | `.wasm`, `.wat` | `3.0` | `code-languages/webassembly` |
| <img src="https://cdn.simpleicons.org/webgpu/005A9C" alt="WGSL logo" width="24" height="24"> | WGSL | `wgsl` | `.wgsl` | `Candidate Recommendation Draft 2026-05-07` | `code-languages/wgsl` |
| <img src="https://avatars.githubusercontent.com/u/8763410?v=4" alt="Wren logo" width="24" height="24"> | Wren | `wren` | `.wren` | `0.4.0` | `code-languages/wren` |
| <img src="https://cdn.simpleicons.org/dotnet/512BD4" alt="XAML logo" width="24" height="24"> | XAML | `xaml` | `.xaml`, `.baml` | `Platform-specific` | `code-languages/xaml` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/6/68/XML.svg" alt="XML logo" width="24" height="24"> | XML | `xml` | `.xml`, `.xsd`, `.xsl`, `.xslt` | `XML 1.0 Fifth Edition` | `code-languages/xml` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/6/68/XML.svg" alt="XQuery logo" width="24" height="24"> | XQuery | `xquery` | `.xq`, `.xql`, `.xqm`, `.xquery`, `.xqy` | `XQuery 3.1` | `code-languages/xquery` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/6/68/XML.svg" alt="XSLT logo" width="24" height="24"> | XSLT | `xslt` | `.xsl`, `.xslt` | `XSLT 3.0` | `code-languages/xslt` |
| <img src="https://avatars.githubusercontent.com/u/6306898?v=4" alt="YARA logo" width="24" height="24"> | YARA | `yara` | `.yar`, `.yara` | `4.5.2` | `code-languages/yara` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Official_YAML_Logo.svg" alt="YAML logo" width="24" height="24"> | YAML | `yaml` | `.yaml`, `.yml` | `1.2.2` | `code-languages/yaml` |
| <img src="https://avatars.githubusercontent.com/u/10666805?v=4" alt="Zeek logo" width="24" height="24"> | Zeek | `zeek` | `.zeek`, `.bro` | `8.0.4` | `code-languages/zeek` |
| <img src="https://cdn.simpleicons.org/zig/F7A41D" alt="Zig logo" width="24" height="24"> | Zig | `zig` | `.zig`, `.zon` | `0.16.0` | `code-languages/zig` |
| <img src="https://avatars.githubusercontent.com/u/1642052?v=4" alt="Ziggy logo" width="24" height="24"> | Ziggy | `ziggy` | `.ziggy`, `.ziggy-schema` | `0.1.0` | `code-languages/ziggy` |
| <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Z_Shell_Logo_Color_Horizontal.svg" alt="zsh logo" width="24" height="24"> | zsh | `zsh` | `.zsh`, `.zshrc`, `.zprofile`, `.zlogin`, `.zlogout`, `.zshenv` | `5.9.1` | `code-languages/zsh` |

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
| `npm run bench` | Run manual performance benchmarks |
| `npm run build` | Build ESM, CommonJS, and declaration files |
| `npm run check` | Run lint, typecheck, and tests |
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
