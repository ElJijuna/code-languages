import { type LanguageCategory, matchesCategory } from './domain/category/registry';
import { detectLanguageSlug, detectLanguageSlugs } from './domain/detection/detect-slugs';
import {
  type EcosystemInfo,
  ecosystemInfoFromDefinition,
  findEcosystem,
  matchesEcosystem,
} from './domain/ecosystem/registry';
import { localizeLanguage } from './domain/i18n';
import { languages } from './domain/language/catalog';
import { type LanguageSlug, languageIndex, loadLanguage } from './domain/language/registry';
import {
  findPackageManager,
  matchesPackageManager,
  type PackageManagerInfo,
  packageManagerInfoFromDefinition,
} from './domain/package-manager/registry';
import {
  findParadigm,
  matchesParadigm,
  type ParadigmInfo,
  paradigmInfoFromDefinition,
} from './domain/paradigm/registry';
import {
  findRuntime,
  matchesRuntime,
  type RuntimeInfo,
  runtimeInfoFromDefinition,
  runtimesForPackageManager,
} from './domain/runtime/registry';
import type { Language, Locale, LocalizedLanguage } from './types';

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

export interface RuntimeRequest {
  /** Metadata about the matched runtime platform. Returns undefined for unknown values. */
  info(): RuntimeInfo | undefined;
  /** Languages that run on or target this platform. */
  langs(): LanguageCollectionRequest;
}

export interface PackageManagerRequest {
  /** Metadata about the matched package manager. Returns undefined for unknown values. */
  info(): PackageManagerInfo | undefined;
  /** Languages that use this package manager. */
  langs(): LanguageCollectionRequest;
  /** Runtime platforms that include this package manager. */
  runtimes(): RuntimeInfo[];
}

export interface CategoryRequest {
  /** Languages that belong to this category. */
  langs(): LanguageCollectionRequest;
}

export interface ParadigmRequest {
  /** Metadata about the matched paradigm. Returns undefined for unknown values. */
  info(): ParadigmInfo | undefined;
  /** Languages that use this programming paradigm. */
  langs(): LanguageCollectionRequest;
}

export interface EcosystemRequest {
  /** Metadata about the matched ecosystem. Returns undefined for unknown values. */
  info(): EcosystemInfo | undefined;
  /** Languages that belong to this ecosystem. */
  langs(): LanguageCollectionRequest;
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

const defaultLocale: Locale = 'en';
const languageMap = new Map(languages.map((l) => [l.slug, l]));
const normalizeLanguageSlug = (slug: RuntimeLanguageSlug) =>
  slug
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
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
const loadDetectedLanguages = async (filename: string) => {
  const detectedLanguages = await Promise.all(
    detectLanguageSlugs(filename).map((slug) => loadLanguage(slug)),
  );

  return detectedLanguages.filter((language): language is Language => Boolean(language));
};
const getLanguageBySlug = (slug: string): Language | undefined => languageMap.get(slug);
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
      () => languageMap.get(normalizedSlug),
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
      async () => {
        const loaded = await Promise.all(languageIndex.map((entry) => loadLanguage(entry.slug)));

        return loaded.filter((language): language is Language => Boolean(language));
      },
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
   * Selects every language that runs on or targets the given platform or runtime.
   *
   * Accepts common aliases: 'node', 'nodejs', 'bun', 'deno', '.net', 'jvm', 'android', 'ios', etc.
   * Searches both `tooling.runtimes` and `tooling.ecosystems`.
   *
   * @example
   * api.runtime('node').langs().locale('es').get();
   * api.runtime('.net').info();
   */
  runtime(value: string): RuntimeRequest {
    const definition = findRuntime(value);
    const targets = definition?.targets ?? [value];

    return {
      info() {
        return definition ? runtimeInfoFromDefinition(definition) : undefined;
      },
      langs() {
        const filtered = () => languages.filter((lang) => matchesRuntime(lang, targets));

        return createLanguageCollectionRequest(filtered, async () => {
          const loaded = await Promise.all(filtered().map((lang) => loadLanguage(lang.slug)));

          return loaded.filter((lang): lang is Language => Boolean(lang));
        });
      },
    };
  },

