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
  },
} satisfies Language;
