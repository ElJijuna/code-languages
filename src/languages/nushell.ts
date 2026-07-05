import type { Language } from '../types';

export const nushell = {
  slug: 'nushell',
  publishedDate: '2019-08-23',
  extensions: ['.nu'],
  author: 'Jonathan Turner / Nushell contributors',
  website: 'https://www.nushell.sh',
  paradigms: ['functional', 'imperative', 'scripting'],
  tooling: {
    runtimes: ['nu'],
    packageManagers: ['nupm'],
    ecosystems: ['Shell', 'Unix', 'Windows', 'macOS'],
  },
  version: '0.114.0',
  logo: 'https://cdn.simpleicons.org/nushell/3AA675',
  color: '#3AA675',
  i18n: {
    en: {
      name: 'Nushell',
      description:
        'A modern shell that treats data as structured tables, enabling pipeline-based data manipulation across platforms.',
      longDescription:
        'Nushell is a cross-platform shell that brings a structured, typed approach to command-line data processing. Instead of treating everything as plain text, Nushell pipelines produce and consume structured data like tables, lists, and records, making it easy to filter, sort, and transform output.\n\nIt supports plugins, custom completions, and a rich standard library. Nushell is written in Rust and runs on Linux, macOS, and Windows, combining the interactivity of a shell with expressive data manipulation capabilities.',
    },
    es: {
      name: 'Nushell',
      description:
        'Un shell moderno que trata los datos como tablas estructuradas, permitiendo manipulación de datos en pipelines multiplataforma.',
      longDescription:
        'Nushell es un shell multiplataforma que aplica un enfoque estructurado y tipado al procesamiento de datos en línea de comandos. En lugar de tratar todo como texto plano, sus pipelines producen y consumen datos estructurados como tablas, listas y registros.\n\nAdmite plugins, completados personalizados y una rica biblioteca estándar. Está escrito en Rust y funciona en Linux, macOS y Windows, combinando la interactividad de un shell con capacidades expresivas de manipulación de datos.',
    },
    it: {
      name: 'Nushell',
      description:
        'Una shell moderna che tratta i dati come tabelle strutturate, abilitando la manipolazione dei dati in pipeline su più piattaforme.',
      longDescription:
        "Nushell è una shell multipiattaforma che porta un approccio strutturato e tipizzato all'elaborazione dei dati dalla riga di comando. Invece di trattare tutto come testo normale, le pipeline di Nushell producono e consumano dati strutturati come tabelle, liste e record.\n\nSupporta plugin, completamenti personalizzati e una ricca libreria standard. È scritto in Rust e funziona su Linux, macOS e Windows, combinando l'interattività di una shell con capacità espressive di manipolazione dei dati.",
    },
    fr: {
      name: 'Nushell',
      description:
        'Un shell moderne qui traite les données comme des tables structurées, permettant la manipulation de données en pipeline sur toutes les plateformes.',
      longDescription:
        "Nushell est un shell multiplateforme qui apporte une approche structurée et typée au traitement des données en ligne de commande. Au lieu de tout traiter comme du texte brut, les pipelines Nushell produisent et consomment des données structurées comme des tables, des listes et des enregistrements.\n\nIl prend en charge les plugins, les complétions personnalisées et une riche bibliothèque standard. Écrit en Rust, il fonctionne sur Linux, macOS et Windows, combinant l'interactivité d'un shell avec des capacités expressives de manipulation de données.",
    },
    de: {
      name: 'Nushell',
      description:
        'Eine moderne Shell, die Daten als strukturierte Tabellen behandelt und plattformübergreifende Pipeline-Datenverarbeitung ermöglicht.',
      longDescription:
        'Nushell ist eine plattformübergreifende Shell, die einen strukturierten, typisierten Ansatz für die Befehlszeilen-Datenverarbeitung bringt. Anstatt alles als Klartext zu behandeln, erzeugen und verarbeiten Nushell-Pipelines strukturierte Daten wie Tabellen, Listen und Datensätze.\n\nEs unterstützt Plugins, benutzerdefinierte Vervollständigungen und eine umfangreiche Standardbibliothek. In Rust geschrieben, läuft es unter Linux, macOS und Windows und kombiniert die Interaktivität einer Shell mit ausdrucksstarken Datenverarbeitungsfähigkeiten.',
    },
    pt: {
      name: 'Nushell',
      description:
        'Um shell moderno que trata dados como tabelas estruturadas, permitindo manipulação de dados em pipelines multiplataforma.',
      longDescription:
        'Nushell é um shell multiplataforma que traz uma abordagem estruturada e tipada ao processamento de dados na linha de comando. Em vez de tratar tudo como texto simples, os pipelines do Nushell produzem e consomem dados estruturados como tabelas, listas e registros.\n\nSuporta plugins, completamentos personalizados e uma rica biblioteca padrão. Escrito em Rust, funciona no Linux, macOS e Windows, combinando a interatividade de um shell com capacidades expressivas de manipulação de dados.',
    },
  },
} satisfies Language;
