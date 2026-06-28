import { describe, expect, it } from 'vitest';
import { api } from '../src/api';

describe('api.runtime()', () => {
  describe('.info()', () => {
    it('returns canonical name for known alias', () => {
      expect(api.runtime('nodejs').info()).toMatchObject({ name: 'Node.js' });
    });

    it('includes packageManagers in info', () => {
      expect(api.runtime('node').info()?.packageManagers).toContain('npm');
    });

    it('includes logo, color, website, slug, aliases', () => {
      const info = api.runtime('node').info();
      expect(info).toHaveProperty('slug', 'node');
      expect(info).toHaveProperty('logo');
      expect(info?.color).toMatch(/^#[0-9A-Fa-f]{6}$/);
      expect(info).toHaveProperty('website');
      expect(info?.aliases).toContain('node');
    });

    it('aliases resolve to same name', () => {
      expect(api.runtime('node').info()?.name).toBe(api.runtime('nodejs').info()?.name);
      expect(api.runtime('node').info()?.name).toBe(api.runtime('node.js').info()?.name);
    });

    it('returns undefined for unknown value', () => {
      expect(api.runtime('unknown-xyz').info()).toBeUndefined();
    });
  });

  describe('.langs()', () => {
    it('node includes javascript and typescript', () => {
      const slugs = api
        .runtime('node')
        .langs()
        .get()
        .map((l) => l.slug);
      expect(slugs).toContain('javascript');
      expect(slugs).toContain('typescript');
    });

    it('nodejs and node.js match same set as node', () => {
      const a = api
        .runtime('node')
        .langs()
        .get()
        .map((l) => l.slug);
      const b = api
        .runtime('nodejs')
        .langs()
        .get()
        .map((l) => l.slug);
      expect(a).toEqual(b);
    });

    it('.net includes csharp', () => {
      expect(
        api
          .runtime('.net')
          .langs()
          .get()
          .map((l) => l.slug),
      ).toContain('csharp');
    });

    it('android returns results', () => {
      expect(api.runtime('android').langs().get().length).toBeGreaterThan(0);
    });

    it('ios returns results', () => {
      expect(api.runtime('ios').langs().get().length).toBeGreaterThan(0);
    });

    it('python includes python', () => {
      expect(
        api
          .runtime('python')
          .langs()
          .get()
          .map((l) => l.slug),
      ).toContain('python');
    });

    it('sql returns results', () => {
      expect(api.runtime('sql').langs().get().length).toBeGreaterThan(0);
    });

    it('unknown value returns empty array', () => {
      expect(api.runtime('unknown-xyz').langs().get()).toEqual([]);
    });

    it('locale chains correctly', () => {
      expect(api.runtime('bun').langs().locale('es').get().length).toBeGreaterThan(0);
    });

    it('.load() matches .get()', async () => {
      const sync = api
        .runtime('jvm')
        .langs()
        .get()
        .map((l) => l.slug);
      const lazy = (await api.runtime('jvm').langs().load()).map((l) => l.slug);
      expect(sync).toEqual(lazy);
    });
  });
});

describe('api.packageManager()', () => {
  describe('.info()', () => {
    it('returns info for known pm', () => {
      expect(api.packageManager('npm').info()).toMatchObject({ name: 'npm' });
    });

    it('includes slug, logo, color, website, aliases', () => {
      const info = api.packageManager('npm').info();
      expect(info).toHaveProperty('slug', 'npm');
      expect(info).toHaveProperty('logo');
      expect(info?.color).toMatch(/^#[0-9A-Fa-f]{6}$/);
      expect(info).toHaveProperty('website');
      expect(info?.aliases).toContain('npm');
    });

    it('returns undefined for unknown value', () => {
      expect(api.packageManager('unknown-xyz').info()).toBeUndefined();
    });
  });

  describe('.langs()', () => {
    it('npm includes javascript and typescript', () => {
      const slugs = api
        .packageManager('npm')
        .langs()
        .get()
        .map((l) => l.slug);
      expect(slugs).toContain('javascript');
      expect(slugs).toContain('typescript');
    });

    it('cargo includes rust', () => {
      expect(
        api
          .packageManager('cargo')
          .langs()
          .get()
          .map((l) => l.slug),
      ).toContain('rust');
    });

    it('nuget includes csharp', () => {
      expect(
        api
          .packageManager('nuget')
          .langs()
          .get()
          .map((l) => l.slug),
      ).toContain('csharp');
    });

    it('unknown value returns empty array', () => {
      expect(api.packageManager('unknown-xyz').langs().get()).toEqual([]);
    });

    it('locale chains correctly', () => {
      expect(api.packageManager('pip').langs().locale('es').get().length).toBeGreaterThan(0);
    });

    it('.load() matches .get()', async () => {
      const sync = api
        .packageManager('maven')
        .langs()
        .get()
        .map((l) => l.slug);
      const lazy = (await api.packageManager('maven').langs().load()).map((l) => l.slug);
      expect(sync).toEqual(lazy);
    });
  });

  describe('.runtimes()', () => {
    it('npm runtimes includes Node.js', () => {
      const names = api
        .packageManager('npm')
        .runtimes()
        .map((r) => r.name);
      expect(names).toContain('Node.js');
    });

    it('cargo runtimes includes Rust', () => {
      const names = api
        .packageManager('cargo')
        .runtimes()
        .map((r) => r.name);
      expect(names).toContain('Rust');
    });

    it('nuget runtimes includes .NET', () => {
      const names = api
        .packageManager('nuget')
        .runtimes()
        .map((r) => r.name);
      expect(names).toContain('.NET');
    });

    it('unknown pm returns empty runtimes', () => {
      expect(api.packageManager('unknown-xyz').runtimes()).toEqual([]);
    });

    it('runtime entries have all required fields', () => {
      const rt = api.packageManager('npm').runtimes()[0];
      expect(rt).toHaveProperty('slug');
      expect(rt).toHaveProperty('name');
      expect(rt).toHaveProperty('website');
      expect(rt).toHaveProperty('logo');
      expect(rt).toHaveProperty('aliases');
      expect(rt).toHaveProperty('packageManagers');
      expect(rt?.color).toMatch(/^#[0-9A-Fa-f]{6}$/);
    });
  });
});
