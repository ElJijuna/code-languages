import { detectLanguageSlug, detectLanguageSlugs } from '@/domain/detection/detect-slugs';
import { localizeLanguage } from '@/domain/i18n';
import { loadLanguage } from '@/domain/language/loaders';
import { hasExtension, resolveLanguageLookup } from '@/domain/language/lookup';
import { type LanguageSlug, languageIndex } from '@/domain/language/registry';
import type { Language, Locale, LocalizedLanguage } from '@/types';

export interface LazyLanguageRequest {
  /**
   * Sets the requested locale for this language lookup.
   *
   * Regional locales such as `es-PE` fall back to their base locale before English.
   */
  locale(locale: Locale): LazyLanguageRequest;

  /**
   * Dynamically imports the language module and localizes it.
   *
   * Returns `undefined` when the slug does not exist.
   */
  load(): Promise<LocalizedLanguage | undefined>;
}

/**
 * A `LazyLanguageRequest` for a slug that is statically known to exist in the catalog,
 * so `load()` never resolves to `undefined`.
 */
export interface ResolvedLazyLanguageRequest {
  /** Sets the requested locale for this language lookup. */
  locale(locale: Locale): ResolvedLazyLanguageRequest;

  /** Dynamically imports the language module and localizes it. */
  load(): Promise<LocalizedLanguage>;
}

export interface LazyLanguageCollectionRequest {
  /** Sets the requested locale for every language loaded by this collection. */
  locale(locale: Locale): LazyLanguageCollectionRequest;

  /** Lists the matching catalog slugs without loading any language module. */
  slugs(): LanguageSlug[];

  /** Counts the matching languages without loading any language module. */
  count(): number;

  /** Dynamically imports every matching language module and localizes the result. */
  load(): Promise<LocalizedLanguage[]>;
}

export interface LazyExtensionRequest {
  /** Languages whose extensions include this extension or exact filename. */
  langs(): LazyLanguageCollectionRequest;
}

const defaultLocale: Locale = 'en';
const loadBySlug = async (slug: string): Promise<Language | undefined> => loadLanguage(slug);
const createLanguageRequest = (getSlug: () => string | undefined): LazyLanguageRequest => {
  let requestedLocale = defaultLocale;

  const request: LazyLanguageRequest = {
    locale(locale) {
      requestedLocale = locale;

      return request;
    },
    async load() {
      const slug = getSlug();
      const language = slug ? await loadBySlug(slug) : undefined;

      return language ? localizeLanguage(language, requestedLocale) : undefined;
    },
  };

  return request;
};
const createLanguageCollectionRequest = (
  getSlugs: () => LanguageSlug[],
): LazyLanguageCollectionRequest => {
  let requestedLocale = defaultLocale;

  const request: LazyLanguageCollectionRequest = {
    locale(locale) {
      requestedLocale = locale;

      return request;
    },
    slugs() {
      return getSlugs();
    },
    count() {
      return getSlugs().length;
    },
    async load() {
      const loaded = await Promise.all(getSlugs().map((slug) => loadBySlug(slug)));

      return loaded
        .filter((language): language is Language => Boolean(language))
        .map((language) => localizeLanguage(language, requestedLocale));
    },
  };

  return request;
};

/**
 * Lazy-loading counterpart of `api` that never bundles the language catalog.
 *
 * Lookups, detection, and extension matching run against a lightweight slug and
 * extension index; each `.load()` dynamically imports only the language modules it
 * returns, so bundlers split every language into its own chunk. Everything is async
 * because the data is not in memory. Use `code-languages/api` for synchronous access,
 * search, and category/paradigm/runtime/ecosystem filters, which need the full catalog.
 *
 * @example
 * await lazyApi.language('golang').locale('es').load(); // Go, loaded on demand
 * await lazyApi.detect('src/main.rs').load();
 */
export const lazyApi = {
  /**
   * Selects a language by slug or alias, with the same resolution rules as `api.language()`.
   *
   * When the slug is a known literal, `load()` is typed as always resolving to a language.
   *
   * @example
   * await lazyApi.language('typescript').locale('es-PE').load();
   * (await lazyApi.language('C#').load())?.slug; // "csharp"
   */
  language<Slug extends string>(
    slug: Slug,
  ): Slug extends LanguageSlug ? ResolvedLazyLanguageRequest : LazyLanguageRequest {
    const resolvedSlug = resolveLanguageLookup(slug);

    return createLanguageRequest(() => resolvedSlug) as Slug extends LanguageSlug
      ? ResolvedLazyLanguageRequest
      : LazyLanguageRequest;
  },

  /**
   * Selects every language in the catalog. `slugs()` and `count()` stay lightweight;
   * `load()` imports every language module.
   */
  languages(): LazyLanguageCollectionRequest {
    return createLanguageCollectionRequest(() => languageIndex.map((entry) => entry.slug));
  },

  /**
   * Detects the first matching language for a filename or path, with the same ranking
   * as `detectLanguageSlug()`, and loads only that language.
   *
   * @example
   * await lazyApi.detect('src/App.vue').locale('es').load();
   */
  detect(filename: string): LazyLanguageRequest {
    return createLanguageRequest(() => detectLanguageSlug(filename));
  },

  /**
   * Detects every matching language for a filename or path, best match first.
   *
   * @example
   * lazyApi.detectAll('include/config.h').slugs(); // ["c", "cpp"]
   */
  detectAll(filename: string): LazyLanguageCollectionRequest {
    return createLanguageCollectionRequest(() => detectLanguageSlugs(filename));
  },

  /**
   * Selects every language that registers the given file extension or exact filename,
   * with the same matching rules as `api.extension()`.
   *
   * @example
   * lazyApi.extension('.h').langs().slugs(); // ["c", "cpp"]
   */
  extension(value: string): LazyExtensionRequest {
    return {
      langs() {
        return createLanguageCollectionRequest(() =>
          languageIndex
            .filter((entry) => hasExtension(entry.extensions, value))
            .map((entry) => entry.slug),
        );
      },
    };
  },
};

export type { LanguageSlug };
