import type { Language } from "../types";

export const cpp = {
  slug: "cpp",
  publishedDate: "1985-10-01",
  extensions: [".cpp", ".cc", ".cxx", ".h", ".hpp", ".hh", ".hxx"],
  author: "Bjarne Stroustrup",
  website: "https://isocpp.org",
  paradigms: ["procedural", "object-oriented", "generic", "functional"],
  tooling: {
    runtimes: ["Native"],
    packageManagers: ["Conan", "vcpkg"],
    ecosystems: ["Systems", "Game Development", "Embedded"],
  },
  version: "C++23",
  logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
  color: "#00599C",
  i18n: {
    en: {
      name: "C++",
      description:
        "A high-performance general-purpose language for systems, applications, games, and embedded software.",
      longDescription:
        "C++ extends C with classes, templates, exceptions, namespaces, generic programming, deterministic resource management, and a large standard library.\n\nIt is widely used for operating systems, game engines, browsers, compilers, databases, financial systems, embedded devices, and software where performance and control over memory matter.",
    },
    es: {
      name: "C++",
      description:
        "Un lenguaje general de alto rendimiento para sistemas, aplicaciones, juegos y software embebido.",
      longDescription:
        "C++ extiende C con clases, plantillas, excepciones, espacios de nombres, programacion generica, gestion determinista de recursos y una gran biblioteca estandar.\n\nSe usa ampliamente en sistemas operativos, motores de videojuegos, navegadores, compiladores, bases de datos, sistemas financieros, dispositivos embebidos y software donde importan el rendimiento y el control de memoria.",
    },
  },
} satisfies Language;
