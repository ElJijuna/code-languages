/**
 * Size budgets for what consumers actually ship, measured by bundling small
 * import snippets against the built package (see `check-bundle-size.mjs`).
 *
 * Each bundle budget caps the minified bytes a consumer bundler emits for the
 * snippet, and the number of JavaScript files it emits (so `.load()` or code
 * splitting changes cannot silently add hundreds of chunks to consumer builds).
 *
 * Raise a limit only on purpose — e.g. when new languages grow the catalog.
 */
export const bundleBudgets = [
  {
    name: 'detect-slugs',
    specifier: 'code-languages/detect-slugs',
    imports: ['detectLanguageSlug'],
    maxBytes: 20_000,
    maxFiles: 1,
  },
  {
    name: 'i18n',
    specifier: 'code-languages/i18n',
    imports: ['localizeLanguage'],
    maxBytes: 1_000,
    maxFiles: 1,
  },
  {
    name: 'language subpath',
    specifier: 'code-languages/typescript',
    imports: ['typescript'],
    maxBytes: 8_000,
    maxFiles: 1,
  },
  {
    name: 'root import, tree-shaken',
    specifier: 'code-languages',
    imports: ['typescript', 'localizeLanguage'],
    maxBytes: 8_000,
    maxFiles: 1,
  },
  {
    name: 'api (full catalog)',
    specifier: 'code-languages/api',
    imports: ['api'],
    maxBytes: 1_600_000,
    maxFiles: 1,
  },
];

export const packageBudget = {
  maxPackedBytes: 3_000_000,
  maxUnpackedBytes: 10_000_000,
};

/** Builds the consumer snippet bundled for a budget. */
export function createBudgetSnippet({ specifier, imports }) {
  const names = imports.join(', ');

  return `import { ${names} } from '${specifier}';\nconsole.log(${names});\n`;
}

export function formatBytes(bytes) {
  if (bytes >= 1_000_000) {
    return `${(bytes / 1_000_000).toFixed(2)} MB`;
  }

  if (bytes >= 1_000) {
    return `${(bytes / 1_000).toFixed(1)} kB`;
  }

  return `${bytes} B`;
}

/**
 * Compares measurements against their budgets.
 *
 * @param {{ bundles: Array<{ budget: typeof bundleBudgets[number], bytes: number, gzipBytes: number, files: number }>, pack: { packedBytes: number, unpackedBytes: number } }} measurements
 * @returns {{ failures: string[], report: string }} Failures (empty when every budget passes) and a Markdown report.
 */
export function evaluateBudgets({ bundles, pack }) {
  const failures = [];
  const rows = bundles.map(({ budget, bytes, gzipBytes, files }) => {
    const overBytes = bytes > budget.maxBytes;
    const overFiles = files > budget.maxFiles;

    if (overBytes) {
      failures.push(
        `${budget.name}: ${formatBytes(bytes)} exceeds the ${formatBytes(budget.maxBytes)} budget`,
      );
    }

    if (overFiles) {
      failures.push(
        `${budget.name}: emits ${files} files, more than the ${budget.maxFiles} allowed`,
      );
    }

    return `| ${overBytes || overFiles ? '❌' : '✅'} | ${budget.name} | \`${budget.specifier}\` | ${formatBytes(bytes)} / ${formatBytes(budget.maxBytes)} | ${formatBytes(gzipBytes)} | ${files} / ${budget.maxFiles} |`;
  });
  const packChecks = [
    ['npm package (packed)', pack.packedBytes, packageBudget.maxPackedBytes],
    ['npm package (unpacked)', pack.unpackedBytes, packageBudget.maxUnpackedBytes],
  ];

  for (const [name, bytes, maxBytes] of packChecks) {
    const over = bytes > maxBytes;

    if (over) {
      failures.push(`${name}: ${formatBytes(bytes)} exceeds the ${formatBytes(maxBytes)} budget`);
    }

    rows.push(
      `| ${over ? '❌' : '✅'} | ${name} | | ${formatBytes(bytes)} / ${formatBytes(maxBytes)} | | |`,
    );
  }

  const report = [
    '| | Budget | Import | Minified / limit | Gzip | JS files / limit |',
    '| --- | --- | --- | --- | --- | --- |',
    ...rows,
  ].join('\n');

  return { failures, report };
}
