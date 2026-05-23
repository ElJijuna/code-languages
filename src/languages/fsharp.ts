import type { Language } from "../types";

export const fsharp = {
  slug: "fsharp",
  publishedDate: "2005-05-01",
  extensions: [".fs", ".fsi", ".fsx", ".fsscript"],
  author: "Don Syme / Microsoft Research",
  website: "https://dotnet.microsoft.com/en-us/languages/fsharp",
  paradigms: ["functional", "object-oriented", "imperative", "scripting"],
  tooling: {
    runtimes: [".NET", "F# Interactive"],
    packageManagers: ["NuGet"],
    ecosystems: [".NET", "Data Science", "Web", "Cloud"],
  },
  version: "10",
  logo: "https://cdn.simpleicons.org/fsharp/378BBA",
  color: "#378BBA",
  i18n: {
    en: {
      name: "F#",
      description:
        "A succinct, functional-first .NET language for robust applications, scripts, and data workflows.",
      longDescription:
        "F# is a functional-first programming language in the .NET ecosystem. It combines type inference, immutable data by default, pattern matching, discriminated unions, computation expressions, and interoperability with C# and other .NET languages.\n\nIt is used for backend services, data processing, scripting, domain modeling, financial systems, cloud applications, and teams that want concise code with strong static typing and access to the broader .NET platform.",
    },
    es: {
      name: "F#",
      description:
        "Un lenguaje .NET conciso y funcional para aplicaciones robustas, scripts y flujos de datos.",
      longDescription:
        "F# es un lenguaje de programacion funcional-first dentro del ecosistema .NET. Combina inferencia de tipos, datos inmutables por defecto, pattern matching, uniones discriminadas, computation expressions e interoperabilidad con C# y otros lenguajes .NET.\n\nSe usa en servicios backend, procesamiento de datos, scripting, modelado de dominios, sistemas financieros, aplicaciones cloud y equipos que quieren codigo conciso con tipado estatico fuerte y acceso a la plataforma .NET.",
    },
    it: {
      name: "F#",
      description:
        "Un linguaggio .NET funzionale, orientato al codice, per applicazioni, script e flussi di lavoro di dati robusti.",
      longDescription:
        "F# e un linguaggio di programmazione funzionale nell'ecosistema .NET. Combina inferenza dei tipi, dati immutabili per impostazione predefinita, corrispondenza di pattern, unioni discriminatorie, espressioni di calcolo e interoperabilita con C# e altre lingue .NET.\n\nViene utilizzato per servizi backend, elaborazione dati, scripting, modellazione di domini, sistemi finanziari, applicazioni cloud e team che desiderano codice conciso con un forte controllo statico e accesso alla piattaforma .NET piu ampia.",
    },
    fr: {
      name: "F#",
      description:
        "Un langage .NET fonctionnel, axe sur la concision, pour des applications, des scripts et des flux de donnees robustes.",
      longDescription:
        "F# est un langage de programmation fonctionnel dans l'ecosysteme .NET. Il combine l'inference de type, les donnees immuables par defaut, la correspondance de motifs, les unions differenciees, les expressions de calcul et l'interoperabilite avec C# et d'autres langages .NET.\n\nIl est utilise pour les services backend, le traitement de donnees, le scripting, la modelisation de domaine, les systemes financiers, les applications cloud et les equipes qui souhaitent un code concis avec un typage statique fort et un acces a la plateforme .NET plus large.",
    },
    de: {
      name: "F#",
      description:
        "Ein pr\u00e4gnantes, funktionales .NET-Sprache f\u00fcr robuste Anwendungen, Skripte und Datenworkflows.",
      longDescription:
        "F# ist eine funktional-orientierte Programmiersprache im .NET-\u00d6kosystem. Sie kombiniert Typinferenz, unver\u00e4nderliche Daten (standardm\u00e4\u00dfig), Mustervergleich, diskriminierte Unions, Berechnungs-Ausdr\u00fccke und Interoperabilit\u00e4t mit C# und anderen .NET-Sprachen.\n\nEs wird f\u00fcr Backend-Dienste, Datenverarbeitung, Skripting, Domain-Modellierung, Finanzsysteme, Cloud-Anwendungen und Teams verwendet, die pr\u00e4gnanten Code mit starker statischer Typisierung und Zugriff auf die breitere .NET-Plattform w\u00fcnschen.",
    },
    pt: {
      name: "F#",
      description:
        "Linguagem .NET funcional, ideal para aplica\u00e7\u00f5es robustas, scripts e fluxos de dados.",
      longDescription:
        "F# \u00e9 uma linguagem de programa\u00e7\u00e3o funcional no ecossistema .NET. Combina infer\u00eancia de tipo, dados imut\u00e1veis por padr\u00e3o, correspond\u00eancia de padr\u00f5es, uni\u00f5es discriminadas, express\u00f5es de computa\u00e7\u00e3o e interoperabilidade com C# e outras linguagens .NET.\n\n\u00c9 utilizada para servi\u00e7os de backend, processamento de dados, scripting, modelagem de dom\u00ednio, sistemas financeiros, aplica\u00e7\u00f5es em nuvem e equipes que desejam c\u00f3digo conciso com tipagem est\u00e1tica forte e acesso \u00e0 plataforma .NET mais ampla.",
    },
  },
} satisfies Language;
