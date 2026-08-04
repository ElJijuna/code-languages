import type { Language } from '@/types';

export const lua = {
  slug: 'lua',
  publishedDate: '1994-07-08',
  extensions: ['.lua', '.rockspec'],
  author: 'Roberto Ierusalimschy, Luiz Henrique de Figueiredo, Waldemar Celes',
  website: 'https://www.lua.org',
  paradigms: ['procedural', 'functional', 'object-oriented', 'scripting', 'embeddable'],
  tooling: {
    runtimes: ['Lua', 'LuaJIT'],
    packageManagers: ['LuaRocks'],
    ecosystems: ['Game Development', 'Embedded Systems', 'Scripting', 'Configuration'],
  },
  version: '5.5.1',
  logo: 'https://www.lua.org/images/lua-logo.gif',
  color: '#000080',
  i18n: {
    en: {
      name: 'Lua',
      description:
        'A lightweight, embeddable scripting language designed for extension and portability.',
      longDescription:
        'Lua is a small, fast scripting language with tables, first-class functions, closures, coroutines, metatables, dynamic typing, and a compact C API for embedding and extension.\n\nIt is widely used in game engines, embedded systems, application scripting, configuration files, plugins, network tools, Redis scripts, Neovim configuration, and products that need a portable extension language.',
    },
    es: {
      name: 'Lua',
      description:
        'Un lenguaje de scripting liviano y embebible disenado para extension y portabilidad.',
      longDescription:
        'Lua es un lenguaje de scripting pequeno y rapido con tablas, funciones de primera clase, closures, corutinas, metatables, tipado dinamico y una API C compacta para embedding y extension.\n\nSe usa ampliamente en motores de videojuegos, sistemas embebidos, scripting de aplicaciones, archivos de configuracion, plugins, herramientas de red, scripts de Redis, configuracion de Neovim y productos que necesitan un lenguaje de extension portable.',
    },
    it: {
      name: 'Lua',
      description:
        "Un linguaggio di scripting leggero e incorporabile, progettato per l'estensione e la portabilita.",
      longDescription:
        "Lua e un linguaggio di scripting piccolo e veloce con tabelle, funzioni di prima classe, closure, coroutine, metatabelle, tipizzazione dinamica e un'API C compatta per l'incorporamento e l'estensione.\n\nE ampiamente utilizzato in motori di gioco, sistemi embedded, scripting di applicazioni, file di configurazione, plugin, strumenti di rete, script di Redis, configurazione di Neovim e prodotti che necessitano di un linguaggio di estensione portabile.",
    },
    fr: {
      name: 'Lua',
      description:
        "Un langage de script leger et embarquable, concu pour l'extension et la portabilite.",
      longDescription:
        "Lua est un langage de script petit et rapide, avec des tableaux, des fonctions de premiere classe, des closures, des coroutines, des metatables, un typage dynamique et une API C compacte pour l'integration et l'extension.\n\nIl est largement utilise dans les moteurs de jeu, les systemes embarques, le scripting d'applications, les fichiers de configuration, les plugins, les outils reseau, les scripts Redis, la configuration de Neovim, et les produits qui ont besoin d'un langage d'extension portable.",
    },
    de: {
      name: 'Lua',
      description:
        'Eine leichte, einbettbare Skriptsprache, die für Erweiterbarkeit und Portabilität entwickelt wurde.',
      longDescription:
        'Lua ist eine kleine, schnelle Skriptsprache mit Tabellen, Funktionen von erster Klasse, Closures, Coroutinen, Metatabellen, dynamischer Typisierung und einer kompakten C-API für Einbettung und Erweiterung.\n\nSie wird häufig in Spiel-Engines, eingebetteten Systemen, Anwendungs-Skripten, Konfigurationsdateien, Plugins, Netzwerk-Tools, Redis-Skripten, Neovim-Konfigurationen und Produkten verwendet, die eine portable Skriptsprache benötigen.',
    },
    pt: {
      name: 'Lua',
      description:
        'Uma linguagem de scripting leve e incorporável, projetada para extensão e portabilidade.',
      longDescription:
        'Lua é uma linguagem de scripting pequena e rápida com tabelas, funções de primeira classe, closures, coroutines, metatabelas, tipagem dinâmica e uma API C compacta para incorporação e extensão.\n\nÉ amplamente utilizada em motores de jogos, sistemas embarcados, scripting de aplicações, arquivos de configuração, plugins, ferramentas de rede, scripts do Redis, configuração do Neovim e produtos que necessitam de uma linguagem de extensão portátil.',
    },
  },
} satisfies Language;
