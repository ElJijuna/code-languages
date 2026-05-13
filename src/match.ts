export interface DetectableLanguage {
  extensions: readonly string[];
}

const pathSegmentPattern = /[/\\]/;

/** Returns the lowercase basename from a filename or path. */
export const getBasename = (filename: string) =>
  filename.trim().split(pathSegmentPattern).at(-1)?.toLowerCase() ?? "";

/** Checks whether a basename matches an extension or exact filename entry. */
export const matchesExtension = (basename: string, extension: string) => {
  const normalizedExtension = extension.toLowerCase();

  if (normalizedExtension.startsWith(".")) {
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

  return entries.filter((entry) =>
    entry.extensions.some((extension) => matchesExtension(basename, extension)),
  );
};
