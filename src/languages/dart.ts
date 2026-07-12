import type { Language } from '@/types';

export const dart = {
  slug: 'dart',
  publishedDate: '2011-10-10',
  extensions: ['.dart'],
  author: 'Google',
  website: 'https://dart.dev',
  paradigms: ['class-based', 'functional', 'object-oriented', 'structured'],
  relations: {
    compilesTo: ['javascript'],
  },
  tooling: {
    runtimes: ['Dart VM', 'Dart Native', 'JavaScript'],
    packageManagers: ['pub'],
    ecosystems: ['Flutter', 'Web', 'Server-side'],
  },
  version: '3.12.2',
  logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Dart_programming_language_logo.svg',
  color: '#0175C2',
  i18n: {
    en: {
      name: 'Dart',
      description:
        'A client-optimized language for fast apps across mobile, web, desktop, and server.',
      longDescription:
        'Dart is a programming language from Google designed for productive, client-oriented application development. It combines sound null safety, classes, generics, async programming, isolates, ahead-of-time compilation, just-in-time development workflows, and compilation to JavaScript.\n\nIt is widely used with Flutter for mobile, web, and desktop apps, and also supports command-line tools, backend services, build systems, and teams that want a typed language with fast iteration and native compilation paths.',
    },
    es: {
      name: 'Dart',
      description:
        'Un lenguaje optimizado para crear apps rapidas en movil, web, escritorio y servidor.',
      longDescription:
        'Dart es un lenguaje de programacion de Google disenado para el desarrollo productivo de aplicaciones orientadas al cliente. Combina null safety solido, clases, genericos, programacion asincrona, isolates, compilacion anticipada, flujos de desarrollo just-in-time y compilacion a JavaScript.\n\nSe usa ampliamente con Flutter para aplicaciones moviles, web y de escritorio, y tambien soporta herramientas de linea de comandos, servicios backend, sistemas de build y equipos que quieren un lenguaje tipado con iteracion rapida y rutas de compilacion nativa.',
    },
    it: {
      name: 'Dart',
      description:
        'Un linguaggio ottimizzato per il client per applicazioni veloci su mobile, web, desktop e server.',
      longDescription:
        'Dart e un linguaggio di programmazione di Google progettato per lo sviluppo di applicazioni orientato al client, produttivo. Combina sicurezza null, classi, generics, programmazione asincrona, isolate, compilazione a tempo reale, workflow di sviluppo just-in-time e compilazione in JavaScript.\n\nE ampiamente utilizzato con Flutter per applicazioni mobile, web e desktop, e supporta anche strumenti a riga di comando, servizi backend, sistemi di build e team che desiderano un linguaggio tipizzato con iterazioni veloci e percorsi di compilazione nativi.',
    },
    fr: {
      name: 'Dart',
      description:
        'Un langage optimise pour le client, pour des applications rapides sur mobile, web, bureau et serveur.',
      longDescription:
        "Dart est un langage de programmation de Google concu pour le developpement d'applications oriente client, productif. Il combine une securite nulle, des classes, des generiques, la programmation asynchrone, des isolats, la compilation a l'avance, des flux de travail de developpement just-in-time et la compilation vers JavaScript.\n\nIl est largement utilise avec Flutter pour les applications mobiles, web et de bureau, et prend egalement en charge les outils en ligne de commande, les services backend, les systemes de construction et les equipes qui souhaitent un langage type avec des iterations rapides et des chemins de compilation natifs.",
    },
    de: {
      name: 'Dart',
      description:
        'Eine Client-optimierte Sprache für schnelle Apps auf mobilen, Web-, Desktop- und Serverplattformen.',
      longDescription:
        'Dart ist eine von Google entwickelte Programmiersprache, die für produktives, clientorientiertes Anwendungsentwicklung konzipiert ist. Sie kombiniert sichere Null-Sicherheit, Klassen, Generics, asynchrones Programmieren, Isolate, Ahead-of-Time-Kompilierung, Just-in-Time-Entwicklung und Kompilierung zu JavaScript.\n\nSie wird häufig mit Flutter für mobile, Web- und Desktop-Apps verwendet und unterstützt auch Kommandozeilen-Tools, Backend-Dienste, Build-Systeme und Teams, die eine typisierte Sprache mit schnellen Iterationszyklen und nativen Kompilierungsoptionen wünschen.',
    },
    pt: {
      name: 'Dart',
      description:
        'Linguagem otimizada para clientes, para aplicativos rápidos em mobile, web, desktop e servidor.',
      longDescription:
        'Dart é uma linguagem de programação do Google, projetada para desenvolvimento de aplicativos orientados ao cliente, com foco na produtividade. Combina segurança nula, classes, genéricos, programação assíncrona, isolados, compilação antecipada, fluxos de desenvolvimento just-in-time e compilação para JavaScript.\n\nÉ amplamente utilizada com Flutter para aplicativos mobile, web e desktop, e também suporta ferramentas de linha de comando, serviços de backend, sistemas de construção e equipes que desejam uma linguagem tipada com iteração rápida e caminhos de compilação nativos.',
    },
  },
} satisfies Language;
