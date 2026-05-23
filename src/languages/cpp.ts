import type { Language } from "../types";

export const cpp = {
  slug: "cpp",
  publishedDate: "1985-10-01",
  extensions: [".cpp", ".cc", ".cxx", ".h", ".hpp", ".hh", ".hxx"],
  author: "Bjarne Stroustrup",
  website: "https://isocpp.org",
  paradigms: ["procedural", "object-oriented", "generic", "functional"],
  tooling: {
    runtimes: ["Native"],
    packageManagers: ["Conan", "vcpkg"],
    ecosystems: ["Systems", "Game Development", "Embedded"],
  },
  version: "C++23",
  logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
  color: "#00599C",
  i18n: {
    en: {
      name: "C++",
      description:
        "A high-performance general-purpose language for systems, applications, games, and embedded software.",
      longDescription:
        "C++ extends C with classes, templates, exceptions, namespaces, generic programming, deterministic resource management, and a large standard library.\n\nIt is widely used for operating systems, game engines, browsers, compilers, databases, financial systems, embedded devices, and software where performance and control over memory matter.",
    },
    es: {
      name: "C++",
      description:
        "Un lenguaje general de alto rendimiento para sistemas, aplicaciones, juegos y software embebido.",
      longDescription:
        "C++ extiende C con clases, plantillas, excepciones, espacios de nombres, programacion generica, gestion determinista de recursos y una gran biblioteca estandar.\n\nSe usa ampliamente en sistemas operativos, motores de videojuegos, navegadores, compiladores, bases de datos, sistemas financieros, dispositivos embebidos y software donde importan el rendimiento y el control de memoria.",
    },
    it: {
      name: "C++",
      description:
        "Un linguaggio di programmazione ad alte prestazioni, general-purpose, per sistemi, applicazioni, giochi e software embedded.",
      longDescription:
        "C++ estende C con classi, template, eccezioni, namespace, programmazione generica, gestione deterministica delle risorse e una vasta libreria standard.\n\nE ampiamente utilizzato per sistemi operativi, motori di gioco, browser, compilatori, database, sistemi finanziari, dispositivi embedded e software dove le prestazioni e il controllo sulla memoria sono importanti.",
    },
    fr: {
      name: "C++",
      description:
        "Un langage de programmation general a haute performance pour les systemes, les applications, les jeux et les logiciels embarques.",
      longDescription:
        "C++ etend C avec des classes, des modeles, des exceptions, des espaces de noms, la programmation generique, la gestion des ressources deterministe et une grande bibliotheque standard.\n\nIl est largement utilise pour les systemes d'exploitation, les moteurs de jeux, les navigateurs, les compilateurs, les bases de donnees, les systemes financiers, les appareils embarques et les logiciels ou les performances et le controle de la memoire sont importants.",
    },
    de: {
      name: "C++",
      description:
        "Eine leistungsstarke, allgemeine Programmiersprache f\u00fcr Systeme, Anwendungen, Spiele und eingebettete Software.",
      longDescription:
        "C++ erweitert C um Klassen, Templates, Ausnahmen, Namespaces, generische Programmierung, deterministische Ressourcenverwaltung und eine umfangreiche Standardbibliothek.\n\nEs wird h\u00e4ufig f\u00fcr Betriebssysteme, Spiel-Engines, Browser, Compiler, Datenbanken, Finanzsysteme, eingebettete Ger\u00e4te und Software verwendet, bei der Leistung und Kontrolle \u00fcber den Speicher wichtig sind.",
    },
    pt: {
      name: "C++",
      description:
        "Linguagem de alto desempenho para sistemas, aplica\u00e7\u00f5es, jogos e software embarcado.",
      longDescription:
        "C++ estende C com classes, templates, exce\u00e7\u00f5es, namespaces, programa\u00e7\u00e3o gen\u00e9rica, gerenciamento determin\u00edstico de recursos e uma grande biblioteca padr\u00e3o.\n\n\u00c9 amplamente utilizada para sistemas operacionais, motores de jogos, navegadores, compiladores, bancos de dados, sistemas financeiros, dispositivos embarcados e software onde o desempenho e o controle sobre a mem\u00f3ria s\u00e3o importantes.",
    },
  },
} satisfies Language;
