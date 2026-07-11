# Architecture

This document describes the internal architecture of `code-languages`, a zero-runtime-dependency TypeScript library that publishes structured, localized metadata for programming languages, markup languages, and configuration formats.

## Goals and constraints

- **Zero runtime dependencies.** The published package has no `dependencies` in `package.json`; only `devDependencies` used for build/test/lint.
- **Tree-shakeable and lazily loadable.** Every language is its own module and its own npm subpath export, so consumers can import exactly what they need, either statically or via dynamic `import()`.
- **Typed, contract-validated data.** Every language object satisfies a single `Language` interface and is checked against a shared Vitest contract at test time.
- **Localization built in.** Display content (name, description, long description) is translated into six base locales, with locale-fallback resolution baked into the library, not left to consumers.
- **Dual module output.** ESM and CommonJS builds are generated for every entry point via `tsup`.

## High-level module map

```
src/
├── types.ts                     # Public data model (Language, LanguageContent, Locale, ...)
├── index.ts                     # Root barrel: exports every language + domain APIs + types
├── api.ts                       # Fluent `api` object: language/category/runtime/... lookups
├── domain/
│   ├── language/
│   │   ├── catalog.ts           # Eager in-memory array of every Language object
│   │   └── registry.ts          # Lightweight slug+extension index + lazy import map (languageLoaders)
│   ├── detection/
│   │   ├── match.ts             # Shared basename/extension matching engine
│   │   ├── detect.ts            # detectLanguage(s) — operates on full Language objects
│   │   └── detect-slugs.ts      # detectLanguageSlug(s), detectProjectLanguages — slug-only, lighter weight
│   ├── i18n/
│   │   └── index.ts             # localizeLanguage() — locale resolution + fallback to English
│   ├── category/registry.ts     # Derived categories: frontend/backend/fullstack/systems/...
│   ├── ecosystem/registry.ts    # Named ecosystems (web, jvm, dotnet, devops, ...) + aliases
│   ├── package-manager/registry.ts  # Named package managers (npm, pip, cargo, ...) + aliases
│   ├── paradigm/registry.ts     # Named programming paradigms (functional, oop, ...) + aliases
│   └── runtime/registry.ts      # Named runtimes/platforms (Node.js, JVM, .NET, ...) + aliases
└── languages/
    └── <slug>.ts                # One `Language` object per supported language (286+ files)
```

Supporting directories:

- `tests/languages/<slug>.test.ts` — one contract test per language file, paired 1:1 with `src/languages/<slug>.ts`.
- `tests/language-contract.ts` — shared `expectValidLanguage()` assertions reused by every language test.
- `tests/api*.test.ts`, `tests/detect.test.ts` — behavior tests for the domain/query layer.
- `bench/` — Vitest benchmarks for the API, detection, and i18n hot paths.
- `scripts/` — Node scripts for language-version auditing, i18n translation generation, and static website data generation.
- `docs/` — generated static website (GitHub Pages) and its precomputed JSON data files.

## Data model

Everything is built around a single interface, defined in [src/types.ts](src/types.ts):

