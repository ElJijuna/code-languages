import type { Language } from "../types";

export const nunjucks = {
  slug: "nunjucks",
  publishedDate: "2013-07-01",
  extensions: [".njk", ".nunjucks"],
  author: "James Long / Mozilla",
  website: "https://mozilla.github.io/nunjucks/",
  paradigms: ["declarative", "templating"],
  tooling: {
    runtimes: ["Node.js", "Browser"],
    packageManagers: ["npm", "pnpm", "Yarn"],
    ecosystems: ["Web", "Node.js", "Static Sites"],
  },
  version: "3.2.4",
  logo: "https://mozilla.github.io/nunjucks/img/nunjucks-logo.png",
  color: "#1C4A1C",
  i18n: {
    en: {
      name: "Nunjucks",
      description:
        "A rich and powerful templating language for JavaScript inspired by Jinja2, with template inheritance and macros.",
      longDescription:
        "Nunjucks is a full-featured template language for JavaScript, created by Mozilla and heavily inspired by Python's Jinja2. It supports template inheritance, macros, include, custom filters, and asynchronous rendering, making it well-suited for building complex HTML-based applications.\n\nNunjucks runs both in Node.js and in the browser and is commonly used with static site generators like Eleventy. Its expressive syntax and rich feature set make it a popular choice for server-rendered web applications and documentation sites.",
    },
    es: {
      name: "Nunjucks",
      description:
        "Un potente lenguaje de plantillas para JavaScript inspirado en Jinja2, con herencia de plantillas y macros.",
      longDescription:
        "Nunjucks es un lenguaje de plantillas completo para JavaScript, creado por Mozilla e inspirado en Jinja2 de Python. Soporta herencia de plantillas, macros, includes, filtros personalizados y renderizado asíncrono.\n\nFunciona tanto en Node.js como en el navegador y se usa habitualmente con generadores de sitios estáticos como Eleventy. Su sintaxis expresiva lo convierte en una opción popular para aplicaciones web renderizadas en servidor.",
    },
    it: {
      name: "Nunjucks",
      description:
        "Un potente linguaggio di template per JavaScript ispirato a Jinja2, con ereditarietà dei template e macro.",
      longDescription:
        "Nunjucks è un linguaggio di template completo per JavaScript, creato da Mozilla e fortemente ispirato a Jinja2 di Python. Supporta l'ereditarietà dei template, macro, include, filtri personalizzati e rendering asincrono.\n\nFunziona sia in Node.js che nel browser ed è comunemente usato con generatori di siti statici come Eleventy. La sua sintassi espressiva lo rende una scelta popolare per applicazioni web renderizzate lato server.",
    },
    fr: {
      name: "Nunjucks",
      description:
        "Un langage de template riche et puissant pour JavaScript inspiré de Jinja2, avec héritage de templates et macros.",
      longDescription:
        "Nunjucks est un langage de template complet pour JavaScript, créé par Mozilla et fortement inspiré de Jinja2 de Python. Il supporte l'héritage de templates, les macros, l'inclusion, les filtres personnalisés et le rendu asynchrone.\n\nNunjucks fonctionne à la fois dans Node.js et dans le navigateur et est couramment utilisé avec des générateurs de sites statiques comme Eleventy. Sa syntaxe expressive en fait un choix populaire pour les applications web rendues côté serveur.",
    },
    de: {
      name: "Nunjucks",
      description:
        "Eine reichhaltige und leistungsstarke Template-Sprache für JavaScript, inspiriert von Jinja2, mit Template-Vererbung und Makros.",
      longDescription:
        "Nunjucks ist eine vollständige Template-Sprache für JavaScript, von Mozilla entwickelt und stark von Pythons Jinja2 inspiriert. Es unterstützt Template-Vererbung, Makros, Includes, benutzerdefinierte Filter und asynchrones Rendering.\n\nNunjucks läuft sowohl in Node.js als auch im Browser und wird häufig mit Static-Site-Generatoren wie Eleventy verwendet. Seine ausdrucksstarke Syntax macht es zu einer beliebten Wahl für serverseitig gerenderte Webanwendungen.",
    },
    pt: {
      name: "Nunjucks",
      description:
        "Uma linguagem de template rica e poderosa para JavaScript inspirada no Jinja2, com herança de templates e macros.",
      longDescription:
        "Nunjucks é uma linguagem de template completa para JavaScript, criada pela Mozilla e fortemente inspirada no Jinja2 do Python. Suporta herança de templates, macros, include, filtros personalizados e renderização assíncrona.\n\nFunciona tanto no Node.js quanto no navegador e é comumente usado com geradores de sites estáticos como o Eleventy. Sua sintaxe expressiva o torna uma escolha popular para aplicações web renderizadas no servidor.",
    },
  },
} satisfies Language;
