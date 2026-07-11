import type { Language } from '@/types';

export const lisp = {
  slug: 'lisp',
  publishedDate: '1958-01-01',
  extensions: ['.lisp', '.lsp', '.cl', '.asd'],
  author: 'John McCarthy / ANSI X3J13',
  website: 'https://common-lisp.net',
  paradigms: ['functional', 'symbolic', 'object-oriented', 'metaprogramming', 'dynamic'],
  tooling: {
    runtimes: ['SBCL', 'CCL', 'ECL', 'CLISP', 'LispWorks', 'Allegro CL'],
    packageManagers: ['Quicklisp', 'ASDF'],
    ecosystems: ['Common Lisp', 'AI', 'Symbolic Computing', 'Research', 'CLI'],
  },
  version: 'ANSI INCITS 226-1994',
  logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lisp_logo.svg',
  color: '#3FB68B',
  i18n: {
    en: {
      name: 'Lisp',
      description:
        'A family of programmable, expression-oriented languages best known through Common Lisp.',
      longDescription:
        'Lisp is one of the oldest high-level programming language families, built around symbolic expressions, lists, macros, interactive development, dynamic typing, and programmable language syntax. This entry focuses on Common Lisp source files and systems.\n\nCommon Lisp is used for symbolic computation, AI research, compilers, DSLs, expert systems, automation, long-lived server applications, developer tools, and exploratory programming where macros and interactive workflows are central.',
    },
    es: {
      name: 'Lisp',
      description:
        'Una familia de lenguajes expresivos y programables, conocida especialmente por Common Lisp.',
      longDescription:
        'Lisp es una de las familias de lenguajes de alto nivel mas antiguas, basada en expresiones simbolicas, listas, macros, desarrollo interactivo, tipado dinamico y sintaxis programable. Esta entrada se enfoca en archivos fuente y sistemas de Common Lisp.\n\nCommon Lisp se usa en computacion simbolica, investigacion de IA, compiladores, DSLs, sistemas expertos, automatizacion, aplicaciones de servidor longevas, herramientas de desarrollo y programacion exploratoria donde las macros y los flujos interactivos son centrales.',
    },
    it: {
      name: 'Lisp',
      description:
        'Una famiglia di linguaggi di programmazione, orientati alle espressioni, meglio conosciuta attraverso Common Lisp.',
      longDescription:
        "Common Lisp e una delle famiglie di linguaggi di programmazione di alto livello piu antiche, basata su espressioni simboliche, liste, macro, sviluppo interattivo, tipizzazione dinamica e sintassi di linguaggio di programmazione. Questa voce si concentra sui file sorgente e sui sistemi di Common Lisp.\n\nCommon Lisp viene utilizzata per la computazione simbolica, la ricerca sull'IA, i compilatori, le DSL, i sistemi esperti, l'automazione, le applicazioni di server a lunga durata, gli strumenti per gli sviluppatori e la programmazione esplorativa in cui le macro e i flussi di lavoro interattivi sono centrali.",
    },
    fr: {
      name: 'Lisp',
      description:
        'Une famille de langages programmables, orientes expression, meilleure connue via Common Lisp.',
      longDescription:
        "Common Lisp est l'une des plus anciennes familles de langages de programmation de haut niveau, construite autour d'expressions symboliques, de listes, de macros, de developpement interactif, de typage dynamique et de syntaxe de langage programmable. Cette entree se concentre sur les fichiers sources et les systemes Common Lisp.\n\nCommon Lisp est utilise pour le calcul symbolique, la recherche en IA, les compilateurs, les DSL, les systemes d'experts, l'automatisation, les applications serveur a long terme, les outils de developpement et la programmation exploratoire ou les macros et les workflows interactifs sont centraux.",
    },
    de: {
      name: 'Lisp',
      description:
        'Eine Familie von programmierbaren, ausdrucksorientierten Sprachen, die vor allem durch Common Lisp bekannt sind.',
      longDescription:
        'Lisp ist eine der ältesten Familien von High-Level-Programmiersprachen, die auf symbolischen Ausdrücken, Listen, Makros, interaktiver Entwicklung, dynamischer Typisierung und programmierbarer Sprachsyntax basiert. Dieser Eintrag konzentriert sich auf Common Lisp-Quelldateien und -Systeme.\n\nCommon Lisp wird für symbolische Berechnungen, KI-Forschung, Compiler, DSLs, Expertensysteme, Automatisierung, langfristige Serveranwendungen, Entwicklerwerkzeuge und explorative Programmierung verwendet, bei der Makros und interaktive Arbeitsabläufe im Vordergrund stehen.',
    },
    pt: {
      name: 'Lisp',
      description:
        'Uma família de linguagens de programação, orientadas a expressões, mais conhecida através do Common Lisp.',
      longDescription:
        'Lisp é uma das famílias de linguagens de programação de alto nível mais antigas, construída em torno de expressões simbólicas, listas, macros, desenvolvimento interativo, tipagem dinâmica e sintaxe de linguagem programável. Esta entrada se concentra em arquivos e sistemas de Common Lisp.\n\nCommon Lisp é usado para computação simbólica, pesquisa em IA, compiladores, DSLs, sistemas especialistas, automação, aplicações de servidor de longa duração, ferramentas de desenvolvimento e programação exploratória onde macros e fluxos de trabalho interativos são centrais.',
    },
  },
} satisfies Language;
