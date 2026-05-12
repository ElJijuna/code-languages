import { abap } from "./languages/abap";
import { assembly } from "./languages/assembly";
import { astro } from "./languages/astro";
import { bash } from "./languages/bash";
import { c } from "./languages/c";
import { cmake } from "./languages/cmake";
import { cobol } from "./languages/cobol";
import { coffeescript } from "./languages/coffeescript";
import { cpp } from "./languages/cpp";
import { csharp } from "./languages/csharp";
import { css } from "./languages/css";
import { dart } from "./languages/dart";
import { dockerfile } from "./languages/dockerfile";
import { go } from "./languages/go";
import { graphql } from "./languages/graphql";
import { groovy } from "./languages/groovy";
import { html } from "./languages/html";
import { java } from "./languages/java";
import { javascript } from "./languages/javascript";
import { json } from "./languages/json";
import { kotlin } from "./languages/kotlin";
import { less } from "./languages/less";
import { makefile } from "./languages/makefile";
import { markdown } from "./languages/markdown";
import { nginx } from "./languages/nginx";
import { objectiveC } from "./languages/objective-c";
import { php } from "./languages/php";
import { powershell } from "./languages/powershell";
import { python } from "./languages/python";
import { ruby } from "./languages/ruby";
import { rust } from "./languages/rust";
import { scss } from "./languages/scss";
import { sql } from "./languages/sql";
import { svelte } from "./languages/svelte";
import { svg } from "./languages/svg";
import { swift } from "./languages/swift";
import { typescript } from "./languages/typescript";
import { visualBasic } from "./languages/visual-basic";
import { vue } from "./languages/vue";
import { webassembly } from "./languages/webassembly";
import { xml } from "./languages/xml";
import { yaml } from "./languages/yaml";
import { zsh } from "./languages/zsh";

/** Ordered catalog of every language included in the package. */
export const languages = [
  abap,
  astro,
  assembly,
  bash,
  c,
  cmake,
  coffeescript,
  cobol,
  cpp,
  csharp,
  css,
  dart,
  dockerfile,
  go,
  graphql,
  groovy,
  html,
  java,
  javascript,
  json,
  kotlin,
  less,
  makefile,
  markdown,
  nginx,
  objectiveC,
  php,
  powershell,
  python,
  ruby,
  rust,
  scss,
  sql,
  svg,
  svelte,
  swift,
  typescript,
  visualBasic,
  vue,
  webassembly,
  xml,
  yaml,
  zsh,
] as const;
