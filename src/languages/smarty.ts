import type { Language } from '../types';

export const smarty = {
  slug: 'smarty',
  publishedDate: '2001-01-01',
  extensions: ['.tpl', '.smarty'],
  author: 'Monte Ohrt / Andrei Zmievski / Smarty contributors',
  website: 'https://www.smarty.net',
  paradigms: ['templating', 'declarative', 'markup'],
  tooling: {
    runtimes: ['PHP'],
    packageManagers: ['Composer'],
    ecosystems: ['PHP', 'Web'],
  },
  version: '5.5.1',
  logo: 'https://www.smarty.net/images/logo_print.gif',
  color: '#F0C040',
  i18n: {
    en: {
      name: 'Smarty',
      description: 'A PHP template language for presentation logic and reusable views.',
      longDescription:
        'Smarty is a PHP templating system with tags, modifiers, functions, plugins, inheritance, and caching features for separating presentation templates from application code. Templates are compiled for execution by PHP.\n\nIt is used in PHP applications, themes, CMS views, emails, and server-rendered web projects that maintain separate template files.',
    },
    es: {
      name: 'Smarty',
      description:
        'Un lenguaje de plantillas PHP para logica de presentacion y vistas reutilizables.',
      longDescription:
        'Smarty es un sistema de plantillas PHP con tags, modifiers, funciones, plugins, herencia y cache para separar plantillas de presentacion del codigo de aplicacion. Las plantillas se compilan para ejecutarse con PHP.\n\nSe usa en aplicaciones PHP, temas, vistas de CMS, emails y proyectos web renderizados en servidor que mantienen archivos de plantillas separados.',
    },
    it: {
      name: 'Smarty',
      description:
        'Un linguaggio di template PHP per la logica di presentazione e viste riutilizzabili.',
      longDescription:
        "Smarty e un sistema di template PHP con tag, modificatori, funzioni, plugin, ereditarieta e funzionalita di caching per separare i template di presentazione dal codice dell'applicazione. I template sono compilati per l'esecuzione da PHP.\n\nViene utilizzato in applicazioni PHP, temi, viste CMS, email e progetti web renderizzati lato server che mantengono file di template separati.",
    },
    fr: {
      name: 'Smarty',
      description:
        'Smarty : Langage de modelisation PHP pour la logique de presentation et les vues reutilisables.',
      longDescription:
        "Smarty est un systeme de modelisation PHP avec des balises, des modificateurs, des fonctions, des plugins, l'heritage et des fonctionnalites de mise en cache pour separer les modeles de presentation du code de l'application. Les modeles sont compiles pour etre executes par PHP.\n\nIl est utilise dans les applications PHP, les themes, les vues CMS, les e-mails et les projets web rendus cote serveur qui maintiennent des fichiers de modele separes.",
    },
    de: {
      name: 'Smarty',
      description:
        'Eine PHP-Template-Sprache f\u00fcr Pr\u00e4sentationslogik und wiederverwendbare Vorlagen.',
      longDescription:
        'Smarty ist ein PHP-Templingsystem mit Tags, Modifikatoren, Funktionen, Plugins, Vererbung und Caching-Funktionen, um Pr\u00e4sentationsvorlagen von Anwendungs-Code zu trennen. Vorlagen werden f\u00fcr die Ausf\u00fchrung von PHP kompiliert.\n\nEs wird in PHP-Anwendungen, Themes, CMS-Vorlagen, E-Mails und serverseitigen Webprojekten verwendet, die separate Template-Dateien beibehalten.',
    },
    pt: {
      name: 'Smarty',
      description:
        'Linguagem de modelo PHP para l\u00f3gica de apresenta\u00e7\u00e3o e visualiza\u00e7\u00f5es reutiliz\u00e1veis.',
      longDescription:
        'Smarty \u00e9 um sistema de modelagem PHP com tags, modificadores, fun\u00e7\u00f5es, plugins, heran\u00e7a e recursos de cache para separar os modelos de apresenta\u00e7\u00e3o do c\u00f3digo da aplica\u00e7\u00e3o. Os modelos s\u00e3o compilados para execu\u00e7\u00e3o pelo PHP.\n\n\u00c9 usado em aplica\u00e7\u00f5es PHP, temas, visualiza\u00e7\u00f5es de CMS, e-mails e projetos web renderizados no servidor que mant\u00eam arquivos de modelo separados.',
    },
  },
} satisfies Language;
