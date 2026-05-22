import type { Language } from "../types";

export const json = {
  slug: "json",
  publishedDate: "2001-04-01",
  extensions: [".json"],
  author: "Douglas Crockford",
  website: "https://www.json.org/json-en.html",
  paradigms: ["data serialization", "declarative"],
  version: "RFC 8259",
  logo: "https://www.json.org/img/json160.gif",
  color: "#000000",
  i18n: {
    en: {
      name: "JSON",
      description: "A lightweight data interchange format based on JavaScript object syntax.",
      longDescription:
        "JSON represents structured data with objects, arrays, strings, numbers, booleans, and null, using a compact text format that is easy for programs to parse and generate.\n\nIt is widely used for web APIs, configuration files, logs, package manifests, application state, and data exchange between services.",
    },
    es: {
      name: "JSON",
      description:
        "Un formato ligero de intercambio de datos basado en sintaxis de objetos JavaScript.",
      longDescription:
        "JSON representa datos estructurados con objetos, arreglos, strings, numeros, booleanos y null, usando un formato de texto compacto facil de parsear y generar para los programas.\n\nSe usa ampliamente en APIs web, archivos de configuracion, logs, manifiestos de paquetes, estado de aplicaciones e intercambio de datos entre servicios.",
    },
  },
} satisfies Language;
