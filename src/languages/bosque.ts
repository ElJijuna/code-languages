import type { Language } from '../types';

export const bosque = {
  slug: 'bosque',
  publishedDate: '2019-04-15',
  extensions: ['.bsq'],
  author: 'Microsoft Research',
  website: 'https://github.com/microsoft/BosqueLanguage',
  paradigms: ['functional', 'imperative', 'object-oriented'],
  tooling: {
    runtimes: ['Bosque reference runtime'],
    ecosystems: ['Research', 'Verification', 'Application Logic'],
  },
  version: 'experimental',
  logo: 'https://dummyimage.com/32x32/0078D4/ffffff.png&text=B',
  color: '#0078D4',
  i18n: {
    en: {
      name: 'Bosque',
      description:
        'A Microsoft Research language exploring regularized programming and predictable semantics.',
      longDescription:
        'Bosque is a research programming language from Microsoft Research that explores regularized programming, aiming to reduce incidental complexity in control flow, mutation, and object identity.\n\nIt combines ideas from functional and object-oriented programming with immutable values, algebraic data, structured collections, and semantics meant to support tooling and automated reasoning.',
    },
    es: {
      name: 'Bosque',
      description:
        'Un lenguaje de Microsoft Research sobre programacion regularizada y semantica predecible.',
      longDescription:
        'Bosque es un lenguaje de investigacion de Microsoft Research que explora programacion regularizada para reducir complejidad accidental en control, mutacion e identidad.\n\nCombina ideas funcionales y orientadas a objetos con valores inmutables, datos algebraicos y semantica pensada para herramientas.',
    },
  },
} satisfies Language;
