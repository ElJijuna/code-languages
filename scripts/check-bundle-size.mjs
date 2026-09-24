import { execFileSync } from 'node:child_process';
import { appendFileSync, existsSync } from 'node:fs';
import { relative } from 'node:path';
import { gzipSync } from 'node:zlib';
import { build } from 'esbuild';
import {
  bundleBudgets,
  createBudgetSnippet,
  evaluateBudgets,
  getInitialOutputs,
} from './bundle-size-budget.mjs';

/**
 * Checks consumer bundle sizes and npm package size against `bundle-size-budget.mjs`.
 *
 * Requires a prior `npm run build`. Each budget snippet is bundled in memory with
 * esbuild (minified ESM with code splitting, like a typical app bundler), resolving
 * `code-languages` to this package through its `exports` map. Byte budgets apply to
 * the initial load (the entry chunk and its static imports); lazily imported chunks
 * only count toward the emitted file total.
 */

if (!existsSync('dist/index.js')) {
  console.error('dist/ is missing. Run `npm run build` before `npm run size`.');
  process.exit(1);
}

const measureBundle = async (budget) => {
  const result = await build({
    stdin: { contents: createBudgetSnippet(budget), resolveDir: process.cwd(), loader: 'js' },
    bundle: true,
    minify: true,
    format: 'esm',
    splitting: true,
    outdir: 'size-check',
    write: false,
    metafile: true,
    logLevel: 'error',
  });
  const files = result.outputFiles.filter((file) => file.path.endsWith('.js'));
  const initialPaths = getInitialOutputs(result.metafile.outputs);
  const initialFiles = files.filter((file) => initialPaths.has(relative(process.cwd(), file.path)));

  return {
    budget,
    bytes: initialFiles.reduce((total, file) => total + file.contents.length, 0),
    gzipBytes: initialFiles.reduce((total, file) => total + gzipSync(file.contents).length, 0),
    files: files.length,
  };
};
const measurePack = () => {
  const [pack] = JSON.parse(
    execFileSync('npm', ['pack', '--dry-run', '--json', '--ignore-scripts'], { encoding: 'utf8' }),
  );

  return { packedBytes: pack.size, unpackedBytes: pack.unpackedSize };
};
const bundles = [];

for (const budget of bundleBudgets) {
  bundles.push(await measureBundle(budget));
}

const { failures, report } = evaluateBudgets({ bundles, pack: measurePack() });

console.log(report);

if (process.env.GITHUB_STEP_SUMMARY) {
  appendFileSync(process.env.GITHUB_STEP_SUMMARY, `## Bundle size\n\n${report}\n`);
}

if (failures.length > 0) {
  console.error(`\nBundle size budget exceeded:\n- ${failures.join('\n- ')}`);
  process.exit(1);
}
