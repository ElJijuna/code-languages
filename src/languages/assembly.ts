import type { Language } from "../types";

export const assembly = {
  slug: "assembly",
  publishedDate: "1949-01-01",
  extensions: [".asm", ".s", ".S", ".inc"],
  author: "Machine architecture vendors and assembler implementers",
  website: "https://en.wikipedia.org/wiki/Assembly_language",
  paradigms: ["imperative", "low-level", "procedural"],
  tooling: {
    runtimes: ["Native"],
    packageManagers: ["APT", "DNF", "Pacman", "Homebrew"],
    ecosystems: ["Systems", "Embedded", "Reverse Engineering"],
  },
  version: "Architecture-specific",
  logo: "https://cdn.simpleicons.org/assemblyscript/007AAC",
  i18n: {
    en: {
      name: "Assembly",
      description:
        "A family of low-level languages that map closely to machine instructions for specific CPU architectures.",
      longDescription:
        "Assembly language represents processor instructions, registers, memory addressing modes, labels, directives, and macros using symbolic text that is assembled into machine code.\n\nIt is used in operating systems, embedded firmware, bootloaders, drivers, reverse engineering, performance-critical routines, and educational material where direct control over hardware and instructions matters.",
    },
    es: {
      name: "Assembly",
      description:
        "Una familia de lenguajes de bajo nivel cercana a instrucciones de maquina para arquitecturas especificas.",
      longDescription:
        "Assembly representa instrucciones del procesador, registros, modos de direccionamiento de memoria, etiquetas, directivas y macros usando texto simbolico que se ensambla en codigo maquina.\n\nSe usa en sistemas operativos, firmware embebido, bootloaders, drivers, ingenieria inversa, rutinas criticas de rendimiento y material educativo donde importa el control directo del hardware y las instrucciones.",
    },
  },
} satisfies Language;
