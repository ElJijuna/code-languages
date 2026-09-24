import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { defineConfig, type Options } from 'tsup';

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

type EsbuildPlugin = NonNullable<Options['esbuildPlugins']>[number];

/**
 * CJS has no code splitting, so bundling `languageLoaders` would inline every language
 * into `dist/api/lazy.cjs`. Instead, its dynamic `import('@/languages/<slug>')` calls stay
 * external and load the per-language `dist/languages/<slug>.cjs` files at runtime. The
 * relative path assumes the importing output sits one directory below `dist/`.
 *
 * With `treeshake: true`, tsup runs esbuild in ESM mode for every format and converts to
 * CJS afterwards, so the CJS build is recognized by its `.cjs` output extension.
 */
const externalLazyLanguagesForCjs: EsbuildPlugin = {
  name: 'external-lazy-languages-for-cjs',
  setup(build) {
    if (build.initialOptions.outExtension?.['.js'] !== '.cjs') {
      return;
    }

    build.onResolve({ filter: /^@\/languages\/[a-z0-9-]+$/ }, (args) =>
      args.kind === 'dynamic-import'
        ? { path: `../languages/${args.path.slice('@/languages/'.length)}.cjs`, external: true }
        : undefined,
    );
  },
};

export default defineConfig({
  entry: {
    api: 'src/api.ts',
    'api/lazy': 'src/api-lazy.ts',
    detect: 'src/domain/detection/detect.ts',
    'detect-slugs': 'src/domain/detection/detect-slugs.ts',
    index: 'src/index.ts',
    i18n: 'src/domain/i18n/index.ts',
    ...languageEntries,
  },
  format: ['esm', 'cjs'],
  dts: true,
  esbuildPlugins: [externalLazyLanguagesForCjs],
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
