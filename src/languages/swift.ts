import type { Language } from '../types';

export const swift = {
  slug: 'swift',
  publishedDate: '2014-06-02',
  extensions: ['.swift'],
  author: 'Chris Lattner / Apple',
  website: 'https://www.swift.org',
  paradigms: ['object-oriented', 'functional', 'imperative', 'protocol-oriented'],
  tooling: {
    runtimes: ['Apple platforms', 'Linux', 'Windows'],
    packageManagers: ['Swift Package Manager'],
    ecosystems: ['Apple', 'Server-side Swift'],
  },
  version: '6.3.2',
  logo: 'https://www.swift.org/assets/images/swift.svg',
  color: '#F05138',
  i18n: {
    en: {
      name: 'Swift',
      description: 'A safe, fast programming language for apps, systems, and server software.',
      longDescription:
        'Swift is a compiled programming language designed for safety, performance, expressiveness, and interoperability with Apple platform ecosystems.\n\nIt is used for iOS, macOS, watchOS, tvOS, server-side applications, command-line tools, systems programming, and cross-platform software.',
    },
    es: {
      name: 'Swift',
      description: 'Un lenguaje seguro y rapido para apps, sistemas y software de servidor.',
      longDescription:
        'Swift es un lenguaje de programacion compilado disenado para seguridad, rendimiento, expresividad e interoperabilidad con los ecosistemas de plataformas Apple.\n\nSe usa para iOS, macOS, watchOS, tvOS, aplicaciones del lado del servidor, herramientas de linea de comandos, programacion de sistemas y software multiplataforma.',
    },
    it: {
      name: 'Swift',
      description:
        'Un linguaggio di programmazione sicuro e veloce per applicazioni, sistemi e software server.',
      longDescription:
        "Swift e un linguaggio di programmazione compilato progettato per la sicurezza, le prestazioni, l'espressivita e l'interoperabilita con gli ecosistemi della piattaforma Apple.\n\nE utilizzato per iOS, macOS, watchOS, tvOS, applicazioni lato server, strumenti da riga di comando, programmazione di sistemi e software multipiattaforma.",
    },
    fr: {
      name: 'Swift',
      description:
        'Un langage de programmation sur et rapide pour les applications, les systemes et les logiciels serveur.',
      longDescription:
        "Swift est un langage de programmation compile concu pour la securite, les performances, l'expressivite et l'interoperabilite avec les ecosystemes de la plateforme Apple.\n\nIl est utilise pour iOS, macOS, watchOS, tvOS, les applications cote serveur, les outils en ligne de commande, la programmation systeme et les logiciels multiplateformes.",
    },
    de: {
      name: 'Swift',
      description:
        'Eine sichere, schnelle Programmiersprache f\u00fcr Apps, Systeme und Server-Software.',
      longDescription:
        'Swift ist eine kompilierte Programmiersprache, die f\u00fcr Sicherheit, Leistung, Ausdrucksst\u00e4rke und Interoperabilit\u00e4t mit Apple-Plattform-\u00d6kosystemen entwickelt wurde.\n\nSie wird f\u00fcr iOS, macOS, watchOS, tvOS, Server-Anwendungen, Kommandozeilen-Tools, Systemprogrammierung und plattform\u00fcbergreifende Software verwendet.',
    },
    pt: {
      name: 'Swift',
      description:
        'Uma linguagem de programa\u00e7\u00e3o segura e r\u00e1pida para aplicativos, sistemas e software de servidor.',
      longDescription:
        'Swift \u00e9 uma linguagem de programa\u00e7\u00e3o compilada projetada para seguran\u00e7a, desempenho, expressividade e interoperabilidade com os ecossistemas da plataforma Apple.\n\n\u00c9 usada para iOS, macOS, watchOS, tvOS, aplicativos de servidor, ferramentas de linha de comando, programa\u00e7\u00e3o de sistemas e software multiplataforma.',
    },
  },
} satisfies Language;
