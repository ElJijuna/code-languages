import type { Language } from "../types";

export const razor = {
  slug: "razor",
  publishedDate: "2010-07-01",
  extensions: [".cshtml", ".razor"],
  author: "Microsoft",
  website: "https://learn.microsoft.com/en-us/aspnet/core/mvc/views/razor",
  paradigms: ["templating", "component-based", "server-side", "declarative"],
  tooling: {
    runtimes: ["ASP.NET Core", ".NET", "Blazor"],
    packageManagers: ["NuGet"],
    ecosystems: [".NET", "ASP.NET Core", "Web", "Blazor"],
  },
  version: "10.0.8",
  logo: "https://cdn.simpleicons.org/dotnet/512BD4",
  i18n: {
    en: {
      name: "Razor",
      description:
        "Microsoft's markup syntax for ASP.NET Core views, Razor Pages, and Blazor components.",
      longDescription:
        "Razor is a markup syntax and templating language used by ASP.NET Core to combine HTML with C# expressions, directives, layouts, tag helpers, components, and server-side or interactive rendering logic.\n\nIt is used in MVC views, Razor Pages, Razor Class Libraries, and Blazor components. Razor files commonly define page templates, reusable UI components, forms, layouts, routing, component parameters, and bindings within .NET web applications.",
    },
    es: {
      name: "Razor",
      description:
        "La sintaxis de marcado de Microsoft para vistas ASP.NET Core, Razor Pages y componentes Blazor.",
      longDescription:
        "Razor es una sintaxis de marcado y lenguaje de templates usado por ASP.NET Core para combinar HTML con expresiones C#, directivas, layouts, tag helpers, componentes y logica de renderizado server-side o interactiva.\n\nSe usa en vistas MVC, Razor Pages, Razor Class Libraries y componentes Blazor. Los archivos Razor suelen definir templates de paginas, componentes UI reutilizables, formularios, layouts, routing, parametros de componentes y bindings dentro de aplicaciones web .NET.",
    },
  },
} satisfies Language;
