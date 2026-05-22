import type { Language } from "../types";

export const toml = {
  slug: "toml",
  publishedDate: "2013-02-23",
  extensions: [".toml"],
  author: "Tom Preston-Werner / TOML contributors",
  website: "https://toml.io",
  paradigms: ["configuration", "declarative", "data-serialization"],
  version: "1.1.0",
  logo: "https://cdn.simpleicons.org/toml/9C4221",
  color: "#9C4221",
  i18n: {
    en: {
      name: "TOML",
      description:
        "A minimal, human-readable configuration format that maps clearly to data structures.",
      longDescription:
        "TOML is a configuration file format designed to be easy for humans to read and write while mapping unambiguously to data structures such as hash tables. It supports key-value pairs, tables, arrays, strings, numbers, booleans, and date-time values.\n\nIt is used for project configuration, package manifests, build settings, tool configuration, infrastructure metadata, and applications that need concise structured data without the visual noise of more verbose formats.",
    },
    es: {
      name: "TOML",
      description:
        "Un formato de configuracion minimo y legible que mapea claramente a estructuras de datos.",
      longDescription:
        "TOML es un formato de archivos de configuracion disenado para ser facil de leer y escribir por humanos mientras mapea sin ambiguedad a estructuras de datos como tablas hash. Soporta pares clave-valor, tablas, arreglos, strings, numeros, booleanos y valores de fecha y hora.\n\nSe usa en configuracion de proyectos, manifiestos de paquetes, ajustes de build, configuracion de herramientas, metadata de infraestructura y aplicaciones que necesitan datos estructurados concisos sin el ruido visual de formatos mas verbosos.",
    },
  },
} satisfies Language;
