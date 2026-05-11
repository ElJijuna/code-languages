import { astro } from "./languages/astro";
import { bash } from "./languages/bash";
import { c } from "./languages/c";
import { cpp } from "./languages/cpp";
import { css } from "./languages/css";
import { dockerfile } from "./languages/dockerfile";
import { go } from "./languages/go";
import { groovy } from "./languages/groovy";
import { html } from "./languages/html";
import { java } from "./languages/java";
import { javascript } from "./languages/javascript";
import { json } from "./languages/json";
import { kotlin } from "./languages/kotlin";
import { markdown } from "./languages/markdown";
import { php } from "./languages/php";
import { python } from "./languages/python";
import { rust } from "./languages/rust";
import { scss } from "./languages/scss";
import { sql } from "./languages/sql";
import { swift } from "./languages/swift";
import { typescript } from "./languages/typescript";
import { vue } from "./languages/vue";
import { xml } from "./languages/xml";
import { yaml } from "./languages/yaml";

/** Ordered catalog of every language included in the package. */
export const languages = [
  astro,
  bash,
  c,
  cpp,
  css,
  dockerfile,
  go,
  groovy,
  html,
  java,
  javascript,
  json,
  kotlin,
  markdown,
  php,
  python,
  rust,
  scss,
  sql,
  swift,
  typescript,
  vue,
  xml,
  yaml,
] as const;
