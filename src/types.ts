export type BaseLocale = "en" | "es";
export type Locale = BaseLocale | `${BaseLocale}-${string}` | (string & {});

export interface LanguageContent {
  /** Display name. e.g. "TypeScript" */
  name: string;

  /** One-line summary, max 160 characters. */
  description: string;

  /** Rich multi-paragraph description in plain text. */
  longDescription: string;
}

export type LanguageTranslations = { en: LanguageContent } & Partial<
  Record<BaseLocale, LanguageContent>
>;

export interface LanguageTooling {
  /** Execution environments, virtual machines, shells, or platforms. e.g. ["Node.js", "Browser"] */
  runtimes?: string[];

  /** Dependency and package management tools. e.g. ["npm", "pnpm", "Yarn"] */
  packageManagers?: string[];

  /** Broader ecosystems where the language is commonly used. e.g. ["Web", "JVM"] */
  ecosystems?: string[];
}

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

  /** Common runtimes, package managers, and ecosystems related to this language. */
  tooling?: LanguageTooling;

  /** Latest stable version at time of last data update. e.g. "5.4.5" */
  version: string;

  /** URL to the official language logo or icon. */
  logo: string;

  /** Reference color for the language in #RRGGBB hexadecimal form. */
  color: `#${string}`;

  /** Localized display content. English is required as the fallback locale. */
  i18n: LanguageTranslations;
}

export type LocalizedLanguage = Omit<Language, "i18n"> &
  LanguageContent & {
    /** Locale requested by the caller. */
    locale: Locale;

    /** Translation locale actually used after exact, base-language, and English fallback resolution. */
    resolvedLocale: BaseLocale;

    /** Base locales available for this language. */
    availableLocales: BaseLocale[];
  };
