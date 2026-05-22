import type { Language } from "../types";

export const qml = {
  slug: "qml",
  publishedDate: "2009-01-01",
  extensions: [".qml", ".qmltypes", ".qmlproject"],
  author: "Qt Company / Qt Project",
  website: "https://doc.qt.io/qt-6/qmlapplications.html",
  paradigms: ["declarative", "reactive", "component-oriented", "ui"],
  tooling: {
    runtimes: ["Qt", "Qt Quick"],
    packageManagers: ["Conan", "vcpkg", "Qt Installer"],
    ecosystems: ["Desktop UI", "Embedded UI", "Mobile UI", "Qt"],
  },
  version: "Qt 6.11.1",
  logo: "https://cdn.simpleicons.org/qt/41CD52",
  color: "#41CD52",
  i18n: {
    en: {
      name: "QML",
      description: "Qt's declarative language for building fluid, component-based user interfaces.",
      longDescription:
        "QML is a declarative language for Qt Quick applications, combining object trees, properties, bindings, signals, states, animations, JavaScript expressions, and reusable components. It is designed for building dynamic interfaces that connect naturally to C++ and Qt APIs.\n\nIt is used in desktop applications, embedded devices, mobile interfaces, automotive displays, industrial controls, media systems, and cross-platform Qt projects that need responsive and animated UI layers.",
    },
    es: {
      name: "QML",
      description:
        "El lenguaje declarativo de Qt para crear interfaces fluidas basadas en componentes.",
      longDescription:
        "QML es un lenguaje declarativo para aplicaciones Qt Quick que combina arboles de objetos, propiedades, bindings, senales, estados, animaciones, expresiones JavaScript y componentes reutilizables. Esta pensado para crear interfaces dinamicas que se conectan de forma natural con C++ y las APIs de Qt.\n\nSe usa en aplicaciones de escritorio, dispositivos embebidos, interfaces moviles, pantallas automotrices, controles industriales, sistemas multimedia y proyectos Qt multiplataforma que necesitan capas UI responsivas y animadas.",
    },
    it: {
      name: "QML",
      description: "QML",
      longDescription:
        "QML e un linguaggio dichiarativo per le applicazioni Qt Quick, che combina alberi di oggetti, proprieta, binding, segnali, stati, animazioni, espressioni JavaScript e componenti riutilizzabili. E progettato per creare interfacce dinamiche che si connettono in modo naturale a C++ e alle API di Qt.\n\nViene utilizzato in applicazioni desktop, dispositivi embedded, interfacce mobili, display automobilistici, controlli industriali, sistemi multimediali e progetti Qt multipiattaforma che richiedono layer di interfaccia utente reattivi e animati.",
    },
    fr: {
      name: "QML",
      description:
        "Langage declaratif de Qt pour creer des interfaces utilisateur fluides et basees sur des composants.",
      longDescription:
        "QML est un langage declaratif pour les applications Qt Quick, combinant des arbres d'objets, des proprietes, des liaisons, des signaux, des etats, des animations, des expressions JavaScript et des composants reutilisables. Il est concu pour creer des interfaces dynamiques qui s'integrent naturellement avec C++ et les API Qt.\n\nIl est utilise dans les applications de bureau, les appareils embarques, les interfaces mobiles, les ecrans automobiles, les systemes de controle industriels, les systemes multimedias et les projets Qt multiplateformes qui necessitent des couches d'interface utilisateur reactives et animees.",
    },
  },
} satisfies Language;
