import type { Language } from "../types";

export const protobuf = {
  slug: "protobuf",
  publishedDate: "2008-07-07",
  extensions: [".proto"],
  author: "Google",
  website: "https://protobuf.dev",
  paradigms: ["interface-definition", "schema", "declarative", "data-serialization"],
  tooling: {
    runtimes: ["Protocol Buffers Runtime", "gRPC"],
    packageManagers: ["Buf", "npm", "Maven", "Go modules", "NuGet", "PyPI"],
    ecosystems: ["gRPC", "APIs", "Microservices", "Data Serialization"],
  },
  version: "34.1",
  logo: "https://cdn.simpleicons.org/google/4285F4",
  color: "#4285F4",
  i18n: {
    en: {
      name: "Protocol Buffers",
      description:
        "Google's language-neutral schema format for structured data serialization and service APIs.",
      longDescription:
        "Protocol Buffers is a language-neutral, platform-neutral mechanism for defining structured data schemas and generating strongly typed code in many programming languages. `.proto` files describe messages, fields, enums, services, packages, imports, options, and RPC contracts.\n\nIt is widely used with gRPC, microservices, distributed systems, APIs, telemetry, configuration, event streams, and storage formats that need compact binary serialization and stable cross-language contracts.",
    },
    es: {
      name: "Protocol Buffers",
      description:
        "El formato de schemas neutral de Google para serializacion de datos estructurados y APIs de servicios.",
      longDescription:
        "Protocol Buffers es un mecanismo neutral en lenguaje y plataforma para definir schemas de datos estructurados y generar codigo tipado en muchos lenguajes de programacion. Los archivos `.proto` describen mensajes, campos, enums, servicios, paquetes, imports, opciones y contratos RPC.\n\nSe usa ampliamente con gRPC, microservicios, sistemas distribuidos, APIs, telemetria, configuracion, flujos de eventos y formatos de almacenamiento que necesitan serializacion binaria compacta y contratos estables entre lenguajes.",
    },
    it: {
      name: "Protocol Buffers",
      description: "Protocol Buffers",
      longDescription:
        "Protocol Buffers e un meccanismo linguaggio-neutro e piattaforma-neutro per definire schemi di dati strutturati e generare codice fortemente tipizzato in molti linguaggi di programmazione. I file `.proto` descrivono messaggi, campi, enum, servizi, pacchetti, importazioni, opzioni e contratti RPC.\n\nE ampiamente utilizzato con gRPC, microservizi, sistemi distribuiti, API, telemetria, configurazione, flussi di eventi e formati di storage che richiedono una serializzazione binaria compatta e contratti stabili tra linguaggi.",
    },
    fr: {
      name: "Protocol Buffers",
      description:
        "Protocol Buffers : format de schema langage-neutre de Google pour la serialisation de donnees structurees et les API de services.",
      longDescription:
        "Protocol Buffers est un mecanisme langage-neutre et plateforme-neutre pour definir des schemas de donnees structurees et generer du code fortement type dans de nombreux langages de programmation. Les fichiers `.proto` decrivent les messages, les champs, les enumerations, les services, les packages, les imports, les options et les contrats RPC.\n\nIl est largement utilise avec gRPC, les microservices, les systemes distribues, les API, la telemetrie, la configuration, les flux d'evenements et les formats de stockage qui necessitent une serialisation binaire compacte et des contrats stables entre les langages.",
    },
  },
} satisfies Language;
