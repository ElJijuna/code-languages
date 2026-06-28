import type { Language } from '../../types';
import { languages } from '../language/catalog';
import { detectMatchingEntries } from './match';

/**
 * Detects all languages that match a filename or path.
 *
 * Matching supports normal extensions such as `.ts` and exact filename entries
 * such as `Dockerfile`. Ambiguous filenames can return multiple languages.
 *
 * @example
 * detectLanguages("include/config.h").map((language) => language.slug);
 * // ["c", "cpp"]
 */
export const detectLanguages = (filename: string): Language[] => {
  return detectMatchingEntries(languages, filename);
};

/**
 * Detects the first language that matches a filename or path.
 *
 * Use `detectLanguages` when you need to handle ambiguous extensions such as `.h`.
 *
 * @example
 * detectLanguage("src/index.ts")?.slug;
 * // "typescript"
 */
export const detectLanguage = (filename: string): Language | undefined =>
  detectLanguages(filename).at(0);
