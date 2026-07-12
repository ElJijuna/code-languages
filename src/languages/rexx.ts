import type { Language } from '@/types';

export const rexx = {
  slug: 'rexx',
  publishedDate: '1979-03-20',
  extensions: ['.rexx', '.rex'],
  author: 'Mike Cowlishaw / IBM',
  website: 'https://www.rexxla.org',
  paradigms: ['imperative', 'procedural', 'scripting'],
  tooling: {
    runtimes: ['z/OS', 'ooRexx', 'Regina REXX'],
    ecosystems: ['Mainframe', 'Scripting'],
  },
  version: 'ANSI X3.274-1996',
  logo: 'https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_rexx.svg',
  color: '#D90E09',
  i18n: {
    en: {
      name: 'REXX',
      description: 'A readable IBM scripting language for mainframe automation and system glue.',
      longDescription:
        'REXX (Restructured Extended Executor) is a scripting language designed by Mike Cowlishaw at IBM with an emphasis on readability and ease of learning. It became the standard automation language on IBM mainframes, driving TSO/ISPF, batch jobs, and system utilities on z/OS.\n\nBeyond the mainframe, Open Object Rexx (ooRexx) and Regina bring the language to Linux, Windows, and macOS, and REXX remains in active production use wherever decades of mainframe automation live on.',
    },
    es: {
      name: 'REXX',
      description: 'Un lenguaje de scripting legible de IBM para automatización de mainframes.',
      longDescription:
        'REXX (Restructured Extended Executor) es un lenguaje de scripting diseñado por Mike Cowlishaw en IBM con énfasis en la legibilidad y la facilidad de aprendizaje. Se convirtió en el lenguaje de automatización estándar de los mainframes de IBM, controlando TSO/ISPF, trabajos batch y utilidades del sistema en z/OS.\n\nMás allá del mainframe, Open Object Rexx (ooRexx) y Regina llevan el lenguaje a Linux, Windows y macOS, y REXX sigue en uso productivo activo dondequiera que perduren décadas de automatización de mainframe.',
    },
    it: {
      name: 'REXX',
      description: "Un linguaggio di scripting IBM leggibile per l'automazione dei mainframe.",
      longDescription:
        'REXX (Restructured Extended Executor) è un linguaggio di scripting progettato da Mike Cowlishaw in IBM con enfasi sulla leggibilità e sulla facilità di apprendimento. È diventato il linguaggio di automazione standard sui mainframe IBM, guidando TSO/ISPF, job batch e utility di sistema su z/OS.\n\nOltre il mainframe, Open Object Rexx (ooRexx) e Regina portano il linguaggio su Linux, Windows e macOS, e REXX rimane in uso produttivo attivo ovunque sopravvivano decenni di automazione mainframe.',
    },
    fr: {
      name: 'REXX',
      description: "Un langage de script IBM lisible pour l'automatisation des mainframes.",
      longDescription:
        "REXX (Restructured Extended Executor) est un langage de script conçu par Mike Cowlishaw chez IBM avec un accent sur la lisibilité et la facilité d'apprentissage. Il est devenu le langage d'automatisation standard des mainframes IBM, pilotant TSO/ISPF, les travaux batch et les utilitaires système sous z/OS.\n\nAu-delà du mainframe, Open Object Rexx (ooRexx) et Regina portent le langage sur Linux, Windows et macOS, et REXX reste en usage productif actif partout où survivent des décennies d'automatisation mainframe.",
    },
    de: {
      name: 'REXX',
      description: 'Eine gut lesbare IBM-Skriptsprache für Mainframe-Automatisierung.',
      longDescription:
        'REXX (Restructured Extended Executor) ist eine von Mike Cowlishaw bei IBM entworfene Skriptsprache mit Schwerpunkt auf Lesbarkeit und leichter Erlernbarkeit. Sie wurde zur Standard-Automatisierungssprache auf IBM-Mainframes und steuert TSO/ISPF, Batch-Jobs und Systemwerkzeuge unter z/OS.\n\nJenseits des Mainframes bringen Open Object Rexx (ooRexx) und Regina die Sprache auf Linux, Windows und macOS, und REXX bleibt überall dort im produktiven Einsatz, wo Jahrzehnte an Mainframe-Automatisierung weiterleben.',
    },
    pt: {
      name: 'REXX',
      description: 'Uma linguagem de script legível da IBM para automação de mainframes.',
      longDescription:
        'REXX (Restructured Extended Executor) é uma linguagem de script projetada por Mike Cowlishaw na IBM com ênfase em legibilidade e facilidade de aprendizado. Tornou-se a linguagem de automação padrão nos mainframes da IBM, controlando TSO/ISPF, jobs batch e utilitários de sistema no z/OS.\n\nAlém do mainframe, o Open Object Rexx (ooRexx) e o Regina levam a linguagem para Linux, Windows e macOS, e o REXX continua em uso produtivo ativo onde quer que décadas de automação de mainframe sobrevivam.',
    },
  },
} satisfies Language;
