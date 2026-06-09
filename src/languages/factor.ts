import type { Language } from '../types';

export const factor = {
  slug: 'factor',
  publishedDate: '2003-01-01',
  extensions: ['.factor'],
  author: 'Slava Pestov',
  website: 'https://factorcode.org',
  paradigms: ['concatenative', 'functional', 'stack-based'],
  tooling: {
    runtimes: ['Factor VM'],
    packageManagers: ['Factor vocabularies'],
    ecosystems: ['Interactive Development', 'Language Research', 'Desktop Tools'],
  },
  version: '0.101',
  logo: 'https://dummyimage.com/32x32/F97316/ffffff.png&text=F',
  color: '#F97316',
  i18n: {
    en: {
      name: 'Factor',
      description:
        'A concatenative, stack-based language with an interactive image and rich standard library.',
      longDescription:
        'Factor is a concatenative programming language where programs are composed by chaining words that transform a data stack. It includes an optimizing compiler, interactive environment, and image-based workflow.\n\nIts ecosystem includes libraries called vocabularies for UI, parsing, networking, math, databases, and tooling, making it useful for language experimentation and interactive development.',
    },
    es: {
      name: 'Factor',
      description:
        'Un lenguaje concatenativo basado en pila con imagen interactiva y biblioteca amplia.',
      longDescription:
        'Factor es un lenguaje concatenativo donde los programas encadenan palabras que transforman una pila de datos. Incluye compilador optimizador y entorno interactivo.\n\nSu ecosistema usa vocabularios para UI, parsing, redes, matematicas, bases de datos y herramientas.',
    },
  },
} satisfies Language;
