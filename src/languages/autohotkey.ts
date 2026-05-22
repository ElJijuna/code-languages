import type { Language } from "../types";

export const autohotkey = {
  slug: "autohotkey",
  publishedDate: "2003-11-10",
  extensions: [".ahk", ".ah2"],
  author: "Chris Mallett",
  website: "https://www.autohotkey.com",
  paradigms: ["scripting", "automation", "event-driven", "imperative"],
  tooling: {
    runtimes: ["AutoHotkey"],
    ecosystems: ["Windows", "Desktop Automation"],
  },
  version: "2.0",
  logo: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_autohotkey.svg",
  color: "#6594B9",
  i18n: {
    en: {
      name: "AutoHotkey",
      description:
        "A Windows scripting language for hotkeys, macros, automation, and small utilities.",
      longDescription:
        "AutoHotkey scripts automate Windows workflows through hotkeys, text expansion, GUI automation, window management, keyboard and mouse control, and custom utility scripts.\n\nIt is popular for personal productivity, repetitive task automation, quick desktop tooling, application launchers, and accessibility-oriented workflows.",
    },
    es: {
      name: "AutoHotkey",
      description:
        "Un lenguaje de scripting para Windows orientado a atajos, macros, automatizacion y utilidades pequenas.",
      longDescription:
        "Los scripts de AutoHotkey automatizan flujos de Windows mediante atajos, expansion de texto, automatizacion de GUI, gestion de ventanas, control de teclado y mouse, y utilidades personalizadas.\n\nEs popular para productividad personal, automatizacion de tareas repetitivas, herramientas rapidas de escritorio, lanzadores de aplicaciones y flujos orientados a accesibilidad.",
    },
    it: {
      name: "AutoHotkey",
      description:
        "Un linguaggio di scripting per Windows per tasti di scelta rapida, macro, automazione e piccole utility.",
      longDescription:
        "Gli script di AutoHotkey automatizzano i flussi di lavoro di Windows tramite tasti di scelta rapida, espansione del testo, automazione GUI, gestione delle finestre, controllo della tastiera e del mouse e script di utility personalizzati.\n\nE popolare per la produttivita personale, l'automazione di attivita ripetitive, strumenti desktop rapidi, lanci di applicazioni e flussi di lavoro orientati all'accessibilita.",
    },
    fr: {
      name: "AutoHotkey",
      description:
        "Un langage de script pour Windows pour les raccourcis clavier, les macros, l'automatisation et les petites utilitaires.",
      longDescription:
        "Les scripts AutoHotkey automatisent les flux de travail Windows grace aux raccourcis clavier, a l'expansion de texte, a l'automatisation de l'interface graphique, a la gestion des fenetres, au controle du clavier et de la souris, et aux scripts d'utilitaires personnalises.\n\nIl est populaire pour la productivite personnelle, l'automatisation des taches repetitives, les outils de bureau rapides, les lanceurs d'applications et les flux de travail orientes l'accessibilite.",
    },
  },
} satisfies Language;
