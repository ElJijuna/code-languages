import type { Language } from "../types";

export const asciidoc = {
  slug: "asciidoc",
  publishedDate: "2002-11-25",
  extensions: [".adoc", ".asciidoc", ".asc"],
  author: "Stuart Rackham / AsciiDoc Working Group",
  website: "https://asciidoc.org",
  paradigms: ["markup", "documentation", "declarative", "publishing"],
  tooling: {
    runtimes: ["Asciidoctor", "Asciidoctor.js", "Antora"],
    packageManagers: ["RubyGems", "npm", "Maven"],
    ecosystems: ["Documentation", "Publishing", "Technical Writing", "Static Sites"],
  },
  version: "pre-spec",
  logo: "https://cdn.simpleicons.org/asciidoctor/E40046",
  color: "#E40046",
  i18n: {
    en: {
      name: "AsciiDoc",
      description:
        "A plain-text markup language for technical documentation, books, and publishing.",
      longDescription:
        "AsciiDoc is a readable markup language for writing structured documents with sections, attributes, lists, tables, admonitions, cross references, includes, source blocks, and rich publishing metadata. It is designed to remain comfortable in plain text while supporting professional output formats.\n\nIt is used for product documentation, books, technical manuals, API guides, knowledge bases, Antora documentation sites, and publishing workflows that need semantic source files under version control.",
    },
    es: {
      name: "AsciiDoc",
      description:
        "Un lenguaje de marcado en texto plano para documentacion tecnica, libros y publicacion.",
      longDescription:
        "AsciiDoc es un lenguaje de marcado legible para escribir documentos estructurados con secciones, atributos, listas, tablas, admoniciones, referencias cruzadas, includes, bloques de codigo y metadatos de publicacion. Esta pensado para ser comodo en texto plano y aun asi soportar salidas profesionales.\n\nSe usa en documentacion de producto, libros, manuales tecnicos, guias de API, bases de conocimiento, sitios Antora y flujos de publicacion que necesitan archivos fuente semanticos bajo control de versiones.",
    },
    it: {
      name: "AsciiDoc",
      description:
        "Un linguaggio di markup di testo semplice per la documentazione tecnica, libri e pubblicazioni.",
      longDescription:
        "AsciiDoc e un linguaggio di markup leggibile per la scrittura di documenti strutturati con sezioni, attributi, liste, tabelle, avvisi, riferimenti incrociati, inclusioni, blocchi di codice e metadati di pubblicazione ricchi. E progettato per rimanere confortevole in testo semplice, supportando al contempo formati di output professionali.\n\nViene utilizzato per la documentazione di prodotti, libri, manuali tecnici, guide API, basi di conoscenza, siti di documentazione Antora e flussi di lavoro di pubblicazione che richiedono file di origine semantici sotto controllo di versione.",
    },
    fr: {
      name: "AsciiDoc",
      description:
        "Un langage de balisage textuel pour la documentation technique, les livres et la publication.",
      longDescription:
        "AsciiDoc est un langage de balisage lisible pour ecrire des documents structures avec des sections, des attributs, des listes, des tableaux, des avertissements, des references croisees, des inclusions, des blocs de code et des metadonnees de publication riches. Il est concu pour rester confortable en texte brut tout en prenant en charge les formats de sortie professionnels.\n\nIl est utilise pour la documentation de produits, les livres, les manuels techniques, les guides API, les bases de connaissances, les sites de documentation Antora et les flux de travail de publication qui necessitent des fichiers sources semantiques sous controle de version.",
    },
  },
} satisfies Language;
