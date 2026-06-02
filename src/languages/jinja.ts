import type { Language } from '../types';

export const jinja = {
  slug: 'jinja',
  publishedDate: '2008-07-17',
  extensions: ['.jinja', '.jinja2', '.j2'],
  author: 'Armin Ronacher / Pallets',
  website: 'https://jinja.palletsprojects.com',
  paradigms: ['templating', 'declarative', 'server-side', 'scripting'],
  tooling: {
    runtimes: ['Python'],
    packageManagers: ['pip', 'Poetry', 'uv'],
    ecosystems: ['Python', 'Flask', 'Ansible', 'Web'],
  },
  version: '3.1.6',
  logo: 'https://cdn.simpleicons.org/jinja/B41717',
  color: '#B41717',
  i18n: {
    en: {
      name: 'Jinja',
      description: 'A Python template language used for web views, automation, and configuration.',
      longDescription:
        'Jinja is a template engine for Python with inheritance, blocks, includes, macros, filters, tests, autoescaping, sandboxing, and whitespace control. Its syntax is expressive enough for reusable views while keeping application logic outside templates.\n\nIt is widely used in Flask applications, Ansible templates, static site generators, documentation systems, email rendering, configuration generation, and automation workflows.',
    },
    es: {
      name: 'Jinja',
      description:
        'Un lenguaje de plantillas para Python usado en vistas web, automatizacion y configuracion.',
      longDescription:
        'Jinja es un motor de plantillas para Python con herencia, bloques, includes, macros, filtros, tests, autoescapado, sandboxing y control de espacios. Su sintaxis permite vistas reutilizables sin llevar la logica de aplicacion a las plantillas.\n\nSe usa ampliamente en aplicaciones Flask, plantillas de Ansible, generadores de sitios estaticos, sistemas de documentacion, renderizado de email, generacion de configuracion y flujos de automatizacion.',
    },
    it: {
      name: 'Jinja',
      description:
        "Un linguaggio di template Python utilizzato per le viste web, l'automazione e la configurazione.",
      longDescription:
        "Jinja e un motore di template per Python con ereditarieta, blocchi, inclusioni, macro, filtri, test, escaping automatico, sandbox e controllo dello spazio bianco. La sua sintassi e espressiva a sufficienza per viste riutilizzabili, mantenendo la logica dell'applicazione al di fuori dei template.\n\nE ampiamente utilizzato nelle applicazioni Flask, nei template Ansible, nei generatori di siti statici, nei sistemi di documentazione, nel rendering di email, nella generazione di configurazioni e nei flussi di lavoro di automazione.",
    },
    fr: {
      name: 'Jinja',
      description:
        "Un langage de modele Python utilise pour les vues web, l'automatisation et la configuration.",
      longDescription:
        "Jinja est un moteur de modele pour Python avec heritage, blocs, inclusions, macros, filtres, tests, auto-echappement, sandbox et controle d'espaces blancs. Sa syntaxe est suffisamment expressive pour les vues reutilisables tout en maintenant la logique d'application en dehors des modeles.\n\nIl est largement utilise dans les applications Flask, les modeles Ansible, les generateurs de sites statiques, les systemes de documentation, le rendu d'e-mails, la generation de configuration et les flux de travail d'automatisation.",
    },
    de: {
      name: 'Jinja',
      description:
        'Eine Python-Vorlagensprache f\u00fcr Webansichten, Automatisierung und Konfiguration.',
      longDescription:
        'Jinja ist ein Template-Engine f\u00fcr Python mit Vererbung, Bl\u00f6cken, Includes, Makros, Filtern, Tests, automatischem Escaping, Sandboxing und Whitespace-Kontrolle. Seine Syntax ist ausdrucksstark genug f\u00fcr wiederverwendbare Ansichten, w\u00e4hrend die Anwendungslogik au\u00dferhalb der Vorlagen verbleibt.\n\nEs wird h\u00e4ufig in Flask-Anwendungen, Ansible-Vorlagen, statischen Seitengeneratoren, Dokumentationssystemen, E-Mail-Rendering, Konfigurationsgenerierung und Automatisierungsabl\u00e4ufen verwendet.',
    },
    pt: {
      name: 'Jinja',
      description:
        'Linguagem de modelo Python usada para visualiza\u00e7\u00f5es web, automa\u00e7\u00e3o e configura\u00e7\u00e3o.',
      longDescription:
        'Jinja \u00e9 um motor de modelo para Python com heran\u00e7a, blocos, includes, macros, filtros, testes, escapamento autom\u00e1tico, sandboxing e controle de espa\u00e7os em branco. Sua sintaxe \u00e9 expressiva o suficiente para visualiza\u00e7\u00f5es reutiliz\u00e1veis, mantendo a l\u00f3gica da aplica\u00e7\u00e3o fora dos modelos.\n\n\u00c9 amplamente utilizada em aplica\u00e7\u00f5es Flask, modelos Ansible, geradores de sites est\u00e1ticos, sistemas de documenta\u00e7\u00e3o, renderiza\u00e7\u00e3o de e-mails, gera\u00e7\u00e3o de configura\u00e7\u00e3o e fluxos de trabalho de automa\u00e7\u00e3o.',
    },
  },
} satisfies Language;
