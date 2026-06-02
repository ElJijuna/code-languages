import type { Language } from '../types';

export const xaml = {
  slug: 'xaml',
  publishedDate: '2006-11-21',
  extensions: ['.xaml', '.baml'],
  author: 'Microsoft',
  website: 'https://learn.microsoft.com/en-us/windows/uwp/xaml-platform/xaml-overview',
  paradigms: ['declarative', 'markup', 'object-graph', 'ui'],
  tooling: {
    runtimes: ['WPF', 'WinUI', 'UWP XAML', '.NET MAUI', 'Avalonia'],
    ecosystems: ['Windows', '.NET', 'Desktop Applications', 'Mobile Applications', 'UI'],
  },
  version: 'Platform-specific',
  logo: 'https://cdn.simpleicons.org/dotnet/512BD4',
  color: '#512BD4',
  i18n: {
    en: {
      name: 'XAML',
      description:
        'A declarative XML-based language for defining object graphs and application user interfaces.',
      longDescription:
        'XAML, Extensible Application Markup Language, is a declarative XML-based language used to instantiate objects, set properties, declare resources, bind data, and compose user interfaces.\n\nIt is used across Microsoft and .NET UI stacks such as WPF, UWP, WinUI, and .NET MAUI, as well as XAML-inspired frameworks like Avalonia. XAML files commonly define pages, windows, controls, styles, templates, animations, resources, and visual states.',
    },
    es: {
      name: 'XAML',
      description:
        'Un lenguaje declarativo basado en XML para definir grafos de objetos e interfaces de usuario.',
      longDescription:
        'XAML, Extensible Application Markup Language, es un lenguaje declarativo basado en XML usado para instanciar objetos, definir propiedades, declarar recursos, enlazar datos y componer interfaces de usuario.\n\nSe usa en stacks de UI de Microsoft y .NET como WPF, UWP, WinUI y .NET MAUI, ademas de frameworks inspirados en XAML como Avalonia. Los archivos XAML suelen definir paginas, ventanas, controles, estilos, templates, animaciones, recursos y estados visuales.',
    },
    it: {
      name: 'XAML',
      description:
        'Un linguaggio dichiarativo basato su XML per definire grafi di oggetti e interfacce utente di applicazioni.',
      longDescription:
        'XAML, Extensible Application Markup Language, e un linguaggio dichiarativo basato su XML utilizzato per istanziare oggetti, impostare proprieta, dichiarare risorse, collegare dati e comporre interfacce utente.\n\nE utilizzato in Microsoft e nelle stack UI .NET come WPF, UWP, WinUI e .NET MAUI, nonche in framework ispirati a XAML come Avalonia. I file XAML definiscono comunemente pagine, finestre, controlli, stili, modelli, animazioni, risorse e stati visivi.',
    },
    fr: {
      name: 'XAML',
      description:
        "Un langage declaratif base sur XML pour definir des graphes d'objets et des interfaces utilisateur d'applications.",
      longDescription:
        "XAML, Extensible Application Markup Language, est un langage declaratif base sur XML utilise pour instancier des objets, definir des proprietes, declarer des ressources, lier des donnees et composer des interfaces utilisateur.\n\nIl est utilise dans les stacks d'interface utilisateur Microsoft et .NET tels que WPF, UWP, WinUI et .NET MAUI, ainsi que dans des frameworks inspires de XAML comme Avalonia. Les fichiers XAML definissent couramment des pages, des fenetres, des controles, des styles, des modeles, des animations, des ressources et des etats visuels.",
    },
    de: {
      name: 'XAML',
      description:
        'Eine deklarative XML-basierte Sprache zur Definition von Objektgraphen und Anwendungs-Benutzeroberfl\u00e4chen.',
      longDescription:
        'XAML, Extensible Application Markup Language, ist eine deklarative XML-basierte Sprache, die zur Instanziierung von Objekten, zum Setzen von Eigenschaften, zum Deklarieren von Ressourcen, zum Binden von Daten und zum Erstellen von Benutzeroberfl\u00e4chen verwendet wird.\n\nEs wird in Microsoft- und .NET-UI-Stacks wie WPF, UWP, WinUI und .NET MAUI sowie in XAML-inspirierten Frameworks wie Avalonia verwendet. XAML-Dateien definieren typischerweise Seiten, Fenster, Steuerelemente, Stile, Vorlagen, Animationen, Ressourcen und visuelle Zust\u00e4nde.',
    },
    pt: {
      name: 'XAML',
      description:
        'Linguagem declarativa baseada em XML para definir grafos de objetos e interfaces de usu\u00e1rio de aplica\u00e7\u00f5es.',
      longDescription:
        'XAML, Extensible Application Markup Language, \u00e9 uma linguagem declarativa baseada em XML usada para instanciar objetos, definir propriedades, declarar recursos, vincular dados e compor interfaces de usu\u00e1rio.\n\n\u00c9 utilizada em v\u00e1rias plataformas Microsoft e .NET, como WPF, UWP, WinUI e .NET MAUI, bem como em frameworks inspirados em XAML, como Avalonia. Os arquivos XAML geralmente definem p\u00e1ginas, janelas, controles, estilos, modelos, anima\u00e7\u00f5es, recursos e estados visuais.',
    },
  },
} satisfies Language;
