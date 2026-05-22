import type { Language } from "../types";

export const pug = {
  slug: "pug",
  publishedDate: "2010-06-01",
  extensions: [".pug", ".jade"],
  author: "TJ Holowaychuk / Pug contributors",
  website: "https://pugjs.org",
  paradigms: ["declarative", "templating", "markup"],
  tooling: {
    runtimes: ["Node.js", "Browser"],
    packageManagers: ["npm", "pnpm", "Yarn"],
    ecosystems: ["Web", "Node.js"],
  },
  version: "3.0.4",
  logo: "https://cdn.simpleicons.org/pug/A86454",
  color: "#A86454",
  i18n: {
    en: {
      name: "Pug",
      description:
        "A whitespace-sensitive template language for generating HTML in Node.js and browsers.",
      longDescription:
        "Pug is a high-performance template language for writing HTML with concise, indentation-based syntax. It was formerly known as Jade and is commonly used to generate HTML from reusable templates, layouts, includes, mixins, and JavaScript expressions.\n\nIt is used in Node.js web applications, static site workflows, component prototypes, email templates, and build pipelines where teams want compact templates that compile to HTML.",
    },
    es: {
      name: "Pug",
      description:
        "Un lenguaje de plantillas sensible a espacios para generar HTML en Node.js y navegadores.",
      longDescription:
        "Pug es un lenguaje de plantillas de alto rendimiento para escribir HTML con una sintaxis concisa basada en indentacion. Antes se llamaba Jade y se usa comunmente para generar HTML desde plantillas reutilizables, layouts, includes, mixins y expresiones JavaScript.\n\nSe usa en aplicaciones web con Node.js, flujos de sitios estaticos, prototipos de componentes, plantillas de email y pipelines de build donde los equipos quieren plantillas compactas que compilan a HTML.",
    },
    it: {
      name: "Pug",
      description:
        "Un linguaggio di template sensibile allo spazio bianco per generare HTML in Node.js e browser.",
      longDescription:
        "Pug e un linguaggio di template ad alte prestazioni per scrivere HTML con una sintassi concisa basata sull'indentazione. In precedenza era noto come Jade ed e comunemente utilizzato per generare HTML da modelli, layout, include, mixin e espressioni JavaScript riutilizzabili.\n\nViene utilizzato in applicazioni web Node.js, flussi di lavoro per siti statici, prototipi di componenti, modelli di email e pipeline di build in cui i team desiderano modelli compatti che si compilano in HTML.",
    },
    fr: {
      name: "Pug",
      description:
        "Un langage de modele sensible aux espaces blancs pour generer du HTML dans Node.js et les navigateurs.",
      longDescription:
        "Pug est un langage de modele performant pour ecrire du HTML avec une syntaxe concise basee sur l'indentation. Il etait auparavant connu sous le nom de Jade et est couramment utilise pour generer du HTML a partir de modeles, de mises en page, d'inclusions, de mixins et d'expressions JavaScript reutilisables.\n\nIl est utilise dans les applications web Node.js, les flux de travail de sites statiques, les prototypes de composants, les modeles d'e-mails et les pipelines de construction ou les equipes souhaitent des modeles compacts qui se compilent en HTML.",
    },
  },
} satisfies Language;
