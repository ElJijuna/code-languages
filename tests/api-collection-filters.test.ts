import { describe, expect, it } from 'vitest';
import { api } from '../src/api';

const slugsOf = (langs: { slug: string }[]) => langs.map((l) => l.slug);

describe('collection filter composition', () => {
  describe('intersection semantics', () => {
    it('backend + functional includes elixir but not go', () => {
      const slugs = slugsOf(api.category('backend').langs().paradigm('functional').get());

      expect(slugs).toContain('elixir');
      expect(slugs).not.toContain('go');
    });

    it('chained result is a subset of both individual filters', () => {
      const combined = slugsOf(api.category('backend').langs().paradigm('functional').get());
      const backend = slugsOf(api.category('backend').langs().get());
      const functional = slugsOf(api.paradigm('functional').langs().get());

      expect(combined.length).toBeGreaterThan(0);

      for (const slug of combined) {
        expect(backend).toContain(slug);
        expect(functional).toContain(slug);
      }
    });

    it('filter order does not change the result set', () => {
      const backendFirst = slugsOf(
        api.category('backend').langs().paradigm('functional').get(),
      ).sort();
      const functionalFirst = slugsOf(
        api.paradigm('functional').langs().category('backend').get(),
      ).sort();

      expect(backendFirst).toEqual(functionalFirst);
    });

    it('disjoint filters return an empty array', () => {
      expect(api.status('legacy').langs().status('experimental').get()).toEqual([]);
    });
  });

  describe('every filter is chainable', () => {
    it('runtime + packageManager includes typescript', () => {
      const slugs = slugsOf(api.runtime('node').langs().packageManager('npm').get());

      expect(slugs).toContain('typescript');
    });

    it('systems category + extension .h includes c and cpp', () => {
      const slugs = slugsOf(api.category('systems').langs().extension('.h').get());

      expect(slugs).toContain('c');
      expect(slugs).toContain('cpp');
    });

    it('related + status includes typescript for javascript', () => {
      const slugs = slugsOf(api.related('javascript').langs().status('active').get());

      expect(slugs).toContain('typescript');
    });

    it('ecosystem is chainable on languages()', () => {
      const chained = slugsOf(api.languages().ecosystem('jvm').get()).sort();
      const direct = slugsOf(api.ecosystem('jvm').langs().get()).sort();

      expect(chained).toEqual(direct);
    });

    it('languages().category() matches category().langs()', () => {
      const chained = slugsOf(api.languages().category('backend').get()).sort();
      const direct = slugsOf(api.category('backend').langs().get()).sort();

      expect(chained).toEqual(direct);
    });

    it('search results are chainable', () => {
      const filtered = slugsOf(api.search('script').status('active').get());
      const unfiltered = slugsOf(api.search('script').get());

      expect(filtered.length).toBeGreaterThan(0);

      for (const slug of filtered) {
        expect(unfiltered).toContain(slug);
      }
    });
  });

  describe('locale propagation', () => {
    it('locale set before chaining carries into the narrowed collection', () => {
      const langs = api.languages().locale('es').category('backend').get();

      expect(langs.length).toBeGreaterThan(0);

      for (const l of langs) {
        expect(l.resolvedLocale).toBe('es');
      }
    });

    it('locale set after chaining applies to the result', () => {
      const langs = api.category('backend').langs().paradigm('functional').locale('es').get();

      expect(langs.length).toBeGreaterThan(0);

      for (const l of langs) {
        expect(l.resolvedLocale).toBe('es');
      }
    });
  });

  describe('.load()', () => {
    it('async load returns the same slugs as sync get', async () => {
      const sync = slugsOf(api.category('backend').langs().paradigm('functional').get()).sort();
      const lazy = slugsOf(
        await api.category('backend').langs().paradigm('functional').load(),
      ).sort();

      expect(lazy).toEqual(sync);
    });
  });
});
