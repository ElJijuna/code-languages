import {
  type CategoryInfo,
  categoryInfoFromDefinition,
  findCategory,
  type LanguageCategory,
  matchesCategory,
} from '@/domain/category/registry';
import { detectLanguageSlug, detectLanguageSlugs } from '@/domain/detection/detect-slugs';
import {
  type EcosystemInfo,
  ecosystemInfoFromDefinition,
  findEcosystem,
  matchesEcosystem,
} from '@/domain/ecosystem/registry';
import { localizeLanguage } from '@/domain/i18n';
import { languages } from '@/domain/language/catalog';
import { type LanguageSlug, languageIndex, loadLanguage } from '@/domain/language/registry';
import {
  findPackageManager,
  matchesPackageManager,
  type PackageManagerInfo,
  packageManagerInfoFromDefinition,
  packageManagersForRuntime,
} from '@/domain/package-manager/registry';
import {
  findParadigm,
  matchesParadigm,
  type ParadigmInfo,
  paradigmInfoFromDefinition,
} from '@/domain/paradigm/registry';
import {
  findRuntime,
  matchesRuntime,
  type RuntimeInfo,
  runtimeInfoFromDefinition,
  runtimesForPackageManager,
} from '@/domain/runtime/registry';
import type { Language, LanguageStatus, Locale, LocalizedLanguage } from '@/types';

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

/**
 * A `LanguageRequest` for a slug that is statically known to exist in the catalog,
 * so `get()` and `load()` never return `undefined`.
 */
export interface ResolvedLanguageRequest {
  /** Sets the requested locale for this language lookup. */
  locale(locale: Locale): ResolvedLanguageRequest;

  /** Reads the language from the in-memory catalog and localizes it. */
  get(): LocalizedLanguage;

  /** Dynamically imports the language module and localizes it. */
  load(): Promise<LocalizedLanguage>;
}

