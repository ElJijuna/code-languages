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
  },
} satisfies Language;
