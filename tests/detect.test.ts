import { describe, expect, it } from "vitest";
import {
  abap,
  c,
  cmake,
  cpp,
  detectLanguage,
  detectLanguages,
  dockerfile,
  gradle,
  lua,
  ruby,
  svelte,
  typescript,
} from "../src";

describe("detectLanguage", () => {
  it("detects ABAP source files", () => {
    expect(detectLanguage("src/zsales_report.abap")).toBe(abap);
  });

  it("detects a language by file extension", () => {
    expect(detectLanguage("src/index.ts")).toBe(typescript);
  });

  it("detects exact filename entries", () => {
    expect(detectLanguage("Dockerfile")).toBe(dockerfile);
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

  it("detects Lua scripts and rockspecs", () => {
    expect(detectLanguage("plugins/init.lua")).toBe(lua);
    expect(detectLanguage("lua-cjson-2.1.0.10-1.rockspec")).toBe(lua);
  });

  it("detects Gradle Groovy and Kotlin DSL build scripts", () => {
    expect(detectLanguage("build.gradle")).toBe(gradle);
    expect(detectLanguage("settings.gradle.kts")).toBe(gradle);
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
