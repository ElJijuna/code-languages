import type { Language } from '@/types';

export const asp = {
  slug: 'asp',
  publishedDate: '1996-12-01',
  extensions: ['.asp', '.aspx', '.ascx', '.ashx', '.asmx', '.master'],
  author: 'Microsoft',
  website: 'https://learn.microsoft.com/en-us/aspnet/web-forms/',
  paradigms: ['server-side', 'templating', 'object-oriented', 'event-driven'],
  tooling: {
    runtimes: ['IIS', '.NET Framework'],
    packageManagers: ['NuGet'],
    ecosystems: ['Windows', '.NET', 'Web'],
  },
  version: '4.8.1',
  logo: 'https://cdn.simpleicons.org/dotnet/512BD4',
  color: '#512BD4',
  i18n: {
    en: {
      name: 'ASP/ASPX',
      description:
        'Microsoft server-side web templates and pages for Classic ASP and ASP.NET Web Forms.',
      longDescription:
        'ASP and ASPX files represent Microsoft server-side web page technologies. Classic ASP uses `.asp` files with script blocks, while ASP.NET Web Forms uses `.aspx`, user controls, handlers, services, and master pages on top of the .NET Framework.\n\nThey are commonly found in legacy and long-lived Windows web applications hosted on IIS, often alongside C#, Visual Basic, HTML, CSS, JavaScript, and NuGet-based .NET Framework dependencies.',
    },
    es: {
      name: 'ASP/ASPX',
      description:
        'Plantillas y paginas web server-side de Microsoft para Classic ASP y ASP.NET Web Forms.',
      longDescription:
        'Los archivos ASP y ASPX representan tecnologias de paginas web server-side de Microsoft. Classic ASP usa archivos `.asp` con bloques de script, mientras ASP.NET Web Forms usa `.aspx`, controles de usuario, handlers, servicios y paginas maestras sobre .NET Framework.\n\nAparecen comunmente en aplicaciones web Windows legacy o de larga vida alojadas en IIS, a menudo junto con C#, Visual Basic, HTML, CSS, JavaScript y dependencias .NET Framework basadas en NuGet.',
    },
    it: {
      name: 'ASP/ASPX',
      description: 'ASP/ASPX',
      longDescription:
        'I file ASP e ASPX rappresentano le tecnologie per le pagine web lato server di Microsoft. Classic ASP utilizza file `.asp` con blocchi di script, mentre ASP.NET Web Forms utilizza file `.aspx`, controlli utente, gestori, servizi e pagine master sulla base del .NET Framework.\n\nSono comunemente trovati in applicazioni web Windows legacy e a lunga durata ospitate su IIS, spesso insieme a C#, Visual Basic, HTML, CSS, JavaScript e dipendenze .NET Framework basate su NuGet.',
    },
    fr: {
      name: 'ASP/ASPX',
      description: 'ASP/ASPX',
      longDescription:
        "Les fichiers ASP et ASPX representent les technologies de pages web cote serveur de Microsoft. Classic ASP utilise des fichiers `.asp` avec des blocs de script, tandis qu'ASP.NET Web Forms utilise des fichiers `.aspx`, des controles d'utilisateur, des gestionnaires, des services et des pages maitres sur le .NET Framework.\n\nIls sont couramment trouves dans les applications web Windows heritees et de longue duree hebergees sur IIS, souvent en conjonction avec C#, Visual Basic, HTML, CSS, JavaScript et les dependances .NET Framework basees sur NuGet.",
    },
    de: {
      name: 'ASP/ASPX',
      description:
        'Microsofts serverseitige Web-Vorlagen und -Seiten für Classic ASP und ASP.NET Web Forms.',
      longDescription:
        'ASP- und ASPX-Dateien repräsentieren Microsofts serverseitige Web-Technologien. Classic ASP verwendet `.asp`-Dateien mit Skriptblöcken, während ASP.NET Web Forms `.aspx`-Dateien, Benutzerkontrollen, Handler, Services und Master Pages auf dem .NET Framework verwendet. \n\nSie sind häufig in älteren und langlebigen Windows-Webanwendungen, die auf IIS gehostet werden, zu finden, oft zusammen mit C#, Visual Basic, HTML, CSS, JavaScript und .NET Framework-Abhängigkeiten, die auf NuGet basieren.',
    },
    pt: {
      name: 'ASP/ASPX',
      description:
        'Templates e páginas web do lado do servidor da Microsoft para Classic ASP e ASP.NET Web Forms.',
      longDescription:
        'Arquivos ASP e ASPX representam tecnologias de páginas web do lado do servidor da Microsoft. Classic ASP usa arquivos `.asp` com blocos de script, enquanto ASP.NET Web Forms usa `.aspx`, controles de usuário, manipuladores, serviços e páginas mestras sobre o .NET Framework.\n\nSão comumente encontrados em aplicações web Windows legadas e de longa duração hospedadas no IIS, frequentemente em conjunto com C#, Visual Basic, HTML, CSS, JavaScript e dependências do .NET Framework baseadas em NuGet.',
    },
  },
} satisfies Language;
