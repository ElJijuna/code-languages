import type { Language } from "../types";

export const jinja = {
  slug: "jinja",
  publishedDate: "2008-07-17",
  extensions: [".jinja", ".jinja2", ".j2"],
  author: "Armin Ronacher / Pallets",
  website: "https://jinja.palletsprojects.com",
  paradigms: ["templating", "declarative", "server-side", "scripting"],
  tooling: {
    runtimes: ["Python"],
    packageManagers: ["pip", "Poetry", "uv"],
    ecosystems: ["Python", "Flask", "Ansible", "Web"],
  },
  version: "3.1.6",
  logo: "https://cdn.simpleicons.org/jinja/B41717",
  i18n: {
    en: {
      name: "Jinja",
      description: "A Python template language used for web views, automation, and configuration.",
      longDescription:
        "Jinja is a template engine for Python with inheritance, blocks, includes, macros, filters, tests, autoescaping, sandboxing, and whitespace control. Its syntax is expressive enough for reusable views while keeping application logic outside templates.\n\nIt is widely used in Flask applications, Ansible templates, static site generators, documentation systems, email rendering, configuration generation, and automation workflows.",
    },
    es: {
      name: "Jinja",
      description:
        "Un lenguaje de plantillas para Python usado en vistas web, automatizacion y configuracion.",
      longDescription:
        "Jinja es un motor de plantillas para Python con herencia, bloques, includes, macros, filtros, tests, autoescapado, sandboxing y control de espacios. Su sintaxis permite vistas reutilizables sin llevar la logica de aplicacion a las plantillas.\n\nSe usa ampliamente en aplicaciones Flask, plantillas de Ansible, generadores de sitios estaticos, sistemas de documentacion, renderizado de email, generacion de configuracion y flujos de automatizacion.",
    },
  },
} satisfies Language;
