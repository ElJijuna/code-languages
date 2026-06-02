import type { Language } from '../types';

export const applescript = {
  slug: 'applescript',
  publishedDate: '1993-10-01',
  extensions: ['.applescript', '.scpt', '.scptd'],
  author: 'Apple Inc.',
  website:
    'https://developer.apple.com/library/archive/documentation/AppleScript/Conceptual/AppleScriptX/AppleScriptX.html',
  paradigms: ['scripting', 'automation', 'event-driven'],
  tooling: {
    runtimes: ['macOS', 'osascript', 'Script Editor'],
    ecosystems: ['macOS', 'Desktop Automation'],
  },
  version: '2.8',
  logo: 'https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_applescript.svg',
  color: '#6E6E6E',
  i18n: {
    en: {
      name: 'AppleScript',
      description: 'A macOS scripting language for automating applications through Apple events.',
      longDescription:
        'AppleScript provides an English-like syntax for controlling scriptable macOS applications, files, windows, workflows, and system services.\n\nIt is commonly used for desktop automation, publishing workflows, batch operations, application glue code, and user-facing scripts that coordinate multiple Mac apps.',
    },
    es: {
      name: 'AppleScript',
      description:
        'Un lenguaje de scripting de macOS para automatizar aplicaciones mediante Apple events.',
      longDescription:
        'AppleScript ofrece una sintaxis similar al ingles para controlar aplicaciones scriptables de macOS, archivos, ventanas, flujos de trabajo y servicios del sistema.\n\nSe usa comunmente para automatizacion de escritorio, flujos editoriales, operaciones por lotes, codigo de integracion entre aplicaciones y scripts de usuario que coordinan varias apps de Mac.',
    },
    it: {
      name: 'AppleScript',
      description:
        'Un linguaggio di scripting per macOS per automatizzare le applicazioni tramite eventi Apple.',
      longDescription:
        "AppleScript fornisce una sintassi simile all'inglese per controllare le applicazioni, i file, le finestre, i flussi di lavoro e i servizi di sistema di macOS che possono essere scriptati.\n\nE comunemente utilizzato per l'automazione desktop, la pubblicazione di flussi di lavoro, le operazioni di batch, il codice di collegamento tra applicazioni e script per utenti che coordinano piu applicazioni Mac.",
    },
    fr: {
      name: 'AppleScript',
      description:
        'Langage de scriptage macOS pour automatiser les applications via les evenements Apple.',
      longDescription:
        "AppleScript fournit une syntaxe semblable a l'anglais pour controler les applications macOS scriptables, les fichiers, les fenetres, les flux de travail et les services systeme.\n\nIl est couramment utilise pour l'automatisation de bureau, la publication de flux de travail, les operations par lots, le code d'assemblage d'applications et les scripts destines aux utilisateurs qui coordonnent plusieurs applications Mac.",
    },
    de: {
      name: 'AppleScript',
      description:
        'Eine macOS-Skriptsprache zur Automatisierung von Anwendungen \u00fcber Apple-Ereignisse.',
      longDescription:
        'AppleScript bietet eine englisch\u00e4hnliche Syntax zur Steuerung von skriptbaren macOS-Anwendungen, Dateien, Fenstern, Workflows und Systemdiensten.\n\nEs wird h\u00e4ufig f\u00fcr die Desktop-Automatisierung, die Erstellung von Arbeitsabl\u00e4ufen, Batch-Operationen, Anwendungsgleicodes und benutzerorientierte Skripte verwendet, die mehrere Mac-Anwendungen koordinieren.',
    },
    pt: {
      name: 'AppleScript',
      description:
        'Linguagem de script para macOS para automatizar aplicativos atrav\u00e9s de eventos Apple.',
      longDescription:
        'AppleScript fornece uma sintaxe semelhante ao ingl\u00eas para controlar aplicativos, arquivos, janelas, fluxos de trabalho e servi\u00e7os do sistema macOS.\n\n\u00c9 comumente usado para automa\u00e7\u00e3o de desktop, fluxos de trabalho de publica\u00e7\u00e3o, opera\u00e7\u00f5es em lote, c\u00f3digo de liga\u00e7\u00e3o de aplicativos e scripts para usu\u00e1rios que coordenam v\u00e1rios aplicativos Mac.',
    },
  },
} satisfies Language;
