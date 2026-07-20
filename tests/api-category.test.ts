import { describe, expect, it } from 'vitest';
import { api, getCategories } from '../src';

describe('api.category()', () => {
  describe("'frontend'", () => {
    it('returns a non-empty list', () => {
      expect(api.category('frontend').langs().get().length).toBeGreaterThan(0);
    });

    it('does not include fullstack languages like javascript', () => {
      const slugs = api
        .category('frontend')
        .langs()
        .get()
        .map((l) => l.slug);

      expect(slugs).not.toContain('javascript');
      expect(slugs).not.toContain('typescript');
    });

    it('does not include server-only languages', () => {
      const slugs = api
        .category('frontend')
        .langs()
        .get()
        .map((l) => l.slug);

      expect(slugs).not.toContain('python');
      expect(slugs).not.toContain('go');
    });
  });

  describe("'backend'", () => {
    it('includes python', () => {
      expect(
        api
          .category('backend')
          .langs()
          .get()
          .map((l) => l.slug),
      ).toContain('python');
    });

    it('includes go', () => {
      expect(
        api
          .category('backend')
          .langs()
          .get()
          .map((l) => l.slug),
      ).toContain('go');
    });

    it('includes ruby', () => {
      expect(
        api
          .category('backend')
          .langs()
          .get()
          .map((l) => l.slug),
      ).toContain('ruby');
    });

    it('includes java', () => {
      expect(
        api
          .category('backend')
          .langs()
          .get()
          .map((l) => l.slug),
      ).toContain('java');
    });

    it('includes csharp', () => {
      expect(
        api
          .category('backend')
          .langs()
          .get()
          .map((l) => l.slug),
      ).toContain('csharp');
    });

    it('does not include browser-only languages', () => {
      const slugs = api
        .category('backend')
        .langs()
        .get()
        .map((l) => l.slug);

      expect(slugs).not.toContain('javascript');
      expect(slugs).not.toContain('typescript');
    });
  });

  describe("'fullstack'", () => {
    it('includes javascript', () => {
      expect(
        api
          .category('fullstack')
          .langs()
          .get()
          .map((l) => l.slug),
      ).toContain('javascript');
    });

    it('includes typescript', () => {
      expect(
        api
          .category('fullstack')
          .langs()
          .get()
          .map((l) => l.slug),
      ).toContain('typescript');
    });

    it('does not include server-only languages', () => {
      const slugs = api
        .category('fullstack')
        .langs()
        .get()
        .map((l) => l.slug);

      expect(slugs).not.toContain('python');
      expect(slugs).not.toContain('go');
    });
  });

  describe("'systems'", () => {
    it('includes rust', () => {
      expect(
        api
          .category('systems')
          .langs()
          .get()
          .map((l) => l.slug),
      ).toContain('rust');
    });

    it('includes c', () => {
      expect(
        api
          .category('systems')
          .langs()
          .get()
          .map((l) => l.slug),
      ).toContain('c');
    });

    it('includes cpp', () => {
      expect(
        api
          .category('systems')
          .langs()
          .get()
          .map((l) => l.slug),
      ).toContain('cpp');
    });

    it('includes zig', () => {
      expect(
        api
          .category('systems')
          .langs()
          .get()
          .map((l) => l.slug),
      ).toContain('zig');
    });
  });

  describe("'data-science'", () => {
    it('includes r', () => {
      expect(
        api
          .category('data-science')
          .langs()
          .get()
          .map((l) => l.slug),
      ).toContain('r');
    });

    it('includes julia', () => {
      expect(
        api
          .category('data-science')
          .langs()
          .get()
          .map((l) => l.slug),
      ).toContain('julia');
    });

    it('includes python (overlaps with backend)', () => {
      expect(
        api
          .category('data-science')
          .langs()
          .get()
          .map((l) => l.slug),
      ).toContain('python');
    });
  });

  describe("'scripting'", () => {
    it('includes bash', () => {
      expect(
        api
          .category('scripting')
          .langs()
          .get()
          .map((l) => l.slug),
      ).toContain('bash');
    });

    it('includes zsh', () => {
      expect(
        api
          .category('scripting')
          .langs()
          .get()
          .map((l) => l.slug),
      ).toContain('zsh');
    });

    it('includes powershell', () => {
      expect(
        api
          .category('scripting')
          .langs()
          .get()
          .map((l) => l.slug),
      ).toContain('powershell');
    });
  });

  describe("'other'", () => {
    it('returns a non-empty list', () => {
      expect(api.category('other').langs().get().length).toBeGreaterThan(0);
    });

    it('does not include languages covered by other categories', () => {
      const slugs = api
        .category('other')
        .langs()
        .get()
        .map((l) => l.slug);

      expect(slugs).not.toContain('javascript');
      expect(slugs).not.toContain('python');
      expect(slugs).not.toContain('rust');
      expect(slugs).not.toContain('bash');
    });
  });

  describe('.info()', () => {
    it('returns metadata for every category', () => {
      for (const category of getCategories()) {
        const info = api.category(category).info();

        expect(info).toMatchObject({ slug: category });
        expect(info?.name.length).toBeGreaterThan(0);
        expect(info?.description.length).toBeGreaterThan(0);
        expect(info?.aliases).toContain(category);
      }
    });

    it('returns name and description for backend', () => {
      expect(api.category('backend').info()).toMatchObject({
        slug: 'backend',
        name: 'Backend',
        description: 'Languages that run on a server runtime.',
      });
    });

    it('returns undefined for unknown value', () => {
      expect(api.category('unknown-xyz' as never).info()).toBeUndefined();
    });
  });

  describe('locale chaining', () => {
    it('locale is applied to all returned languages', () => {
      const langs = api.category('backend').langs().locale('es').get();

      expect(langs.length).toBeGreaterThan(0);

      for (const l of langs) {
        expect(l.resolvedLocale).toBe('es');
      }
    });
  });

  describe('.load()', () => {
    it('async load returns same slugs as sync get for backend', async () => {
      const syncSlugs = api
        .category('backend')
        .langs()
        .get()
        .map((l) => l.slug)
        .sort();
      const asyncSlugs = (await api.category('backend').langs().load()).map((l) => l.slug).sort();

      expect(asyncSlugs).toEqual(syncSlugs);
    });
  });

  describe('getCategories()', () => {
    it('returns all 7 categories', () => {
      expect(getCategories()).toEqual([
        'frontend',
        'backend',
        'fullstack',
        'systems',
        'data-science',
        'scripting',
        'other',
      ]);
    });
  });
});
