import type { Language } from "../types";

export const c = {
  slug: "c",
  publishedDate: "1972-01-01",
  extensions: [".c", ".h"],
  author: "Dennis Ritchie / Bell Labs",
  website: "https://www.open-std.org/jtc1/sc22/wg14/",
  paradigms: ["imperative", "procedural", "structured"],
  tooling: {
    runtimes: ["Native"],
    packageManagers: ["Conan", "vcpkg"],
    ecosystems: ["Systems", "Embedded"],
  },
  version: "C23",
  logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg",
  color: "#A8B9CC",
  i18n: {
    en: {
      name: "C",
      description: "A general-purpose systems programming language with low-level memory access.",
      longDescription:
        "C is a compiled language designed for systems programming, portable software, embedded development, operating systems, language runtimes, and performance-sensitive libraries.\n\nIt offers direct memory management, a small core language, and close interaction with machine-level concepts while remaining portable across many hardware and operating system targets.",
    },
    es: {
      name: "C",
      description:
        "Un lenguaje de programacion de proposito general con acceso de bajo nivel a memoria.",
      longDescription:
        "C es un lenguaje compilado disenado para programacion de sistemas, software portable, desarrollo embebido, sistemas operativos, runtimes de lenguajes y bibliotecas sensibles al rendimiento.\n\nOfrece gestion directa de memoria, un nucleo pequeno de lenguaje e interaccion cercana con conceptos de maquina, manteniendo portabilidad entre muchos sistemas operativos y arquitecturas de hardware.",
    },
  },
} satisfies Language;
