import type { Language } from '@/types';

export const xslt = {
  slug: 'xslt',
  publishedDate: '1999-11-16',
  extensions: ['.xsl', '.xslt'],
  author: 'W3C XSLT Working Group',
  website: 'https://www.w3.org/TR/xslt-30/',
  paradigms: ['declarative', 'functional', 'markup', 'transformation'],
  tooling: {
    runtimes: ['Saxon', 'libxslt', 'Xalan', 'Browser XSLT processors'],
    packageManagers: ['Maven', 'npm', 'NuGet', 'APT', 'Homebrew'],
    ecosystems: ['XML', 'Publishing', 'Enterprise Integration', 'Document Processing'],
  },
  version: 'XSLT 3.0',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/6/68/XML.svg',
  color: '#E37933',
  i18n: {
    en: {
      name: 'XSLT',
      description:
        'A W3C stylesheet language for transforming XML documents into XML, HTML, text, and more.',
      longDescription:
        'XSLT is a declarative transformation language for XML documents. Stylesheets use templates, modes, XPath expressions, variables, functions, keys, imports, and output declarations to match source trees and produce XML, HTML, text, or other structured results.\n\nIt is used in publishing systems, enterprise data exchange, document conversion, XML pipelines, standards-based integrations, browser-era XML workflows, and systems that need repeatable transformations between document formats.',
    },
    es: {
      name: 'XSLT',
      description:
        'Un lenguaje W3C de hojas de estilo para transformar XML en XML, HTML, texto y mas.',
      longDescription:
        'XSLT es un lenguaje declarativo de transformacion para documentos XML. Las hojas de estilo usan templates, modos, expresiones XPath, variables, funciones, claves, imports y declaraciones de salida para encontrar nodos en arboles fuente y producir XML, HTML, texto u otros resultados estructurados.\n\nSe usa en sistemas de publicacion, intercambio de datos empresarial, conversion de documentos, pipelines XML, integraciones basadas en estandares, flujos XML historicos del navegador y sistemas que necesitan transformaciones repetibles entre formatos documentales.',
    },
    it: {
      name: 'XSLT',
      description:
        'Un linguaggio di stile W3C per trasformare documenti XML in XML, HTML, testo e altro.',
      longDescription:
        "XSLT e un linguaggio di trasformazione dichiarativo per documenti XML. I linguaggi di stile utilizzano modelli, modalita, espressioni XPath, variabili, funzioni, chiavi, importazioni e dichiarazioni di output per corrispondere agli alberi di origine e produrre XML, HTML, testo o altri risultati strutturati.\n\nViene utilizzato in sistemi di pubblicazione, scambio di dati aziendali, conversione di documenti, pipeline XML, integrazioni basate su standard, flussi XML dell'era del browser e sistemi che necessitano di trasformazioni ripetibili tra formati di documenti.",
    },
    fr: {
      name: 'XSLT',
      description:
        'Un langage de style W3C pour transformer les documents XML en XML, HTML, texte, etc.',
      longDescription:
        "XSLT est un langage de transformation declaratif pour les documents XML. Les feuilles de style utilisent des modeles, des modes, des expressions XPath, des variables, des fonctions, des cles, des importations et des declarations de sortie pour correspondre aux arbres sources et produire des resultats XML, HTML, texte ou autres resultats structures. \n\nIl est utilise dans les systemes de publication, l'echange de donnees d'entreprise, la conversion de documents, les pipelines XML, les integrations basees sur des normes, les flux XML de l'ere des navigateurs et les systemes qui ont besoin de transformations reproductibles entre les formats de documents.",
    },
    de: {
      name: 'XSLT',
      description:
        'Eine W3C-Stylesheet-Sprache zur Transformation von XML-Dokumenten in XML, HTML, Text und mehr.',
      longDescription:
        'XSLT ist eine deklarative Transformationssprache für XML-Dokumente. Stylesheets verwenden Vorlagen, Modi, XPath-Ausdrücke, Variablen, Funktionen, Schlüssel, Importe und Ausgabedeklarationen, um Quellbäume abzugleichen und XML, HTML, Text oder andere strukturierte Ergebnisse zu erzeugen.\n\nEs wird in Publishing-Systemen, Enterprise-Daten-Austausch, Dokumentkonvertierungen, XML-Pipelines, standardsbasierten Integrationen, Browser-Ära XML-Workflows und Systemen verwendet, die wiederholbare Transformationen zwischen Dokumentformaten benötigen.',
    },
    pt: {
      name: 'XSLT',
      description:
        'Linguagem de estilo da W3C para transformar documentos XML em XML, HTML, texto e outros formatos.',
      longDescription:
        'XSLT é uma linguagem de transformação declarativa para documentos XML. As linguagens de estilo usam modelos, modos, expressões XPath, variáveis, funções, chaves, importações e declarações de saída para corresponder às árvores de origem e produzir XML, HTML, texto ou outros resultados estruturados.\n\nÉ usada em sistemas de publicação, troca de dados empresariais, conversão de documentos, pipelines XML, integrações baseadas em padrões, fluxos de trabalho XML da era do navegador e sistemas que precisam de transformações repetíveis entre formatos de documentos.',
    },
  },
} satisfies Language;
