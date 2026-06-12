import type { Language } from '../types';

export const toml = {
  slug: 'toml',
  publishedDate: '2013-02-23',
  extensions: ['.toml'],
  author: 'Tom Preston-Werner / TOML contributors',
  website: 'https://toml.io',
  paradigms: ['configuration', 'declarative', 'data-serialization'],
  version: '1.1.0',
  logo: 'https://cdn.simpleicons.org/toml/9C4221',
  color: '#9C4221',
  i18n: {
    en: {
      name: 'TOML',
      description:
        'A minimal, human-readable configuration format that maps clearly to data structures.',
      longDescription:
        'TOML is a configuration file format designed to be easy for humans to read and write while mapping unambiguously to data structures such as hash tables. It supports key-value pairs, tables, arrays, strings, numbers, booleans, and date-time values.\n\nIt is used for project configuration, package manifests, build settings, tool configuration, infrastructure metadata, and applications that need concise structured data without the visual noise of more verbose formats.',
    },
    es: {
      name: 'TOML',
      description:
        'Un formato de configuracion minimo y legible que mapea claramente a estructuras de datos.',
      longDescription:
        'TOML es un formato de archivos de configuracion disenado para ser facil de leer y escribir por humanos mientras mapea sin ambig a estructuras de datos como tablas hash. Soporta pares clave-valor, tablas, arreglos, strings, numeros, booleanos y valores de fecha y hora.\n\nSe usa en configuracion de proyectos, manifiestos de paquetes, ajustes de build, configuracion de herramientas, metadata de infraestructura y aplicaciones que necesitan datos estructurados concisos sin el ruido visual de formatos mas verbosos.',
    },
    it: {
      name: 'TOML',
      description:
        "Un formato di configurazione minimale, leggibile dall'uomo, che si mappa chiaramente con le strutture dati.",
      longDescription:
        "TOML e un formato di file di configurazione progettato per essere facile da leggere e scrivere per gli esseri umani, mappando in modo inequivocabile con le strutture dati come le tabelle hash. Supporta coppie chiave-valore, tabelle, array, stringhe, numeri, booleani e valori di data-ora.\n\nViene utilizzato per la configurazione del progetto, i manifest dei pacchetti, le impostazioni di build, la configurazione degli strumenti, i metadati dell'infrastruttura e le applicazioni che necessitano di dati strutturati concisi senza il rumore visivo dei formati piu verbali.",
    },
    fr: {
      name: 'TOML',
      description:
        "Un format de configuration minimal et lisible par l'homme qui correspond clairement aux structures de donnees.",
      longDescription:
        "TOML est un format de fichier de configuration concu pour etre facile a lire et a ecrire pour les humains, tout en correspondant de maniere non ambigue aux structures de donnees telles que les tables de hachage. Il prend en charge les paires cle-valeur, les tables, les tableaux, les chaines de caracteres, les nombres, les valeurs booleennes et les valeurs de date-heure.\n\nIl est utilise pour la configuration de projet, les manifestes de paquets, les parametres de construction, la configuration d'outils, les metadonnees d'infrastructure et les applications qui ont besoin de donnees structurees concises sans le bruit visuel des formats plus verbeux.",
    },
    de: {
      name: 'TOML',
      description:
        'Ein minimales, menschenlesbares Konfigurationsformat, das klar auf Datenstrukturen abgebildet ist.',
      longDescription:
        'TOML ist ein Konfigurationsdateiformat, das darauf ausgelegt ist, leicht von Menschen gelesen und geschrieben zu werden und gleichzeitig eindeutig auf Datenstrukturen wie Hash-Tabellen abgebildet ist. Es unterstützt Schlüssel-Wert-Paare, Tabellen, Arrays, Strings, Zahlen, Booleans und Datums-/Zeitwerte.\n\nEs wird für Projektkonfigurationen, Paketmanifeste, Build-Einstellungen, Werkzeugkonfigurationen, Infrastrukturmetadaten und Anwendungen verwendet, die präzise strukturierte Daten benötigen, ohne die visuelle Ablenkung ausführlicher Formate.',
    },
    pt: {
      name: 'TOML',
      description:
        'Um formato de configuração mínimo e legível, que se mapeia claramente para estruturas de dados.',
      longDescription:
        'O TOML é um formato de arquivo de configuração projetado para ser fácil de ler e escrever para humanos, enquanto se mapeia de forma inequívoca para estruturas de dados, como tabelas de hash. Suporta pares chave-valor, tabelas, arrays, strings, números, booleanos e valores de data/hora.\n\nÉ usado para configuração de projetos, manifestos de pacotes, configurações de construção, configuração de ferramentas, metadados de infraestrutura e aplicativos que precisam de dados estruturados concisos sem o ruído visual de formatos mais verbosos.',
    },
  },
} satisfies Language;
