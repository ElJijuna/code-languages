import type { Language } from "../types";

export const gradle = {
  slug: "gradle",
  publishedDate: "2007-07-01",
  extensions: [".gradle", ".gradle.kts"],
  author: "Hans Dockter / Gradle Inc.",
  website: "https://gradle.org",
  paradigms: ["build-automation", "declarative", "imperative", "configuration"],
  tooling: {
    runtimes: ["JVM", "Gradle"],
    packageManagers: ["Gradle"],
    ecosystems: ["JVM", "Android", "Java", "Kotlin", "Groovy"],
  },
  version: "9.5.1",
  logo: "https://cdn.simpleicons.org/gradle/02303A",
  color: "#02303A",
  i18n: {
    en: {
      name: "Gradle",
      description:
        "A build automation DSL and tool used to define, configure, and run software builds.",
      longDescription:
        "Gradle build scripts define projects, plugins, dependencies, repositories, tasks, test suites, publishing rules, and multi-project build logic using Groovy DSL or Kotlin DSL files.\n\nIt is widely used in Java, Kotlin, Android, JVM, and polyglot projects that need reproducible builds, dependency management, custom automation, and integration with CI/CD pipelines.",
    },
    es: {
      name: "Gradle",
      description:
        "Un DSL y herramienta de automatizacion de builds usado para definir, configurar y ejecutar builds.",
      longDescription:
        "Los scripts de build de Gradle definen proyectos, plugins, dependencias, repositorios, tareas, suites de prueba, reglas de publicacion y logica de builds multiproyecto usando archivos Groovy DSL o Kotlin DSL.\n\nSe usa ampliamente en proyectos Java, Kotlin, Android, JVM y poliglotas que necesitan builds reproducibles, gestion de dependencias, automatizacion personalizada e integracion con pipelines CI/CD.",
    },
  },
} satisfies Language;
