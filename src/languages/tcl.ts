import type { Language } from '@/types';

export const tcl = {
  slug: 'tcl',
  publishedDate: '1988-01-01',
  extensions: ['.tcl', '.tm', '.test'],
  author: 'John Ousterhout',
  website: 'https://www.tcl-lang.org',
  paradigms: ['scripting', 'command', 'event-driven', 'embeddable'],
  tooling: {
    runtimes: ['Tcl', 'Tk', 'tclsh', 'wish'],
    packageManagers: ['Teapot', 'Tcl Modules'],
    ecosystems: ['GUI Applications', 'EDA', 'Automation', 'Embedded Scripting'],
  },
  version: '9.0.4',
  logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tcl.svg',
  color: '#1E5AA8',
  i18n: {
    en: {
      name: 'Tcl/Tk',
      description:
        'An embeddable command language and GUI toolkit for automation, tools, and applications.',
      longDescription:
        'Tcl is a dynamic command language designed for embedding, scripting, automation, and extension. Tk is its cross-platform GUI toolkit. Together they provide a simple command syntax, event loop, strings-as-data model, embeddability, and portable user interface components.\n\nTcl/Tk is used for desktop tools, EDA and CAD automation, test harnesses, embedded scripting, build and deployment scripts, rapid prototypes, and applications that need a small extensible command language.',
    },
    es: {
      name: 'Tcl/Tk',
      description:
        'Un lenguaje de comandos embebible y toolkit GUI para automatizacion, herramientas y aplicaciones.',
      longDescription:
        'Tcl es un lenguaje dinamico de comandos disenado para embedding, scripting, automatizacion y extension. Tk es su toolkit GUI multiplataforma. Juntos ofrecen una sintaxis simple de comandos, event loop, modelo de strings como datos, capacidad de embedding y componentes de interfaz portables.\n\nTcl/Tk se usa en herramientas de escritorio, automatizacion EDA y CAD, bancos de prueba, scripting embebido, scripts de build y despliegue, prototipos rapidos y aplicaciones que necesitan un lenguaje de comandos pequeno y extensible.',
    },
    it: {
      name: 'Tcl/Tk',
      description:
        "Un linguaggio di comando e toolkit GUI integrabile per l'automazione, gli strumenti e le applicazioni.",
      longDescription:
        "Tcl e un linguaggio di comando dinamico progettato per l'integrazione, la scripting, l'automazione e l'estensione. Tk e il suo toolkit GUI multipiattaforma. Insieme, forniscono una semplice sintassi di comando, un ciclo di eventi, un modello di dati basato su stringhe, l'integrazione e componenti di interfaccia utente portatili.\n\nTcl/Tk viene utilizzato per strumenti desktop, automazione EDA e CAD, framework di test, scripting embedded, script di build e deployment, prototipi rapidi e applicazioni che necessitano di un piccolo linguaggio di comando estendibile.",
    },
    fr: {
      name: 'Tcl/Tk',
      description:
        "Un langage de commande et un kit d'interface graphique embarquables pour l'automatisation, les outils et les applications.",
      longDescription:
        "Tcl est un langage de commande dynamique concu pour l'embarquement, le script, l'automatisation et l'extension. Tk est son kit d'interface graphique multiplateforme. Ensemble, ils fournissent une syntaxe de commande simple, une boucle d'evenements, un modele de donnees base sur les chaines, l'embarquabilite et des composants d'interface utilisateur portables.\n\nTcl/Tk est utilise pour les outils de bureau, l'automatisation de l'EDA et du CAO, les harnesses de test, le script embarque, les scripts de construction et de deploiement, les prototypes rapides et les applications qui ont besoin d'un petit langage de commande extensible.",
    },
    de: {
      name: 'Tcl/Tk',
      description:
        'Ein einbettbares Befehls- und GUI-Toolkit für Automatisierung, Tools und Anwendungen.',
      longDescription:
        'Tcl ist eine dynamische Befehls-Sprache, die für Einbettung, Skripting, Automatisierung und Erweiterung entwickelt wurde. Tk ist sein plattformübergreifendes GUI-Toolkit. Gemeinsam bieten sie eine einfache Befehls-Syntax, einen Ereignis-Loop, ein Datenmodell, das Strings verwendet, Einbettbarkeit und portable UI-Komponenten.\n\nTcl/Tk wird für Desktop-Tools, EDA- und CAD-Automatisierung, Test-Harness, eingebettetes Skripting, Build- und Deployment-Skripte, schnelle Prototypen und Anwendungen verwendet, die eine kleine, erweiterbare Befehls-Sprache benötigen.',
    },
    pt: {
      name: 'Tcl/Tk',
      description:
        'Toolkit de linguagem de comando e GUI para automação, ferramentas e aplicações.',
      longDescription:
        'Tcl é uma linguagem de comando dinâmica projetada para incorporação, scripting, automação e extensão. Tk é seu toolkit de GUI multiplataforma. Juntos, fornecem uma sintaxe de comando simples, loop de eventos, modelo de strings como dados, incorporabilidade e componentes de interface de usuário portáteis.\n\nTcl/Tk é usado para ferramentas de desktop, automação de EDA e CAD, harnesses de teste, scripting embarcado, scripts de construção e implantação, protótipos rápidos e aplicações que precisam de uma linguagem de comando pequena e extensível.',
    },
  },
} satisfies Language;
