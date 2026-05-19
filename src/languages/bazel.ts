import type { Language } from "../types";

export const bazel = {
  slug: "bazel",
  publishedDate: "2015-03-25",
  extensions: ["BUILD.bazel", "WORKSPACE", "WORKSPACE.bazel", "MODULE.bazel"],
  author: "Google / Bazel contributors",
  website: "https://bazel.build",
  paradigms: ["declarative", "build-configuration", "hermetic", "monorepo"],
  tooling: {
    runtimes: ["Bazel"],
    packageManagers: ["Bzlmod", "Bazel Central Registry"],
    ecosystems: ["Build Systems", "Monorepos", "CI/CD", "Polyglot Repositories"],
  },
  version: "9.1.0",
  logo: "https://cdn.simpleicons.org/bazel/43A047",
  i18n: {
    en: {
      name: "Bazel",
      description:
        "A build and test configuration language for fast, reproducible multi-language builds.",
      longDescription:
        "Bazel files describe packages, targets, dependencies, toolchains, platforms, modules, and build rules for Bazel's hermetic build graph. BUILD and MODULE files are declarative, while extension logic is commonly written in Starlark.\n\nIt is used in monorepos, large-scale CI systems, polyglot projects, remote execution workflows, reproducible builds, dependency graph analysis, and teams that need consistent builds across machines and languages.",
    },
    es: {
      name: "Bazel",
      description:
        "Un lenguaje de configuracion de build y test para compilaciones rapidas y reproducibles.",
      longDescription:
        "Los archivos Bazel describen paquetes, targets, dependencias, toolchains, plataformas, modulos y reglas para el grafo de build hermetico de Bazel. Los archivos BUILD y MODULE son declarativos, mientras que la logica de extension suele escribirse en Starlark.\n\nSe usa en monorepos, sistemas CI a gran escala, proyectos poliglota, remote execution, builds reproducibles, analisis de grafos de dependencias y equipos que necesitan builds consistentes entre maquinas y lenguajes.",
    },
  },
} satisfies Language;
