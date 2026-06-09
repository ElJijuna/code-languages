import type { Language } from '../types';

export const ante = {
  slug: 'ante',
  publishedDate: '2019-01-01',
  extensions: ['.ante'],
  author: 'Evan Haas',
  website: 'https://antelang.org',
  paradigms: ['functional', 'imperative', 'systems'],
  tooling: {
    runtimes: ['Ante compiler'],
    packageManagers: ['Ante package tooling'],
    ecosystems: ['Systems Programming', 'Research', 'Compiler Development'],
  },
  version: 'experimental',
  logo: 'https://dummyimage.com/32x32/4F46E5/ffffff.png&text=A',
  color: '#4F46E5',
  i18n: {
    en: {
      name: 'Ante',
      description:
        'A systems language exploring algebraic effects, type inference, and safe low-level programming.',
      longDescription:
        'Ante is an experimental programming language focused on combining systems-level control with high-level type system features such as algebraic effects, traits, and strong inference.\n\nIt is mainly used for language design research, compiler experimentation, and exploring how effect systems can model IO, mutation, and error handling without losing performance goals.',
    },
    es: {
      name: 'Ante',
      description:
        'Un lenguaje de sistemas que explora efectos algebraicos, inferencia y seguridad.',
      longDescription:
        'Ante es un lenguaje experimental que combina control de bajo nivel con rasgos de sistema de tipos como efectos algebraicos, traits e inferencia fuerte.\n\nSe usa sobre todo para investigacion de lenguajes, experimentos de compiladores y exploracion de sistemas de efectos para IO, mutacion y errores.',
    },
  },
} satisfies Language;
