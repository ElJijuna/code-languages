import type { Language } from '../types';

export const pineScript = {
  slug: 'pine-script',
  publishedDate: '2013-12-01',
  extensions: ['.pine'],
  author: 'TradingView',
  website: 'https://www.tradingview.com/pine-script-docs/',
  paradigms: ['domain-specific', 'time-series', 'declarative', 'scripting'],
  tooling: {
    runtimes: ['TradingView'],
    ecosystems: ['Charts', 'Trading', 'Technical Analysis'],
  },
  version: 'v6',
  logo: 'https://cdn.simpleicons.org/tradingview/131722',
  color: '#131722',
  i18n: {
    en: {
      name: 'Pine Script',
      description: "TradingView's language for indicators, strategies, and chart studies.",
      longDescription:
        'Pine Script is a domain-specific language for expressing calculations over chart bars, series values, indicators, alerts, and trading strategies in TradingView. Its execution model is centered on time-series data.\n\nIt is used for custom technical indicators, backtested strategies, chart overlays, alerts, and market analysis shared through TradingView.',
    },
    es: {
      name: 'Pine Script',
      description:
        'El lenguaje de TradingView para indicadores, estrategias y estudios de graficos.',
      longDescription:
        'Pine Script es un lenguaje de dominio especifico para expresar calculos sobre barras, series, indicadores, alertas y estrategias de trading en TradingView. Su modelo de ejecucion gira alrededor de datos temporales.\n\nSe usa en indicadores tecnicos personalizados, estrategias con backtesting, overlays de graficos, alertas y analisis de mercado compartido en TradingView.',
    },
    it: {
      name: 'Pine Script',
      description: 'Linguaggio di TradingView per indicatori, strategie e studi di grafici.',
      longDescription:
        'Pine Script e un linguaggio specifico per dominio per esprimere calcoli su barre di grafici, valori di serie, indicatori, avvisi e strategie di trading in TradingView. Il suo modello di esecuzione e incentrato sui dati di serie temporali.\n\nViene utilizzato per indicatori tecnici personalizzati, strategie testate, sovrapposizioni di grafici, avvisi e analisi di mercato condivise tramite TradingView.',
    },
    fr: {
      name: 'Pine Script',
      description:
        'Langage de TradingView pour les indicateurs, strategies et etudes de graphiques.',
      longDescription:
        "Pine Script est un langage specifique a un domaine pour exprimer des calculs sur les barres de graphique, les valeurs de series, les indicateurs, les alertes et les strategies de trading dans TradingView. Son modele d'execution est centre sur les donnees de series temporelles.\n\nIl est utilise pour les indicateurs techniques personnalises, les strategies testees, les superpositions de graphiques, les alertes et l'analyse du marche partagee via TradingView.",
    },
    de: {
      name: 'Pine Script',
      description:
        'Die Programmiersprache für Indikatoren, Strategien und Chart-Studien von TradingView.',
      longDescription:
        'Pine Script ist eine domänenspezifische Sprache zur Auswertung von Berechnungen über Chart-Balken, Serienwerte, Indikatoren, Alarme und Handelsstrategien in TradingView. Ihr Ausführungsmodell basiert auf Zeitreihendaten.\n\nSie wird für benutzerdefinierte technische Indikatoren, backtestete Strategien, Chart-Überlagerungen, Alarme und Marktanalyse verwendet, die über TradingView geteilt werden.',
    },
    pt: {
      name: 'Pine Script',
      description: 'Linguagem de TradingView para indicadores, estratégias e estudos de gráficos.',
      longDescription:
        'Pine Script é uma linguagem específica para expressar cálculos sobre barras de gráficos, valores de séries, indicadores, alertas e estratégias de negociação no TradingView. Seu modelo de execução é centrado em dados de séries temporais.\n\nÉ utilizada para indicadores técnicos personalizados, estratégias testadas, sobreposições de gráficos, alertas e análise de mercado compartilhadas no TradingView.',
    },
  },
} satisfies Language;
