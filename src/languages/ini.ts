import type { Language } from "../types";

export const ini = {
  slug: "ini",
  publishedDate: "1985-01-01",
  extensions: [".ini"],
  author: "Microsoft / community conventions",
  website: "https://en.wikipedia.org/wiki/INI_file",
  paradigms: ["configuration", "declarative", "key-value"],
  tooling: {
    ecosystems: ["Windows", "Configuration", "Desktop Applications", "Legacy Systems"],
  },
  version: "Informal format",
  logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Configure.svg",
  i18n: {
    en: {
      name: "INI",
      description:
        "A simple section-based configuration format built around keys, values, and comments.",
      longDescription:
        "INI files store configuration as sections with key-value pairs, usually with comments and implementation-specific parsing rules. The format is intentionally simple and has no single formal standard, so behavior can vary across parsers.\n\nINI-style files are common in Windows applications, legacy desktop software, game configuration, developer tools, and small projects that need readable configuration without a heavier serialization format.",
    },
    es: {
      name: "INI",
      description:
        "Un formato simple de configuracion por secciones basado en claves, valores y comentarios.",
      longDescription:
        "Los archivos INI guardan configuracion como secciones con pares clave-valor, normalmente con comentarios y reglas de parseo especificas de cada implementacion. El formato es intencionalmente simple y no tiene un estandar formal unico, por lo que el comportamiento puede variar entre parsers.\n\nLos archivos estilo INI son comunes en aplicaciones Windows, software de escritorio legacy, configuracion de juegos, herramientas de desarrollo y proyectos pequenos que necesitan configuracion legible sin un formato de serializacion mas pesado.",
    },
  },
} satisfies Language;
