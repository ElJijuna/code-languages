import type { Language } from '../types';

export const io = {
  slug: 'io',
  publishedDate: '2002-03-07',
  extensions: ['.io'],
  author: 'Steve Dekorte',
  website: 'https://iolanguage.org',
  paradigms: ['prototype-based', 'object-oriented', 'dynamic'],
  tooling: {
    runtimes: ['Io VM'],
    ecosystems: ['Scripting', 'Prototype Programming', 'Language Exploration'],
  },
  version: '2017.09.06',
  logo: 'https://dummyimage.com/32x32/2563EB/ffffff.png&text=Io',
  color: '#2563EB',
  i18n: {
    en: {
      name: 'Io',
      description:
        'A small prototype-based language focused on message passing and minimal syntax.',
      longDescription:
        'Io is a dynamic prototype-based language inspired by Smalltalk, Self, Lisp, and Lua. Its object model is based on cloning prototypes and sending messages rather than class declarations.\n\nThe language has a compact syntax, coroutines, actors, reflection, and an embeddable runtime, making it a useful reference point for prototype programming and language design.',
    },
    es: {
      name: 'Io',
      description: 'Un lenguaje pequeno basado en prototipos, paso de mensajes y sintaxis minima.',
      longDescription:
        'Io es un lenguaje dinamico basado en prototipos e inspirado por Smalltalk, Self, Lisp y Lua. Su modelo usa clonacion y envio de mensajes, no clases.\n\nIncluye sintaxis compacta, corrutinas, actores, reflexion y runtime embebible.',
    },
  },
} satisfies Language;
