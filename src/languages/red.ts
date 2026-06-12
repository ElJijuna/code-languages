import type { Language } from '../types';

export const red = {
  slug: 'red',
  publishedDate: '2011-02-26',
  extensions: ['.red', '.reds'],
  author: 'Nenad Rakocevic',
  website: 'https://www.red-lang.org',
  paradigms: ['imperative', 'functional', 'symbolic'],
  tooling: {
    runtimes: ['Red toolchain', 'Red/System'],
    ecosystems: ['Scripting', 'GUI Applications', 'Systems Experiments'],
  },
  version: '0.6.6',
  logo: 'https://static.red-lang.org/red-logo.svg',
  color: '#F00000',
  i18n: {
    en: {
      name: 'Red',
      description:
        'A Rebol-inspired language spanning high-level scripting and low-level Red/System code.',
      longDescription:
        'Red is a language inspired by Rebol that aims to cover a broad range from symbolic high-level scripting to lower-level systems programming through Red/System. It emphasizes compact syntax, DSL-friendly data notation, and GUI-oriented workflows.\n\nThe project is used for scripts, small desktop tools, experiments, and applications that benefit from homoiconic data, concise notation, and a single distribution with compiler and runtime pieces.',
    },
    es: {
      name: 'Red',
      description:
        'Lenguaje inspirado en Rebol que cubre scripting de alto nivel y codigo Red/System.',
      longDescription:
        'Red es un lenguaje inspirado en Rebol que busca cubrir desde scripting simbolico de alto nivel hasta programacion de sistemas con Red/System. Enfatiza sintaxis compacta, notacion de datos apta para DSLs y flujos orientados a GUI.\n\nSe usa en scripts, herramientas pequenas de escritorio, experimentos y apps que aprovechan datos homoiconicos, notacion concisa y una distribucion con compilador y runtime.',
    },
  },
} satisfies Language;
