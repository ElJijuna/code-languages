import type { Language } from "../types";

export const apl = {
  slug: "apl",
  publishedDate: "1966-11-01",
  extensions: [".apl", ".dyalog"],
  author: "Kenneth E. Iverson",
  website: "https://www.dyalog.com",
  paradigms: ["array", "functional", "interactive"],
  tooling: {
    runtimes: ["Dyalog APL", "GNU APL", "NARS2000"],
    ecosystems: ["Array Programming", "Data Analysis", "Financial Computing"],
  },
  version: "ISO/IEC 13751:2001",
  logo: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_apl.svg",
  i18n: {
    en: {
      name: "APL",
      description:
        "An array-oriented language known for concise symbolic notation and interactive use.",
      longDescription:
        "APL centers computation around arrays, higher-order operations, and a compact mathematical notation that can express complex transformations in very little code.\n\nIt has influenced many array languages and remains useful in exploratory analysis, financial modeling, algorithm design, and systems where terse interactive computation is valuable.",
    },
    es: {
      name: "APL",
      description:
        "Un lenguaje orientado a arreglos conocido por su notacion simbolica concisa y uso interactivo.",
      longDescription:
        "APL centra la computacion en arreglos, operaciones de orden superior y una notacion matematica compacta que puede expresar transformaciones complejas en muy poco codigo.\n\nHa influido en muchos lenguajes de arreglos y sigue siendo util en analisis exploratorio, modelos financieros, diseno de algoritmos y sistemas donde la computacion interactiva concisa aporta valor.",
    },
  },
} satisfies Language;
