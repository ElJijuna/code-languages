import type { Language } from "../types";

export const c = {
  slug: "c",
  publishedDate: "1972-01-01",
  extensions: [".c", ".h"],
  author: "Dennis Ritchie / Bell Labs",
  website: "https://www.open-std.org/jtc1/sc22/wg14/",
  paradigms: ["imperative", "procedural", "structured"],
  tooling: {
    runtimes: ["Native"],
    packageManagers: ["Conan", "vcpkg"],
    ecosystems: ["Systems", "Embedded"],
  },
  version: "C23",
  logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg",
  color: "#A8B9CC",
  i18n: {
    en: {
      name: "C",
      description: "A general-purpose systems programming language with low-level memory access.",
      longDescription:
        "C is a compiled language designed for systems programming, portable software, embedded development, operating systems, language runtimes, and performance-sensitive libraries.\n\nIt offers direct memory management, a small core language, and close interaction with machine-level concepts while remaining portable across many hardware and operating system targets.",
    },
    es: {
      name: "C",
      description:
        "Un lenguaje de programacion de proposito general con acceso de bajo nivel a memoria.",
      longDescription:
        "C es un lenguaje compilado disenado para programacion de sistemas, software portable, desarrollo embebido, sistemas operativos, runtimes de lenguajes y bibliotecas sensibles al rendimiento.\n\nOfrece gestion directa de memoria, un nucleo pequeno de lenguaje e interaccion cercana con conceptos de maquina, manteniendo portabilidad entre muchos sistemas operativos y arquitecturas de hardware.",
    },
    it: {
      name: "C",
      description:
        "Un linguaggio di programmazione di sistema a uso generale con accesso a basso livello alla memoria.",
      longDescription:
        "C e un linguaggio compilato progettato per la programmazione di sistemi, software portabile, sviluppo embedded, sistemi operativi, runtime linguistici e librerie sensibili alle prestazioni.\n\nOffre gestione diretta della memoria, un piccolo linguaggio di base e un'interazione stretta con i concetti a livello di macchina, rimanendo portabile su molte piattaforme hardware e sistemi operativi.",
    },
    fr: {
      name: "C",
      description:
        "Un langage de programmation de systemes generaliste avec un acces memoire de bas niveau.",
      longDescription:
        "C est un langage compile concu pour la programmation de systemes, les logiciels portables, le developpement embarque, les systemes d'exploitation, les environnements d'execution de langages et les bibliotheques sensibles aux performances.\n\nIl offre une gestion memoire directe, un noyau de langage de petite taille et une interaction etroite avec les concepts de bas niveau, tout en restant portable sur de nombreuses plateformes materielles et systemes d'exploitation.",
    },
    de: {
      name: "C",
      description:
        "Eine allgemeine Programmiersprache f\u00fcr Systemprogrammierung mit direkter Speicherzugriff.",
      longDescription:
        "C ist eine kompilierte Programmiersprache, die f\u00fcr Systemprogrammierung, portables Software, eingebettete Entwicklung, Betriebssysteme, Sprach-Runtime und performanzkritische Bibliotheken entwickelt wurde.\n\nSie bietet direkte Speicherverwaltung, eine kleine Kernsprache und eine enge Interaktion mit maschinellen Konzepten, w\u00e4hrend sie gleichzeitig \u00fcber viele Hardware- und Betriebssystemziele hinweg portabel ist.",
    },
    pt: {
      name: "C",
      description:
        "Linguagem de programa\u00e7\u00e3o de sistemas de prop\u00f3sito geral com acesso de baixo n\u00edvel \u00e0 mem\u00f3ria.",
      longDescription:
        "C \u00e9 uma linguagem compilada projetada para programa\u00e7\u00e3o de sistemas, software port\u00e1til, desenvolvimento embarcado, sistemas operacionais, runtimes de linguagem e bibliotecas sens\u00edveis ao desempenho.\n\nOferece gerenciamento de mem\u00f3ria direto, um pequeno n\u00facleo de linguagem e intera\u00e7\u00e3o pr\u00f3xima com conceitos de n\u00edvel de m\u00e1quina, mantendo a portabilidade em muitos alvos de hardware e sistemas operacionais.",
    },
  },
} satisfies Language;
