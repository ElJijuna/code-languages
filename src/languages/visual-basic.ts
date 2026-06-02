import type { Language } from '../types';

export const visualBasic = {
  slug: 'visual-basic',
  publishedDate: '2001-02-13',
  extensions: ['.vb'],
  author: 'Microsoft',
  website: 'https://learn.microsoft.com/dotnet/visual-basic/',
  paradigms: ['event-driven', 'generic', 'object-oriented', 'structured'],
  tooling: {
    runtimes: ['.NET', '.NET Framework', 'Mono'],
    packageManagers: ['NuGet'],
    ecosystems: ['.NET', 'Visual Studio', 'Windows Forms', 'ASP.NET'],
  },
  version: '17.13',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/4/40/VB.NET_Logo.svg',
  color: '#512BD4',
  i18n: {
    en: {
      name: 'Visual Basic',
      description: 'An approachable .NET language for type-safe, object-oriented applications.',
      longDescription:
        'Visual Basic is a .NET programming language from Microsoft with a readable syntax, static typing, object-oriented features, event-driven programming support, generics, LINQ, async workflows, and access to the .NET ecosystem.\n\nIt is used for Windows desktop applications, business software, automation, legacy .NET systems, ASP.NET applications, libraries, and teams that value a verbose, approachable syntax on top of the .NET runtime.',
    },
    es: {
      name: 'Visual Basic',
      description: 'Un lenguaje .NET accesible para aplicaciones orientadas a objetos y type-safe.',
      longDescription:
        'Visual Basic es un lenguaje de programacion .NET de Microsoft con sintaxis legible, tipado estatico, caracteristicas orientadas a objetos, soporte para programacion basada en eventos, genericos, LINQ, flujos async y acceso al ecosistema .NET.\n\nSe usa en aplicaciones de escritorio para Windows, software empresarial, automatizacion, sistemas .NET heredados, aplicaciones ASP.NET, bibliotecas y equipos que valoran una sintaxis explicita y accesible sobre el runtime .NET.',
    },
    it: {
      name: 'Visual Basic',
      description:
        'Un linguaggio .NET accessibile per applicazioni sicure dal punto di vista dei tipi e orientate agli oggetti.',
      longDescription:
        "Visual Basic e un linguaggio di programmazione .NET di Microsoft con una sintassi leggibile, tipizzazione statica, funzionalita orientate agli oggetti, supporto per la programmazione guidata dagli eventi, generics, LINQ, workflow asincroni e accesso all'ecosistema .NET.\n\nViene utilizzato per applicazioni desktop per Windows, software aziendale, automazione, sistemi .NET legacy, applicazioni ASP.NET, librerie e team che apprezzano una sintassi verbosa e accessibile sopra il runtime .NET.",
    },
    fr: {
      name: 'Visual Basic',
      description:
        'Un langage .NET accessible pour les applications orientees objet et securisees par type.',
      longDescription:
        "Visual Basic est un langage de programmation .NET de Microsoft dote d'une syntaxe lisible, de typage statique, de fonctionnalites orientees objet, de prise en charge de la programmation evenementielle, de generiques, de LINQ, de workflows asynchrones et d'acces a l'ecosysteme .NET.\n\nIl est utilise pour les applications de bureau Windows, les logiciels d'entreprise, l'automatisation, les systemes .NET herites, les applications ASP.NET, les bibliotheques et les equipes qui privilegient une syntaxe verbose et accessible au-dessus de l'environnement d'execution .NET.",
    },
    de: {
      name: 'Visual Basic',
      description:
        'Eine benutzerfreundliche .NET-Sprache f\u00fcr typsichere, objektorientierte Anwendungen.',
      longDescription:
        'Visual Basic ist eine .NET-Programmiersprache von Microsoft mit einer lesbaren Syntax, statischer Typisierung, objektorientierten Funktionen, Unterst\u00fctzung f\u00fcr ereignisgesteuerte Programmierung, Generics, LINQ, asynchrone Arbeitsabl\u00e4ufe und Zugriff auf das .NET-\u00d6kosystem.\n\nEs wird f\u00fcr Windows-Desktop-Anwendungen, Gesch\u00e4ftsanwendungen, Automatisierung, \u00e4ltere .NET-Systeme, ASP.NET-Anwendungen, Bibliotheken und Teams verwendet, die eine ausf\u00fchrliche, leicht verst\u00e4ndliche Syntax auf dem .NET-Runtime bevorzugen.',
    },
    pt: {
      name: 'Visual Basic',
      description:
        'Linguagem .NET acess\u00edvel para aplica\u00e7\u00f5es orientadas a objetos e seguras.',
      longDescription:
        'Visual Basic \u00e9 uma linguagem de programa\u00e7\u00e3o .NET da Microsoft com uma sintaxe leg\u00edvel, tipagem est\u00e1tica, recursos orientados a objetos, suporte \u00e0 programa\u00e7\u00e3o orientada a eventos, gen\u00e9ricos, LINQ, fluxos ass\u00edncronos e acesso ao ecossistema .NET.\n\n\u00c9 utilizada para aplica\u00e7\u00f5es de desktop do Windows, software empresarial, automa\u00e7\u00e3o, sistemas .NET legados, aplica\u00e7\u00f5es ASP.NET, bibliotecas e equipes que valorizam uma sintaxe verbosa e acess\u00edvel sobre o runtime .NET.',
    },
  },
} satisfies Language;
