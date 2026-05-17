import type { Language } from "../types";

export const twig = {
  slug: "twig",
  publishedDate: "2009-10-12",
  extensions: [".twig"],
  author: "Fabien Potencier / Twig contributors",
  website: "https://twig.symfony.com",
  paradigms: ["templating", "declarative", "server-side", "scripting"],
  tooling: {
    runtimes: ["PHP", "Symfony"],
    packageManagers: ["Composer"],
    ecosystems: ["PHP", "Symfony", "Web", "CMS"],
  },
  version: "3.24.0",
  logo: "https://twig.symfony.com/images/logo.png",
  i18n: {
    en: {
      name: "Twig",
      description:
        "A flexible, secure template language for PHP applications and Symfony projects.",
      longDescription:
        "Twig is a template language for PHP that separates presentation from application logic using blocks, inheritance, includes, filters, functions, tests, macros, escaping, and sandboxing. Its syntax is designed to be readable for designers while remaining extensible for developers.\n\nIt is used in Symfony applications, PHP web projects, CMS themes, email templates, static generation workflows, and systems that need reusable server-rendered views with controlled access to application data.",
    },
    es: {
      name: "Twig",
      description:
        "Un lenguaje de plantillas flexible y seguro para aplicaciones PHP y proyectos Symfony.",
      longDescription:
        "Twig es un lenguaje de plantillas para PHP que separa la presentacion de la logica de aplicacion usando bloques, herencia, includes, filtros, funciones, tests, macros, escapado y sandboxing. Su sintaxis esta pensada para ser legible para disenadores y extensible para desarrolladores.\n\nSe usa en aplicaciones Symfony, proyectos web PHP, temas de CMS, plantillas de email, flujos de generacion estatica y sistemas que necesitan vistas renderizadas en servidor reutilizables con acceso controlado a los datos de la aplicacion.",
    },
  },
} satisfies Language;
