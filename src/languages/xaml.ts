import type { Language } from "../types";

export const xaml = {
  slug: "xaml",
  publishedDate: "2006-11-21",
  extensions: [".xaml", ".baml"],
  author: "Microsoft",
  website: "https://learn.microsoft.com/en-us/windows/uwp/xaml-platform/xaml-overview",
  paradigms: ["declarative", "markup", "object-graph", "ui"],
  tooling: {
    runtimes: ["WPF", "WinUI", "UWP XAML", ".NET MAUI", "Avalonia"],
    ecosystems: ["Windows", ".NET", "Desktop Applications", "Mobile Applications", "UI"],
  },
  version: "Platform-specific",
  logo: "https://cdn.simpleicons.org/dotnet/512BD4",
  i18n: {
    en: {
      name: "XAML",
      description:
        "A declarative XML-based language for defining object graphs and application user interfaces.",
      longDescription:
        "XAML, Extensible Application Markup Language, is a declarative XML-based language used to instantiate objects, set properties, declare resources, bind data, and compose user interfaces.\n\nIt is used across Microsoft and .NET UI stacks such as WPF, UWP, WinUI, and .NET MAUI, as well as XAML-inspired frameworks like Avalonia. XAML files commonly define pages, windows, controls, styles, templates, animations, resources, and visual states.",
    },
    es: {
      name: "XAML",
      description:
        "Un lenguaje declarativo basado en XML para definir grafos de objetos e interfaces de usuario.",
      longDescription:
        "XAML, Extensible Application Markup Language, es un lenguaje declarativo basado en XML usado para instanciar objetos, definir propiedades, declarar recursos, enlazar datos y componer interfaces de usuario.\n\nSe usa en stacks de UI de Microsoft y .NET como WPF, UWP, WinUI y .NET MAUI, ademas de frameworks inspirados en XAML como Avalonia. Los archivos XAML suelen definir paginas, ventanas, controles, estilos, templates, animaciones, recursos y estados visuales.",
    },
  },
} satisfies Language;
