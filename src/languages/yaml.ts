import type { Language } from '../types';

export const yaml = {
  slug: 'yaml',
  publishedDate: '2001-05-11',
  extensions: ['.yaml', '.yml'],
  author: 'Clark Evans, Ingy dot Net, Oren Ben-Kiki',
  website: 'https://yaml.org',
  paradigms: ['data serialization', 'declarative'],
  version: '1.2.2',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Official_YAML_Logo.svg',
  color: '#CB171E',
  i18n: {
    en: {
      name: 'YAML',
      description:
        'A human-readable data serialization language used for configuration and documents.',
      longDescription:
        'YAML represents structured data with indentation-based syntax, supporting mappings, sequences, scalars, anchors, aliases, and multiple documents in a stream.\n\nIt is widely used for configuration files, CI/CD workflows, infrastructure definitions, application settings, and data exchange where readability is important.',
    },
    es: {
      name: 'YAML',
      description:
        'Un lenguaje legible de serializacion de datos usado en configuracion y documentos.',
      longDescription:
        'YAML representa datos estructurados con una sintaxis basada en indentacion, soportando mapas, secuencias, escalares, anchors, aliases y multiples documentos en un flujo.\n\nSe usa ampliamente en archivos de configuracion, flujos CI/CD, definiciones de infraestructura, ajustes de aplicaciones e intercambio de datos donde la legibilidad es importante.',
    },
    it: {
      name: 'YAML',
      description:
        "Un linguaggio di serializzazione dati leggibile dall'uomo utilizzato per la configurazione e i documenti.",
      longDescription:
        "YAML rappresenta dati strutturati con una sintassi basata sull'indentazione, supportando mapping, sequenze, scalari, anchor, alias e piu documenti in un flusso.\n\nE ampiamente utilizzato per file di configurazione, workflow CI/CD, definizioni di infrastruttura, impostazioni di applicazioni e scambio di dati dove la leggibilita e importante.",
    },
    fr: {
      name: 'YAML',
      description:
        "Un langage de serialisation de donnees lisible par l'homme utilise pour la configuration et les documents.",
      longDescription:
        "YAML represente les donnees structurees avec une syntaxe basee sur l'indentation, prenant en charge les mappings, les sequences, les scalaires, les ancres, les alias et plusieurs documents dans un flux.\n\nIl est largement utilise pour les fichiers de configuration, les workflows CI/CD, les definitions d'infrastructure, les parametres d'application et l'echange de donnees ou la lisibilite est importante.",
    },
    de: {
      name: 'YAML',
      description:
        'Eine menschenlesbare Daten-Serialisierungsprache f\u00fcr Konfigurationen und Dokumente.',
      longDescription:
        'YAML stellt strukturierte Daten mit einer Einr\u00fcckungsbasierten Syntax dar, unterst\u00fctzt Mappings, Sequenzen, Skalare, Anchors, Aliase und mehrere Dokumente in einem Stream.\n\nEs wird h\u00e4ufig f\u00fcr Konfigurationsdateien, CI/CD-Workflows, Infrastrukturdefinitionen, Anwendungs-Einstellungen und Datenaustausch verwendet, wo Lesbarkeit wichtig ist.',
    },
    pt: {
      name: 'YAML',
      description:
        'Linguagem de serializa\u00e7\u00e3o de dados leg\u00edvel por humanos usada para configura\u00e7\u00e3o e documentos.',
      longDescription:
        'YAML representa dados estruturados com sintaxe baseada em indenta\u00e7\u00e3o, suportando mapeamentos, sequ\u00eancias, escalares, \u00e2ncoras, aliases e m\u00faltiplos documentos em um fluxo.\n\n\u00c9 amplamente utilizada para arquivos de configura\u00e7\u00e3o, fluxos de CI/CD, defini\u00e7\u00f5es de infraestrutura, configura\u00e7\u00f5es de aplicativos e troca de dados onde a legibilidade \u00e9 importante.',
    },
  },
} satisfies Language;
