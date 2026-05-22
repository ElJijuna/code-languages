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
  version: "2.3.21",
  logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png",
  color: "#7F52FF",
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
    it: {
      name: "Kotlin",
      description:
        "Un linguaggio conciso e multipiattaforma per JVM, Android, sviluppo nativo e web.",
      longDescription:
        "Kotlin e un linguaggio staticamente tipizzato sviluppato da JetBrains, progettato per l'interoperabilita con Java, sintassi concisa, sicurezza contro i null, coroutine e sviluppo multipiattaforma.\n\nE ampiamente utilizzato per app Android, servizi backend, progetti Kotlin Multiplatform, scripting, strumenti per la gestione dei dati e applicazioni che mirano a JVM, JavaScript, Native e WebAssembly.",
    },
    fr: {
      name: "Kotlin",
      description:
        "Un langage concis, multiplateforme pour JVM, Android, developpement natif et web.",
      longDescription:
        "Kotlin est un langage de type statique developpe par JetBrains, concu pour l'interoperabilite avec Java, une syntaxe concise, la securite contre les nulls, les coroutines et le developpement multiplateforme.\n\nIl est largement utilise pour les applications Android, les services backend, les projets Kotlin Multiplatform, le scripting, les outils de donnees et les applications ciblant JVM, JavaScript, Native et WebAssembly.",
    },
  },
} satisfies Language;
