import type { Language } from "../types";

export const ruby = {
  slug: "ruby",
  publishedDate: "1995-12-21",
  extensions: [".rb", ".rbw", ".rake", ".gemspec", "Gemfile", "Rakefile", "config.ru"],
  author: "Yukihiro Matsumoto",
  website: "https://www.ruby-lang.org",
  paradigms: ["object-oriented", "imperative", "functional", "reflective", "scripting"],
  tooling: {
    runtimes: ["Ruby MRI", "JRuby", "TruffleRuby"],
    packageManagers: ["RubyGems", "Bundler"],
    ecosystems: ["Web", "Rails", "DevOps", "Automation"],
  },
  version: "4.0.4",
  logo: "https://www.ruby-lang.org/images/header-ruby-logo.png",
  color: "#CC342D",
  i18n: {
    en: {
      name: "Ruby",
      description:
        "A dynamic, object-oriented scripting language focused on productivity and developer happiness.",
      longDescription:
        "Ruby is a dynamic language with expressive syntax, open classes, blocks, mixins, metaprogramming, exceptions, modules, and a strong object-oriented model where nearly everything is an object.\n\nIt is widely used for web applications with Ruby on Rails, command-line tools, automation scripts, infrastructure tooling, static site generation, testing frameworks, and developer productivity workflows.",
    },
    es: {
      name: "Ruby",
      description:
        "Un lenguaje dinamico y orientado a objetos enfocado en productividad y felicidad del desarrollador.",
      longDescription:
        "Ruby es un lenguaje dinamico con sintaxis expresiva, clases abiertas, bloques, mixins, metaprogramacion, excepciones, modulos y un modelo orientado a objetos donde casi todo es un objeto.\n\nSe usa ampliamente para aplicaciones web con Ruby on Rails, herramientas de linea de comandos, scripts de automatizacion, tooling de infraestructura, generadores de sitios estaticos, frameworks de testing y flujos de productividad para desarrolladores.",
    },
    it: {
      name: "Ruby",
      description:
        "Un linguaggio di scripting dinamico, orientato agli oggetti, incentrato sulla produttivita e sulla felicita degli sviluppatori.",
      longDescription:
        "Ruby e un linguaggio dinamico con una sintassi espressiva, classi aperte, blocchi, mixins, metaprogrammazione, eccezioni, moduli e un modello orientato agli oggetti robusto, in cui quasi tutto e un oggetto.\n\nE ampiamente utilizzato per applicazioni web con Ruby on Rails, strumenti da riga di comando, script di automazione, strumenti di infrastruttura, generazione di siti statici, framework di test e flussi di lavoro di produttivita degli sviluppatori.",
    },
    fr: {
      name: "Ruby",
      description:
        "Un langage de script dynamique, oriente objet, axe sur la productivite et le bonheur des developpeurs.",
      longDescription:
        "Ruby est un langage dynamique dote d'une syntaxe expressive, de classes ouvertes, de blocs, de mixins, de metaprogrammation, d'exceptions, de modules et d'un modele oriente objet solide, ou presque tout est un objet.\n\nIl est largement utilise pour les applications web avec Ruby on Rails, les outils en ligne de commande, les scripts d'automatisation, les outils d'infrastructure, la generation de sites statiques, les frameworks de test et les flux de travail de productivite des developpeurs.",
    },
    de: {
      name: "Ruby",
      description:
        "Eine dynamische, objektorientierte Skriptsprache, die auf Produktivit\u00e4t und Entwicklerzufriedenheit ausgerichtet ist.",
      longDescription:
        "Ruby ist eine dynamische Sprache mit ausdrucksstarker Syntax, offenen Klassen, Bl\u00f6cken, Mixins, Metaprogrammierung, Ausnahmen, Modulen und einem starken objektorientierten Modell, bei dem fast alles ein Objekt ist.\n\nSie wird h\u00e4ufig f\u00fcr Webanwendungen mit Ruby on Rails, Kommandozeilen-Tools, Automatisierungsskripte, Infrastruktur-Tools, statische Seitengenerierung, Testframeworks und Entwicklerproduktivit\u00e4tsworkflows verwendet.",
    },
    pt: {
      name: "Ruby",
      description:
        "Uma linguagem de script din\u00e2mica, orientada a objetos, focada na produtividade e na satisfa\u00e7\u00e3o do desenvolvedor.",
      longDescription:
        "Ruby \u00e9 uma linguagem din\u00e2mica com sintaxe expressiva, classes abertas, blocos, mixins, metaprograma\u00e7\u00e3o, exce\u00e7\u00f5es, m\u00f3dulos e um forte modelo orientado a objetos, onde quase tudo \u00e9 um objeto.\n\n\u00c9 amplamente utilizada para aplica\u00e7\u00f5es web com Ruby on Rails, ferramentas de linha de comando, scripts de automa\u00e7\u00e3o, ferramentas de infraestrutura, gera\u00e7\u00e3o de sites est\u00e1ticos, frameworks de teste e fluxos de trabalho de produtividade para desenvolvedores.",
    },
  },
} satisfies Language;
