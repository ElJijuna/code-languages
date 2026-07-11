import type { Language } from '@/types';

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
  version: '6.3.3',
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
        'Eine sichere, schnelle Programmiersprache für Apps, Systeme und Server-Software.',
      longDescription:
        'Swift ist eine kompilierte Programmiersprache, die für Sicherheit, Leistung, Ausdrucksstärke und Interoperabilität mit Apple-Plattform-Ökosystemen entwickelt wurde.\n\nSie wird für iOS, macOS, watchOS, tvOS, Server-Anwendungen, Kommandozeilen-Tools, Systemprogrammierung und plattformübergreifende Software verwendet.',
    },
    pt: {
      name: 'Swift',
      description:
        'Uma linguagem de programação segura e rápida para aplicativos, sistemas e software de servidor.',
      longDescription:
        'Swift é uma linguagem de programação compilada projetada para segurança, desempenho, expressividade e interoperabilidade com os ecossistemas da plataforma Apple.\n\nÉ usada para iOS, macOS, watchOS, tvOS, aplicativos de servidor, ferramentas de linha de comando, programação de sistemas e software multiplataforma.',
    },
  },
} satisfies Language;
