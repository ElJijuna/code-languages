# code-languages

[![npm version](https://img.shields.io/npm/v/code-languages.svg)](https://www.npmjs.com/package/code-languages)
[![Pull Request](https://github.com/ElJijuna/code-languages/actions/workflows/pull-request.yml/badge.svg)](https://github.com/ElJijuna/code-languages/actions/workflows/pull-request.yml)
[![Docs](https://github.com/ElJijuna/code-languages/actions/workflows/docs.yml/badge.svg)](https://github.com/ElJijuna/code-languages/actions/workflows/docs.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-ready-3178c6.svg)](https://www.typescriptlang.org)
[![Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen.svg)](package.json)

Structured metadata for programming languages, packaged as a typed, tree-shakeable TypeScript library.

`code-languages` is useful when you need a small source of truth for language names, slugs, file extensions, release metadata, websites, paradigms, and logos in developer tools, docs sites, learning platforms, or editor-like interfaces.

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
import { actionscript } from "code-languages/actionscript";
import { ada } from "code-languages/ada";
import { antlr } from "code-languages/antlr";
import { apex } from "code-languages/apex";
import { apl } from "code-languages/apl";
import { applescript } from "code-languages/applescript";
import { arduino } from "code-languages/arduino";
import { asciidoc } from "code-languages/asciidoc";
import { asp } from "code-languages/asp";
import { astro } from "code-languages/astro";
import { assembly } from "code-languages/assembly";
import { autohotkey } from "code-languages/autohotkey";
import { awk } from "code-languages/awk";
import { bash } from "code-languages/bash";
import { batch } from "code-languages/batch";
import { bazel } from "code-languages/bazel";
import { bicep } from "code-languages/bicep";
import { blade } from "code-languages/blade";
import { c } from "code-languages/c";
import { clojure } from "code-languages/clojure";
import { cmake } from "code-languages/cmake";
import { coffeescript } from "code-languages/coffeescript";
import { coldfusion } from "code-languages/coldfusion";
import { cobol } from "code-languages/cobol";
import { cpp } from "code-languages/cpp";
import { csharp } from "code-languages/csharp";
import { crystal } from "code-languages/crystal";
import { css } from "code-languages/css";
import { cue } from "code-languages/cue";
import { cuda } from "code-languages/cuda";
import { cython } from "code-languages/cython";
import { d } from "code-languages/d";
import { dart } from "code-languages/dart";
import { dockerfile } from "code-languages/dockerfile";
import { elixir } from "code-languages/elixir";
import { elm } from "code-languages/elm";
import { erb } from "code-languages/erb";
import { erlang } from "code-languages/erlang";
import { fennel } from "code-languages/fennel";
import { forth } from "code-languages/forth";
import { fortran } from "code-languages/fortran";
import { fsharp } from "code-languages/fsharp";
import { gdscript } from "code-languages/gdscript";
import { git } from "code-languages/git";
import { gleam } from "code-languages/gleam";
import { gradle } from "code-languages/gradle";
import { glsl } from "code-languages/glsl";
import { graphql } from "code-languages/graphql";
import { groovy } from "code-languages/groovy";
import { handlebars } from "code-languages/handlebars";
import { haskell } from "code-languages/haskell";
import { haxe } from "code-languages/haxe";
import { hcl } from "code-languages/hcl";
import { hlsl } from "code-languages/hlsl";
import { html } from "code-languages/html";
import { ini } from "code-languages/ini";
import { javascript } from "code-languages/javascript";
import { java } from "code-languages/java";
import { jinja } from "code-languages/jinja";
import { jsonnet } from "code-languages/jsonnet";
import { julia } from "code-languages/julia";
import { kotlin } from "code-languages/kotlin";
import { less } from "code-languages/less";
import { liquid } from "code-languages/liquid";
import { lisp } from "code-languages/lisp";
import { lua } from "code-languages/lua";
import { makefile } from "code-languages/makefile";
import { matlab } from "code-languages/matlab";
import { markdown } from "code-languages/markdown";
import { mdx } from "code-languages/mdx";
import { mermaid } from "code-languages/mermaid";
import { meson } from "code-languages/meson";
import { metal } from "code-languages/metal";
import { nginx } from "code-languages/nginx";
import { nim } from "code-languages/nim";
import { nix } from "code-languages/nix";
import { ocaml } from "code-languages/ocaml";
import { objectiveC } from "code-languages/objective-c";
import { pascal } from "code-languages/pascal";
import { perl } from "code-languages/perl";
import { php } from "code-languages/php";
import { plantuml } from "code-languages/plantuml";
import { powershell } from "code-languages/powershell";
import { prolog } from "code-languages/prolog";
import { protobuf } from "code-languages/protobuf";
import { pug } from "code-languages/pug";
import { python } from "code-languages/python";
import { qml } from "code-languages/qml";
import { r } from "code-languages/r";
import { racket } from "code-languages/racket";
import { razor } from "code-languages/razor";
import { ruby } from "code-languages/ruby";
import { scala } from "code-languages/scala";
import { scss } from "code-languages/scss";
import { solidity } from "code-languages/solidity";
import { json } from "code-languages/json";
import { jupyterNotebook } from "code-languages/jupyter-notebook";
import { sql } from "code-languages/sql";
import { starlark } from "code-languages/starlark";
import { svg } from "code-languages/svg";
import { svn } from "code-languages/svn";
import { svelte } from "code-languages/svelte";
import { swift } from "code-languages/swift";
import { tcl } from "code-languages/tcl";
import { toml } from "code-languages/toml";
import { typst } from "code-languages/typst";
import { verilog } from "code-languages/verilog";
import { vhdl } from "code-languages/vhdl";
import { visualBasic } from "code-languages/visual-basic";
import { vue } from "code-languages/vue";
import { webassembly } from "code-languages/webassembly";
import { wgsl } from "code-languages/wgsl";
import { xaml } from "code-languages/xaml";
import { xml } from "code-languages/xml";
import { yaml } from "code-languages/yaml";
import { zig } from "code-languages/zig";
import { zsh } from "code-languages/zsh";

console.log(abap.version);
console.log(actionscript.extensions);
console.log(ada.version);
console.log(antlr.extensions);
console.log(apex.extensions);
console.log(apl.version);
console.log(applescript.extensions);
console.log(arduino.version);
console.log(asciidoc.extensions);
console.log(asp.extensions);
console.log(astro.version);
console.log(assembly.extensions);
console.log(autohotkey.extensions);
console.log(awk.version);
console.log(bash.version);
console.log(batch.extensions);
console.log(bazel.version);
console.log(bicep.version);
console.log(blade.extensions);
console.log(c.extensions);
console.log(clojure.version);
console.log(cmake.extensions);
console.log(coffeescript.version);
console.log(coldfusion.version);
console.log(cpp.i18n.en.name);
console.log(csharp.website);
console.log(crystal.version);
console.log(css.paradigms);
console.log(cue.version);
console.log(cuda.version);
console.log(cython.extensions);
console.log(d.version);
console.log(dockerfile.i18n.en.name);
console.log(elm.version);
console.log(erb.extensions);
console.log(erlang.version);
console.log(fennel.extensions);
console.log(forth.version);
console.log(fortran.extensions);
console.log(fsharp.version);
console.log(gdscript.extensions);
console.log(git.extensions);
console.log(gleam.version);
console.log(gradle.extensions);
console.log(glsl.extensions);
console.log(graphql.version);
console.log(groovy.version);
console.log(handlebars.extensions);
console.log(hcl.extensions);
console.log(haxe.version);
console.log(hlsl.extensions);
console.log(html.extensions);
console.log(ini.extensions);
console.log(javascript.website);
console.log(java.version);
console.log(jinja.version);
console.log(jsonnet.version);
console.log(jupyterNotebook.extensions);
console.log(julia.version);
console.log(kotlin.version);
console.log(less.extensions);
console.log(liquid.extensions);
console.log(lisp.version);
console.log(lua.version);
console.log(makefile.extensions);
console.log(matlab.version);
console.log(markdown.website);
console.log(mdx.extensions);
console.log(mermaid.version);
console.log(meson.extensions);
console.log(metal.version);
console.log(nginx.version);
console.log(nim.version);
console.log(nix.version);
console.log(objectiveC.version);
console.log(pascal.version);
console.log(perl.version);
console.log(php.version);
console.log(plantuml.version);
console.log(powershell.extensions);
console.log(prolog.paradigms);
console.log(protobuf.version);
console.log(pug.version);
console.log(python.publishedDate);
console.log(qml.version);
console.log(r.version);
console.log(racket.extensions);
console.log(razor.extensions);
console.log(ruby.website);
console.log(scala.version);
console.log(scss.extensions);
console.log(solidity.version);
console.log(json.i18n.en.description);
console.log(sql.i18n.en.name);
console.log(starlark.extensions);
console.log(svg.extensions);
console.log(svn.extensions);
console.log(svelte.version);
console.log(swift.version);
console.log(tcl.extensions);
console.log(toml.version);
console.log(typst.version);
console.log(verilog.extensions);
console.log(vhdl.version);
console.log(visualBasic.i18n.en.name);
console.log(vue.website);
console.log(webassembly.extensions);
console.log(wgsl.extensions);
console.log(xaml.extensions);
console.log(xml.extensions);
console.log(yaml.version);
console.log(zig.version);
console.log(zsh.extensions);
```

Import from the package root when bundle size is not a concern:

```ts
import {
  abap,
  actionscript,
  ada,
  antlr,
  apex,
  apl,
  applescript,
  arduino,
  asciidoc,
  asp,
  astro,
  assembly,
  autohotkey,
  awk,
  bash,
  bazel,
  bicep,
  blade,
  c,
  clojure,
  cmake,
  coffeescript,
  coldfusion,
  cpp,
  csharp,
  crystal,
  css,
  cue,
  cuda,
  cython,
  d,
  detectLanguage,
  detectLanguages,
  dockerfile,
  elixir,
  elm,
  erb,
  erlang,
  fennel,
  forth,
  fortran,
  fsharp,
  gdscript,
  go,
  gleam,
  glsl,
  graphql,
  groovy,
  handlebars,
  haskell,
  haxe,
  hcl,
  hlsl,
  html,
  ini,
  java,
  jinja,
  json,
  jsonnet,
  jupyterNotebook,
  julia,
  kotlin,
  less,
  liquid,
  lisp,
  lua,
  makefile,
  matlab,
  localizeLanguage,
  markdown,
  mdx,
  mermaid,
  meson,
  metal,
  nginx,
  nim,
  nix,
  ocaml,
  objectiveC,
  pascal,
  perl,
  php,
  plantuml,
  powershell,
  prolog,
  protobuf,
  pug,
  qml,
  r,
  racket,
  razor,
  ruby,
  rust,
  scala,
  scss,
  solidity,
  sql,
  starlark,
  svg,
  svn,
  svelte,
  swift,
  tcl,
  toml,
  typescript,
  typst,
  verilog,
  vhdl,
  visualBasic,
  vue,
  webassembly,
  wgsl,
  xaml,
  xml,
  yaml,
  zig,
  zsh,
} from "code-languages";

console.log(localizeLanguage(abap).description);
console.log(localizeLanguage(actionscript, "es").description);
console.log(localizeLanguage(ada, "es").description);
console.log(localizeLanguage(antlr, "es").description);
console.log(localizeLanguage(apex, "es").description);
console.log(localizeLanguage(apl, "es").description);
console.log(localizeLanguage(applescript, "es").description);
console.log(localizeLanguage(arduino, "es").description);
console.log(localizeLanguage(asciidoc, "es").description);
console.log(localizeLanguage(asp, "es").description);
console.log(localizeLanguage(astro, "es").description);
console.log(localizeLanguage(assembly).description);
console.log(localizeLanguage(autohotkey, "es").description);
console.log(localizeLanguage(awk, "es").description);
console.log(detectLanguage("src/index.ts")?.slug);
console.log(detectLanguages("include/config.h").map((language) => language.slug));
console.log(localizeLanguage(bash, "es").description);
console.log(localizeLanguage(bazel, "es").description);
console.log(localizeLanguage(bicep, "es").description);
console.log(localizeLanguage(blade, "es").description);
console.log(c.version);
console.log(localizeLanguage(clojure, "es").description);
console.log(localizeLanguage(cmake).description);
console.log(localizeLanguage(coffeescript).name);
console.log(localizeLanguage(coldfusion, "es").description);
console.log(cpp.website);
console.log(localizeLanguage(csharp).description);
console.log(localizeLanguage(crystal, "es").description);
console.log(localizeLanguage(css).name);
console.log(localizeLanguage(cue, "es").description);
console.log(localizeLanguage(cuda, "es").description);
console.log(localizeLanguage(cython, "es").description);
console.log(localizeLanguage(d, "es").description);
console.log(dockerfile.website);
console.log(localizeLanguage(elixir, "es").description);
console.log(localizeLanguage(elm, "es").description);
console.log(localizeLanguage(erb, "es").description);
console.log(localizeLanguage(erlang, "es").description);
console.log(localizeLanguage(fennel, "es").description);
console.log(localizeLanguage(forth, "es").description);
console.log(localizeLanguage(fortran).description);
console.log(localizeLanguage(fsharp, "es").description);
console.log(localizeLanguage(gdscript, "es").description);
console.log(localizeLanguage(gleam, "es").description);
console.log(localizeLanguage(glsl, "es").description);
console.log(localizeLanguage(graphql, "es").description);
console.log(localizeLanguage(groovy).description);
console.log(localizeLanguage(handlebars, "es").description);
console.log(localizeLanguage(haskell, "es").description);
console.log(localizeLanguage(haxe, "es").description);
console.log(localizeLanguage(hcl, "es").description);
console.log(localizeLanguage(hlsl, "es").description);
console.log(localizeLanguage(ini, "es").description);
console.log(localizeLanguage(java).name);
console.log(localizeLanguage(jinja, "es").description);
console.log(localizeLanguage(jsonnet, "es").description);
console.log(html.website);
console.log(localizeLanguage(julia, "es").description);
console.log(localizeLanguage(kotlin, "es-PE").description);
console.log(localizeLanguage(less, "es").name);
console.log(localizeLanguage(liquid, "es").description);
console.log(localizeLanguage(lisp).description);
console.log(localizeLanguage(lua, "es").description);
console.log(localizeLanguage(makefile).description);
console.log(localizeLanguage(matlab, "es").description);
console.log(markdown.extensions);
console.log(localizeLanguage(mdx, "es").description);
console.log(localizeLanguage(mermaid, "es").description);
console.log(localizeLanguage(meson, "es").description);
console.log(localizeLanguage(metal).description);
console.log(localizeLanguage(nginx, "es").description);
console.log(localizeLanguage(nim, "es").description);
console.log(localizeLanguage(nix, "es").description);
console.log(localizeLanguage(ocaml, "es").description);
console.log(objectiveC.extensions);
console.log(localizeLanguage(pascal, "es").description);
console.log(localizeLanguage(perl).description);
console.log(localizeLanguage(php, "es").description);
console.log(localizeLanguage(plantuml, "es").description);
console.log(localizeLanguage(powershell).name);
console.log(localizeLanguage(prolog, "es").description);
console.log(localizeLanguage(protobuf, "es").description);
console.log(localizeLanguage(pug, "es").description);
console.log(localizeLanguage(qml, "es").description);
console.log(go.logo);
console.log(localizeLanguage(r, "es").description);
console.log(localizeLanguage(racket, "es").description);
console.log(localizeLanguage(razor, "es").description);
console.log(localizeLanguage(ruby, "es").description);
console.log(localizeLanguage(scala, "es").description);
console.log(localizeLanguage(scss).name);
console.log(localizeLanguage(solidity, "es").description);
console.log(json.website);
console.log(sql.extensions);
console.log(localizeLanguage(starlark, "es").description);
console.log(localizeLanguage(svg, "es").description);
console.log(localizeLanguage(svn, "es").description);
console.log(localizeLanguage(svelte).name);
console.log(swift.i18n.en.description);
console.log(localizeLanguage(tcl, "es").description);
console.log(localizeLanguage(toml, "es").description);
console.log(localizeLanguage(typst, "es").description);
console.log(localizeLanguage(verilog, "es").description);
console.log(localizeLanguage(vhdl, "es").description);
console.log(localizeLanguage(visualBasic, "es").description);
console.log(localizeLanguage(vue, "es").description);
console.log(localizeLanguage(webassembly).name);
console.log(localizeLanguage(wgsl, "es").description);
console.log(localizeLanguage(xaml, "es").description);
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
| <img src="https://icons.iconarchive.com/icons/fatcow/farm-fresh/32/page-white-actionscript-icon.png" alt="ActionScript logo" width="24" height="24"> | ActionScript | `actionscript` | `.as` | `3.0` | `code-languages/actionscript` |
| <img src="https://cdn.simpleicons.org/ada/02F88C" alt="Ada logo" width="24" height="24"> | Ada | `ada` | `.adb`, `.ads`, `.ada` | `Ada 2022` | `code-languages/ada` |
| <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_antlr.svg" alt="ANTLR Grammar logo" width="24" height="24"> | ANTLR Grammar | `antlr` | `.g4` | `4.13.2` | `code-languages/antlr` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Salesforce.com_logo.svg" alt="Apex logo" width="24" height="24"> | Apex | `apex` | `.cls`, `.trigger` | `API 66.0` | `code-languages/apex` |
| <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_apl.svg" alt="APL logo" width="24" height="24"> | APL | `apl` | `.apl`, `.dyalog` | `ISO/IEC 13751:2001` | `code-languages/apl` |
| <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_applescript.svg" alt="AppleScript logo" width="24" height="24"> | AppleScript | `applescript` | `.applescript`, `.scpt`, `.scptd` | `2.8` | `code-languages/applescript` |
| <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_arduino.svg" alt="Arduino Sketch logo" width="24" height="24"> | Arduino Sketch | `arduino` | `.ino`, `.pde` | `Arduino API 1.0` | `code-languages/arduino` |
| <img src="https://cdn.simpleicons.org/asciidoctor/E40046" alt="AsciiDoc logo" width="24" height="24"> | AsciiDoc | `asciidoc` | `.adoc`, `.asciidoc`, `.asc` | `pre-spec` | `code-languages/asciidoc` |
| <img src="https://cdn.simpleicons.org/dotnet/512BD4" alt="ASP/ASPX logo" width="24" height="24"> | ASP/ASPX | `asp` | `.asp`, `.aspx`, `.ascx`, `.ashx`, `.asmx`, `.master` | `4.8.1` | `code-languages/asp` |
| <img src="https://astro.build/assets/press/astro-icon-light.svg" alt="Astro logo" width="24" height="24"> | Astro | `astro` | `.astro` | `6.3.3` | `code-languages/astro` |
| <img src="https://cdn.simpleicons.org/assemblyscript/007AAC" alt="Assembly logo" width="24" height="24"> | Assembly | `assembly` | `.asm`, `.s`, `.S`, `.inc` | `Architecture-specific` | `code-languages/assembly` |
| <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_autohotkey.svg" alt="AutoHotkey logo" width="24" height="24"> | AutoHotkey | `autohotkey` | `.ahk`, `.ah2` | `2.0` | `code-languages/autohotkey` |
| <img src="https://www.gnu.org/graphics/heckert_gnu.small.png" alt="awk logo" width="24" height="24"> | awk | `awk` | `.awk` | `GNU Awk 5.4.0` | `code-languages/awk` |
| <img src="https://bashlogo.com/img/symbol/svg/full_colored_dark.svg" alt="Bash logo" width="24" height="24"> | Bash | `bash` | `.sh`, `.bash`, `.bashrc`, `.bash_profile`, `.bash_login`, `.profile` | `5.3` | `code-languages/bash` |
| <img src="https://icons.iconarchive.com/icons/simpleicons-team/simple/128/windowsterminal-icon.png" alt="Batch logo" width="24" height="24"> | Batch | `batch` | `.bat`, `.cmd` | `Windows Command Processor` | `code-languages/batch` |
| <img src="https://cdn.simpleicons.org/bazel/43A047" alt="Bazel logo" width="24" height="24"> | Bazel | `bazel` | `BUILD.bazel`, `WORKSPACE`, `WORKSPACE.bazel`, `MODULE.bazel` | `9.0.2` | `code-languages/bazel` |
| <img src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/azure-bicep.svg" alt="Bicep logo" width="24" height="24"> | Bicep | `bicep` | `.bicep`, `.bicepparam` | `0.43.8` | `code-languages/bicep` |
| <img src="https://cdn.simpleicons.org/laravel/FF2D20" alt="Blade logo" width="24" height="24"> | Blade | `blade` | `.blade.php` | `Laravel 12.x` | `code-languages/blade` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" alt="C logo" width="24" height="24"> | C | `c` | `.c`, `.h` | `C23` | `code-languages/c` |
| <img src="https://cmake.org/wp-content/uploads/2023/08/CMake-Logo.svg" alt="CMake logo" width="24" height="24"> | CMake | `cmake` | `CMakeLists.txt`, `.cmake` | `4.3.2` | `code-languages/cmake` |
| <img src="https://cdn.simpleicons.org/clojure/5881D8" alt="Clojure logo" width="24" height="24"> | Clojure | `clojure` | `.clj`, `.cljs`, `.cljc`, `.edn`, `.bb` | `1.12.5` | `code-languages/clojure` |
| <img src="https://cdn.simpleicons.org/coffeescript/2F2625" alt="CoffeeScript logo" width="24" height="24"> | CoffeeScript | `coffeescript` | `.coffee`, `.litcoffee`, `.cson` | `2.7.0` | `code-languages/coffeescript` |
| <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_cf.svg" alt="ColdFusion logo" width="24" height="24"> | ColdFusion | `coldfusion` | `.cfm`, `.cfml`, `.cfc` | `ColdFusion 2025` | `code-languages/coldfusion` |
| <img src="https://logo.svgcdn.com/devicon/cobol-original.png" alt="COBOL logo" width="24" height="24"> | COBOL | `cobol` | `.cob`, `.cbl`, `.cobol`, `.cpy` | `ISO/IEC 1989:2023` | `code-languages/cobol` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" alt="C++ logo" width="24" height="24"> | C++ | `cpp` | `.cpp`, `.cc`, `.cxx`, `.h`, `.hpp`, `.hh`, `.hxx` | `C++23` | `code-languages/cpp` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg" alt="C# logo" width="24" height="24"> | C# | `csharp` | `.cs`, `.csx` | `14` | `code-languages/csharp` |
| <img src="https://cdn.simpleicons.org/crystal/000000" alt="Crystal logo" width="24" height="24"> | Crystal | `crystal` | `.cr` | `1.20.2` | `code-languages/crystal` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg" alt="CSS logo" width="24" height="24"> | CSS | `css` | `.css` | `Living Standard` | `code-languages/css` |
| <img src="https://avatars.githubusercontent.com/u/43867057?s=200&v=4" alt="CUE logo" width="24" height="24"> | CUE | `cue` | `.cue` | `0.16.1` | `code-languages/cue` |
| <img src="https://cdn.simpleicons.org/nvidia/76B900" alt="CUDA logo" width="24" height="24"> | CUDA | `cuda` | `.cu`, `.cuh` | `13.2.1` | `code-languages/cuda` |
| <img src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_cython.svg" alt="Cython logo" width="24" height="24"> | Cython | `cython` | `.pyx`, `.pxd`, `.pxi` | `3.1.4` | `code-languages/cython` |
| <img src="https://cdn.simpleicons.org/d/BA595E" alt="D logo" width="24" height="24"> | D | `d` | `.d`, `.di` | `2.112.0` | `code-languages/d` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Dart_programming_language_logo.svg" alt="Dart logo" width="24" height="24"> | Dart | `dart` | `.dart` | `3.11.6` | `code-languages/dart` |
| <img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" alt="Dockerfile logo" width="24" height="24"> | Dockerfile | `dockerfile` | `Dockerfile`, `.dockerfile` | `1.10` | `code-languages/dockerfile` |
| <img src="https://cdn.simpleicons.org/elixir/4B275F" alt="Elixir logo" width="24" height="24"> | Elixir | `elixir` | `.ex`, `.exs`, `.eex`, `.leex`, `.heex` | `1.19.5` | `code-languages/elixir` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Elm_logo.svg" alt="Elm logo" width="24" height="24"> | Elm | `elm` | `.elm` | `0.19.1` | `code-languages/elm` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Ruby_logo.svg" alt="ERB logo" width="24" height="24"> | ERB | `erb` | `.erb`, `.rhtml`, `.html.erb` | `Ruby stdlib` | `code-languages/erb` |
| <img src="https://cdn.simpleicons.org/erlang/A90533" alt="Erlang logo" width="24" height="24"> | Erlang | `erlang` | `.erl`, `.hrl`, `.app.src`, `.escript`, `.xrl`, `.yrl`, `rebar.config` | `OTP 29.0` | `code-languages/erlang` |
| <img src="https://fennel-lang.org/logo.svg" alt="Fennel logo" width="24" height="24"> | Fennel | `fennel` | `.fnl` | `1.6.1` | `code-languages/fennel` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Gforth_Logo.png" alt="Forth logo" width="24" height="24"> | Forth | `forth` | `.fs`, `.fth`, `.forth`, `.4th` | `Forth 2012` | `code-languages/forth` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Fortran_logo.svg" alt="Fortran logo" width="24" height="24"> | Fortran | `fortran` | `.f`, `.for`, `.ftn`, `.f90`, `.f95`, `.f03`, `.f08`, `.f18`, `.f23` | `Fortran 2023` | `code-languages/fortran` |
| <img src="https://cdn.simpleicons.org/fsharp/378BBA" alt="F# logo" width="24" height="24"> | F# | `fsharp` | `.fs`, `.fsi`, `.fsx`, `.fsscript` | `10` | `code-languages/fsharp` |
| <img src="https://cdn.simpleicons.org/godotengine/478CBF" alt="GDScript logo" width="24" height="24"> | GDScript | `gdscript` | `.gd` | `4.6` | `code-languages/gdscript` |
| <img src="https://cdn.simpleicons.org/git/F05032" alt="Git logo" width="24" height="24"> | Git | `git` | `.git`, `.gitignore`, `.gitattributes`, `.gitmodules`, `.gitkeep` | `2.54.0` | `code-languages/git` |
| <img src="https://cdn.simpleicons.org/gleam/FFAFF3" alt="Gleam logo" width="24" height="24"> | Gleam | `gleam` | `.gleam` | `1.16.0` | `code-languages/gleam` |
| <img src="https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg" alt="Go logo" width="24" height="24"> | Go | `go` | `.go` | `1.26.3` | `code-languages/go` |
| <img src="https://cdn.simpleicons.org/gradle/02303A" alt="Gradle logo" width="24" height="24"> | Gradle | `gradle` | `.gradle`, `.gradle.kts` | `9.5.1` | `code-languages/gradle` |
| <img src="https://cdn.simpleicons.org/opengl/5586A4" alt="GLSL logo" width="24" height="24"> | GLSL | `glsl` | `.glsl`, `.vert`, `.frag`, `.geom`, `.tesc`, `.tese`, `.comp`, `.vs`, `.fs` | `4.60` | `code-languages/glsl` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg" alt="GraphQL logo" width="24" height="24"> | GraphQL | `graphql` | `.graphql`, `.gql`, `.graphqls` | `September 2025` | `code-languages/graphql` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/Groovy-logo.svg" alt="Groovy logo" width="24" height="24"> | Groovy | `groovy` | `.groovy`, `.gvy`, `.gy`, `.gsh` | `5.0.5` | `code-languages/groovy` |
| <img src="https://cdn.simpleicons.org/handlebarsdotjs/000000" alt="Handlebars logo" width="24" height="24"> | Handlebars | `handlebars` | `.hbs`, `.handlebars` | `4.7.9` | `code-languages/handlebars` |
| <img src="https://cdn.simpleicons.org/haskell/5D4F85" alt="Haskell logo" width="24" height="24"> | Haskell | `haskell` | `.hs`, `.lhs`, `.hsc`, `.hs-boot`, `.hsig`, `.cabal` | `GHC 9.14.1` | `code-languages/haskell` |
| <img src="https://cdn.simpleicons.org/haxe/EA8220" alt="Haxe logo" width="24" height="24"> | Haxe | `haxe` | `.hx`, `.hxml` | `4.3.7` | `code-languages/haxe` |
| <img src="https://cdn.simpleicons.org/hashicorp/844FBA" alt="HCL logo" width="24" height="24"> | HCL | `hcl` | `.hcl`, `.tf`, `.tfvars`, `.pkr.hcl`, `.nomad` | `2.24.0` | `code-languages/hcl` |
| <img src="https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@master/icons/file_type_hlsl.svg" alt="HLSL logo" width="24" height="24"> | HLSL | `hlsl` | `.hlsl`, `.fx`, `.fxh`, `.hlsli` | `Shader Model 6.9` | `code-languages/hlsl` |
| <img src="https://www.w3.org/html/logo/downloads/HTML5_Badge.svg" alt="HTML logo" width="24" height="24"> | HTML | `html` | `.html`, `.htm` | `Living Standard` | `code-languages/html` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Configure.svg" alt="INI logo" width="24" height="24"> | INI | `ini` | `.ini` | `Informal format` | `code-languages/ini` |
| <img src="https://www.vectorlogo.zone/logos/java/java-icon.svg" alt="Java logo" width="24" height="24"> | Java | `java` | `.java` | `26` | `code-languages/java` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript logo" width="24" height="24"> | JavaScript | `javascript` | `.js`, `.mjs`, `.cjs`, `.jsx` | `ECMAScript 2025` | `code-languages/javascript` |
| <img src="https://cdn.simpleicons.org/jinja/B41717" alt="Jinja logo" width="24" height="24"> | Jinja | `jinja` | `.jinja`, `.jinja2`, `.j2` | `3.1.6` | `code-languages/jinja` |
| <img src="https://www.json.org/img/json160.gif" alt="JSON logo" width="24" height="24"> | JSON | `json` | `.json` | `RFC 8259` | `code-languages/json` |
| <img src="https://jsonnet.org/img/isologo.svg" alt="Jsonnet logo" width="24" height="24"> | Jsonnet | `jsonnet` | `.jsonnet`, `.libsonnet` | `0.21.0` | `code-languages/jsonnet` |
| <img src="https://cdn.simpleicons.org/jupyter/F37626" alt="Jupyter Notebook logo" width="24" height="24"> | Jupyter Notebook | `jupyter-notebook` | `.ipynb` | `nbformat 4.5` | `code-languages/jupyter-notebook` |
| <img src="https://cdn.simpleicons.org/julia/9558B2" alt="Julia logo" width="24" height="24"> | Julia | `julia` | `.jl` | `1.12.6` | `code-languages/julia` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png" alt="Kotlin logo" width="24" height="24"> | Kotlin | `kotlin` | `.kt`, `.kts` | `2.3.20` | `code-languages/kotlin` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LESS_Logo.svg" alt="Less logo" width="24" height="24"> | Less | `less` | `.less` | `4.4.1` | `code-languages/less` |
| <img src="https://cdn.simpleicons.org/shopify/7AB55C" alt="Liquid logo" width="24" height="24"> | Liquid | `liquid` | `.liquid` | `10.21.1` | `code-languages/liquid` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Lisp_logo.svg" alt="Lisp logo" width="24" height="24"> | Lisp | `lisp` | `.lisp`, `.lsp`, `.cl`, `.asd` | `ANSI INCITS 226-1994` | `code-languages/lisp` |
| <img src="https://www.lua.org/images/lua-logo.gif" alt="Lua logo" width="24" height="24"> | Lua | `lua` | `.lua`, `.rockspec` | `5.5.0` | `code-languages/lua` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Heckert_gnu.small.png" alt="Makefile logo" width="24" height="24"> | Makefile | `makefile` | `Makefile`, `makefile`, `GNUmakefile`, `.mk`, `.mak` | `4.4.1` | `code-languages/makefile` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Matlab_Logo.png" alt="MATLAB logo" width="24" height="24"> | MATLAB | `matlab` | `.m`, `.mlx` | `R2026a` | `code-languages/matlab` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg" alt="Markdown logo" width="24" height="24"> | Markdown | `markdown` | `.md`, `.markdown`, `.mdown`, `.mkd` | `CommonMark 0.31.2` | `code-languages/markdown` |
| <img src="https://cdn.simpleicons.org/mdx/1B1F24" alt="MDX logo" width="24" height="24"> | MDX | `mdx` | `.mdx` | `3.1.1` | `code-languages/mdx` |
| <img src="https://cdn.simpleicons.org/mermaid/FF3670" alt="Mermaid logo" width="24" height="24"> | Mermaid | `mermaid` | `.mmd`, `.mermaid` | `11.11.0` | `code-languages/mermaid` |
| <img src="https://raw.githubusercontent.com/mesonbuild/meson/master/graphics/meson_logo.svg" alt="Meson logo" width="24" height="24"> | Meson | `meson` | `meson.build`, `meson_options.txt`, `meson.options`, `.wrap` | `1.11.1` | `code-languages/meson` |
| <img src="https://developer.apple.com/assets/elements/icons/metal/metal-256x256_2x.png" alt="Metal logo" width="24" height="24"> | Metal | `metal` | `.metal` | `Metal 4` | `code-languages/metal` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg" alt="nginx logo" width="24" height="24"> | nginx | `nginx` | `nginx.conf`, `.nginx`, `.conf` | `1.30.1` | `code-languages/nginx` |
| <img src="https://cdn.simpleicons.org/nim/FFE953" alt="Nim logo" width="24" height="24"> | Nim | `nim` | `.nim`, `.nims`, `.nimble` | `2.2.10` | `code-languages/nim` |
| <img src="https://cdn.simpleicons.org/nixos/5277C3" alt="Nix logo" width="24" height="24"> | Nix | `nix` | `.nix` | `2.28` | `code-languages/nix` |
| <img src="https://cdn.simpleicons.org/ocaml/EC6813" alt="OCaml logo" width="24" height="24"> | OCaml | `ocaml` | `.ml`, `.mli`, `.mll`, `.mly`, `.mlt`, `.eliom`, `.eliomi` | `5.6.0` | `code-languages/ocaml` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Apple_logo_grey.svg" alt="Objective-C logo" width="24" height="24"> | Objective-C | `objective-c` | `.m`, `.mm` | `2.0` | `code-languages/objective-c` |
| <img src="https://cdn.simpleicons.org/lazarus/000000" alt="Pascal logo" width="24" height="24"> | Pascal | `pascal` | `.pas`, `.pp`, `.inc`, `.lpr`, `.dpr`, `.dfm` | `3.2.2` | `code-languages/pascal` |
| <img src="https://cdn.simpleicons.org/perl/39457E" alt="Perl logo" width="24" height="24"> | Perl | `perl` | `.pl`, `.pm`, `.pod`, `.t`, `.psgi` | `5.42.2` | `code-languages/perl` |
| <img src="https://www.php.net/images/logos/new-php-logo.svg" alt="PHP logo" width="24" height="24"> | PHP | `php` | `.php`, `.phtml`, `.php3`, `.php4`, `.php5`, `.phps` | `8.5.6` | `code-languages/php` |
| <img src="https://plantuml.com/logo3.png" alt="PlantUML logo" width="24" height="24"> | PlantUML | `plantuml` | `.puml`, `.plantuml`, `.iuml` | `1.2026.3` | `code-languages/plantuml` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/PowerShell_5.0_icon.png" alt="PowerShell logo" width="24" height="24"> | PowerShell | `powershell` | `.ps1`, `.psm1`, `.psd1`, `.ps1xml` | `7.6.1` | `code-languages/powershell` |
| <img src="https://www.swi-prolog.org/icons/swipl.png" alt="Prolog logo" width="24" height="24"> | Prolog | `prolog` | `.pl`, `.pro`, `.prolog`, `.P` | `SWI-Prolog 10.0` | `code-languages/prolog` |
| <img src="https://cdn.simpleicons.org/google/4285F4" alt="Protocol Buffers logo" width="24" height="24"> | Protocol Buffers | `protobuf` | `.proto` | `34.1` | `code-languages/protobuf` |
| <img src="https://cdn.simpleicons.org/pug/A86454" alt="Pug logo" width="24" height="24"> | Pug | `pug` | `.pug`, `.jade` | `3.0.4` | `code-languages/pug` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Python-logo-notext.svg" alt="Python logo" width="24" height="24"> | Python | `python` | `.py`, `.pyw` | `3.14.4` | `code-languages/python` |
| <img src="https://cdn.simpleicons.org/qt/41CD52" alt="QML logo" width="24" height="24"> | QML | `qml` | `.qml`, `.qmltypes`, `.qmlproject` | `Qt 6.11.1` | `code-languages/qml` |
| <img src="https://www.r-project.org/logo/Rlogo.svg" alt="R logo" width="24" height="24"> | R | `r` | `.r`, `.R`, `.rmd`, `.Rmd`, `.qmd`, `.Rprofile` | `4.6.0` | `code-languages/r` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Racket-logo.svg" alt="Racket logo" width="24" height="24"> | Racket | `racket` | `.rkt`, `.rktd`, `.rktl`, `.scrbl` | `9.1` | `code-languages/racket` |
| <img src="https://cdn.simpleicons.org/dotnet/512BD4" alt="Razor logo" width="24" height="24"> | Razor | `razor` | `.cshtml`, `.razor` | `10.0.8` | `code-languages/razor` |
| <img src="https://raw.githubusercontent.com/open-policy-agent/opa/main/logo/logo.svg" alt="Rego logo" width="24" height="24"> | Rego | `rego` | `.rego` | `OPA 1.15.2` | `code-languages/rego` |
| <img src="https://www.ruby-lang.org/images/header-ruby-logo.png" alt="Ruby logo" width="24" height="24"> | Ruby | `ruby` | `.rb`, `.rbw`, `.rake`, `.gemspec`, `Gemfile`, `Rakefile`, `config.ru` | `4.0.4` | `code-languages/ruby` |
| <img src="https://www.rust-lang.org/logos/rust-logo-512x512.png" alt="Rust logo" width="24" height="24"> | Rust | `rust` | `.rs` | `1.95.0` | `code-languages/rust` |
| <img src="https://cdn.simpleicons.org/scala/DC322F" alt="Scala logo" width="24" height="24"> | Scala | `scala` | `.scala`, `.sc` | `3.8.3` | `code-languages/scala` |
| <img src="https://sass-lang.com/assets/img/logos/logo.svg" alt="Sass logo" width="24" height="24"> | Sass | `scss` | `.scss`, `.sass` | `1.99.0` | `code-languages/scss` |
| <img src="https://cdn.simpleicons.org/solidity/363636" alt="Solidity logo" width="24" height="24"> | Solidity | `solidity` | `.sol` | `0.8.35` | `code-languages/solidity` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" alt="SQL logo" width="24" height="24"> | SQL | `sql` | `.sql` | `SQL:2023` | `code-languages/sql` |
| <img src="https://cdn.simpleicons.org/bazel/43A047" alt="Starlark logo" width="24" height="24"> | Starlark | `starlark` | `.bzl`, `.star`, `.sky` | `Bazel Starlark` | `code-languages/starlark` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/SVG_Logo.svg" alt="SVG logo" width="24" height="24"> | SVG | `svg` | `.svg`, `.svgz` | `SVG 2` | `code-languages/svg` |
| <img src="https://cdn.simpleicons.org/subversion/809CC9" alt="SVN logo" width="24" height="24"> | SVN | `svn` | `.svn`, `svnserve.conf` | `1.14.5` | `code-languages/svn` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" alt="Svelte logo" width="24" height="24"> | Svelte | `svelte` | `.svelte` | `5.55.7` | `code-languages/svelte` |
| <img src="https://www.swift.org/assets/images/swift.svg" alt="Swift logo" width="24" height="24"> | Swift | `swift` | `.swift` | `6.2.2` | `code-languages/swift` |
| <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Tcl.svg" alt="Tcl/Tk logo" width="24" height="24"> | Tcl/Tk | `tcl` | `.tcl`, `.tm`, `.test` | `9.0.3` | `code-languages/tcl` |
| <img src="https://cdn.simpleicons.org/latex/008080" alt="TeX logo" width="24" height="24"> | TeX | `tex` | `.tex`, `.sty`, `.cls`, `.dtx`, `.ins`, `.ltx` | `TeX Live 2026` | `code-languages/tex` |
| <img src="https://cdn.simpleicons.org/toml/9C4221" alt="TOML logo" width="24" height="24"> | TOML | `toml` | `.toml` | `1.1.0` | `code-languages/toml` |
| <img src="https://twig.symfony.com/images/logo.png" alt="Twig logo" width="24" height="24"> | Twig | `twig` | `.twig` | `3.25.0` | `code-languages/twig` |
| <img src="https://www.typescriptlang.org/icons/icon-512x512.png" alt="TypeScript logo" width="24" height="24"> | TypeScript | `typescript` | `.ts`, `.tsx`, `.mts`, `.cts` | `6.0` | `code-languages/typescript` |
| <img src="https://cdn.simpleicons.org/typst/239DAD" alt="Typst logo" width="24" height="24"> | Typst | `typst` | `.typ` | `0.14.2` | `code-languages/typst` |
| <img src="https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@master/icons/file_type_verilog.svg" alt="Verilog/SystemVerilog logo" width="24" height="24"> | Verilog/SystemVerilog | `verilog` | `.v`, `.vh`, `.sv`, `.svh` | `IEEE 1800-2023` | `code-languages/verilog` |
| <img src="https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@master/icons/file_type_vhdl.svg" alt="VHDL logo" width="24" height="24"> | VHDL | `vhdl` | `.vhd`, `.vhdl` | `IEEE 1076-2019` | `code-languages/vhdl` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/VB.NET_Logo.svg" alt="Visual Basic logo" width="24" height="24"> | Visual Basic | `visual-basic` | `.vb` | `17.13` | `code-languages/visual-basic` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Vue logo" width="24" height="24"> | Vue | `vue` | `.vue` | `3.5.34` | `code-languages/vue` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/1/1f/WebAssembly_Logo.svg" alt="WebAssembly logo" width="24" height="24"> | WebAssembly | `webassembly` | `.wasm`, `.wat` | `3.0` | `code-languages/webassembly` |
| <img src="https://cdn.simpleicons.org/webgpu/005A9C" alt="WGSL logo" width="24" height="24"> | WGSL | `wgsl` | `.wgsl` | `Candidate Recommendation Draft 2026-05-07` | `code-languages/wgsl` |
| <img src="https://cdn.simpleicons.org/dotnet/512BD4" alt="XAML logo" width="24" height="24"> | XAML | `xaml` | `.xaml`, `.baml` | `Platform-specific` | `code-languages/xaml` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/6/68/XML.svg" alt="XML logo" width="24" height="24"> | XML | `xml` | `.xml`, `.xsd`, `.xsl`, `.xslt` | `XML 1.0 Fifth Edition` | `code-languages/xml` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/6/68/XML.svg" alt="XQuery logo" width="24" height="24"> | XQuery | `xquery` | `.xq`, `.xql`, `.xqm`, `.xquery`, `.xqy` | `XQuery 3.1` | `code-languages/xquery` |
| <img src="https://upload.wikimedia.org/wikipedia/commons/6/68/XML.svg" alt="XSLT logo" width="24" height="24"> | XSLT | `xslt` | `.xsl`, `.xslt` | `XSLT 3.0` | `code-languages/xslt` |
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
| `npm run bench` | Run manual performance benchmarks |
| `npm run build` | Build ESM, CommonJS, and declaration files |
| `npm run check` | Run lint, typecheck, and tests |
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
