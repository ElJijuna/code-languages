import type { Language } from '@/types';

export const fennel = {
  slug: 'fennel',
  publishedDate: '2016-10-01',
  extensions: ['.fnl'],
  author: 'Calvin Rose, Phil Hagelberg',
  website: 'https://fennel-lang.org',
  paradigms: ['functional', 'lisp', 'scripting', 'metaprogramming'],
  relations: {
    compilesTo: ['lua'],
  },
  tooling: {
    runtimes: ['Lua', 'LuaJIT'],
    packageManagers: ['LuaRocks'],
    ecosystems: ['Lua', 'Neovim', 'Game Development', 'Embedded Scripting'],
  },
  version: '1.6.1',
  logo: 'https://fennel-lang.org/logo.svg',
  color: '#FFF2A6',
  i18n: {
    en: {
      name: 'Fennel',
      description: 'A Lisp that compiles to Lua while preserving access to the Lua ecosystem.',
      longDescription:
        "Fennel is a Lisp dialect that compiles to Lua, offering parentheses, macros, pattern matching, destructuring, functional style, and interactive development while keeping compatibility with Lua runtimes and libraries.\n\nIt is used for Lua applications, Neovim configuration, game scripting, embedded extension languages, tools, and projects that want Lisp-style syntax and macros with Lua's portability and small runtime footprint.",
    },
    es: {
      name: 'Fennel',
      description: 'Un Lisp que compila a Lua y conserva acceso al ecosistema Lua.',
      longDescription:
        'Fennel es un dialecto Lisp que compila a Lua, ofreciendo parentesis, macros, pattern matching, destructuring, estilo funcional y desarrollo interactivo mientras mantiene compatibilidad con runtimes y bibliotecas de Lua.\n\nSe usa en aplicaciones Lua, configuracion de Neovim, scripting para juegos, lenguajes embebidos de extension, herramientas y proyectos que quieren sintaxis y macros de estilo Lisp con la portabilidad y huella pequena de runtime de Lua.',
    },
    it: {
      name: 'Fennel',
      description: "Un Lisp che compila in Lua preservando l'accesso all'ecosistema Lua.",
      longDescription:
        'Fennel e un dialetto di Lisp che compila in Lua, offrendo parentesi, macro, corrispondenza di pattern, destrutturazione, stile funzionale e sviluppo interattivo, mantenendo la compatibilita con i runtime e le librerie Lua.\n\nE utilizzato per applicazioni Lua, configurazioni di Neovim, scripting di giochi, linguaggi di estensione embedded, strumenti e progetti che desiderano la sintassi e le macro di stile Lisp con la portabilita e il piccolo footprint di runtime di Lua.',
    },
    fr: {
      name: 'Fennel',
      description: "Un Lisp qui compile vers Lua tout en conservant l'acces a l'ecosysteme Lua.",
      longDescription:
        "Fennel est un dialecte de Lisp qui compile vers Lua, offrant des parentheses, des macros, la correspondance de motifs, la destructuration, un style fonctionnel et le developpement interactif, tout en conservant la compatibilite avec les environnements d'execution et les bibliotheques Lua.\n\nIl est utilise pour les applications Lua, la configuration de Neovim, le script de jeux, les langages d'extension embarques, les outils et les projets qui souhaitent une syntaxe et des macros de type Lisp avec la portabilite et une petite empreinte d'execution de Lua.",
    },
    de: {
      name: 'Fennel',
      description:
        'Ein Lisp, das zu Lua kompiliert und gleichzeitig den Zugriff auf das Lua-Ökosystem beibehält.',
      longDescription:
        "Fennel ist ein Lisp-Dialekt, der zu Lua kompiliert und dabei Klammern, Makros, Mustervergleich, Destrukturierung, funktionale Programmierung und interaktive Entwicklung ermöglicht, während gleichzeitig die Kompatibilität mit Lua-Runtimes und -Bibliotheken erhalten bleibt.\n\nEs wird für Lua-Anwendungen, Neovim-Konfigurationen, Spiel-Skripting, eingebettete Erweiterungssprachen, Tools und Projekte verwendet, die Lisp-ähnliche Syntax und Makros mit Lua's Portabilität und kleinem Laufzeitbedarf benötigen.",
    },
    pt: {
      name: 'Fennel',
      description: 'Um Lisp que compila para Lua, preservando o acesso ao ecossistema Lua.',
      longDescription:
        'Fennel é um dialeto Lisp que compila para Lua, oferecendo parênteses, macros, correspondência de padrões, destructuring, estilo funcional e desenvolvimento interativo, mantendo a compatibilidade com as runtimes e bibliotecas Lua.\n\nÉ usado para aplicações Lua, configuração do Neovim, scripting de jogos, linguagens de extensão embarcadas, ferramentas e projetos que desejam a sintaxe e macros de estilo Lisp com a portabilidade e o pequeno tamanho do runtime Lua.',
    },
  },
} satisfies Language;
