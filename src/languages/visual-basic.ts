import type { Language } from "../types";

export const visualBasic = {
  slug: "visual-basic",
  publishedDate: "2001-02-13",
  extensions: [".vb"],
  author: "Microsoft",
  website: "https://learn.microsoft.com/dotnet/visual-basic/",
  paradigms: ["event-driven", "generic", "object-oriented", "structured"],
  tooling: {
    runtimes: [".NET", ".NET Framework", "Mono"],
    packageManagers: ["NuGet"],
    ecosystems: [".NET", "Visual Studio", "Windows Forms", "ASP.NET"],
  },
  version: "17.13",
  logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/VB.NET_Logo.svg",
  color: "#512BD4",
  i18n: {
    en: {
      name: "Visual Basic",
      description: "An approachable .NET language for type-safe, object-oriented applications.",
      longDescription:
        "Visual Basic is a .NET programming language from Microsoft with a readable syntax, static typing, object-oriented features, event-driven programming support, generics, LINQ, async workflows, and access to the .NET ecosystem.\n\nIt is used for Windows desktop applications, business software, automation, legacy .NET systems, ASP.NET applications, libraries, and teams that value a verbose, approachable syntax on top of the .NET runtime.",
    },
    es: {
      name: "Visual Basic",
      description: "Un lenguaje .NET accesible para aplicaciones orientadas a objetos y type-safe.",
      longDescription:
        "Visual Basic es un lenguaje de programacion .NET de Microsoft con sintaxis legible, tipado estatico, caracteristicas orientadas a objetos, soporte para programacion basada en eventos, genericos, LINQ, flujos async y acceso al ecosistema .NET.\n\nSe usa en aplicaciones de escritorio para Windows, software empresarial, automatizacion, sistemas .NET heredados, aplicaciones ASP.NET, bibliotecas y equipos que valoran una sintaxis explicita y accesible sobre el runtime .NET.",
    },
  },
} satisfies Language;
