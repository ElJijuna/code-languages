import type { Language } from '../types';

export const lobster = {
  slug: 'lobster',
  publishedDate: '2014-01-01',
  extensions: ['.lobster'],
  author: 'Wouter van Oortmerssen',
  website: 'https://strlen.com/lobster/',
  paradigms: ['functional', 'imperative', 'game-development'],
  tooling: {
    runtimes: ['Lobster compiler'],
    ecosystems: ['Games', 'Interactive Graphics', 'Language Experiments'],
  },
  version: 'development snapshot',
  logo: 'https://dummyimage.com/32x32/DC2626/ffffff.png&text=Lo',
  color: '#DC2626',
  i18n: {
    en: {
      name: 'Lobster',
      description:
        'A statically typed language for games and graphical applications with fast iteration.',
      longDescription:
        'Lobster is a statically typed programming language designed for game programming, interactive graphics, and rapid iteration. It combines functional-style values with imperative code and a compiler intended to keep feedback loops short.\n\nIts ecosystem is small, but the language is useful as a compact environment for prototypes, graphics experiments, and language design work focused on games and real-time programs.',
    },
    es: {
      name: 'Lobster',
      description:
        'Lenguaje tipado estaticamente para juegos y aplicaciones graficas con iteracion rapida.',
      longDescription:
        'Lobster es un lenguaje de programacion tipado estaticamente para juegos, graficos interactivos e iteracion rapida. Combina valores de estilo funcional con codigo imperativo y un compilador pensado para ciclos de feedback cortos.\n\nSu ecosistema es pequeno, pero sirve para prototipos, experimentos graficos y trabajo de diseno de lenguajes orientado a programas en tiempo real.',
    },
  },
} satisfies Language;
