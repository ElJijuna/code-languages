import { writeFile } from 'node:fs/promises';
import { performance } from 'node:perf_hooks';

import {
  api,
  detectLanguage,
  detectLanguages,
  languages,
  localizeLanguage,
  typescript,
} from '../dist/index.js';

const outputFile = new URL('../docs/data/bench-results.json', import.meta.url);
const filenames = [
  'src/index.ts',
  'src/App.vue',
  'docs/index.html',
  'styles/main.scss',
  'Dockerfile',
  'README.md',
  'package.json',
  'include/config.h',
  'scripts/check-language-versions.mjs',
  'build.zig',
  'Cargo.toml',
  'web/app.wasm',
];
const measure = (name, group, iterations, fn) => {
  fn(0);

  const startedAt = performance.now();

  for (let index = 0; index < iterations; index += 1) {
    fn(index);
  }

  const totalMs = performance.now() - startedAt;

  return {
    name,
    group,
    iterations,
    totalMs: Number(totalMs.toFixed(3)),
    meanMs: Number((totalMs / iterations).toFixed(6)),
    opsPerSecond: Number(((iterations / totalMs) * 1000).toFixed(0)),
  };
};
const measureAsync = async (name, group, iterations, fn) => {
  await fn(0);

  const startedAt = performance.now();

  for (let index = 0; index < iterations; index += 1) {
    await fn(index);
  }

  const totalMs = performance.now() - startedAt;

  return {
    name,
    group,
    iterations,
    totalMs: Number(totalMs.toFixed(3)),
    meanMs: Number((totalMs / iterations).toFixed(6)),
    opsPerSecond: Number(((iterations / totalMs) * 1000).toFixed(0)),
  };
};
const results = [
  measure('detectLanguage for TypeScript file', 'detect', 100_000, () =>
    detectLanguage('src/index.ts'),
  ),
  measure('detectLanguages for ambiguous header', 'detect', 100_000, () =>
    detectLanguages('include/config.h'),
  ),
  measure('detectLanguage mixed filenames', 'detect', 20_000, (index) =>
    detectLanguage(filenames[index % filenames.length]),
  ),
  measure('localize TypeScript to es-PE', 'i18n', 250_000, () =>
    localizeLanguage(typescript, 'es-PE'),
  ),
  measure('localize complete catalog to Spanish', 'i18n', 10_000, () =>
    languages.map((language) => localizeLanguage(language, 'es')),
  ),
  measure('api.language().locale().get()', 'api', 100_000, () =>
    api.language('typescript').locale('es-PE').get(),
  ),
  measure('api.detect().locale().get()', 'api', 100_000, () =>
    api.detect('src/App.vue').locale('es').get(),
  ),
  await measureAsync('api.language().locale().load()', 'api', 10_000, () =>
    api.language('typescript').locale('es').load(),
  ),
];

await writeFile(
  outputFile,
  `${JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      runtime: process.version,
      results,
    },
    null,
    2,
  )}\n`,
);

console.log(`Generated ${results.length} website benchmark results.`);
