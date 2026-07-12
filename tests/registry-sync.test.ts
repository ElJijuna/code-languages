import { describe, expect, it } from 'vitest';
import { languages } from '../src';
import { languageIndex, languageLoaders, loadLanguage } from '../src/domain/language/registry';

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
});
