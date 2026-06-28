import type { Language } from '../types';

export const powerquery = {
  slug: 'powerquery',
  publishedDate: '2013-01-01',
  extensions: ['.pq', '.pqm'],
  author: 'Microsoft',
  website: 'https://learn.microsoft.com/en-us/powerquery-m/',
  paradigms: ['functional', 'declarative'],
  tooling: {
    ecosystems: ['Microsoft Power BI', 'Excel', 'Azure Data Factory', 'Microsoft Fabric'],
  },
  version: 'Power Query M 2025',
  logo: 'https://dummyimage.com/32x32/F2C811/000000.png&text=PQ',
  color: '#F2C811',
  i18n: {
    en: {
      name: 'Power Query M',
      description:
        'A functional language for data transformation and ETL in Microsoft Power BI and Excel.',
      longDescription:
        'Power Query M (also called the M formula language) is a functional language used in Microsoft Power BI, Excel, Azure Data Factory, and Microsoft Fabric for data transformation and ETL (extract, transform, load) workflows.\n\nM expressions describe a sequence of data transformation steps, from connecting to data sources to reshaping, filtering, and combining data for loading into a data model.',
    },
    es: {
      name: 'Power Query M',
      description:
        'Un lenguaje funcional para transformación de datos y ETL en Microsoft Power BI y Excel.',
      longDescription:
        'Power Query M (también llamado lenguaje de fórmulas M) es un lenguaje funcional utilizado en Microsoft Power BI, Excel, Azure Data Factory y Microsoft Fabric para transformación de datos y flujos de trabajo ETL.\n\nLas expresiones M describen una secuencia de pasos de transformación de datos, desde la conexión con fuentes de datos hasta el reshaping, filtrado y combinación de datos para su carga en un modelo de datos.',
    },
    it: {
      name: 'Power Query M',
      description:
        'Un linguaggio funzionale per la trasformazione dei dati e ETL in Microsoft Power BI ed Excel.',
      longDescription:
        'Power Query M (detto anche linguaggio di formule M) e un linguaggio funzionale utilizzato in Microsoft Power BI, Excel, Azure Data Factory e Microsoft Fabric per la trasformazione dei dati e i flussi di lavoro ETL.\n\nLe espressioni M descrivono una sequenza di passaggi di trasformazione dei dati, dalla connessione alle origini dati alla rimodellazione, al filtraggio e alla combinazione dei dati per il caricamento in un modello di dati.',
    },
    fr: {
      name: 'Power Query M',
      description:
        'Un langage fonctionnel pour la transformation des données et ETL dans Microsoft Power BI et Excel.',
      longDescription:
        "Power Query M (également appelé langage de formules M) est un langage fonctionnel utilisé dans Microsoft Power BI, Excel, Azure Data Factory et Microsoft Fabric pour la transformation des données et les flux de travail ETL.\n\nLes expressions M décrivent une séquence d'étapes de transformation des données, de la connexion aux sources de données à la mise en forme, au filtrage et à la combinaison des données pour leur chargement dans un modèle de données.",
    },
    de: {
      name: 'Power Query M',
      description:
        'Eine funktionale Sprache für Datentransformation und ETL in Microsoft Power BI und Excel.',
      longDescription:
        'Power Query M (auch M-Formelsprache genannt) ist eine funktionale Sprache, die in Microsoft Power BI, Excel, Azure Data Factory und Microsoft Fabric für Datentransformation und ETL-Workflows verwendet wird.\n\nM-Ausdrücke beschreiben eine Abfolge von Datentransformationsschritten, von der Verbindung mit Datenquellen bis zur Umgestaltung, Filterung und Kombination von Daten für das Laden in ein Datenmodell.',
    },
    pt: {
      name: 'Power Query M',
      description:
        'Uma linguagem funcional para transformação de dados e ETL no Microsoft Power BI e Excel.',
      longDescription:
        'Power Query M (também chamado de linguagem de fórmulas M) é uma linguagem funcional usada no Microsoft Power BI, Excel, Azure Data Factory e Microsoft Fabric para transformação de dados e fluxos de trabalho ETL.\n\nAs expressões M descrevem uma sequência de etapas de transformação de dados, desde a conexão com fontes de dados até a reformulação, filtragem e combinação de dados para carregamento em um modelo de dados.',
    },
  },
} satisfies Language;
