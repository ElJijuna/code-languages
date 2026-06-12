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
        'Eine Python-Vorlagensprache für Webansichten, Automatisierung und Konfiguration.',
      longDescription:
        'Jinja ist ein Template-Engine für Python mit Vererbung, Blöcken, Includes, Makros, Filtern, Tests, automatischem Escaping, Sandboxing und Whitespace-Kontrolle. Seine Syntax ist ausdrucksstark genug für wiederverwendbare Ansichten, während die Anwendungslogik außerhalb der Vorlagen verbleibt.\n\nEs wird häufig in Flask-Anwendungen, Ansible-Vorlagen, statischen Seitengeneratoren, Dokumentationssystemen, E-Mail-Rendering, Konfigurationsgenerierung und Automatisierungsabläufen verwendet.',
    },
    pt: {
      name: 'Jinja',
      description:
        'Linguagem de modelo Python usada para visualizações web, automação e configuração.',
      longDescription:
        'Jinja é um motor de modelo para Python com herança, blocos, includes, macros, filtros, testes, escapamento automático, sandboxing e controle de espaços em branco. Sua sintaxe é expressiva o suficiente para visualizações reutilizáveis, mantendo a lógica da aplicação fora dos modelos.\n\nÉ amplamente utilizada em aplicações Flask, modelos Ansible, geradores de sites estáticos, sistemas de documentação, renderização de e-mails, geração de configuração e fluxos de trabalho de automação.',
    },
  },
} satisfies Language;
