import type { Language } from "../types";

export const xquery = {
  slug: "xquery",
  publishedDate: "2007-01-23",
  extensions: [".xq", ".xql", ".xqm", ".xquery", ".xqy"],
  author: "W3C XML Query Working Group",
  website: "https://www.w3.org/TR/xquery/",
  paradigms: ["query", "functional", "declarative", "xml"],
  tooling: {
    runtimes: ["BaseX", "Saxon", "eXist-db", "MarkLogic"],
    packageManagers: ["EXPath Package Manager"],
    ecosystems: ["XML", "Databases", "Publishing", "Enterprise Data"],
  },
  version: "XQuery 3.1",
  logo: "https://upload.wikimedia.org/wikipedia/commons/6/68/XML.svg",
  color: "#E37933",
  i18n: {
    en: {
      name: "XQuery",
      description:
        "A W3C query and application language for XML, structured, and semi-structured data.",
      longDescription:
        "XQuery is a declarative query language for XML and related structured data. It combines XPath expressions, FLWOR queries, functions, modules, sequence processing, namespaces, and type-aware operations to extract, transform, join, and construct XML or other serialized results.\n\nIt is used in native XML databases, publishing pipelines, document repositories, enterprise integrations, digital humanities, metadata processing, and applications that query large collections of XML or semi-structured content.",
    },
    es: {
      name: "XQuery",
      description:
        "Un lenguaje W3C de consulta y aplicaciones para XML y datos estructurados o semiestructurados.",
      longDescription:
        "XQuery es un lenguaje declarativo de consultas para XML y datos estructurados relacionados. Combina expresiones XPath, consultas FLWOR, funciones, modulos, procesamiento de secuencias, namespaces y operaciones con tipos para extraer, transformar, unir y construir XML u otros resultados serializados.\n\nSe usa en bases de datos XML nativas, pipelines de publicacion, repositorios documentales, integraciones empresariales, humanidades digitales, procesamiento de metadatos y aplicaciones que consultan grandes colecciones de XML o contenido semiestructurado.",
    },
    it: {
      name: "XQuery",
      description:
        "Un linguaggio di query e applicazione W3C per XML, dati strutturati e semi-strutturati.",
      longDescription:
        "XQuery e un linguaggio di query dichiarativo per XML e dati strutturati correlati. Combina espressioni XPath, query FLWOR, funzioni, moduli, elaborazione di sequenze, namespace e operazioni consapevoli dei tipi per estrarre, trasformare, unire e costruire risultati XML o serializzati.\n\nE utilizzato in database XML nativi, pipeline di pubblicazione, repository di documenti, integrazioni aziendali, digital humanities, elaborazione di metadati e applicazioni che interrogano grandi raccolte di XML o contenuti semi-strutturati.",
    },
    fr: {
      name: "XQuery",
      description:
        "Un langage de requete et d'application W3C pour les donnees XML, structurees et semi-structurees.",
      longDescription:
        "XQuery est un langage de requete declaratif pour XML et les donnees structurees connexes. Il combine des expressions XPath, des requetes FLWOR, des fonctions, des modules, le traitement de sequences, des espaces de noms et des operations conscientes des types pour extraire, transformer, joindre et construire des resultats XML ou d'autres resultats serialises.\n\nIl est utilise dans les bases de donnees XML natives, les pipelines de publication, les referentiels de documents, les integrations d'entreprise, les humanites numeriques, le traitement des metadonnees et les applications qui interrogent de grandes collections de contenu XML ou semi-structure.",
    },
    de: {
      name: "XQuery",
      description:
        "Eine W3C-Abfragesprache und -Anwendungssprache f\u00fcr XML, strukturierte und halbstrukturierte Daten.",
      longDescription:
        "XQuery ist eine deklarative Abfragesprache f\u00fcr XML und verwandte strukturierte Daten. Sie kombiniert XPath-Ausdr\u00fccke, FLWOR-Abfragen, Funktionen, Module, Sequenzverarbeitung, Namespaces und typsichere Operationen, um XML oder andere serialisierte Ergebnisse zu extrahieren, zu transformieren, zu verkn\u00fcpfen und zu erstellen.\n\nEs wird in nativen XML-Datenbanken, Ver\u00f6ffentlichungs-Pipelines, Dokumenten-Repositories, Unternehmensintegrationen, digitalen Geisteswissenschaften, Metadatenverarbeitung und Anwendungen verwendet, die gro\u00dfe Sammlungen von XML- oder halbstrukturierter Inhalte abfragen.",
    },
    pt: {
      name: "XQuery",
      description:
        "Linguagem de consulta e aplica\u00e7\u00e3o da W3C para XML, dados estruturados e semiestruturados.",
      longDescription:
        "XQuery \u00e9 uma linguagem de consulta declarativa para XML e dados estruturados relacionados. Combina express\u00f5es XPath, consultas FLWOR, fun\u00e7\u00f5es, m\u00f3dulos, processamento de sequ\u00eancias, namespaces e opera\u00e7\u00f5es conscientes de tipo para extrair, transformar, juntar e construir resultados XML ou serializados.\n\n\u00c9 utilizada em bancos de dados XML nativos, pipelines de publica\u00e7\u00e3o, reposit\u00f3rios de documentos, integra\u00e7\u00e3o empresarial, humanidades digitais, processamento de metadados e aplica\u00e7\u00f5es que consultam grandes cole\u00e7\u00f5es de XML ou conte\u00fado semiestruturado.",
    },
  },
} satisfies Language;
