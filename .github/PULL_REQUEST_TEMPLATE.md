## Language: <Name>

**Source(s):**

---

### Checklist

#### Data file

- [ ] `src/languages/<slug>.ts` created
- [ ] All required fields are present and non-empty:
  - [ ] `name`
  - [ ] `slug` lowercase, URL-safe, matches filename
  - [ ] `description` 160 characters or fewer, factual, no marketing language
  - [ ] `longDescription` at least 2 paragraphs
  - [ ] `publishedDate` valid ISO 8601 date: `YYYY-MM-DD`
  - [ ] `extensions` array, each starts with `.`
  - [ ] `author`
  - [ ] `website` valid HTTPS URL
  - [ ] `paradigms` at least one entry
  - [ ] `version` latest stable version
  - [ ] `logo` stable HTTPS URL, SVG preferred

#### Wiring

- [ ] Named export added to `src/index.ts`
- [ ] Entry added to `exports` in `package.json`
- [ ] Test added at `tests/languages/<slug>.test.ts`

#### Quality

- [ ] `npm run check` passes locally
- [ ] `npm run build` passes locally

#### Commit message

- [ ] Commit follows Conventional Commits: `feat: add <Language> language`
