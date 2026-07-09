# ROADMAP — `code-languages`

> A zero-dependency, tree-shakeable TypeScript library that exposes structured, localized metadata for programming languages, compatible with Node.js and browser environments.

---

## Status snapshot

| Field | Value |
| --- | --- |
| Published version | `1.40.9` on npm |
| Languages in catalog | 286 (see the full table in [README.md](README.md#supported-languages)) |
| Locales | `en` (required fallback), `es`, `it`, `fr`, `de`, `pt` |
| Package entry points | `index`, `api`, `i18n`, `detect`, `detect-slugs`, plus one subpath per language (generated from `src/languages/*.ts`) |
| Website | Static catalog + live detector + benchmark/test summaries, deployed to GitHub Pages after every release |
| Automation | Daily job checks upstream language versions and opens issues/PRs for stale metadata |

The original plan below (Phases 1–5, target `v1.0.0`, 20 seed languages) shipped and was
superseded long ago — the project kept growing past that target. That history is kept at the
bottom of this document; the sections above it describe the system as it exists today.

---

## Vision

`code-languages` solves a simple problem: there is no canonical, typed, npm-installable source of
truth for programming language metadata. Developers building IDEs, syntax highlighters,
documentation sites, developer tools, or learning platforms always end up reinventing the same
data layer.

This library provides that layer with:

- **Subpath imports** — import only what you need, nothing more
- **Full TypeScript types** — zero guesswork, first-class DX
- **Universal** — works in Node.js, Deno, Bun, and any modern bundler
- **Tree-shakeable** — bundlers drop unused language data automatically
- **Localized** — display content in six base locales with regional-locale fallback
- **Queryable** — a fluent API to look up languages by slug, filename, runtime, package manager,
  category, paradigm, or ecosystem
- **Community-driven** — easy PR template to add or improve languages

---

## Language data model

Every language exported from this library satisfies the `Language` interface defined in
`src/types.ts`:

```typescript
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
```

`LocalizedLanguage` (returned by `localizeLanguage` and the fluent API) is `Language` with `i18n`
replaced by the resolved `name` / `description` / `longDescription`, plus `locale`,
`resolvedLocale`, and `availableLocales`.

> Note: `name`, `description`, and `longDescription` moved from top-level fields (original design)
> into `i18n.<locale>` when localization shipped. `tooling` was added later and is optional.

---

## Usage

```typescript
// Import a single language (tree-shaken — only this module is bundled)
import { typescript } from 'code-languages/typescript';
import { localizeLanguage } from 'code-languages/i18n';

const localized = localizeLanguage(typescript, 'es-PE');
console.log(localized.name);          // "TypeScript"
console.log(localized.resolvedLocale); // "es"
console.log(typescript.extensions);    // [".ts", ".tsx"]
console.log(typescript.paradigms);     // ["object-oriented", "functional"]

// Import multiple languages
import { javascript } from 'code-languages/javascript';
import { python } from 'code-languages/python';

// Import everything (not recommended for browser bundles)
import * as languages from 'code-languages';

// Filename detection without loading the full catalog
import { detectLanguageSlug, detectLanguageSlugs } from 'code-languages/detect-slugs';
detectLanguageSlug('src/index.ts');       // "typescript"
detectLanguageSlugs('include/config.h');  // ["c", "cpp"]
```

### Fluent query API (`code-languages/api`)

```typescript
import { api } from 'code-languages/api';

api.language('astro').locale('es-PE').get();
await api.language('vue').locale('en-US').load(); // dynamic import, code-splitting friendly

api.detect('src/App.vue').locale('es').get();
await api.detectAll('include/config.h').locale('en').load(); // ambiguous extensions -> multiple matches

api.runtime('node').langs().get();
api.packageManager('cargo').langs().get();
api.category('backend').langs().locale('es').get(); // frontend | backend | fullstack | systems | data-science | scripting | other
api.paradigm('functional').langs().get();
api.ecosystem('jvm').info();
```

See the [API section of README.md](README.md#api) for the full list of supported aliases per
lookup (runtimes, package managers, paradigms, ecosystems).

---

## Project structure

```text
code-languages/
├── src/
│   ├── types.ts                        # Language interface (single source of truth)
│   ├── index.ts                        # Re-exports all languages + registry helpers
│   ├── api.ts                          # Fluent query API (language/detect/runtime/category/...)
│   ├── languages/                      # 286 files, one Language object per language
│   │   ├── typescript.ts
│   │   ├── javascript.ts
│   │   ├── python.ts
│   │   └── ...
│   └── domain/
│       ├── language/                   # catalog.ts, registry.ts — in-memory + lazy-loaded index
│       ├── i18n/                       # localizeLanguage + locale resolution
│       ├── detection/                  # detect.ts, detect-slugs.ts, match.ts
│       ├── category/                   # frontend/backend/fullstack/systems/... classification
│       ├── ecosystem/                  # web/jvm/dotnet/data-science/... registry + aliases
│       ├── paradigm/                   # functional/oop/declarative/... registry + aliases
│       ├── package-manager/            # npm/cargo/maven/... registry + aliases
│       └── runtime/                    # node/jvm/.net/... registry + aliases
├── dist/                               # Generated — do not edit
├── tests/
│   ├── language-contract.ts            # Shared shape validation (expectValidLanguage)
│   ├── languages/<slug>.test.ts        # One contract test per language
│   ├── api*.test.ts                    # api.category / api.ecosystem / api.paradigm / api.runtime
│   └── detect.test.ts
├── bench/                              # Vitest benchmarks (api, detect, i18n)
├── scripts/
│   ├── check-language-versions.mjs     # Checks upstream sources, opens issues/PRs for drift
│   ├── translate-language-i18n.mjs
│   ├── generate-website-data.mjs
│   ├── run-website-benchmarks.mjs
│   ├── serve-website.mjs
│   ├── summarize-website-tests.mjs
│   └── ensure-website-data-dir.mjs
├── docs/                               # Generated static website (GitHub Pages)
├── .github/
│   ├── workflows/
│   │   ├── pull-request.yml            # format/lint/typecheck/test/build on every PR
│   │   ├── release.yml                 # semantic-release on push to main
│   │   ├── docs.yml                    # deploys docs/ to GitHub Pages after a successful release
│   │   ├── check-language-versions.yml # daily cron, opens issues/PRs for outdated metadata
│   │   └── publish-release-dev-to.yml  # posts a DEV.to article after a successful release
│   └── PULL_REQUEST_TEMPLATE.md
├── tsconfig.json
├── tsup.config.ts                      # entries generated dynamically from src/languages/*.ts
├── vitest.config.ts
├── .releaserc.json
├── biome.json                          # format + most lint rules
├── eslint.config.js                    # additional lint rules
├── CONTRIBUTING.md
├── CHANGELOG.md                        # Auto-generated by semantic-release
├── ROADMAP.md
├── language-version-report.json        # Latest output of check-language-versions.mjs
└── package.json                        # exports map has one entry per language subpath
```

---

## Build & tooling

| Tool | Purpose |
| --- | --- |
| `tsup` | Bundler — dual ESM + CJS output, one entry per language file (generated at build time), .d.ts generation |
| `vitest` | Test runner + benchmark runner (`vitest bench`) |
| `biome` | Formatter and primary linter |
| `eslint` | Additional lint rules on top of Biome |
| `husky` + `commitlint` | Enforce Conventional Commits on every local commit |
| `semantic-release` | Automated versioning, changelog, npm publish, and GitHub release from commit history |
| GitHub Pages | Hosts the generated static website (catalog browser, live detector, test/benchmark summaries) |

`tsup.config.ts` builds its `entry` map dynamically by reading `src/languages/` at build time —
adding a language file is enough for it to get a build entry; nothing to hand-edit there. The
`exports` map in `package.json`, on the other hand, is still maintained per-language (see
"Adding a language" in [CONTRIBUTING.md](CONTRIBUTING.md)).

---

## Semantic versioning strategy

This library uses [semantic-release](https://semantic-release.gitbook.io/) with
[Conventional Commits](https://www.conventionalcommits.org/).

| Commit prefix | Example | Version bump |
| --- | --- | --- |
| `feat:` | `feat: add Ruby language` | **minor** `x.Y.0` |
| `fix:` | `fix: correct Python publishedDate` | **patch** `x.y.Z` |
| `docs:` | `docs: improve TypeScript description` | none |
| `chore:` | `chore: update biome config` | none |
| `BREAKING CHANGE:` | rename `longDescription` field | **major** `X.0.0` |

`.releaserc.json` plugins: `commit-analyzer` → `release-notes-generator` → `changelog`
(`CHANGELOG.md`) → `npm` → `github` → `git` (commits `CHANGELOG.md`, `package.json`,
`package-lock.json` back to `main` as `chore(release): ${version} [skip ci]`).

---

## GitHub Actions workflows

| Workflow | Trigger | Does |
| --- | --- | --- |
| `pull-request.yml` | PR opened/updated against `main` | `npm run format` (diff must be clean) → lint → typecheck → test → build → `npm pack --dry-run` |
| `release.yml` | push to `main` | lint, typecheck, test, build, then `semantic-release` (publishes to npm + GitHub releases + tags) |
| `docs.yml` | after `release.yml` succeeds (or manual) | `npm run website:prepare`, deploys `docs/` to GitHub Pages |
| `check-language-versions.yml` | daily cron `0 8 * * *` (or manual) | runs `scripts/check-language-versions.mjs` against upstream sources; on schedule it opens PRs for drifted `version` fields and uploads `language-version-report.json` |
| `publish-release-dev-to.yml` | after `release.yml` succeeds (or manual) | posts a DEV.to article summarizing the new release, if `DEVTO_API_KEY` is configured |

All workflows run on Node.js 22.

---

## PR template — adding a language

File: [`.github/PULL_REQUEST_TEMPLATE.md`](.github/PULL_REQUEST_TEMPLATE.md)

```markdown
## Language: <Name>

**Source(s):**

---

### Checklist

#### Data file
- [ ] `src/languages/<slug>.ts` created
- [ ] `slug` lowercase, URL-safe, matches filename
- [ ] `publishedDate` valid ISO 8601 date: `YYYY-MM-DD`
- [ ] `extensions` array, each starts with `.`
- [ ] `author`
- [ ] `website` valid HTTPS URL
- [ ] `paradigms` at least one entry
- [ ] `version` latest stable version
- [ ] `logo` stable HTTPS URL, SVG preferred
- [ ] `i18n.en.name`
- [ ] `i18n.en.description` 160 characters or fewer, factual, no marketing language
- [ ] `i18n.en.longDescription` at least 2 paragraphs

#### Wiring
- [ ] Named export added to `src/index.ts`
- [ ] Entry added to `exports` in `package.json`
- [ ] Test added at `tests/languages/<slug>.test.ts`

#### Quality
- [ ] `npm run check` passes locally
- [ ] `npm run build` passes locally

#### Commit message
- [ ] Commit follows Conventional Commits: `feat: add <Language> language`
```

Full field rules and sourcing guidance live in [CONTRIBUTING.md](CONTRIBUTING.md).

---

## Open items (not yet scheduled)

Things that would meaningfully improve the project but aren't committed to a version yet:

- **Machine-translated locales need human review.** The `it`, `fr`, `de`, and `pt` content was
  initially generated with `translategemma:4b` (see README). Accuracy varies per language file;
  no tracking mechanism currently exists to mark which ones have been human-reviewed.
- **Some languages are excluded from automated version checks.** `scripts/check-language-versions.mjs`
  currently skips entries whose upstream source can't be scraped reliably (e.g. ABAP, whose
  source page renders dynamically) — see `language-version-report.json`'s `skipped` array. These
  need periodic manual verification since the daily job won't catch drift for them. Additional
  languages may hit the same problem as the catalog grows.
- **No GitHub issue templates or CODEOWNERS.** Only a PR template exists; bug reports and feature
  requests from the community currently have no structured form, and there's no documented review
  policy.
- **No enforced coverage threshold.** `npm run test:coverage` exists, but nothing fails CI if
  coverage regresses.
- **Catalog growth is open-ended.** The original "top 20 languages" target (below) was a v1.0.0
  bootstrapping goal, not a ceiling — the vision has always been broad, community-driven coverage.
  There is no fixed list of "next languages to add"; PRs proposing new languages are the
  mechanism.
- **Locale coverage is fixed at six base locales.** Adding a new base locale (e.g. `ja`, `zh`)
  would touch `BaseLocale` in `src/types.ts`, the i18n domain, `translate-language-i18n.mjs`, and
  every language file's `i18n` object — a larger, breaking-ish change that hasn't been scoped.

---

## Completed milestones (history)

> Everything below was the original bootstrapping plan targeting `v1.0.0`. All five phases shipped;
> the project's actual scope now exceeds what's described here (see "Status snapshot" at the top).
> Kept for historical reference only — do not treat versions, file lists, or the 20-language target
> below as current.

### Phase 1 — Foundation `v0.1.0` ✅

- [x] `tsconfig.json` — strict, ESM, declaration files
- [x] `tsup.config.ts` — dual format, per-language entries, tree-shaking
- [x] `package.json` — exports map, scripts (`build`, `test`, `lint`, `typecheck`)
- [x] `src/types.ts` — `Language` interface
- [x] `src/index.ts` — barrel re-export
- [x] Seed languages: TypeScript, JavaScript, Python, Rust, Go
- [x] devDependencies: `typescript`, `tsup`, `vitest`, `biome`, `@commitlint/cli`, `husky`

### Phase 2 — Testing & Quality `v0.2.0` ✅

- [x] Per-language contract tests validating shape + field rules
- [x] `biome.json` — lint + format config
- [x] `husky` + `commitlint` — block non-conventional commits locally
- [x] `.gitignore`, `.npmignore`

### Phase 3 — CI/CD `v0.3.0` ✅

- [x] PR validation workflow — lint, typecheck, test, build on every PR
- [x] Release workflow — semantic-release on push to main
- [x] `.releaserc.json` — semantic-release with changelog + npm + git plugins
- [x] `NPM_TOKEN` secret documented in `CONTRIBUTING.md`

### Phase 4 — Contribution Docs `v0.4.0` ✅

- [x] `.github/PULL_REQUEST_TEMPLATE.md` — full checklist
- [x] `CONTRIBUTING.md` — setup, field rules, sourcing guidance, commit conventions

### Phase 5 — Polish & v1.0.0 ✅ (and beyond)

- [x] `README.md` — install, quick-start, full API table, language index
- [x] Expanded far past the original 20-language target — 286 languages and counting
- [x] Tree-shaking verified via per-language subpath exports
- [x] Tagged `v1.0.0` and continued past it via semantic-release (`v1.40.9` at time of writing)
- [x] Localization (6 locales), fluent query API, filename detection, static website, and
      automated upstream version checking all shipped after `v1.0.0` — none of this was in the
      original plan

---

## How to contribute

The fastest way to grow this library is to add a language via a PR. Follow the
[PR template](.github/PULL_REQUEST_TEMPLATE.md) and the steps in [CONTRIBUTING.md](CONTRIBUTING.md).

Each new language is a `feat:` commit → triggers a **minor** version bump automatically on merge.
