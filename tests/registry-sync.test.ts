import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { languages } from '../src';
import { languageLoaders, loadLanguage } from '../src/domain/language/loaders';
import * as registry from '../src/domain/language/registry';

const { languageIndex } = registry;

describe('language registry sync', () => {
  it('indexes exactly the catalog slugs in the same order', () => {
    expect(languageIndex.map((entry) => entry.slug)).toEqual(
      languages.map((language) => language.slug),
    );
  });

  it('indexes the same extensions as the catalog', () => {
    for (const [position, language] of languages.entries()) {
      expect(languageIndex[position]?.extensions, language.slug).toEqual(language.extensions);
    }
  });

  it('has one dynamic loader per catalog slug', () => {
    expect(Object.keys(languageLoaders).sort()).toEqual(languages.map((language) => language.slug));
  });

  it('loads every language module with a matching slug', async () => {
    const loaded = await Promise.all(languages.map((language) => loadLanguage(language.slug)));

    expect(loaded.map((language) => language?.slug)).toEqual(
      languages.map((language) => language.slug),
    );
  });

  it('returns undefined for unknown slugs', () => {
    expect(loadLanguage('unknown-language')).toBeUndefined();
  });

  // The ESM build shares modules through chunks, so anything in registry.ts ships with
  // the lightweight detect-slugs entry. Dynamic imports must stay in loaders.ts.
  it('keeps dynamic imports out of the lightweight index module', () => {
    const source = readFileSync(
      new URL('../src/domain/language/registry.ts', import.meta.url),
      'utf8',
    );

    expect(Object.keys(registry)).toEqual(['languageIndex']);
    expect(source).not.toContain('import(');
  });
});
