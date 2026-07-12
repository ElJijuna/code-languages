import { describe, expect, it } from 'vitest';
import { api, getStatuses } from '../src';

describe('api.search', () => {
  it('ranks exact slug and alias matches first', () => {
    expect(api.search('go').get().at(0)?.slug).toBe('go');
    expect(api.search('golang').get().at(0)?.slug).toBe('go');
    expect(api.search('C#').get().at(0)?.slug).toBe('csharp');
  });

  it('ranks name prefixes above substrings', () => {
    const slugs = api
      .search('java')
      .get()
      .map((language) => language.slug);

    // exact match first, then prefix matches before substring-only matches
    expect(slugs.at(0)).toBe('java');
    expect(slugs.indexOf('javascript')).toBeLessThan(slugs.indexOf('properties'));
  });

  it('finds slug substring matches when the display name differs', () => {
    // "C#" does not contain "sharp", but the csharp slug does
    const slugs = api
      .search('sharp')
      .get()
      .map((language) => language.slug);

    expect(slugs).toContain('csharp');
    expect(slugs).toContain('fsharp');
  });

  it('finds substring matches in names and aliases', () => {
    expect(
      api
        .search('script')
        .get()
        .map((language) => language.slug),
    ).toContain('javascript');
    expect(
      api
        .search('ecmascript')
        .get()
        .map((language) => language.slug),
    ).toContain('javascript');
  });

  it('localizes and lazily loads ranked results', async () => {
    expect(api.search('python').locale('es').get().at(0)?.resolvedLocale).toBe('es');
    await expect(api.search('rust').load()).resolves.toMatchObject([{ slug: 'rust' }]);
  });

  it('returns no results for empty or unmatched queries', () => {
    expect(api.search('').get()).toEqual([]);
    expect(api.search('   ').get()).toEqual([]);
    expect(api.search('zzz-no-such-language').get()).toEqual([]);
  });
});

describe('api.status', () => {
  it('filters languages by lifecycle status', () => {
    const legacySlugs = api
      .status('legacy')
      .langs()
      .get()
      .map((language) => language.slug);

    expect(legacySlugs).toContain('vbscript');
    expect(legacySlugs).toContain('actionscript');

    const historicalSlugs = api
      .status('historical')
      .langs()
      .get()
      .map((language) => language.slug);

    expect(historicalSlugs).toContain('algol');
    expect(historicalSlugs).not.toContain('typescript');
  });

  it('treats languages without a status as active', () => {
    const activeSlugs = api
      .status('active')
      .langs()
      .get()
      .map((language) => language.slug);

    expect(activeSlugs).toContain('typescript');
    expect(activeSlugs).not.toContain('vbscript');
  });

  it('supports locale chaining and lazy loading', async () => {
    expect(api.status('experimental').langs().locale('es').get().at(0)?.resolvedLocale).toBe('es');
    await expect(api.status('historical').langs().load()).resolves.toMatchObject([
      { slug: 'algol' },
      { slug: 'bcpl' },
      { slug: 'simula' },
      { slug: 'snobol' },
    ]);
  });
});

describe('api.related', () => {
  it('returns outgoing relations', () => {
    const related = api
      .related('typescript')
      .langs()
      .get()
      .map((language) => language.slug);

    expect(related).toContain('javascript');
  });

  it('returns incoming relations', () => {
    const related = api
      .related('javascript')
      .langs()
      .get()
      .map((language) => language.slug);

    expect(related).toContain('typescript');
    expect(related).toContain('coffeescript');
    expect(related).toContain('elm');
    expect(related).not.toContain('javascript');
  });

  it('resolves aliases before matching', () => {
    expect(
      api
        .related('js')
        .langs()
        .get()
        .map((language) => language.slug),
    ).toContain('typescript');
  });

  it('returns an empty list for languages without relations', () => {
    expect(api.related('brainfuck').langs().get()).toEqual([]);
    expect(api.related('unknown-language').langs().get()).toEqual([]);
  });
});

describe('getStatuses', () => {
  it('lists every lifecycle status', () => {
    expect(getStatuses()).toEqual(['active', 'experimental', 'legacy', 'historical']);
  });
});
