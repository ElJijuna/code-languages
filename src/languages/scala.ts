import type { Language } from "../types";

export const scala = {
  slug: "scala",
  publishedDate: "2004-01-20",
  extensions: [".scala", ".sc"],
  author: "Martin Odersky / EPFL",
  website: "https://www.scala-lang.org",
  paradigms: ["object-oriented", "functional", "statically-typed", "concurrent"],
  tooling: {
    runtimes: ["JVM", "Scala.js", "Scala Native"],
    packageManagers: ["sbt", "Maven", "Gradle", "Scala CLI"],
    ecosystems: ["JVM", "Web", "Data Engineering", "Distributed Systems"],
  },
  version: "3.8.3",
  logo: "https://cdn.simpleicons.org/scala/DC322F",
  color: "#DC322F",
  i18n: {
    en: {
      name: "Scala",
      description:
        "A JVM language that blends object-oriented and functional programming with strong static typing.",
      longDescription:
        "Scala is a general-purpose programming language that combines object-oriented and functional programming on the JVM. It includes strong static typing, type inference, pattern matching, higher-order functions, traits, implicits or givens, and interoperability with Java libraries.\n\nIt is used for backend services, data engineering, distributed systems, streaming pipelines, domain modeling, and applications that benefit from expressive abstractions while staying connected to the JVM ecosystem.",
    },
    es: {
      name: "Scala",
      description:
        "Un lenguaje JVM que combina programacion orientada a objetos y funcional con tipado estatico fuerte.",
      longDescription:
        "Scala es un lenguaje de programacion de proposito general que combina programacion orientada a objetos y funcional sobre la JVM. Incluye tipado estatico fuerte, inferencia de tipos, pattern matching, funciones de orden superior, traits, implicits o givens e interoperabilidad con bibliotecas Java.\n\nSe usa en servicios backend, ingenieria de datos, sistemas distribuidos, pipelines de streaming, modelado de dominios y aplicaciones que aprovechan abstracciones expresivas sin salir del ecosistema JVM.",
    },
    it: {
      name: "Scala",
      description:
        "Un linguaggio JVM che combina la programmazione orientata agli oggetti e funzionale con un forte tipaggio statico.",
      longDescription:
        "Scala e un linguaggio di programmazione di uso generale che combina la programmazione orientata agli oggetti e funzionale sulla JVM. Include un forte tipaggio statico, inferenza dei tipi, corrispondenza di pattern, funzioni di ordine superiore, traits, impliciti o givens, e interoperabilita con le librerie Java.\n\nViene utilizzato per servizi backend, ingegneria dei dati, sistemi distribuiti, pipeline di streaming, modellazione del dominio e applicazioni che beneficiano di astrazioni espressive rimanendo connesse all'ecosistema JVM.",
    },
    fr: {
      name: "Scala",
      description:
        "Un langage JVM qui combine la programmation orientee objet et fonctionnelle avec un typage statique fort.",
      longDescription:
        "Scala est un langage de programmation general a usage unique qui combine la programmation orientee objet et fonctionnelle sur la JVM. Il inclut un typage statique fort, l'inference de type, la correspondance de motifs, les fonctions de haut niveau, les traits, les implicites ou les givens, et l'interoperabilite avec les bibliotheques Java.\n\nIl est utilise pour les services backend, l'ingenierie des donnees, les systemes distribues, les pipelines de streaming, la modelisation de domaine, et les applications qui beneficient d'abstractions expressives tout en restant connectees a l'ecosysteme JVM.",
    },
  },
} satisfies Language;
