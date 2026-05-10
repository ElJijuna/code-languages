import { expect } from "vitest";
import type { Language } from "../src";

export const expectValidLanguage = (language: Language, expectedSlug: string) => {
  expectNonEmptyString(language.name);
  expect(language.slug).toBe(expectedSlug);
  expect(language.slug).toMatch(/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/);
  expectNonEmptyString(language.description);
  expect(language.description.length).toBeLessThanOrEqual(160);
  expectNonEmptyString(language.longDescription);
  expect(language.longDescription.split(/\n\s*\n/).length).toBeGreaterThanOrEqual(2);
  expect(language.publishedDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  expect(Number.isNaN(Date.parse(language.publishedDate))).toBe(false);
  expect(language.extensions.length).toBeGreaterThan(0);
  expect(language.extensions.every((extension) => /^\.[^\s.]+$/.test(extension))).toBe(true);
  expectNonEmptyString(language.author);
  expect(language.website).toMatch(/^https:\/\//);
  expect(language.paradigms.length).toBeGreaterThan(0);
  expect(language.paradigms.every((paradigm) => paradigm.trim().length > 0)).toBe(true);
  expectNonEmptyString(language.version);
  expect(language.logo).toMatch(/^https:\/\//);
};

const expectNonEmptyString = (value: unknown) => {
  expect(typeof value).toBe("string");
  expect((value as string).trim().length).toBeGreaterThan(0);
};
