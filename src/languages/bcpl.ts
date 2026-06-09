import type { Language } from '../types';

export const bcpl = {
  slug: 'bcpl',
  publishedDate: '1967-01-01',
  extensions: ['.bcpl'],
  author: 'Martin Richards',
  website: 'https://www.cl.cam.ac.uk/~mr10/BCPL.html',
  paradigms: ['imperative', 'procedural', 'systems'],
  tooling: {
    runtimes: ['Cintsys BCPL', 'Classic BCPL compilers'],
    ecosystems: ['Systems Programming', 'Operating Systems', 'Language History'],
  },
  version: 'Cintsys BCPL',
  logo: 'https://dummyimage.com/32x32/374151/ffffff.png&text=BC',
  color: '#374151',
  i18n: {
    en: {
      name: 'BCPL',
      description:
        'A compact systems language that influenced B and C through typeless procedural programming.',
      longDescription:
        'BCPL was designed as a small, portable systems language with a simple compiler and a typeless model suited to early operating systems and compiler work.\n\nIts syntax, block structure, braces, comments, and procedural style influenced B and C, making it an important ancestor of modern systems programming languages.',
    },
    es: {
      name: 'BCPL',
      description:
        'Un lenguaje compacto de sistemas que influyo en B y C con programacion procedural.',
      longDescription:
        'BCPL fue disenado como un lenguaje de sistemas pequeno y portable, con compilador simple y modelo sin tipos para sistemas operativos tempranos.\n\nSu sintaxis, bloques, llaves, comentarios y estilo procedural influyeron en B y C.',
    },
  },
} satisfies Language;
