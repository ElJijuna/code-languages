import type { Language } from '@/types';

export const xml = {
  slug: 'xml',
  publishedDate: '1998-02-10',
  extensions: ['.xml', '.xsd', '.xsl', '.xslt'],
  author: 'World Wide Web Consortium',
  website: 'https://www.w3.org/TR/xml/',
  paradigms: ['declarative', 'markup', 'data-serialization'],
  version: 'XML 1.0 Fifth Edition',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/6/68/XML.svg',
  color: '#E37933',
  i18n: {
    en: {
      name: 'XML',
      description:
        'A markup language for structured documents, configuration files, and data interchange.',
      longDescription:
        'XML defines a text-based format for representing structured information with custom elements, attributes, namespaces, schemas, and transformation workflows.\n\nIt is widely used in configuration files, enterprise integrations, document formats, web services, publishing systems, and standards that need portable, self-describing data.',
    },
    es: {
      name: 'XML',
      description:
        'Un lenguaje de marcado para documentos estructurados, archivos de configuracion e intercambio de datos.',
      longDescription:
        'XML define un formato basado en texto para representar informacion estructurada con elementos personalizados, atributos, espacios de nombres, esquemas y flujos de transformacion.\n\nSe usa ampliamente en archivos de configuracion, integraciones empresariales, formatos de documentos, servicios web, sistemas de publicacion y estandares que necesitan datos portables y autodescriptivos.',
    },
    it: {
      name: 'XML',
      description:
        'Un linguaggio di markup per documenti strutturati, file di configurazione e scambio di dati.',
      longDescription:
        'XML definisce un formato basato su testo per la rappresentazione di informazioni strutturate con elementi, attributi, spazi dei nomi e workflow di trasformazione personalizzati.\n\nE ampiamente utilizzato in file di configurazione, integrazioni aziendali, formati di documenti, servizi web, sistemi di pubblicazione e standard che richiedono dati portabili e auto-descrittivi.',
    },
    fr: {
      name: 'XML',
      description:
        "Un langage de balisage pour les documents structures, les fichiers de configuration et l'echange de donnees.",
      longDescription:
        "XML definit un format base sur du texte pour representer des informations structurees avec des elements, des attributs, des espaces de noms, des schemas et des flux de transformation personnalises.\n\nIl est largement utilise dans les fichiers de configuration, les integrations d'entreprise, les formats de documents, les services web, les systemes de publication et les normes qui necessitent des donnees portables et auto-decrivantes.",
    },
    de: {
      name: 'XML',
      description:
        'Eine Markup-Sprache für strukturierte Dokumente, Konfigurationsdateien und Datenaustausch.',
      longDescription:
        'XML definiert ein textbasiertes Format zur Darstellung strukturierter Informationen mit benutzerdefinierten Elementen, Attributen, Namespaces, Schemata und Transformationsprozessen.\n\nEs wird häufig in Konfigurationsdateien, Unternehmensintegrationen, Dokumentformaten, Webdiensten, Veröffentlichungs- und Standardsystemen verwendet, die portable, selbstbeschreibende Daten erfordern.',
    },
    pt: {
      name: 'XML',
      description:
        'Uma linguagem de marcação para documentos estruturados, arquivos de configuração e troca de dados.',
      longDescription:
        'O XML define um formato baseado em texto para representar informações estruturadas com elementos, atributos, namespaces e esquemas personalizados.\n\nÉ amplamente utilizado em arquivos de configuração, integração empresarial, formatos de documentos, serviços web, sistemas de publicação e padrões que exigem dados portáteis e auto-descritivos.',
    },
  },
} satisfies Language;
