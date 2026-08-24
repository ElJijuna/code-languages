import { describe, expect, it } from 'vitest';
import { planLanguageVersionUpdate } from '../scripts/language-version-update.mjs';

const update = {
  filePath: 'src/languages/typescript.ts',
  latestVersion: '7.0',
  name: 'TypeScript',
  slug: 'typescript',
  version: '6.0',
};
const languageContent = "export const typescript = {\n  version: '6.0',\n};\n";
const readmeContent = [
  '| Logo | Language | Slug | Extensions | Version | Import |',
  '| --- | --- | --- | --- | --- | --- |',
  '| logo | TypeScript | `typescript` | `.ts`, `.tsx` | `6.0` | `code-languages/typescript` |',
  '| logo | Typst | `typst` | `.typ` | `0.13.1` | `code-languages/typst` |',
].join('\n');

describe('planLanguageVersionUpdate()', () => {
  it('plans language metadata and README replacements together', () => {
    expect(planLanguageVersionUpdate({ languageContent, readmeContent, update })).toEqual([
      {
        path: update.filePath,
        content: "export const typescript = {\n  version: '7.0',\n};\n",
      },
      {
        path: 'README.md',
        content: readmeContent.replace('| `6.0` |', '| `7.0` |'),
      },
    ]);
  });

  it('preserves the quote style used by the language artifact', () => {
    const content = 'export const typescript = {\n  version: "6.0",\n};\n';
    const [change] = planLanguageVersionUpdate({
      languageContent: content,
      readmeContent: readmeContent.replace('| `6.0` |', '| `7.0` |'),
      update,
    });

    expect(change).toEqual({
      path: update.filePath,
      content: 'export const typescript = {\n  version: "7.0",\n};\n',
    });
  });

  it('returns no replacements when both artifacts are current', () => {
    expect(
      planLanguageVersionUpdate({
        languageContent: languageContent.replace("'6.0'", "'7.0'"),
        readmeContent: readmeContent.replace('| `6.0` |', '| `7.0` |'),
        update,
      }),
    ).toEqual([]);
  });

  it('does not change unrelated README rows', () => {
    const changes = planLanguageVersionUpdate({
      languageContent: languageContent.replace("'6.0'", "'7.0'"),
      readmeContent,
      update: { ...update, slug: 'missing' },
    });

    expect(changes).toEqual([]);
  });
});
