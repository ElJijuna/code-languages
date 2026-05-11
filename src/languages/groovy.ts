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
  },
} satisfies Language;
