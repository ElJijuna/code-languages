import type { Language } from '@/types';

export const red = {
  slug: 'red',
  publishedDate: '2011-02-26',
  extensions: ['.red', '.reds'],
  author: 'Nenad Rakocevic',
  website: 'https://www.red-lang.org',
  paradigms: ['imperative', 'functional', 'symbolic'],
  tooling: {
    runtimes: ['Red toolchain', 'Red/System'],
    ecosystems: ['Scripting', 'GUI Applications', 'Systems Experiments'],
  },
  version: '0.6.6',
  logo: 'https://static.red-lang.org/red-logo.svg',
  color: '#F00000',
  i18n: {
    en: {
      name: 'Red',
      description:
        'A Rebol-inspired language spanning high-level scripting and low-level Red/System code.',
      longDescription:
        'Red is a language inspired by Rebol that aims to cover a broad range from symbolic high-level scripting to lower-level systems programming through Red/System. It emphasizes compact syntax, DSL-friendly data notation, and GUI-oriented workflows.\n\nThe project is used for scripts, small desktop tools, experiments, and applications that benefit from homoiconic data, concise notation, and a single distribution with compiler and runtime pieces.',
    },
    es: {
      name: 'Red',
      description:
        'Lenguaje inspirado en Rebol que cubre scripting de alto nivel y codigo Red/System.',
      longDescription:
        'Red es un lenguaje inspirado en Rebol que busca cubrir desde scripting simbolico de alto nivel hasta programacion de sistemas con Red/System. Enfatiza sintaxis compacta, notacion de datos apta para DSLs y flujos orientados a GUI.\n\nSe usa en scripts, herramientas pequenas de escritorio, experimentos y apps que aprovechan datos homoiconicos, notacion concisa y una distribucion con compilador y runtime.',
    },
    it: {
      name: 'Red',
      description:
        'Linguaggio ispirato a Rebol, che copre scripting di alto livello e codice Red/System di basso livello.',
      longDescription:
        "Red è un linguaggio ispirato a Rebol, progettato per coprire un ampio spettro, dallo scripting simbolico ad alto livello alla programmazione di sistema di basso livello tramite Red/System. Enfatizza una sintassi compatta, notazioni DSL-friendly e flussi di lavoro orientati all'interfaccia grafica.\n\nIl progetto è utilizzato per script, piccoli strumenti desktop, esperimenti e applicazioni che beneficiano di dati homoiconici, notazioni concise e un singolo pacchetto con compilatore e runtime.",
    },
    fr: {
      name: 'Red',
      description:
        'Langage inspiré de Rebol, combinant le scripting de haut niveau et le code Red/System de bas niveau.',
      longDescription:
        "Red est un langage inspiré de Rebol qui vise à couvrir une large gamme allant du script de haut niveau basé sur des symboles au codage système de bas niveau via Red/System. Il met l'accent sur une syntaxe concise, une notation de données conviviale pour les DSL et des flux de travail orientés GUI.\n\nLe projet est utilisé pour les scripts, les petits outils de bureau, les expérimentations et les applications qui bénéficient d'une représentation homonyme des données, d'une notation concise et d'une seule distribution contenant le compilateur et la partie runtime.",
    },
    de: {
      name: 'Red',
      description:
        'Eine Rebol-inspirierte Sprache für High-Level-Skripting und Low-Level-Red/System-Code.',
      longDescription:
        'Red ist eine von Rebol inspirierte Sprache, die darauf abzielt, einen breiten Bereich von symbolischem High-Level-Skripting bis hin zu Low-Level-Systemprogrammierung durch Red/System abzudecken. Sie betont kompakte Syntax, DSL-freundliche Datennotation und GUI-orientierte Arbeitsabläufe.\n\nDas Projekt wird für Skripte, kleine Desktop-Tools, Experimente und Anwendungen verwendet, die von homoikonischer Datennotation, prägnanter Notation und einer einzigen Distribution mit Compiler- und Runtime-Komponenten profitieren.',
    },
    pt: {
      name: 'Red',
      description:
        'Linguagem inspirada em Rebol, abrangendo scripting de alto e baixo nível com Red/System.',
      longDescription:
        'Red é uma linguagem inspirada no Rebol que visa cobrir um amplo espectro, desde scripting de alto nível simbólico até programação de sistemas de baixo nível através do Red/System. Enfatiza sintaxe compacta, notação amigável para DSL e fluxos de trabalho orientados a GUI.\n\nO projeto é usado para scripts, pequenas ferramentas de desktop, experimentos e aplicações que se beneficiam de dados homoiconicos, notação concisa e uma única distribuição com peças do compilador e runtime.',
    },
  },
} satisfies Language;
