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
    detect: 'src/detect.ts',
    'detect-slugs': 'src/detect-slugs.ts',
    index: 'src/index.ts',
    i18n: 'src/i18n.ts',
    ...languageEntries,
  },
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  clean: true,
  treeshake: true,
  sourcemap: false,
});
