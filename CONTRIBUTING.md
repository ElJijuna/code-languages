# Contributing

Thanks for helping improve `code-languages`.

## Local Setup

```bash
npm ci
npm run check
npm run build
```

Use Node.js 20 or newer.

## Adding a Language

1. Create `src/languages/<slug>.ts`.
2. Export a named constant that satisfies the `Language` interface.
3. Run `npm run codegen` to regenerate the catalog, registry, root exports, `package.json` subpath exports, and the README language table.
4. Run `npm run check` and `npm run build`.

The slug must be lowercase, URL-safe, and match the filename. The contract test suite (`tests/languages.test.ts`) automatically validates every catalog entry, so no per-language test file is needed.

## Field Rules

- `slug`: lowercase identifier, for example `typescript`.
- `aliases`: optional lowercase lookup aliases, for example `golang` for `go`.
- `status`: optional lifecycle status (`active`, `experimental`, `legacy`, `historical`); absent means `active`.
- `publishedDate`: ISO date in `YYYY-MM-DD` format.
- `extensions`: array of extensions; each item starts with `.`.
- `author`: original author or organization.
- `website`: HTTPS URL.
- `paradigms`: at least one paradigm.
- `version`: latest stable version at the time of the data update.
- `logo`: stable HTTPS URL, SVG preferred.
- `color`: reference color in `#RRGGBB` hexadecimal form.
- `i18n.en.name`: display name, for example `TypeScript`.
- `i18n.en.description`: factual one-line summary, 160 characters or fewer.
- `i18n.en.longDescription`: plain text with at least two paragraphs.
- `i18n.<locale>`: optional localized content for supported locales.

## Sources

Prefer official language websites, official release notes, standards documents, or primary project repositories. Wikipedia is acceptable for historical metadata when official sources are unavailable or unclear.

## Commits

This project uses Conventional Commits and semantic-release.

| Prefix | Example | Release effect |
|---|---|---|
| `feat:` | `feat: add Ruby language` | Minor release |
| `fix:` | `fix: correct Python publishedDate` | Patch release |
| `docs:` | `docs: improve contributing guide` | No release |
| `chore:` | `chore: update tooling` | No release |
| `BREAKING CHANGE:` | `BREAKING CHANGE: rename longDescription` | Major release |

## Publishing

Releases are automated from `main` with semantic-release. Configure the following GitHub Actions secret before publishing:

- `NPM_TOKEN`: npm automation token with publish access.

`GITHUB_TOKEN` is provided automatically by GitHub Actions.
