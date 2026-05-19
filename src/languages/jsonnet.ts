import type { Language } from "../types";

export const jsonnet = {
  slug: "jsonnet",
  publishedDate: "2014-04-01",
  extensions: [".jsonnet", ".libsonnet"],
  author: "Google",
  website: "https://jsonnet.org",
  paradigms: ["functional", "declarative", "configuration"],
  tooling: {
    runtimes: ["Jsonnet", "go-jsonnet"],
    packageManagers: ["jsonnet-bundler"],
    ecosystems: ["Configuration", "Kubernetes", "Infrastructure"],
  },
  version: "0.21.0",
  logo: "https://jsonnet.org/img/isologo.svg",
  i18n: {
    en: {
      name: "Jsonnet",
      description:
        "A data templating language for generating JSON and related configuration formats.",
      longDescription:
        "Jsonnet adds variables, functions, imports, conditionals, object composition, and other programming constructs to a JSON-like syntax for generating structured data.\n\nIt is commonly used for Kubernetes manifests, infrastructure configuration, application settings, and reusable configuration libraries where plain JSON becomes repetitive.",
    },
    es: {
      name: "Jsonnet",
      description:
        "Un lenguaje de plantillas de datos para generar JSON y formatos de configuracion relacionados.",
      longDescription:
        "Jsonnet agrega variables, funciones, imports, condicionales, composicion de objetos y otros constructos de programacion a una sintaxis similar a JSON para generar datos estructurados.\n\nSe usa comunmente en manifiestos de Kubernetes, configuracion de infraestructura, ajustes de aplicaciones y bibliotecas reutilizables de configuracion cuando JSON plano se vuelve repetitivo.",
    },
  },
} satisfies Language;
