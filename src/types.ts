export type BaseLocale = 'en' | 'es' | 'it' | 'fr' | 'de' | 'pt';
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

/**
 * Lifecycle status of a language. Absent means `active`.
 *
 * - `active`: maintained and in current use.
 * - `experimental`: pre-1.0 or research language without stability guarantees.
 * - `legacy`: deprecated or superseded, but still found in production systems.
 * - `historical`: of historical significance, no longer in practical use.
 */
export type LanguageStatus = 'active' | 'experimental' | 'legacy' | 'historical';

/** Relationships to other catalog languages. All values are catalog slugs. */
export interface LanguageRelations {
  /** Languages this language is a superset of. e.g. TypeScript → ["javascript"] */
  supersetOf?: string[];

  /** Languages this language is a dialect or variant of. e.g. T-SQL → ["sql"] */
  dialectOf?: string[];

  /** Languages this language compiles or transpiles to. e.g. Elm → ["javascript"] */
  compilesTo?: string[];
}

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

  /** Alternative lookup names resolved by `api.language()`. e.g. ["golang"] */
  aliases?: string[];

  /** Lifecycle status. Absent means `active`. */
  status?: LanguageStatus;

  /** Relationships to other catalog languages, keyed by relation kind. */
  relations?: LanguageRelations;

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

export type LocalizedLanguage = Omit<Language, 'i18n'> &
  LanguageContent & {
    /** Locale requested by the caller. */
    locale: Locale;

    /** Translation locale actually used after exact, base-language, and English fallback resolution. */
    resolvedLocale: BaseLocale;

    /** Base locales available for this language. */
    availableLocales: BaseLocale[];
  };
