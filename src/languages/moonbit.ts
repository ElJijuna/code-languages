import type { Language } from "../types";

export const moonbit = {
  slug: "moonbit",
  publishedDate: "2023-08-18",
  extensions: [".mbt"],
  author: "MoonBit Team",
  website: "https://www.moonbitlang.com",
  paradigms: ["functional", "statically typed", "multi-paradigm", "wasm"],
  tooling: {
    runtimes: ["MoonBit toolchain", "WebAssembly", "JavaScript"],
    packageManagers: ["moon"],
    ecosystems: ["WebAssembly", "Web", "Embedded"],
  },
  version: "0.9.2",
  logo: "https://avatars.githubusercontent.com/u/124476259?v=4",
  color: "#F4B728",
  i18n: {
    en: {
      name: "MoonBit",
      description: "A statically typed language and toolchain designed for WebAssembly output.",
      longDescription:
        "MoonBit is a language and toolchain built around fast feedback, algebraic data types, pattern matching, and multiple backends including WebAssembly. Its package and test tools are designed as part of the language workflow.\n\nIt is used for WebAssembly libraries, command-line experiments, web runtimes, teaching, and projects that want compact typed code with integrated tooling.",
    },
    es: {
      name: "MoonBit",
      description: "Un lenguaje tipado y toolchain disenado para generar WebAssembly.",
      longDescription:
        "MoonBit es un lenguaje y toolchain construido alrededor de feedback rapido, tipos algebraicos, pattern matching y varios backends, incluido WebAssembly. Sus herramientas de paquetes y pruebas forman parte del flujo del lenguaje.\n\nSe usa en bibliotecas WebAssembly, experimentos de linea de comandos, runtimes web, ensenanza y proyectos que buscan codigo tipado compacto con tooling integrado.",
    },
  },
} satisfies Language;
