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
  },
} satisfies Language;
