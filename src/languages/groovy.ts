import type { Language } from "../types";

export const groovy = {
  slug: "groovy",
  publishedDate: "2007-01-02",
  extensions: [".groovy", ".gvy", ".gy", ".gsh"],
  author: "James Strachan / Apache Software Foundation",
  website: "https://groovy.apache.org",
  paradigms: ["object-oriented", "functional", "dynamic", "scripting"],
  version: "5.0.5",
  logo: "https://groovy-lang.org/img/groovy-logo.svg",
  i18n: {
    en: {
      name: "Groovy",
      description: "A dynamic language for the JVM with Java-like syntax and scripting features.",
      longDescription:
        "Groovy is a JVM language that integrates with Java while adding dynamic typing, concise syntax, closures, builders, metaprogramming, and scripting capabilities.\n\nIt is used for automation, testing, build scripts, Gradle plugins, web applications, and JVM projects that benefit from expressive syntax and Java interoperability.",
    },
    es: {
      name: "Groovy",
      description:
        "Un lenguaje dinamico para la JVM con sintaxis similar a Java y funciones de scripting.",
      longDescription:
        "Groovy es un lenguaje para la JVM que se integra con Java y agrega tipado dinamico, sintaxis concisa, closures, builders, metaprogramacion y capacidades de scripting.\n\nSe usa para automatizacion, testing, scripts de build, plugins de Gradle, aplicaciones web y proyectos JVM que se benefician de sintaxis expresiva e interoperabilidad con Java.",
    },
  },
} satisfies Language;
