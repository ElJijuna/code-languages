import type { Language } from "../types";

export const janet = {
  slug: "janet",
  publishedDate: "2017-09-01",
  extensions: [".janet", ".jdn"],
  author: "Calvin Rose",
  website: "https://janet-lang.org",
  paradigms: ["functional", "imperative", "lisp", "embedded"],
  tooling: {
    runtimes: ["Janet VM"],
    packageManagers: ["jpm"],
    ecosystems: ["Scripting", "Embedded systems", "Command-line tools"],
  },
  version: "1.39.1",
  logo: "https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@master/icons/file_type_janet.svg",
  color: "#A5C8E4",
  i18n: {
    en: {
      name: "Janet",
      description: "A small Lisp-like language and embeddable runtime for scripting.",
      longDescription:
        "Janet is a small Lisp-like programming language with a compact C implementation, fibers, tables, pattern matching, macros, and an embeddable runtime. It is designed for scripting, tools, and applications that need a lightweight extension language.\n\nIt is used for command-line programs, configuration, automation, embedding in native applications, and experiments that benefit from Lisp-style metaprogramming without a large runtime.",
    },
    es: {
      name: "Janet",
      description: "Un lenguaje pequeno tipo Lisp y runtime embebible para scripting.",
      longDescription:
        "Janet es un lenguaje de programacion pequeno tipo Lisp con una implementacion compacta en C, fibras, tablas, pattern matching, macros y un runtime embebible. Esta disenado para scripting, herramientas y aplicaciones que necesitan un lenguaje de extension liviano.\n\nSe usa en programas de linea de comandos, configuracion, automatizacion, embedding en aplicaciones nativas y experimentos que aprovechan metaprogramacion tipo Lisp sin un runtime grande.",
    },
  },
} satisfies Language;
