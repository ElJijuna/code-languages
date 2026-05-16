import type { Language } from "../types";

export const awk = {
  slug: "awk",
  publishedDate: "1977-01-01",
  extensions: [".awk"],
  author: "Alfred Aho, Peter Weinberger, Brian Kernighan",
  website: "https://www.gnu.org/software/gawk/",
  paradigms: ["text-processing", "scripting", "pattern-action", "data-driven"],
  tooling: {
    runtimes: ["awk", "gawk", "mawk", "nawk"],
    packageManagers: ["APT", "DNF", "Pacman", "Homebrew"],
    ecosystems: ["Unix", "Text Processing", "Shell", "Data Extraction"],
  },
  version: "GNU Awk 5.4.0",
  logo: "https://www.gnu.org/graphics/heckert_gnu.small.png",
  i18n: {
    en: {
      name: "awk",
      description:
        "A pattern-action language for scanning, transforming, and reporting on text data.",
      longDescription:
        "awk is a compact text-processing language built around pattern-action rules, records, fields, associative arrays, regular expressions, and streaming input. It is commonly available on Unix-like systems, with GNU Awk adding many extensions and tooling conveniences.\n\nIt is used for command-line data extraction, log processing, report generation, one-off transformations, shell pipelines, lightweight ETL tasks, and scripts that need concise processing of structured or semi-structured text.",
    },
    es: {
      name: "awk",
      description:
        "Un lenguaje de patron-accion para analizar, transformar y reportar datos de texto.",
      longDescription:
        "awk es un lenguaje compacto de procesamiento de texto basado en reglas patron-accion, registros, campos, arreglos asociativos, expresiones regulares y entrada en streaming. Esta disponible comunmente en sistemas tipo Unix, con GNU Awk agregando muchas extensiones y comodidades de tooling.\n\nSe usa para extraccion de datos en linea de comandos, procesamiento de logs, generacion de reportes, transformaciones puntuales, pipelines de shell, tareas ETL ligeras y scripts que necesitan procesar texto estructurado o semiestructurado de forma concisa.",
    },
  },
} satisfies Language;
