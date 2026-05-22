import type { Language } from "../types";

export const clojure = {
  slug: "clojure",
  publishedDate: "2007-10-16",
  extensions: [".clj", ".cljs", ".cljc", ".edn", ".bb"],
  author: "Rich Hickey",
  website: "https://clojure.org",
  paradigms: ["functional", "lisp", "concurrent", "dynamic", "immutable-data"],
  tooling: {
    runtimes: ["JVM", "ClojureScript", "Babashka", "ClojureCLR"],
    packageManagers: ["Clojure CLI", "Leiningen", "Boot", "Maven"],
    ecosystems: ["JVM", "JavaScript", "Data Processing", "Web", "REPL-driven Development"],
  },
  version: "1.12.5",
  logo: "https://cdn.simpleicons.org/clojure/5881D8",
  color: "#5881D8",
  i18n: {
    en: {
      name: "Clojure",
      description:
        "A modern Lisp for the JVM and JavaScript ecosystems with immutable data and interactive development.",
      longDescription:
        "Clojure is a dynamic functional Lisp dialect designed for practical software development on hosted runtimes. It emphasizes immutable persistent data structures, first-class functions, macros, namespaces, protocols, software transactional memory, and REPL-driven workflows.\n\nIt is used for backend services, data pipelines, interactive systems, scripting with Babashka, web applications, distributed systems, and projects that benefit from a small language core with strong data-oriented programming practices.",
    },
    es: {
      name: "Clojure",
      description:
        "Un Lisp moderno para los ecosistemas JVM y JavaScript con datos inmutables y desarrollo interactivo.",
      longDescription:
        "Clojure es un dialecto Lisp funcional y dinamico disenado para desarrollo practico de software sobre runtimes hospedados. Enfatiza estructuras de datos persistentes e inmutables, funciones de primera clase, macros, namespaces, protocolos, memoria transaccional de software y flujos guiados por REPL.\n\nSe usa en servicios backend, pipelines de datos, sistemas interactivos, scripting con Babashka, aplicaciones web, sistemas distribuidos y proyectos que se benefician de un nucleo pequeno de lenguaje con practicas fuertes de programacion orientada a datos.",
    },
  },
} satisfies Language;
