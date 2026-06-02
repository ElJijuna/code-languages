import type { Language } from '../types';

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
        'Eine flexible Skriptsprache f\u00fcr Textverarbeitung, Automatisierung, Web-Systeme und CPAN-Module.',
      longDescription:
        'Perl ist eine High-Level-Skriptsprache, die von Larry Wall entwickelt wurde. Sie ist bekannt f\u00fcr praktische Textverarbeitung, regul\u00e4re Ausdr\u00fccke, System-Skripting, dynamische Typisierung, CPAN und eine starke Kultur wiederverwendbarer Module. Perl 5 ist die Haupt-Produktionssprache innerhalb der Perl-Familie.\n\nSie wird f\u00fcr Unix-Automatisierung, Log-Verarbeitung, Legacy-Webanwendungen, Bioinformatik, Datenmanipulation, Release-Tooling, Netzwerkdienste und langfristige Betriebsscripts verwendet, bei denen eine ausdrucksstarke Textverarbeitung und ausgereifte Bibliotheken wichtig sind.',
    },
    pt: {
      name: 'Perl',
      description:
        'Linguagem de script flex\u00edvel para processamento de texto, automa\u00e7\u00e3o, sistemas web e m\u00f3dulos CPAN.',
      longDescription:
        'Perl \u00e9 uma linguagem de script de alto n\u00edvel criada por Larry Wall, conhecida por seu processamento de texto pr\u00e1tico, express\u00f5es regulares, scripting de sistema, tipagem din\u00e2mica, CPAN e uma forte cultura de m\u00f3dulos reutiliz\u00e1veis. Perl 5 permanece a principal linguagem de produ\u00e7\u00e3o da fam\u00edlia Perl.\n\n\u00c9 usada para automa\u00e7\u00e3o Unix, processamento de logs, aplica\u00e7\u00f5es web legadas, bioinform\u00e1tica, manipula\u00e7\u00e3o de dados, ferramentas de lan\u00e7amento, servi\u00e7os de rede e scripts operacionais de longa dura\u00e7\u00e3o onde o tratamento expressivo de texto e bibliotecas maduras s\u00e3o importantes.',
    },
  },
} satisfies Language;
