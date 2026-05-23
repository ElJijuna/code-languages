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
    it: {
      name: "Apache Thrift",
      description: "Un IDL per servizi multipiattaforma e tipi di dati serializzabili.",
      longDescription:
        "I file Thrift definiscono servizi, strutture, campi, enumerazioni, eccezioni, namespace e scelte a livello di rete che i generatori trasformano in codice per molti linguaggi. Il progetto include protocolli e trasporti per l'uso di RPC.\n\nViene utilizzato per contratti di servizio, condivisione di schemi, generazione di codice, sistemi distribuiti e API multipiattaforma.",
    },
    fr: {
      name: "Apache Thrift",
      description:
        "Une IDL pour les services inter-langages et les types de donnees serialisables.",
      longDescription:
        "Les fichiers Thrift definissent les services, les structures, les champs, les enumerations, les exceptions, les espaces de noms et les choix au niveau du cablage, que les generateurs transforment en code pour de nombreux langages. Le projet comprend des protocoles et des transports pour l'utilisation de l'appel de procedure distante (RPC).\n\nIl est utilise pour les contrats de service, le partage de schemas, la generation de code, les systemes distribues et les API inter-langages.",
    },
    de: {
      name: "Apache Thrift",
      description: "Eine IDL f\u00fcr mehrsprachige Dienste und serialisierbare Datentypen.",
      longDescription:
        "Thrift-Dateien definieren Dienste, Strukturen, Felder, Enums, Ausnahmen, Namespaces und Wire-Level-Auswahlen, die Generatoren in Code f\u00fcr viele Sprachen umwandeln. Das Projekt umfasst Protokolle und Transports f\u00fcr RPC-Nutzung.\n\nEs wird f\u00fcr Service-Vertr\u00e4ge, Schema-Sharing, Code-Generierung, verteilte Systeme und mehrsprachige APIs verwendet.",
    },
    pt: {
      name: "Apache Thrift",
      description:
        "Uma IDL para servi\u00e7os e tipos de dados serializ\u00e1veis em diferentes linguagens.",
      longDescription:
        "Os arquivos Thrift definem servi\u00e7os, structs, campos, enums, exce\u00e7\u00f5es, namespaces e escolhas de n\u00edvel de wire que os geradores transformam em c\u00f3digo para v\u00e1rias linguagens. O projeto inclui protocolos e transportes para uso de RPC.\n\n\u00c9 usado para contratos de servi\u00e7os, compartilhamento de esquema, gera\u00e7\u00e3o de c\u00f3digo, sistemas distribu\u00eddos e APIs entre linguagens.",
    },
  },
} satisfies Language;
