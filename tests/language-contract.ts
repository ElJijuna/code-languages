import { expect } from "vitest";
import { localizeLanguage } from "../src";
import type { Language, LanguageContent } from "../src";

export const expectValidLanguage = (language: Language, expectedSlug: string) => {
  expect(language.slug).toBe(expectedSlug);
  expect(language.slug).toMatch(/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/);
  expect(language.publishedDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  expect(Number.isNaN(Date.parse(language.publishedDate))).toBe(false);
  expect(language.extensions.length).toBeGreaterThan(0);
  expect(
    language.extensions.every((extension) => /^(?:\.[^\s.]+|[A-Za-z][\w.-]*)$/.test(extension)),
  ).toBe(true);
  expectNonEmptyString(language.author);
  expect(language.website).toMatch(/^https:\/\//);
  expect(language.paradigms.length).toBeGreaterThan(0);
  expect(language.paradigms.every((paradigm) => paradigm.trim().length > 0)).toBe(true);
  expectNonEmptyString(language.version);
  expect(language.logo).toMatch(/^https:\/\//);
  expectLanguageContent(language.i18n.en);

  for (const content of Object.values(language.i18n)) {
    expectLanguageContent(content);
  }

  const localized = localizeLanguage(language, "en");

  expect(localized.slug).toBe(language.slug);
  expect(localized.locale).toBe("en");
  expect(localized.resolvedLocale).toBe("en");
  expect(localized.availableLocales).toContain("en");
  expect(localized.name).toBe(language.i18n.en.name);
  expect(localized.description).toBe(language.i18n.en.description);
  expect(localized.longDescription).toBe(language.i18n.en.longDescription);

  const fallback = localizeLanguage(language, "es");

  expect(fallback.locale).toBe("es");
  expect(fallback.resolvedLocale).toBe(language.i18n.es ? "es" : "en");
  expect(fallback.name).toBe((language.i18n.es ?? language.i18n.en).name);

  const regionalSpanish = localizeLanguage(language, "es-PE");

  expect(regionalSpanish.locale).toBe("es-PE");
  expect(regionalSpanish.resolvedLocale).toBe(language.i18n.es ? "es" : "en");
  expect(regionalSpanish.name).toBe((language.i18n.es ?? language.i18n.en).name);

  const regionalEnglish = localizeLanguage(language, "en-US");

  expect(regionalEnglish.locale).toBe("en-US");
  expect(regionalEnglish.resolvedLocale).toBe("en");
  expect(regionalEnglish.name).toBe(language.i18n.en.name);

  const unsupportedLocale = localizeLanguage(language, "fr-FR");

  expect(unsupportedLocale.locale).toBe("fr-FR");
  expect(unsupportedLocale.resolvedLocale).toBe("en");
  expect(unsupportedLocale.name).toBe(language.i18n.en.name);
};

const expectLanguageContent = (content: LanguageContent) => {
  expectNonEmptyString(content.name);
  expectNonEmptyString(content.description);
  expect(content.description.length).toBeLessThanOrEqual(160);
  expectNonEmptyString(content.longDescription);
  expect(content.longDescription.split(/\n\s*\n/).length).toBeGreaterThanOrEqual(2);
};

const expectNonEmptyString = (value: unknown) => {
  expect(typeof value).toBe("string");
  expect((value as string).trim().length).toBeGreaterThan(0);
};
