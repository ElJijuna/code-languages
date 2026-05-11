import type { Language } from "../types";

export const python = {
  slug: "python",
  publishedDate: "1991-02-20",
  extensions: [".py", ".pyw"],
  author: "Guido van Rossum",
  website: "https://www.python.org",
  paradigms: ["object-oriented", "functional", "imperative", "procedural"],
  version: "3.14.4",
  logo: "https://www.python.org/static/community_logos/python-logo-only.svg",
  i18n: {
    en: {
      name: "Python",
      description:
        "A high-level, readable language used for applications, automation, data, and AI.",
      longDescription:
        "Python emphasizes readability, a compact syntax, and a broad standard library, making it popular for scripting, backend services, data analysis, education, and scientific computing.\n\nIts ecosystem includes major frameworks and packages for web development, automation, machine learning, numerical computing, testing, and command-line tooling.",
    },
    es: {
      name: "Python",
      description:
        "Un lenguaje de alto nivel y legible usado en aplicaciones, automatizacion, datos e IA.",
      longDescription:
        "Python enfatiza la legibilidad, una sintaxis compacta y una biblioteca estandar amplia, lo que lo hace popular para scripting, servicios backend, analisis de datos, educacion y computacion cientifica.\n\nSu ecosistema incluye frameworks y paquetes importantes para desarrollo web, automatizacion, machine learning, computacion numerica, testing y herramientas de linea de comandos.",
    },
  },
} satisfies Language;
