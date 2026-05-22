import type { Language } from "../types";

export const idris = {
  slug: "idris",
  publishedDate: "2009-01-01",
  extensions: [".idr", ".lidr", ".ipkg"],
  author: "Edwin Brady",
  website: "https://www.idris-lang.org",
  paradigms: ["functional", "dependently typed", "total", "statically typed"],
  tooling: {
    runtimes: ["Chez Scheme", "Racket", "JavaScript", "Node.js"],
    packageManagers: ["pack", "idris2"],
    ecosystems: ["Formal methods", "Functional programming"],
  },
  version: "0.8.0",
  logo: "https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@master/icons/file_type_idris.svg",
  color: "#B30000",
  i18n: {
    en: {
      name: "Idris",
      description: "A dependently typed functional language focused on practical programs.",
      longDescription:
        "Idris is a dependently typed functional programming language that brings theorem-proving ideas into general-purpose software development. Idris 2 adds a quantitative type system, totality checking, elaborator reflection, and multiple code generation backends.\n\nIt is used for type-driven development, language research, certified programming, education, and experiments where rich types help describe program behavior precisely.",
    },
    es: {
      name: "Idris",
      description: "Un lenguaje funcional con tipos dependientes enfocado en programas practicos.",
      longDescription:
        "Idris es un lenguaje de programacion funcional con tipos dependientes que lleva ideas de demostracion de teoremas al desarrollo general. Idris 2 agrega un sistema de tipos cuantitativo, chequeo de totalidad, reflexion de elaborador y multiples backends de generacion de codigo.\n\nSe usa en desarrollo guiado por tipos, investigacion de lenguajes, programacion certificada, educacion y experimentos donde tipos ricos ayudan a describir con precision el comportamiento de los programas.",
    },
    it: {
      name: "Idris",
      description:
        "Un linguaggio funzionale con tipi dipendenti, focalizzato su programmi pratici.",
      longDescription:
        "Idris e un linguaggio di programmazione funzionale con tipi dipendenti che porta le idee della dimostrazione di teoremi nello sviluppo di software a uso generale. Idris 2 aggiunge un sistema di tipi quantitativo, controllo della totalita, elaboratore riflessivo e backend di generazione di codice multipli.\n\nViene utilizzato per lo sviluppo guidato dai tipi, la ricerca linguistica, la programmazione certificata, l'istruzione e esperimenti in cui tipi ricchi aiutano a descrivere il comportamento del programma in modo preciso.",
    },
    fr: {
      name: "Idris",
      description: "Un langage fonctionnel de typage dependant, axe sur les programmes pratiques.",
      longDescription:
        "Idris est un langage de programmation fonctionnel de typage dependant qui introduit des idees de verification de theoremes dans le developpement de logiciels general. Idris 2 ajoute un systeme de types quantitatif, la verification de la totalite, la reflexion de l'elaborateur et plusieurs backends de generation de code. \n\nIl est utilise pour le developpement guide par les types, la recherche de langage, la programmation certifiee, l'education et les experiences ou des types riches aident a decrire precisement le comportement du programme.",
    },
  },
} satisfies Language;
