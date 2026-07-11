import type { Language } from '@/types';

export const php = {
  slug: 'php',
  publishedDate: '1995-06-08',
  extensions: ['.php', '.phtml', '.php3', '.php4', '.php5', '.phps'],
  author: 'Rasmus Lerdorf / The PHP Group',
  website: 'https://www.php.net',
  paradigms: ['imperative', 'object-oriented', 'functional', 'scripting'],
  tooling: {
    runtimes: ['PHP CLI', 'PHP-FPM', 'Apache mod_php'],
    packageManagers: ['Composer'],
    ecosystems: ['Web', 'WordPress', 'Laravel', 'Symfony'],
  },
  version: '8.5.8',
  logo: 'https://www.php.net/images/logos/new-php-logo.svg',
  color: '#777BB4',
  i18n: {
    en: {
      name: 'PHP',
      description:
        'A server-side scripting language widely used for web applications and dynamic websites.',
      longDescription:
        'PHP is a general-purpose scripting language especially suited to server-side web development, with built-in support for request handling, templating, databases, extensions, package management, and deployment on common hosting platforms.\n\nIt powers content management systems, ecommerce platforms, APIs, frameworks, command-line tools, and long-running web applications across a large ecosystem.',
    },
    es: {
      name: 'PHP',
      description:
        'Un lenguaje de scripting del lado del servidor muy usado en aplicaciones web y sitios dinamicos.',
      longDescription:
        'PHP es un lenguaje de scripting de proposito general especialmente adecuado para desarrollo web del lado del servidor, con soporte integrado para manejar solicitudes, plantillas, bases de datos, extensiones, gestion de paquetes y despliegue en plataformas comunes de hosting.\n\nImpulsa sistemas de gestion de contenido, plataformas de ecommerce, APIs, frameworks, herramientas de linea de comandos y aplicaciones web de larga duracion dentro de un ecosistema amplio.',
    },
    it: {
      name: 'PHP',
      description:
        'Un linguaggio di scripting lato server ampiamente utilizzato per applicazioni web e siti web dinamici.',
      longDescription:
        "PHP e un linguaggio di scripting di uso generale particolarmente adatto allo sviluppo web lato server, con supporto integrato per la gestione delle richieste, il template, i database, le estensioni, la gestione dei pacchetti e l'implementazione su piattaforme di hosting comuni.\n\nAlimenta sistemi di gestione dei contenuti, piattaforme di e-commerce, API, framework, strumenti a riga di comando e applicazioni web a lunga durata in un vasto ecosistema.",
    },
    fr: {
      name: 'PHP',
      description:
        'Un langage de script cote serveur largement utilise pour les applications web et les sites dynamiques.',
      longDescription:
        "PHP est un langage de script generaliste, particulierement adapte au developpement web cote serveur, avec un support integre pour la gestion des requetes, le modelisation, les bases de donnees, les extensions, la gestion des paquets et le deploiement sur des plateformes d'hebergement courantes.\n\nIl alimente les systemes de gestion de contenu, les plateformes de commerce electronique, les API, les frameworks, les outils en ligne de commande et les applications web a long terme dans un vaste ecosysteme.",
    },
    de: {
      name: 'PHP',
      description:
        'Eine serverseitige Skriptsprache, die weit verbreitet für Webanwendungen und dynamische Websites verwendet wird.',
      longDescription:
        'PHP ist eine allgemeine Skriptsprache, die sich besonders für die serverseitige Webentwicklung eignet. Sie bietet integrierte Unterstützung für die Verarbeitung von Anfragen, das Templating, Datenbanken, Erweiterungen, Paketverwaltung und die Bereitstellung auf gängigen Hosting-Plattformen.\n\nSie wird von Content-Management-Systemen, E-Commerce-Plattformen, APIs, Frameworks, Kommandozeilen-Tools und langen Webanwendungen in einem großen Ökosystem eingesetzt.',
    },
    pt: {
      name: 'PHP',
      description:
        'Linguagem de script do lado do servidor amplamente utilizada para aplicações web e sites dinâmicos.',
      longDescription:
        'PHP é uma linguagem de script de propósito geral especialmente adequada para o desenvolvimento web do lado do servidor, com suporte integrado para manipulação de requisições, modelagem, bancos de dados, extensões, gerenciamento de pacotes e implantação em plataformas de hospedagem comuns.\n\nEla alimenta sistemas de gerenciamento de conteúdo, plataformas de comércio eletrônico, APIs, frameworks, ferramentas de linha de comando e aplicações web de longa duração em um amplo ecossistema.',
    },
  },
} satisfies Language;
