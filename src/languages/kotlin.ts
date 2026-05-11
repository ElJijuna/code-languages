import type { Language } from "../types";

export const kotlin = {
  slug: "kotlin",
  publishedDate: "2016-02-15",
  extensions: [".kt", ".kts"],
  author: "JetBrains",
  website: "https://kotlinlang.org",
  paradigms: ["object-oriented", "functional", "imperative", "generic"],
  tooling: {
    runtimes: ["JVM", "Android", "JavaScript", "Native", "Wasm"],
    packageManagers: ["Gradle", "Maven"],
    ecosystems: ["JVM", "Android", "Kotlin Multiplatform"],
  },
  version: "2.3.20",
  logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png",
  i18n: {
    en: {
      name: "Kotlin",
      description:
        "A concise, multiplatform language for JVM, Android, native, and web development.",
      longDescription:
        "Kotlin is a statically typed language developed by JetBrains, designed for interoperability with Java, concise syntax, null safety, coroutines, and multiplatform development.\n\nIt is widely used for Android apps, backend services, Kotlin Multiplatform projects, scripting, data tooling, and applications targeting JVM, JavaScript, Native, and WebAssembly.",
    },
    es: {
      name: "Kotlin",
      description:
        "Un lenguaje conciso y multiplataforma para JVM, Android, nativo y desarrollo web.",
      longDescription:
        "Kotlin es un lenguaje de tipado estatico desarrollado por JetBrains, disenado para interoperar con Java, ofrecer sintaxis concisa, null safety, coroutines y desarrollo multiplataforma.\n\nSe usa ampliamente en apps Android, servicios backend, proyectos Kotlin Multiplatform, scripting, herramientas de datos y aplicaciones para JVM, JavaScript, Native y WebAssembly.",
    },
  },
} satisfies Language;
