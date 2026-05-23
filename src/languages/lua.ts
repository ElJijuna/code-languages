import type { Language } from "../types";

export const lua = {
  slug: "lua",
  publishedDate: "1994-07-08",
  extensions: [".lua", ".rockspec"],
  author: "Roberto Ierusalimschy, Luiz Henrique de Figueiredo, Waldemar Celes",
  website: "https://www.lua.org",
  paradigms: ["procedural", "functional", "object-oriented", "scripting", "embeddable"],
  tooling: {
    runtimes: ["Lua", "LuaJIT"],
    packageManagers: ["LuaRocks"],
    ecosystems: ["Game Development", "Embedded Systems", "Scripting", "Configuration"],
  },
  version: "5.5.0",
  logo: "https://www.lua.org/images/lua-logo.gif",
  color: "#000080",
  i18n: {
    en: {
      name: "Lua",
      description:
        "A lightweight, embeddable scripting language designed for extension and portability.",
      longDescription:
        "Lua is a small, fast scripting language with tables, first-class functions, closures, coroutines, metatables, dynamic typing, and a compact C API for embedding and extension.\n\nIt is widely used in game engines, embedded systems, application scripting, configuration files, plugins, network tools, Redis scripts, Neovim configuration, and products that need a portable extension language.",
    },
    es: {
      name: "Lua",
      description:
        "Un lenguaje de scripting liviano y embebible disenado para extension y portabilidad.",
      longDescription:
        "Lua es un lenguaje de scripting pequeno y rapido con tablas, funciones de primera clase, closures, corutinas, metatables, tipado dinamico y una API C compacta para embedding y extension.\n\nSe usa ampliamente en motores de videojuegos, sistemas embebidos, scripting de aplicaciones, archivos de configuracion, plugins, herramientas de red, scripts de Redis, configuracion de Neovim y productos que necesitan un lenguaje de extension portable.",
    },
    it: {
      name: "Lua",
      description:
        "Un linguaggio di scripting leggero e incorporabile, progettato per l'estensione e la portabilita.",
      longDescription:
        "Lua e un linguaggio di scripting piccolo e veloce con tabelle, funzioni di prima classe, closure, coroutine, metatabelle, tipizzazione dinamica e un'API C compatta per l'incorporamento e l'estensione.\n\nE ampiamente utilizzato in motori di gioco, sistemi embedded, scripting di applicazioni, file di configurazione, plugin, strumenti di rete, script di Redis, configurazione di Neovim e prodotti che necessitano di un linguaggio di estensione portabile.",
    },
    fr: {
      name: "Lua",
      description:
        "Un langage de script leger et embarquable, concu pour l'extension et la portabilite.",
      longDescription:
        "Lua est un langage de script petit et rapide, avec des tableaux, des fonctions de premiere classe, des closures, des coroutines, des metatables, un typage dynamique et une API C compacte pour l'integration et l'extension.\n\nIl est largement utilise dans les moteurs de jeu, les systemes embarques, le scripting d'applications, les fichiers de configuration, les plugins, les outils reseau, les scripts Redis, la configuration de Neovim, et les produits qui ont besoin d'un langage d'extension portable.",
    },
    de: {
      name: "Lua",
      description:
        "Eine leichte, einbettbare Skriptsprache, die f\u00fcr Erweiterbarkeit und Portabilit\u00e4t entwickelt wurde.",
      longDescription:
        "Lua ist eine kleine, schnelle Skriptsprache mit Tabellen, Funktionen von erster Klasse, Closures, Coroutinen, Metatabellen, dynamischer Typisierung und einer kompakten C-API f\u00fcr Einbettung und Erweiterung.\n\nSie wird h\u00e4ufig in Spiel-Engines, eingebetteten Systemen, Anwendungs-Skripten, Konfigurationsdateien, Plugins, Netzwerk-Tools, Redis-Skripten, Neovim-Konfigurationen und Produkten verwendet, die eine portable Skriptsprache ben\u00f6tigen.",
    },
    pt: {
      name: "Lua",
      description:
        "Uma linguagem de scripting leve e incorpor\u00e1vel, projetada para extens\u00e3o e portabilidade.",
      longDescription:
        "Lua \u00e9 uma linguagem de scripting pequena e r\u00e1pida com tabelas, fun\u00e7\u00f5es de primeira classe, closures, coroutines, metatabelas, tipagem din\u00e2mica e uma API C compacta para incorpora\u00e7\u00e3o e extens\u00e3o.\n\n\u00c9 amplamente utilizada em motores de jogos, sistemas embarcados, scripting de aplica\u00e7\u00f5es, arquivos de configura\u00e7\u00e3o, plugins, ferramentas de rede, scripts do Redis, configura\u00e7\u00e3o do Neovim e produtos que necessitam de uma linguagem de extens\u00e3o port\u00e1til.",
    },
  },
} satisfies Language;
