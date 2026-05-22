import type { Language } from "../types";

export const asp = {
  slug: "asp",
  publishedDate: "1996-12-01",
  extensions: [".asp", ".aspx", ".ascx", ".ashx", ".asmx", ".master"],
  author: "Microsoft",
  website: "https://learn.microsoft.com/en-us/aspnet/web-forms/",
  paradigms: ["server-side", "templating", "object-oriented", "event-driven"],
  tooling: {
    runtimes: ["IIS", ".NET Framework"],
    packageManagers: ["NuGet"],
    ecosystems: ["Windows", ".NET", "Web"],
  },
  version: "4.8.1",
  logo: "https://cdn.simpleicons.org/dotnet/512BD4",
  color: "#512BD4",
  i18n: {
    en: {
      name: "ASP/ASPX",
      description:
        "Microsoft server-side web templates and pages for Classic ASP and ASP.NET Web Forms.",
      longDescription:
        "ASP and ASPX files represent Microsoft server-side web page technologies. Classic ASP uses `.asp` files with script blocks, while ASP.NET Web Forms uses `.aspx`, user controls, handlers, services, and master pages on top of the .NET Framework.\n\nThey are commonly found in legacy and long-lived Windows web applications hosted on IIS, often alongside C#, Visual Basic, HTML, CSS, JavaScript, and NuGet-based .NET Framework dependencies.",
    },
    es: {
      name: "ASP/ASPX",
      description:
        "Plantillas y paginas web server-side de Microsoft para Classic ASP y ASP.NET Web Forms.",
      longDescription:
        "Los archivos ASP y ASPX representan tecnologias de paginas web server-side de Microsoft. Classic ASP usa archivos `.asp` con bloques de script, mientras ASP.NET Web Forms usa `.aspx`, controles de usuario, handlers, servicios y paginas maestras sobre .NET Framework.\n\nAparecen comunmente en aplicaciones web Windows legacy o de larga vida alojadas en IIS, a menudo junto con C#, Visual Basic, HTML, CSS, JavaScript y dependencias .NET Framework basadas en NuGet.",
    },
  },
} satisfies Language;
