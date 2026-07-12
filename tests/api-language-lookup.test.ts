import { describe, expect, expectTypeOf, it } from 'vitest';
import type { LocalizedLanguage } from '../src';
import { api } from '../src';

describe('api.language aliases', () => {
  it('resolves common aliases to catalog slugs', () => {
    expect(api.language('golang').get()?.slug).toBe('go');
    expect(api.language('js').get()?.slug).toBe('javascript');
    expect(api.language('ts').get()?.slug).toBe('typescript');
    expect(api.language('wasm').get()?.slug).toBe('webassembly');
    expect(api.language('latex').get()?.slug).toBe('tex');
    expect(api.language('elisp').get()?.slug).toBe('emacs-lisp');
  });

  it('resolves aliases with symbols that slug normalization would mangle', () => {
    expect(api.language('C#').get()?.slug).toBe('csharp');
    expect(api.language('F#').get()?.slug).toBe('fsharp');
    expect(api.language('C++').get()?.slug).toBe('cpp');
    expect(api.language('vb.net').get()?.slug).toBe('visual-basic');
  });

  it('resolves aliases case-insensitively and after normalization', () => {
    expect(api.language(' GOLANG ').get()?.slug).toBe('go');
    expect(api.language('Objective C').get()?.slug).toBe('objective-c');
  });

  it('loads languages through aliases', async () => {
    await expect(api.language('rocq').load()).resolves.toMatchObject({ slug: 'coq' });
  });

  it('still resolves plain slugs and normalized names', () => {
    expect(api.language('go').get()?.slug).toBe('go');
    expect(api.language('Visual Basic').get()?.slug).toBe('visual-basic');
  });
});

describe('api.language typed lookups', () => {
  it('types known slug literals as always resolving', () => {
    const language = api.language('typescript').get();

    expectTypeOf(language).toEqualTypeOf<LocalizedLanguage>();
    expect(language.slug).toBe('typescript');
  });

  it('types unknown strings as possibly undefined', () => {
    const language = api.language('not-a-language').get();

    expectTypeOf(language).toEqualTypeOf<LocalizedLanguage | undefined>();
    expect(language).toBeUndefined();
  });

  it('keeps the resolved typing through locale chaining', async () => {
    const language = await api.language('astro').locale('es-PE').load();

    expectTypeOf(language).toEqualTypeOf<LocalizedLanguage>();
    expect(language.resolvedLocale).toBe('es');
  });
});

describe('api.extension', () => {
  it('returns every language registering an extension', () => {
    const slugs = api
      .extension('.h')
      .langs()
      .get()
      .map((language) => language.slug);

    expect(slugs).toEqual(['c', 'cpp']);
  });

  it('accepts values without the leading dot', () => {
    expect(
      api
        .extension('ts')
        .langs()
        .get()
        .map((language) => language.slug),
    ).toEqual(['typescript']);
  });

  it('matches exact filename entries', () => {
    expect(
      api
        .extension('Dockerfile')
        .langs()
        .get()
        .map((language) => language.slug),
    ).toEqual(['dockerfile']);
  });

  it('localizes and lazily loads results', async () => {
    const localized = api.extension('.vue').langs().locale('es').get();

    expect(localized.at(0)?.resolvedLocale).toBe('es');
    await expect(api.extension('.vue').langs().load()).resolves.toMatchObject([{ slug: 'vue' }]);
  });

  it('returns an empty list for unknown extensions', () => {
    expect(api.extension('.unknown-xyz').langs().get()).toEqual([]);
  });
});
