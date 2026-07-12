import { detectMatchingEntries } from '@/domain/detection/match';
import { type LanguageSlug, languageIndex } from '@/domain/language/registry';

export { detectLanguageSlugByShebang } from '@/domain/detection/shebang';

export interface ProjectLanguageDetection {
  /** Detected language slug. */
  slug: LanguageSlug;

  /** Number of filenames or paths matched to this language. */
  files: number;
}

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

/**
 * Detects languages used by a project file list and counts matched files per language.
 *
 * Unmatched filenames are ignored. Ambiguous extensions use the first matching language,
 * matching `detectLanguageSlug` behavior.
 *
 * @example
 * detectProjectLanguages(["src/index.ts", "src/app.ts", "README.md"]);
 * // [{ slug: "typescript", files: 2 }, { slug: "markdown", files: 1 }]
 */
export const detectProjectLanguages = (filenames: Iterable<string>): ProjectLanguageDetection[] => {
  const fileCounts = new Map<LanguageSlug, number>();

  for (const filename of filenames) {
    const slug = detectLanguageSlug(filename);

    if (!slug) {
      continue;
    }

    fileCounts.set(slug, (fileCounts.get(slug) ?? 0) + 1);
  }

  return [...fileCounts.entries()]
    .map(([slug, files]) => ({ slug, files }))
    .sort((first, second) => second.files - first.files || first.slug.localeCompare(second.slug));
};
