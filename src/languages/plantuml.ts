import type { Language } from "../types";

export const plantuml = {
  slug: "plantuml",
  publishedDate: "2009-04-17",
  extensions: [".puml", ".plantuml", ".iuml"],
  author: "Arnaud Roques / PlantUML contributors",
  website: "https://plantuml.com",
  paradigms: ["declarative", "diagramming", "modeling"],
  tooling: {
    runtimes: ["Java", "PlantUML Server"],
    packageManagers: ["Maven", "Gradle", "npm"],
    ecosystems: ["UML", "Architecture", "Documentation", "Diagrams"],
  },
  version: "1.2026.3",
  logo: "https://plantuml.com/logo3.png",
  color: "#FBB03B",
  i18n: {
    en: {
      name: "PlantUML",
      description:
        "A text-based diagram language for UML, architecture, and documentation diagrams.",
      longDescription:
        "PlantUML is a diagram language and renderer for sequence, class, activity, component, state, object, deployment, timing, mind map, and architecture diagrams. It lets teams keep diagrams in source control and generate images from compact text.\n\nIt is used in software architecture documentation, design reviews, technical specs, wikis, CI-generated diagrams, and projects that prefer versionable diagrams over manually edited drawing files.",
    },
    es: {
      name: "PlantUML",
      description: "Un lenguaje textual de diagramas para UML, arquitectura y documentacion.",
      longDescription:
        "PlantUML es un lenguaje y renderer de diagramas para secuencia, clases, actividad, componentes, estados, objetos, despliegue, timing, mapas mentales y arquitectura. Permite mantener diagramas en control de versiones y generar imagenes desde texto compacto.\n\nSe usa en documentacion de arquitectura de software, revisiones de diseno, especificaciones tecnicas, wikis, diagramas generados en CI y proyectos que prefieren diagramas versionables a archivos de dibujo editados manualmente.",
    },
  },
} satisfies Language;
