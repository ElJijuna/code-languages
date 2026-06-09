import type { Language } from '../types';

export const curry = {
  slug: 'curry',
  publishedDate: '1997-01-01',
  extensions: ['.curry', '.lcurry'],
  author: 'Curry language community',
  website: 'https://www.curry-language.org',
  paradigms: ['functional', 'logic', 'declarative'],
  tooling: {
    runtimes: ['KiCS2', 'PAKCS'],
    packageManagers: ['Curry Package Manager'],
    ecosystems: ['Functional Logic Programming', 'Constraint Solving', 'Research'],
  },
  version: 'Curry 0.9.0',
  logo: 'https://dummyimage.com/32x32/BE123C/ffffff.png&text=Cu',
  color: '#BE123C',
  i18n: {
    en: {
      name: 'Curry',
      description:
        'A functional logic language that combines Haskell-style functions with logic variables.',
      longDescription:
        'Curry combines functional programming with logic programming, enabling lazy evaluation, higher-order functions, logic variables, non-determinism, and constraint-based computation in one language.\n\nIt is used in academic research, teaching declarative programming, symbolic computation, program analysis, and systems that benefit from mixing functional abstraction with logic search.',
    },
    es: {
      name: 'Curry',
      description:
        'Un lenguaje funcional-logico que combina funciones estilo Haskell con variables logicas.',
      longDescription:
        'Curry combina programacion funcional y logica con evaluacion perezosa, funciones de orden superior, variables logicas, no determinismo y restricciones.\n\nSe usa en investigacion, docencia de programacion declarativa, computacion simbolica y analisis de programas.',
    },
  },
} satisfies Language;
