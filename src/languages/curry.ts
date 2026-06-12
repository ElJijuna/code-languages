import type { Language } from '../types';

export const curry = {
  slug: 'curry',
  publishedDate: '1997-01-01',
  extensions: ['.curry', '.lcurry'],
  author: 'Curry language community',
  website: 'https://www.curry-language.org',
  paradigms: ['functional', 'logic', 'declarative'],
  tooling: {
    runtimes: ['KiCS2', 'PAKCS'],
    packageManagers: ['Curry Package Manager'],
    ecosystems: ['Functional Logic Programming', 'Constraint Solving', 'Research'],
  },
  version: 'Curry 0.9.0',
  logo: 'https://dummyimage.com/32x32/BE123C/ffffff.png&text=Cu',
  color: '#BE123C',
  i18n: {
    en: {
      name: 'Curry',
      description:
        'A functional logic language that combines Haskell-style functions with logic variables.',
      longDescription:
        'Curry combines functional programming with logic programming, enabling lazy evaluation, higher-order functions, logic variables, non-determinism, and constraint-based computation in one language.\n\nIt is used in academic research, teaching declarative programming, symbolic computation, program analysis, and systems that benefit from mixing functional abstraction with logic search.',
    },
    es: {
      name: 'Curry',
      description:
        'Un lenguaje funcional-logico que combina funciones estilo Haskell con variables logicas.',
      longDescription:
        'Curry combina programacion funcional y logica con evaluacion perezosa, funciones de orden superior, variables logicas, no determinismo y restricciones.\n\nSe usa en investigacion, docencia de programacion declarativa, computacion simbolica y analisis de programas.',
    },
    it: {
      name: 'Curry',
      description:
        'Un linguaggio di logica funzionale che combina funzioni allo stile Haskell con variabili logiche.',
      longDescription:
        "Curry combina la programmazione funzionale con la programmazione logica, consentendo valutazione pigra, funzioni di ordine superiore, variabili logiche, non determinismo e calcolo basato su vincoli in un unico linguaggio.\n\nÈ utilizzato nella ricerca accademica, nell'insegnamento della programmazione dichiarativa, nel calcolo simbolico, nell'analisi dei programmi e nei sistemi che beneficiano della combinazione di astrazioni funzionali con la ricerca logica.",
    },
    fr: {
      name: 'Curry',
      description:
        'Un langage de logique fonctionnel combinant des fonctions de style Haskell avec des variables logiques.',
      longDescription:
        "Curry combine la programmation fonctionnelle et la programmation logique, permettant l'évaluation paresseuse, les fonctions d'ordre supérieur, les variables logiques, le non-déterminisme et le calcul basé sur des contraintes dans un seul langage.\n\nIl est utilisé dans la recherche académique, pour enseigner la programmation déclarative, la computation symbolique, l'analyse de programmes et les systèmes qui bénéficient du mélange de l'abstraction fonctionnelle avec la recherche logique.",
    },
    de: {
      name: 'Curry',
      description:
        'Eine funktionale Logiksprache, die Haskell-ähnliche Funktionen mit logischen Variablen kombiniert.',
      longDescription:
        'Curry vereint funktionale Programmierung mit Logikprogrammierung und ermöglicht Lazy Evaluation, Higher-Order Functions, logische Variablen, Nichtdeterminismus und constraint-basierte Berechnung in einer Sprache.\n\nEs wird in akademischer Forschung, Lehre von deklarativer Programmierung, symbolischer Berechnung, Programmanalyse und Systemen eingesetzt, die von der Kombination funktionaler Abstraktion mit logischem Suchen profitieren.',
    },
    pt: {
      name: 'Curry',
      description:
        'Linguagem de lógica funcional que combina funções no estilo Haskell com variáveis lógicas.',
      longDescription:
        'Curry combina programação funcional com programação lógica, permitindo avaliação preguiçosa, funções de ordem superior, variáveis lógicas, não-determinismo e computação baseada em restrições em uma única linguagem.\n\nÉ utilizada em pesquisa acadêmica, ensino de programação declarativa, computação simbólica, análise de programas e sistemas que se beneficiam da combinação de abstração funcional com busca lógica.',
    },
  },
} satisfies Language;
