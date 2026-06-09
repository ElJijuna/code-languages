import type { Language } from '../types';

export const koka = {
  slug: 'koka',
  publishedDate: '2012-01-01',
  extensions: ['.kk'],
  author: 'Daan Leijen',
  website: 'https://koka-lang.github.io',
  paradigms: ['functional', 'effect-oriented', 'strongly typed'],
  tooling: {
    runtimes: ['Koka compiler'],
    packageManagers: ['Koka package tooling'],
    ecosystems: ['Effect Systems', 'Functional Programming', 'Research'],
  },
  version: '3.2.2',
  logo: 'https://dummyimage.com/32x32/0891B2/ffffff.png&text=K',
  color: '#0891B2',
  i18n: {
    en: {
      name: 'Koka',
      description:
        'A functional language with effect types for tracking side effects and resource use.',
      longDescription:
        'Koka is a strongly typed functional language centered on algebraic effect types. Functions describe the effects they may perform, which helps model exceptions, state, IO, and control flow.\n\nIt is used for research and practical experiments in effect systems, with a compiler that targets native and JavaScript environments while keeping memory management predictable.',
    },
    es: {
      name: 'Koka',
      description:
        'Un lenguaje funcional con tipos de efectos para rastrear efectos laterales y recursos.',
      longDescription:
        'Koka es un lenguaje funcional de tipado fuerte centrado en tipos de efectos algebraicos. Las funciones describen los efectos que pueden realizar.\n\nSe usa para investigacion y experimentos practicos en sistemas de efectos, con compilacion a entornos nativos y JavaScript.',
    },
  },
} satisfies Language;
