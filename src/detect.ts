import { languages } from "./catalog";
import type { Language } from "./types";

const pathSegmentPattern = /[/\\]/;

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
  const normalizedFilename = filename.trim();

  if (!normalizedFilename) {
    return [];
  }

  const basename = normalizedFilename.split(pathSegmentPattern).at(-1)?.toLowerCase() ?? "";

  return languages.filter((language) =>
    language.extensions.some((extension) => matchesExtension(basename, extension)),
  );
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

const matchesExtension = (basename: string, extension: string) => {
  const normalizedExtension = extension.toLowerCase();

  if (normalizedExtension.startsWith(".")) {
    return basename.endsWith(normalizedExtension);
  }

  return basename === normalizedExtension || basename.endsWith(`.${normalizedExtension}`);
};
