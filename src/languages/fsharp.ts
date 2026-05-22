import type { Language } from "../types";

export const fsharp = {
  slug: "fsharp",
  publishedDate: "2005-05-01",
  extensions: [".fs", ".fsi", ".fsx", ".fsscript"],
  author: "Don Syme / Microsoft Research",
  website: "https://dotnet.microsoft.com/en-us/languages/fsharp",
  paradigms: ["functional", "object-oriented", "imperative", "scripting"],
  tooling: {
    runtimes: [".NET", "F# Interactive"],
    packageManagers: ["NuGet"],
    ecosystems: [".NET", "Data Science", "Web", "Cloud"],
  },
  version: "10",
  logo: "https://cdn.simpleicons.org/fsharp/378BBA",
  color: "#378BBA",
  i18n: {
    en: {
      name: "F#",
      description:
        "A succinct, functional-first .NET language for robust applications, scripts, and data workflows.",
      longDescription:
        "F# is a functional-first programming language in the .NET ecosystem. It combines type inference, immutable data by default, pattern matching, discriminated unions, computation expressions, and interoperability with C# and other .NET languages.\n\nIt is used for backend services, data processing, scripting, domain modeling, financial systems, cloud applications, and teams that want concise code with strong static typing and access to the broader .NET platform.",
    },
    es: {
      name: "F#",
      description:
        "Un lenguaje .NET conciso y funcional para aplicaciones robustas, scripts y flujos de datos.",
      longDescription:
        "F# es un lenguaje de programacion funcional-first dentro del ecosistema .NET. Combina inferencia de tipos, datos inmutables por defecto, pattern matching, uniones discriminadas, computation expressions e interoperabilidad con C# y otros lenguajes .NET.\n\nSe usa en servicios backend, procesamiento de datos, scripting, modelado de dominios, sistemas financieros, aplicaciones cloud y equipos que quieren codigo conciso con tipado estatico fuerte y acceso a la plataforma .NET.",
    },
  },
} satisfies Language;
