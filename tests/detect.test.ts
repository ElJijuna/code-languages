import { describe, expect, it } from 'vitest';
import {
  abap,
  actionscript,
  ada,
  apex,
  awk,
  batch,
  c,
  clojure,
  cmake,
  cpp,
  d,
  detectLanguage,
  detectLanguageSlug,
  detectLanguageSlugs,
  detectLanguages,
  detectProjectLanguages,
  dockerfile,
  elixir,
  elm,
  erlang,
  fennel,
  fortran,
  git,
  gleam,
  glsl,
  gradle,
  haskell,
  haxe,
  hcl,
  ini,
  jupyterNotebook,
  lisp,
  lua,
  meson,
  metal,
  nim,
  ocaml,
  perl,
  protobuf,
  racket,
  razor,
  ruby,
  solidity,
  svelte,
  svn,
  tcl,
  typescript,
  xaml,
} from '../src';

describe('detectLanguage', () => {
  it('detects ABAP source files', () => {
    expect(detectLanguage('src/zsales_report.abap')).toBe(abap);
  });

  it('detects ActionScript source files', () => {
    expect(detectLanguage('src/player/Main.as')).toBe(actionscript);
  });

  it('detects Ada source and specification files', () => {
    expect(detectLanguage('src/main.adb')).toBe(ada);
    expect(detectLanguage('src/main.ads')).toBe(ada);
  });

  it('detects Apex classes and triggers', () => {
    expect(detectLanguage('force-app/classes/AccountService.cls')).toBe(apex);
    expect(detectLanguage('force-app/triggers/AccountTrigger.trigger')).toBe(apex);
  });

  it('detects awk scripts', () => {
    expect(detectLanguage('scripts/report.awk')).toBe(awk);
  });

  it('detects a language by file extension', () => {
    expect(detectLanguage('src/index.ts')).toBe(typescript);
  });

  it('detects Jupyter Notebook files', () => {
    expect(detectLanguage('notebooks/analysis.ipynb')).toBe(jupyterNotebook);
  });

  it('detects exact filename entries', () => {
    expect(detectLanguage('Dockerfile')).toBe(dockerfile);
  });

  it('detects Elm source files', () => {
    expect(detectLanguage('src/Main.elm')).toBe(elm);
  });

  it('detects Elixir source and template files', () => {
    expect(detectLanguage('lib/app_web/live/page_live.ex')).toBe(elixir);
    expect(detectLanguage('config/config.exs')).toBe(elixir);
    expect(detectLanguage('lib/app_web/components/core_components.ex')).toBe(elixir);
    expect(detectLanguage('lib/app_web/templates/page/index.html.heex')).toBe(elixir);
  });

  it('detects Haskell source, boot, signature, and package files', () => {
    expect(detectLanguage('src/Main.hs')).toBe(haskell);
    expect(detectLanguage('src/Main.lhs')).toBe(haskell);
    expect(detectLanguage('src/FFI.hsc')).toBe(haskell);
    expect(detectLanguage('src/Internal.hs-boot')).toBe(haskell);
    expect(detectLanguage('package/example.cabal')).toBe(haskell);
  });

  it('detects OCaml source, interface, lexer, parser, and Eliom files', () => {
    expect(detectLanguage('lib/main.ml')).toBe(ocaml);
    expect(detectLanguage('lib/main.mli')).toBe(ocaml);
    expect(detectLanguage('lexer.mll')).toBe(ocaml);
    expect(detectLanguage('parser.mly')).toBe(ocaml);
    expect(detectLanguage('app/page.eliom')).toBe(ocaml);
  });

  it('detects Erlang source and project files', () => {
    expect(detectLanguage('src/chat_server.erl')).toBe(erlang);
    expect(detectLanguage('include/chat_server.hrl')).toBe(erlang);
    expect(detectLanguage('rebar.config')).toBe(erlang);
  });

  it('detects Fennel source files', () => {
    expect(detectLanguage('fnl/config.fnl')).toBe(fennel);
  });

  it('detects Fortran source files', () => {
    expect(detectLanguage('src/solver.f90')).toBe(fortran);
    expect(detectLanguage('legacy/compute.for')).toBe(fortran);
  });

  it('detects dotted extension entries and exact project files', () => {
    expect(detectLanguage('cmake/FindSQLite.cmake')).toBe(cmake);
    expect(detectLanguage('CMakeLists.txt')).toBe(cmake);
  });

  it('detects Clojure source, shared, script, and data files', () => {
    expect(detectLanguage('src/core.clj')).toBe(clojure);
    expect(detectLanguage('src/core.cljs')).toBe(clojure);
    expect(detectLanguage('src/shared.cljc')).toBe(clojure);
    expect(detectLanguage('deps.edn')).toBe(clojure);
  });

  it('detects D source and interface files', () => {
    expect(detectLanguage('source/app.d')).toBe(d);
    expect(detectLanguage('source/app.di')).toBe(d);
  });

  it('detects Gleam and Haxe source files', () => {
    expect(detectLanguage('src/app.gleam')).toBe(gleam);
    expect(detectLanguage('src/Main.hx')).toBe(haxe);
    expect(detectLanguage('build.hxml')).toBe(haxe);
  });

  it('detects Ruby extensions and project files', () => {
    expect(detectLanguage('app/models/user.rb')).toBe(ruby);
    expect(detectLanguage('Gemfile')).toBe(ruby);
  });

  it('detects Svelte single-file components', () => {
    expect(detectLanguage('src/routes/+page.svelte')).toBe(svelte);
  });

  it('detects XAML markup files', () => {
    expect(detectLanguage('Views/MainWindow.xaml')).toBe(xaml);
    expect(detectLanguage('obj/Debug/MainWindow.baml')).toBe(xaml);
  });

  it('detects Lua scripts and rockspecs', () => {
    expect(detectLanguage('plugins/init.lua')).toBe(lua);
    expect(detectLanguage('lua-cjson-2.1.0.10-1.rockspec')).toBe(lua);
  });

  it('detects Lisp source files and systems', () => {
    expect(detectLanguage('src/package.lisp')).toBe(lisp);
    expect(detectLanguage('systems/simple-languages.asd')).toBe(lisp);
  });

  it('detects Racket source and Scribble files', () => {
    expect(detectLanguage('src/main.rkt')).toBe(racket);
    expect(detectLanguage('docs/manual.scrbl')).toBe(racket);
  });

  it('detects Windows Batch scripts', () => {
    expect(detectLanguage('scripts/setup.bat')).toBe(batch);
    expect(detectLanguage('scripts/deploy.cmd')).toBe(batch);
  });

  it('detects Gradle Groovy and Kotlin DSL build scripts', () => {
    expect(detectLanguage('build.gradle')).toBe(gradle);
    expect(detectLanguage('settings.gradle.kts')).toBe(gradle);
  });

  it('detects Meson build definitions and wrap files', () => {
    expect(detectLanguage('meson.build')).toBe(meson);
    expect(detectLanguage('subprojects/zlib.wrap')).toBe(meson);
  });

  it('detects Metal shader files', () => {
    expect(detectLanguage('Shaders/Lighting.metal')).toBe(metal);
  });

  it('detects Nim source, script, and package files', () => {
    expect(detectLanguage('src/main.nim')).toBe(nim);
    expect(detectLanguage('config/build.nims')).toBe(nim);
    expect(detectLanguage('package.nimble')).toBe(nim);
  });

  it('detects GLSL shader files', () => {
    expect(detectLanguage('shaders/water.frag')).toBe(glsl);
    expect(detectLanguage('shaders/lighting.vert')).toBe(glsl);
  });

  it('detects HCL and Terraform configuration files', () => {
    expect(detectLanguage('main.tf')).toBe(hcl);
    expect(detectLanguage('environments/prod.tfvars')).toBe(hcl);
    expect(detectLanguage('packer/template.pkr.hcl')).toBe(hcl);
  });

  it('detects Git metadata files', () => {
    expect(detectLanguage('.git')).toBe(git);
    expect(detectLanguage('.gitignore')).toBe(git);
    expect(detectLanguage('submodule/.gitmodules')).toBe(git);
  });

  it('detects SVN metadata and configuration files', () => {
    expect(detectLanguage('.svn')).toBe(svn);
    expect(detectLanguage('conf/svnserve.conf')).toBe(svn);
  });

  it('detects Tcl scripts, modules, and tests', () => {
    expect(detectLanguage('scripts/tool.tcl')).toBe(tcl);
    expect(detectLanguage('lib/pkg.tm')).toBe(tcl);
    expect(detectLanguage('tests/pkg.test')).toBe(tcl);
  });

  it('detects INI configuration files', () => {
    expect(detectLanguage('config/app.ini')).toBe(ini);
    expect(detectLanguage('desktop.ini')).toBe(ini);
  });

  it('detects Perl scripts and modules', () => {
    expect(detectLanguage('script/release.pl')).toBe(perl);
    expect(detectLanguage('lib/App/CLI.pm')).toBe(perl);
  });

  it('detects Protocol Buffers schemas', () => {
    expect(detectLanguage('proto/user_service.proto')).toBe(protobuf);
  });

  it('detects Razor views and components', () => {
    expect(detectLanguage('Views/Home/Index.cshtml')).toBe(razor);
    expect(detectLanguage('Components/App.razor')).toBe(razor);
  });

  it('detects Solidity smart contracts', () => {
    expect(detectLanguage('contracts/Token.sol')).toBe(solidity);
  });

  it('handles nested paths and case-insensitive names', () => {
    expect(detectLanguage('packages/api/DOCKERFILE')).toBe(dockerfile);
  });

  it('returns undefined when no language matches', () => {
    expect(detectLanguage('LICENSE')).toBeUndefined();
  });

  it('returns undefined for empty filename', () => {
    expect(detectLanguage('')).toBeUndefined();
  });
});

