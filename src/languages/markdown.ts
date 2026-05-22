import type { Language } from "../types";

export const markdown = {
  slug: "markdown",
  publishedDate: "2004-03-19",
  extensions: [".md", ".markdown", ".mdown", ".mkd"],
  author: "John Gruber / Aaron Swartz",
  website: "https://daringfireball.net/projects/markdown/",
  paradigms: ["declarative", "markup"],
  version: "CommonMark 4.0",
  logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg",
  color: "#000000",
  i18n: {
    en: {
      name: "Markdown",
      description: "A lightweight markup language for writing formatted plain-text documents.",
      longDescription:
        "Markdown uses plain-text syntax to represent headings, lists, links, emphasis, code blocks, tables, and other common document structures.\n\nIt is widely used for README files, documentation, static sites, notes, issue trackers, and publishing workflows where readable source text matters.",
    },
    es: {
      name: "Markdown",
      description: "Un lenguaje de marcado ligero para escribir documentos de texto con formato.",
      longDescription:
        "Markdown usa sintaxis de texto plano para representar encabezados, listas, enlaces, enfasis, bloques de codigo, tablas y otras estructuras comunes de documentos.\n\nSe usa ampliamente en archivos README, documentacion, sitios estaticos, notas, gestores de incidencias y flujos de publicacion donde importa que el texto fuente sea legible.",
    },
    it: {
      name: "Markdown",
      description:
        "Un linguaggio di markup leggero per la scrittura di documenti di testo formattato.",
      longDescription:
        "Markdown utilizza la sintassi di testo semplice per rappresentare titoli, liste, link, enfasi, blocchi di codice, tabelle e altre strutture di documenti comuni.\n\nE ampiamente utilizzato per i file README, la documentazione, i siti statici, le note, i tracker di problemi e i flussi di lavoro di pubblicazione in cui il testo sorgente leggibile e importante.",
    },
    fr: {
      name: "Markdown",
      description: "Un langage de balisage leger pour la creation de documents texte formates.",
      longDescription:
        "Markdown utilise la syntaxe de texte brut pour representer les titres, les listes, les liens, l'emphase, les blocs de code, les tableaux et autres structures de documents courantes.\n\nIl est largement utilise pour les fichiers README, la documentation, les sites statiques, les notes, les systemes de suivi des problemes et les flux de travail de publication ou le texte source lisible est important.",
    },
  },
} satisfies Language;
