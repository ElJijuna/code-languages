import type { Language } from "../types";

export const zig = {
  slug: "zig",
  publishedDate: "2016-02-08",
  extensions: [".zig", ".zon"],
  author: "Andrew Kelley / Zig Software Foundation",
  website: "https://ziglang.org",
  paradigms: ["imperative", "procedural", "systems", "compile-time metaprogramming"],
  tooling: {
    runtimes: ["Native"],
    packageManagers: ["Zig Package Manager"],
    ecosystems: ["Systems Programming", "Embedded", "Game Development", "Cross-compilation"],
  },
  version: "0.16.0",
  logo: "https://cdn.simpleicons.org/zig/F7A41D",
  i18n: {
    en: {
      name: "Zig",
      description:
        "A systems programming language and toolchain focused on robustness, control, and cross-compilation.",
      longDescription:
        "Zig is a general-purpose systems programming language and toolchain designed for explicit control, predictable performance, cross-compilation, and maintaining robust software. It provides manual memory management, comptime execution, error unions, integrated build tooling, and C interoperability.\n\nIt is used for systems software, embedded targets, command-line tools, game engines, low-level libraries, cross-platform native applications, and projects that need a compact language with strong compile-time capabilities.",
    },
    es: {
      name: "Zig",
      description:
        "Un lenguaje y toolchain de sistemas enfocado en robustez, control y cross-compilation.",
      longDescription:
        "Zig es un lenguaje de programacion de sistemas y toolchain de proposito general disenado para control explicito, rendimiento predecible, cross-compilation y mantenimiento de software robusto. Ofrece gestion manual de memoria, ejecucion comptime, uniones de error, tooling de build integrado e interoperabilidad con C.\n\nSe usa en software de sistemas, targets embebidos, herramientas de linea de comandos, motores de juegos, bibliotecas de bajo nivel, aplicaciones nativas multiplataforma y proyectos que necesitan un lenguaje compacto con capacidades fuertes de compilacion en tiempo de build.",
    },
  },
} satisfies Language;
