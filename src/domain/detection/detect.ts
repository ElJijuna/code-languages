import { detectMatchingEntries } from '@/domain/detection/match';
import { detectLanguageSlugByShebang } from '@/domain/detection/shebang';
import { languages } from '@/domain/language/catalog';
import type { Language } from '@/types';

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

/**
 * Detects a language from the shebang line of a file's content.
 *
 * Useful for extensionless scripts such as `bin/deploy` starting with `#!/bin/bash`.
 *
 * @example
 * detectLanguageByShebang("#!/usr/bin/env node\nconsole.log('hi')")?.slug;
 * // "javascript"
 */
export const detectLanguageByShebang = (content: string): Language | undefined => {
  const slug = detectLanguageSlugByShebang(content);

  return slug ? languages.find((language) => language.slug === slug) : undefined;
};

export { detectLanguageSlugByShebang } from '@/domain/detection/shebang';
