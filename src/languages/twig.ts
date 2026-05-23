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
  version: "3.25.0",
  logo: "https://twig.symfony.com/images/logo.png",
  color: "#A5C53A",
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
    it: {
      name: "Twig",
      description:
        "Un linguaggio di template flessibile e sicuro per applicazioni PHP e progetti Symfony.",
      longDescription:
        "Twig e un linguaggio di template per PHP che separa la presentazione dalla logica dell'applicazione utilizzando blocchi, ereditarieta, inclusioni, filtri, funzioni, test, macro, escaping e sandbox. La sua sintassi e progettata per essere leggibile per i designer, rimanendo estendibile per gli sviluppatori.\n\nE utilizzato in applicazioni Symfony, progetti web PHP, temi CMS, modelli di email, flussi di lavoro di generazione statica e sistemi che necessitano di viste renderizzate lato server riutilizzabili con accesso controllato ai dati dell'applicazione.",
    },
    fr: {
      name: "Twig",
      description:
        "Un langage de modele flexible et securise pour les applications PHP et les projets Symfony.",
      longDescription:
        "Twig est un langage de modele pour PHP qui separe la presentation de la logique d'application en utilisant des blocs, l'heritage, les inclusions, les filtres, les fonctions, les tests, les macros, l'echappement et le sandbox. Sa syntaxe est concue pour etre lisible pour les concepteurs tout en restant extensible pour les developpeurs.\n\nIl est utilise dans les applications Symfony, les projets web PHP, les themes CMS, les modeles d'e-mails, les flux de generation statique et les systemes qui ont besoin de vues serveur-rendues reutilisables avec un acces controle aux donnees de l'application.",
    },
    de: {
      name: "Twig",
      description:
        "Eine flexible und sichere Template-Sprache f\u00fcr PHP-Anwendungen und Symfony-Projekte.",
      longDescription:
        "Twig ist eine Template-Sprache f\u00fcr PHP, die die Trennung von Pr\u00e4sentation und Anwendungslogik durch Bl\u00f6cke, Vererbung, Includes, Filter, Funktionen, Tests, Makros, Escaping und Sandboxing erm\u00f6glicht. Ihre Syntax ist f\u00fcr Designer lesbar, bleibt aber f\u00fcr Entwickler erweiterbar.\n\nEs wird in Symfony-Anwendungen, PHP-Webprojekten, CMS-Themes, E-Mail-Vorlagen, statischen Generierungsworkflows und Systemen verwendet, die wiederverwendbare, serverseitig gerenderte Views mit kontrolliertem Zugriff auf Anwendungsdaten ben\u00f6tigen.",
    },
    pt: {
      name: "Twig",
      description:
        "Linguagem de template flex\u00edvel e segura para aplica\u00e7\u00f5es PHP e projetos Symfony.",
      longDescription:
        "Twig \u00e9 uma linguagem de template para PHP que separa a apresenta\u00e7\u00e3o da l\u00f3gica da aplica\u00e7\u00e3o usando blocos, heran\u00e7a, includes, filtros, fun\u00e7\u00f5es, testes, macros, escapamento e sandboxing. Sua sintaxe \u00e9 projetada para ser leg\u00edvel para designers, mantendo a extensibilidade para desenvolvedores.\n\n\u00c9 utilizada em aplica\u00e7\u00f5es Symfony, projetos web PHP, temas de CMS, templates de e-mail, fluxos de gera\u00e7\u00e3o est\u00e1tica e sistemas que necessitam de visualiza\u00e7\u00f5es renderizadas de forma reutiliz\u00e1vel com acesso controlado aos dados da aplica\u00e7\u00e3o.",
    },
  },
} satisfies Language;
