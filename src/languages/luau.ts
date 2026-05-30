import type { Language } from "../types";

export const luau = {
  slug: "luau",
  publishedDate: "2021-11-03",
  extensions: [".luau"],
  author: "Roblox",
  website: "https://luau.org",
  paradigms: ["imperative", "scripting", "gradually typed", "embeddable"],
  tooling: {
    runtimes: ["Luau VM", "Roblox"],
    packageManagers: ["Wally", "Pesde"],
    ecosystems: ["Roblox", "Games", "Embedded scripting"],
  },
  version: "0.723",
  logo: "https://cdn.simpleicons.org/roblox/000000",
  color: "#000000",
  i18n: {
    en: {
      name: "Luau",
      description: "A fast Lua-derived scripting language with gradual typing.",
      longDescription:
        "Luau is a scripting language derived from Lua 5.1 and developed by Roblox. It adds gradual typing, performance-focused compiler and VM work, linting, type inference, and features aimed at large game codebases.\n\nIt is used in Roblox experiences, game tooling, embedded scripting, and projects that want Lua-like ergonomics with stronger static analysis and modern runtime performance.",
    },
    es: {
      name: "Luau",
      description: "Un lenguaje de scripting derivado de Lua, rapido y con tipado gradual.",
      longDescription:
        "Luau es un lenguaje de scripting derivado de Lua 5.1 y desarrollado por Roblox. Agrega tipado gradual, trabajo de compilador y VM orientado al rendimiento, linting, inferencia de tipos y caracteristicas para grandes bases de codigo de juegos.\n\nSe usa en experiencias de Roblox, herramientas de juegos, scripting embebido y proyectos que quieren ergonomia similar a Lua con analisis estatico mas fuerte y rendimiento moderno.",
    },
    it: {
      name: "Luau",
      description: "Un linguaggio di scripting veloce basato su Lua con tipizzazione graduale.",
      longDescription:
        "Luau e un linguaggio di scripting derivato da Lua 5.1 e sviluppato da Roblox. Aggiunge tipizzazione graduale, compilatore e VM focalizzati sulle prestazioni, linting, inferenza dei tipi e funzionalita mirate a codebase di giochi di grandi dimensioni.\n\nE utilizzato in esperienze di Roblox, strumenti di gioco, scripting embedded e progetti che desiderano l'ergonomia simile a Lua con analisi statica piu avanzata e prestazioni moderne della runtime.",
    },
    fr: {
      name: "Luau",
      description: "Un langage de script rapide base sur Lua avec typage progressif.",
      longDescription:
        "Luau est un langage de script derive de Lua 5.1 et developpe par Roblox. Il ajoute le typage progressif, un compilateur et une VM axes sur les performances, la verification du code, l'inference de type et des fonctionnalites visant aux grands ensembles de code de jeux.\n\nIl est utilise dans les experiences Roblox, les outils de jeu, le script embarque et les projets qui souhaitent une ergonomie similaire a Lua avec une analyse statique plus forte et des performances modernes de la VM.",
    },
    de: {
      name: "Luau",
      description: "Eine schnelle, auf Lua basierende Skriptsprache mit progressiver Typisierung.",
      longDescription:
        "Luau ist eine Skriptsprache, die auf Lua 5.1 basiert und von Roblox entwickelt wurde. Sie bietet progressive Typisierung, einen auf Leistung optimierten Compiler und VM, Linting, Typinferenz und Funktionen, die auf gro\u00dfe Spielcodebasen ausgerichtet sind.\n\nEs wird in Roblox-Erlebnissen, Spielwerkzeugen, eingebetteter Skripting und Projekten verwendet, die eine Lua-\u00e4hnliche Ergonomie mit st\u00e4rkerer statischer Analyse und moderner Laufzeitperformance w\u00fcnschen.",
    },
    pt: {
      name: "Luau",
      description: "Uma linguagem de scripting r\u00e1pida baseada em Lua com tipagem gradual.",
      longDescription:
        "Luau \u00e9 uma linguagem de scripting derivada do Lua 5.1 e desenvolvida pela Roblox. Ela adiciona tipagem gradual, otimiza\u00e7\u00e3o do compilador e VM, linting, infer\u00eancia de tipo e recursos voltados para grandes bases de c\u00f3digo de jogos.\n\n\u00c9 usada em experi\u00eancias do Roblox, ferramentas de jogos, scripting embarcado e projetos que desejam a ergonomia do Lua com an\u00e1lise est\u00e1tica mais forte e desempenho moderno.",
    },
  },
} satisfies Language;