export interface RuntimeRequest {
  /** Metadata about the matched runtime platform. Returns undefined for unknown values. */
  info(): RuntimeInfo | undefined;
  /** Languages that run on or target this platform. */
  langs(): LanguageCollectionRequest;
  /** Package managers available on this runtime platform. */
  packageManagers(): PackageManagerInfo[];
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
  /** Metadata about the matched category. Returns undefined for unknown values. */
  info(): CategoryInfo | undefined;
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

export interface ExtensionRequest {
  /** Languages whose extensions include this extension or exact filename. */
  langs(): LanguageCollectionRequest;
}

export interface StatusRequest {
  /** Languages with this lifecycle status. Languages without a status count as `active`. */
  langs(): LanguageCollectionRequest;
}

export interface RelatedRequest {
  /** Languages linked to the given language through `relations`, in either direction. */
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
const languageAliasMap = new Map<string, string>();

for (const language of languages) {
  for (const alias of language.aliases ?? []) {
    languageAliasMap.set(alias.toLowerCase(), language.slug);
  }
}

const normalizeLanguageSlug = (slug: RuntimeLanguageSlug) =>
  slug
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
/**
 * Resolves a lookup value to a catalog slug.
 *
 * Aliases are checked before slug normalization so values such as `C#` or `golang`
 * resolve to `csharp` and `go` instead of being mangled by symbol stripping.
 */
const resolveLanguageLookup = (value: string) => {
  const raw = value.trim().toLowerCase();
  const normalized = normalizeLanguageSlug(value);

  return languageAliasMap.get(raw) ?? languageAliasMap.get(normalized) ?? normalized;
};
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
/** Builds a collection request over the catalog languages matching a predicate. */
const createFilteredLanguageCollection = (predicate: (language: Language) => boolean) => {
  const filtered = () => languages.filter(predicate);

  return createLanguageCollectionRequest(filtered, async () => {
    const loaded = await Promise.all(filtered().map((language) => loadLanguage(language.slug)));

    return loaded.filter((language): language is Language => Boolean(language));
  });
};
const loadDetectedLanguages = async (filename: string) => {
  const detectedLanguages = await Promise.all(
    detectLanguageSlugs(filename).map((slug) => loadLanguage(slug)),
  );

  return detectedLanguages.filter((language): language is Language => Boolean(language));
};
const getLanguageBySlug = (slug: string): Language | undefined => languageMap.get(slug);
const getRelationSlugs = (language: Language): string[] => {
  const { supersetOf = [], dialectOf = [], compilesTo = [] } = language.relations ?? {};

  return [...supersetOf, ...dialectOf, ...compilesTo];
};
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
   * Selects a language by slug or alias.
   *
   * Input is normalized to the package slug format before lookup, and language
   * aliases such as `golang`, `C#`, or `wasm` resolve to their catalog slug.
   * When the slug is a known literal, `get()` and `load()` are typed as
   * always returning a language.
   *
   * @example
   * api.language("astro").locale("es-PE").get();
   * api.language("golang").get()?.slug; // "go"
   */
  language<Slug extends string>(
    slug: Slug,
  ): Slug extends LanguageSlug ? ResolvedLanguageRequest : LanguageRequest {
    const resolvedSlug = resolveLanguageLookup(slug);

    return createLanguageRequest(
      () => languageMap.get(resolvedSlug),
      () => loadLanguage(resolvedSlug),
    ) as Slug extends LanguageSlug ? ResolvedLanguageRequest : LanguageRequest;
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
   * Selects every language that registers the given file extension or exact filename.
   *
   * Accepts values with or without the leading dot: `.ts`, `ts`, or `Dockerfile`.
   * Unlike `detect`, this matches the extension entry exactly instead of ranking
   * suffix matches, so `api.extension('.h')` returns both C and C++.
   *
   * @example
   * api.extension('.h').langs().get().map((language) => language.slug); // ["c", "cpp"]
   * api.extension('ts').langs().locale('es').get();
   */
  extension(value: string): ExtensionRequest {
    const normalized = value.trim().toLowerCase();

    return {
      langs() {
        return createFilteredLanguageCollection((language) =>
          language.extensions.some((extension) => {
            const normalizedExtension = extension.toLowerCase();

            return normalizedExtension === normalized || normalizedExtension === `.${normalized}`;
          }),
        );
      },
    };
  },

  /**
   * Searches languages by name, slug, or alias with ranked results.
   *
   * Ranking: exact slug/alias/name match, then name or slug prefix, then name
   * substring, then slug or alias substring. Empty queries return no results.
   *
   * @example
   * api.search('type').get().map((language) => language.slug); // ["typescript", "typst", ...]
   * api.search('golang').get().at(0)?.slug; // "go"
   */
  search(query: string): LanguageCollectionRequest {
    const normalizedQuery = query.trim().toLowerCase();
    const rankLanguage = (language: Language): number => {
      const name = language.i18n.en.name.toLowerCase();
      const aliases = (language.aliases ?? []).map((alias) => alias.toLowerCase());

      if (
        language.slug === normalizedQuery ||
        name === normalizedQuery ||
        aliases.includes(normalizedQuery)
      ) {
        return 4;
      }

      if (name.startsWith(normalizedQuery) || language.slug.startsWith(normalizedQuery)) {
        return 3;
      }

      if (name.includes(normalizedQuery)) {
        return 2;
      }

      if (
        language.slug.includes(normalizedQuery) ||
        aliases.some((alias) => alias.includes(normalizedQuery))
      ) {
        return 1;
      }

      return 0;
    };
    const ranked = () => {
      if (!normalizedQuery) {
        return [];
      }

      return languages
        .map((language, index) => ({ language, index, rank: rankLanguage(language) }))
        .filter(({ rank }) => rank > 0)
        .sort((first, second) => second.rank - first.rank || first.index - second.index)
        .map(({ language }) => language);
    };

    return createLanguageCollectionRequest(ranked, async () => {
      const loaded = await Promise.all(ranked().map((language) => loadLanguage(language.slug)));

      return loaded.filter((language): language is Language => Boolean(language));
    });
  },

  /**
   * Selects every language with the given lifecycle status.
   *
   * Languages without a `status` field count as `active`.
   *
   * @example
   * api.status('legacy').langs().get();
   * api.status('experimental').langs().locale('es').get();
   */
  status(value: LanguageStatus): StatusRequest {
    return {
      langs() {
        return createFilteredLanguageCollection(
          (language) => (language.status ?? 'active') === value,
        );
      },
    };
  },

  /**
   * Selects every language related to the given language through `relations`,
   * in either direction.
   *
   * @example
   * api.related('javascript').langs().get(); // TypeScript, CoffeeScript, Elm, ...
   * api.related('typescript').langs().get(); // JavaScript
   */
  related(slug: RuntimeLanguageSlug): RelatedRequest {
    const resolvedSlug = resolveLanguageLookup(slug);

    return {
      langs() {
        const source = getLanguageBySlug(resolvedSlug);
        const outgoing = new Set(source ? getRelationSlugs(source) : []);

        return createFilteredLanguageCollection(
          (language) =>
            language.slug !== resolvedSlug &&
            (outgoing.has(language.slug) || getRelationSlugs(language).includes(resolvedSlug)),
        );
      },
    };
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
   * api.runtime('node').packageManagers();
   */
  runtime(value: string): RuntimeRequest {
    const definition = findRuntime(value);
    const targets = definition?.targets ?? [value];

    return {
      info() {
        return definition ? runtimeInfoFromDefinition(definition) : undefined;
      },
      langs() {
        return createFilteredLanguageCollection((language) => matchesRuntime(language, targets));
      },
      packageManagers() {
        return definition ? packageManagersForRuntime(definition.packageManagers) : [];
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
        return createFilteredLanguageCollection((language) =>
          matchesPackageManager(language, targets),
        );
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
   * api.category('backend').info();
   * await api.category('data-science').langs().load();
   */
  category(value: LanguageCategory): CategoryRequest {
    const definition = findCategory(value);
    const resolvedCategory = definition?.slug ?? value;

    return {
      info() {
        return definition ? categoryInfoFromDefinition(definition) : undefined;
      },
      langs() {
        return createFilteredLanguageCollection((language) =>
          matchesCategory(language, resolvedCategory),
        );
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
        return createFilteredLanguageCollection((language) => matchesParadigm(language, targets));
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
        return createFilteredLanguageCollection((language) => matchesEcosystem(language, targets));
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

/** Lists every lifecycle status usable with `api.status()`. */
export function getStatuses(): LanguageStatus[] {
  return ['active', 'experimental', 'legacy', 'historical'];
}

export type { CategoryInfo, LanguageCategory } from '@/domain/category/registry';
export type { EcosystemInfo } from '@/domain/ecosystem/registry';
export type { ParadigmInfo } from '@/domain/paradigm/registry';
export type { LanguageSlug };
