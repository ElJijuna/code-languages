import { describe, expect, it } from "vitest";
import {
  c,
  cmake,
  cpp,
  detectLanguage,
  detectLanguages,
  dockerfile,
  ruby,
  svelte,
  typescript,
} from "../src";

describe("detectLanguage", () => {
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
