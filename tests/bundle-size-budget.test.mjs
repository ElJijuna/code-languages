import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import {
  bundleBudgets,
  createBudgetSnippet,
  evaluateBudgets,
  formatBytes,
  packageBudget,
} from '../scripts/bundle-size-budget.mjs';

const packageJson = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
const [budget] = bundleBudgets;
const withinPack = { packedBytes: 1, unpackedBytes: 1 };

describe('bundleBudgets', () => {
  it('only imports subpaths the package exports', () => {
    for (const { specifier } of bundleBudgets) {
      const subpath =
        specifier === packageJson.name ? '.' : specifier.replace(packageJson.name, '.');

      expect(packageJson.exports, specifier).toHaveProperty([subpath]);
    }
  });

  it('uses unique names and positive limits', () => {
    expect(new Set(bundleBudgets.map(({ name }) => name)).size).toBe(bundleBudgets.length);

    for (const { maxBytes, maxFiles } of bundleBudgets) {
      expect(maxBytes).toBeGreaterThan(0);
      expect(maxFiles).toBeGreaterThanOrEqual(1);
    }
  });
});

describe('createBudgetSnippet()', () => {
  it('imports and uses every name so bundlers cannot drop them', () => {
    expect(
      createBudgetSnippet({ specifier: 'code-languages', imports: ['typescript', 'api'] }),
    ).toBe("import { typescript, api } from 'code-languages';\nconsole.log(typescript, api);\n");
  });
});

describe('formatBytes()', () => {
  it('formats bytes, kilobytes, and megabytes', () => {
    expect(formatBytes(276)).toBe('276 B');
    expect(formatBytes(15_577)).toBe('15.6 kB');
    expect(formatBytes(1_393_445)).toBe('1.39 MB');
  });
});

describe('evaluateBudgets()', () => {
  it('passes when every measurement is within budget', () => {
    const { failures, report } = evaluateBudgets({
      bundles: [{ budget, bytes: budget.maxBytes, gzipBytes: 10, files: budget.maxFiles }],
      pack: withinPack,
    });

    expect(failures).toEqual([]);
    expect(report).toContain(`| ✅ | ${budget.name} |`);
    expect(report).not.toContain('❌');
  });

  it('fails when a bundle exceeds its byte budget', () => {
    const { failures, report } = evaluateBudgets({
      bundles: [{ budget, bytes: budget.maxBytes + 1, gzipBytes: 10, files: 1 }],
      pack: withinPack,
    });

    expect(failures).toEqual([
      `${budget.name}: ${formatBytes(budget.maxBytes + 1)} exceeds the ${formatBytes(budget.maxBytes)} budget`,
    ]);
    expect(report).toContain(`| ❌ | ${budget.name} |`);
  });

  it('fails when a bundle emits more files than allowed', () => {
    const { failures } = evaluateBudgets({
      bundles: [{ budget, bytes: 1, gzipBytes: 1, files: 635 }],
      pack: withinPack,
    });

    expect(failures).toEqual([`${budget.name}: emits 635 files, more than the 1 allowed`]);
  });

  it('fails when the npm package exceeds its budgets', () => {
    const { failures } = evaluateBudgets({
      bundles: [],
      pack: {
        packedBytes: packageBudget.maxPackedBytes + 1,
        unpackedBytes: packageBudget.maxUnpackedBytes + 1,
      },
    });

    expect(failures).toHaveLength(2);
    expect(failures[0]).toMatch(/^npm package \(packed\):/);
    expect(failures[1]).toMatch(/^npm package \(unpacked\):/);
  });
});
