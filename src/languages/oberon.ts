import type { Language } from '../types';

export const oberon = {
  slug: 'oberon',
  publishedDate: '1987-01-01',
  extensions: ['.ob', '.mod'],
  author: 'Niklaus Wirth',
  website: 'https://people.inf.ethz.ch/wirth/Oberon/',
  paradigms: ['imperative', 'procedural', 'modular'],
  tooling: {
    runtimes: ['Oberon System', 'Oxford Oberon-2 compiler', 'Classic compilers'],
    ecosystems: ['Operating Systems', 'Education', 'Language Design'],
  },
  version: 'Oberon-2',
  logo: 'https://dummyimage.com/32x32/0F766E/ffffff.png&text=Ob',
  color: '#0F766E',
  i18n: {
    en: {
      name: 'Oberon',
      description:
        'A compact Pascal-family language with modules, type extension, and system roots.',
      longDescription:
        'Oberon is a compact language and operating-system project created by Niklaus Wirth and Jurg Gutknecht. The language simplifies Modula-2 while adding type extension and a small, strongly typed module system.\n\nOberon is important in operating-system research, compiler construction, and teaching because it shows how a small language, compiler, and environment can form a coherent software system.',
    },
    es: {
      name: 'Oberon',
      description:
        'Lenguaje compacto de la familia Pascal con modulos, extension de tipos y raices de sistema.',
      longDescription:
        'Oberon es un lenguaje y proyecto de sistema operativo creado por Niklaus Wirth y Jurg Gutknecht. Simplifica Modula-2 y agrega extension de tipos junto con un sistema de modulos pequeno y fuertemente tipado.\n\nEs importante en investigacion de sistemas operativos, construccion de compiladores y ensenanza porque muestra como lenguaje, compilador y entorno pueden formar un sistema coherente.',
    },
  },
} satisfies Language;
