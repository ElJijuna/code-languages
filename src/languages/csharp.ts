import type { Language } from "../types";

export const csharp = {
  slug: "csharp",
  publishedDate: "2000-06-26",
  extensions: [".cs", ".csx"],
  author: "Anders Hejlsberg / Microsoft",
  website: "https://dotnet.microsoft.com/languages/csharp",
  paradigms: ["class-based", "component-oriented", "functional", "generic", "object-oriented"],
  tooling: {
    runtimes: [".NET", "Mono", "Unity"],
    packageManagers: ["NuGet"],
    ecosystems: [".NET", "ASP.NET", "Unity", "Microsoft"],
  },
  version: "14",
  logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg",
  i18n: {
    en: {
      name: "C#",
      description:
        "A modern, object-oriented language for .NET applications, services, games, and tools.",
      longDescription:
        "C# is a statically typed language created by Microsoft for the .NET platform, combining object-oriented programming, generics, async workflows, pattern matching, and strong tooling support.\n\nIt is widely used for web services, desktop applications, cloud systems, game development with Unity, enterprise software, mobile apps, and cross-platform tools built on .NET.",
    },
    es: {
      name: "C#",
      description:
        "Un lenguaje moderno y orientado a objetos para aplicaciones, servicios, juegos y herramientas .NET.",
      longDescription:
        "C# es un lenguaje de tipado estatico creado por Microsoft para la plataforma .NET, que combina programacion orientada a objetos, genericos, flujos async, pattern matching y soporte solido de herramientas.\n\nSe usa ampliamente en servicios web, aplicaciones de escritorio, sistemas cloud, desarrollo de juegos con Unity, software empresarial, apps moviles y herramientas multiplataforma construidas sobre .NET.",
    },
  },
} satisfies Language;
