import type { Language } from "../types";

export const raku = {
  slug: "raku",
  publishedDate: "2015-12-25",
  extensions: [".raku", ".rakumod", ".rakudoc", ".rakutest", ".p6", ".pm6"],
  author: "Raku Community",
  website: "https://raku.org",
  paradigms: ["multi-paradigm", "object-oriented", "functional", "concurrent"],
  tooling: {
    runtimes: ["Rakudo", "MoarVM"],
    packageManagers: ["zef"],
    ecosystems: ["Raku", "CLI", "Text Processing"],
  },
  version: "6.d",
  logo: "https://github.com/Raku.png",
  i18n: {
    en: {
      name: "Raku",
      description: "A multi-paradigm language with grammars, concurrency, and rich dispatch.",
      longDescription:
        "Raku is a sibling of Perl with gradual typing, signatures, multiple dispatch, grammars, junctions, concurrency primitives, and expressive operators. It is designed for both small scripts and larger language-oriented programs.\n\nIt is used for text processing, command-line tools, parsers, automation, experimentation, and applications that benefit from built-in grammar support.",
    },
    es: {
      name: "Raku",
      description: "Un lenguaje multiparadigma con grammars, concurrencia y dispatch expresivo.",
      longDescription:
        "Raku es un lenguaje hermano de Perl con tipado gradual, firmas, multiple dispatch, grammars, junctions, primitivas concurrentes y operadores expresivos. Sirve tanto para scripts pequenos como para programas orientados a lenguajes.\n\nSe usa en procesamiento de texto, herramientas de linea de comandos, parsers, automatizacion, experimentacion y aplicaciones que aprovechan soporte integrado para grammars.",
    },
  },
} satisfies Language;
