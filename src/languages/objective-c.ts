import type { Language } from "../types";

export const objectiveC = {
  slug: "objective-c",
  publishedDate: "1984-01-01",
  extensions: [".m", ".mm"],
  author: "Brad Cox / Tom Love",
  website:
    "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/",
  paradigms: ["class-based", "dynamic", "object-oriented", "reflective"],
  tooling: {
    runtimes: ["Objective-C runtime", "Apple platforms", "GNUstep"],
    packageManagers: ["CocoaPods", "Swift Package Manager"],
    ecosystems: ["Apple", "Cocoa", "Cocoa Touch", "GNUstep"],
  },
  version: "2.0",
  logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Apple_logo_grey.svg",
  color: "#438EFF",
  i18n: {
    en: {
      name: "Objective-C",
      description: "A C superset with Smalltalk-style messaging and a dynamic object runtime.",
      longDescription:
        "Objective-C is an object-oriented extension of C that adds Smalltalk-style message passing, dynamic dispatch, classes, protocols, categories, and runtime reflection.\n\nIt was historically central to NeXTSTEP, macOS, iOS, Cocoa, and Cocoa Touch development, and remains important for maintaining Apple platform codebases and interoperating with C, C++, and Swift.",
    },
    es: {
      name: "Objective-C",
      description:
        "Un superconjunto de C con mensajeria estilo Smalltalk y runtime dinamico de objetos.",
      longDescription:
        "Objective-C es una extension orientada a objetos de C que agrega envio de mensajes estilo Smalltalk, despacho dinamico, clases, protocolos, categorias y reflexion en runtime.\n\nFue central historicamente en el desarrollo para NeXTSTEP, macOS, iOS, Cocoa y Cocoa Touch, y sigue siendo importante para mantener codebases de plataformas Apple e interoperar con C, C++ y Swift.",
    },
  },
} satisfies Language;
