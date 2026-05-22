import type { Language } from "../types";

export const cue = {
  slug: "cue",
  publishedDate: "2019-02-27",
  extensions: [".cue"],
  author: "Marcel van Lohuizen / CUE contributors",
  website: "https://cue.dev",
  paradigms: ["declarative", "constraint-based", "data-validation", "configuration"],
  tooling: {
    runtimes: ["CUE CLI", "Go"],
    packageManagers: ["Go modules"],
    ecosystems: ["Configuration", "Validation", "Kubernetes", "DevOps"],
  },
  version: "0.16.1",
  logo: "https://avatars.githubusercontent.com/u/43867057?s=200&v=4",
  color: "#1F6BFF",
  i18n: {
    en: {
      name: "CUE",
      description:
        "A constraint-based language for configuration, data validation, and generation.",
      longDescription:
        "CUE combines configuration data, schemas, validation rules, and policy constraints in one language. Its values can be incomplete, unified, exported, and checked against structural constraints, making it useful for managing complex data definitions.\n\nIt is used with Kubernetes manifests, JSON, YAML, OpenAPI, Protobuf, CI configuration, infrastructure definitions, and systems that need one source of truth for data shape and validation.",
    },
    es: {
      name: "CUE",
      description:
        "Un lenguaje basado en restricciones para configuracion, validacion y generacion de datos.",
      longDescription:
        "CUE combina datos de configuracion, esquemas, reglas de validacion y restricciones de politica en un solo lenguaje. Sus valores pueden estar incompletos, unificarse, exportarse y comprobarse contra restricciones estructurales, lo que ayuda a gestionar definiciones de datos complejas.\n\nSe usa con manifiestos Kubernetes, JSON, YAML, OpenAPI, Protobuf, configuracion de CI, definiciones de infraestructura y sistemas que necesitan una fuente unica para forma y validacion de datos.",
    },
  },
} satisfies Language;
