import type { Language } from '../types';

export const qml = {
  slug: 'qml',
  publishedDate: '2009-01-01',
  extensions: ['.qml', '.qmltypes', '.qmlproject'],
  author: 'Qt Company / Qt Project',
  website: 'https://doc.qt.io/qt-6/qmlapplications.html',
  paradigms: ['declarative', 'reactive', 'component-oriented', 'ui'],
  tooling: {
    runtimes: ['Qt', 'Qt Quick'],
    packageManagers: ['Conan', 'vcpkg', 'Qt Installer'],
    ecosystems: ['Desktop UI', 'Embedded UI', 'Mobile UI', 'Qt'],
  },
  version: 'Qt 6.11.1',
  logo: 'https://cdn.simpleicons.org/qt/41CD52',
  color: '#41CD52',
  i18n: {
    en: {
      name: 'QML',
      description: "Qt's declarative language for building fluid, component-based user interfaces.",
      longDescription:
        'QML is a declarative language for Qt Quick applications, combining object trees, properties, bindings, signals, states, animations, JavaScript expressions, and reusable components. It is designed for building dynamic interfaces that connect naturally to C++ and Qt APIs.\n\nIt is used in desktop applications, embedded devices, mobile interfaces, automotive displays, industrial controls, media systems, and cross-platform Qt projects that need responsive and animated UI layers.',
    },
    es: {
      name: 'QML',
      description:
        'El lenguaje declarativo de Qt para crear interfaces fluidas basadas en componentes.',
      longDescription:
        'QML es un lenguaje declarativo para aplicaciones Qt Quick que combina arboles de objetos, propiedades, bindings, senales, estados, animaciones, expresiones JavaScript y componentes reutilizables. Esta pensado para crear interfaces dinamicas que se conectan de forma natural con C++ y las APIs de Qt.\n\nSe usa en aplicaciones de escritorio, dispositivos embebidos, interfaces moviles, pantallas automotrices, controles industriales, sistemas multimedia y proyectos Qt multiplataforma que necesitan capas UI responsivas y animadas.',
    },
    it: {
      name: 'QML',
      description: 'QML',
      longDescription:
        'QML e un linguaggio dichiarativo per le applicazioni Qt Quick, che combina alberi di oggetti, proprieta, binding, segnali, stati, animazioni, espressioni JavaScript e componenti riutilizzabili. E progettato per creare interfacce dinamiche che si connettono in modo naturale a C++ e alle API di Qt.\n\nViene utilizzato in applicazioni desktop, dispositivi embedded, interfacce mobili, display automobilistici, controlli industriali, sistemi multimediali e progetti Qt multipiattaforma che richiedono layer di interfaccia utente reattivi e animati.',
    },
    fr: {
      name: 'QML',
      description:
        'Langage declaratif de Qt pour creer des interfaces utilisateur fluides et basees sur des composants.',
      longDescription:
        "QML est un langage declaratif pour les applications Qt Quick, combinant des arbres d'objets, des proprietes, des liaisons, des signaux, des etats, des animations, des expressions JavaScript et des composants reutilisables. Il est concu pour creer des interfaces dynamiques qui s'integrent naturellement avec C++ et les API Qt.\n\nIl est utilise dans les applications de bureau, les appareils embarques, les interfaces mobiles, les ecrans automobiles, les systemes de controle industriels, les systemes multimedias et les projets Qt multiplateformes qui necessitent des couches d'interface utilisateur reactives et animees.",
    },
    de: {
      name: 'QML',
      description:
        "Qt's deklarative Sprache f\u00fcr den Aufbau flie\u00dfender, komponentbasierter Benutzeroberfl\u00e4chen.",
      longDescription:
        'QML ist eine deklarative Sprache f\u00fcr Qt Quick Anwendungen, die Objektb\u00e4ume, Eigenschaften, Bindungen, Signale, Zust\u00e4nde, Animationen, JavaScript-Ausdr\u00fccke und wiederverwendbare Komponenten kombiniert. Sie ist f\u00fcr den Aufbau dynamischer Oberfl\u00e4chen konzipiert, die sich nat\u00fcrlich mit C++ und Qt APIs verbinden.\n\nSie wird in Desktop-Anwendungen, eingebetteten Ger\u00e4ten, mobilen Oberfl\u00e4chen, Automobilanzeigen, industriellen Steuerungssystemen, Mediasystemen und plattform\u00fcbergreifenden Qt-Projekten verwendet, die responsive und animierte UI-Schichten ben\u00f6tigen.',
    },
    pt: {
      name: 'QML',
      description:
        'Linguagem declarativa do Qt para criar interfaces de usu\u00e1rio fluidas e baseadas em componentes.',
      longDescription:
        'QML \u00e9 uma linguagem declarativa para aplica\u00e7\u00f5es Qt Quick, combinando \u00e1rvores de objetos, propriedades, bindings, sinais, estados, anima\u00e7\u00f5es, express\u00f5es JavaScript e componentes reutiliz\u00e1veis. \u00c9 projetada para criar interfaces din\u00e2micas que se conectam naturalmente a APIs C++ e Qt.\n\n\u00c9 utilizada em aplica\u00e7\u00f5es de desktop, dispositivos embarcados, interfaces m\u00f3veis, displays automotivos, controles industriais, sistemas de m\u00eddia e projetos Qt multiplataforma que necessitam de camadas de UI responsivas e animadas.',
    },
  },
} satisfies Language;
