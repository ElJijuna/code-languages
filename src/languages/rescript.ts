import type { Language } from "../types";

export const rescript = {
  slug: "rescript",
  publishedDate: "2020-07-01",
  extensions: [".res", ".resi"],
  author: "ReScript Association",
  website: "https://rescript-lang.org",
  paradigms: ["functional", "statically typed", "multi-paradigm", "javascript-targeted"],
  tooling: {
    runtimes: ["JavaScript", "Node.js", "Browser"],
    packageManagers: ["npm", "pnpm", "Yarn"],
    ecosystems: ["Web", "React", "JavaScript"],
  },
  version: "12.0.0",
  logo: "https://cdn.simpleicons.org/rescript/E6484A",
  color: "#E6484A",
  i18n: {
    en: {
      name: "ReScript",
      description: "A typed language and compiler focused on ergonomic JavaScript output.",
      longDescription:
        "ReScript is a statically typed language for JavaScript targets with pattern matching, variants, modules, records, interop annotations, and a syntax tuned for web development. Its compiler and build tools focus on predictable generated JavaScript.\n\nIt is used in front-end applications, React codebases, shared libraries, and JavaScript projects that want compact type-safe source with explicit interop.",
    },
    es: {
      name: "ReScript",
      description: "Un lenguaje tipado y compilador enfocado en generar JavaScript ergonomico.",
      longDescription:
        "ReScript es un lenguaje de tipado estatico para objetivos JavaScript con pattern matching, variants, modulos, records, anotaciones de interop y una sintaxis ajustada al desarrollo web. Su compilador y herramientas buscan JavaScript generado predecible.\n\nSe usa en aplicaciones front-end, codebases React, bibliotecas compartidas y proyectos JavaScript que buscan fuente compacta y segura con interop explicito.",
    },
  },
} satisfies Language;
