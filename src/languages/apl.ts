import type { Language } from '../types';

export const apl = {
  slug: 'apl',
  publishedDate: '1966-11-01',
  extensions: ['.apl', '.dyalog'],
  author: 'Kenneth E. Iverson',
  website: 'https://www.dyalog.com',
  paradigms: ['array', 'functional', 'interactive'],
  tooling: {
    runtimes: ['Dyalog APL', 'GNU APL', 'NARS2000'],
    ecosystems: ['Array Programming', 'Data Analysis', 'Financial Computing'],
  },
  version: 'ISO/IEC 13751:2001',
  logo: 'https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_apl.svg',
  color: '#5A8164',
  i18n: {
    en: {
      name: 'APL',
      description:
        'An array-oriented language known for concise symbolic notation and interactive use.',
      longDescription:
        'APL centers computation around arrays, higher-order operations, and a compact mathematical notation that can express complex transformations in very little code.\n\nIt has influenced many array languages and remains useful in exploratory analysis, financial modeling, algorithm design, and systems where terse interactive computation is valuable.',
    },
    es: {
      name: 'APL',
      description:
        'Un lenguaje orientado a arreglos conocido por su notacion simbolica concisa y uso interactivo.',
      longDescription:
        'APL centra la computacion en arreglos, operaciones de orden superior y una notacion matematica compacta que puede expresar transformaciones complejas en muy poco codigo.\n\nHa influido en muchos lenguajes de arreglos y sigue siendo util en analisis exploratorio, modelos financieros, diseno de algoritmos y sistemas donde la computacion interactiva concisa aporta valor.',
    },
    it: {
      name: 'APL',
      description:
        "Un linguaggio orientato agli array, noto per la sua notazione simbolica concisa e l'uso interattivo.",
      longDescription:
        "APL pone il calcolo al centro degli array, delle operazioni di ordine superiore e di una notazione matematica compatta che puo esprimere trasformazioni complesse con pochissimo codice.\n\nHa influenzato molti linguaggi orientati agli array e rimane utile nell'analisi esplorativa, nella modellazione finanziaria, nella progettazione di algoritmi e nei sistemi in cui e preziosa la computazione interattiva concisa.",
    },
    fr: {
      name: 'APL',
      description:
        'Un langage oriente tableaux, connu pour sa notation symbolique concise et son utilisation interactive.',
      longDescription:
        "APL centre le calcul autour des tableaux, des operations de haut niveau et d'une notation mathematique concise qui peut exprimer des transformations complexes avec tres peu de code.\n\nIl a influence de nombreux langages de tableaux et reste utile pour l'analyse exploratoire, la modelisation financiere, la conception d'algorithmes et les systemes ou une computation interactive concise est precieuse.",
    },
    de: {
      name: 'APL',
      description:
        'Eine Array-orientierte Sprache, bekannt für prägnante symbolische Notation und interaktive Nutzung.',
      longDescription:
        'APL konzentriert sich auf Array-basierte Berechnungen, höherwertige Operationen und eine kompakte mathematische Notation, die komplexe Transformationen in sehr wenig Code ausdrücken kann.\n\nSie hat viele Array-Sprachen beeinflusst und ist weiterhin nützlich für explorative Analyse, Finanzmodellierung, Algorithmusdesign und Systeme, in denen kurze interaktive Berechnungen von Vorteil sind.',
    },
    pt: {
      name: 'APL',
      description:
        'Linguagem orientada a arrays, conhecida por notação simbólica concisa e uso interativo.',
      longDescription:
        'APL centraliza a computação em arrays, operações de ordem superior e uma notação matemática compacta que pode expressar transformações complexas com muito pouco código.\n\nInfluenciou muitas linguagens de arrays e continua útil em análise exploratória, modelagem financeira, design de algoritmos e sistemas onde a computação interativa concisa é valiosa.',
    },
  },
} satisfies Language;
