import { languageAliases } from '@/domain/language/aliases';

const getAliasSlug = (alias: string): string | undefined =>
  Object.hasOwn(languageAliases, alias) ? languageAliases[alias] : undefined;

/** Normalizes a lookup value to the catalog slug format: lowercase, dash-separated, `[a-z0-9-]`. */
export const normalizeLanguageSlug = (value: string): string =>
  value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');

/**
 * Resolves a lookup value to a catalog slug candidate.
 *
 * Aliases are checked before slug normalization so values such as `C#` or `golang`
 * resolve to `csharp` and `go` instead of being mangled by symbol stripping. The
 * result is not guaranteed to exist in the catalog.
 */
export const resolveLanguageLookup = (value: string): string => {
  const raw = value.trim().toLowerCase();
  const normalized = normalizeLanguageSlug(value);

  return getAliasSlug(raw) ?? getAliasSlug(normalized) ?? normalized;
};

/**
 * Returns whether an extension list registers the given extension or exact filename.
 *
 * Accepts values with or without the leading dot, case-insensitively.
 */
export const hasExtension = (extensions: readonly string[], value: string): boolean => {
  const normalized = value.trim().toLowerCase();

  return extensions.some((extension) => {
    const normalizedExtension = extension.toLowerCase();

    return normalizedExtension === normalized || normalizedExtension === `.${normalized}`;
  });
};
