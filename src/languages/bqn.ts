import type { Language } from '../types';

export const bqn = {
  slug: 'bqn',
  publishedDate: '2020-01-01',
  extensions: ['.bqn'],
  author: 'Marshall Lochbaum',
  website: 'https://mlochbaum.github.io/BQN/',
  paradigms: ['array', 'functional', 'tacit'],
  tooling: {
    runtimes: ['CBQN', 'BQN.js'],
    ecosystems: ['Array Programming', 'Data Transformation', 'Recreational Computing'],
  },
  version: 'BQN specification',
  logo: 'https://dummyimage.com/32x32/7C3AED/ffffff.png&text=BQN',
  color: '#7C3AED',
  i18n: {
    en: {
      name: 'BQN',
      description:
        'An array programming language in the APL family with modern notation and tacit features.',
      longDescription:
        'BQN is an array-oriented language influenced by APL, J, and K. It uses concise symbols to express operations over arrays, functions, modifiers, and trains.\n\nIt is used for compact data manipulation, algorithm exploration, teaching array thinking, and experiments with high-level notation backed by interpreters such as CBQN and BQN.js.',
    },
    es: {
      name: 'BQN',
      description:
        'Un lenguaje de programacion de arreglos de la familia APL con notacion moderna.',
      longDescription:
        'BQN es un lenguaje orientado a arreglos influido por APL, J y K. Usa simbolos concisos para expresar operaciones sobre arreglos, funciones y modificadores.\n\nSe usa para manipulacion compacta de datos, exploracion de algoritmos y ensenanza de pensamiento basado en arreglos.',
    },
  },
} satisfies Language;
