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
  },
} satisfies Language;