  /**
   * Selects every language that uses the given package manager.
   *
   * Accepts common aliases: 'npm', 'pnpm', 'yarn', 'pip', 'cargo', 'maven', 'nuget', etc.
   * Searches `tooling.packageManagers`.
   *
   * @example
   * api.packageManager('npm').langs().locale('es').get();
   * api.packageManager('npm').runtimes();
   */
  packageManager(value: string): PackageManagerRequest {
    const definition = findPackageManager(value);
    const targets = definition?.targets ?? [value];

    return {
      info() {
        return definition ? packageManagerInfoFromDefinition(definition) : undefined;
      },
      langs() {
        const filtered = () => languages.filter((lang) => matchesPackageManager(lang, targets));

        return createLanguageCollectionRequest(filtered, async () => {
          const loaded = await Promise.all(filtered().map((lang) => loadLanguage(lang.slug)));

          return loaded.filter((lang): lang is Language => Boolean(lang));
        });
      },
      runtimes() {
        return runtimesForPackageManager(targets);
      },
    };
  },

  /**
   * Selects every language that belongs to the given category.
   *
   * Categories are inferred from each language's `tooling.runtimes` and `tooling.ecosystems`:
   * - `frontend`    — targets the browser only (CSS, HTML, GLSL…)
   * - `backend`     — runs on a server runtime (Python, Go, Ruby, PHP…)
   * - `fullstack`   — targets both browser and server (JavaScript, TypeScript…)
   * - `systems`     — low-level / native / embedded (C, C++, Rust, Zig…)
   * - `data-science`— data, ML, scientific computing (R, Julia, MATLAB…)
   * - `scripting`   — shell and scripting languages (Bash, Zsh, PowerShell…)
   * - `other`       — everything that does not match any of the above
   *
   * Categories are not mutually exclusive: Python appears in both `backend` and `data-science`.
   *
   * @example
   * api.category('backend').langs().locale('es').get();
   * await api.category('data-science').langs().load();
   */
  category(value: LanguageCategory): CategoryRequest {
    return {
      langs() {
        const filtered = () => languages.filter((lang) => matchesCategory(lang, value));

        return createLanguageCollectionRequest(filtered, async () => {
          const loaded = await Promise.all(filtered().map((lang) => loadLanguage(lang.slug)));

          return loaded.filter((lang): lang is Language => Boolean(lang));
        });
      },
    };
  },

  /**
   * Selects every language that uses the given programming paradigm.
   *
   * Accepts common aliases: 'functional', 'fp', 'object-oriented', 'oop', 'declarative', etc.
   * Searches `language.paradigms`.
   *
   * @example
   * api.paradigm('functional').langs().locale('es').get();
   * api.paradigm('oop').info();
   */
  paradigm(value: string): ParadigmRequest {
    const definition = findParadigm(value);
    const targets = definition?.targets ?? [value];

    return {
      info() {
        return definition ? paradigmInfoFromDefinition(definition) : undefined;
      },
      langs() {
        const filtered = () => languages.filter((lang) => matchesParadigm(lang, targets));

        return createLanguageCollectionRequest(filtered, async () => {
          const loaded = await Promise.all(filtered().map((lang) => loadLanguage(lang.slug)));

          return loaded.filter((lang): lang is Language => Boolean(lang));
        });
      },
    };
  },

  /**
   * Selects every language that belongs to the given ecosystem.
   *
   * Accepts common aliases: 'web', 'jvm', 'dotnet', 'devops', 'data-science', 'embedded', etc.
   * Searches `tooling.ecosystems`.
   *
   * @example
   * api.ecosystem('jvm').langs().locale('es').get();
   * api.ecosystem('blockchain').info();
   */
  ecosystem(value: string): EcosystemRequest {
    const definition = findEcosystem(value);
    const targets = definition?.targets ?? [value];

    return {
      info() {
        return definition ? ecosystemInfoFromDefinition(definition) : undefined;
      },
      langs() {
        const filtered = () => languages.filter((lang) => matchesEcosystem(lang, targets));

        return createLanguageCollectionRequest(filtered, async () => {
          const loaded = await Promise.all(filtered().map((lang) => loadLanguage(lang.slug)));

          return loaded.filter((lang): lang is Language => Boolean(lang));
        });
      },
    };
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

export type { LanguageCategory } from './domain/category/registry';
export type { EcosystemInfo } from './domain/ecosystem/registry';
export type { ParadigmInfo } from './domain/paradigm/registry';
export type { LanguageSlug };
