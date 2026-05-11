import type { Language, Locale, LocalizedLanguage } from "./types";

export const localizeLanguage = (language: Language, locale: Locale = "en"): LocalizedLanguage => {
  const { i18n, ...metadata } = language;
  const resolvedLocale = i18n[locale] ? locale : "en";
  const content = i18n[resolvedLocale] ?? i18n.en;

  return {
    ...metadata,
    ...content,
    locale: resolvedLocale,
    availableLocales: Object.keys(i18n) as Locale[],
  };
};
