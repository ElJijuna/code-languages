import type { Language } from "../types";

export const odin = {
  slug: "odin",
  publishedDate: "2016-11-05",
  extensions: [".odin"],
  author: "Ginger Bill",
  website: "https://odin-lang.org",
  paradigms: ["imperative", "procedural", "systems", "data-oriented"],
  tooling: {
    runtimes: ["Odin compiler"],
    packageManagers: ["odin"],
    ecosystems: ["Systems", "Game Development", "Native"],
  },
  version: "dev-2026-02",
  logo: "https://avatars.githubusercontent.com/u/12533910?v=4",
  color: "#3882D2",
  i18n: {
    en: {
      name: "Odin",
      description: "A data-oriented systems language for native software and game tooling.",
      longDescription:
        "Odin is a procedural systems programming language with explicit memory control, packages, foreign interfaces, custom allocators, and language features oriented toward data layout. It favors straightforward native code over large runtime machinery.\n\nIt is used for engines, tools, graphics programs, native utilities, and performance-sensitive applications where predictable control over data matters.",
    },
    es: {
      name: "Odin",
      description: "Un lenguaje de sistemas orientado a datos para software nativo y juegos.",
      longDescription:
        "Odin es un lenguaje procedural de programacion de sistemas con control explicito de memoria, paquetes, interfaces externas, allocators personalizados y funciones orientadas al layout de datos. Favorece codigo nativo directo sobre runtimes grandes.\n\nSe usa en motores, herramientas, programas graficos, utilidades nativas y aplicaciones sensibles al rendimiento donde importa el control predecible de los datos.",
    },
  },
} satisfies Language;
