import { describe, expect, it } from "vitest";
import {
  abap,
  actionscript,
  batch,
  c,
  cmake,
  cpp,
  detectLanguage,
  detectLanguages,
  dockerfile,
  elm,
  erlang,
  fortran,
  git,
  glsl,
  gradle,
  hcl,
  ini,
  lisp,
  lua,
  meson,
  metal,
  perl,
  ruby,
  svelte,
  svn,
  typescript,
  xaml,
} from "../src";

describe("detectLanguage", () => {
  it("detects ABAP source files", () => {
    expect(detectLanguage("src/zsales_report.abap")).toBe(abap);
  });

  it("detects ActionScript source files", () => {
    expect(detectLanguage("src/player/Main.as")).toBe(actionscript);
  });

  it("detects a language by file extension", () => {
    expect(detectLanguage("src/index.ts")).toBe(typescript);
  });

  it("detects exact filename entries", () => {
    expect(detectLanguage("Dockerfile")).toBe(dockerfile);
  });

  it("detects Elm source files", () => {
    expect(detectLanguage("src/Main.elm")).toBe(elm);
  });

  it("detects Erlang source and project files", () => {
    expect(detectLanguage("src/chat_server.erl")).toBe(erlang);
    expect(detectLanguage("include/chat_server.hrl")).toBe(erlang);
    expect(detectLanguage("rebar.config")).toBe(erlang);
  });

  it("detects Fortran source files", () => {
    expect(detectLanguage("src/solver.f90")).toBe(fortran);
    expect(detectLanguage("legacy/compute.for")).toBe(fortran);
  });

  it("detects dotted extension entries and exact project files", () => {
    expect(detectLanguage("cmake/FindSQLite.cmake")).toBe(cmake);
    expect(detectLanguage("CMakeLists.txt")).toBe(cmake);
  });

  it("detects Ruby extensions and project files", () => {
    expect(detectLanguage("app/models/user.rb")).toBe(ruby);
    expect(detectLanguage("Gemfile")).toBe(ruby);
  });

  it("detects Svelte single-file components", () => {
    expect(detectLanguage("src/routes/+page.svelte")).toBe(svelte);
  });

  it("detects XAML markup files", () => {
    expect(detectLanguage("Views/MainWindow.xaml")).toBe(xaml);
    expect(detectLanguage("obj/Debug/MainWindow.baml")).toBe(xaml);
  });

  it("detects Lua scripts and rockspecs", () => {
    expect(detectLanguage("plugins/init.lua")).toBe(lua);
    expect(detectLanguage("lua-cjson-2.1.0.10-1.rockspec")).toBe(lua);
  });

  it("detects Lisp source files and systems", () => {
    expect(detectLanguage("src/package.lisp")).toBe(lisp);
    expect(detectLanguage("systems/simple-languages.asd")).toBe(lisp);
  });

  it("detects Windows Batch scripts", () => {
    expect(detectLanguage("scripts/setup.bat")).toBe(batch);
    expect(detectLanguage("scripts/deploy.cmd")).toBe(batch);
  });

  it("detects Gradle Groovy and Kotlin DSL build scripts", () => {
    expect(detectLanguage("build.gradle")).toBe(gradle);
    expect(detectLanguage("settings.gradle.kts")).toBe(gradle);
  });

  it("detects Meson build definitions and wrap files", () => {
    expect(detectLanguage("meson.build")).toBe(meson);
    expect(detectLanguage("subprojects/zlib.wrap")).toBe(meson);
  });

  it("detects Metal shader files", () => {
    expect(detectLanguage("Shaders/Lighting.metal")).toBe(metal);
  });

  it("detects GLSL shader files", () => {
    expect(detectLanguage("shaders/water.frag")).toBe(glsl);
    expect(detectLanguage("shaders/lighting.vert")).toBe(glsl);
  });

  it("detects HCL and Terraform configuration files", () => {
    expect(detectLanguage("main.tf")).toBe(hcl);
    expect(detectLanguage("environments/prod.tfvars")).toBe(hcl);
    expect(detectLanguage("packer/template.pkr.hcl")).toBe(hcl);
  });

  it("detects Git metadata files", () => {
    expect(detectLanguage(".git")).toBe(git);
    expect(detectLanguage(".gitignore")).toBe(git);
    expect(detectLanguage("submodule/.gitmodules")).toBe(git);
  });

  it("detects SVN metadata and configuration files", () => {
    expect(detectLanguage(".svn")).toBe(svn);
    expect(detectLanguage("conf/svnserve.conf")).toBe(svn);
  });

  it("detects INI configuration files", () => {
    expect(detectLanguage("config/app.ini")).toBe(ini);
    expect(detectLanguage("desktop.ini")).toBe(ini);
  });

  it("detects Perl scripts and modules", () => {
    expect(detectLanguage("script/release.pl")).toBe(perl);
    expect(detectLanguage("lib/App/CLI.pm")).toBe(perl);
  });

  it("handles nested paths and case-insensitive names", () => {
    expect(detectLanguage("packages/api/DOCKERFILE")).toBe(dockerfile);
  });

  it("returns undefined when no language matches", () => {
    expect(detectLanguage("LICENSE")).toBeUndefined();
  });
});

describe("detectLanguages", () => {
  it("returns every matching language for ambiguous extensions", () => {
    expect(detectLanguages("include/config.h")).toEqual([c, cpp]);
  });

  it("returns an empty array when no language matches", () => {
    expect(detectLanguages("README")).toEqual([]);
  });
});
