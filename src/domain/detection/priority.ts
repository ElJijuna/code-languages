import type { LanguageSlug } from '@/domain/language/registry';

/**
 * Preferred detection order for ambiguous extensions, keyed by lowercase extension.
 *
 * Listed slugs win ties in the given order; languages not listed follow in catalog
 * order. Only extensions whose alphabetical winner is not the most common use of
 * the extension need an entry here.
 */
export const EXTENSION_PRIORITY: Readonly<Record<string, readonly LanguageSlug[]>> = {
  '.fs': ['fsharp'],
  '.m': ['objective-c', 'matlab'],
  '.pde': ['processing'],
  '.pod': ['pod'],
  '.pp': ['puppet'],
  '.v': ['verilog', 'v'],
  '.xsl': ['xslt'],
  '.xslt': ['xslt'],
};

/**
 * Returns the tie-break rank of a language for a lookup key.
 *
 * Lower ranks win. Languages without a preference share the lowest priority.
 */
export const getPriorityRank = (key: string, slug: string): number => {
  const preferred = Object.hasOwn(EXTENSION_PRIORITY, key) ? EXTENSION_PRIORITY[key] : undefined;
  const rank = preferred?.indexOf(slug as LanguageSlug) ?? -1;

  return rank === -1 ? Number.MAX_SAFE_INTEGER : rank;
};
