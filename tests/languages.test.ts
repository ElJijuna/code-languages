import { describe, expect, it } from 'vitest';
import { languages } from '../src';
import { expectValidLanguage } from './language-contract';

describe('language catalog contract', () => {
  it('contains at least one language', () => {
    expect(languages.length).toBeGreaterThan(0);
  });

  it('contains unique slugs', () => {
    const slugs = languages.map((language) => language.slug);

    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('is ordered alphabetically by slug', () => {
    const slugs = languages.map((language) => language.slug);

    expect(slugs).toEqual([...slugs].sort());
  });

  it.each(
    languages.map((language) => [language.slug, language] as const),
  )('%s satisfies the Language contract', (slug, language) => {
    expectValidLanguage(language, slug);
  });
});
