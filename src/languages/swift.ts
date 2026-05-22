import type { Language } from "../types";

export const swift = {
  slug: "swift",
  publishedDate: "2014-06-02",
  extensions: [".swift"],
  author: "Chris Lattner / Apple",
  website: "https://www.swift.org",
  paradigms: ["object-oriented", "functional", "imperative", "protocol-oriented"],
  tooling: {
    runtimes: ["Apple platforms", "Linux", "Windows"],
    packageManagers: ["Swift Package Manager"],
    ecosystems: ["Apple", "Server-side Swift"],
  },
  version: "6.3.1",
  logo: "https://www.swift.org/assets/images/swift.svg",
  color: "#F05138",
  i18n: {
    en: {
      name: "Swift",
      description: "A safe, fast programming language for apps, systems, and server software.",
      longDescription:
        "Swift is a compiled programming language designed for safety, performance, expressiveness, and interoperability with Apple platform ecosystems.\n\nIt is used for iOS, macOS, watchOS, tvOS, server-side applications, command-line tools, systems programming, and cross-platform software.",
    },
    es: {
      name: "Swift",
      description: "Un lenguaje seguro y rapido para apps, sistemas y software de servidor.",
      longDescription:
        "Swift es un lenguaje de programacion compilado disenado para seguridad, rendimiento, expresividad e interoperabilidad con los ecosistemas de plataformas Apple.\n\nSe usa para iOS, macOS, watchOS, tvOS, aplicaciones del lado del servidor, herramientas de linea de comandos, programacion de sistemas y software multiplataforma.",
    },
  },
} satisfies Language;
