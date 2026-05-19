import type { Language } from "../types";

export const antlr = {
  slug: "antlr",
  publishedDate: "1989-02-01",
  extensions: [".g4"],
  author: "Terence Parr",
  website: "https://www.antlr.org",
  paradigms: ["declarative", "grammar", "parser generation"],
  tooling: {
    runtimes: ["ANTLR Tool", "ANTLR Runtime"],
    packageManagers: ["Maven", "npm", "NuGet", "pip"],
    ecosystems: ["Compilers", "Language Tools", "Static Analysis"],
  },
  version: "4.13.2",
  logo: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_antlr.svg",
  i18n: {
    en: {
      name: "ANTLR Grammar",
      description:
        "A grammar notation used with ANTLR to generate lexers, parsers, and language tools.",
      longDescription:
        "ANTLR grammars describe lexical tokens and parser rules for programming languages, data formats, query languages, and domain-specific syntaxes.\n\nThe generated parsers are used in compilers, interpreters, code analyzers, migration tools, editors, and other systems that need structured language recognition.",
    },
    es: {
      name: "ANTLR Grammar",
      description:
        "Una notacion de gramaticas usada con ANTLR para generar lexers, parsers y herramientas de lenguaje.",
      longDescription:
        "Las gramaticas ANTLR describen tokens lexicos y reglas de parser para lenguajes de programacion, formatos de datos, lenguajes de consulta y sintaxis especificas de dominio.\n\nLos parsers generados se usan en compiladores, interpretes, analizadores de codigo, herramientas de migracion, editores y otros sistemas que necesitan reconocer lenguajes de forma estructurada.",
    },
  },
} satisfies Language;
