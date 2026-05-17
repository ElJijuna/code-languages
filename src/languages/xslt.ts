import type { Language } from "../types";

export const xslt = {
  slug: "xslt",
  publishedDate: "1999-11-16",
  extensions: [".xsl", ".xslt"],
  author: "W3C XSLT Working Group",
  website: "https://www.w3.org/TR/xslt-30/",
  paradigms: ["declarative", "functional", "markup", "transformation"],
  tooling: {
    runtimes: ["Saxon", "libxslt", "Xalan", "Browser XSLT processors"],
    packageManagers: ["Maven", "npm", "NuGet", "APT", "Homebrew"],
    ecosystems: ["XML", "Publishing", "Enterprise Integration", "Document Processing"],
  },
  version: "XSLT 3.0",
  logo: "https://upload.wikimedia.org/wikipedia/commons/6/68/XML.svg",
  i18n: {
    en: {
      name: "XSLT",
      description:
        "A W3C stylesheet language for transforming XML documents into XML, HTML, text, and more.",
      longDescription:
        "XSLT is a declarative transformation language for XML documents. Stylesheets use templates, modes, XPath expressions, variables, functions, keys, imports, and output declarations to match source trees and produce XML, HTML, text, or other structured results.\n\nIt is used in publishing systems, enterprise data exchange, document conversion, XML pipelines, standards-based integrations, browser-era XML workflows, and systems that need repeatable transformations between document formats.",
    },
    es: {
      name: "XSLT",
      description:
        "Un lenguaje W3C de hojas de estilo para transformar XML en XML, HTML, texto y mas.",
      longDescription:
        "XSLT es un lenguaje declarativo de transformacion para documentos XML. Las hojas de estilo usan templates, modos, expresiones XPath, variables, funciones, claves, imports y declaraciones de salida para encontrar nodos en arboles fuente y producir XML, HTML, texto u otros resultados estructurados.\n\nSe usa en sistemas de publicacion, intercambio de datos empresarial, conversion de documentos, pipelines XML, integraciones basadas en estandares, flujos XML historicos del navegador y sistemas que necesitan transformaciones repetibles entre formatos documentales.",
    },
  },
} satisfies Language;
