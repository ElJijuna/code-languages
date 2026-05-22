import type { Language } from "../types";

export const forth = {
  slug: "forth",
  publishedDate: "1970-01-01",
  extensions: [".fs", ".fth", ".forth", ".4th"],
  author: "Charles H. Moore",
  website: "https://forth-standard.org",
  paradigms: ["stack-based", "concatenative", "procedural", "interactive"],
  tooling: {
    runtimes: ["Gforth", "SwiftForth", "VFX Forth"],
    ecosystems: ["Embedded", "Firmware", "Language Implementation"],
  },
  version: "Forth 2012",
  logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Gforth_Logo.png",
  color: "#341708",
  i18n: {
    en: {
      name: "Forth",
      description:
        "A stack-based extensible language used for embedded systems, firmware, and tooling.",
      longDescription:
        "Forth programs are built from small words that operate on a data stack, encouraging interactive development, compact runtimes, and language extension from within the program itself.\n\nIt has a long history in embedded systems, boot firmware, instrumentation, space hardware, and custom control environments where simplicity and direct hardware access matter.",
    },
    es: {
      name: "Forth",
      description:
        "Un lenguaje extensible basado en pila usado en sistemas embebidos, firmware y herramientas.",
      longDescription:
        "Los programas Forth se construyen con palabras pequenas que operan sobre una pila de datos, fomentando desarrollo interactivo, runtimes compactos y extension del lenguaje desde el propio programa.\n\nTiene una larga historia en sistemas embebidos, firmware de arranque, instrumentacion, hardware espacial y entornos de control personalizados donde importan la simplicidad y el acceso directo al hardware.",
    },
    it: {
      name: "Forth",
      description:
        "Un linguaggio basato su stack, estendibile, utilizzato per sistemi embedded, firmware e strumenti.",
      longDescription:
        "I programmi Forth sono costruiti da piccole parole che operano su uno stack dati, incoraggiando lo sviluppo interattivo, runtime compatti e l'estensione del linguaggio all'interno del programma stesso.\n\nHa una lunga storia nei sistemi embedded, firmware di avvio, strumentazione, hardware spaziale e ambienti di controllo personalizzati dove la semplicita e l'accesso diretto all'hardware sono importanti.",
    },
    fr: {
      name: "Forth",
      description:
        "Langage base sur une pile, extensible, utilise pour les systemes embarques, le firmware et les outils.",
      longDescription:
        "Les programmes Forth sont construits a partir de petits mots qui operent sur une pile de donnees, favorisant le developpement interactif, des temps d'execution compacts et l'extension du langage a l'interieur du programme lui-meme.\n\nIl a une longue histoire dans les systemes embarques, le firmware de demarrage, l'instrumentation, le materiel spatial et les environnements de controle personnalises ou la simplicite et l'acces direct au materiel sont importants.",
    },
  },
} satisfies Language;
