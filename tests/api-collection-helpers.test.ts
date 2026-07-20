import { describe, expect, it } from 'vitest';
import { api } from '../src/api';

describe('collection helpers', () => {
  describe('.slugs()', () => {
    it('matches get() slugs without localizing', () => {
      const collection = api.category('backend').langs();

      expect(collection.slugs()).toEqual(collection.get().map((l) => l.slug));
    });

    it('preserves search ranking order', () => {
      expect(api.search('golang').slugs().at(0)).toBe('go');
    });

    it('works after chaining filters', () => {
      const slugs = api.category('systems').langs().extension('.h').slugs();

      expect(slugs).toContain('c');
      expect(slugs).toContain('cpp');
    });
  });

  describe('.count()', () => {
    it('matches get() length', () => {
      const collection = api.paradigm('functional').langs();

      expect(collection.count()).toBe(collection.get().length);
    });

    it('returns 0 for an empty collection', () => {
      expect(api.search('').count()).toBe(0);
    });

    it('counts the whole catalog for languages()', () => {
      expect(api.languages().count()).toBeGreaterThan(300);
    });
  });

  describe('.first()', () => {
    it('returns the first language of the collection', () => {
      const collection = api.search('type');

      expect(collection.first()?.slug).toBe(collection.get().at(0)?.slug);
    });

    it('localizes with the requested locale', () => {
      expect(api.category('backend').langs().locale('es').first()?.resolvedLocale).toBe('es');
    });

    it('returns undefined for an empty collection', () => {
      expect(api.search('').first()).toBeUndefined();
    });
  });
});
