import type { Language } from "../types";

export const erb = {
  slug: "erb",
  publishedDate: "2000-01-01",
  extensions: [".erb", ".rhtml", ".html.erb"],
  author: "Masatoshi Seki / Ruby",
  website: "https://ruby-doc.org/stdlib/erb/",
  paradigms: ["templating", "embedded", "markup"],
  tooling: {
    runtimes: ["Ruby", "Ruby on Rails"],
    packageManagers: ["RubyGems", "Bundler"],
    ecosystems: ["Web", "Ruby", "Static Sites"],
  },
  version: "Ruby stdlib",
  logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Ruby_logo.svg",
  color: "#CC342D",
  i18n: {
    en: {
      name: "ERB",
      description: "A Ruby templating system for embedding Ruby code inside text documents.",
      longDescription:
        "ERB templates combine plain text, HTML, XML, or configuration output with embedded Ruby expressions and control flow markers.\n\nThey are commonly used in Ruby on Rails views, static site generators, configuration generation, email templates, and any Ruby workflow that needs programmable text rendering.",
    },
    es: {
      name: "ERB",
      description:
        "Un sistema de plantillas de Ruby para incrustar codigo Ruby dentro de documentos de texto.",
      longDescription:
        "Las plantillas ERB combinan texto plano, HTML, XML o salidas de configuracion con expresiones Ruby incrustadas y marcadores de control de flujo.\n\nSe usan comunmente en vistas de Ruby on Rails, generadores de sitios estaticos, generacion de configuracion, plantillas de correo y cualquier flujo Ruby que necesite renderizado programable de texto.",
    },
  },
} satisfies Language;
