import { describe, expect, it } from 'vitest';
import { detectLanguageSlug, detectLanguageSlugs } from '../src';

/**
 * Locks in the first-match winner for every ambiguous extension.
 *
 * Detection order is catalog order (alphabetical by slug), so adding a language
 * whose slug sorts before an existing winner silently changes these results.
 * A failure here means a detection winner changed — update intentionally or
 * rename the new language's slug.
 */
const expectedWinners: Record<string, string> = {
  'config.h': 'c',
  'main.as': 'actionscript',
  'proof.v': 'coq',
  'model.mod': 'ampl',
  'query.sql': 'sql',
  'script.pl': 'perl',
  'matrix.m': 'matlab',
  'program.bas': 'basic',
  'macros.inc': 'assembly',
  'unit.pp': 'pascal',
  'MyClass.cls': 'apex',
  'words.fs': 'forth',
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
  'sketch.pde': 'arduino',
  'macro.mac': 'maxima',
  'spec.adb': 'ada',
  'test.t': 'perl',
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

  it('ranks longer extension matches above shorter ones', () => {
    expect(detectLanguageSlug('template.blade.php')).toBe('blade');
    expect(detectLanguageSlug('notes.lagda.md')).toBe('agda');
  });
});
