import { describe, expect, it } from "vitest";
import { c, cpp, detectLanguage, detectLanguages, dockerfile, typescript } from "../src";

describe("detectLanguage", () => {
  it("detects a language by file extension", () => {
    expect(detectLanguage("src/index.ts")).toBe(typescript);
  });

  it("detects exact filename entries", () => {
    expect(detectLanguage("Dockerfile")).toBe(dockerfile);
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
