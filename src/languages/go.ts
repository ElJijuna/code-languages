import type { Language } from "../types";

export const go = {
  slug: "go",
  publishedDate: "2012-03-28",
  extensions: [".go"],
  author: "Robert Griesemer, Rob Pike, Ken Thompson / Google",
  website: "https://go.dev",
  paradigms: ["concurrent", "imperative", "procedural"],
  version: "1.26.3",
  logo: "https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg",
  i18n: {
    en: {
      name: "Go",
      description: "A compiled language designed for simplicity, fast builds, and concurrency.",
      longDescription:
        "Go combines a small language specification, garbage collection, static typing, and built-in concurrency primitives through goroutines and channels.\n\nIt is commonly used for cloud services, networking tools, distributed systems, command-line applications, and infrastructure software.",
    },
    es: {
      name: "Go",
      description:
        "Un lenguaje compilado disenado para simplicidad, builds rapidos y concurrencia.",
      longDescription:
        "Go combina una especificacion pequena del lenguaje, recoleccion de basura, tipado estatico y primitivas de concurrencia integradas mediante goroutines y channels.\n\nSe usa comunmente en servicios cloud, herramientas de red, sistemas distribuidos, aplicaciones de linea de comandos y software de infraestructura.",
    },
  },
} satisfies Language;
