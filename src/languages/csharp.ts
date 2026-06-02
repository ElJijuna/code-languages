import type { Language } from '../types';

export const csharp = {
  slug: 'csharp',
  publishedDate: '2000-06-26',
  extensions: ['.cs', '.csx'],
  author: 'Anders Hejlsberg / Microsoft',
  website: 'https://dotnet.microsoft.com/languages/csharp',
  paradigms: ['class-based', 'component-oriented', 'functional', 'generic', 'object-oriented'],
  tooling: {
    runtimes: ['.NET', 'Mono', 'Unity'],
    packageManagers: ['NuGet'],
    ecosystems: ['.NET', 'ASP.NET', 'Unity', 'Microsoft'],
  },
  version: '14',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg',
  color: '#512BD4',
  i18n: {
    en: {
      name: 'C#',
      description:
        'A modern, object-oriented language for .NET applications, services, games, and tools.',
      longDescription:
        'C# is a statically typed language created by Microsoft for the .NET platform, combining object-oriented programming, generics, async workflows, pattern matching, and strong tooling support.\n\nIt is widely used for web services, desktop applications, cloud systems, game development with Unity, enterprise software, mobile apps, and cross-platform tools built on .NET.',
    },
    es: {
      name: 'C#',
      description:
        'Un lenguaje moderno y orientado a objetos para aplicaciones, servicios, juegos y herramientas .NET.',
      longDescription:
        'C# es un lenguaje de tipado estatico creado por Microsoft para la plataforma .NET, que combina programacion orientada a objetos, genericos, flujos async, pattern matching y soporte solido de herramientas.\n\nSe usa ampliamente en servicios web, aplicaciones de escritorio, sistemas cloud, desarrollo de juegos con Unity, software empresarial, apps moviles y herramientas multiplataforma construidas sobre .NET.',
    },
    it: {
      name: 'C#',
      description:
        'Un linguaggio moderno, orientato agli oggetti, per applicazioni, servizi, giochi e strumenti .NET.',
      longDescription:
        'C# e un linguaggio staticamente tipizzato creato da Microsoft per la piattaforma .NET, che combina la programmazione orientata agli oggetti, i generics, i workflow asincroni, il pattern matching e un forte supporto per gli strumenti.\n\nE ampiamente utilizzato per servizi web, applicazioni desktop, sistemi cloud, sviluppo di giochi con Unity, software aziendale, applicazioni mobili e strumenti multipiattaforma basati su .NET.',
    },
    fr: {
      name: 'C#',
      description:
        'Un langage moderne, oriente objet, pour les applications, services, jeux et outils .NET.',
      longDescription:
        "C# est un langage de type statique cree par Microsoft pour la plateforme .NET, combinant la programmation orientee objet, les generiques, les workflows asynchrones, la correspondance de motifs et un support d'outillage solide.\n\nIl est largement utilise pour les services web, les applications de bureau, les systemes cloud, le developpement de jeux avec Unity, les logiciels d'entreprise, les applications mobiles et les outils multiplateformes construits sur .NET.",
    },
    de: {
      name: 'C#',
      description:
        'Eine moderne, objektorientierte Sprache f\u00fcr .NET-Anwendungen, -Dienste, -Spiele und -Tools.',
      longDescription:
        'C# ist eine statisch typisierte Sprache, die von Microsoft f\u00fcr die .NET-Plattform entwickelt wurde und objektorientierte Programmierung, Generics, asynchrone Arbeitsabl\u00e4ufe, Pattern Matching und eine starke Tooling-Unterst\u00fctzung kombiniert.\n\nSie wird h\u00e4ufig f\u00fcr Webdienste, Desktop-Anwendungen, Cloud-Systeme, Spieleentwicklung mit Unity, Unternehmenssoftware, mobile Apps und plattform\u00fcbergreifende Tools, die auf .NET basieren, verwendet.',
    },
    pt: {
      name: 'C#',
      description:
        'Linguagem moderna, orientada a objetos para aplica\u00e7\u00f5es .NET, servi\u00e7os, jogos e ferramentas.',
      longDescription:
        'C# \u00e9 uma linguagem estaticamente tipada criada pela Microsoft para a plataforma .NET, combinando programa\u00e7\u00e3o orientada a objetos, gen\u00e9ricos, fluxos ass\u00edncronos, correspond\u00eancia de padr\u00f5es e forte suporte a ferramentas.\n\n\u00c9 amplamente utilizada para servi\u00e7os web, aplica\u00e7\u00f5es de desktop, sistemas em nuvem, desenvolvimento de jogos com Unity, software empresarial, aplica\u00e7\u00f5es m\u00f3veis e ferramentas multiplataforma constru\u00eddas em .NET.',
    },
  },
} satisfies Language;
