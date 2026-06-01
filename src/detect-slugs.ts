import { type LanguageSlug, languageIndex } from "./language-registry";
import { detectMatchingEntries } from "./match";

/**
 * Detects all language slugs that match a filename or path.
 *
 * This uses the lightweight extension index, so consumers can detect filenames
 * without importing the full language catalog.
 *
 * @example
 * detectLanguageSlugs("include/config.h");
 * // ["c", "cpp"]
 */
export const detectLanguageSlugs = (filename: string): LanguageSlug[] =>
  detectMatchingEntries(languageIndex, filename).map((entry) => entry.slug as LanguageSlug);

/**
 * Detects the first language slug that matches a filename or path.
 *
 * Use `detectLanguageSlugs` when you need to handle ambiguous extensions such as `.h`.
 *
 * @example
 * detectLanguageSlug("src/index.ts");
 * // "typescript"
 */
export const detectLanguageSlug = (filename: string): LanguageSlug | undefined =>
  detectLanguageSlugs(filename).at(0);
