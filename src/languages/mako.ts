import type { Language } from "../types";

export const mako = {
  slug: "mako",
  publishedDate: "2006-07-17",
  extensions: [".mako", ".mao"],
  author: "Michael Bayer / Mako contributors",
  website: "https://www.makotemplates.org",
  paradigms: ["templating", "declarative", "scripting"],
  tooling: {
    runtimes: ["Python"],
    packageManagers: ["pip", "uv", "Poetry"],
    ecosystems: ["Python", "Web", "Documentation"],
  },
  version: "1.3.10",
  logo: "https://cdn.simpleicons.org/python/3776AB",
  color: "#3776AB",
  i18n: {
    en: {
      name: "Mako",
      description: "A Python template language for generating text, HTML, and source artifacts.",
      longDescription:
        "Mako is a Python template language that mixes text with expressions, control blocks, inheritance, includes, and reusable definitions. Templates compile to Python code, which keeps it close to the host language.\n\nIt is used for web views, documentation, code generation, configuration rendering, and projects that need expressive Python-backed templates.",
    },
    es: {
      name: "Mako",
      description:
        "Un lenguaje de plantillas de Python para generar texto, HTML y artefactos fuente.",
      longDescription:
        "Mako es un lenguaje de plantillas de Python que mezcla texto con expresiones, bloques de control, herencia, includes y definiciones reutilizables. Las plantillas compilan a codigo Python y quedan cerca del lenguaje anfitrion.\n\nSe usa en vistas web, documentacion, generacion de codigo, renderizado de configuracion y proyectos que necesitan plantillas expresivas respaldadas por Python.",
    },
    it: {
      name: "Mako",
      description:
        "Un linguaggio di template Python per la generazione di testo, HTML e artefatti di codice.",
      longDescription:
        "Mako e un linguaggio di template Python che combina testo con espressioni, blocchi di controllo, ereditarieta, inclusioni e definizioni riutilizzabili. I template vengono compilati in codice Python, il che li mantiene strettamente legati al linguaggio host.\n\nViene utilizzato per visualizzazioni web, documentazione, generazione di codice, rendering di configurazioni e progetti che richiedono template Python espressivi.",
    },
    fr: {
      name: "Mako",
      description:
        "Un langage de modele Python pour generer du texte, du HTML et des artefacts source.",
      longDescription:
        "Mako est un langage de modele Python qui combine du texte avec des expressions, des blocs de controle, l'heritage, les inclusions et des definitions reutilisables. Les modeles se compilent en code Python, ce qui les maintient proche du langage hote.\n\nIl est utilise pour les vues web, la documentation, la generation de code, le rendu de configuration et les projets qui necessitent des modeles Python expressifs.",
    },
  },
} satisfies Language;
