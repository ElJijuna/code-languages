import type { Language } from "../types";

export const dhall = {
  slug: "dhall",
  publishedDate: "2016-12-22",
  extensions: [".dhall"],
  author: "Gabriel Gonzalez",
  website: "https://dhall-lang.org",
  paradigms: ["functional", "declarative", "statically typed", "configuration"],
  tooling: {
    runtimes: ["dhall"],
    packageManagers: ["Cabal", "Stack", "Nix"],
    ecosystems: ["Configuration", "Haskell", "DevOps"],
  },
  version: "23.1.0",
  logo: "https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@master/icons/file_type_dhall.svg",
  color: "#184A7D",
  i18n: {
    en: {
      name: "Dhall",
      description: "A programmable, typed configuration language that normalizes safely.",
      longDescription:
        "Dhall is a programmable configuration language with a strong static type system, imports, functions, records, and guaranteed normalization. It is designed to replace repetitive JSON, YAML, and similar configuration formats with reusable typed expressions.\n\nIt is used for infrastructure configuration, application settings, generated YAML or JSON, and systems that need shared configuration without arbitrary code execution.",
    },
    es: {
      name: "Dhall",
      description: "Un lenguaje de configuracion programable, tipado y de normalizacion segura.",
      longDescription:
        "Dhall es un lenguaje de configuracion programable con un sistema de tipos estatico fuerte, imports, funciones, registros y normalizacion garantizada. Esta disenado para reemplazar JSON, YAML y formatos similares repetitivos con expresiones tipadas reutilizables.\n\nSe usa en configuracion de infraestructura, ajustes de aplicaciones, generacion de YAML o JSON y sistemas que necesitan configuracion compartida sin ejecucion arbitraria de codigo.",
    },
  },
} satisfies Language;
