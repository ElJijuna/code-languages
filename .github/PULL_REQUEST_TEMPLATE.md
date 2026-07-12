## Language: <Name>

**Source(s):**

---

### Checklist

#### Data file

- [ ] `src/languages/<slug>.ts` created
- [ ] All required fields are present and non-empty:
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

- [ ] `npm run codegen` executed (regenerates catalog, registry, exports, and README table)

#### Quality

- [ ] `npm run check` passes locally
- [ ] `npm run build` passes locally

#### Commit message

- [ ] Commit follows Conventional Commits: `feat: add <Language> language`
