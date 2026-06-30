import { describe, expect, it } from 'vitest';
import { api, getEcosystems } from '../src';

describe('api.ecosystem()', () => {
  describe('.info()', () => {
    it('returns canonical name for known alias', () => {
      expect(api.ecosystem('jvm').info()).toMatchObject({ name: 'JVM' });
    });

    it('java alias resolves to jvm', () => {
      expect(api.ecosystem('java').info()?.name).toBe('JVM');
    });

    it('.net alias resolves to dotnet', () => {
      expect(api.ecosystem('.net').info()?.name).toBe('.NET');
    });

    it('includes slug, name, description, aliases', () => {
      const info = api.ecosystem('web').info();

      expect(info).toHaveProperty('slug', 'web');
      expect(info).toHaveProperty('name');
      expect(info).toHaveProperty('description');
      expect(info?.aliases).toContain('web');
    });

    it('aliases resolve to same ecosystem', () => {
      expect(api.ecosystem('jvm').info()?.slug).toBe(api.ecosystem('java').info()?.slug);
    });

    it('returns undefined for unknown value', () => {
      expect(api.ecosystem('unknown-xyz').info()).toBeUndefined();
    });
  });

  describe('.langs()', () => {
    it('jvm includes java', () => {
      const slugs = api
        .ecosystem('jvm')
        .langs()
        .get()
        .map((l) => l.slug);

      expect(slugs).toContain('java');
    });

    it('jvm includes kotlin', () => {
      expect(
        api
          .ecosystem('jvm')
          .langs()
          .get()
          .map((l) => l.slug),
      ).toContain('kotlin');
    });

    it('web includes javascript', () => {
      expect(
        api
          .ecosystem('web')
          .langs()
          .get()
          .map((l) => l.slug),
      ).toContain('javascript');
    });

    it('web includes typescript', () => {
      expect(
        api
          .ecosystem('web')
          .langs()
          .get()
          .map((l) => l.slug),
      ).toContain('typescript');
    });

    it('dotnet includes csharp', () => {
      expect(
        api
          .ecosystem('dotnet')
          .langs()
          .get()
          .map((l) => l.slug),
      ).toContain('csharp');
    });

    it('.net alias matches same set as dotnet', () => {
      const a = api
        .ecosystem('dotnet')
        .langs()
        .get()
        .map((l) => l.slug);
      const b = api
        .ecosystem('.net')
        .langs()
        .get()
        .map((l) => l.slug);

      expect(a).toEqual(b);
    });

    it('data-science includes python', () => {
      expect(
        api
          .ecosystem('data-science')
          .langs()
          .get()
          .map((l) => l.slug),
      ).toContain('python');
    });

    it('blockchain returns results', () => {
      expect(api.ecosystem('blockchain').langs().get().length).toBeGreaterThan(0);
    });

    it('embedded returns results', () => {
      expect(api.ecosystem('embedded').langs().get().length).toBeGreaterThan(0);
    });

    it('game-dev returns results', () => {
      expect(api.ecosystem('game-dev').langs().get().length).toBeGreaterThan(0);
    });

    it('unknown value returns empty array', () => {
      expect(api.ecosystem('unknown-xyz').langs().get()).toEqual([]);
    });

    it('locale chains correctly', () => {
      expect(api.ecosystem('jvm').langs().locale('es').get().length).toBeGreaterThan(0);
    });

    it('.load() matches .get()', async () => {
      const sync = api
        .ecosystem('web')
        .langs()
        .get()
        .map((l) => l.slug);
      const lazy = (await api.ecosystem('web').langs().load()).map((l) => l.slug);

      expect(sync).toEqual(lazy);
    });
  });
});

describe('getEcosystems()', () => {
  it('returns a non-empty list', () => {
    const ecosystems = getEcosystems();

    expect(ecosystems.length).toBeGreaterThan(0);
  });

  it('each entry has slug, name, description, aliases', () => {
    for (const e of getEcosystems()) {
      expect(e).toHaveProperty('slug');
      expect(e).toHaveProperty('name');
      expect(e).toHaveProperty('description');
      expect(e).toHaveProperty('aliases');
    }
  });

  it('includes web and jvm', () => {
    const slugs = getEcosystems().map((e) => e.slug);

    expect(slugs).toContain('web');
    expect(slugs).toContain('jvm');
  });
});
