import type { Language } from '../types';

export const bosque = {
  slug: 'bosque',
  publishedDate: '2019-04-15',
  extensions: ['.bsq'],
  author: 'Microsoft Research',
  website: 'https://github.com/microsoft/BosqueLanguage',
  paradigms: ['functional', 'imperative', 'object-oriented'],
  tooling: {
    runtimes: ['Bosque reference runtime'],
    ecosystems: ['Research', 'Verification', 'Application Logic'],
  },
  version: 'experimental',
  logo: 'https://dummyimage.com/32x32/0078D4/ffffff.png&text=B',
  color: '#0078D4',
  i18n: {
    en: {
      name: 'Bosque',
      description:
        'A Microsoft Research language exploring regularized programming and predictable semantics.',
      longDescription:
        'Bosque is a research programming language from Microsoft Research that explores regularized programming, aiming to reduce incidental complexity in control flow, mutation, and object identity.\n\nIt combines ideas from functional and object-oriented programming with immutable values, algebraic data, structured collections, and semantics meant to support tooling and automated reasoning.',
    },
    es: {
      name: 'Bosque',
      description:
        'Un lenguaje de Microsoft Research sobre programacion regularizada y semantica predecible.',
      longDescription:
        'Bosque es un lenguaje de investigacion de Microsoft Research que explora programacion regularizada para reducir complejidad accidental en control, mutacion e identidad.\n\nCombina ideas funcionales y orientadas a objetos con valores inmutables, datos algebraicos y semantica pensada para herramientas.',
    },
    it: {
      name: 'Bosque',
      description:
        'Linguaggio di ricerca Microsoft che esplora la programmazione regolata e semantiche prevedibili.',
      longDescription:
        "Bosque è un linguaggio di programmazione di ricerca di Microsoft Research che esplora la programmazione regolata, con l'obiettivo di ridurre la complessità involontaria nel flusso di controllo, nella mutazione e nell'identità degli oggetti.\n\nCombina idee dalla programmazione funzionale e orientata agli oggetti con valori immutabili, dati algebrici, raccolte strutturate e semantiche progettate per supportare strumenti e ragionamento automatico.",
    },
    fr: {
      name: 'Bosque',
      description:
        'Langage de recherche Microsoft explorant la programmation régularisée et des sémantiques prévisibles.',
      longDescription:
        "Bosque est un langage de programmation de recherche de Microsoft Research qui explore la programmation régularisée, visant à réduire la complexité inhérente dans le flux de contrôle, la mutation et l'identité d'objet.\n\nIl combine des idées de la programmation fonctionnelle et orientée objet avec des valeurs immuables, des données algébriques, des collections structurées et des sémantiques conçues pour prendre en charge les outils et le raisonnement automatisé.",
    },
    de: {
      name: 'Bosque',
      description:
        'Eine von Microsoft Research entwickelte Programmiersprache, die regulierte Programmierung und vorhersagbare Semantik erforscht.',
      longDescription:
        'Bosque ist eine Forschungsprogrammiersprache von Microsoft Research, die regulierte Programmierung erforscht und darauf abzielt, unbeabsichtigte Komplexität in Kontrollflüssen, Mutation und Objektidentität zu reduzieren.\n\nEs kombiniert Ideen aus funktionaler und objektorientierter Programmierung mit unveränderlichen Werten, algebraischen Datenstrukturen, strukturierten Sammlungen und Semantiken, die darauf ausgelegt sind, Werkzeuge und automatisierte Schlussfolgerung zu unterstützen.',
    },
    pt: {
      name: 'Bosque',
      description:
        'Linguagem de pesquisa da Microsoft Research que explora programação regularizada e semântica previsível.',
      longDescription:
        'Bosque é uma linguagem de programação de pesquisa da Microsoft Research que explora a programação regularizada, visando reduzir a complexidade acidental no fluxo de controle, mutação e identidade de objetos.\n\nCombina ideias de programação funcional e orientada a objetos com valores imutáveis, dados algébricos, coleções estruturadas e semântica projetada para suportar ferramentas e raciocínio automatizado.',
    },
  },
} satisfies Language;
