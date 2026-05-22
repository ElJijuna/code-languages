import type { Language } from "../types";

export const promql = {
  slug: "promql",
  publishedDate: "2012-11-24",
  extensions: [".promql"],
  author: "Prometheus Authors",
  website: "https://prometheus.io/docs/prometheus/latest/querying/basics/",
  paradigms: ["query", "time-series", "declarative", "domain-specific"],
  tooling: {
    runtimes: ["Prometheus", "Thanos", "Mimir"],
    ecosystems: ["Observability", "Metrics", "Monitoring"],
  },
  version: "Prometheus 3.x",
  logo: "https://cdn.simpleicons.org/prometheus/E6522C",
  color: "#E6522C",
  i18n: {
    en: {
      name: "PromQL",
      description: "The Prometheus query language for selecting and aggregating metrics.",
      longDescription:
        "PromQL is the expression language used by Prometheus to select instant vectors, range vectors, scalars, and strings from time-series data. It includes label matching, arithmetic, aggregation, and functions for metric analysis.\n\nIt is used in dashboards, alerts, recording rules, troubleshooting, capacity analysis, and observability systems compatible with Prometheus queries.",
    },
    es: {
      name: "PromQL",
      description: "El lenguaje de consulta de Prometheus para seleccionar y agregar metricas.",
      longDescription:
        "PromQL es el lenguaje de expresiones que usa Prometheus para seleccionar vectores instantaneos, rangos, escalares y cadenas desde datos de series temporales. Incluye matching de labels, aritmetica, agregaciones y funciones para analizar metricas.\n\nSe usa en dashboards, alertas, recording rules, troubleshooting, analisis de capacidad y sistemas de observabilidad compatibles con consultas Prometheus.",
    },
    it: {
      name: "PromQL",
      description:
        "Il linguaggio di query di PromQL per la selezione e l'aggregazione di metriche.",
      longDescription:
        "PromQL e il linguaggio di espressione utilizzato da Prometheus per selezionare vettori istantanei, vettori di intervallo, scalari e stringhe dai dati di serie temporali. Include corrispondenza di etichette, operazioni aritmetiche, aggregazione e funzioni per l'analisi delle metriche.\n\nE utilizzato in dashboard, regole di allarme, regole di registrazione, risoluzione dei problemi, analisi della capacita e sistemi di osservabilita compatibili con le query di Prometheus.",
    },
    fr: {
      name: "PromQL",
      description: "Le langage de requete PromQL pour selectionner et agreger des metriques.",
      longDescription:
        "PromQL est le langage d'expressions utilise par Prometheus pour selectionner des vecteurs instantanes, des vecteurs de plage, des scalaires et des chaines de caracteres a partir de donnees de series temporelles. Il inclut la correspondance de balises, les operations arithmetiques, l'agregation et des fonctions pour l'analyse des metriques.\n\nIl est utilise dans les tableaux de bord, les alertes, les regles d'enregistrement, le depannage, l'analyse de la capacite et les systemes d'observabilite compatibles avec les requetes Prometheus.",
    },
  },
} satisfies Language;
