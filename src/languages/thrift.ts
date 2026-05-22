import type { Language } from "../types";

export const thrift = {
  slug: "thrift",
  publishedDate: "2007-04-01",
  extensions: [".thrift"],
  author: "Facebook / Apache Software Foundation",
  website: "https://thrift.apache.org",
  paradigms: ["interface-definition", "schema", "declarative", "rpc"],
  tooling: {
    runtimes: ["Apache Thrift Runtime"],
    packageManagers: ["Maven", "npm", "PyPI", "Go modules"],
    ecosystems: ["RPC", "APIs", "Distributed Systems"],
  },
  version: "0.22.0",
  logo: "https://cdn.simpleicons.org/apache/D22128",
  color: "#D22128",
  i18n: {
    en: {
      name: "Apache Thrift",
      description: "An IDL for cross-language services and serializable data types.",
      longDescription:
        "Thrift files define services, structs, fields, enums, exceptions, namespaces, and wire-level choices that generators turn into code for many languages. The project includes protocols and transports for RPC use.\n\nIt is used for service contracts, schema sharing, code generation, distributed systems, and cross-language APIs.",
    },
    es: {
      name: "Apache Thrift",
      description: "Un IDL para servicios entre lenguajes y tipos de datos serializables.",
      longDescription:
        "Los archivos Thrift definen servicios, structs, campos, enums, excepciones, namespaces y decisiones de wire que los generadores convierten en codigo para muchos lenguajes. El proyecto incluye protocolos y transports para RPC.\n\nSe usa en contratos de servicios, schemas compartidos, generacion de codigo, sistemas distribuidos y APIs entre lenguajes.",
    },
  },
} satisfies Language;
