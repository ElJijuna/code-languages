import type { Language } from "../types";

export const cobol = {
  slug: "cobol",
  publishedDate: "1959-12-18",
  extensions: [".cob", ".cbl", ".cobol", ".cpy"],
  author: "CODASYL",
  website: "https://www.iso.org/standard/74527.html",
  paradigms: ["imperative", "object-oriented", "procedural", "structured"],
  tooling: {
    runtimes: ["IBM Enterprise COBOL", "GnuCOBOL", "Micro Focus COBOL"],
    ecosystems: ["Mainframe", "Business applications", "Transaction processing"],
  },
  version: "ISO/IEC 1989:2023",
  logo: "https://logo.svgcdn.com/devicon/cobol-original.png",
  color: "#005CA5",
  i18n: {
    en: {
      name: "COBOL",
      description: "A business-oriented language for long-lived, data-heavy enterprise systems.",
      longDescription:
        "COBOL is a business-oriented programming language created by CODASYL for readable, portable data processing across commercial computing systems. Its syntax emphasizes English-like statements, structured records, decimal arithmetic, batch processing, and report-oriented workflows.\n\nIt is used in banking, insurance, government, payroll, transaction processing, mainframe systems, and modernization projects where large, durable business codebases continue to run critical operations.",
    },
    es: {
      name: "COBOL",
      description:
        "Un lenguaje orientado al negocio para sistemas empresariales duraderos y centrados en datos.",
      longDescription:
        "COBOL es un lenguaje de programacion orientado al negocio creado por CODASYL para procesamiento de datos legible y portable en sistemas comerciales. Su sintaxis prioriza sentencias similares al ingles, registros estructurados, aritmetica decimal, procesamiento por lotes y flujos orientados a reportes.\n\nSe usa en banca, seguros, gobierno, nominas, procesamiento transaccional, sistemas mainframe y proyectos de modernizacion donde grandes bases de codigo empresarial siguen ejecutando operaciones criticas.",
    },
  },
} satisfies Language;
