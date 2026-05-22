import type { Language } from "../types";

export const stata = {
  slug: "stata",
  publishedDate: "1985-01-01",
  extensions: [".do", ".ado", ".mata"],
  author: "StataCorp",
  website: "https://www.stata.com",
  paradigms: ["statistical", "scripting", "data-analysis", "domain-specific"],
  tooling: {
    runtimes: ["Stata"],
    ecosystems: ["Statistics", "Econometrics", "Research"],
  },
  version: "19",
  logo: "https://www.stata.com/includes/images/stata-logo-blue.svg",
  color: "#1A5276",
  i18n: {
    en: {
      name: "Stata",
      description: "A command language for statistical analysis, data management, and graphics.",
      longDescription:
        "Stata commands and do-files cover data preparation, estimation, graphics, reporting, and programmable workflows, with Mata available for matrix-oriented programming. The language is tied to the Stata statistical environment.\n\nIt is used in economics, public health, social science, policy analysis, teaching, and reproducible statistical research.",
    },
    es: {
      name: "Stata",
      description: "Un lenguaje de comandos para analisis estadistico, datos y graficos.",
      longDescription:
        "Los comandos y do-files de Stata cubren preparacion de datos, estimacion, graficos, reportes y flujos programables, con Mata para programacion orientada a matrices. El lenguaje esta ligado al entorno estadistico Stata.\n\nSe usa en economia, salud publica, ciencias sociales, analisis de politicas, ensenanza e investigacion estadistica reproducible.",
    },
  },
} satisfies Language;
