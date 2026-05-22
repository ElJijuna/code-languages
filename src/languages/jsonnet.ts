import type { Language } from "../types";

export const jsonnet = {
  slug: "jsonnet",
  publishedDate: "2014-04-01",
  extensions: [".jsonnet", ".libsonnet"],
  author: "Google",
  website: "https://jsonnet.org",
  paradigms: ["functional", "declarative", "configuration"],
  tooling: {
    runtimes: ["Jsonnet", "go-jsonnet"],
    packageManagers: ["jsonnet-bundler"],
    ecosystems: ["Configuration", "Kubernetes", "Infrastructure"],
  },
  version: "0.21.0",
  logo: "https://jsonnet.org/img/isologo.svg",
  color: "#0064BD",
  i18n: {
    en: {
      name: "Jsonnet",
      description:
        "A data templating language for generating JSON and related configuration formats.",
      longDescription:
        "Jsonnet adds variables, functions, imports, conditionals, object composition, and other programming constructs to a JSON-like syntax for generating structured data.\n\nIt is commonly used for Kubernetes manifests, infrastructure configuration, application settings, and reusable configuration libraries where plain JSON becomes repetitive.",
    },
    es: {
      name: "Jsonnet",
      description:
        "Un lenguaje de plantillas de datos para generar JSON y formatos de configuracion relacionados.",
      longDescription:
        "Jsonnet agrega variables, funciones, imports, condicionales, composicion de objetos y otros constructos de programacion a una sintaxis similar a JSON para generar datos estructurados.\n\nSe usa comunmente en manifiestos de Kubernetes, configuracion de infraestructura, ajustes de aplicaciones y bibliotecas reutilizables de configuracion cuando JSON plano se vuelve repetitivo.",
    },
    it: {
      name: "Jsonnet",
      description:
        "Un linguaggio di templating per dati per generare JSON e formati di configurazione correlati.",
      longDescription:
        "Jsonnet aggiunge variabili, funzioni, importazioni, condizioni, composizione di oggetti e altri costrutti di programmazione a una sintassi simile a JSON per generare dati strutturati.\n\nE comunemente utilizzato per i manifesti di Kubernetes, la configurazione dell'infrastruttura, le impostazioni delle applicazioni e le librerie di configurazione riutilizzabili in cui JSON semplice diventa ripetitivo.",
    },
    fr: {
      name: "Jsonnet",
      description:
        "Un langage de modelisation de donnees pour generer des JSON et des formats de configuration connexes.",
      longDescription:
        "Jsonnet ajoute des variables, des fonctions, des importations, des conditions, la composition d'objets et d'autres constructions de programmation a une syntaxe semblable a JSON pour generer des donnees structurees.\n\nIl est couramment utilise pour les manifests Kubernetes, la configuration d'infrastructure, les parametres d'application et les bibliotheques de configuration reutilisables ou le JSON simple devient repetitif.",
    },
  },
} satisfies Language;
