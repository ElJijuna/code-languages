export type Locale = "en" | "es";

export interface LanguageContent {
  /** Display name. e.g. "TypeScript" */
  name: string;

  /** One-line summary, max 160 characters. */
  description: string;

  /** Rich multi-paragraph description in plain text. */
  longDescription: string;
}

export type LanguageTranslations = { en: LanguageContent } & Partial<
  Record<Exclude<Locale, "en">, LanguageContent>
>;

export interface Language {
  /** URL-safe identifier. e.g. "typescript" */
  slug: string;

  /** ISO 8601 date of first public release. e.g. "2012-10-01" */
  publishedDate: string;

  /** All file extensions associated with the language. e.g. [".ts", ".tsx"] */
  extensions: string[];

  /** Original author or organization. e.g. "Anders Hejlsberg / Microsoft" */
  author: string;

  /** Official website URL. e.g. "https://www.typescriptlang.org" */
  website: string;

  /** Programming paradigms. e.g. ["object-oriented", "functional", "imperative"] */
  paradigms: string[];

  /** Latest stable version at time of last data update. e.g. "5.4.5" */
  version: string;

  /** URL to the official language logo or icon. */
  logo: string;

  /** Localized display content. English is required as the fallback locale. */
  i18n: LanguageTranslations;
}

export type LocalizedLanguage = Omit<Language, "i18n"> &
  LanguageContent & {
    /** Locale requested, or fallback locale when the requested locale is unavailable. */
    locale: Locale;

    /** Locales available for this language. */
    availableLocales: Locale[];
  };
