import type { Language } from "../types";

export const pineScript = {
  slug: "pine-script",
  publishedDate: "2013-12-01",
  extensions: [".pine"],
  author: "TradingView",
  website: "https://www.tradingview.com/pine-script-docs/",
  paradigms: ["domain-specific", "time-series", "declarative", "scripting"],
  tooling: {
    runtimes: ["TradingView"],
    ecosystems: ["Charts", "Trading", "Technical Analysis"],
  },
  version: "v6",
  logo: "https://cdn.simpleicons.org/tradingview/131722",
  color: "#131722",
  i18n: {
    en: {
      name: "Pine Script",
      description: "TradingView's language for indicators, strategies, and chart studies.",
      longDescription:
        "Pine Script is a domain-specific language for expressing calculations over chart bars, series values, indicators, alerts, and trading strategies in TradingView. Its execution model is centered on time-series data.\n\nIt is used for custom technical indicators, backtested strategies, chart overlays, alerts, and market analysis shared through TradingView.",
    },
    es: {
      name: "Pine Script",
      description:
        "El lenguaje de TradingView para indicadores, estrategias y estudios de graficos.",
      longDescription:
        "Pine Script es un lenguaje de dominio especifico para expresar calculos sobre barras, series, indicadores, alertas y estrategias de trading en TradingView. Su modelo de ejecucion gira alrededor de datos temporales.\n\nSe usa en indicadores tecnicos personalizados, estrategias con backtesting, overlays de graficos, alertas y analisis de mercado compartido en TradingView.",
    },
    it: {
      name: "Pine Script",
      description: "Linguaggio di TradingView per indicatori, strategie e studi di grafici.",
      longDescription:
        "Pine Script e un linguaggio specifico per dominio per esprimere calcoli su barre di grafici, valori di serie, indicatori, avvisi e strategie di trading in TradingView. Il suo modello di esecuzione e incentrato sui dati di serie temporali.\n\nViene utilizzato per indicatori tecnici personalizzati, strategie testate, sovrapposizioni di grafici, avvisi e analisi di mercato condivise tramite TradingView.",
    },
    fr: {
      name: "Pine Script",
      description:
        "Langage de TradingView pour les indicateurs, strategies et etudes de graphiques.",
      longDescription:
        "Pine Script est un langage specifique a un domaine pour exprimer des calculs sur les barres de graphique, les valeurs de series, les indicateurs, les alertes et les strategies de trading dans TradingView. Son modele d'execution est centre sur les donnees de series temporelles.\n\nIl est utilise pour les indicateurs techniques personnalises, les strategies testees, les superpositions de graphiques, les alertes et l'analyse du marche partagee via TradingView.",
    },
    de: {
      name: "Pine Script",
      description:
        "Die Programmiersprache f\u00fcr Indikatoren, Strategien und Chart-Studien von TradingView.",
      longDescription:
        "Pine Script ist eine dom\u00e4nenspezifische Sprache zur Auswertung von Berechnungen \u00fcber Chart-Balken, Serienwerte, Indikatoren, Alarme und Handelsstrategien in TradingView. Ihr Ausf\u00fchrungsmodell basiert auf Zeitreihendaten.\n\nSie wird f\u00fcr benutzerdefinierte technische Indikatoren, backtestete Strategien, Chart-\u00dcberlagerungen, Alarme und Marktanalyse verwendet, die \u00fcber TradingView geteilt werden.",
    },
    pt: {
      name: "Pine Script",
      description:
        "Linguagem de TradingView para indicadores, estrat\u00e9gias e estudos de gr\u00e1ficos.",
      longDescription:
        "Pine Script \u00e9 uma linguagem espec\u00edfica para expressar c\u00e1lculos sobre barras de gr\u00e1ficos, valores de s\u00e9ries, indicadores, alertas e estrat\u00e9gias de negocia\u00e7\u00e3o no TradingView. Seu modelo de execu\u00e7\u00e3o \u00e9 centrado em dados de s\u00e9ries temporais.\n\n\u00c9 utilizada para indicadores t\u00e9cnicos personalizados, estrat\u00e9gias testadas, sobreposi\u00e7\u00f5es de gr\u00e1ficos, alertas e an\u00e1lise de mercado compartilhadas no TradingView.",
    },
  },
} satisfies Language;
