import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { defineConfig } from 'tsup';

const languagesDir = 'src/languages';
const languageEntries = existsSync(languagesDir)
  ? Object.fromEntries(
      readdirSync(languagesDir)
        .filter((file) => file.endsWith('.ts'))
        .map((file) => {
          const slug = file.replace(/\.ts$/, '');

          return [`languages/${slug}`, join(languagesDir, file)];
        }),
    )
  : {};

export default defineConfig({
  entry: {
    api: 'src/api.ts',
    detect: 'src/domain/detection/detect.ts',
    'detect-slugs': 'src/domain/detection/detect-slugs.ts',
    index: 'src/index.ts',
    i18n: 'src/domain/i18n/index.ts',
    ...languageEntries,
  },
  format: ['esm', 'cjs'],
  dts: true,
  // `splitting` is left at tsup's default: ESM shares language data between entry
  // points through chunks, while CJS stays unsplit (CJS splitting is experimental).
  esbuildOptions(options, { format }) {
    if (format === 'esm') {
      options.chunkNames = 'chunks/[name]-[hash]';
    }
  },
  clean: true,
  treeshake: true,
  sourcemap: false,
});
