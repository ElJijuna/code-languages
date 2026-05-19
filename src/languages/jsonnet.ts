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
  version: "0.22.0",
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
    de: {
      name: "Jsonnet",
      description:
        "Eine Daten-Templing-Sprache zum Generieren von JSON und verwandten Konfigurationsformaten.",
      longDescription:
        "Jsonnet f\u00fcgt JSON-\u00e4hnlicher Syntax Variablen, Funktionen, Importe, Bedingungen, Objektkomposition und andere Programmierkonstrukte hinzu, um strukturierte Daten zu generieren.\n\nEs wird h\u00e4ufig f\u00fcr Kubernetes-Manifeste, Infrastrukturkonfigurationen, Anwendungs-Einstellungen und wiederverwendbare Konfigurationsbibliotheken verwendet, in denen einfaches JSON repetitiv wird.",
    },
    pt: {
      name: "Jsonnet",
      description:
        "Uma linguagem de modelagem de dados para gerar JSON e formatos de configura\u00e7\u00e3o relacionados.",
      longDescription:
        "Jsonnet adiciona vari\u00e1veis, fun\u00e7\u00f5es, importa\u00e7\u00f5es, condicionais, composi\u00e7\u00e3o de objetos e outras constru\u00e7\u00f5es de programa\u00e7\u00e3o a uma sintaxe semelhante a JSON para gerar dados estruturados.\n\n\u00c9 comumente usada para manifestos do Kubernetes, configura\u00e7\u00e3o de infraestrutura, configura\u00e7\u00f5es de aplicativos e bibliotecas de configura\u00e7\u00e3o reutiliz\u00e1veis, onde o JSON simples se torna repetitivo.",
    },
  },
} satisfies Language;
