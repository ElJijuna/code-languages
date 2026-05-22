import type { Language } from "../types";

export const elm = {
  slug: "elm",
  publishedDate: "2012-03-30",
  extensions: [".elm"],
  author: "Evan Czaplicki",
  website: "https://elm-lang.org",
  paradigms: ["functional", "declarative", "reactive", "statically typed"],
  tooling: {
    runtimes: ["Browser", "JavaScript"],
    packageManagers: ["elm", "npm", "pnpm", "Yarn"],
    ecosystems: ["Web", "Frontend", "Functional Programming"],
  },
  version: "0.19.1",
  logo: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Elm_logo.svg",
  color: "#1293D8",
  i18n: {
    en: {
      name: "Elm",
      description:
        "A functional language for reliable web applications that compiles to JavaScript.",
      longDescription:
        "Elm is a functional programming language designed for building browser applications with strong static types, immutable data, pure functions, pattern matching, and a friendly compiler that emphasizes clear error messages.\n\nIt is used for frontend applications, interactive web interfaces, learning functional programming, and projects that want predictable state updates through The Elm Architecture while compiling to JavaScript.",
    },
    es: {
      name: "Elm",
      description:
        "Un lenguaje funcional para aplicaciones web confiables que compila a JavaScript.",
      longDescription:
        "Elm es un lenguaje de programacion funcional disenado para crear aplicaciones de navegador con tipado estatico fuerte, datos inmutables, funciones puras, pattern matching y un compilador amigable que prioriza mensajes de error claros.\n\nSe usa en aplicaciones frontend, interfaces web interactivas, aprendizaje de programacion funcional y proyectos que buscan actualizaciones de estado predecibles mediante The Elm Architecture mientras compilan a JavaScript.",
    },
    it: {
      name: "Elm",
      description:
        "Un linguaggio funzionale per applicazioni web affidabili che compila in JavaScript.",
      longDescription:
        "Elm e un linguaggio di programmazione funzionale progettato per la creazione di applicazioni web per browser con tipi statici forti, dati immutabili, funzioni pure, corrispondenza di pattern e un compilatore amichevole che enfatizza messaggi di errore chiari.\n\nViene utilizzato per applicazioni frontend, interfacce web interattive, apprendimento della programmazione funzionale e progetti che desiderano aggiornamenti di stato prevedibili tramite The Elm Architecture durante la compilazione in JavaScript.",
    },
    fr: {
      name: "Elm",
      description:
        "Un langage fonctionnel pour des applications web fiables qui se compile en JavaScript.",
      longDescription:
        "Elm est un langage de programmation fonctionnel concu pour la creation d'applications web pour navigateur avec des types statiques forts, des donnees immuables, des fonctions pures, la correspondance de motifs et un compilateur convivial qui met l'accent sur des messages d'erreur clairs.\n\nIl est utilise pour les applications frontend, les interfaces web interactives, l'apprentissage de la programmation fonctionnelle et les projets qui souhaitent des mises a jour d'etat previsibles grace a The Elm Architecture tout en se compilant en JavaScript.",
    },
  },
} satisfies Language;
