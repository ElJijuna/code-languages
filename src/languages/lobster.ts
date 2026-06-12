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
    it: {
      name: 'Lobster',
      description:
        'Linguaggio staticamente tipizzato per giochi e applicazioni grafiche con iterazione rapida.',
      longDescription:
        'Lobster è un linguaggio di programmazione staticamente tipizzato progettato per la programmazione di giochi, grafica interattiva e iterazione rapida. Combina valori in stile funzionale con codice imperativo e un compilatore pensato per mantenere i cicli di feedback brevi.\n\nIl suo ecosistema è piccolo, ma il linguaggio è utile come ambiente compatto per prototipi, esperimenti grafici e lavoro di progettazione linguistica incentrato su giochi e programmi in tempo reale.',
    },
    fr: {
      name: 'Lobster',
      description:
        'Langage de programmation statique pour les jeux et applications graphiques, avec une itération rapide.',
      longDescription:
        "Lobster est un langage de programmation statique conçu pour la programmation de jeux, les graphiques interactifs et l'itération rapide. Il combine des valeurs de style fonctionnel avec du code impératif et un compilateur destiné à maintenir les boucles de rétroaction courtes.\n\nSon écosystème est petit, mais le langage est utile comme environnement compact pour les prototypes, les expériences graphiques et le travail sur la conception de langages axé sur les jeux et les programmes en temps réel.",
    },
    de: {
      name: 'Lobster',
      description:
        'Eine statisch typisierte Sprache für Spiele und grafische Anwendungen mit schneller Iteration.',
      longDescription:
        'Lobster ist eine statisch typisierte Programmiersprache, die für die Entwicklung von Spielen, interaktiven Grafiken und schnelle Prototypen entwickelt wurde. Sie kombiniert funktionale Werte mit imperativer Programmierung und einem Compiler, um kurze Entwicklungszyklen zu ermöglichen.\n\nIhr Ökosystem ist klein, aber die Sprache eignet sich als kompakte Umgebung für Prototypen, grafische Experimente und sprachgestützten Entwurf von Spielen und Echtzeitprogrammen.',
    },
    pt: {
      name: 'Lobster',
      description:
        'Linguagem estaticamente tipada para jogos e aplicações gráficas com iteração rápida.',
      longDescription:
        'Lobster é uma linguagem de programação estaticamente tipada projetada para programação de jogos, gráficos interativos e iteração rápida. Combina valores em estilo funcional com código imperativo e um compilador destinado a manter os ciclos de feedback curtos.\n\nSeu ecossistema é pequeno, mas a linguagem é útil como um ambiente compacto para protótipos, experimentos gráficos e trabalho de design de linguagem focado em jogos e programas em tempo real.',
    },
  },
} satisfies Language;
