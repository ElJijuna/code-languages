import type { Language } from '@/types';

export const janet = {
  slug: 'janet',
  publishedDate: '2017-09-01',
  extensions: ['.janet', '.jdn'],
  author: 'Calvin Rose',
  website: 'https://janet-lang.org',
  paradigms: ['functional', 'imperative', 'lisp', 'embedded'],
  tooling: {
    runtimes: ['Janet VM'],
    packageManagers: ['jpm'],
    ecosystems: ['Scripting', 'Embedded systems', 'Command-line tools'],
  },
  version: '1.41.2',
  logo: 'https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@master/icons/file_type_janet.svg',
  color: '#A5C8E4',
  i18n: {
    en: {
      name: 'Janet',
      description: 'A small Lisp-like language and embeddable runtime for scripting.',
      longDescription:
        'Janet is a small Lisp-like programming language with a compact C implementation, fibers, tables, pattern matching, macros, and an embeddable runtime. It is designed for scripting, tools, and applications that need a lightweight extension language.\n\nIt is used for command-line programs, configuration, automation, embedding in native applications, and experiments that benefit from Lisp-style metaprogramming without a large runtime.',
    },
    es: {
      name: 'Janet',
      description: 'Un lenguaje pequeno tipo Lisp y runtime embebible para scripting.',
      longDescription:
        'Janet es un lenguaje de programacion pequeno tipo Lisp con una implementacion compacta en C, fibras, tablas, pattern matching, macros y un runtime embebible. Esta disenado para scripting, herramientas y aplicaciones que necesitan un lenguaje de extension liviano.\n\nSe usa en programas de linea de comandos, configuracion, automatizacion, embedding en aplicaciones nativas y experimentos que aprovechan metaprogramacion tipo Lisp sin un runtime grande.',
    },
    it: {
      name: 'Janet',
      description: 'Un linguaggio simile a Lisp e un runtime incorporabile per scripting.',
      longDescription:
        "Janet e un piccolo linguaggio di programmazione simile a Lisp con un'implementazione C compatta, fibre, tabelle, corrispondenza di pattern, macro e un runtime incorporabile. E progettato per scripting, strumenti e applicazioni che necessitano di un linguaggio di estensione leggero.\n\nViene utilizzato per programmi da riga di comando, configurazione, automazione, incorporamento in applicazioni native ed esperimenti che beneficiano della metaprogrammazione in stile Lisp senza un runtime di grandi dimensioni.",
    },
    fr: {
      name: 'Janet',
      description: 'Un petit langage de type Lisp et un runtime embarquable pour le scripting.',
      longDescription:
        "Janet est un petit langage de type Lisp avec une implementation C compacte, des fibres, des tables, la correspondance de motifs, des macros et un runtime embarquable. Il est concu pour le scripting, les outils et les applications qui ont besoin d'une extension de langage legere.\n\nIl est utilise pour les programmes en ligne de commande, la configuration, l'automatisation, l'integration dans des applications natives et des experiences qui beneficient de la metaprogrammation de type Lisp sans un runtime important.",
    },
    de: {
      name: 'Janet',
      description:
        'Eine kleine, Lisp-ähnliche Sprache und ein einbettbarer Runtime für das Scripting.',
      longDescription:
        'Janet ist eine kleine, Lisp-ähnliche Programmiersprache mit einer kompakten C-Implementierung, Fibers, Tabellen, Pattern Matching, Makros und einem einbettbaren Runtime. Sie ist für das Scripting, die Erstellung von Tools und Anwendungen konzipiert, die eine leichte Erweiterungssprache benötigen.\n\nSie wird für Kommandozeilenprogramme, Konfiguration, Automatisierung, die Einbettung in native Anwendungen und Experimente verwendet, die von Lisp-ähnlicher Metaprogrammierung ohne einen großen Runtime profitieren.',
    },
    pt: {
      name: 'Janet',
      description:
        'Uma pequena linguagem de programação semelhante ao Lisp e um runtime embarcável para scripting.',
      longDescription:
        'Janet é uma pequena linguagem de programação semelhante ao Lisp com uma implementação C compacta, fibras, tabelas, correspondência de padrões, macros e um runtime embarcável. É projetada para scripting, ferramentas e aplicações que precisam de uma linguagem de extensão leve.\n\nÉ usada para programas de linha de comando, configuração, automação, incorporação em aplicações nativas e experimentos que se beneficiam da metaprogramação de estilo Lisp sem um grande runtime.',
    },
  },
} satisfies Language;
