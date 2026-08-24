/**
 * Produces the complete file replacements required for one Language Version Update.
 * Unchanged artifacts are omitted so persistence adapters can remain idempotent.
 */
export function planLanguageVersionUpdate({ languageContent, readmeContent, update }) {
  const changes = [];
  const updatedLanguageContent = updateLanguageVersion(languageContent, update);

  if (updatedLanguageContent !== languageContent) {
    changes.push({
      path: update.filePath,
      content: updatedLanguageContent,
    });
  }

  const updatedReadmeContent = updateReadmeLanguageVersion(readmeContent, update);

  if (updatedReadmeContent !== readmeContent) {
    changes.push({
      path: 'README.md',
      content: updatedReadmeContent,
    });
  }

  return changes;
}

function updateLanguageVersion(content, update) {
  return content.replace(
    /version:\s*(['"])(.*?)\1/,
    (_match, quote) => `version: ${quote}${update.latestVersion}${quote}`,
  );
}

function updateReadmeLanguageVersion(content, update) {
  const importPath = `code-languages/${update.slug}`;
  const rowPattern = new RegExp(
    `^(\\| .*? \\| .*? \\| \`${escapeRegExp(update.slug)}\` \\| .*? \\| )\`?[^|\\n]+\`?( \\| \`${escapeRegExp(importPath)}\` \\|)$`,
    'm',
  );

  return content.replace(rowPattern, `$1\`${update.latestVersion}\`$2`);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
