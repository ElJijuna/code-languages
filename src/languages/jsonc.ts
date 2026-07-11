import type { Language } from '@/types';

export const jsonc = {
  slug: 'jsonc',
  publishedDate: '2015-04-29',
  extensions: ['.jsonc', '.code-workspace'],
  author: 'Microsoft',
  website: 'https://jsonc.org',
  paradigms: ['data serialization', 'configuration'],
  tooling: {
    runtimes: ['Editors', 'Build tools'],
    ecosystems: ['JavaScript', 'TypeScript', 'Configuration'],
  },
  version: 'JSON with Comments',
  logo: 'https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_json.svg',
  color: '#F5DE19',
  i18n: {
    en: {
      name: 'JSONC',
      description:
        'A JSON-compatible configuration format that permits JavaScript-style comments and optional editor-friendly extensions.',
      longDescription:
        'JSONC, or JSON with Comments, is a JSON-derived configuration format that allows comments while preserving the familiar JSON data model. It is widely recognized because Visual Studio Code uses it for settings, launch configurations, and workspace files.\n\nThe format is intended for human-maintained configuration rather than data interchange between services. Tooling usually parses JSONC into ordinary JSON-like values after stripping comments and handling the accepted extensions.',
    },
    es: {
      name: 'JSONC',
      description:
        'Formato de configuracion compatible con JSON que permite comentarios estilo JavaScript y extensiones amigables para editores.',
      longDescription:
        'JSONC, o JSON con comentarios, es un formato de configuracion derivado de JSON que permite comentarios sin abandonar el modelo de datos familiar. Es muy conocido porque Visual Studio Code lo usa en ajustes, configuraciones de ejecucion y archivos de workspace.\n\nEsta pensado para configuracion mantenida por humanos, no para intercambio de datos entre servicios. Las herramientas suelen convertir JSONC a valores similares a JSON tras quitar comentarios.',
    },
    it: {
      name: 'JSONC',
      description:
        "Un formato di configurazione compatibile con JSON che consente commenti nello stile JavaScript e estensioni facoltative per l'editor.",
      longDescription:
        'JSONC, o JSON con Commenti, è un formato di configurazione derivato da JSON che permette la presenza di commenti preservando il modello dati JSON familiare. È ampiamente riconosciuto perché Visual Studio Code lo utilizza per impostazioni, configurazioni di avvio e file di workspace.\n\nIl formato è pensato per una gestione manuale della configurazione piuttosto che per lo scambio di dati tra servizi. Gli strumenti solitamente convertono JSONC in valori simili a JSON ordinari dopo aver rimosso i commenti ed elaborato le estensioni accettate.',
    },
    fr: {
      name: 'JSONC',
      description:
        "Format de configuration compatible avec JSON, permettant des commentaires et des extensions conviviales pour l'éditeur.",
      longDescription:
        "JSONC (JSON with Comments) est un format de configuration dérivé du JSON qui permet d'utiliser des commentaires tout en conservant le modèle de données JSON familier. Il est largement reconnu car Visual Studio Code l'utilise pour les paramètres, les configurations de lancement et les fichiers de workspace.\n\nCe format est destiné à la maintenance par l'utilisateur plutôt qu'au transfert de données entre services. Les outils analysent généralement JSONC en valeurs similaires au JSON après avoir supprimé les commentaires et géré les extensions acceptées.",
    },
    de: {
      name: 'JSONC',
      description:
        'Ein JSON-kompatibles Konfigurationsformat mit JavaScript-ähnlichen Kommentaren und optionalen, benutzerfreundlichen Erweiterungen.',
      longDescription:
        'JSONC (JSON with Comments) ist ein auf JSON basierendes Konfigurationsformat, das Kommentare ermöglicht und gleichzeitig das vertraute JSON-Datenmodell beibehält. Es wird weit verbreitet verwendet, da Visual Studio Code es für Einstellungen, Launch Configurations und Workspace Files nutzt.\n\nDas Format ist für die manuelle Pflege von Konfigurationen gedacht, nicht für den Datenaustausch zwischen Diensten. Werkzeuge parsen typischerweise JSONC in normale, JSON-ähnliche Werte, nachdem Kommentare entfernt und akzeptierte Erweiterungen verarbeitet wurden.',
    },
    pt: {
      name: 'JSONC',
      description:
        'Formato de configuração compatível com JSON que permite comentários no estilo JavaScript e extensões opcionais amigáveis ao editor.',
      longDescription:
        'JSONC, ou JSON com Comentários, é um formato de configuração derivado do JSON que permite comentários preservando o modelo de dados JSON familiar. É amplamente reconhecido porque o Visual Studio Code o utiliza para configurações, definições de lançamento e arquivos de workspace.\n\nO formato é destinado à manutenção manual da configuração em vez de troca de dados entre serviços. As ferramentas geralmente convertem o JSONC em valores semelhantes ao JSON após remover os comentários e lidar com as extensões aceitas.',
    },
  },
} satisfies Language;
