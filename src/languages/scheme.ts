import type { Language } from "../types";

export const scheme = {
  slug: "scheme",
  publishedDate: "1975-12-01",
  extensions: [".scm", ".ss", ".sld", ".sls"],
  author: "Guy L. Steele Jr. / Gerald Jay Sussman",
  website: "https://www.scheme.org",
  paradigms: ["functional", "lisp", "minimal", "multi-paradigm"],
  tooling: {
    runtimes: ["Chez Scheme", "Guile", "Racket", "Chicken"],
    ecosystems: ["Lisp", "Education", "Language Research"],
  },
  version: "R7RS small",
  logo: "https://cdn.simpleicons.org/racket/9F1D20",
  color: "#9F1D20",
  i18n: {
    en: {
      name: "Scheme",
      description: "A small Lisp family language centered on lexical scope and procedures.",
      longDescription:
        "Scheme is a Lisp dialect known for a compact core, lexical scoping, first-class procedures, macros, continuations, and a tradition of language experimentation. Standards define a portable base while implementations add libraries and tooling.\n\nIt is used in teaching, compilers, scripting, research, embedded extension systems, and programs that value a small expressive language core.",
    },
    es: {
      name: "Scheme",
      description: "Un lenguaje de la familia Lisp centrado en alcance lexico y procedimientos.",
      longDescription:
        "Scheme es un dialecto Lisp conocido por un nucleo compacto, alcance lexico, procedimientos de primera clase, macros, continuations y una tradicion de experimentacion con lenguajes. Los estandares definen una base portable mientras las implementaciones agregan bibliotecas.\n\nSe usa en ensenanza, compiladores, scripting, investigacion, sistemas de extension embebidos y programas que valoran un nucleo expresivo pequeno.",
    },
    it: {
      name: "Scheme",
      description:
        "Un linguaggio della famiglia Lisp piccolo, incentrato sullo scope lessicale e sulle procedure.",
      longDescription:
        "Scheme e un dialetto Lisp noto per un nucleo compatto, lo scope lessicale, le procedure di prima classe, i macro, le continuazioni e una tradizione di sperimentazione linguistica. Gli standard definiscono una base portabile, mentre le implementazioni aggiungono librerie e strumenti.\n\nViene utilizzato nell'insegnamento, nella compilazione, nella scripting, nella ricerca, nei sistemi di estensione embedded e in programmi che valorizzano un piccolo nucleo linguistico espressivo.",
    },
    fr: {
      name: "Scheme",
      description:
        "Un petit langage de la famille Lisp, axe sur la portee lexicale et les procedures.",
      longDescription:
        "Scheme est un dialecte de Lisp connu pour son noyau compact, la portee lexicale, les procedures de premiere classe, les macros, les continuations et une tradition d'experimentation linguistique. Les normes definissent une base portable, tandis que les implementations ajoutent des bibliotheques et des outils.\n\nIl est utilise dans l'enseignement, les compilateurs, le scripting, la recherche, les systemes d'extension embarques et les programmes qui valorisent un noyau de langage expressif et compact.",
    },
    de: {
      name: "Scheme",
      description: "Eine kleine Lisp-Familie, die auf lexikalischer Scope und Prozeduren basiert.",
      longDescription:
        "Scheme ist ein Lisp-Dialekt, der f\u00fcr einen kompakten Kern, lexikalische Scope, Prozeduren erster Klasse, Makros, Continuations und eine Tradition der Sprachexperimente bekannt ist. Standards definieren eine portable Basis, w\u00e4hrend Implementierungen Bibliotheken und Werkzeuge hinzuf\u00fcgen.\n\nEs wird in Lehre, Compilern, Skripten, Forschung, eingebetteten Erweiterungssystemen und Programmen verwendet, die einen kleinen, ausdrucksstarken Kern ben\u00f6tigen.",
    },
    pt: {
      name: "Scheme",
      description: "Linguagem Lisp pequena, focada em escopo lexical e procedimentos.",
      longDescription:
        "Scheme \u00e9 um dialeto Lisp conhecido por seu n\u00facleo compacto, escopo lexical, procedimentos de primeira classe, macros, continua\u00e7\u00f5es e uma tradi\u00e7\u00e3o de experimenta\u00e7\u00e3o de linguagem. Os padr\u00f5es definem uma base port\u00e1til, enquanto as implementa\u00e7\u00f5es adicionam bibliotecas e ferramentas.\n\n\u00c9 usado em ensino, compiladores, scripting, pesquisa, sistemas de extens\u00e3o embarcados e programas que valorizam um n\u00facleo de linguagem expressivo pequeno.",
    },
  },
} satisfies Language;
