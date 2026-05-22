import type { Language } from "../types";

export const smarty = {
  slug: "smarty",
  publishedDate: "2001-01-01",
  extensions: [".tpl", ".smarty"],
  author: "Monte Ohrt / Andrei Zmievski / Smarty contributors",
  website: "https://www.smarty.net",
  paradigms: ["templating", "declarative", "markup"],
  tooling: {
    runtimes: ["PHP"],
    packageManagers: ["Composer"],
    ecosystems: ["PHP", "Web"],
  },
  version: "5.5.1",
  logo: "https://www.smarty.net/images/logo_print.gif",
  i18n: {
    en: {
      name: "Smarty",
      description: "A PHP template language for presentation logic and reusable views.",
      longDescription:
        "Smarty is a PHP templating system with tags, modifiers, functions, plugins, inheritance, and caching features for separating presentation templates from application code. Templates are compiled for execution by PHP.\n\nIt is used in PHP applications, themes, CMS views, emails, and server-rendered web projects that maintain separate template files.",
    },
    es: {
      name: "Smarty",
      description:
        "Un lenguaje de plantillas PHP para logica de presentacion y vistas reutilizables.",
      longDescription:
        "Smarty es un sistema de plantillas PHP con tags, modifiers, funciones, plugins, herencia y cache para separar plantillas de presentacion del codigo de aplicacion. Las plantillas se compilan para ejecutarse con PHP.\n\nSe usa en aplicaciones PHP, temas, vistas de CMS, emails y proyectos web renderizados en servidor que mantienen archivos de plantillas separados.",
    },
  },
} satisfies Language;
