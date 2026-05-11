import type { Language } from "../types";

export const xml = {
  slug: "xml",
  publishedDate: "1998-02-10",
  extensions: [".xml", ".xsd", ".xsl", ".xslt"],
  author: "World Wide Web Consortium",
  website: "https://www.w3.org/TR/xml/",
  paradigms: ["declarative", "markup", "data-serialization"],
  version: "XML 1.0 Fifth Edition",
  logo: "https://upload.wikimedia.org/wikipedia/commons/6/68/XML.svg",
  i18n: {
    en: {
      name: "XML",
      description:
        "A markup language for structured documents, configuration files, and data interchange.",
      longDescription:
        "XML defines a text-based format for representing structured information with custom elements, attributes, namespaces, schemas, and transformation workflows.\n\nIt is widely used in configuration files, enterprise integrations, document formats, web services, publishing systems, and standards that need portable, self-describing data.",
    },
    es: {
      name: "XML",
      description:
        "Un lenguaje de marcado para documentos estructurados, archivos de configuracion e intercambio de datos.",
      longDescription:
        "XML define un formato basado en texto para representar informacion estructurada con elementos personalizados, atributos, espacios de nombres, esquemas y flujos de transformacion.\n\nSe usa ampliamente en archivos de configuracion, integraciones empresariales, formatos de documentos, servicios web, sistemas de publicacion y estandares que necesitan datos portables y autodescriptivos.",
    },
  },
} satisfies Language;
