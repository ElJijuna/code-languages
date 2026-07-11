import type { Language } from '@/types';

export const kql = {
  slug: 'kql',
  publishedDate: '2014-01-01',
  extensions: ['.kql'],
  author: 'Microsoft',
  website: 'https://learn.microsoft.com/en-us/kusto/query/',
  paradigms: ['query', 'data analysis'],
  tooling: {
    runtimes: ['Azure Data Explorer', 'Microsoft Sentinel', 'Azure Monitor'],
    ecosystems: ['Observability', 'Security analytics'],
  },
  version: 'stable',
  logo: 'https://learn.microsoft.com/favicon.ico',
  color: '#0078D4',
  i18n: {
    en: {
      name: 'KQL',
      description: 'A query language for Kusto, logs, telemetry, and security analytics.',
      longDescription:
        'Kusto Query Language is used to explore, filter, aggregate, and visualize large volumes of structured and semi-structured data. Queries flow through tabular operators for projection, summarization, joins, time windows, parsing, and rendering.\n\nKQL is central to Azure Data Explorer, Azure Monitor, Microsoft Sentinel, and related telemetry platforms. It is common in observability, incident response, threat hunting, performance analysis, and operational dashboards.',
    },
    es: {
      name: 'KQL',
      description: 'Lenguaje de consultas para Kusto, logs, telemetria y analitica de seguridad.',
      longDescription:
        'Kusto Query Language se usa para explorar, filtrar, agregar y visualizar grandes volumenes de datos estructurados y semiestructurados. Las consultas fluyen por operadores tabulares para proyectar, resumir, unir, analizar ventanas de tiempo, parsear y renderizar.\n\nKQL es central en Azure Data Explorer, Azure Monitor, Microsoft Sentinel y plataformas de telemetria relacionadas. Es comun en observabilidad, respuesta a incidentes, threat hunting, analisis de rendimiento y dashboards operativos.',
    },
    it: {
      name: 'KQL',
      description: 'Linguaggio di query per Kusto, log, telemetria e security analytics.',
      longDescription:
        'Kusto Query Language e usato per esplorare, filtrare, aggregare e visualizzare grandi volumi di dati strutturati e semistrutturati. Le query scorrono attraverso operatori tabellari per proiezione, riepilogo, join, finestre temporali, parsing e rendering.\n\nKQL e centrale in Azure Data Explorer, Azure Monitor, Microsoft Sentinel e piattaforme di telemetria collegate. E comune in osservabilita, risposta agli incidenti, threat hunting, analisi performance e dashboard operative.',
    },
    fr: {
      name: 'KQL',
      description: 'Langage de requete pour Kusto, logs, telemetrie et analyse securite.',
      longDescription:
        'Kusto Query Language sert a explorer, filtrer, agreger et visualiser de grands volumes de donnees structurees ou semi-structurees. Les requetes passent par des operateurs tabulaires pour projection, synthese, jointures, fenetres temporelles, parsing et rendu.\n\nKQL est central dans Azure Data Explorer, Azure Monitor, Microsoft Sentinel et plateformes de telemetrie liees. Il est courant en observabilite, reponse a incident, threat hunting, analyse performance et tableaux de bord operationnels.',
    },
    de: {
      name: 'KQL',
      description: 'Abfragesprache fur Kusto, Logs, Telemetrie und Sicherheitsanalyse.',
      longDescription:
        'Kusto Query Language wird genutzt, um grosse Mengen strukturierter und halbstrukturierter Daten zu untersuchen, filtern, aggregieren und visualisieren. Abfragen laufen durch tabellarische Operatoren fur Projektion, Zusammenfassung, Joins, Zeitfenster, Parsing und Darstellung.\n\nKQL ist zentral in Azure Data Explorer, Azure Monitor, Microsoft Sentinel und verwandten Telemetrieplattformen. Es ist verbreitet in Observability, Incident Response, Threat Hunting, Performanceanalyse und operativen Dashboards.',
    },
    pt: {
      name: 'KQL',
      description: 'Linguagem de consulta para Kusto, logs, telemetria e analise de seguranca.',
      longDescription:
        'Kusto Query Language e usada para explorar, filtrar, agregar e visualizar grandes volumes de dados estruturados e semiestruturados. Consultas passam por operadores tabulares para projecao, resumo, joins, janelas de tempo, parsing e renderizacao.\n\nKQL e central no Azure Data Explorer, Azure Monitor, Microsoft Sentinel e plataformas de telemetria relacionadas. E comum em observabilidade, resposta a incidentes, threat hunting, analise de desempenho e dashboards operacionais.',
    },
  },
} satisfies Language;
