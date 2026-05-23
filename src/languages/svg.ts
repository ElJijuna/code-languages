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
    it: {
      name: "SVG",
      description:
        "Un linguaggio di markup basato su XML per grafica vettoriale bidimensionale scalabile.",
      longDescription:
        "SVG, o Scalable Vector Graphics, e un linguaggio di markup basato su XML per descrivere grafica vettoriale e grafica vettoriale/raster bidimensionale che puo essere scalata in modo pulito su diverse dimensioni dello schermo.\n\nE ampiamente utilizzato per icone, illustrazioni, grafici, diagrammi, mappe, animazioni, grafica interattiva e interfacce web in cui e necessario che le immagini rimangano nitide, stilizzabili, scriptabili e accessibili.",
    },
    fr: {
      name: "SVG",
      description:
        "Un langage de balisage base sur XML pour les graphiques vectoriels bidimensionnels evolutifs.",
      longDescription:
        "SVG, ou Scalable Vector Graphics, est un langage de balisage base sur XML pour decrire les graphiques vectoriels et mixtes vectoriels/raster bidimensionnels qui peuvent etre mis a l'echelle proprement sur differentes tailles d'ecran.\n\nIl est largement utilise pour les icones, les illustrations, les graphiques, les diagrammes, les cartes, les animations, les graphiques interactifs et les interfaces web ou les graphiques doivent rester nets, stylables, scriptables et accessibles.",
    },
    de: {
      name: "SVG",
      description:
        "Eine XML-basierte Markup-Sprache f\u00fcr skalierbare zweidimensionale Vektor-Grafiken.",
      longDescription:
        "SVG, oder Scalable Vector Graphics, ist eine XML-basierte Markup-Sprache zur Beschreibung von zweidimensionalen Vektor- und gemischten Vektor/Raster-Grafiken, die sauber auf unterschiedlichen Bildschirmgr\u00f6\u00dfen skaliert werden k\u00f6nnen.\n\nEs wird h\u00e4ufig f\u00fcr Icons, Illustrationen, Diagramme, Diagramme, Karten, Animationen, interaktive Grafiken und Web-Oberfl\u00e4chen verwendet, bei denen Grafiken scharf, stylbar, skriptf\u00e4hig und zug\u00e4nglich bleiben m\u00fcssen.",
    },
    pt: {
      name: "SVG",
      description:
        "Linguagem de marca\u00e7\u00e3o baseada em XML para gr\u00e1ficos vetoriais bidimensionais escal\u00e1veis.",
      longDescription:
        "SVG, ou Scalable Vector Graphics, \u00e9 uma linguagem de marca\u00e7\u00e3o baseada em XML para descrever gr\u00e1ficos vetoriais e mistos vetoriais/raster bidimensionais que podem ser escalados de forma limpa em diferentes tamanhos de tela.\n\n\u00c9 amplamente utilizada para \u00edcones, ilustra\u00e7\u00f5es, gr\u00e1ficos, diagramas, mapas, anima\u00e7\u00f5es, gr\u00e1ficos interativos e interfaces web onde os gr\u00e1ficos precisam permanecer n\u00edtidos, estil\u00e1veis, script\u00e1veis e acess\u00edveis.",
    },
  },
} satisfies Language;
