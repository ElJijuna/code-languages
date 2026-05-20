import { abap } from "./languages/abap";
import { actionscript } from "./languages/actionscript";
import { ada } from "./languages/ada";
import { agda } from "./languages/agda";
import { antlr } from "./languages/antlr";
import { apex } from "./languages/apex";
import { apl } from "./languages/apl";
import { applescript } from "./languages/applescript";
import { arduino } from "./languages/arduino";
import { asciidoc } from "./languages/asciidoc";
import { asp } from "./languages/asp";
import { assembly } from "./languages/assembly";
import { astro } from "./languages/astro";
import { autohotkey } from "./languages/autohotkey";
import { awk } from "./languages/awk";
import { bash } from "./languages/bash";
import { batch } from "./languages/batch";
import { bazel } from "./languages/bazel";
import { bicep } from "./languages/bicep";
import { blade } from "./languages/blade";
import { c } from "./languages/c";
import { carbon } from "./languages/carbon";
import { chapel } from "./languages/chapel";
import { circom } from "./languages/circom";
import { clojure } from "./languages/clojure";
import { cmake } from "./languages/cmake";
import { cobol } from "./languages/cobol";
import { coffeescript } from "./languages/coffeescript";
import { coldfusion } from "./languages/coldfusion";
import { coq } from "./languages/coq";
import { cpp } from "./languages/cpp";
import { crystal } from "./languages/crystal";
import { csharp } from "./languages/csharp";
import { css } from "./languages/css";
import { cuda } from "./languages/cuda";
import { cue } from "./languages/cue";
import { cython } from "./languages/cython";
import { d } from "./languages/d";
import { dart } from "./languages/dart";
import { dhall } from "./languages/dhall";
import { dita } from "./languages/dita";
import { dockerfile } from "./languages/dockerfile";
import { earthly } from "./languages/earthly";
import { elixir } from "./languages/elixir";
import { elm } from "./languages/elm";
import { erb } from "./languages/erb";
import { erlang } from "./languages/erlang";
import { fennel } from "./languages/fennel";
import { forth } from "./languages/forth";
import { fortran } from "./languages/fortran";
import { fsharp } from "./languages/fsharp";
import { gdscript } from "./languages/gdscript";
import { git } from "./languages/git";
import { gleam } from "./languages/gleam";
import { glsl } from "./languages/glsl";
import { go } from "./languages/go";
import { gradle } from "./languages/gradle";
import { graphql } from "./languages/graphql";
import { groovy } from "./languages/groovy";
import { hack } from "./languages/hack";
import { haml } from "./languages/haml";
import { handlebars } from "./languages/handlebars";
import { haskell } from "./languages/haskell";
import { haxe } from "./languages/haxe";
import { hcl } from "./languages/hcl";
import { hlsl } from "./languages/hlsl";
import { html } from "./languages/html";
import { idris } from "./languages/idris";
import { ini } from "./languages/ini";
import { janet } from "./languages/janet";
import { java } from "./languages/java";
import { javascript } from "./languages/javascript";
import { jinja } from "./languages/jinja";
import { json } from "./languages/json";
import { jsonnet } from "./languages/jsonnet";
import { julia } from "./languages/julia";
import { jupyterNotebook } from "./languages/jupyter-notebook";
import { kotlin } from "./languages/kotlin";
import { lean } from "./languages/lean";
import { less } from "./languages/less";
import { liquid } from "./languages/liquid";
import { lisp } from "./languages/lisp";
import { llvmIr } from "./languages/llvm-ir";
import { lua } from "./languages/lua";
import { luau } from "./languages/luau";
import { makefile } from "./languages/makefile";
import { markdown } from "./languages/markdown";
import { matlab } from "./languages/matlab";
import { mdx } from "./languages/mdx";
import { mermaid } from "./languages/mermaid";
import { meson } from "./languages/meson";
import { metal } from "./languages/metal";
import { nginx } from "./languages/nginx";
import { nim } from "./languages/nim";
import { nix } from "./languages/nix";
import { objectiveC } from "./languages/objective-c";
import { ocaml } from "./languages/ocaml";
import { pascal } from "./languages/pascal";
import { perl } from "./languages/perl";
import { php } from "./languages/php";
import { plantuml } from "./languages/plantuml";
import { powershell } from "./languages/powershell";
import { prolog } from "./languages/prolog";
import { protobuf } from "./languages/protobuf";
import { pug } from "./languages/pug";
import { python } from "./languages/python";
import { qml } from "./languages/qml";
import { r } from "./languages/r";
import { racket } from "./languages/racket";
import { razor } from "./languages/razor";
import { rego } from "./languages/rego";
import { ruby } from "./languages/ruby";
import { rust } from "./languages/rust";
import { scala } from "./languages/scala";
import { scss } from "./languages/scss";
import { solidity } from "./languages/solidity";
import { sql } from "./languages/sql";
import { starlark } from "./languages/starlark";
import { svelte } from "./languages/svelte";
import { svg } from "./languages/svg";
import { svn } from "./languages/svn";
import { swift } from "./languages/swift";
import { tcl } from "./languages/tcl";
import { tex } from "./languages/tex";
import { toml } from "./languages/toml";
import { twig } from "./languages/twig";
import { typescript } from "./languages/typescript";
import { typst } from "./languages/typst";
import { verilog } from "./languages/verilog";
import { vhdl } from "./languages/vhdl";
import { visualBasic } from "./languages/visual-basic";
import { vue } from "./languages/vue";
import { webassembly } from "./languages/webassembly";
import { wgsl } from "./languages/wgsl";
import { xaml } from "./languages/xaml";
import { xml } from "./languages/xml";
import { xquery } from "./languages/xquery";
import { xslt } from "./languages/xslt";
import { yaml } from "./languages/yaml";
import { zig } from "./languages/zig";
import { zsh } from "./languages/zsh";

/** Ordered catalog of every language included in the package. */
export const languages = [
  abap,
  actionscript,
  ada,
  agda,
  antlr,
  apex,
  apl,
  applescript,
  arduino,
  asciidoc,
  asp,
  astro,
  assembly,
  awk,
  autohotkey,
  bash,
  batch,
  bazel,
  bicep,
  blade,
  c,
  carbon,
  chapel,
  circom,
  cmake,
  clojure,
  coffeescript,
  coldfusion,
  cobol,
  coq,
  cpp,
  csharp,
  crystal,
  css,
  cue,
  cuda,
  cython,
  d,
  dart,
  dhall,
  dita,
  dockerfile,
  earthly,
  elixir,
  elm,
  erb,
  erlang,
  fennel,
  fortran,
  forth,
  fsharp,
  gdscript,
  git,
  gleam,
  go,
  gradle,
  glsl,
  graphql,
  groovy,
  handlebars,
  hack,
  haml,
  haskell,
  haxe,
  hcl,
  hlsl,
  html,
  idris,
  ini,
  java,
  javascript,
  janet,
  jinja,
  json,
  jsonnet,
  jupyterNotebook,
  julia,
  kotlin,
  lean,
  less,
  liquid,
  lisp,
  llvmIr,
  lua,
  luau,
  makefile,
  matlab,
  markdown,
  mdx,
  mermaid,
  meson,
  metal,
  svn,
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
  python,
  qml,
  r,
  racket,
  razor,
  rego,
  ruby,
  rust,
  scala,
  scss,
  solidity,
  sql,
  starlark,
  svg,
  svelte,
  swift,
  tcl,
  tex,
  toml,
  twig,
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
  xquery,
  xslt,
  yaml,
  zig,
  zsh,
] as const;
