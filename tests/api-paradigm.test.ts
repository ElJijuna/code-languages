import { describe, expect, it } from 'vitest';
import { api, getParadigms } from '../src';

describe('api.paradigm()', () => {
  describe('.info()', () => {
    it('returns canonical name for known alias', () => {
      expect(api.paradigm('functional').info()).toMatchObject({ name: 'Functional' });
    });

    it('fp alias resolves to functional', () => {
      expect(api.paradigm('fp').info()?.name).toBe('Functional');
    });

    it('oop alias resolves to object-oriented', () => {
      expect(api.paradigm('oop').info()?.name).toBe('Object-Oriented');
    });

    it('includes slug, name, description, aliases', () => {
      const info = api.paradigm('functional').info();

      expect(info).toHaveProperty('slug', 'functional');
      expect(info).toHaveProperty('name');
      expect(info).toHaveProperty('description');
      expect(info?.aliases).toContain('functional');
    });

    it('aliases resolve to same paradigm', () => {
      expect(api.paradigm('functional').info()?.slug).toBe(api.paradigm('fp').info()?.slug);
    });

    it('returns undefined for unknown value', () => {
      expect(api.paradigm('unknown-xyz').info()).toBeUndefined();
    });
  });

  describe('.langs()', () => {
    it('functional includes haskell', () => {
      const slugs = api
        .paradigm('functional')
        .langs()
        .get()
        .map((l) => l.slug);

      expect(slugs).toContain('haskell');
    });

    it('functional includes elixir', () => {
      expect(
        api
          .paradigm('functional')
          .langs()
          .get()
          .map((l) => l.slug),
      ).toContain('elixir');
    });

    it('object-oriented includes java', () => {
      expect(
        api
          .paradigm('object-oriented')
          .langs()
          .get()
          .map((l) => l.slug),
      ).toContain('java');
    });

    it('oop alias matches same set as object-oriented', () => {
      const a = api
        .paradigm('object-oriented')
        .langs()
        .get()
        .map((l) => l.slug);
      const b = api
        .paradigm('oop')
        .langs()
        .get()
        .map((l) => l.slug);

      expect(a).toEqual(b);
    });

    it('scripting includes bash', () => {
      expect(
        api
          .paradigm('scripting')
          .langs()
          .get()
          .map((l) => l.slug),
      ).toContain('bash');
    });

    it('query includes sql', () => {
      expect(
        api
          .paradigm('query')
          .langs()
          .get()
          .map((l) => l.slug),
      ).toContain('sql');
    });

    it('markup includes html', () => {
      expect(
        api
          .paradigm('markup')
          .langs()
          .get()
          .map((l) => l.slug),
      ).toContain('html');
    });

    it('systems includes zig', () => {
      expect(
        api
          .paradigm('systems')
          .langs()
          .get()
          .map((l) => l.slug),
      ).toContain('zig');
    });

    it('unknown value returns empty array', () => {
      expect(api.paradigm('unknown-xyz').langs().get()).toEqual([]);
    });

    it('locale chains correctly', () => {
      expect(api.paradigm('functional').langs().locale('es').get().length).toBeGreaterThan(0);
    });

    it('.load() matches .get()', async () => {
      const sync = api
        .paradigm('object-oriented')
        .langs()
        .get()
        .map((l) => l.slug);
      const lazy = (await api.paradigm('object-oriented').langs().load()).map((l) => l.slug);

      expect(sync).toEqual(lazy);
    });
  });
});

describe('getParadigms()', () => {
  it('returns a non-empty list', () => {
    const paradigms = getParadigms();

    expect(paradigms.length).toBeGreaterThan(0);
  });

  it('each entry has slug, name, description, aliases', () => {
    for (const p of getParadigms()) {
      expect(p).toHaveProperty('slug');
      expect(p).toHaveProperty('name');
      expect(p).toHaveProperty('description');
      expect(p).toHaveProperty('aliases');
    }
  });

  it('includes functional and object-oriented', () => {
    const slugs = getParadigms().map((p) => p.slug);

    expect(slugs).toContain('functional');
    expect(slugs).toContain('object-oriented');
  });
});
