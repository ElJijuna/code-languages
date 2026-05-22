import type { Language } from "../types";

export const svg = {
  slug: "svg",
  publishedDate: "2001-09-04",
  extensions: [".svg", ".svgz"],
  author: "W3C SVG Working Group",
  website: "https://www.w3.org/TR/SVG/",
  paradigms: ["declarative", "markup", "vector-graphics", "xml-based"],
  tooling: {
    runtimes: ["Web browsers", "SVG viewers", "Vector graphics editors"],
    ecosystems: ["Web", "Design Tools", "Data Visualization"],
  },
  version: "SVG 2",
  logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/SVG_Logo.svg",
  color: "#FFB13B",
  i18n: {
    en: {
      name: "SVG",
      description: "An XML-based markup language for scalable two-dimensional vector graphics.",
      longDescription:
        "SVG, or Scalable Vector Graphics, is an XML-based markup language for describing two-dimensional vector and mixed vector/raster graphics that can scale cleanly across display sizes.\n\nIt is widely used for icons, illustrations, charts, diagrams, maps, animations, interactive graphics, and web interfaces where graphics need to remain crisp, stylable, scriptable, and accessible.",
    },
    es: {
      name: "SVG",
      description:
        "Un lenguaje de marcado basado en XML para graficos vectoriales bidimensionales escalables.",
      longDescription:
        "SVG, o Scalable Vector Graphics, es un lenguaje de marcado basado en XML para describir graficos vectoriales bidimensionales y graficos mixtos vector/raster que pueden escalar limpiamente entre tamanos de pantalla.\n\nSe usa ampliamente en iconos, ilustraciones, graficos, diagramas, mapas, animaciones, graficos interactivos e interfaces web donde las imagenes deben mantenerse nitidas, estilizables, programables y accesibles.",
    },
  },
} satisfies Language;