```ts
interface Language {
  slug: string;                 // URL-safe identifier, e.g. "typescript"
  publishedDate: string;        // ISO 8601 date, e.g. "2012-10-01"
  extensions: string[];         // File extensions or exact filenames, e.g. [".ts", ".tsx"]
  author: string;
  website: string;              // Must be HTTPS
  paradigms: string[];          // Free-text paradigm labels
  tooling?: {
    runtimes?: string[];
    packageManagers?: string[];
    ecosystems?: string[];
  };
  version: string;
  logo: string;                 // Must be HTTPS
  color: `#${string}`;          // Uppercase #RRGGBB
  i18n: {
    en: LanguageContent;        // Required
    es?, it?, fr?, de?, pt?: LanguageContent;  // Optional, fall back to en
  };
}
```

`LanguageContent` holds `name`, `description` (≤160 chars), and `longDescription` (multi-paragraph plain text). `LocalizedLanguage` is the output shape after `localizeLanguage()` flattens `i18n` into top-level fields and adds `locale`, `resolvedLocale`, and `availableLocales`.

Each `src/languages/<slug>.ts` file exports one `const <camelCaseSlug> = { ... } satisfies Language`. `satisfies` is used (not a type annotation) so the exported constant keeps its literal, narrowed type for downstream consumers while still being statically checked against `Language`.

Free-text fields (`paradigms`, `tooling.*`) are intentionally strings rather than enums at the data-authoring layer — the **domain registries** (below) are what turn those free-text labels into structured, alias-aware, queryable concepts.

## Domain layer (`src/domain/`)

The domain layer sits between raw language data and the public API. It is organized by concept, each with its own directory:

### `language/`

- `catalog.ts` — imports and re-exports every language module eagerly as a flat `languages: Language[]` array. Used for synchronous, in-memory catalog access (`api.language(x).get()`, `languages` export).
- `registry.ts` — defines `languageIndex`, a minimal `{ slug, extensions }[]` array (no descriptions, no i18n, no tooling) used for lightweight filename detection without pulling in the full catalog. It also defines `languageLoaders`, an explicit `Record<slug, () => Promise<Language>>` map of dynamic `import()` calls — one per language — used for `.load()`-based lazy access (`api.language(x).load()`).

This split exists so that consumers who only need `detectLanguageSlug()` (via `code-languages/detect-slugs`) don't pay the bundle cost of every language's full metadata and i18n content.

### `detection/`

- `match.ts` — the shared matching primitive: `getBasename()` normalizes a path to a lowercase filename, `matchesExtension()` matches both dotted extensions (`.ts`) and exact filenames (`Dockerfile`), and `detectMatchingEntries()` ranks all matches by longest-extension-match-wins, then by original catalog order (stable tie-break, e.g. `.h` resolves to `c` before `cpp`).
- `detect.ts` — `detectLanguage(s)`, operating on full `Language` objects from the catalog.
- `detect-slugs.ts` — `detectLanguageSlug(s)`, operating on the lightweight `languageIndex`, plus `detectProjectLanguages()`, which aggregates a file list into per-language counts (sorted by count desc, then slug asc).

### `i18n/`

- `localizeLanguage(language, locale)` resolves a requested locale in three steps: exact match (`es-PE`) → base language (`es`) → English fallback. Returns a `LocalizedLanguage` with `resolvedLocale` and `availableLocales` so consumers can tell when a translation fell back.

### Concept registries: `category/`, `ecosystem/`, `package-manager/`, `paradigm/`, `runtime/`

These four registries share one shape: a static array of `{ name, aliases, targets, ... }` definitions plus `find*()` (alias → definition), `matches*()` (does a `Language` match a given definition's `targets`), and an `*InfoFromDefinition()` mapper that strips `targets` before exposing the definition publicly as `*Info`.

- `runtime/registry.ts` and `package-manager/registry.ts` carry rich metadata (name, color, logo, website, aliases) because they're rendered as first-class entities (e.g. for the docs website).
- `paradigm/registry.ts` and `ecosystem/registry.ts` carry name/description/aliases.
- `category/registry.ts` is the odd one out: categories (`frontend`, `backend`, `fullstack`, `systems`, `data-science`, `scripting`, `other`) are **derived**, not registered. `matchesCategory()` inspects `tooling.runtimes`/`tooling.ecosystems` against fixed keyword pools (`BROWSER_TARGETS`, `SERVER_TARGETS`, etc.). `frontend`/`backend`/`fullstack` are mutually exclusive (computed from browser-vs-server presence); the rest may overlap.

All matching across these registries is case-insensitive substring matching over `tooling.*` / `paradigms` string pools — there is no separate taxonomy stored per language; categorization is fully inferred from the free-text fields already present in each `Language` object.

## Public API layer

### `src/index.ts`

The root barrel export. Re-exports every language constant by name, every domain type, and the domain-level functions (`localizeLanguage`, `detectLanguage(s)`, `detectLanguageSlug(s)`, `detectProjectLanguages`, `getCategories`, `getEcosystems`, `getPackageManagers`, `getParadigms`, `getRuntimes`, the `languages` catalog array, and the `api` object). Importing from the root pulls in the entire catalog — fine for scripts/tooling, not ideal for bundled frontend apps.

### `src/api.ts` — the fluent query API

`api` is the single richer entry point, exported at `code-languages/api`. It exposes chainable request builders:

- `api.language(slug)` / `api.languages()` — single or all languages, normalized slug lookup (`"Visual Basic"` → `visual-basic`).
- `api.detect(filename)` / `api.detectAll(filename)` — filename-based lookup returning first match or all matches.
- `api.runtime(value)`, `api.packageManager(value)`, `api.paradigm(value)`, `api.ecosystem(value)` — alias-aware registry lookups, each returning `.info()` (registry metadata) and `.langs()` (matching languages).
- `api.category(value)` — same shape but backed by the derived category logic, `.langs()` only (no `.info()`, since categories have no registry entry).

Every request builder supports `.locale(x)` (mutates the builder, returns itself, chainable) followed by either:
- `.get()` — synchronous read from the in-memory `languages` catalog, or
- `.load()` — `async`, dynamically imports only the matched language module(s) via `languageLoaders`.

This `.get()`/`.load()` split is the core lazy-loading mechanism: `.get()` assumes the whole catalog is already in memory (i.e., you imported from the root or `code-languages/api`), while `.load()` lets a bundler code-split so only the languages actually requested at runtime are fetched.

### Subpath exports (`code-languages/<slug>`)

`package.json`'s `exports` map defines one subpath per language (e.g. `code-languages/typescript`) plus `.`, `./api`, `./i18n`, `./detect`, `./detect-slugs`. This is the primary tree-shaking mechanism: a consumer who only needs `astro` metadata imports `code-languages/astro` and never touches the other 285+ language modules, even without a bundler.

## Build pipeline

[tsup.config.ts](tsup.config.ts) drives the build:

- Entry points are `api`, `detect`, `detect-slugs`, `index`, `i18n`, plus **one auto-generated entry per file in `src/languages/`** (via `readdirSync`), producing a matching `dist/languages/<slug>.{js,cjs,d.ts,d.cts}` for every subpath export declared in `package.json`.
- Output formats: ESM and CommonJS (`format: ['esm', 'cjs']`), with `.d.ts` generation, no code splitting, tree-shaking enabled, `dist/` cleaned on each build.
- `sideEffects: false` in `package.json` lets bundlers safely drop unused language modules.

`npm run build` runs `tsup`. `npm run check` runs format-check, lint, `tsc --noEmit`, and the full Vitest suite — this is the required gate before build in CI.

## Testing strategy

- **Contract testing, not per-language hand-written assertions.** `tests/language-contract.ts` exports `expectValidLanguage(language, expectedSlug)`, which validates slug format, date format, extensions, HTTPS URLs, uppercase hex color, presence and shape of all six i18n locales, description length, and — critically — exercises `localizeLanguage()` against that specific language for exact-locale, base-locale fallback, regional-locale fallback, and unsupported-locale fallback to English.
- Every `src/languages/<slug>.ts` has a matching `tests/languages/<slug>.test.ts` that just imports the language and calls `expectValidLanguage`. Adding a new language means adding both files.
- `tests/api*.test.ts` and `tests/detect.test.ts` cover the query/detection layer's behavior (aliasing, ambiguous extensions, category derivation, etc.) independent of any specific language.
- No fixed coverage threshold; new behavior is expected to be exercised, not measured against a percentage.

## Scripts and automation (`scripts/`)

- `check-language-versions.mjs` — queries external sources (mostly GitHub releases) to detect when a language's `version` field is outdated, with a manually-curated `manualChecks` allowlist for languages whose versioning can't be checked programmatically (e.g. ISO standards, platform-tied versions). Runs on a daily cron via `.github/workflows/check-language-versions.yml` and can open PRs/issues.
- `translate-language-i18n.mjs` — generates non-English `i18n` content (initial pass used `translategemma:4b`; translations are manually reviewed afterward per `AGENTS.md`/README).
- `generate-website-data.mjs`, `run-website-benchmarks.mjs`, `ensure-website-data-dir.mjs`, `summarize-website-tests.mjs`, `serve-website.mjs` — build the static docs site: they read from the **built** `dist/index.js` (not `src/`), so `npm run website:prepare` always runs `npm run build` first, then regenerates `docs/data/{languages,tooling,bench-results,unit-summary}.json` and serves/tests the static site in `docs/`.

## CI/CD (`.github/workflows/`)

- **`pull-request.yml`** — on every PR to `main`: format check (fails if `biome check --write` produces a diff), lint, typecheck, test, build, `npm pack --dry-run`. This is the gate; nothing merges without it passing.
- **`release.yml`** — on push to `main`: lint, typecheck, test, build, then `semantic-release` (Conventional Commits drive version bumps, changelog, GitHub release, and npm publish — configured in `.releaserc.json`).
- **`docs.yml`** — triggered after a successful `release.yml` run (or manually): rebuilds the website data and deploys `docs/` to GitHub Pages.
- **`publish-release-dev-to.yml`** — triggered after a successful release: cross-posts the GitHub release notes as a DEV.to article.
- **`check-language-versions.yml`** — daily cron: runs the version-audit script and opens issues/PRs for stale language versions.

## Adding a new language (architectural checklist)

Because subpath exports, the lazy-load registry, and the tsup entry list are all derived from `src/languages/`, adding a language touches a small, well-defined set of places:

1. `src/languages/<slug>.ts` — new file, `export const <camelCase> = { ... } satisfies Language`.
2. `src/index.ts` — add the barrel export.
3. `src/domain/language/catalog.ts` — add the import + inclusion in `languages`.
4. `src/domain/language/registry.ts` — add an entry to `languageIndex` and a loader to `languageLoaders`.
5. `package.json` `exports` — add the subpath entry (types/import/require, mirroring existing entries).
6. `tests/languages/<slug>.test.ts` — new contract test calling `expectValidLanguage`.

`tsup.config.ts` requires no changes (it auto-discovers `src/languages/*.ts`); `README.md`'s language table and `LANGUAGES.md` are documentation and should be kept in sync but aren't part of the runtime graph.