describe('detectLanguages', () => {
  it('returns every matching language for ambiguous extensions', () => {
    expect(detectLanguages('include/config.h')).toEqual([c, cpp]);
  });

  it('returns an empty array when no language matches', () => {
    expect(detectLanguages('README')).toEqual([]);
  });
});

describe('detectLanguageSlug', () => {
  it('detects the first matching language slug from the lightweight index', () => {
    expect(detectLanguageSlug('src/index.ts')).toBe('typescript');
  });

  it('detects every matching language slug from the lightweight index', () => {
    expect(detectLanguageSlugs('include/config.h')).toEqual(['c', 'cpp']);
  });

  it('returns undefined when no language matches', () => {
    expect(detectLanguageSlug('LICENSE')).toBeUndefined();
  });
});

describe('detectProjectLanguages', () => {
  it('counts detected files per language and sorts by frequency', () => {
    expect(
      detectProjectLanguages([
        'src/index.ts',
        'src/app.tsx',
        'README.md',
        'styles/main.css',
        'styles/theme.css',
        'LICENSE',
      ]),
    ).toEqual([
      { slug: 'css', files: 2 },
      { slug: 'typescript', files: 2 },
      { slug: 'markdown', files: 1 },
    ]);
  });

  it('uses the first matching slug for ambiguous extensions', () => {
    expect(detectProjectLanguages(['include/config.h'])).toEqual([{ slug: 'c', files: 1 }]);
  });

  it('accepts any iterable of filenames', () => {
    expect(detectProjectLanguages(new Set(['src/index.ts', 'src/main.ts']))).toEqual([
      { slug: 'typescript', files: 2 },
    ]);
  });
});
