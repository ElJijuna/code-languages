import type { Language } from '../types';

export const fsharp = {
  slug: 'fsharp',
  publishedDate: '2005-05-01',
  extensions: ['.fs', '.fsi', '.fsx', '.fsscript'],
  author: 'Don Syme / Microsoft Research',
  website: 'https://dotnet.microsoft.com/en-us/languages/fsharp',
  paradigms: ['functional', 'object-oriented', 'imperative', 'scripting'],
  tooling: {
    runtimes: ['.NET', 'F# Interactive'],
    packageManagers: ['NuGet'],
    ecosystems: ['.NET', 'Data Science', 'Web', 'Cloud'],
  },
  version: '10',
  logo: 'https://cdn.simpleicons.org/fsharp/378BBA',
  color: '#378BBA',
  i18n: {
    en: {
      name: 'F#',
      description:
        'A succinct, functional-first .NET language for robust applications, scripts, and data workflows.',
      longDescription:
        'F# is a functional-first programming language in the .NET ecosystem. It combines type inference, immutable data by default, pattern matching, discriminated unions, computation expressions, and interoperability with C# and other .NET languages.\n\nIt is used for backend services, data processing, scripting, domain modeling, financial systems, cloud applications, and teams that want concise code with strong static typing and access to the broader .NET platform.',
    },
    es: {
      name: 'F#',
      description:
        'Un lenguaje .NET conciso y funcional para aplicaciones robustas, scripts y flujos de datos.',
      longDescription:
        'F# es un lenguaje de programacion funcional-first dentro del ecosistema .NET. Combina inferencia de tipos, datos inmutables por defecto, pattern matching, uniones discriminadas, computation expressions e interoperabilidad con C# y otros lenguajes .NET.\n\nSe usa en servicios backend, procesamiento de datos, scripting, modelado de dominios, sistemas financieros, aplicaciones cloud y equipos que quieren codigo conciso con tipado estatico fuerte y acceso a la plataforma .NET.',
    },
    it: {
      name: 'F#',
      description:
        'Un linguaggio .NET funzionale, orientato al codice, per applicazioni, script e flussi di lavoro di dati robusti.',
      longDescription:
        "F# e un linguaggio di programmazione funzionale nell'ecosistema .NET. Combina inferenza dei tipi, dati immutabili per impostazione predefinita, corrispondenza di pattern, unioni discriminatorie, espressioni di calcolo e interoperabilita con C# e altre lingue .NET.\n\nViene utilizzato per servizi backend, elaborazione dati, scripting, modellazione di domini, sistemi finanziari, applicazioni cloud e team che desiderano codice conciso con un forte controllo statico e accesso alla piattaforma .NET piu ampia.",
    },
    fr: {
      name: 'F#',
      description:
        'Un langage .NET fonctionnel, axe sur la concision, pour des applications, des scripts et des flux de donnees robustes.',
      longDescription:
        "F# est un langage de programmation fonctionnel dans l'ecosysteme .NET. Il combine l'inference de type, les donnees immuables par defaut, la correspondance de motifs, les unions differenciees, les expressions de calcul et l'interoperabilite avec C# et d'autres langages .NET.\n\nIl est utilise pour les services backend, le traitement de donnees, le scripting, la modelisation de domaine, les systemes financiers, les applications cloud et les equipes qui souhaitent un code concis avec un typage statique fort et un acces a la plateforme .NET plus large.",
    },
    de: {
      name: 'F#',
      description:
        'Ein prägnantes, funktionales .NET-Sprache für robuste Anwendungen, Skripte und Datenworkflows.',
      longDescription:
        'F# ist eine funktional-orientierte Programmiersprache im .NET-Ökosystem. Sie kombiniert Typinferenz, unveränderliche Daten (standardmäßig), Mustervergleich, diskriminierte Unions, Berechnungs-Ausdrücke und Interoperabilität mit C# und anderen .NET-Sprachen.\n\nEs wird für Backend-Dienste, Datenverarbeitung, Skripting, Domain-Modellierung, Finanzsysteme, Cloud-Anwendungen und Teams verwendet, die prägnanten Code mit starker statischer Typisierung und Zugriff auf die breitere .NET-Plattform wünschen.',
    },
    pt: {
      name: 'F#',
      description:
        'Linguagem .NET funcional, ideal para aplicações robustas, scripts e fluxos de dados.',
      longDescription:
        'F# é uma linguagem de programação funcional no ecossistema .NET. Combina inferência de tipo, dados imutáveis por padrão, correspondência de padrões, uniões discriminadas, expressões de computação e interoperabilidade com C# e outras linguagens .NET.\n\nÉ utilizada para serviços de backend, processamento de dados, scripting, modelagem de domínio, sistemas financeiros, aplicações em nuvem e equipes que desejam código conciso com tipagem estática forte e acesso à plataforma .NET mais ampla.',
    },
  },
} satisfies Language;
