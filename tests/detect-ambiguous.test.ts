import { describe, expect, it } from 'vitest';
import {
  api,
  detectLanguage,
  detectLanguageSlug,
  detectLanguageSlugs,
  detectProjectLanguages,
  languages,
} from '../src';
import { EXTENSION_PRIORITY } from '../src/domain/detection/priority';

/**
 * Locks in the first-match winner for every ambiguous extension.
 *
 * Extensions listed in `EXTENSION_PRIORITY` resolve in that order; the rest fall
 * back to catalog order (alphabetical by slug), so adding a language whose slug
 * sorts before an existing winner silently changes those results. A failure here
 * means a detection winner changed — update intentionally, add a priority entry,
 * or rename the new language's slug.
 */
const expectedWinners: Record<string, string> = {
  'config.h': 'c',
  'main.as': 'actionscript',
  'proof.v': 'verilog',
  'model.mod': 'ampl',
  'query.sql': 'sql',
  'script.pl': 'perl',
  'matrix.m': 'objective-c',
  'program.bas': 'basic',
  'macros.inc': 'assembly',
  'unit.pp': 'puppet',
  'MyClass.cls': 'apex',
  'words.fs': 'fsharp',
  'object.st': 'smalltalk',
  'stats.r': 'r',
  'class.e': 'eiffel',
  'module.d': 'd',
  'scanner.l': 'lex',
  'grammar.y': 'yacc',
  'story.ink': 'ink',
  'tasks.bb': 'basic',
  'script.k': 'kcl',
  'main.sc': 'scala',
  'listing.cl': 'lisp',
  'sketch.pde': 'processing',
  'macro.mac': 'maxima',
  'spec.adb': 'ada',
  'test.t': 'perl',
  'docs.pod': 'pod',
  'style.xsl': 'xslt',
  'transform.xslt': 'xslt',
  'UPPER.FS': 'fsharp',
};

describe('ambiguous extension winners', () => {
  it.each(Object.entries(expectedWinners))('%s resolves first to %s', (filename, slug) => {
    expect(detectLanguageSlug(filename)).toBe(slug);
  });

  it('returns every candidate for ambiguous extensions', () => {
    expect(detectLanguageSlugs('include/config.h')).toEqual(['c', 'cpp']);
    expect(detectLanguageSlugs('scanner.l')).toContain('lex');
    expect(detectLanguageSlugs('grammar.y')).toContain('yacc');
    expect(detectLanguageSlugs('script.k')).toEqual(['kcl', 'q']);
    expect(detectLanguageSlugs('main.sc')).toEqual(['scala', 'supercollider']);
  });

  it('orders candidates by priority, then catalog order', () => {
    expect(detectLanguageSlugs('words.fs')).toEqual(['fsharp', 'forth', 'glsl']);
    expect(detectLanguageSlugs('matrix.m')).toEqual(['objective-c', 'matlab', 'mercury', 'octave']);
    expect(detectLanguageSlugs('design.v')).toEqual(['verilog', 'v', 'coq']);
  });

  it('applies the same priority to full-language detection and the fluent API', () => {
    expect(detectLanguage('words.fs')?.slug).toBe('fsharp');
    expect(api.detect('manifests/site.pp').get()?.slug).toBe('puppet');
    expect(api.detectAll('matrix.m').slugs()).toEqual([
      'objective-c',
      'matlab',
      'mercury',
      'octave',
    ]);
  });

  it('counts project files by the prioritized language', () => {
    expect(detectProjectLanguages(['src/Program.fs', 'src/Library.fs', 'README.md'])).toEqual([
      { slug: 'fsharp', files: 2 },
      { slug: 'markdown', files: 1 },
    ]);
  });

  it('ranks longer extension matches above shorter ones', () => {
    expect(detectLanguageSlug('template.blade.php')).toBe('blade');
    expect(detectLanguageSlug('notes.lagda.md')).toBe('agda');
  });
});

describe('extension priority table', () => {
  it('only lists ambiguous extensions registered by every preferred language', () => {
    for (const [extension, slugs] of Object.entries(EXTENSION_PRIORITY)) {
      const registering = languages
        .filter((language) =>
          language.extensions.some((entry) => entry.toLowerCase() === extension),
        )
        .map((language) => language.slug);

      expect(extension).toBe(extension.toLowerCase());
      expect(registering.length).toBeGreaterThan(1);
      expect(new Set(slugs).size).toBe(slugs.length);

      for (const slug of slugs) {
        expect(registering).toContain(slug);
      }
    }
  });
});
