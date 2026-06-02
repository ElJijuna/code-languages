import type { Language } from '../types';

export const flux = {
  slug: 'flux',
  publishedDate: '2018-09-01',
  extensions: ['.flux'],
  author: 'InfluxData',
  website: 'https://www.influxdata.com/products/flux/',
  paradigms: ['functional', 'declarative'],
  tooling: {
    runtimes: ['InfluxDB', 'Flux CLI'],
    ecosystems: ['Time Series', 'Monitoring', 'Observability', 'InfluxDB'],
  },
  version: '0.197.0',
  logo: 'https://avatars.githubusercontent.com/u/5713248?v=4',
  color: '#22ADF6',
  i18n: {
    en: {
      name: 'Flux',
      description:
        'A functional data scripting language by InfluxData for querying, analyzing, and transforming time-series data in InfluxDB.',
      longDescription:
        'Flux is a functional data scripting and query language designed by InfluxData for working with time-series data. It replaced InfluxQL as the primary query language for InfluxDB 2.0 and provides a more expressive and composable approach to data transformation.\n\nFlux uses a pipe-forward operator (|>) to chain data transformations in a readable pipeline style. It supports filtering, grouping, windowing, aggregations, joins, and mathematical operations on time-series data. Flux is also capable of querying non-InfluxDB data sources and writing results back to databases, making it useful as a general ETL scripting language for monitoring and observability pipelines.',
    },
    es: {
      name: 'Flux',
      description:
        'Un lenguaje funcional de scripting de datos de InfluxData para consultar, analizar y transformar datos de series temporales en InfluxDB.',
      longDescription:
        'Flux es un lenguaje funcional de scripting y consultas diseñado por InfluxData para trabajar con datos de series temporales. Reemplazó a InfluxQL como lenguaje de consultas principal para InfluxDB 2.0 y proporciona un enfoque más expresivo y composable para la transformación de datos.\n\nFlux usa el operador pipe-forward (|>) para encadenar transformaciones de datos en un estilo de pipeline legible. Soporta filtrado, agrupación, ventanas temporales, agregaciones, joins y operaciones matemáticas sobre datos de series temporales.',
    },
    it: {
      name: 'Flux',
      description:
        'Un linguaggio funzionale di scripting dati di InfluxData per interrogare, analizzare e trasformare dati di serie temporali in InfluxDB.',
      longDescription:
        "Flux è un linguaggio funzionale di scripting e query progettato da InfluxData per lavorare con dati di serie temporali. Ha sostituito InfluxQL come linguaggio di query principale per InfluxDB 2.0 e fornisce un approccio più espressivo e componibile alla trasformazione dei dati.\n\nFlux usa l'operatore pipe-forward (|>) per concatenare trasformazioni di dati in uno stile di pipeline leggibile. Supporta filtraggio, raggruppamento, windowing, aggregazioni, join e operazioni matematiche su dati di serie temporali.",
    },
    fr: {
      name: 'Flux',
      description:
        "Un langage de script de données fonctionnel d'InfluxData pour interroger, analyser et transformer des données de séries temporelles dans InfluxDB.",
      longDescription:
        "Flux est un langage fonctionnel de script et de requête conçu par InfluxData pour travailler avec des données de séries temporelles. Il a remplacé InfluxQL comme langage de requête principal pour InfluxDB 2.0 et offre une approche plus expressive et composable de la transformation des données.\n\nFlux utilise l'opérateur pipe-forward (|>) pour chaîner les transformations de données dans un style de pipeline lisible. Il prend en charge le filtrage, le regroupement, le fenêtrage, les agrégations, les jointures et les opérations mathématiques sur les données de séries temporelles.",
    },
    de: {
      name: 'Flux',
      description:
        'Eine funktionale Datenskriptsprache von InfluxData zum Abfragen, Analysieren und Transformieren von Zeitreihendaten in InfluxDB.',
      longDescription:
        'Flux ist eine funktionale Datenskript- und Abfragesprache, die von InfluxData für die Arbeit mit Zeitreihendaten entwickelt wurde. Sie ersetzte InfluxQL als primäre Abfragesprache für InfluxDB 2.0 und bietet einen ausdrucksstärkeren und kompositionsfähigeren Ansatz zur Datentransformation.\n\nFlux verwendet den Pipe-Forward-Operator (|>), um Datentransformationen in einem lesbaren Pipeline-Stil zu verketten. Es unterstützt Filterung, Gruppierung, Fenstering, Aggregationen, Joins und mathematische Operationen auf Zeitreihendaten.',
    },
    pt: {
      name: 'Flux',
      description:
        'Uma linguagem funcional de script de dados da InfluxData para consultar, analisar e transformar dados de séries temporais no InfluxDB.',
      longDescription:
        'Flux é uma linguagem funcional de script e consulta projetada pela InfluxData para trabalhar com dados de séries temporais. Substituiu o InfluxQL como linguagem de consulta principal para o InfluxDB 2.0 e fornece uma abordagem mais expressiva e composível para transformação de dados.\n\nFlux usa o operador pipe-forward (|>) para encadear transformações de dados em um estilo de pipeline legível. Suporta filtragem, agrupamento, janelamento, agregações, joins e operações matemáticas em dados de séries temporais.',
    },
  },
} satisfies Language;
