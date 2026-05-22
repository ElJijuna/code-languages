import type { Language } from "../types";

export const blade = {
  slug: "blade",
  publishedDate: "2011-06-09",
  extensions: [".blade.php"],
  author: "Taylor Otwell / Laravel",
  website: "https://laravel.com/docs/blade",
  paradigms: ["templating", "server-side", "component-oriented", "declarative"],
  tooling: {
    runtimes: ["PHP", "Laravel"],
    packageManagers: ["Composer"],
    ecosystems: ["Laravel", "PHP", "Web", "Server-rendered UI"],
  },
  version: "Laravel 12.x",
  logo: "https://cdn.simpleicons.org/laravel/FF2D20",
  color: "#FF2D20",
  i18n: {
    en: {
      name: "Blade",
      description: "Laravel's server-side template language for views, components, and layouts.",
      longDescription:
        "Blade is Laravel's template language for composing PHP views with directives, layouts, sections, stacks, components, slots, conditionals, loops, includes, escaping, and custom compiler extensions. It keeps templates close to HTML while integrating deeply with Laravel features.\n\nIt is used for Laravel applications, server-rendered interfaces, form views, email templates, reusable UI components, admin panels, and PHP projects that rely on Laravel's view layer.",
    },
    es: {
      name: "Blade",
      description:
        "El lenguaje de plantillas de Laravel para vistas, componentes y layouts en servidor.",
      longDescription:
        "Blade es el lenguaje de plantillas de Laravel para componer vistas PHP con directivas, layouts, secciones, stacks, componentes, slots, condicionales, bucles, includes, escapado y extensiones del compilador. Mantiene las plantillas cerca de HTML y se integra de forma profunda con Laravel.\n\nSe usa en aplicaciones Laravel, interfaces renderizadas en servidor, vistas de formularios, plantillas de email, componentes UI reutilizables, paneles administrativos y proyectos PHP que dependen de la capa de vistas de Laravel.",
    },
  },
} satisfies Language;
