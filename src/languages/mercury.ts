import type { Language } from '../types';

export const mercury = {
  slug: 'mercury',
  publishedDate: '1995-04-08',
  extensions: ['.m'],
  author: 'University of Melbourne',
  website: 'https://www.mercurylang.org',
  paradigms: ['logic', 'functional', 'declarative'],
  tooling: {
    runtimes: ['Melbourne Mercury Compiler'],
    packageManagers: ['mmc build tooling'],
    ecosystems: ['Logic Programming', 'Declarative Systems', 'Academic Computing'],
  },
  version: '22.01.8',
  logo: 'https://dummyimage.com/32x32/0891B2/ffffff.png&text=Me',
  color: '#0891B2',
  i18n: {
    en: {
      name: 'Mercury',
      description:
        'A pure logic and functional language with strong static typing and determinism analysis.',
      longDescription:
        'Mercury is a declarative programming language that combines logic programming with functional programming, strong static typing, modes, and determinism analysis. It aims to make logic programs more reliable and efficient for larger software.\n\nMercury is used in research, compiler work, and specialized systems where Prolog-like relations benefit from compile-time checks, explicit module structure, and predictable execution behavior.',
    },
    es: {
      name: 'Mercury',
      description:
        'Lenguaje logico y funcional puro con tipado estatico fuerte y analisis de determinismo.',
      longDescription:
        'Mercury es un lenguaje declarativo que combina programacion logica y funcional con tipado estatico fuerte, modos y analisis de determinismo. Busca que programas de estilo logico sean mas fiables y eficientes en software grande.\n\nSe usa en investigacion, compiladores y sistemas especializados donde relaciones estilo Prolog se benefician de chequeos en compilacion, modulos explicitos y ejecucion predecible.',
    },
  },
} satisfies Language;
