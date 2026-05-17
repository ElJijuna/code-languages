import type { Language } from "../types";

export const xquery = {
  slug: "xquery",
  publishedDate: "2007-01-23",
  extensions: [".xq", ".xql", ".xqm", ".xquery", ".xqy"],
  author: "W3C XML Query Working Group",
  website: "https://www.w3.org/TR/xquery/",
  paradigms: ["query", "functional", "declarative", "xml"],
  tooling: {
    runtimes: ["BaseX", "Saxon", "eXist-db", "MarkLogic"],
    packageManagers: ["EXPath Package Manager"],
    ecosystems: ["XML", "Databases", "Publishing", "Enterprise Data"],
  },
  version: "XQuery 3.1",
  logo: "https://upload.wikimedia.org/wikipedia/commons/6/68/XML.svg",
  i18n: {
    en: {
      name: "XQuery",
      description:
        "A W3C query and application language for XML, structured, and semi-structured data.",
      longDescription:
        "XQuery is a declarative query language for XML and related structured data. It combines XPath expressions, FLWOR queries, functions, modules, sequence processing, namespaces, and type-aware operations to extract, transform, join, and construct XML or other serialized results.\n\nIt is used in native XML databases, publishing pipelines, document repositories, enterprise integrations, digital humanities, metadata processing, and applications that query large collections of XML or semi-structured content.",
    },
    es: {
      name: "XQuery",
      description:
        "Un lenguaje W3C de consulta y aplicaciones para XML y datos estructurados o semiestructurados.",
      longDescription:
        "XQuery es un lenguaje declarativo de consultas para XML y datos estructurados relacionados. Combina expresiones XPath, consultas FLWOR, funciones, modulos, procesamiento de secuencias, namespaces y operaciones con tipos para extraer, transformar, unir y construir XML u otros resultados serializados.\n\nSe usa en bases de datos XML nativas, pipelines de publicacion, repositorios documentales, integraciones empresariales, humanidades digitales, procesamiento de metadatos y aplicaciones que consultan grandes colecciones de XML o contenido semiestructurado.",
    },
  },
} satisfies Language;
