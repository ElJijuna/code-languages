import type { Language } from '@/types';

export const twig = {
  slug: 'twig',
  publishedDate: '2009-10-12',
  extensions: ['.twig'],
  author: 'Fabien Potencier / Twig contributors',
  website: 'https://twig.symfony.com',
  paradigms: ['templating', 'declarative', 'server-side', 'scripting'],
  tooling: {
    runtimes: ['PHP', 'Symfony'],
    packageManagers: ['Composer'],
    ecosystems: ['PHP', 'Symfony', 'Web', 'CMS'],
  },
  version: '3.28.0',
  logo: 'https://twig.symfony.com/images/logo.png',
  color: '#A5C53A',
  i18n: {
    en: {
      name: 'Twig',
      description:
        'A flexible, secure template language for PHP applications and Symfony projects.',
      longDescription:
        'Twig is a template language for PHP that separates presentation from application logic using blocks, inheritance, includes, filters, functions, tests, macros, escaping, and sandboxing. Its syntax is designed to be readable for designers while remaining extensible for developers.\n\nIt is used in Symfony applications, PHP web projects, CMS themes, email templates, static generation workflows, and systems that need reusable server-rendered views with controlled access to application data.',
    },
    es: {
      name: 'Twig',
      description:
        'Un lenguaje de plantillas flexible y seguro para aplicaciones PHP y proyectos Symfony.',
      longDescription:
        'Twig es un lenguaje de plantillas para PHP que separa la presentacion de la logica de aplicacion usando bloques, herencia, includes, filtros, funciones, tests, macros, escapado y sandboxing. Su sintaxis esta pensada para ser legible para disenadores y extensible para desarrolladores.\n\nSe usa en aplicaciones Symfony, proyectos web PHP, temas de CMS, plantillas de email, flujos de generacion estatica y sistemas que necesitan vistas renderizadas en servidor reutilizables con acceso controlado a los datos de la aplicacion.',
    },
    it: {
      name: 'Twig',
      description:
        'Un linguaggio di template flessibile e sicuro per applicazioni PHP e progetti Symfony.',
      longDescription:
        "Twig e un linguaggio di template per PHP che separa la presentazione dalla logica dell'applicazione utilizzando blocchi, ereditarieta, inclusioni, filtri, funzioni, test, macro, escaping e sandbox. La sua sintassi e progettata per essere leggibile per i designer, rimanendo estendibile per gli sviluppatori.\n\nE utilizzato in applicazioni Symfony, progetti web PHP, temi CMS, modelli di email, flussi di lavoro di generazione statica e sistemi che necessitano di viste renderizzate lato server riutilizzabili con accesso controllato ai dati dell'applicazione.",
    },
    fr: {
      name: 'Twig',
      description:
        'Un langage de modele flexible et securise pour les applications PHP et les projets Symfony.',
      longDescription:
        "Twig est un langage de modele pour PHP qui separe la presentation de la logique d'application en utilisant des blocs, l'heritage, les inclusions, les filtres, les fonctions, les tests, les macros, l'echappement et le sandbox. Sa syntaxe est concue pour etre lisible pour les concepteurs tout en restant extensible pour les developpeurs.\n\nIl est utilise dans les applications Symfony, les projets web PHP, les themes CMS, les modeles d'e-mails, les flux de generation statique et les systemes qui ont besoin de vues serveur-rendues reutilisables avec un acces controle aux donnees de l'application.",
    },
    de: {
      name: 'Twig',
      description:
        'Eine flexible und sichere Template-Sprache für PHP-Anwendungen und Symfony-Projekte.',
      longDescription:
        'Twig ist eine Template-Sprache für PHP, die die Trennung von Präsentation und Anwendungslogik durch Blöcke, Vererbung, Includes, Filter, Funktionen, Tests, Makros, Escaping und Sandboxing ermöglicht. Ihre Syntax ist für Designer lesbar, bleibt aber für Entwickler erweiterbar.\n\nEs wird in Symfony-Anwendungen, PHP-Webprojekten, CMS-Themes, E-Mail-Vorlagen, statischen Generierungsworkflows und Systemen verwendet, die wiederverwendbare, serverseitig gerenderte Views mit kontrolliertem Zugriff auf Anwendungsdaten benötigen.',
    },
    pt: {
      name: 'Twig',
      description:
        'Linguagem de template flexível e segura para aplicações PHP e projetos Symfony.',
      longDescription:
        'Twig é uma linguagem de template para PHP que separa a apresentação da lógica da aplicação usando blocos, herança, includes, filtros, funções, testes, macros, escapamento e sandboxing. Sua sintaxe é projetada para ser legível para designers, mantendo a extensibilidade para desenvolvedores.\n\nÉ utilizada em aplicações Symfony, projetos web PHP, temas de CMS, templates de e-mail, fluxos de geração estática e sistemas que necessitam de visualizações renderizadas de forma reutilizável com acesso controlado aos dados da aplicação.',
    },
  },
} satisfies Language;
