import type { Language } from '../types';

export const mathematica = {
  slug: 'mathematica',
  publishedDate: '1988-06-23',
  extensions: ['.wl', '.wls', '.nb'],
  author: 'Stephen Wolfram / Wolfram Research',
  website: 'https://www.wolfram.com/language/',
  paradigms: ['symbolic', 'functional', 'rule-based', 'notebook'],
  tooling: {
    runtimes: ['Wolfram Engine', 'Wolfram Cloud', 'Mathematica'],
    ecosystems: ['Scientific Computing', 'Symbolic Computing', 'Notebooks'],
  },
  version: '14.3',
  logo: 'https://cdn.simpleicons.org/wolfram/DD1100',
  color: '#DD1100',
  i18n: {
    en: {
      name: 'Wolfram Language',
      description: 'A symbolic computation language used by Mathematica and Wolfram tools.',
      longDescription:
        'The Wolfram Language combines symbolic expressions, functional programming, pattern rules, notebooks, visualization, and a large knowledge-oriented standard library. Mathematica is its best-known interactive environment.\n\nIt is used for mathematics, modeling, data science, research notebooks, education, automation, and computational reports that benefit from symbolic and numeric workflows.',
    },
    es: {
      name: 'Wolfram Language',
      description:
        'Un lenguaje de computacion simbolica usado por Mathematica y herramientas Wolfram.',
      longDescription:
        'Wolfram Language combina expresiones simbolicas, programacion funcional, reglas por patrones, notebooks, visualizacion y una biblioteca estandar orientada al conocimiento. Mathematica es su entorno interactivo mas conocido.\n\nSe usa en matematicas, modelado, ciencia de datos, notebooks de investigacion, educacion, automatizacion y reportes computacionales con flujos simbolicos y numericos.',
    },
    it: {
      name: 'Wolfram Language',
      description:
        'Un linguaggio di calcolo simbolico utilizzato da Mathematica e dagli strumenti Wolfram.',
      longDescription:
        "Il Wolfram Language combina espressioni simboliche, programmazione funzionale, regole di pattern, notebook, visualizzazione e una vasta libreria standard orientata alla conoscenza. Mathematica e il suo ambiente interattivo piu noto.\n\nViene utilizzato per la matematica, la modellazione, la scienza dei dati, notebook di ricerca, l'istruzione, l'automazione e report computazionali che beneficiano di flussi di lavoro simbolici e numerici.",
    },
    fr: {
      name: 'Wolfram Language',
      description: 'Un langage de calcul symbolique utilise par Mathematica et les outils Wolfram.',
      longDescription:
        "Le Wolfram Language combine des expressions symboliques, la programmation fonctionnelle, des regles de motifs, des notebooks, la visualisation et une grande bibliotheque standard orientee connaissances. Mathematica est son environnement interactif le plus connu.\n\nIl est utilise pour les mathematiques, la modelisation, la science des donnees, les notebooks de recherche, l'education, l'automatisation et les rapports de calcul qui beneficient des flux de travail symboliques et numeriques.",
    },
    de: {
      name: 'Wolfram Language',
      description:
        'Eine symbolische Programmiersprache, die in Mathematica und Wolfram-Tools verwendet wird.',
      longDescription:
        'Die Wolfram-Sprache kombiniert symbolische Ausdr\u00fccke, funktionale Programmierung, Musterregeln, Notizen, Visualisierung und eine umfangreiche, wissensbasierte Standardbibliothek. Mathematica ist ihre bekannteste interaktive Umgebung.\n\nSie wird f\u00fcr Mathematik, Modellierung, Data Science, Forschungsnotizen, Bildung, Automatisierung und rechnergest\u00fctzte Berichte verwendet, die von symbolischen und numerischen Arbeitsabl\u00e4ufen profitieren.',
    },
    pt: {
      name: 'Wolfram Language',
      description:
        'Linguagem de computa\u00e7\u00e3o simb\u00f3lica usada em Mathematica e ferramentas Wolfram.',
      longDescription:
        'A Wolfram Language combina express\u00f5es simb\u00f3licas, programa\u00e7\u00e3o funcional, regras de padr\u00e3o, notebooks, visualiza\u00e7\u00e3o e uma grande biblioteca padr\u00e3o orientada ao conhecimento. Mathematica \u00e9 seu ambiente interativo mais conhecido.\n\n\u00c9 usada para matem\u00e1tica, modelagem, ci\u00eancia de dados, notebooks de pesquisa, educa\u00e7\u00e3o, automa\u00e7\u00e3o e relat\u00f3rios computacionais que se beneficiam de fluxos de trabalho simb\u00f3licos e num\u00e9ricos.',
    },
  },
} satisfies Language;
