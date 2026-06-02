import type { Language } from '../types';

export const objectiveC = {
  slug: 'objective-c',
  publishedDate: '1984-01-01',
  extensions: ['.m', '.mm'],
  author: 'Brad Cox / Tom Love',
  website:
    'https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/',
  paradigms: ['class-based', 'dynamic', 'object-oriented', 'reflective'],
  tooling: {
    runtimes: ['Objective-C runtime', 'Apple platforms', 'GNUstep'],
    packageManagers: ['CocoaPods', 'Swift Package Manager'],
    ecosystems: ['Apple', 'Cocoa', 'Cocoa Touch', 'GNUstep'],
  },
  version: '2.0',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Apple_logo_grey.svg',
  color: '#438EFF',
  i18n: {
    en: {
      name: 'Objective-C',
      description: 'A C superset with Smalltalk-style messaging and a dynamic object runtime.',
      longDescription:
        'Objective-C is an object-oriented extension of C that adds Smalltalk-style message passing, dynamic dispatch, classes, protocols, categories, and runtime reflection.\n\nIt was historically central to NeXTSTEP, macOS, iOS, Cocoa, and Cocoa Touch development, and remains important for maintaining Apple platform codebases and interoperating with C, C++, and Swift.',
    },
    es: {
      name: 'Objective-C',
      description:
        'Un superconjunto de C con mensajeria estilo Smalltalk y runtime dinamico de objetos.',
      longDescription:
        'Objective-C es una extension orientada a objetos de C que agrega envio de mensajes estilo Smalltalk, despacho dinamico, clases, protocolos, categorias y reflexion en runtime.\n\nFue central historicamente en el desarrollo para NeXTSTEP, macOS, iOS, Cocoa y Cocoa Touch, y sigue siendo importante para mantener codebases de plataformas Apple e interoperar con C, C++ y Swift.',
    },
    it: {
      name: 'Objective-C',
      description:
        'Un superset di C con messaggistica in stile Smalltalk e un runtime di oggetti dinamico.',
      longDescription:
        "Objective-C e un'estensione orientata agli oggetti di C che aggiunge la messaggistica in stile Smalltalk, dispatch dinamico, classi, protocolli, categorie e riflessione a runtime.\n\nStoricamente, e stato centrale per lo sviluppo di NeXTSTEP, macOS, iOS, Cocoa e Cocoa Touch, e rimane importante per la manutenzione dei codebase delle piattaforme Apple e per l'interoperabilita con C, C++ e Swift.",
    },
    fr: {
      name: 'Objective-C',
      description:
        "Un superset de C avec la messagerie de type Smalltalk et un runtime d'objets dynamique.",
      longDescription:
        "Objective-C est une extension orientee objet de C qui ajoute la messagerie de type Smalltalk, la dispatch dynamique, les classes, les protocoles, les categories et la reflexion au moment de l'execution.\n\nIl a ete historiquement central pour le developpement de NeXTSTEP, macOS, iOS, Cocoa et Cocoa Touch, et reste important pour la maintenance des bases de code de la plateforme Apple et pour l'interoperabilite avec C, C++ et Swift.",
    },
    de: {
      name: 'Objective-C',
      description:
        'Eine C-Erweiterung mit Smalltalk-\u00e4hnlicher Nachrichten\u00fcbermittlung und einer dynamischen Objekt-Runtime.',
      longDescription:
        'Objective-C ist eine objektorientierte Erweiterung von C, die Smalltalk-\u00e4hnliche Nachrichten\u00fcbermittlung, dynamische Dispatch, Klassen, Protokolle, Kategorien und Laufzeit-Reflexion hinzuf\u00fcgt.\n\nEs war historisch zentral f\u00fcr die Entwicklung von NeXTSTEP, macOS, iOS, Cocoa und Cocoa Touch und ist weiterhin wichtig f\u00fcr die Wartung von Apple-Plattformcodebasen und die Interoperabilit\u00e4t mit C, C++ und Swift.',
    },
    pt: {
      name: 'Objective-C',
      description:
        'Um superset de C com mensagens no estilo Smalltalk e um ambiente de execu\u00e7\u00e3o de objetos din\u00e2mico.',
      longDescription:
        'Objective-C \u00e9 uma extens\u00e3o orientada a objetos de C que adiciona a passagem de mensagens no estilo Smalltalk, despacho din\u00e2mico, classes, protocolos, categorias e reflex\u00e3o em tempo de execu\u00e7\u00e3o.\n\nHistoricamente, foi central para o desenvolvimento de NeXTSTEP, macOS, iOS, Cocoa e Cocoa Touch, e continua sendo importante para manter os c\u00f3digos das plataformas da Apple e para interoperar com C, C++ e Swift.',
    },
  },
} satisfies Language;
