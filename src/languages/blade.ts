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
    it: {
      name: "Blade",
      description: "Linguaggio di template lato server di Laravel per viste, componenti e layout.",
      longDescription:
        "Blade e il linguaggio di template di Laravel per la composizione di viste PHP con direttive, layout, sezioni, stack, componenti, slot, condizioni, cicli, inclusioni, escaping e estensioni del compilatore personalizzate. Mantiene i template vicini all'HTML pur integrandosi profondamente con le funzionalita di Laravel.\n\nViene utilizzato per applicazioni Laravel, interfacce renderizzate lato server, viste di form, modelli di email, componenti UI riutilizzabili, pannelli di amministrazione e progetti PHP che si basano sul livello di vista di Laravel.",
    },
    fr: {
      name: "Blade",
      description:
        "Langage de modele cote serveur de Laravel pour les vues, les composants et les mises en page.",
      longDescription:
        "Blade est le langage de modele de Laravel pour composer des vues PHP avec des directives, des mises en page, des sections, des piles, des composants, des emplacements, des conditions, des boucles, des inclusions, des mecanismes d'echappement et des extensions de compilateur personnalisees. Il maintient les modeles proches du HTML tout en s'integrant profondement aux fonctionnalites de Laravel.\n\nIl est utilise pour les applications Laravel, les interfaces cote serveur, les vues de formulaires, les modeles d'e-mails, les composants d'interface utilisateur reutilisables, les panneaux d'administration et les projets PHP qui s'appuient sur la couche de vue de Laravel.",
    },
  },
} satisfies Language;
