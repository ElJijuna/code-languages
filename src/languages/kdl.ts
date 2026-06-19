import type { Language } from '../types';

export const kdl = {
  slug: 'kdl',
  publishedDate: '2021-08-29',
  extensions: ['.kdl'],
  author: 'Kat Marchan and contributors',
  website: 'https://kdl.dev',
  paradigms: ['configuration', 'document language', 'data serialization'],
  tooling: {
    runtimes: ['Parsers', 'CLI tools'],
    ecosystems: ['Configuration', 'Rust', 'Structured Documents'],
  },
  version: '2.0.0',
  logo: 'https://kdl.dev/assets/apple-touch-icon-DYakp7eY.png',
  color: '#6B4E9B',
  i18n: {
    en: {
      name: 'KDL',
      description:
        'A node-based document language for readable configuration, structured data, and tree-shaped documents.',
      longDescription:
        'KDL is a document language built around named nodes with arguments, properties, and nested children. Its syntax is designed to be easier to read and edit by hand than many dense data formats while still mapping cleanly to structured data.\n\nIt is used for configuration files, domain-specific documents, and tools that need comments, ordering, and tree-shaped data. The KDL ecosystem includes parsers for multiple languages and a versioned specification.',
    },
    es: {
      name: 'KDL',
      description:
        'Lenguaje documental basado en nodos para configuracion legible, datos estructurados y documentos en forma de arbol.',
      longDescription:
        'KDL es un lenguaje documental basado en nodos con argumentos, propiedades e hijos anidados. Su sintaxis busca ser mas facil de leer y editar a mano que muchos formatos densos, sin perder una correspondencia clara con datos estructurados.\n\nSe usa para archivos de configuracion, documentos especificos de dominio y herramientas que necesitan comentarios, orden y datos en forma de arbol.',
    },
    it: {
      name: 'KDL',
      description:
        'Linguaggio basato su nodi per configurazioni leggibili, dati strutturati e documenti ad albero.',
      longDescription:
        "KDL è un linguaggio di documentazione costruito attorno a nodi nominati con argomenti, proprietà e figli nidificati. La sua sintassi è progettata per essere più facile da leggere ed editare manualmente rispetto a molti formati dati densi, pur mappando in modo pulito i dati strutturati.\n\nViene utilizzato per file di configurazione, documenti specifici del dominio e strumenti che richiedono commenti, ordinamento e dati ad albero. L'ecosistema KDL include parser per più lingue e una specifica versionata.",
    },
    fr: {
      name: 'KDL',
      description:
        "Langage de document basé sur des nœuds pour une configuration lisible, des données structurées et des documents en forme d'arborescence.",
      longDescription:
        "KDL est un langage de document construit autour de nœuds nommés avec des arguments, des propriétés et des enfants imbriqués. Sa syntaxe est conçue pour être plus facile à lire et à modifier manuellement que de nombreux formats de données denses tout en mappant proprement vers des données structurées.\n\nIl est utilisé pour les fichiers de configuration, les documents spécifiques à un domaine et les outils qui nécessitent des commentaires, un ordre et des données en forme d'arborescence. L'écosystème KDL comprend des parseurs pour plusieurs langages et une spécification versionnée.",
    },
    de: {
      name: 'KDL',
      description:
        'Eine Knotenbasierte Dokumentenstruktur für lesbare Konfiguration, strukturierte Daten und baumartige Dokumente.',
      longDescription:
        'KDL ist eine Dokumentensprache, die auf benannten Knoten mit Argumenten, Eigenschaften und verschachtelten Kindknoten basiert. Ihre Syntax wurde entwickelt, um leichter lesbar und manuell bearbeitbar zu sein als viele dichte Datendarformen, während sie dennoch sauber an strukturierte Daten abgebildet werden kann.\n\nEs wird für Konfigurationsdateien, domänenspezifische Dokumente und Tools verwendet, die Kommentare, Sortierung und baumartige Daten benötigen. Das KDL-Ökosystem umfasst Parser für mehrere Sprachen sowie eine versionierte Spezifikation.',
    },
    pt: {
      name: 'KDL',
      description:
        'Linguagem de documentos baseada em nós para configuração legível, dados estruturados e documentos em árvore.',
      longDescription:
        'KDL é uma linguagem de documentos construída em torno de nós nomeados com argumentos, propriedades e filhos aninhados. Sua sintaxe é projetada para ser mais fácil de ler e editar manualmente do que muitos formatos de dados densos, mantendo a correspondência limpa com dados estruturados.\n\nÉ usada para arquivos de configuração, documentos específicos de domínio e ferramentas que precisam de comentários, ordem e dados em árvore. O ecossistema KDL inclui analisadores para vários idiomas e uma especificação versionada.',
    },
  },
} satisfies Language;
