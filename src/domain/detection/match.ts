export interface DetectableLanguage {
  extensions: readonly string[];
}

interface IndexedMatch<Entry> {
  entry: Entry;
  index: number;
  matchLength: number;
}

type DetectionIndex<Entry> = Map<string, IndexedMatch<Entry>[]>;

const pathSegmentPattern = /[/\\]/;
const indexCache = new WeakMap<readonly DetectableLanguage[], DetectionIndex<DetectableLanguage>>();

/** Returns the lowercase basename from a filename or path. */
export const getBasename = (filename: string): string => {
  const parts = filename.trim().split(pathSegmentPattern);

  return (parts.at(-1) as string).toLowerCase();
};

const addIndexKey = <Entry>(
  index: DetectionIndex<Entry>,
  key: string,
  match: IndexedMatch<Entry>,
) => {
  const matches = index.get(key);

  if (matches) {
    matches.push(match);
  } else {
    index.set(key, [match]);
  }
};

/**
 * Builds a lookup table keyed by lowercase extension suffix or exact filename.
 *
 * Dotted extensions such as `.ts` are stored under their own key. Exact filename
 * entries such as `Dockerfile` are stored under both the exact filename key and a
 * dotted `.dockerfile` suffix key, matching the historical `matchesExtension` rules.
 */
const buildDetectionIndex = <Entry extends DetectableLanguage>(
  entries: readonly Entry[],
): DetectionIndex<Entry> => {
  const index: DetectionIndex<Entry> = new Map();

  entries.forEach((entry, entryIndex) => {
    for (const extension of entry.extensions) {
      const normalizedExtension = extension.toLowerCase();
      const match = { entry, index: entryIndex, matchLength: extension.length };

      if (normalizedExtension.startsWith('.')) {
        addIndexKey(index, normalizedExtension, match);
      } else {
        addIndexKey(index, normalizedExtension, match);
        addIndexKey(index, `.${normalizedExtension}`, match);
      }
    }
  });

  return index;
};

const getDetectionIndex = <Entry extends DetectableLanguage>(
  entries: readonly Entry[],
): DetectionIndex<Entry> => {
  let index = indexCache.get(entries);

  if (!index) {
    index = buildDetectionIndex(entries);
    indexCache.set(entries, index);
  }

  return index as DetectionIndex<Entry>;
};

/** Returns every candidate lookup key for a basename: the exact name plus each dotted suffix. */
const getLookupKeys = (basename: string): string[] => {
  const keys = [basename];

  for (
    let position = basename.indexOf('.');
    position !== -1;
    position = basename.indexOf('.', position + 1)
  ) {
    const suffix = basename.slice(position);

    if (suffix !== basename) {
      keys.push(suffix);
    }
  }

  return keys;
};

/** Returns every entry whose extensions match a filename or path, best match first. */
export const detectMatchingEntries = <Entry extends DetectableLanguage>(
  entries: readonly Entry[],
  filename: string,
): Entry[] => {
  const basename = getBasename(filename);

  if (!basename) {
    return [];
  }

  const index = getDetectionIndex(entries);
  const bestMatches = new Map<number, IndexedMatch<Entry>>();

  for (const key of getLookupKeys(basename)) {
    for (const match of index.get(key) ?? []) {
      const existing = bestMatches.get(match.index);

      if (!existing || match.matchLength > existing.matchLength) {
        bestMatches.set(match.index, match);
      }
    }
  }

  return [...bestMatches.values()]
    .sort((first, second) => second.matchLength - first.matchLength || first.index - second.index)
    .map(({ entry }) => entry);
};
