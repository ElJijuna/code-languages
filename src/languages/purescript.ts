import type { Language } from '../types';

export const purescript = {
  slug: 'purescript',
  publishedDate: '2013-09-01',
  extensions: ['.purs'],
  author: 'Phil Freeman / PureScript contributors',
  website: 'https://www.purescript.org',
  paradigms: ['functional', 'pure', 'statically typed', 'declarative'],
  tooling: {
    runtimes: ['JavaScript', 'Node.js'],
    packageManagers: ['Spago', 'npm'],
    ecosystems: ['Web', 'Functional Programming', 'JavaScript'],
  },
  version: '0.15.15',
  logo: 'https://cdn.simpleicons.org/purescript/14161A',
  color: '#14161A',
  i18n: {
    en: {
      name: 'PureScript',
      description: 'A strongly typed purely functional language that compiles to JavaScript.',
      longDescription:
        'PureScript brings algebraic data types, type classes, effects, modules, row polymorphism, and a Haskell-influenced functional model to JavaScript targets. Its compiler emits readable JavaScript and works with foreign JavaScript modules.\n\nIt is used for front-end applications, libraries, typed domain models, functional architecture, and JavaScript projects that want explicit effect handling.',
    },
    es: {
      name: 'PureScript',
      description: 'Un lenguaje funcional puro y fuertemente tipado que compila a JavaScript.',
      longDescription:
        'PureScript lleva tipos algebraicos, type classes, efectos, modulos, row polymorphism y un modelo funcional influido por Haskell a objetivos JavaScript. Su compilador emite JavaScript legible e interoperable con modulos externos.\n\nSe usa en aplicaciones front-end, bibliotecas, modelos de dominio tipados, arquitectura funcional y proyectos JavaScript que buscan manejo explicito de efectos.',
    },
    it: {
      name: 'PureScript',
      description: 'Un linguaggio funzionale puramente tipizzato, che compila in JavaScript.',
      longDescription:
        'PureScript porta tipi di dati algebrici, classi di tipi, effetti, moduli, polimorfismo di riga e un modello funzionale influenzato da Haskell a destinazioni JavaScript. Il suo compilatore produce JavaScript leggibile e funziona con moduli JavaScript esterni.\n\nViene utilizzato per applicazioni front-end, librerie, modelli di dominio tipizzati, architettura funzionale e progetti JavaScript che desiderano un controllo esplicito degli effetti.',
    },
    fr: {
      name: 'PureScript',
      description:
        'Un langage de programmation fonctionnel et fortement type qui compile vers JavaScript.',
      longDescription:
        "PureScript apporte des types de donnees algebriques, des classes de types, des effets, des modules, la polymorphie de lignes et un modele fonctionnel influence par Haskell a des cibles JavaScript. Son compilateur produit du JavaScript lisible et fonctionne avec des modules JavaScript etrangers.\n\nIl est utilise pour les applications front-end, les bibliotheques, les modeles de domaine types, l'architecture fonctionnelle et les projets JavaScript qui souhaitent une gestion explicite des effets.",
    },
    de: {
      name: 'PureScript',
      description: 'Eine stark typisierte, rein funktionale Sprache, die zu JavaScript kompiliert.',
      longDescription:
        'PureScript bringt algebraische Datentypen, Typklassen, Effekte, Module, Row-Polymorphie und ein Haskell-\u00e4hnliches funktionales Modell zu JavaScript-Zielen. Der Compiler erzeugt lesbaren JavaScript-Code und arbeitet mit externen JavaScript-Modulen.\n\nEs wird f\u00fcr Front-End-Anwendungen, Bibliotheken, typisierte Domain-Modelle, funktionale Architekturen und JavaScript-Projekte verwendet, die explizite Effektbehandlung ben\u00f6tigen.',
    },
    pt: {
      name: 'PureScript',
      description:
        'Uma linguagem puramente funcional e fortemente tipada que compila para JavaScript.',
      longDescription:
        'PureScript traz tipos de dados alg\u00e9bricos, classes de tipo, efeitos, m\u00f3dulos, polimorfismo de linha e um modelo funcional influenciado pelo Haskell para destinos JavaScript. Seu compilador emite JavaScript leg\u00edvel e funciona com m\u00f3dulos JavaScript estrangeiros.\n\n\u00c9 usado para aplica\u00e7\u00f5es front-end, bibliotecas, modelos de dom\u00ednio tipados, arquitetura funcional e projetos JavaScript que desejam manipula\u00e7\u00e3o expl\u00edcita de efeitos.',
    },
  },
} satisfies Language;
