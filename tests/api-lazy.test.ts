import { describe, expect, expectTypeOf, it } from 'vitest';
import type { LocalizedLanguage } from '../src';
import { api, languages } from '../src';
import { lazyApi } from '../src/api-lazy';

describe('lazyApi.language', () => {
  it('loads and localizes a language by slug', async () => {
    const language = await lazyApi.language('typescript').locale('es-PE').load();

    expect(language.slug).toBe('typescript');
    expect(language.resolvedLocale).toBe('es');
    expect(language.name).toBe('TypeScript');
  });

  it('resolves aliases and normalized names like api.language', async () => {
    await expect(lazyApi.language('golang').load()).resolves.toMatchObject({ slug: 'go' });
    await expect(lazyApi.language('C#').load()).resolves.toMatchObject({ slug: 'csharp' });
    await expect(lazyApi.language(" Ren'Py ").load()).resolves.toMatchObject({ slug: 'renpy' });
    await expect(lazyApi.language('Visual Basic').load()).resolves.toMatchObject({
      slug: 'visual-basic',
    });
  });

  it('resolves every catalog alias to its language', async () => {
    for (const language of languages) {
      for (const alias of language.aliases ?? []) {
        expect((await lazyApi.language(alias).load())?.slug, alias).toBe(language.slug);
        expect(api.language(alias).get()?.slug, alias).toBe(language.slug);
      }
    }
  });

  it('returns undefined for unknown slugs and Object.prototype members', async () => {
    await expect(lazyApi.language('not-a-language').load()).resolves.toBeUndefined();
    await expect(lazyApi.language('constructor').load()).resolves.toBeUndefined();
  });

  it('loads the same localized data as api.get()', async () => {
    for (const slug of ['rust', 'python', 'fsharp']) {
      await expect(lazyApi.language(slug).locale('de').load()).resolves.toEqual(
        api.language(slug).locale('de').get(),
      );
    }
  });

  it('types known slug literals as always resolving', () => {
    expectTypeOf(lazyApi.language('typescript').load()).toEqualTypeOf<Promise<LocalizedLanguage>>();
    expectTypeOf(lazyApi.language('typescript').locale('es').load()).toEqualTypeOf<
      Promise<LocalizedLanguage>
    >();
    expectTypeOf(lazyApi.language('golang' as string).load()).toEqualTypeOf<
      Promise<LocalizedLanguage | undefined>
    >();
  });
});

describe('lazyApi.languages', () => {
  it('lists and counts every catalog slug without loading', () => {
    expect(lazyApi.languages().slugs()).toEqual(languages.map((language) => language.slug));
    expect(lazyApi.languages().count()).toBe(languages.length);
  });

  it('loads every language with the requested locale', async () => {
    const loaded = await lazyApi.languages().locale('fr').load();

    expect(loaded).toEqual(api.languages().locale('fr').get());
  });
});

describe('lazyApi.detect', () => {
  it('detects with the same ranking as detectLanguageSlug', async () => {
    await expect(lazyApi.detect('src/index.ts').load()).resolves.toMatchObject({
      slug: 'typescript',
    });
    await expect(lazyApi.detect('src/Program.fs').locale('es').load()).resolves.toMatchObject({
      slug: 'fsharp',
      resolvedLocale: 'es',
    });
    await expect(lazyApi.detect('Dockerfile').load()).resolves.toMatchObject({
      slug: 'dockerfile',
    });
  });

  it('returns undefined for unknown filenames', async () => {
    await expect(lazyApi.detect('notes.unknown-extension').load()).resolves.toBeUndefined();
  });

  it('matches api.detect and api.detectAll', async () => {
    for (const filename of ['include/config.h', 'matrix.m', 'build.gradle.kts', 'README.md']) {
      expect((await lazyApi.detect(filename).load())?.slug, filename).toBe(
        api.detect(filename).get()?.slug,
      );
      expect(lazyApi.detectAll(filename).slugs(), filename).toEqual(
        api.detectAll(filename).slugs(),
      );
    }
  });

  it('loads every candidate for ambiguous filenames', async () => {
    const loaded = await lazyApi.detectAll('include/config.h').load();

    expect(loaded.map((language) => language.slug)).toEqual(['c', 'cpp']);
    expect(lazyApi.detectAll('include/config.h').count()).toBe(2);
  });
});

describe('lazyApi.extension', () => {
  it('matches the same languages as api.extension for every catalog extension', () => {
    const extensions = new Set(languages.flatMap((language) => language.extensions));

    for (const extension of extensions) {
      expect(lazyApi.extension(extension).langs().slugs(), extension).toEqual(
        api.extension(extension).langs().slugs(),
      );
    }
  });

  it('accepts values without the leading dot and loads localized results', async () => {
    expect(lazyApi.extension('h').langs().slugs()).toEqual(['c', 'cpp']);

    const loaded = await lazyApi.extension('.ts').langs().locale('it').load();

    expect(loaded.map((language) => [language.slug, language.resolvedLocale])).toEqual([
      ['typescript', 'it'],
    ]);
  });

  it('returns an empty collection for unknown extensions', async () => {
    expect(lazyApi.extension('.unknown').langs().count()).toBe(0);
    await expect(lazyApi.extension('.unknown').langs().load()).resolves.toEqual([]);
  });
});
