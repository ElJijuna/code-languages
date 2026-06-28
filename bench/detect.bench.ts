import { bench, describe } from 'vitest';
import { detectLanguage, detectLanguages } from '../src';

const filenames = [
  'src/index.ts',
  'src/App.vue',
  'src/Main.elm',
  'src/chat_server.erl',
  'include/config.h',
  'Dockerfile',
  'CMakeLists.txt',
  'rebar.config',
  'conf/svnserve.conf',
  'docs/README.md',
  'styles/app.scss',
  'scripts/deploy.ps1',
  'src/solver.f90',
  'legacy/compute.for',
  'Shaders/Lighting.metal',
  'unknown/file.not-a-language',
];
const repeatedFilenames = Array.from({ length: 1_000 }, (_, index) => {
  const filename = filenames[index % filenames.length];

  return `packages/pkg-${index}/${filename}`;
});

describe('detect', () => {
  bench('detectLanguage single common extension', () => {
    detectLanguage('src/index.ts');
  });

  bench('detectLanguages ambiguous header', () => {
    detectLanguages('include/config.h');
  });

  bench('detectLanguage exact filename', () => {
    detectLanguage('rebar.config');
  });

  bench('detectLanguage 1k mixed filenames', () => {
    for (const filename of repeatedFilenames) {
      detectLanguage(filename);
    }
  });
});
