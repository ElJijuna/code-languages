import type { Language } from '../types';

export const dax = {
  slug: 'dax',
  publishedDate: '2009-07-01',
  extensions: ['.dax'],
  author: 'Microsoft',
  website: 'https://learn.microsoft.com/en-us/dax/',
  paradigms: ['declarative', 'functional'],
  tooling: {
    ecosystems: [
      'Microsoft Power BI',
      'Excel',
      'Azure Analysis Services',
      'SQL Server Analysis Services',
    ],
  },
  version: 'DAX 2025',
  logo: 'https://dummyimage.com/32x32/F2C811/000000.png&text=DAX',
  color: '#F2C811',
  i18n: {
    en: {
      name: 'DAX',
      description:
        'A formula language for data modeling and analysis in Microsoft Power BI and Excel.',
      longDescription:
        'Data Analysis Expressions (DAX) is a formula language used in Power BI, Power Pivot for Excel, and Analysis Services.\n\nDAX provides functions and operators for calculations on tables and columns in tabular data models, supporting measures, calculated columns, and KPIs for business intelligence reporting.',
    },
    es: {
      name: 'DAX',
      description:
        'Un lenguaje de fórmulas para modelado y análisis de datos en Microsoft Power BI y Excel.',
      longDescription:
        'Data Analysis Expressions (DAX) es un lenguaje de fórmulas utilizado en Power BI, Power Pivot para Excel y Analysis Services.\n\nDAX proporciona funciones y operadores para calculos sobre tablas y columnas en modelos de datos tabulares, soportando medidas, columnas calculadas y KPIs para informes de inteligencia de negocio.',
    },
    it: {
      name: 'DAX',
      description:
        'Un linguaggio di formule per la modellazione e analisi dei dati in Microsoft Power BI ed Excel.',
      longDescription:
        'Data Analysis Expressions (DAX) e un linguaggio di formule utilizzato in Power BI, Power Pivot per Excel e Analysis Services.\n\nDAX fornisce funzioni e operatori per i calcoli su tabelle e colonne in modelli di dati tabulari, supportando misure, colonne calcolate e KPI per i report di business intelligence.',
    },
    fr: {
      name: 'DAX',
      description:
        "Un langage de formules pour la modélisation et l'analyse des données dans Microsoft Power BI et Excel.",
      longDescription:
        "Data Analysis Expressions (DAX) est un langage de formules utilisé dans Power BI, Power Pivot pour Excel et Analysis Services.\n\nDAX fournit des fonctions et des opérateurs pour les calculs sur des tables et des colonnes dans des modèles de données tabulaires, prenant en charge les mesures, les colonnes calculées et les indicateurs clés de performance pour les rapports d'informatique décisionnelle.",
    },
    de: {
      name: 'DAX',
      description:
        'Eine Formelsprache für Datenmodellierung und -analyse in Microsoft Power BI und Excel.',
      longDescription:
        'Data Analysis Expressions (DAX) ist eine Formelsprache, die in Power BI, Power Pivot für Excel und Analysis Services verwendet wird.\n\nDAX bietet Funktionen und Operatoren für Berechnungen über Tabellen und Spalten in tabellarischen Datenmodellen und unterstützt Measures, berechnete Spalten und KPIs für Business-Intelligence-Berichte.',
    },
    pt: {
      name: 'DAX',
      description:
        'Uma linguagem de fórmulas para modelagem e análise de dados no Microsoft Power BI e Excel.',
      longDescription:
        'Data Analysis Expressions (DAX) é uma linguagem de fórmulas usada no Power BI, Power Pivot para Excel e Analysis Services.\n\nO DAX fornece funções e operadores para cálculos em tabelas e colunas em modelos de dados tabulares, suportando medidas, colunas calculadas e KPIs para relatórios de business intelligence.',
    },
  },
} satisfies Language;
