import type { Language } from "../types";

export const mojo = {
  slug: "mojo",
  publishedDate: "2023-05-02",
  extensions: [".mojo"],
  author: "Modular",
  website: "https://www.modular.com/mojo",
  paradigms: ["imperative", "systems", "statically typed", "data-oriented"],
  tooling: {
    runtimes: ["Mojo toolchain", "MAX"],
    packageManagers: ["pixi", "pip"],
    ecosystems: ["AI", "Accelerators", "Python"],
  },
  version: "0.26.1",
  logo: "https://avatars.githubusercontent.com/u/107116314?v=4",
  i18n: {
    en: {
      name: "Mojo",
      description: "A systems-oriented language for AI and accelerator-aware programming.",
      longDescription:
        "Mojo is a language from Modular that combines Python-friendly syntax with ownership, value semantics, low-level control, and compiler features aimed at performance-sensitive code. Its toolchain targets CPUs and accelerator workflows.\n\nIt is used in experiments around AI kernels, numeric code, systems programming, Python-adjacent libraries, and workloads that need explicit performance control.",
    },
    es: {
      name: "Mojo",
      description: "Un lenguaje orientado a sistemas para IA y programacion con aceleradores.",
      longDescription:
        "Mojo es un lenguaje de Modular que combina una sintaxis cercana a Python con ownership, semantica de valores, control de bajo nivel y funciones de compilador pensadas para codigo sensible al rendimiento. Su toolchain apunta a CPUs y flujos con aceleradores.\n\nSe usa en experimentos con kernels de IA, codigo numerico, programacion de sistemas, bibliotecas cercanas a Python y cargas que necesitan control explicito del rendimiento.",
    },
  },
} satisfies Language;
