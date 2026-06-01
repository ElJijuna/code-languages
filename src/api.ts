import { languages } from "./catalog";
import { detectLanguageSlug, detectLanguageSlugs } from "./detect-slugs";
import { localizeLanguage } from "./i18n";
import { type LanguageSlug, languageIndex, loadLanguage } from "./language-registry";
import type { Language, Locale, LocalizedLanguage } from "./types";

type RuntimeLanguageSlug = LanguageSlug | (string & {});

export interface LanguageRequest {
  /**
   * Sets the requested locale for this language lookup.
   *
   * Regional locales such as `es-PE` fall back to their base locale before English.
   */
  locale(locale: Locale): LanguageRequest;

  /**
   * Reads a language from the in-memory catalog and localizes it.
   *
   * Returns `undefined` when the slug does not exist.
   */
  get(): LocalizedLanguage | undefined;

  /**
   * Dynamically imports a language module and localizes it.
   *
   * Returns `undefined` when the slug does not exist.
   */
  load(): Promise<LocalizedLanguage | undefined>;
}

export interface LanguageCollectionRequest {
  /**
   * Sets the requested locale for every language returned by this collection lookup.
   */
  locale(locale: Locale): LanguageCollectionRequest;

  /**
   * Reads every language from the in-memory catalog and localizes the result.
   */
  get(): LocalizedLanguage[];

  /**
   * Dynamically imports every language module and localizes the result.
   */
  load(): Promise<LocalizedLanguage[]>;
}

const defaultLocale: Locale = "en";

const normalizeLanguageSlug = (slug: RuntimeLanguageSlug) =>
  slug
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

const localizeOptionalLanguage = (language: Language | undefined, locale: Locale) =>
  language ? localizeLanguage(language, locale) : undefined;

const createLanguageRequest = (
  getLanguage: () => Language | undefined,
  loadLanguageModule: () => Promise<Language | undefined>,
): LanguageRequest => {
  let requestedLocale = defaultLocale;

  const request: LanguageRequest = {
    locale(locale) {
      requestedLocale = locale;

      return request;
    },
    get() {
      return localizeOptionalLanguage(getLanguage(), requestedLocale);
    },
    async load() {
      return localizeOptionalLanguage(await loadLanguageModule(), requestedLocale);
    },
  };

  return request;
};

const createLanguageCollectionRequest = (
  getLanguageList: () => Language[],
  loadLanguageList: () => Promise<Language[]>,
): LanguageCollectionRequest => {
  let requestedLocale = defaultLocale;

  const request: LanguageCollectionRequest = {
    locale(locale) {
      requestedLocale = locale;

      return request;
    },
    get() {
      return getLanguageList().map((language) => localizeLanguage(language, requestedLocale));
    },
    async load() {
      const loadedLanguages = await loadLanguageList();

      return loadedLanguages.map((language) => localizeLanguage(language, requestedLocale));
    },
  };

  return request;
};

const loadDetectedLanguages = (filename: string) =>
  Promise.all(detectLanguageSlugs(filename).map((slug) => loadLanguage(slug))).then(
    (detectedLanguages) =>
      detectedLanguages.filter((language): language is Language => Boolean(language)),
  );

const getLanguageBySlug = (slug: string): Language | undefined =>
  languages.find((language) => language.slug === slug);

const getDetectedLanguages = (filename: string) =>
  detectLanguageSlugs(filename)
    .map((slug) => getLanguageBySlug(slug))
    .filter((language): language is Language => Boolean(language));

/**
 * Fluent API for localized language metadata, dynamic loading, and filename detection.
 *
 * Use `.get()` for synchronous catalog access or `.load()` to dynamically import only the
 * requested language modules.
 */
export const api = {
  /**
   * Selects a language by slug.
   *
   * Input is normalized to the package slug format before lookup.
   *
   * @example
   * api.language("astro").locale("es-PE").get();
   */
  language(slug: RuntimeLanguageSlug) {
    const normalizedSlug = normalizeLanguageSlug(slug);

    return createLanguageRequest(
      () => languages.find((language) => language.slug === normalizedSlug),
      () => loadLanguage(normalizedSlug),
    );
  },

  /**
   * Selects every language in the catalog.
   *
   * @example
   * await api.languages().locale("en-US").load();
   */
  languages() {
    return createLanguageCollectionRequest(
      () => [...languages],
      () =>
        Promise.all(languageIndex.map((entry) => loadLanguage(entry.slug))).then((loaded) =>
          loaded.filter((language): language is Language => Boolean(language)),
        ),
    );
  },

  /**
   * Detects the first matching language for a filename or path.
   *
   * @example
   * api.detect("src/App.vue").locale("es").get();
   */
  detect(filename: string) {
    return createLanguageRequest(
      () => {
        const slug = detectLanguageSlug(filename);

        return slug ? getLanguageBySlug(slug) : undefined;
      },
      async () => (await loadDetectedLanguages(filename)).at(0),
    );
  },

  /**
   * Detects every matching language for a filename or path.
   *
   * Useful for ambiguous extensions such as `.h`, which can match C and C++.
   */
  detectAll(filename: string) {
    return createLanguageCollectionRequest(
      () => getDetectedLanguages(filename),
      () => loadDetectedLanguages(filename),
    );
  },
};

export type { LanguageSlug };
