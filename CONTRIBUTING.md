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
3. Add a named export to `src/index.ts`.
4. Add a package subpath export to `package.json`.
5. Add `tests/languages/<slug>.test.ts`.
6. Run `npm run check` and `npm run build`.

The slug must be lowercase, URL-safe, and match the filename.

## Field Rules

- `name`: display name, for example `TypeScript`.
- `slug`: lowercase identifier, for example `typescript`.
- `description`: factual one-line summary, 160 characters or fewer.
- `longDescription`: plain text with at least two paragraphs.
- `publishedDate`: ISO date in `YYYY-MM-DD` format.
- `extensions`: array of extensions; each item starts with `.`.
- `author`: original author or organization.
- `website`: HTTPS URL.
- `paradigms`: at least one paradigm.
- `version`: latest stable version at the time of the data update.
- `logo`: stable HTTPS URL, SVG preferred.

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
