import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { planLanguageVersionUpdate } from './language-version-update.mjs';

const languagesDir = 'src/languages';
const reportPath = 'language-version-report.json';

let githubRequestDelayMs = Number(process.env.GITHUB_REQUEST_DELAY_MS ?? '1200');

const githubRateLimitMaxWaitMs = Number(process.env.GITHUB_RATE_LIMIT_MAX_WAIT_MS ?? '60000');

let nextGithubRequestAt = 0;

const manualChecks = {
  abap: 'ABAP Platform releases should be reviewed manually against SAP Help Portal because the source page is rendered dynamically.',
  actionscript:
    'ActionScript is effectively stable at 3.0 and should be reviewed manually against Adobe AIR and Flash platform documentation.',
  ada: 'Ada standards should be reviewed manually against ISO/IEC 8652 and Ada Resource Association publications.',
  apex: 'Apex API versions are tied to Salesforce seasonal platform releases and should be reviewed manually against Salesforce release notes.',
  apl: 'APL language versioning is implementation-specific; review ISO/IEC 13751 and major implementation release notes manually.',
  applescript:
    'AppleScript is tied to macOS platform documentation and should be reviewed manually against Apple Developer documentation.',
  aql: 'AQL metadata is tied to ArangoDB server releases and should be reviewed manually against ArangoDB documentation.',
  arduino:
    'Arduino Sketch metadata is tied to Arduino API and board core releases rather than one independent language version.',
  asciidoc:
    'AsciiDoc language standardization is still pre-spec and should be reviewed manually against asciidoc.org and Asciidoctor releases.',
  assembly:
    'Assembly versions are architecture-specific and should be reviewed manually against assembler and ISA documentation.',
  c: 'ISO standards do not expose a stable free machine-readable latest-version endpoint.',
  batch:
    'Batch is tied to DOS and Windows Command Processor releases rather than an independent language version.',
  blade:
    'Blade versions are tied to Laravel framework releases and should be reviewed manually against Laravel documentation.',
  coldfusion:
    'ColdFusion versions are tied to Adobe ColdFusion and CFML platform releases and should be reviewed manually.',
  cobol: 'COBOL standards should be reviewed manually against ISO/IEC 1989 publications.',
  cpp: 'ISO standards do not expose a stable free machine-readable latest-version endpoint.',
  css: 'CSS is maintained as living specifications rather than one package version.',
  dafny:
    'Dafny releases should be reviewed manually against the dafny-lang/dafny GitHub releases page and dafny.org documentation.',
  dockerfile:
    'Dockerfile syntax versions depend on the BuildKit frontend image and should be reviewed manually.',
  dita: 'DITA specifications should be reviewed manually against OASIS publication history.',
  ejs: 'EJS releases should be reviewed manually against the ejs npm package and ejs.co documentation.',
  erb: "ERB ships with Ruby's standard library and should be reviewed manually against Ruby stdlib documentation.",
  forth:
    'Forth standards and implementation versions should be reviewed manually against forth-standard.org and major implementation releases.',
  fortran:
    'Fortran standards should be reviewed manually against ISO/IEC JTC1/SC22/WG5 publications.',
  freemarker:
    'FreeMarker versions should be reviewed manually against Apache FreeMarker releases and Maven Central.',
  fstar:
    'F* releases should be reviewed manually against the F* official website and FStarLang/FStar GitHub releases.',
  fe: 'Fe releases should be reviewed manually against fe-lang.org and the ethereum/fe GitHub releases.',
  hlsl: 'HLSL shader model support should be reviewed manually against Microsoft DirectX Shader Model documentation.',
  hack: 'Hack versions are tied to HHVM platform releases and should be reviewed manually against HHVM release notes.',
  html: 'HTML is maintained as a living standard.',
  ini: 'INI is an informal configuration format without a single formal versioned specification.',
  ink: 'Ink! releases should be reviewed manually against use.ink and paritytech/ink GitHub releases.',
  isabelle:
    'Isabelle releases should be reviewed manually against the Isabelle distribution page at isabelle.in.tum.de.',
  javascript:
    'ECMAScript editions are published yearly and should be checked against ECMA-262 release status.',
  json: 'RFC 8259 is stable and should be reviewed manually when a replacement RFC appears.',
  jsonc:
    'JSONC is a configuration-oriented JSON-with-comments convention and should be reviewed manually against jsonc.org and VS Code documentation.',
  'jupyter-notebook':
    'Jupyter Notebook schema versions should be reviewed manually against nbformat documentation and schema releases.',
  just: 'Just releases should be reviewed manually against the casey/just GitHub releases page.',
  kdl: 'KDL versions should be reviewed manually against the kdl.dev specification and kdl-org/kdl releases.',
  ligo: 'Ligo releases should be reviewed manually against ligolang.org and LigoLANG/ligo release notes.',
  lisp: 'Common Lisp is standardized as ANSI INCITS 226-1994 and should be reviewed manually against ANSI/INCITS publications.',
  lobster:
    'Lobster releases should be reviewed manually against the official Lobster site and git repository because snapshots do not expose a stable release API.',
  logo: 'Logo dialect versions should be reviewed manually against UCBLogo, FMSLogo, and other implementation release notes.',
  mako: 'Mako metadata should be reviewed manually against Mako release notes and PyPI releases.',
  marlowe:
    'Marlowe versions are tied to Cardano tooling and should be reviewed manually against Marlowe documentation and IOG release notes.',
  mathematica:
    'Wolfram Language versions are tied to Mathematica and Wolfram platform releases and should be reviewed manually.',
  mercury:
    'Mercury releases should be reviewed manually against the Mercury download page and compiler release announcements.',
  metal:
    'Metal versions are tied to Apple platform SDKs and should be reviewed manually against Apple Developer Metal documentation.',
  'modula-2':
    'Modula-2 standards and compiler releases should be reviewed manually against ISO/IEC 10514 and maintained compiler documentation.',
  mojo: 'Mojo releases should be reviewed manually against Modular release notes while the toolchain and versioning model evolve.',
  moonbit:
    'MoonBit releases should be reviewed manually against MoonBit release notes while its toolchain versioning evolves.',
  'objective-c':
    'Objective-C language versioning is effectively stable and should be reviewed manually against Apple documentation and runtime updates.',
  oberon:
    'Oberon versions vary by language revision and implementation; review Wirth publications and maintained compiler releases manually.',
  odin: 'Odin metadata tracks development snapshots and should be reviewed manually against Odin release notes.',
  opencl:
    'OpenCL C versions follow Khronos specifications and implementation support and should be reviewed manually.',
  openapi:
    'OpenAPI Specification versions should be reviewed manually against spec.openapis.org and OpenAPI Initiative publications.',
  'pine-script':
    'Pine Script versions are tied to TradingView documentation and should be reviewed manually.',
  'pl-i':
    'PL/I versions are tied to IBM Enterprise PL/I and related compilers; review IBM documentation and release notes manually.',
  plsql:
    'PL/SQL metadata is tied to Oracle Database releases and should be reviewed manually against Oracle documentation.',
  pony: 'Pony releases should be reviewed manually against Pony compiler release notes.',
  prolog:
    'Prolog has ISO standards and multiple implementations; metadata should be reviewed manually against ISO Prolog and SWI-Prolog releases.',
  puppet:
    'Puppet language versions are tied to Puppet platform releases and should be reviewed manually against Puppet documentation and release notes.',
  promql:
    'PromQL metadata is tied to Prometheus query semantics and Prometheus releases and should be reviewed manually.',
  purescript: 'PureScript releases should be reviewed manually against compiler release notes.',
  qsharp:
    'Q# language metadata is tied to Microsoft Quantum tooling and should be reviewed manually against Microsoft documentation.',
  qml: 'QML versions are tied to Qt platform releases and should be reviewed manually against Qt documentation.',
  raku: 'Raku language versions should be reviewed manually against Raku language and Rakudo release documentation.',
  rebol:
    'Rebol versions are implementation-specific across REBOL 2, Rebol 3, and community branches; review project documentation manually.',
  red: 'Red releases should be reviewed manually against red-lang.org and the red/red GitHub releases page.',
  reasonml:
    'ReasonML is a syntax layer over OCaml workflows and should be reviewed manually against Reason releases.',
  rescript:
    'ReScript releases should be reviewed manually against ReScript compiler release notes.',
  restructuredtext:
    'reStructuredText metadata follows Docutils and Sphinx ecosystem releases and should be reviewed manually.',
  roc: 'Roc releases should be reviewed manually against roc-lang.org and roc-lang/roc release notes while the language evolves.',
  sas: 'SAS language metadata is tied to SAS platform releases and should be reviewed manually.',
  scheme:
    'Scheme standards and implementation versions should be reviewed manually against R7RS and major implementations.',
  self: 'Self releases should be reviewed manually against selflanguage.org and Self VM release notes.',
  simula:
    'Simula is historically stable around Simula 67 and should be reviewed manually against simula67.info and maintained compiler documentation.',
  smalltalk:
    'Smalltalk metadata spans standards and image-based implementations and should be reviewed manually.',
  smarty: 'Smarty releases should be reviewed manually against Smarty project releases.',
  snobol:
    'SNOBOL metadata is historically stable around SNOBOL4 and should be reviewed manually against maintained SNOBOL4 and SPITBOL implementations.',
  sql: 'SQL standards should be reviewed manually against ISO/IEC 9075 publications.',
  spark:
    'SPARK releases are tied to AdaCore tooling and should be reviewed manually against SPARK and GNAT Pro documentation.',
  tsql: 'T-SQL metadata is tied to SQL Server and Azure SQL platform releases and should be reviewed manually against Microsoft Learn.',
  'standard-ml':
    'Standard ML metadata follows the language definition and implementations and should be reviewed manually.',
  starlark:
    'Starlark is embedded by host tools and should be reviewed manually against Bazel and Starlark language documentation.',
  stata:
    'Stata language metadata is tied to Stata platform releases and should be reviewed manually.',
  stylus: 'Stylus metadata should be reviewed manually against Stylus package releases.',
  svg: 'SVG specifications should be reviewed manually against w3.org/TR/SVG and W3C publication history.',
  thrift:
    'Thrift IDL metadata should be reviewed manually against Apache Thrift releases and compatibility notes.',
  'tla-plus':
    'TLA+ metadata follows its language specification and tooling releases and should be reviewed manually.',
  v: 'V metadata tracks compiler releases and should be reviewed manually against V release notes.',
  vala: 'Vala compiler metadata should be reviewed manually against Vala release announcements.',
  vale: 'Vale releases should be reviewed manually against vale.dev and the Vale compiler repository.',
  verilog:
    'Verilog/SystemVerilog standards should be reviewed manually against IEEE 1800 publications.',
  verse:
    'Verse versions are tied to Unreal Editor for Fortnite and Unreal Engine documentation and should be reviewed manually against Epic Games release notes.',
  vhdl: 'VHDL standards should be reviewed manually against IEEE 1076 publications.',
  vyper: 'Vyper releases should be reviewed manually against Vyper compiler release notes.',
  webassembly: 'WebAssembly standards should be reviewed manually against webassembly.org/specs.',
  wgsl: 'WGSL is maintained by W3C and should be reviewed manually against W3C GPU for the Web publications.',
  wren: 'Wren releases should be reviewed manually against Wren project releases.',
  xaml: 'XAML support is platform-specific across WPF, UWP, WinUI, .NET MAUI, and related frameworks.',
  xml: 'XML 1.0 Fifth Edition is stable and should be reviewed manually if W3C publishes a new edition.',
  xquery:
    'XQuery 3.1 is a W3C Recommendation and should be reviewed manually against W3C publication history.',
  xslt: 'XSLT 3.0 is a W3C Recommendation and should be reviewed manually against W3C publication history.',
  yaml: 'YAML specification updates should be reviewed manually against yaml.org/spec.',
  zeek: 'Zeek script language metadata is tied to Zeek platform releases and should be reviewed manually.',
  ziggy: 'Ziggy is still evolving and should be reviewed manually against Ziggy project releases.',
  ballerina:
    'Ballerina releases follow a date-based version scheme and should be reviewed manually against ballerina.io/downloads.',
  cypher:
    'Cypher versions are tied to Neo4j platform releases and should be reviewed manually against Neo4j release notes and the openCypher specification.',
  eiffel:
    'EiffelStudio releases should be reviewed manually against the EiffelStudio download page at eiffel.org.',
  hocon:
    'HOCON versions are tied to the Lightbend Config library and should be reviewed manually against the GitHub releases of lightbend/config.',
  mustache:
    'Mustache is a stable specification at 1.0 and should be reviewed manually against the mustache spec repository.',
  sparql:
    'SPARQL 1.1 is a W3C Recommendation and should be reviewed manually against W3C publication history.',
  cairo:
    'Cairo releases should be reviewed manually against the starkware-libs/cairo GitHub releases page.',
  pkl: 'Pkl releases should be reviewed manually against the apple/pkl GitHub releases page.',
  hare: 'Hare releases should be reviewed manually against the harelang.org download page and git.sr.ht/~sircmpwn/hare releases.',
  unison:
    'Unison releases should be reviewed manually against the unisonweb/unison GitHub releases page.',
  move: 'Move language versions are tied to Aptos and Sui platform releases and should be reviewed manually against their respective GitHub releases.',
  yara: 'YARA releases should be reviewed manually against the VirusTotal/yara GitHub releases page.',
  hy: 'Hy releases should be reviewed manually against the hylang/hy GitHub releases page and PyPI.',
  algol:
    'ALGOL metadata follows historical standards and should be reviewed manually against ALGOL 60 and ALGOL 68 references.',
  ampl: 'AMPL metadata should be reviewed manually against AMPL documentation and solver ecosystem release notes.',
  ante: 'Ante releases should be reviewed manually against the Ante language repository and project documentation.',
  austral:
    'Austral releases should be reviewed manually against the austral language repository and project notes.',
  bcpl: 'BCPL metadata is implementation-specific and should be reviewed manually against Cintsys BCPL and historical references.',
  bibtex:
    'BibTeX metadata is tied to TeX distributions and should be reviewed manually against CTAN and TeX Live documentation.',
  bosque:
    'Bosque is a research language and should be reviewed manually against Microsoft Research archives and the Bosque repository.',
  bqn: 'BQN releases should be reviewed manually against mlochbaum/BQN and related implementation release notes.',
  brainfuck:
    'Brainfuck is historically stable and should be reviewed manually against esolangs references and maintained interpreter conventions.',
  capnproto:
    'Capn Proto schema language metadata should be reviewed manually against capnproto.org and capnproto release notes.',
  cql: 'CQL metadata is tied to Apache Cassandra releases and should be reviewed manually against Cassandra CQL documentation.',
  curry:
    'Curry versions are implementation-specific and should be reviewed manually against KiCS2, PAKCS, and Curry language documentation.',
  dot: 'DOT metadata is tied to Graphviz and should be reviewed manually against Graphviz language documentation and releases.',
  editorconfig:
    'EditorConfig is a stable configuration format and should be reviewed manually against editorconfig.org and core project releases.',
  factor:
    'Factor releases should be reviewed manually against factorcode.org and Factor project release notes.',
  fql: 'FQL is a legacy Facebook Platform language and should be reviewed manually against archived Facebook developer documentation.',
  gcode:
    'G-code dialects are machine- and controller-specific and should be reviewed manually against RS-274 and vendor documentation.',
  gettext:
    'Gettext PO/POT metadata is tied to GNU gettext releases and should be reviewed manually against GNU release notes.',
  gremlin:
    'Gremlin metadata is tied to Apache TinkerPop releases and should be reviewed manually against TinkerPop documentation.',
  io: 'Io releases should be reviewed manually against the Io language project and maintained VM repositories.',
  jmespath:
    'JMESPath is a stable JSON query specification and should be reviewed manually against jmespath.org and implementation releases.',
  jsonata:
    'JSONata releases should be reviewed manually against jsonata.org, documentation, and implementation package releases.',
  koka: 'Koka releases should be reviewed manually against koka-lang.github.io and Koka compiler release notes.',
  kql: 'KQL metadata is tied to Microsoft Kusto services and should be reviewed manually against Microsoft Learn documentation.',
  linkerscript:
    'Linker Script metadata is tied to GNU ld and LLD behavior and should be reviewed manually against binutils and LLVM documentation.',
  n1ql: 'N1QL metadata is tied to Couchbase Server releases and should be reviewed manually against Couchbase documentation.',
  plpgsql:
    'PL/pgSQL metadata is tied to PostgreSQL releases and should be reviewed manually against PostgreSQL documentation.',
  qmake:
    'qmake metadata is tied to Qt releases and should be reviewed manually against Qt qmake documentation.',
  soql: 'SOQL metadata is tied to Salesforce API versions and should be reviewed manually against Salesforce developer documentation.',
  spl: 'SPL metadata is tied to Splunk platform releases and should be reviewed manually against Splunk Search Reference documentation.',
  angelscript:
    'AngelScript releases should be reviewed manually against angelcode.com/angelscript and the AngelScript GitHub releases page.',
  gml: 'GML versions are tied to GameMaker Studio platform releases and should be reviewed manually against GameMaker release notes and gamemaker.io.',
  'ink-narrative':
    'Ink narrative releases should be reviewed manually against the inkle/ink GitHub releases page and inklestudios.com/ink documentation.',
  modelica:
    'Modelica Specification versions should be reviewed manually against modelica.org/documents and Modelica Association publications.',
  nextflow:
    'Nextflow releases should be reviewed manually against nextflow.io release notes and the nextflow-io/nextflow GitHub releases page.',
  octave:
    'GNU Octave releases should be reviewed manually against ftp.gnu.org/gnu/octave and octave.org download page.',
  snakemake:
    'Snakemake releases should be reviewed manually against snakemake.github.io and the snakemake/snakemake GitHub releases page.',
  spss: 'SPSS Statistics versions are tied to IBM platform releases and should be reviewed manually against IBM SPSS product documentation.',
  squirrel:
    'Squirrel releases should be reviewed manually against the squirrel-lang.org and albertodemichelis/squirrel GitHub tags.',
  twee: 'Twee/Twine releases should be reviewed manually against twinery.org and the tweego/tweego GitHub releases page.',
  wdl: 'WDL specification versions should be reviewed manually against openwdl.org and the openwdl/wdl GitHub releases page.',
  assemblyscript:
    'AssemblyScript releases should be reviewed manually against assemblyscript.org and the AssemblyBlocks/assemblyscript npm package.',
  basic:
    'FreeBASIC releases should be reviewed manually against freebasic.net and the freebasic/fbc GitHub releases page.',
  dax: 'DAX versioning is tied to Power BI and Analysis Services platform releases and should be reviewed manually against Microsoft Learn documentation.',
  mumps:
    'InterSystems IRIS versioning is proprietary and should be reviewed manually against docs.intersystems.com release notes.',
  openscad:
    'OpenSCAD releases should be reviewed manually against openscad.org and the openscad/openscad GitHub releases page.',
  postscript:
    'PostScript is stable at level 3 since 1997 and should be reviewed manually against Adobe developer documentation.',
  powerquery:
    'Power Query M versioning is tied to Power BI and Microsoft Fabric platform releases and should be reviewed manually against Microsoft Learn documentation.',
  processing:
    'Processing releases should be reviewed manually against processing.org and the processing/processing4 GitHub releases page.',
  rpg: 'RPG versioning is tied to IBM i OS releases and should be reviewed manually against IBM Knowledge Center documentation.',
  vba: 'VBA versioning is tied to Microsoft Office platform releases and should be reviewed manually against Microsoft Learn VBA documentation.',
  xpath:
    'XPath versioning is governed by W3C specification publications and should be reviewed manually against w3.org/TR/xpath.',
  hylo: 'Hylo tracks an active development snapshot without stable releases; review hylo-lang.org and hylo-lang/hylo manually.',
};
const checkers = {
  async astro() {
    const json = await fetchJson('https://registry.npmjs.org/astro/latest');

    return {
      latestVersion: json.version,
      sourceUrl: 'https://registry.npmjs.org/astro/latest',
    };
  },
  async agda() {
    const html = await fetchText('https://wiki.portal.chalmers.se/agda/Main/Download');
    const match = html.match(/Version\s+(\d+\.\d+\.\d+)/i);

    return {
      latestVersion: match?.[1],
      sourceUrl: 'https://wiki.portal.chalmers.se/agda/Main/Download',
    };
  },
  async antlr() {
    const json = await fetchJson('https://api.github.com/repos/antlr/antlr4/releases/latest');

    return {
      latestVersion: normalizeVersion(json.tag_name),
      sourceUrl: 'https://api.github.com/repos/antlr/antlr4/releases/latest',
    };
  },
  async asp() {
    const html = await fetchText(
      'https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-framework',
    );
    const match = html.match(/\.NET Framework\s+(\d+\.\d+\.\d+)\s+is the latest version/i);

    return {
      latestVersion: match?.[1],
      sourceUrl: 'https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-framework',
    };
  },
  async awk() {
    const html = await fetchText('https://ftp.gnu.org/gnu/gawk/');
    const versions = [...html.matchAll(/gawk-(\d+\.\d+\.\d+)\.tar\.(?:gz|xz|lz)/g)].map(
      (match) => match[1],
    );

    return {
      latestVersion: `GNU Awk ${latestSemver(versions)}`,
      sourceUrl: 'https://ftp.gnu.org/gnu/gawk/',
    };
  },
  async autohotkey() {
    const json = await fetchJson(
      'https://api.github.com/repos/AutoHotkey/AutoHotkey/releases/latest',
    );

    return {
      latestVersion: majorMinor(normalizeVersion(json.tag_name)),
      sourceUrl: 'https://api.github.com/repos/AutoHotkey/AutoHotkey/releases/latest',
    };
  },
  async 'avro-idl'() {
    const xml = await fetchText(
      'https://repo1.maven.org/maven2/org/apache/avro/avro/maven-metadata.xml',
    );
    const match = xml.match(/<release>(\d+\.\d+\.\d+)<\/release>/);

    return {
      latestVersion: match?.[1],
      sourceUrl: 'https://repo1.maven.org/maven2/org/apache/avro/avro/maven-metadata.xml',
    };
  },
  async bash() {
    const html = await fetchText('https://ftp.gnu.org/gnu/bash/');
    const versions = [...html.matchAll(/bash-(\d+\.\d+(?:\.\d+)?)\.tar\.gz/g)].map(
      (match) => match[1],
    );

    return {
      latestVersion: latestSemver(versions),
      sourceUrl: 'https://ftp.gnu.org/gnu/bash/',
    };
  },
  async bazel() {
    const json = await fetchJson('https://api.github.com/repos/bazelbuild/bazel/releases');
    const versions = json
      .map((entry) => normalizeVersion(entry.tag_name))
      .filter((version) => /^\d+\.\d+\.\d+$/.test(version));

    return {
      latestVersion: latestSemver(versions),
      sourceUrl: 'https://api.github.com/repos/bazelbuild/bazel/releases',
    };
  },
  async bicep() {
    const json = await fetchJson('https://api.github.com/repos/Azure/bicep/releases/latest');

    return {
      latestVersion: normalizeVersion(json.tag_name),
      sourceUrl: 'https://api.github.com/repos/Azure/bicep/releases/latest',
    };
  },
  async carbon() {
    const json = await fetchJson('https://api.github.com/repos/carbon-language/carbon-lang/tags');
    const latestNightly = json.find((tag) =>
      /^v0\.0\.0-0\.nightly\.\d{4}\.\d{2}\.\d{2}$/.test(tag.name),
    );

    return {
      latestVersion: latestNightly ? '0.0.0 nightly' : undefined,
      sourceUrl: 'https://api.github.com/repos/carbon-language/carbon-lang/tags',
    };
  },
  async cel() {
    const json = await fetchJson('https://api.github.com/repos/cel-expr/cel-spec/releases/latest');

    return {
      latestVersion: normalizeVersion(json.tag_name),
      sourceUrl: 'https://api.github.com/repos/cel-expr/cel-spec/releases/latest',
    };
  },
  async chapel() {
    const json = await fetchJson('https://api.github.com/repos/chapel-lang/chapel/releases/latest');

    return {
      latestVersion: normalizeVersion(json.tag_name),
      sourceUrl: 'https://api.github.com/repos/chapel-lang/chapel/releases/latest',
    };
  },
  async circom() {
    const json = await fetchJson('https://api.github.com/repos/iden3/circom/releases/latest');

    return {
      latestVersion: normalizeVersion(json.tag_name),
      sourceUrl: 'https://api.github.com/repos/iden3/circom/releases/latest',
    };
  },
  async csharp() {
    const markdown = await fetchText(
      'https://raw.githubusercontent.com/dotnet/docs/main/docs/csharp/whats-new/csharp-version-history.md',
    );
    const versions = [...markdown.matchAll(/^## C# version (\d+(?:\.\d+)?)/gm)].map(
      (match) => match[1],
    );

    return {
      latestVersion: latestNumeric(versions),
      sourceUrl:
        'https://raw.githubusercontent.com/dotnet/docs/main/docs/csharp/whats-new/csharp-version-history.md',
    };
  },
  async cmake() {
    const html = await fetchText('https://cmake.org/download/');
    const match = html.match(/Latest Release \((\d+\.\d+\.\d+)\)/);

    return {
      latestVersion: match?.[1],
      sourceUrl: 'https://cmake.org/download/',
    };
  },
  async clojure() {
    const html = await fetchText('https://clojure.org/releases/downloads');
    const match = html.match(/Stable Release:\s+(\d+\.\d+\.\d+)/i);

    return {
      latestVersion: match?.[1],
      sourceUrl: 'https://clojure.org/releases/downloads',
    };
  },
  async cuda() {
    const html = await fetchText('https://developer.nvidia.com/cuda-toolkit-archive');
    const versions = [...html.matchAll(/CUDA Toolkit\s+(\d+\.\d+\.\d+)/g)].map((match) => match[1]);

    return {
      latestVersion: latestSemver(versions),
      sourceUrl: 'https://developer.nvidia.com/cuda-toolkit-archive',
    };
  },
  async cython() {
    const json = await fetchJson('https://pypi.org/pypi/Cython/json');

    return {
      latestVersion: json.info?.version,
      sourceUrl: 'https://pypi.org/pypi/Cython/json',
    };
  },
  async crystal() {
    const json = await fetchJson('https://crystal-lang.org/api/versions.json');
    const latest = json.versions?.find((entry) => entry.released !== false);

    return {
      latestVersion: latest?.name,
      sourceUrl: 'https://crystal-lang.org/api/versions.json',
    };
  },
  async cue() {
    const json = await fetchJson('https://api.github.com/repos/cue-lang/cue/releases/latest');

    return {
      latestVersion: normalizeVersion(json.tag_name),
      sourceUrl: 'https://api.github.com/repos/cue-lang/cue/releases/latest',
    };
  },
  async coffeescript() {
    const json = await fetchJson('https://registry.npmjs.org/coffeescript/latest');

    return {
      latestVersion: json.version,
      sourceUrl: 'https://registry.npmjs.org/coffeescript/latest',
    };
  },
  async dart() {
    const json = await fetchJson(
      'https://storage.googleapis.com/dart-archive/channels/stable/release/latest/VERSION',
    );

    return {
      latestVersion: json.version,
      sourceUrl:
        'https://storage.googleapis.com/dart-archive/channels/stable/release/latest/VERSION',
    };
  },
  async coq() {
    const html = await fetchText('https://rocq-prover.org/');
    const match = html.match(/Latest Rocq Prover release:\s*(\d+\.\d+\.\d+)/i);

    return {
      latestVersion: match?.[1],
      sourceUrl: 'https://rocq-prover.org/',
    };
  },
  async dhall() {
    const json = await fetchJson(
      'https://api.github.com/repos/dhall-lang/dhall-lang/releases/latest',
    );

    return {
      latestVersion: normalizeVersion(json.tag_name),
      sourceUrl: 'https://api.github.com/repos/dhall-lang/dhall-lang/releases/latest',
    };
  },
  async earthly() {
    const json = await fetchJson('https://api.github.com/repos/earthly/earthly/releases/latest');

    return {
      latestVersion: normalizeVersion(json.tag_name),
      sourceUrl: 'https://api.github.com/repos/earthly/earthly/releases/latest',
    };
  },
  async d() {
    const html = await fetchText('https://dlang.org/index.html');
    const match = html.match(/Latest version:\s+(\d+\.\d+\.\d+)/i);

    return {
      latestVersion: match?.[1],
      sourceUrl: 'https://dlang.org/index.html',
    };
  },
  async elixir() {
    const json = await fetchJson('https://api.github.com/repos/elixir-lang/elixir/releases/latest');

    return {
      latestVersion: normalizeVersion(json.tag_name),
      sourceUrl: 'https://api.github.com/repos/elixir-lang/elixir/releases/latest',
    };
  },
  async elm() {
    const json = await fetchJson('https://registry.npmjs.org/elm/latest');

    return {
      latestVersion: json.version?.replace(/-\d+$/, ''),
      sourceUrl: 'https://registry.npmjs.org/elm/latest',
    };
  },
  async erlang() {
    const json = await fetchJson('https://api.github.com/repos/erlang/otp/releases/latest');

    return {
      latestVersion: String(json.tag_name ?? '').replace(/^OTP-/, 'OTP '),
      sourceUrl: 'https://api.github.com/repos/erlang/otp/releases/latest',
    };
  },
  async fish() {
    const json = await fetchJson(
      'https://api.github.com/repos/fish-shell/fish-shell/releases/latest',
    );

    return {
      latestVersion: normalizeVersion(json.tag_name),
      sourceUrl: 'https://api.github.com/repos/fish-shell/fish-shell/releases/latest',
    };
  },
  async flatbuffers() {
    const json = await fetchJson('https://api.github.com/repos/google/flatbuffers/releases/latest');
    const match = String(json.tag_name ?? '').match(/^v(\d+\.\d+\.\d+)/);

    return {
      latestVersion: match?.[1],
      sourceUrl: 'https://api.github.com/repos/google/flatbuffers/releases/latest',
    };
  },
  async fennel() {
    const json = await fetchJson('https://api.github.com/repos/bakpakin/Fennel/releases/latest');

    return {
      latestVersion: normalizeVersion(json.tag_name),
      sourceUrl: 'https://api.github.com/repos/bakpakin/Fennel/releases/latest',
    };
  },
  async fsharp() {
    const html = await fetchText('https://learn.microsoft.com/en-us/dotnet/fsharp/whats-new/');
    const versions = [...html.matchAll(/F#\s+(\d+)/g)].map((match) => match[1]);

    return {
      latestVersion: latestNumeric(versions),
      sourceUrl: 'https://learn.microsoft.com/en-us/dotnet/fsharp/whats-new/',
    };
  },
  async gdscript() {
    const json = await fetchJson('https://api.github.com/repos/godotengine/godot/releases/latest');
    const match = String(json.tag_name ?? json.name ?? '').match(/^(\d+\.\d+)/);

    return {
      latestVersion: match?.[1],
      sourceUrl: 'https://api.github.com/repos/godotengine/godot/releases/latest',
    };
  },
  async git() {
    const html = await fetchText('https://git-scm.com/docs/git');
    const match = html.match(/git last updated in (\d+\.\d+\.\d+)/);

    return {
      latestVersion: match?.[1],
      sourceUrl: 'https://git-scm.com/docs/git',
    };
  },
  async gleam() {
    const json = await fetchJson('https://api.github.com/repos/gleam-lang/gleam/releases/latest');

    return {
      latestVersion: normalizeVersion(json.tag_name),
      sourceUrl: 'https://api.github.com/repos/gleam-lang/gleam/releases/latest',
    };
  },
  async go() {
    const text = await fetchText('https://go.dev/VERSION?m=text');
    const match = text.match(/^go(\d+\.\d+(?:\.\d+)?)/m);

    return {
      latestVersion: match?.[1],
      sourceUrl: 'https://go.dev/VERSION?m=text',
    };
  },
  async glsl() {
    const html = await fetchText('https://registry.khronos.org/OpenGL/specs/gl/');
    const versions = [...html.matchAll(/GLSLangSpec\.(\d+\.\d+)/g)].map((match) => match[1]);

    return {
      latestVersion: latestSemver(versions),
      sourceUrl: 'https://registry.khronos.org/OpenGL/specs/gl/',
    };
  },
  async gradle() {
    const html = await fetchText('https://docs.gradle.org/current/release-notes.html');
    const match = html.match(/Gradle\s+(\d+\.\d+(?:\.\d+)?)/);

    return {
      latestVersion: match?.[1],
      sourceUrl: 'https://docs.gradle.org/current/release-notes.html',
    };
  },
  async graphql() {
    const html = await fetchText('https://spec.graphql.org/');
    const match = html.match(/>([A-Z][a-z]+ \d{4})</);

    return {
      latestVersion: match?.[1]?.trim(),
      sourceUrl: 'https://spec.graphql.org/',
    };
  },
  async groovy() {
    const xml = await fetchText(
      'https://repo1.maven.org/maven2/org/apache/groovy/groovy/maven-metadata.xml',
    );
    const versions = [...xml.matchAll(/<version>([^<]+)<\/version>/g)]
      .map((match) => match[1])
      .filter((version) => /^\d+\.\d+\.\d+$/.test(version));

    return {
      latestVersion: latestSemver(versions),
      sourceUrl: 'https://repo1.maven.org/maven2/org/apache/groovy/groovy/maven-metadata.xml',
    };
  },
  async handlebars() {
    const json = await fetchJson('https://registry.npmjs.org/handlebars/latest');

    return {
      latestVersion: json.version,
      sourceUrl: 'https://registry.npmjs.org/handlebars/latest',
    };
  },
  async jsonnet() {
    const json = await fetchJson('https://api.github.com/repos/google/jsonnet/releases/latest');

    return {
      latestVersion: normalizeVersion(json.tag_name),
      sourceUrl: 'https://api.github.com/repos/google/jsonnet/releases/latest',
    };
  },
  async haskell() {
    const html = await fetchText('https://downloads.haskell.org/~ghc/latest/');
    const versions = [...html.matchAll(/ghc-(\d+\.\d+\.\d+)-src\.tar\.(?:gz|xz)/g)].map(
      (match) => match[1],
    );

    return {
      latestVersion: `GHC ${latestSemver(versions)}`,
      sourceUrl: 'https://downloads.haskell.org/~ghc/latest/',
    };
  },
  async haxe() {
    const html = await fetchText('https://haxe.org/download/list/');
    const match = html.match(/current stable version is[\s\S]{0,120}?(\d+\.\d+\.\d+)/i);

    return {
      latestVersion: match?.[1],
      sourceUrl: 'https://haxe.org/download/list/',
    };
  },
  async haml() {
    const json = await fetchJson('https://rubygems.org/api/v1/versions/haml/latest.json');

    return {
      latestVersion: json.version,
      sourceUrl: 'https://rubygems.org/api/v1/versions/haml/latest.json',
    };
  },
  async idris() {
    const json = await fetchJson('https://api.github.com/repos/idris-lang/Idris2/releases/latest');

    return {
      latestVersion: normalizeVersion(json.tag_name),
      sourceUrl: 'https://api.github.com/repos/idris-lang/Idris2/releases/latest',
    };
  },
  async hcl() {
    const json = await fetchJson('https://api.github.com/repos/hashicorp/hcl/releases/latest');

    return {
      latestVersion: normalizeVersion(json.tag_name),
      sourceUrl: 'https://api.github.com/repos/hashicorp/hcl/releases/latest',
    };
  },
  async java() {
    const json = await fetchJson('https://api.adoptium.net/v3/info/available_releases');
    const releases = json.available_releases ?? [];
    const latest = Math.max(...releases.map(Number).filter(Number.isFinite));

    return {
      latestVersion: String(latest),
      sourceUrl: 'https://api.adoptium.net/v3/info/available_releases',
    };
  },
  async jinja() {
    const json = await fetchJson('https://pypi.org/pypi/Jinja2/json');

    return {
      latestVersion: json.info?.version,
      sourceUrl: 'https://pypi.org/pypi/Jinja2/json',
    };
  },
  async janet() {
    const json = await fetchJson('https://api.github.com/repos/janet-lang/janet/releases/latest');

    return {
      latestVersion: normalizeVersion(json.tag_name),
      sourceUrl: 'https://api.github.com/repos/janet-lang/janet/releases/latest',
    };
  },
  async julia() {
    const json = await fetchJson('https://api.github.com/repos/JuliaLang/julia/releases/latest');

    return {
      latestVersion: normalizeVersion(json.tag_name),
      sourceUrl: 'https://api.github.com/repos/JuliaLang/julia/releases/latest',
    };
  },
  async kotlin() {
    const json = await fetchJson('https://api.github.com/repos/JetBrains/kotlin/releases/latest');

    return {
      latestVersion: normalizeVersion(json.tag_name),
      sourceUrl: 'https://api.github.com/repos/JetBrains/kotlin/releases/latest',
    };
  },
  async lean() {
    const json = await fetchJson('https://api.github.com/repos/leanprover/lean4/releases/latest');

    return {
      latestVersion: normalizeVersion(json.tag_name),
      sourceUrl: 'https://api.github.com/repos/leanprover/lean4/releases/latest',
    };
  },
  async less() {
    const json = await fetchJson('https://registry.npmjs.org/less/latest');

    return {
      latestVersion: json.version,
      sourceUrl: 'https://registry.npmjs.org/less/latest',
    };
  },
  async liquid() {
    const json = await fetchJson('https://registry.npmjs.org/liquidjs/latest');

    return {
      latestVersion: json.version,
      sourceUrl: 'https://registry.npmjs.org/liquidjs/latest',
    };
  },
  async lua() {
    const html = await fetchText('https://www.lua.org/download.html');
    const match = html.match(/lua-(\d+\.\d+\.\d+)\.tar\.gz/i);

    return {
      latestVersion: match?.[1],
      sourceUrl: 'https://www.lua.org/download.html',
    };
  },
  async 'llvm-ir'() {
    const html = await fetchText('https://llvm.org/');
    const versions = [...html.matchAll(/LLVM\s+(\d+\.\d+\.\d+)/g)].map((match) => match[1]);

    return {
      latestVersion: latestSemver(versions),
      sourceUrl: 'https://llvm.org/',
    };
  },
  async luau() {
    const json = await fetchJson('https://api.github.com/repos/luau-lang/luau/releases/latest');

    return {
      latestVersion: normalizeVersion(json.tag_name),
      sourceUrl: 'https://api.github.com/repos/luau-lang/luau/releases/latest',
    };
  },
  async ocaml() {
    const html = await fetchText('https://ocaml.org/p/ocaml/latest/versions');
    const versions = [...html.matchAll(/>\s*(\d+\.\d+\.\d+)\s*<\/a>/g)].map((match) => match[1]);

    return {
      latestVersion: latestSemver(versions),
      sourceUrl: 'https://ocaml.org/p/ocaml/latest/versions',
    };
  },
  async makefile() {
    const html = await fetchText('https://ftp.gnu.org/gnu/make/');
    const versions = [...html.matchAll(/make-(\d+\.\d+(?:\.\d+)?)\.tar\.gz/g)].map(
      (match) => match[1],
    );

    return {
      latestVersion: latestSemver(versions),
      sourceUrl: 'https://ftp.gnu.org/gnu/make/',
    };
  },
  async matlab() {
    const html = await fetchText('https://www.mathworks.com/company/newsroom.html');
    const match = html.match(/\bR(\d{4}[ab])\b/i);

    return {
      latestVersion: match ? `R${match[1]}` : undefined,
      sourceUrl: 'https://www.mathworks.com/company/newsroom.html',
    };
  },
  async maxima() {
    const html = await fetchText('https://sourceforge.net/projects/maxima/files/Maxima-source/');
    const versions = [...html.matchAll(/5\.(\d+)\.(\d+)-source/g)].map(
      (match) => `5.${match[1]}.${match[2]}`,
    );

    return {
      latestVersion: latestSemver(versions),
      sourceUrl: 'https://sourceforge.net/projects/maxima/files/Maxima-source/',
    };
  },
  async markdown() {
    const html = await fetchText('https://spec.commonmark.org/');
    const versions = [...html.matchAll(/\/(\d+\.\d+(?:\.\d+)?)\//g)].map((match) => match[1]);

    return {
      latestVersion: `CommonMark ${latestSemver(versions)}`,
      sourceUrl: 'https://spec.commonmark.org/',
    };
  },
  async mdx() {
    const json = await fetchJson('https://registry.npmjs.org/@mdx-js%2fmdx/latest');

    return {
      latestVersion: json.version,
      sourceUrl: 'https://registry.npmjs.org/@mdx-js%2fmdx/latest',
    };
  },
  async mermaid() {
    const json = await fetchJson('https://registry.npmjs.org/mermaid/latest');

    return {
      latestVersion: json.version,
      sourceUrl: 'https://registry.npmjs.org/mermaid/latest',
    };
  },
  async meson() {
    const json = await fetchJson('https://pypi.org/pypi/meson/json');

    return {
      latestVersion: json.info?.version,
      sourceUrl: 'https://pypi.org/pypi/meson/json',
    };
  },
  async nunjucks() {
    const json = await fetchJson('https://registry.npmjs.org/nunjucks/latest');

    return {
      latestVersion: json.version,
      sourceUrl: 'https://registry.npmjs.org/nunjucks/latest',
    };
  },
  async nushell() {
    const json = await fetchJson('https://api.github.com/repos/nushell/nushell/releases/latest');

    return {
      latestVersion: normalizeVersion(json.tag_name),
      sourceUrl: 'https://api.github.com/repos/nushell/nushell/releases/latest',
    };
  },
  async json5() {
    const json = await fetchJson('https://registry.npmjs.org/json5/latest');

    return {
      latestVersion: json.version,
      sourceUrl: 'https://registry.npmjs.org/json5/latest',
    };
  },
  async nix() {
    const html = await fetchText('https://nix.dev/manual/nix/latest/');
    const match = html.match(/Nix\s+(\d+\.\d+\.\d+)\s+Reference Manual/i);

    return {
      latestVersion: match?.[1],
      sourceUrl: 'https://nix.dev/manual/nix/latest/',
    };
  },
  async nginx() {
    const html = await fetchText('https://nginx.org/en/download.html');
    const stableSection = html.match(/Stable version[\s\S]*?(?:Legacy versions|Source Code)/i)?.[0];
    const match = stableSection?.match(/nginx-(\d+\.\d+\.\d+)/);

    return {
      latestVersion: match?.[1],
      sourceUrl: 'https://nginx.org/en/download.html',
    };
  },
  async nim() {
    const html = await fetchText('https://nim-lang.org/');
    const match = html.match(/Nim version\s+(\d+\.\d+\.\d+)\s+released/i);

    return {
      latestVersion: match?.[1],
      sourceUrl: 'https://nim-lang.org/',
    };
  },
  async org() {
    const html = await fetchText('https://orgmode.org/Changes.html');
    const match = html.match(/Version\s+(\d+\.\d+(?:\.\d+)?)/i);

    return {
      latestVersion: match?.[1],
      sourceUrl: 'https://orgmode.org/Changes.html',
    };
  },
  async pascal() {
    const html = await fetchText('https://www.freepascal.org/download.html.en');
    const match = html.match(/latest release is[\s\S]{0,80}?(\d+\.\d+\.\d+)/i);

    return {
      latestVersion: match?.[1],
      sourceUrl: 'https://www.freepascal.org/download.html.en',
    };
  },
  async perl() {
    const html = await fetchText('https://dev.perl.org/perl5/');
    const match = html.match(
      /Perl[\s\S]{0,100}?(\d+\.\d+\.\d+)[\s\S]{0,80}?is the current stable version/i,
    );

    return {
      latestVersion: match?.[1],
      sourceUrl: 'https://dev.perl.org/perl5/',
    };
  },
  async pod() {
    const html = await fetchText('https://dev.perl.org/perl5/');
    const match = html.match(
      /Perl[\s\S]{0,100}?(\d+\.\d+\.\d+)[\s\S]{0,80}?is the current stable version/i,
    );

    return {
      latestVersion: match ? `Perl ${match[1]}` : undefined,
      sourceUrl: 'https://dev.perl.org/perl5/',
    };
  },
  async php() {
    const json = await fetchJson('https://api.github.com/repos/php/php-src/releases/latest');

    return {
      latestVersion: normalizeVersion(String(json.tag_name ?? '').replace(/^php-/i, '')),
      sourceUrl: 'https://api.github.com/repos/php/php-src/releases/latest',
    };
  },
  async plantuml() {
    const json = await fetchJson('https://api.github.com/repos/plantuml/plantuml/releases');
    const release = json.find(
      (entry) => entry.prerelease !== true && /^v\d+\.\d+\.\d+$/.test(entry.tag_name),
    );

    return {
      latestVersion: normalizeVersion(release?.tag_name),
      sourceUrl: 'https://api.github.com/repos/plantuml/plantuml/releases',
    };
  },
  async powershell() {
    const html = await fetchText('https://github.com/PowerShell/PowerShell/releases');
    const versions = [...html.matchAll(/v(\d+\.\d+\.\d+) Release of PowerShell/g)].map(
      (match) => match[1],
    );

    return {
      latestVersion: latestSemver(versions),
      sourceUrl: 'https://github.com/PowerShell/PowerShell/releases',
    };
  },
  async protobuf() {
    const json = await fetchJson(
      'https://api.github.com/repos/protocolbuffers/protobuf/releases/latest',
    );

    return {
      latestVersion: normalizeVersion(json.tag_name),
      sourceUrl: 'https://api.github.com/repos/protocolbuffers/protobuf/releases/latest',
    };
  },
  async pug() {
    const json = await fetchJson('https://registry.npmjs.org/pug/latest');

    return {
      latestVersion: json.version,
      sourceUrl: 'https://registry.npmjs.org/pug/latest',
    };
  },
  async python() {
    const html = await fetchText('https://www.python.org/downloads/');
    const versions = [...html.matchAll(/Python (\d+\.\d+\.\d+)/g)].map((match) => match[1]);

    return {
      latestVersion: latestSemver(versions),
      sourceUrl: 'https://www.python.org/downloads/',
    };
  },
  async r() {
    const html = await fetchText('https://www.r-project.org/');
    const versions = [...html.matchAll(/R version\s+(\d+\.\d+\.\d+)/g)].map((match) => match[1]);

    return {
      latestVersion: latestSemver(versions),
      sourceUrl: 'https://www.r-project.org/',
    };
  },
  async racket() {
    const html = await fetchText('https://download.racket-lang.org/');
    const match = html.match(/Version\s+(\d+\.\d+(?:\.\d+)?)/i);

    return {
      latestVersion: match?.[1],
      sourceUrl: 'https://download.racket-lang.org/',
    };
  },
  async razor() {
    const json = await fetchJson(
      'https://builds.dotnet.microsoft.com/dotnet/release-metadata/releases-index.json',
    );
    const versions = json['releases-index']
      ?.map((release) => release['latest-release'])
      .filter((version) => /^\d+\.\d+\.\d+$/.test(version));

    return {
      latestVersion: latestSemver(versions),
      sourceUrl: 'https://builds.dotnet.microsoft.com/dotnet/release-metadata/releases-index.json',
    };
  },
  async rego() {
    const json = await fetchJson(
      'https://api.github.com/repos/open-policy-agent/opa/releases/latest',
    );

    return {
      latestVersion: `OPA ${normalizeVersion(json.tag_name)}`,
      sourceUrl: 'https://api.github.com/repos/open-policy-agent/opa/releases/latest',
    };
  },
  async rust() {
    const toml = await fetchText('https://static.rust-lang.org/dist/channel-rust-stable.toml');
    const match = toml.match(/pkg\.rust\]\s+version = "(\d+\.\d+\.\d+)/);

    return {
      latestVersion: match?.[1],
      sourceUrl: 'https://static.rust-lang.org/dist/channel-rust-stable.toml',
    };
  },
  async scala() {
    const json = await fetchJson('https://api.github.com/repos/scala/scala3/releases/latest');

    return {
      latestVersion: normalizeVersion(json.tag_name),
      sourceUrl: 'https://api.github.com/repos/scala/scala3/releases/latest',
    };
  },
  async ruby() {
    const html = await fetchText('https://www.ruby-lang.org/en/downloads/');
    const match = html.match(/current stable version is (\d+\.\d+\.\d+)/i);

    return {
      latestVersion: match?.[1],
      sourceUrl: 'https://www.ruby-lang.org/en/downloads/',
    };
  },
  async scss() {
    const json = await fetchJson('https://registry.npmjs.org/sass/latest');

    return {
      latestVersion: json.version,
      sourceUrl: 'https://registry.npmjs.org/sass/latest',
    };
  },
  async solidity() {
    const html = await fetchText('https://soliditylang.org/');
    const versions = [...html.matchAll(/Solidity Compiler v(\d+\.\d+\.\d+)/g)].map(
      (match) => match[1],
    );

    return {
      latestVersion: latestSemver(versions),
      sourceUrl: 'https://soliditylang.org/',
    };
  },
  async svelte() {
    const json = await fetchJson('https://registry.npmjs.org/svelte/latest');

    return {
      latestVersion: json.version,
      sourceUrl: 'https://registry.npmjs.org/svelte/latest',
    };
  },
  async svn() {
    const html = await fetchText('https://subversion.apache.org/');
    const match = html.match(/Apache Subversion\s+(\d+\.\d+\.\d+)\s+Released/i);

    return {
      latestVersion: match?.[1],
      sourceUrl: 'https://subversion.apache.org/',
    };
  },
  async swift() {
    const json = await fetchJson('https://api.github.com/repos/swiftlang/swift/releases/latest');
    const match = String(json.tag_name ?? json.name ?? '').match(
      /swift-(\d+\.\d+(?:\.\d+)?)-RELEASE/,
    );

    return {
      latestVersion: match?.[1],
      sourceUrl: 'https://api.github.com/repos/swiftlang/swift/releases/latest',
    };
  },
  async tcl() {
    const html = await fetchText('https://www.tcl-lang.org/software/tcltk/9.0.html');
    const match = html.match(/Latest Release:\s+Tcl\/Tk\s+(\d+\.\d+\.\d+)/i);

    return {
      latestVersion: match?.[1],
      sourceUrl: 'https://www.tcl-lang.org/software/tcltk/9.0.html',
    };
  },
  async tcsh() {
    const html = await fetchText('http://ftp.astron.com/pub/tcsh/');
    const versions = [...html.matchAll(/tcsh-(\d+\.\d+\.\d+)\.tar\.gz/g)].map((match) => match[1]);

    return {
      latestVersion: latestSemver(versions),
      sourceUrl: 'http://ftp.astron.com/pub/tcsh/',
    };
  },
  async tex() {
    const json = await fetchJson('https://ctan.org/json/2.0/pkg/texlive');

    return {
      latestVersion: json.version?.number ? `TeX Live ${json.version.number}` : undefined,
      sourceUrl: 'https://ctan.org/json/2.0/pkg/texlive',
    };
  },
  async textile() {
    const json = await fetchJson(
      'https://api.github.com/repos/textile/php-textile/releases/latest',
    );

    return {
      latestVersion: normalizeVersion(json.tag_name),
      sourceUrl: 'https://api.github.com/repos/textile/php-textile/releases/latest',
    };
  },
  async toml() {
    const json = await fetchJson('https://api.github.com/repos/toml-lang/toml/releases/latest');

    return {
      latestVersion: normalizeVersion(json.tag_name),
      sourceUrl: 'https://api.github.com/repos/toml-lang/toml/releases/latest',
    };
  },
  async troff() {
    const html = await fetchText('https://ftp.gnu.org/gnu/groff/');
    const versions = [...html.matchAll(/groff-(\d+\.\d+\.\d+)\.tar\.gz/g)].map((match) => match[1]);

    return {
      latestVersion: `GNU groff ${latestSemver(versions)}`,
      sourceUrl: 'https://ftp.gnu.org/gnu/groff/',
    };
  },
  async twig() {
    const json = await fetchJson('https://repo.packagist.org/p2/twig/twig.json');
    const versions = json.packages?.['twig/twig']
      ?.map((entry) => normalizeVersion(entry.version))
      .filter((version) => /^\d+\.\d+\.\d+$/.test(version));

    return {
      latestVersion: latestSemver(versions),
      sourceUrl: 'https://repo.packagist.org/p2/twig/twig.json',
    };
  },
  async typescript() {
    const json = await fetchJson('https://registry.npmjs.org/typescript/latest');

    return {
      latestVersion: majorMinor(json.version),
      sourceUrl: 'https://registry.npmjs.org/typescript/latest',
    };
  },
  async typst() {
    const json = await fetchJson('https://api.github.com/repos/typst/typst/releases/latest');

    return {
      latestVersion: normalizeVersion(json.tag_name),
      sourceUrl: 'https://api.github.com/repos/typst/typst/releases/latest',
    };
  },
  async 'visual-basic'() {
    const html = await fetchText(
      'https://learn.microsoft.com/en-us/dotnet/visual-basic/whats-new/',
    );
    const match = html.match(/Current version[\s\S]*?Visual Basic (\d+\.\d+)/i);

    return {
      latestVersion: match?.[1],
      sourceUrl: 'https://learn.microsoft.com/en-us/dotnet/visual-basic/whats-new/',
    };
  },
  async velocity() {
    const xml = await fetchText(
      'https://repo1.maven.org/maven2/org/apache/velocity/velocity-engine-core/maven-metadata.xml',
    );
    const match = xml.match(/<release>(\d+\.\d+\.\d+)<\/release>/);

    return {
      latestVersion: match?.[1],
      sourceUrl:
        'https://repo1.maven.org/maven2/org/apache/velocity/velocity-engine-core/maven-metadata.xml',
    };
  },
  async vue() {
    const json = await fetchJson('https://registry.npmjs.org/vue/latest');

    return {
      latestVersion: json.version,
      sourceUrl: 'https://registry.npmjs.org/vue/latest',
    };
  },
  async zig() {
    const json = await fetchJson('https://ziglang.org/download/index.json');
    const versions = Object.keys(json).filter((version) => /^\d+\.\d+\.\d+$/.test(version));

    return {
      latestVersion: latestSemver(versions),
      sourceUrl: 'https://ziglang.org/download/index.json',
    };
  },
  async zsh() {
    const html = await fetchText('https://zsh.sourceforge.io/Arc/source.html');
    const versions = [...html.matchAll(/Download zsh (\d+\.\d+(?:\.\d+)?)/g)].map(
      (match) => match[1],
    );

    return {
      latestVersion: latestSemver(versions),
      sourceUrl: 'https://zsh.sourceforge.io/Arc/source.html',
    };
  },
  async grain() {
    const json = await fetchJson('https://api.github.com/repos/grain-lang/grain/releases/latest');

    return {
      latestVersion: normalizeVersion(json.tag_name),
      sourceUrl: 'https://api.github.com/repos/grain-lang/grain/releases/latest',
    };
  },
  async nickel() {
    const json = await fetchJson('https://api.github.com/repos/nickel-lang/nickel/releases/latest');

    return {
      latestVersion: normalizeVersion(json.tag_name),
      sourceUrl: 'https://api.github.com/repos/nickel-lang/nickel/releases/latest',
    };
  },
  async flux() {
    const json = await fetchJson('https://api.github.com/repos/influxdata/flux/releases/latest');

    return {
      latestVersion: normalizeVersion(json.tag_name),
      sourceUrl: 'https://api.github.com/repos/influxdata/flux/releases/latest',
    };
  },
  async kcl() {
    const json = await fetchJson('https://api.github.com/repos/kcl-lang/kcl/releases/latest');

    return {
      latestVersion: normalizeVersion(json.tag_name),
      sourceUrl: 'https://api.github.com/repos/kcl-lang/kcl/releases/latest',
    };
  },
  async koto() {
    const changelog = await fetchText(
      'https://raw.githubusercontent.com/koto-lang/koto/main/CHANGELOG.md',
    );
    const versions = [
      ...changelog.matchAll(/^## \[(\d+\.\d+\.\d+)\]\s+\d{4}\.\d{2}\.\d{2}$/gm),
    ].map((match) => match[1]);

    return {
      latestVersion: latestSemver(versions),
      sourceUrl: 'https://raw.githubusercontent.com/koto-lang/koto/main/CHANGELOG.md',
    };
  },
  async uiua() {
    const json = await fetchJson('https://api.github.com/repos/uiua-lang/uiua/releases/latest');

    return {
      latestVersion: normalizeVersion(json.tag_name),
      sourceUrl: 'https://api.github.com/repos/uiua-lang/uiua/releases/latest',
    };
  },
  async wing() {
    const json = await fetchJson('https://registry.npmjs.org/winglang/latest');

    return {
      latestVersion: json.version,
      sourceUrl: 'https://registry.npmjs.org/winglang/latest',
    };
  },
};

async function main() {
  const options = parseOptions(process.argv.slice(2));

  if (options.requestDelay !== undefined) {
    githubRequestDelayMs = options.requestDelay;
  }

  const languages = await readLanguages(options.language);
  const report = await buildReport(languages);

  await writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`);
  printReport(report);

  if (options.applyUpdates) {
    await applyLocalUpdates(report.updates);
  }

  if (options.createIssues) {
    await createIssues(report.updates);
  }

  if (options.createPullRequests) {
    await createPullRequests(report.updates);
  }

  if (report.errors.length > 0 && options.failOnError) {
    process.exitCode = 1;
  }
}

function parseOptions(args) {
  const language = parseLanguageOption(args);
  const requestDelay =
    parseNumberOption(args, '--request-delay') ?? parseNumberOption(args, '--delay');

  return {
    applyUpdates: args.includes('--apply-updates'),
    createIssues: args.includes('--create-issues'),
    createPullRequests: args.includes('--create-pull-requests'),
    failOnError: args.includes('--fail-on-error'),
    language,
    requestDelay,
  };
}

function parseLanguageOption(args) {
  const languageFlagIndex = args.indexOf('--language');
  const languageFlagValue =
    languageFlagIndex === -1 ? undefined : args[languageFlagIndex + 1]?.trim();
  const inlineLanguageFlagValue = args
    .find((arg) => arg.startsWith('--language='))
    ?.slice('--language='.length)
    .trim();
  const language = inlineLanguageFlagValue || languageFlagValue;

  if (!language) {
    return undefined;
  }

  if (language.startsWith('--')) {
    throw new Error('--language requires a language slug value');
  }

  return language;
}

function parseNumberOption(args, flag) {
  const index = args.indexOf(flag);
  const inlineValue = args.find((arg) => arg.startsWith(`${flag}=`))?.slice(`${flag}=`.length);
  const value = inlineValue ?? (index === -1 ? undefined : args[index + 1]);

  if (value === undefined) {
    return undefined;
  }

  const number = Number(value);

  if (!Number.isFinite(number) || number < 0) {
    throw new Error(`${flag} must be a non-negative number`);
  }

  return number;
}

async function readLanguages(languageSlug) {
  const files = await readdir(languagesDir);
  const languages = [];

  for (const file of files.filter((name) => name.endsWith('.ts')).sort()) {
    const filePath = join(languagesDir, file);
    const source = await readFile(filePath, 'utf8');
    const slug = source.match(/slug:\s*['"]([^'"]+)['"]/)?.[1];
    const version = source.match(/version:\s*['"]([^'"]+)['"]/)?.[1];
    const name = source.match(/name:\s*['"]([^'"]+)['"]/)?.[1] ?? slug;

    if (slug && version) {
      languages.push({ filePath, name, slug, version });
    }
  }

  if (!languageSlug) {
    return languages;
  }

  const filteredLanguages = languages.filter((language) => language.slug === languageSlug);

  if (filteredLanguages.length === 0) {
    throw new Error(`Unknown language slug: ${languageSlug}`);
  }

  return filteredLanguages;
}

async function buildReport(languages) {
  const report = {
    checkedAt: new Date().toISOString(),
    updates: [],
    current: [],
    skipped: [],
    errors: [],
  };
  const total = languages.length;

  for (const [index, language] of languages.entries()) {
    const prefix = `${index + 1}/${total}. ${language.name}`;
    const checker = checkers[language.slug];

    if (!checker) {
      report.skipped.push({
        ...language,
        reason: manualChecks[language.slug] ?? 'No automated version checker configured yet.',
      });
      console.log(`${prefix}: Skipped`);
      continue;
    }

    try {
      const result = await checker(language);

      if (!result.latestVersion) {
        throw new Error('Could not detect latest version from source');
      }

      const item = {
        ...language,
        latestVersion: result.latestVersion,
        sourceUrl: result.sourceUrl,
      };

      if (isUpdateAvailable(language.version, result.latestVersion)) {
        report.updates.push(item);
        console.log(
          `${prefix}: New version detected (${language.version} -> ${result.latestVersion})`,
        );
      } else {
        report.current.push(item);
        console.log(`${prefix}: Nothing to change`);
      }
    } catch (error) {
      report.errors.push({
        ...language,
        message: error instanceof Error ? error.message : String(error),
      });
      console.log(`${prefix}: Error - ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  return report;
}

async function applyLocalUpdates(updates) {
  if (updates.length === 0) {
    console.log('No updates to apply.');

    return;
  }

  for (const update of updates) {
    const languageContent = await readFile(update.filePath, 'utf8');
    const readmeContent = await readFile('README.md', 'utf8');
    const changes = planLanguageVersionUpdate({ languageContent, readmeContent, update });

    for (const change of changes) {
      await writeFile(change.path, change.content);

      if (change.path === update.filePath) {
        console.log(`Updated ${update.filePath}: ${update.version} -> ${update.latestVersion}`);
      } else {
        console.log(
          `Updated README.md: ${update.name} ${update.version} -> ${update.latestVersion}`,
        );
      }
    }
  }
}

async function createIssues(updates) {
  const token = process.env.GITHUB_TOKEN;
  const repository = process.env.GITHUB_REPOSITORY;

  if (!token || !repository) {
    throw new Error('GITHUB_TOKEN and GITHUB_REPOSITORY are required to create issues');
  }

  const [owner, repo] = repository.split('/');

  for (const update of updates) {
    await syncVersionUpdateIssue({ owner, repo, token, update });
  }
}

async function createPullRequests(updates) {
  const token = process.env.GITHUB_TOKEN;
  const repository = process.env.GITHUB_REPOSITORY;
  const baseBranch = process.env.GITHUB_REF_NAME ?? 'main';

  if (!token || !repository) {
    throw new Error('GITHUB_TOKEN and GITHUB_REPOSITORY are required to create pull requests');
  }

  const [owner, repo] = repository.split('/');

  await syncVersionUpdatePullRequest({ baseBranch, owner, repo, token, updates });
}

async function syncVersionUpdateIssue({ owner, repo, token, update }) {
  const title = issueTitle(update);
  const body = issueBody(update);
  const existingIssue = await findOpenVersionUpdateIssue({ owner, repo, token, update });

  if (!existingIssue) {
    await githubRequest(`/repos/${owner}/${repo}/issues`, {
      method: 'POST',
      token,
      body: {
        title,
        body,
      },
    });

    console.log(`Created issue: ${title}`);

    return;
  }

  const previousVersion = extractDetectedVersion(existingIssue);

  if (normalizeComparable(previousVersion) === normalizeComparable(update.latestVersion)) {
    console.log(`Issue already up to date for ${update.name}: ${existingIssue.html_url}`);

    return;
  }

  await githubRequest(`/repos/${owner}/${repo}/issues/${existingIssue.number}`, {
    method: 'PATCH',
    token,
    body: {
      title,
      body,
    },
  });

  await githubRequest(`/repos/${owner}/${repo}/issues/${existingIssue.number}/comments`, {
    method: 'POST',
    token,
    body: {
      body: [
        `The automated language version check detected a newer ${update.name} version.`,
        '',
        `- Previous detected version: ${previousVersion ?? 'unknown'}`,
        `- New detected version: ${update.latestVersion}`,
        `- Source: ${update.sourceUrl}`,
      ].join('\n'),
    },
  });

  console.log(`Updated issue for ${update.name}: ${existingIssue.html_url}`);
}

async function syncVersionUpdatePullRequest({ baseBranch, owner, repo, token, updates }) {
  if (updates.length === 0) {
    console.log('No pull request updates to apply.');

    return;
  }

  const branch = 'chore/update-language-metadata-versions';
  const title = pullRequestTitle(updates);
  const existingPullRequest = await findOpenVersionUpdatePullRequest({
    baseBranch,
    branch,
    owner,
    repo,
    token,
  });
  const updateIssues = [];

  await ensureBranch({ baseBranch, branch, owner, repo, token });

  for (const update of updates) {
    const issue = await findOpenVersionUpdateIssue({ owner, repo, token, update });

    updateIssues.push({ issue, update });

    await commitVersionUpdate({
      branch,
      owner,
      repo,
      token,
      update,
    });
  }

  const body = pullRequestBody(updateIssues);

  if (!existingPullRequest) {
    await githubRequest(`/repos/${owner}/${repo}/pulls`, {
      method: 'POST',
      token,
      body: {
        title,
        head: branch,
        base: baseBranch,
        body,
        maintainer_can_modify: true,
      },
    });

    console.log(`Created pull request: ${title}`);

    return;
  }

  await githubRequest(`/repos/${owner}/${repo}/pulls/${existingPullRequest.number}`, {
    method: 'PATCH',
    token,
    body: {
      title,
      body,
    },
  });

  console.log(`Updated pull request: ${existingPullRequest.html_url}`);
}

async function findOpenVersionUpdateIssue({ owner, repo, token, update }) {
  const titlePrefix = `fix: update ${update.name} metadata`;
  const marker = issueMarker(update.slug);
  const query = `repo:${owner}/${repo} is:issue is:open "language-version-update:${update.slug}"`;
  const result = await githubRequest(`/search/issues?q=${encodeURIComponent(query)}`, {
    token,
  });
  const markerMatch = result.items?.find((issue) => issue.body?.includes(marker));

  if (markerMatch) {
    return markerMatch;
  }

  return (
    (await findOpenVersionUpdateIssueByTitle({ owner, repo, titlePrefix, token })) ??
    findOpenVersionUpdateIssueByTitle({
      owner,
      repo,
      titlePrefix: `chore: update ${update.name} metadata`,
      token,
    })
  );
}

async function findOpenVersionUpdateIssueByTitle({ owner, repo, titlePrefix, token }) {
  const query = `repo:${owner}/${repo} is:issue is:open in:title "${titlePrefix}"`;
  const result = await githubRequest(`/search/issues?q=${encodeURIComponent(query)}`, {
    token,
  });

  return result.items?.find((issue) => issue.title?.startsWith(titlePrefix));
}

async function findOpenVersionUpdatePullRequest({ baseBranch, branch, owner, repo, token }) {
  const head = encodeURIComponent(`${owner}:${branch}`);
  const base = encodeURIComponent(baseBranch);
  const pullRequests = await githubRequest(
    `/repos/${owner}/${repo}/pulls?state=open&head=${head}&base=${base}`,
    { token },
  );

  return pullRequests.at(0);
}

async function ensureBranch({ baseBranch, branch, owner, repo, token }) {
  const existingBranch = await githubRequest(`/repos/${owner}/${repo}/git/ref/heads/${branch}`, {
    allowNotFound: true,
    token,
  });
  const baseRef = await githubRequest(`/repos/${owner}/${repo}/git/ref/heads/${baseBranch}`, {
    token,
  });

  if (existingBranch) {
    if (existingBranch.object.sha !== baseRef.object.sha) {
      await githubRequest(`/repos/${owner}/${repo}/git/refs/heads/${branch}`, {
        method: 'PATCH',
        token,
        body: {
          force: true,
          sha: baseRef.object.sha,
        },
      });

      console.log(`Reset branch ${branch} to ${baseBranch}`);
    }

    return;
  }

  await githubRequest(`/repos/${owner}/${repo}/git/refs`, {
    method: 'POST',
    token,
    body: {
      ref: `refs/heads/${branch}`,
      sha: baseRef.object.sha,
    },
  });

  console.log(`Created branch: ${branch}`);
}

async function commitVersionUpdate({ branch, owner, repo, token, update }) {
  const branchRef = await getBranchRef({ branch, owner, repo, token });
  const currentCommit = await githubRequest(
    `/repos/${owner}/${repo}/git/commits/${branchRef.object.sha}`,
    { token },
  );
  const tree = [];
  const languageFile = await getRepositoryFile({
    branch,
    owner,
    path: update.filePath,
    repo,
    token,
  });
  const readmeFile = await getRepositoryFile({
    branch,
    owner,
    path: 'README.md',
    repo,
    token,
  });
  const changes = planLanguageVersionUpdate({
    languageContent: languageFile.content,
    readmeContent: readmeFile.content,
    update,
  });

  for (const change of changes) {
    tree.push({
      path: change.path,
      mode: '100644',
      type: 'blob',
      content: change.content,
    });
  }

  if (tree.length === 0) {
    console.log(`${update.name} already has ${update.latestVersion} on ${branch}`);

    return;
  }

  const newTree = await githubRequest(`/repos/${owner}/${repo}/git/trees`, {
    method: 'POST',
    token,
    body: {
      base_tree: currentCommit.tree.sha,
      tree,
    },
  });
  const newCommit = await githubRequest(`/repos/${owner}/${repo}/git/commits`, {
    method: 'POST',
    token,
    body: {
      message: issueTitle(update),
      tree: newTree.sha,
      parents: [branchRef.object.sha],
    },
  });

  await githubRequest(`/repos/${owner}/${repo}/git/refs/heads/${branch}`, {
    method: 'PATCH',
    token,
    body: {
      sha: newCommit.sha,
    },
  });

  console.log(`Committed ${update.name} ${update.version} -> ${update.latestVersion} on ${branch}`);
}

async function getBranchRef({ branch, owner, repo, token }) {
  return githubRequest(`/repos/${owner}/${repo}/git/ref/heads/${branch}`, {
    token,
  });
}

async function getRepositoryFile({ branch, owner, path, repo, token }) {
  const file = await githubRequest(
    `/repos/${owner}/${repo}/contents/${path}?ref=${encodeURIComponent(branch)}`,
    { token },
  );

  return {
    content: Buffer.from(file.content, 'base64').toString('utf8'),
    sha: file.sha,
  };
}

function issueMarker(slug) {
  return `<!-- language-version-update:${slug} -->`;
}

function issueTitle(update) {
  return `fix: update ${update.name} metadata to ${update.latestVersion}`;
}

function pullRequestTitle(updates) {
  if (updates.length === 1) {
    return issueTitle(updates[0]);
  }

  return `fix: update ${updates.length} language metadata versions`;
}

function issueBody(update) {
  return [
    `The automated language version check found a pending ${update.name} update.`,
    '',
    `- Language: ${update.name} (${update.slug})`,
    `- Current version: ${update.version}`,
    `- Detected version: ${update.latestVersion}`,
    `- Source: ${update.sourceUrl}`,
    `- File: \`${update.filePath}\``,
    '',
    'Please verify the upstream source before updating the metadata.',
    '',
    issueMarker(update.slug),
    issueVersionMarker(update.latestVersion),
  ].join('\n');
}

function pullRequestBody(updateIssues) {
  const closingLines = updateIssues
    .map(({ issue }) => issue)
    .filter(Boolean)
    .map((issue) => `Closes #${issue.number}`);

  return [
    'Updates language metadata versions detected by the automated language version check.',
    '',
    '## Summary',
    '',
    '| Language | Current version | New version | Issue related |',
    '| --- | --- | --- | --- |',
    ...updateIssues
      .map(({ issue, update }) =>
        [
          markdownTableCell(`${update.name} (${update.slug})`),
          markdownTableCell(update.version),
          markdownTableCell(update.latestVersion),
          issue ? `[#${issue.number}](${issue.html_url})` : 'Not found',
        ].join(' | '),
      )
      .map((row) => `| ${row} |`),
    '',
    ...closingLines,
    '',
    'This pull request was created by the manual language version check workflow.',
    '',
    ...updateIssues.flatMap(({ update }) => [
      issueMarker(update.slug),
      issueVersionMarker(update.latestVersion),
    ]),
  ].join('\n');
}

function markdownTableCell(value) {
  return String(value).replace(/\|/g, '\\|');
}

function issueVersionMarker(version) {
  return `<!-- detected-version:${version} -->`;
}

function extractDetectedVersion(issue) {
  const bodyVersion = issue.body?.match(/<!-- detected-version:([^>]+) -->/)?.[1];
  const titleVersion = issue.title?.match(/\bmetadata to (.+)$/)?.[1];

  return bodyVersion ?? titleVersion;
}

async function fetchJson(url) {
  const response = await fetchWithHeaders(url);

  return response.json();
}

async function fetchText(url) {
  const response = await fetchWithHeaders(url);

  return response.text();
}

async function fetchWithHeaders(url) {
  const response = await fetchUrl(url, {
    headers: {
      Accept: 'application/json, text/plain, */*',
      'User-Agent': 'code-languages-version-check',
    },
  });

  if (!response.ok) {
    throw new Error(`Request failed with ${response.status} for ${url}`);
  }

  return response;
}

async function githubRequest(path, { allowNotFound = false, body, method = 'GET', token }) {
  const response = await fetchUrl(`https://api.github.com${path}`, {
    method,
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'User-Agent': 'code-languages-version-check',
      'X-GitHub-Api-Version': '2022-11-28',
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (response.status === 404 && allowNotFound) {
    return undefined;
  }

  if (!response.ok) {
    const text = await response.text();

    throw new Error(`GitHub request failed with ${response.status}: ${text}`);
  }

  return response.json();
}

async function fetchUrl(url, options) {
  const isGitHubApi = isGitHubApiUrl(url);

  if (isGitHubApi) {
    await waitForGitHubRequestSlot();
  }

  const response = await fetch(url, options);

  if (isGitHubApi && shouldRetryGitHubRateLimit(response)) {
    const waitMs = getGitHubRateLimitWaitMs(response);

    if (waitMs > 0 && waitMs <= githubRateLimitMaxWaitMs) {
      console.log(`GitHub rate limit reached. Retrying in ${Math.ceil(waitMs / 1000)}s.`);
      await sleep(waitMs);
      await waitForGitHubRequestSlot();

      return fetch(url, options);
    }
  }

  return response;
}

function isGitHubApiUrl(url) {
  return String(url).startsWith('https://api.github.com/');
}

async function waitForGitHubRequestSlot() {
  if (!Number.isFinite(githubRequestDelayMs) || githubRequestDelayMs <= 0) {
    return;
  }

  const now = Date.now();
  const waitMs = Math.max(0, nextGithubRequestAt - now);

  nextGithubRequestAt = Math.max(now, nextGithubRequestAt) + githubRequestDelayMs;

  if (waitMs > 0) {
    await sleep(waitMs);
  }
}

function shouldRetryGitHubRateLimit(response) {
  return (
    (response.status === 403 || response.status === 429) &&
    (response.headers.get('x-ratelimit-remaining') === '0' || response.headers.has('retry-after'))
  );
}

function getGitHubRateLimitWaitMs(response) {
  const retryAfterSeconds = Number(response.headers.get('retry-after'));

  if (Number.isFinite(retryAfterSeconds) && retryAfterSeconds > 0) {
    return retryAfterSeconds * 1000;
  }

  const resetSeconds = Number(response.headers.get('x-ratelimit-reset'));

  if (Number.isFinite(resetSeconds) && resetSeconds > 0) {
    return Math.max(0, resetSeconds * 1000 - Date.now()) + 1000;
  }

  return 0;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function latestSemver(versions) {
  return [...new Set(versions)].sort(compareSemver).at(-1);
}

function latestNumeric(versions) {
  return [...new Set(versions)]
    .map(Number)
    .filter(Number.isFinite)
    .sort((a, b) => a - b)
    .at(-1)
    ?.toString();
}

function compareSemver(left, right) {
  const a = left.split('.').map(Number);
  const b = right.split('.').map(Number);

  for (let index = 0; index < Math.max(a.length, b.length); index += 1) {
    const difference = (a[index] ?? 0) - (b[index] ?? 0);

    if (difference !== 0) {
      return difference;
    }
  }

  return 0;
}

function normalizeVersion(value) {
  return String(value ?? '')
    .replace(/^v/i, '')
    .replace(/^kotlin-?/i, '')
    .trim();
}

function majorMinor(value) {
  const match = String(value ?? '').match(/^(\d+\.\d+)/);

  return match?.[1] ?? value;
}

function normalizeComparable(value) {
  return normalizeVersion(value)
    .replace(/^commonmark\s+/i, '')
    .replace(/^r(\d{4})a$/i, '$1.1')
    .replace(/^r(\d{4})b$/i, '$1.2')
    .replace(/(\d{4})\s+fps(\d+)/i, '$1.$2')
    .trim()
    .toLowerCase();
}

function isUpdateAvailable(currentVersion, latestVersion) {
  const current = normalizeComparable(currentVersion);
  const latest = normalizeComparable(latestVersion);
  const currentSemver = current.match(/\d+(?:\.\d+){0,2}/)?.[0];
  const latestSemver = latest.match(/\d+(?:\.\d+){0,2}/)?.[0];

  if (currentSemver && latestSemver) {
    return compareSemver(currentSemver, latestSemver) < 0;
  }

  return current !== latest;
}

function printReport(report) {
  console.log(`Checked at: ${report.checkedAt}`);
  console.log(`Current: ${report.current.length}`);
  console.log(`Updates: ${report.updates.length}`);
  console.log(`Skipped: ${report.skipped.length}`);
  console.log(`Errors: ${report.errors.length}`);

  for (const update of report.updates) {
    console.log(
      `Update available: ${update.name} ${update.version} -> ${update.latestVersion} (${update.sourceUrl})`,
    );
  }

  for (const error of report.errors) {
    console.log(`Error: ${error.name} (${error.slug}) - ${error.message}`);
  }
}

try {
  await main();
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}
