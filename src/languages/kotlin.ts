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
    de: {
      name: "Kotlin",
      description:
        "Eine pr\u00e4gnante, plattform\u00fcbergreifende Sprache f\u00fcr JVM, Android, native und Web-Entwicklung.",
      longDescription:
        "Kotlin ist eine statisch typisierte Sprache von JetBrains, die f\u00fcr die Interoperabilit\u00e4t mit Java, eine pr\u00e4gnante Syntax, Null-Sicherheit, Coroutinen und plattform\u00fcbergreifende Entwicklung entwickelt wurde.\n\nSie wird h\u00e4ufig f\u00fcr Android-Apps, Backend-Dienste, Kotlin Multiplatform-Projekte, Skripting, Datenwerkzeuge und Anwendungen verwendet, die auf JVM, JavaScript, Native und WebAssembly abzielen.",
    },
    pt: {
      name: "Kotlin",
      description:
        "Linguagem concisa e multiplataforma para JVM, Android, nativo e desenvolvimento web.",
      longDescription:
        "Kotlin \u00e9 uma linguagem estaticamente tipada desenvolvida pela JetBrains, projetada para interoperabilidade com Java, sintaxe concisa, seguran\u00e7a contra nulos, corrotinas e desenvolvimento multiplataforma.\n\n\u00c9 amplamente utilizada para aplicativos Android, servi\u00e7os de backend, projetos Kotlin Multiplatform, scripting, ferramentas de dados e aplica\u00e7\u00f5es direcionadas para JVM, JavaScript, Nativo e WebAssembly.",
    },
  },
} satisfies Language;
