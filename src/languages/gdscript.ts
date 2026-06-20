import type { Language } from '../types';

export const gdscript = {
  slug: 'gdscript',
  publishedDate: '2014-12-15',
  extensions: ['.gd'],
  author: 'Juan Linietsky, Ariel Manzur / Godot contributors',
  website: 'https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/',
  paradigms: ['object-oriented', 'imperative', 'event-driven', 'scripting'],
  tooling: {
    runtimes: ['Godot Engine'],
    packageManagers: ['Godot Asset Library'],
    ecosystems: ['Game Development', '2D Games', '3D Games'],
  },
  version: '4.7',
  logo: 'https://cdn.simpleicons.org/godotengine/478CBF',
  color: '#478CBF',
  i18n: {
    en: {
      name: 'GDScript',
      description: "Godot Engine's integrated scripting language for gameplay and editor logic.",
      longDescription:
        'GDScript is a high-level scripting language built for Godot Engine. It uses indentation-based syntax, dynamic and optional static typing, signals, scene-node integration, coroutines, resources, and editor-aware tooling tailored to game development.\n\nIt is used to implement gameplay, UI behavior, tools, animation logic, prototypes, editor plugins, and scripts that interact closely with Godot scenes and engine APIs.',
    },
    es: {
      name: 'GDScript',
      description:
        'El lenguaje de scripting integrado de Godot Engine para gameplay y logica de editor.',
      longDescription:
        'GDScript es un lenguaje de scripting de alto nivel creado para Godot Engine. Usa sintaxis basada en indentacion, tipado dinamico y estatico opcional, senales, integracion con nodos de escena, corrutinas, recursos y tooling del editor orientado al desarrollo de juegos.\n\nSe usa para implementar gameplay, comportamiento de UI, herramientas, logica de animacion, prototipos, plugins del editor y scripts que interactuan de cerca con escenas y APIs de Godot.',
    },
    it: {
      name: 'GDScript',
      description:
        "Linguaggio di scripting integrato del Godot Engine per la logica di gioco e dell'editor.",
      longDescription:
        "GDScript e un linguaggio di scripting di alto livello progettato per il Godot Engine. Utilizza una sintassi basata sull'indentazione, tipi dinamici e opzionali, segnali, integrazione di nodi di scena, coroutine, risorse e strumenti specifici per lo sviluppo di giochi, pensati per l'uso nell'editor.\n\nViene utilizzato per implementare la logica di gioco, il comportamento dell'interfaccia utente, strumenti, la logica dell'animazione, prototipi, plugin per l'editor e script che interagiscono strettamente con le scene e le API del Godot Engine.",
    },
    fr: {
      name: 'GDScript',
      description:
        "Langage de script integre de Godot Engine pour le gameplay et la logique de l'editeur.",
      longDescription:
        "GDScript est un langage de script de haut niveau concu pour Godot Engine. Il utilise une syntaxe basee sur l'indentation, un typage dynamique et optionnel, des signaux, l'integration des noeuds de scene, des coroutines, des ressources et des outils adaptes a l'editeur, adaptes au developpement de jeux.\n\nIl est utilise pour implementer le gameplay, le comportement de l'interface utilisateur, les outils, la logique d'animation, les prototypes, les plugins d'editeur et les scripts qui interagissent etroitement avec les scenes et les API de Godot.",
    },
    de: {
      name: 'GDScript',
      description: 'Integrierte Skriptsprache für Godot Engine, für Gameplay und Editor-Logik.',
      longDescription:
        'GDScript ist eine High-Level-Skriptsprache, die für den Godot Engine entwickelt wurde. Sie verwendet eine Einrückungsbasierte Syntax, dynamische und optionale statische Typisierung, Signale, die Integration von Szenen-Nodern, Coroutinen, Ressourcen und Werkzeuge, die auf die Spieleentwicklung zugeschnitten sind.\n\nSie wird verwendet, um Gameplay, UI-Verhalten, Tools, Animationslogik, Prototypen, Editor-Plugins und Skripte zu implementieren, die eng mit Godot-Szenen und Engine-APIs interagieren.',
    },
    pt: {
      name: 'GDScript',
      description: 'Linguagem de script integrada do Godot Engine para lógica de jogo e do editor.',
      longDescription:
        'GDScript é uma linguagem de script de alto nível construída para o Godot Engine. Utiliza sintaxe baseada em indentação, tipagem dinâmica e opcionalmente estática, sinais, integração de nós de cena, corrotinas, recursos e ferramentas orientadas para o editor, adaptadas para o desenvolvimento de jogos.\n\nÉ usada para implementar lógica de jogo, comportamento da interface do usuário, ferramentas, lógica de animação, protótipos, plugins de editor e scripts que interagem de perto com cenas e APIs do Godot.',
    },
  },
} satisfies Language;
