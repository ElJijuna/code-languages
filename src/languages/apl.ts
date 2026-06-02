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
        'Eine Array-orientierte Sprache, bekannt f\u00fcr pr\u00e4gnante symbolische Notation und interaktive Nutzung.',
      longDescription:
        'APL konzentriert sich auf Array-basierte Berechnungen, h\u00f6herwertige Operationen und eine kompakte mathematische Notation, die komplexe Transformationen in sehr wenig Code ausdr\u00fccken kann.\n\nSie hat viele Array-Sprachen beeinflusst und ist weiterhin n\u00fctzlich f\u00fcr explorative Analyse, Finanzmodellierung, Algorithmusdesign und Systeme, in denen kurze interaktive Berechnungen von Vorteil sind.',
    },
    pt: {
      name: 'APL',
      description:
        'Linguagem orientada a arrays, conhecida por nota\u00e7\u00e3o simb\u00f3lica concisa e uso interativo.',
      longDescription:
        'APL centraliza a computa\u00e7\u00e3o em arrays, opera\u00e7\u00f5es de ordem superior e uma nota\u00e7\u00e3o matem\u00e1tica compacta que pode expressar transforma\u00e7\u00f5es complexas com muito pouco c\u00f3digo.\n\nInfluenciou muitas linguagens de arrays e continua \u00fatil em an\u00e1lise explorat\u00f3ria, modelagem financeira, design de algoritmos e sistemas onde a computa\u00e7\u00e3o interativa concisa \u00e9 valiosa.',
    },
  },
} satisfies Language;
