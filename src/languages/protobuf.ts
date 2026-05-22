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
  },
} satisfies Language;
