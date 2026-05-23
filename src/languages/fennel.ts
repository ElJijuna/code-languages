import type { Language } from "../types";

export const fennel = {
  slug: "fennel",
  publishedDate: "2016-10-01",
  extensions: [".fnl"],
  author: "Calvin Rose, Phil Hagelberg",
  website: "https://fennel-lang.org",
  paradigms: ["functional", "lisp", "scripting", "metaprogramming"],
  tooling: {
    runtimes: ["Lua", "LuaJIT"],
    packageManagers: ["LuaRocks"],
    ecosystems: ["Lua", "Neovim", "Game Development", "Embedded Scripting"],
  },
  version: "1.6.1",
  logo: "https://fennel-lang.org/logo.svg",
  color: "#FFF2A6",
  i18n: {
    en: {
      name: "Fennel",
      description: "A Lisp that compiles to Lua while preserving access to the Lua ecosystem.",
      longDescription:
        "Fennel is a Lisp dialect that compiles to Lua, offering parentheses, macros, pattern matching, destructuring, functional style, and interactive development while keeping compatibility with Lua runtimes and libraries.\n\nIt is used for Lua applications, Neovim configuration, game scripting, embedded extension languages, tools, and projects that want Lisp-style syntax and macros with Lua's portability and small runtime footprint.",
    },
    es: {
      name: "Fennel",
      description: "Un Lisp que compila a Lua y conserva acceso al ecosistema Lua.",
      longDescription:
        "Fennel es un dialecto Lisp que compila a Lua, ofreciendo parentesis, macros, pattern matching, destructuring, estilo funcional y desarrollo interactivo mientras mantiene compatibilidad con runtimes y bibliotecas de Lua.\n\nSe usa en aplicaciones Lua, configuracion de Neovim, scripting para juegos, lenguajes embebidos de extension, herramientas y proyectos que quieren sintaxis y macros de estilo Lisp con la portabilidad y huella pequena de runtime de Lua.",
    },
    it: {
      name: "Fennel",
      description: "Un Lisp che compila in Lua preservando l'accesso all'ecosistema Lua.",
      longDescription:
        "Fennel e un dialetto di Lisp che compila in Lua, offrendo parentesi, macro, corrispondenza di pattern, destrutturazione, stile funzionale e sviluppo interattivo, mantenendo la compatibilita con i runtime e le librerie Lua.\n\nE utilizzato per applicazioni Lua, configurazioni di Neovim, scripting di giochi, linguaggi di estensione embedded, strumenti e progetti che desiderano la sintassi e le macro di stile Lisp con la portabilita e il piccolo footprint di runtime di Lua.",
    },
    fr: {
      name: "Fennel",
      description: "Un Lisp qui compile vers Lua tout en conservant l'acces a l'ecosysteme Lua.",
      longDescription:
        "Fennel est un dialecte de Lisp qui compile vers Lua, offrant des parentheses, des macros, la correspondance de motifs, la destructuration, un style fonctionnel et le developpement interactif, tout en conservant la compatibilite avec les environnements d'execution et les bibliotheques Lua.\n\nIl est utilise pour les applications Lua, la configuration de Neovim, le script de jeux, les langages d'extension embarques, les outils et les projets qui souhaitent une syntaxe et des macros de type Lisp avec la portabilite et une petite empreinte d'execution de Lua.",
    },
    de: {
      name: "Fennel",
      description:
        "Ein Lisp, das zu Lua kompiliert und gleichzeitig den Zugriff auf das Lua-\u00d6kosystem beibeh\u00e4lt.",
      longDescription:
        "Fennel ist ein Lisp-Dialekt, der zu Lua kompiliert und dabei Klammern, Makros, Mustervergleich, Destrukturierung, funktionale Programmierung und interaktive Entwicklung erm\u00f6glicht, w\u00e4hrend gleichzeitig die Kompatibilit\u00e4t mit Lua-Runtimes und -Bibliotheken erhalten bleibt.\n\nEs wird f\u00fcr Lua-Anwendungen, Neovim-Konfigurationen, Spiel-Skripting, eingebettete Erweiterungssprachen, Tools und Projekte verwendet, die Lisp-\u00e4hnliche Syntax und Makros mit Lua's Portabilit\u00e4t und kleinem Laufzeitbedarf ben\u00f6tigen.",
    },
    pt: {
      name: "Fennel",
      description: "Um Lisp que compila para Lua, preservando o acesso ao ecossistema Lua.",
      longDescription:
        "Fennel \u00e9 um dialeto Lisp que compila para Lua, oferecendo par\u00eanteses, macros, correspond\u00eancia de padr\u00f5es, destructuring, estilo funcional e desenvolvimento interativo, mantendo a compatibilidade com as runtimes e bibliotecas Lua.\n\n\u00c9 usado para aplica\u00e7\u00f5es Lua, configura\u00e7\u00e3o do Neovim, scripting de jogos, linguagens de extens\u00e3o embarcadas, ferramentas e projetos que desejam a sintaxe e macros de estilo Lisp com a portabilidade e o pequeno tamanho do runtime Lua.",
    },
  },
} satisfies Language;
