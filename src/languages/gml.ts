import type { Language } from '@/types';

export const gml = {
  slug: 'gml',
  publishedDate: '1999-01-01',
  extensions: ['.gml'],
  author: 'YoYo Games',
  website: 'https://gamemaker.io',
  paradigms: ['object-oriented', 'event-driven', 'scripting', 'procedural'],
  tooling: {
    runtimes: ['GameMaker'],
    ecosystems: ['Game Development', '2D Games', 'Indie Games'],
  },
  version: '2024.13.0',
  logo: 'https://cdn.simpleicons.org/gamemaker/000000',
  color: '#71B33C',
  i18n: {
    en: {
      name: 'GML',
      description:
        'GameMaker Language: a scripting language for 2D game development in GameMaker Studio.',
      longDescription:
        'GML (GameMaker Language) is the scripting language used in GameMaker Studio for creating 2D games. It combines an event-driven architecture with a procedural scripting syntax inspired by C, allowing developers to control sprites, objects, rooms, and game logic through code attached to game object events.\n\nGML supports functions, arrays, structs, and lambdas, and has evolved from a simplified drag-and-drop companion into a full-featured language. It targets multiple export platforms including Windows, macOS, Linux, Android, iOS, and consoles. Its accessible design makes it a popular entry point for independent game developers.',
    },
    es: {
      name: 'GML',
      description:
        'GameMaker Language: lenguaje de scripting para desarrollo de juegos 2D en GameMaker Studio.',
      longDescription:
        'GML (GameMaker Language) es el lenguaje de scripting utilizado en GameMaker Studio para crear juegos 2D. Combina una arquitectura orientada a eventos con una sintaxis procedural inspirada en C, permitiendo controlar sprites, objetos, salas y logica de juego mediante codigo adjunto a los eventos de los objetos.\n\nGML admite funciones, arrays, structs y lambdas, y ha evolucionado de un complemento simplificado de arrastrar y soltar a un lenguaje completo. Exporta a multiples plataformas como Windows, macOS, Linux, Android, iOS y consolas. Su diseno accesible lo hace popular entre desarrolladores de juegos independientes.',
    },
    it: {
      name: 'GML',
      description:
        'GameMaker Language: linguaggio di scripting per lo sviluppo di giochi 2D in GameMaker Studio.',
      longDescription:
        'GML (GameMaker Language) e il linguaggio di scripting utilizzato in GameMaker Studio per creare giochi 2D. Combina un architettura event-driven con una sintassi procedurale ispirata al C, consentendo di controllare sprite, oggetti, stanze e logica di gioco tramite codice allegato agli eventi degli oggetti di gioco.\n\nGML supporta funzioni, array, struct e lambda, ed e evoluto da un semplice strumento drag-and-drop a un linguaggio completo. Supporta l esportazione su piu piattaforme tra cui Windows, macOS, Linux, Android, iOS e console. Il suo design accessibile lo rende un punto di ingresso popolare per gli sviluppatori indie.',
    },
    fr: {
      name: 'GML',
      description:
        'GameMaker Language: langage de script pour le developpement de jeux 2D dans GameMaker Studio.',
      longDescription:
        'GML (GameMaker Language) est le langage de script utilise dans GameMaker Studio pour creer des jeux 2D. Il combine une architecture evenementielle avec une syntaxe procedurale inspiree du C, permettant de controler sprites, objets, salles et logique de jeu via du code attache aux evenements des objets de jeu.\n\nGML prend en charge les fonctions, tableaux, structures et lambdas, et a evolue d un simple outil glisser-deposer vers un langage complet. Il cible de nombreuses plateformes d export dont Windows, macOS, Linux, Android, iOS et consoles. Sa conception accessible en fait un point d entree populaire pour les developpeurs independants.',
    },
    de: {
      name: 'GML',
      description:
        'GameMaker Language: Skriptsprache fur 2D-Spieleentwicklung in GameMaker Studio.',
      longDescription:
        'GML (GameMaker Language) ist die Skriptsprache von GameMaker Studio fur die Entwicklung von 2D-Spielen. Sie kombiniert eine ereignisgesteuerte Architektur mit einer prozeduralen, an C angelehnten Syntax und ermoglicht die Steuerung von Sprites, Objekten, Raumen und Spiellogik uber an Ereignisse gebundenen Code.\n\nGML unterstutzt Funktionen, Arrays, Structs und Lambdas und hat sich von einem einfachen Drag-and-Drop-Werkzeug zu einer vollwertigen Sprache entwickelt. Es exportiert auf mehrere Plattformen wie Windows, macOS, Linux, Android, iOS und Konsolen. Sein zugangliches Design macht es zum beliebten Einstiegspunkt fur Indie-Spieleentwickler.',
    },
    pt: {
      name: 'GML',
      description:
        'GameMaker Language: linguagem de script para desenvolvimento de jogos 2D no GameMaker Studio.',
      longDescription:
        'GML (GameMaker Language) e a linguagem de script usada no GameMaker Studio para criar jogos 2D. Combina uma arquitetura orientada a eventos com uma sintaxe procedural inspirada em C, permitindo controlar sprites, objetos, salas e logica de jogo por meio de codigo vinculado aos eventos dos objetos.\n\nGML suporta funcoes, arrays, structs e lambdas, e evoluiu de um simples complemento de arrastar e soltar para uma linguagem completa. Exporta para multiplas plataformas como Windows, macOS, Linux, Android, iOS e consoles. Seu design acessivel o torna um ponto de entrada popular para desenvolvedores de jogos independentes.',
    },
  },
} satisfies Language;
