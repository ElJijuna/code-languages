import type { Language } from '@/types';

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
  logo: 'https://mlochbaum.github.io/BQN/favicon.ico',
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
    it: {
      name: 'BQN',
      description:
        'Linguaggio di programmazione basato su array, parte della famiglia APL, con notazione moderna e funzionalità implicite.',
      longDescription:
        "BQN è un linguaggio orientato agli array influenzato da APL, J e K. Utilizza simboli concisi per esprimere operazioni su array, funzioni, modificatori e training.\n\nÈ utilizzato per la manipolazione compatta dei dati, l'esplorazione di algoritmi, l'insegnamento del pensiero basato sugli array e esperimenti con notazioni di alto livello supportate da interpreti come CBQN e BQN.js.",
    },
    fr: {
      name: 'BQN',
      description:
        'Langage de programmation basé sur les tableaux, de la famille APL, avec une notation moderne et des fonctionnalités tacites.',
      longDescription:
        "BQN est un langage orienté tableaux influencé par APL, J et K. Il utilise des symboles concis pour exprimer des opérations sur les tableaux, les fonctions, les modificateurs et les ensembles de données.\n\nIl est utilisé pour la manipulation compacte des données, l'exploration d'algorithmes, l'enseignement de la pensée basée sur les tableaux et les expériences avec une notation de haut niveau, soutenue par des interpréteurs tels que CBQN et BQN.js.",
    },
    de: {
      name: 'BQN',
      description:
        'Eine Array-Programmiersprache der APL-Familie mit moderner Notation und impliziten Funktionen.',
      longDescription:
        'BQN ist eine array-orientierte Sprache, die von APL, J und K beeinflusst wurde. Sie verwendet prägnante Symbole zur Darstellung von Operationen über Arrays, Funktionen, Modifikatoren und Trains.\n\nSie wird für kompakte Datenmanipulation, Algorithmusexploration, das Unterrichten des Array-Denkens sowie Experimente mit hochrangiger Notation eingesetzt, wobei Interpreten wie CBQN und BQN.js verwendet werden.',
    },
    pt: {
      name: 'BQN',
      description:
        'Linguagem de programação em array, da família APL, com notação moderna e recursos implícitos.',
      longDescription:
        'BQN é uma linguagem orientada a arrays influenciada por APL, J e K. Utiliza símbolos concisos para expressar operações sobre arrays, funções, modificadores e treinamentos.\n\nÉ usada para manipulação de dados compacta, exploração de algoritmos, ensino do pensamento em array e experimentos com notação de alto nível, suportada por interpretadores como CBQN e BQN.js.',
    },
  },
} satisfies Language;
