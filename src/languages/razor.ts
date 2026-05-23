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
  color: "#512BD4",
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
    it: {
      name: "Razor",
      description:
        "Sintassi di markup di Microsoft per le viste di ASP.NET Core, Razor Pages e componenti Blazor.",
      longDescription:
        "Razor e una sintassi e un linguaggio di modellazione utilizzati da ASP.NET Core per combinare HTML con espressioni, direttive, layout, helper di tag, componenti e logica di rendering lato server o interattivo.\n\nE utilizzato in viste MVC, Razor Pages, Razor Class Libraries e componenti Blazor. I file Razor definiscono comunemente modelli di pagina, componenti UI riutilizzabili, form, layout, routing, parametri di componente e binding all'interno di applicazioni web .NET.",
    },
    fr: {
      name: "Razor",
      description:
        "Syntaxe de balisage de Microsoft pour les vues ASP.NET Core, les pages Razor et les composants Blazor.",
      longDescription:
        "Razor est une syntaxe de balisage et un langage de modelisation utilise par ASP.NET Core pour combiner HTML avec des expressions, des directives, des mises en page, des helpers de balises, des composants et la logique de rendu cote serveur ou interactif.\n\nIl est utilise dans les vues MVC, les pages Razor, les bibliotheques de classes Razor et les composants Blazor. Les fichiers Razor definissent couramment des modeles de pages, des composants UI reutilisables, des formulaires, des mises en page, le routage, les parametres de composants et les liaisons dans les applications web .NET.",
    },
    de: {
      name: "Razor",
      description:
        "Microsofts Markup-Syntax f\u00fcr ASP.NET Core Views, Razor Pages und Blazor-Komponenten.",
      longDescription:
        "Razor ist eine Markup-Syntax und ein Templating-Sprache, die von ASP.NET Core verwendet wird, um HTML mit C#-Ausdr\u00fccken, Direktiven, Layouts, Tag-Helpers, Komponenten und serverseitiger oder interaktiver Rendering-Logik zu kombinieren.\n\nEs wird in MVC-Views, Razor Pages, Razor Class Libraries und Blazor-Komponenten verwendet. Razor-Dateien definieren typischerweise Seitenvorlagen, wiederverwendbare UI-Komponenten, Formulare, Layouts, Routing, Komponentenparameter und Bindungen in .NET-Webanwendungen.",
    },
    pt: {
      name: "Razor",
      description:
        "Sintaxe de marca\u00e7\u00e3o da Microsoft para visualiza\u00e7\u00f5es do ASP.NET Core, p\u00e1ginas Razor e componentes Blazor.",
      longDescription:
        "Razor \u00e9 uma sintaxe e linguagem de modelagem usada pelo ASP.NET Core para combinar HTML com express\u00f5es, diretivas, layouts, helpers de tag, componentes e l\u00f3gica de renderiza\u00e7\u00e3o do lado do servidor ou interativa.\n\n\u00c9 usada em visualiza\u00e7\u00f5es MVC, p\u00e1ginas Razor, bibliotecas de classe Razor e componentes Blazor. Os arquivos Razor definem comumente modelos de p\u00e1gina, componentes de UI reutiliz\u00e1veis, formul\u00e1rios, layouts, roteamento, par\u00e2metros de componentes e vincula\u00e7\u00f5es em aplica\u00e7\u00f5es web .NET.",
    },
  },
} satisfies Language;
