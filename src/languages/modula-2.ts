import type { Language } from '../types';

export const modula2 = {
  slug: 'modula-2',
  publishedDate: '1978-01-01',
  extensions: ['.mod', '.def'],
  author: 'Niklaus Wirth',
  website: 'https://www.modula2.org',
  paradigms: ['imperative', 'procedural', 'modular'],
  tooling: {
    runtimes: ['GNU Modula-2', 'ADW Modula-2', 'Classic compilers'],
    ecosystems: ['Systems Programming', 'Education', 'Language History'],
  },
  version: 'ISO/IEC 10514-1:1996',
  logo: 'https://dummyimage.com/32x32/2563EB/ffffff.png&text=M2',
  color: '#2563EB',
  i18n: {
    en: {
      name: 'Modula-2',
      description:
        'A modular systems language from Niklaus Wirth with explicit interfaces and modules.',
      longDescription:
        'Modula-2 was designed as a successor to Pascal for systems programming and teaching. It emphasizes separate compilation, explicit definition modules, strong typing, coroutines, and structured imperative programming.\n\nThe language influenced later modular languages and remains relevant in compiler history, embedded systems, and educational settings where clear module boundaries and small language design matter.',
    },
    es: {
      name: 'Modula-2',
      description:
        'Lenguaje modular de sistemas de Niklaus Wirth con interfaces y modulos explicitos.',
      longDescription:
        'Modula-2 fue disenado como sucesor de Pascal para sistemas y ensenanza. Enfatiza compilacion separada, modulos de definicion explicitos, tipado fuerte, corrutinas y programacion imperativa estructurada.\n\nInfluyo en lenguajes modulares posteriores y sigue siendo relevante en historia de compiladores, sistemas embebidos y contextos educativos.',
    },
  },
} satisfies Language;
