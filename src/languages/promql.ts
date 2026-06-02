import type { Language } from '../types';

export const promql = {
  slug: 'promql',
  publishedDate: '2012-11-24',
  extensions: ['.promql'],
  author: 'Prometheus Authors',
  website: 'https://prometheus.io/docs/prometheus/latest/querying/basics/',
  paradigms: ['query', 'time-series', 'declarative', 'domain-specific'],
  tooling: {
    runtimes: ['Prometheus', 'Thanos', 'Mimir'],
    ecosystems: ['Observability', 'Metrics', 'Monitoring'],
  },
  version: 'Prometheus 3.x',
  logo: 'https://cdn.simpleicons.org/prometheus/E6522C',
  color: '#E6522C',
  i18n: {
    en: {
      name: 'PromQL',
      description: 'The Prometheus query language for selecting and aggregating metrics.',
      longDescription:
        'PromQL is the expression language used by Prometheus to select instant vectors, range vectors, scalars, and strings from time-series data. It includes label matching, arithmetic, aggregation, and functions for metric analysis.\n\nIt is used in dashboards, alerts, recording rules, troubleshooting, capacity analysis, and observability systems compatible with Prometheus queries.',
    },
    es: {
      name: 'PromQL',
      description: 'El lenguaje de consulta de Prometheus para seleccionar y agregar metricas.',
      longDescription:
        'PromQL es el lenguaje de expresiones que usa Prometheus para seleccionar vectores instantaneos, rangos, escalares y cadenas desde datos de series temporales. Incluye matching de labels, aritmetica, agregaciones y funciones para analizar metricas.\n\nSe usa en dashboards, alertas, recording rules, troubleshooting, analisis de capacidad y sistemas de observabilidad compatibles con consultas Prometheus.',
    },
    it: {
      name: 'PromQL',
      description:
        "Il linguaggio di query di PromQL per la selezione e l'aggregazione di metriche.",
      longDescription:
        "PromQL e il linguaggio di espressione utilizzato da Prometheus per selezionare vettori istantanei, vettori di intervallo, scalari e stringhe dai dati di serie temporali. Include corrispondenza di etichette, operazioni aritmetiche, aggregazione e funzioni per l'analisi delle metriche.\n\nE utilizzato in dashboard, regole di allarme, regole di registrazione, risoluzione dei problemi, analisi della capacita e sistemi di osservabilita compatibili con le query di Prometheus.",
    },
    fr: {
      name: 'PromQL',
      description: 'Le langage de requete PromQL pour selectionner et agreger des metriques.',
      longDescription:
        "PromQL est le langage d'expressions utilise par Prometheus pour selectionner des vecteurs instantanes, des vecteurs de plage, des scalaires et des chaines de caracteres a partir de donnees de series temporelles. Il inclut la correspondance de balises, les operations arithmetiques, l'agregation et des fonctions pour l'analyse des metriques.\n\nIl est utilise dans les tableaux de bord, les alertes, les regles d'enregistrement, le depannage, l'analyse de la capacite et les systemes d'observabilite compatibles avec les requetes Prometheus.",
    },
    de: {
      name: 'PromQL',
      description: 'Die Prometheus-Abfragesprache zum Ausw\u00e4hlen und Aggregieren von Metriken.',
      longDescription:
        'PromQL ist die Ausdruckssprache, die von Prometheus verwendet wird, um momentane Werte, Bereichswerte, Skalare und Strings aus Zeitreihendaten auszuw\u00e4hlen. Sie umfasst Label-Matching, arithmetische Operationen, Aggregation und Funktionen zur Metrikanalyse.\n\nSie wird in Dashboards, Alarmen, Aufzeichnungsschemen, zur Fehlerbehebung, zur Kapazit\u00e4tsanalyse und in Observability-Systemen verwendet, die Prometheus-Abfragen unterst\u00fctzen.',
    },
    pt: {
      name: 'PromQL',
      description: 'A linguagem de consulta do Prometheus para selecionar e agregar m\u00e9tricas.',
      longDescription:
        'A PromQL \u00e9 a linguagem de express\u00e3o usada pelo Prometheus para selecionar vetores instant\u00e2neos, vetores de intervalo, escalares e strings de dados de s\u00e9ries temporais. Inclui correspond\u00eancia de r\u00f3tulos, opera\u00e7\u00f5es aritm\u00e9ticas, agrega\u00e7\u00e3o e fun\u00e7\u00f5es para an\u00e1lise de m\u00e9tricas.\n\n\u00c9 usada em pain\u00e9is, alertas, regras de registro, solu\u00e7\u00e3o de problemas, an\u00e1lise de capacidade e sistemas de observabilidade compat\u00edveis com consultas do Prometheus.',
    },
  },
} satisfies Language;
