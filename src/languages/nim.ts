import type { Language } from "../types";

export const nim = {
  slug: "nim",
  publishedDate: "2008-08-20",
  extensions: [".nim", ".nims", ".nimble"],
  author: "Andreas Rumpf",
  website: "https://nim-lang.org",
  paradigms: ["systems", "imperative", "functional", "metaprogramming", "statically typed"],
  tooling: {
    runtimes: ["Native", "JavaScript"],
    packageManagers: ["Nimble"],
    ecosystems: ["Systems Programming", "CLI", "Web", "Embedded", "Native Applications"],
  },
  version: "2.2.10",
  logo: "https://cdn.simpleicons.org/nim/FFE953",
  i18n: {
    en: {
      name: "Nim",
      description:
        "A compiled systems language with Python-like syntax, macros, and efficient native output.",
      longDescription:
        "Nim is a statically typed compiled language designed for efficiency, expressiveness, and flexibility. It offers indentation-based syntax, generics, macros, templates, multiple memory-management strategies, C/C++/Objective-C interoperability, and compilation to C, C++, Objective-C, or JavaScript.\n\nIt is used for command-line tools, systems programming, embedded software, web services, scripting-like automation, native applications, and projects that want low overhead with powerful metaprogramming.",
    },
    es: {
      name: "Nim",
      description:
        "Un lenguaje compilado de sistemas con sintaxis similar a Python, macros y salida nativa eficiente.",
      longDescription:
        "Nim es un lenguaje compilado con tipado estatico disenado para eficiencia, expresividad y flexibilidad. Ofrece sintaxis basada en indentacion, genericos, macros, templates, varias estrategias de gestion de memoria, interoperabilidad con C/C++/Objective-C y compilacion a C, C++, Objective-C o JavaScript.\n\nSe usa en herramientas de linea de comandos, programacion de sistemas, software embebido, servicios web, automatizacion con estilo de scripting, aplicaciones nativas y proyectos que buscan bajo overhead con metaprogramacion potente.",
    },
  },
} satisfies Language;
