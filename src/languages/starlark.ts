import type { Language } from "../types";

export const starlark = {
  slug: "starlark",
  publishedDate: "2015-03-25",
  extensions: [".bzl", ".star", ".sky"],
  author: "Google / Bazel contributors",
  website: "https://bazel.build/rules/language",
  paradigms: ["scripting", "configuration", "deterministic", "imperative"],
  tooling: {
    runtimes: ["Bazel", "Buck2", "Starlark Go"],
    packageManagers: ["Bzlmod", "Bazel Central Registry"],
    ecosystems: ["Build Systems", "Configuration", "Monorepos", "Tooling"],
  },
  version: "Bazel Starlark",
  logo: "https://cdn.simpleicons.org/bazel/43A047",
  color: "#43A047",
  i18n: {
    en: {
      name: "Starlark",
      description:
        "A deterministic Python-like scripting language for build and configuration tools.",
      longDescription:
        "Starlark is a small, deterministic language with Python-like syntax, designed to be embedded in larger applications. It supports functions, lists, dictionaries, comprehensions, modules, and controlled evaluation while avoiding features that make builds or configuration unpredictable.\n\nIt is best known as Bazel's extension language for rules, macros, repositories, and module extensions, but it is also embedded in other build systems and tools that need safe, reproducible scripting.",
    },
    es: {
      name: "Starlark",
      description:
        "Un lenguaje de scripting determinista similar a Python para herramientas de build y configuracion.",
      longDescription:
        "Starlark es un lenguaje pequeno y determinista con sintaxis similar a Python, disenado para embeberse en aplicaciones mas grandes. Soporta funciones, listas, diccionarios, comprehensions, modulos y evaluacion controlada, evitando caracteristicas que vuelven impredecibles los builds o la configuracion.\n\nEs conocido principalmente como el lenguaje de extension de Bazel para reglas, macros, repositorios y extensiones de modulos, pero tambien se integra en otros sistemas de build y herramientas que necesitan scripting seguro y reproducible.",
    },
  },
} satisfies Language;
