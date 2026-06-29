export interface DetectableLanguage {
  extensions: readonly string[];
}

const pathSegmentPattern = /[/\\]/;

/** Returns the lowercase basename from a filename or path. */
export const getBasename = (filename: string): string => {
  const parts = filename.trim().split(pathSegmentPattern);

  return (parts.at(-1) as string).toLowerCase();
};

/** Checks whether a basename matches an extension or exact filename entry. */
export const matchesExtension = (basename: string, extension: string) => {
  const normalizedExtension = extension.toLowerCase();

  if (normalizedExtension.startsWith('.')) {
    return basename.endsWith(normalizedExtension);
  }

  return basename === normalizedExtension || basename.endsWith(`.${normalizedExtension}`);
};

/** Returns every entry whose extensions match a filename or path. */
export const detectMatchingEntries = <Entry extends DetectableLanguage>(
  entries: readonly Entry[],
  filename: string,
) => {
  const basename = getBasename(filename);

  if (!basename) {
    return [];
  }

  return entries
    .map((entry, index) => ({
      entry,
      index,
      matchLength: Math.max(
        ...entry.extensions
          .filter((extension) => matchesExtension(basename, extension))
          .map((extension) => extension.length),
      ),
    }))
    .filter(({ matchLength }) => Number.isFinite(matchLength))
    .sort((first, second) => second.matchLength - first.matchLength || first.index - second.index)
    .map(({ entry }) => entry);
};
