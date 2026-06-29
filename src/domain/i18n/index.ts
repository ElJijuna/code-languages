import type { BaseLocale, Language, Locale, LocalizedLanguage } from '../../types';

export const localizeLanguage = (language: Language, locale: Locale = 'en'): LocalizedLanguage => {
  const { i18n, ...metadata } = language;
  const resolvedLocale = resolveLocale(i18n, locale);
  /* v8 ignore next -- resolveLocale always returns a locale present in i18n */
  const content = i18n[resolvedLocale] ?? i18n.en;

  return {
    ...metadata,
    ...content,
    locale,
    resolvedLocale,
    availableLocales: Object.keys(i18n) as BaseLocale[],
  };
};

const resolveLocale = (translations: Language['i18n'], locale: Locale): BaseLocale => {
  const normalizedLocale = locale.toLowerCase();
  const exactLocale = normalizedLocale as BaseLocale;

  if (translations[exactLocale]) {
    return exactLocale;
  }

  const baseLocale = normalizedLocale.split('-')[0] as BaseLocale;

  if (translations[baseLocale]) {
    return baseLocale;
  }

  return 'en';
};
