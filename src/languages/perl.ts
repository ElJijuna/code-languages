import type { Language } from '@/types';

export const perl = {
  slug: 'perl',
  publishedDate: '1987-12-18',
  extensions: ['.pl', '.pm', '.pod', '.t', '.psgi'],
  author: 'Larry Wall',
  website: 'https://www.perl.org',
  paradigms: ['functional', 'imperative', 'object-oriented', 'procedural', 'scripting'],
  tooling: {
    runtimes: ['Perl interpreter', 'mod_perl', 'PSGI/Plack'],
    packageManagers: ['CPAN', 'cpanm', 'Carton'],
    ecosystems: ['Unix', 'Web', 'Text Processing', 'System Administration', 'Bioinformatics'],
  },
  version: '5.42.2',
  logo: 'https://cdn.simpleicons.org/perl/39457E',
  color: '#39457E',
  i18n: {
    en: {
      name: 'Perl',
      description:
        'A flexible scripting language for text processing, automation, web systems, and CPAN modules.',
      longDescription:
        'Perl is a high-level scripting language created by Larry Wall, known for practical text processing, regular expressions, system scripting, dynamic typing, CPAN, and a strong culture of reusable modules. Perl 5 remains the main production language in the Perl family.\n\nIt is used for Unix automation, log processing, legacy web applications, bioinformatics, data munging, release tooling, network services, and long-lived operational scripts where expressive text handling and mature libraries matter.',
    },
    es: {
      name: 'Perl',
      description:
        'Un lenguaje de scripting flexible para procesamiento de texto, automatizacion, web y modulos CPAN.',
      longDescription:
        'Perl es un lenguaje de scripting de alto nivel creado por Larry Wall, conocido por el procesamiento practico de texto, expresiones regulares, scripting de sistemas, tipado dinamico, CPAN y una cultura fuerte de modulos reutilizables. Perl 5 sigue siendo el lenguaje principal de produccion dentro de la familia Perl.\n\nSe usa en automatizacion Unix, procesamiento de logs, aplicaciones web legacy, bioinformatica, transformacion de datos, tooling de releases, servicios de red y scripts operacionales de larga vida donde importan el manejo expresivo de texto y librerias maduras.',
    },
    it: {
      name: 'Perl',
      description:
        "Un linguaggio di scripting flessibile per l'elaborazione del testo, l'automazione, i sistemi web e i moduli CPAN.",
      longDescription:
        "Perl e un linguaggio di scripting di alto livello creato da Larry Wall, noto per l'elaborazione pratica del testo, le espressioni regolari, la scripting di sistema, la tipizzazione dinamica, CPAN e una forte cultura di moduli riutilizzabili. Perl 5 rimane il linguaggio principale della famiglia Perl.\n\nViene utilizzato per l'automazione Unix, l'elaborazione dei log, le applicazioni web legacy, la bioinformatica, la manipolazione dei dati, gli strumenti di rilascio, i servizi di rete e gli script operativi a lungo termine in cui la gestione espressiva del testo e le librerie mature sono importanti.",
    },
    fr: {
      name: 'Perl',
      description:
        "Un langage de script flexible pour le traitement de texte, l'automatisation, les systemes web et les modules CPAN.",
      longDescription:
        "Perl est un langage de script de haut niveau cree par Larry Wall, connu pour le traitement de texte pratique, les expressions regulieres, le scripting systeme, le typage dynamique, CPAN et une forte culture de modules reutilisables. Perl 5 reste le langage principal de la famille Perl.\n\nIl est utilise pour l'automatisation Unix, le traitement des journaux, les applications web heritees, la bioinformatique, la manipulation de donnees, les outils de publication, les services reseau et les scripts operationnels a long terme ou la gestion expressive du texte et les bibliotheques matures sont importantes.",
    },
    de: {
      name: 'Perl',
      description:
        'Eine flexible Skriptsprache für Textverarbeitung, Automatisierung, Web-Systeme und CPAN-Module.',
      longDescription:
        'Perl ist eine High-Level-Skriptsprache, die von Larry Wall entwickelt wurde. Sie ist bekannt für praktische Textverarbeitung, reguläre Ausdrücke, System-Skripting, dynamische Typisierung, CPAN und eine starke Kultur wiederverwendbarer Module. Perl 5 ist die Haupt-Produktionssprache innerhalb der Perl-Familie.\n\nSie wird für Unix-Automatisierung, Log-Verarbeitung, Legacy-Webanwendungen, Bioinformatik, Datenmanipulation, Release-Tooling, Netzwerkdienste und langfristige Betriebsscripts verwendet, bei denen eine ausdrucksstarke Textverarbeitung und ausgereifte Bibliotheken wichtig sind.',
    },
    pt: {
      name: 'Perl',
      description:
        'Linguagem de script flexível para processamento de texto, automação, sistemas web e módulos CPAN.',
      longDescription:
        'Perl é uma linguagem de script de alto nível criada por Larry Wall, conhecida por seu processamento de texto prático, expressões regulares, scripting de sistema, tipagem dinâmica, CPAN e uma forte cultura de módulos reutilizáveis. Perl 5 permanece a principal linguagem de produção da família Perl.\n\nÉ usada para automação Unix, processamento de logs, aplicações web legadas, bioinformática, manipulação de dados, ferramentas de lançamento, serviços de rede e scripts operacionais de longa duração onde o tratamento expressivo de texto e bibliotecas maduras são importantes.',
    },
  },
} satisfies Language;
