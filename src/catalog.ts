import { astro } from "./languages/astro";
import { bash } from "./languages/bash";
import { c } from "./languages/c";
import { cpp } from "./languages/cpp";
import { csharp } from "./languages/csharp";
import { css } from "./languages/css";
import { dockerfile } from "./languages/dockerfile";
import { go } from "./languages/go";
import { groovy } from "./languages/groovy";
import { html } from "./languages/html";
import { java } from "./languages/java";
import { javascript } from "./languages/javascript";
import { json } from "./languages/json";
import { kotlin } from "./languages/kotlin";
import { less } from "./languages/less";
import { makefile } from "./languages/makefile";
import { markdown } from "./languages/markdown";
import { objectiveC } from "./languages/objective-c";
import { php } from "./languages/php";
import { python } from "./languages/python";
import { rust } from "./languages/rust";
import { scss } from "./languages/scss";
import { sql } from "./languages/sql";
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
  astro,
  bash,
  c,
  cpp,
  csharp,
  css,
  dockerfile,
  go,
  groovy,
  html,
  java,
  javascript,
  json,
  kotlin,
  less,
  makefile,
  markdown,
  objectiveC,
  php,
  python,
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
] as const;
