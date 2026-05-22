import type { Language } from "../types";

export const applescript = {
  slug: "applescript",
  publishedDate: "1993-10-01",
  extensions: [".applescript", ".scpt", ".scptd"],
  author: "Apple Inc.",
  website:
    "https://developer.apple.com/library/archive/documentation/AppleScript/Conceptual/AppleScriptX/AppleScriptX.html",
  paradigms: ["scripting", "automation", "event-driven"],
  tooling: {
    runtimes: ["macOS", "osascript", "Script Editor"],
    ecosystems: ["macOS", "Desktop Automation"],
  },
  version: "2.8",
  logo: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_applescript.svg",
  color: "#6E6E6E",
  i18n: {
    en: {
      name: "AppleScript",
      description: "A macOS scripting language for automating applications through Apple events.",
      longDescription:
        "AppleScript provides an English-like syntax for controlling scriptable macOS applications, files, windows, workflows, and system services.\n\nIt is commonly used for desktop automation, publishing workflows, batch operations, application glue code, and user-facing scripts that coordinate multiple Mac apps.",
    },
    es: {
      name: "AppleScript",
      description:
        "Un lenguaje de scripting de macOS para automatizar aplicaciones mediante Apple events.",
      longDescription:
        "AppleScript ofrece una sintaxis similar al ingles para controlar aplicaciones scriptables de macOS, archivos, ventanas, flujos de trabajo y servicios del sistema.\n\nSe usa comunmente para automatizacion de escritorio, flujos editoriales, operaciones por lotes, codigo de integracion entre aplicaciones y scripts de usuario que coordinan varias apps de Mac.",
    },
    it: {
      name: "AppleScript",
      description:
        "Un linguaggio di scripting per macOS per automatizzare le applicazioni tramite eventi Apple.",
      longDescription:
        "AppleScript fornisce una sintassi simile all'inglese per controllare le applicazioni, i file, le finestre, i flussi di lavoro e i servizi di sistema di macOS che possono essere scriptati.\n\nE comunemente utilizzato per l'automazione desktop, la pubblicazione di flussi di lavoro, le operazioni di batch, il codice di collegamento tra applicazioni e script per utenti che coordinano piu applicazioni Mac.",
    },
    fr: {
      name: "AppleScript",
      description:
        "Langage de scriptage macOS pour automatiser les applications via les evenements Apple.",
      longDescription:
        "AppleScript fournit une syntaxe semblable a l'anglais pour controler les applications macOS scriptables, les fichiers, les fenetres, les flux de travail et les services systeme.\n\nIl est couramment utilise pour l'automatisation de bureau, la publication de flux de travail, les operations par lots, le code d'assemblage d'applications et les scripts destines aux utilisateurs qui coordonnent plusieurs applications Mac.",
    },
  },
} satisfies Language;
