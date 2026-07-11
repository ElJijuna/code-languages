import type { Language } from '@/types';

export const spl = {
  slug: 'spl',
  publishedDate: '2006-01-01',
  extensions: ['.spl'],
  author: 'Splunk',
  website: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/WhatsInThisManual',
  paradigms: ['query', 'pipeline'],
  tooling: {
    runtimes: ['Splunk Enterprise', 'Splunk Cloud Platform'],
    ecosystems: ['Observability', 'Security analytics'],
  },
  version: 'stable',
  logo: 'https://cdn.simpleicons.org/splunk/000000',
  color: '#000000',
  i18n: {
    en: {
      name: 'SPL',
      description: 'Splunk Search Processing Language for searching and analyzing machine data.',
      longDescription:
        'Splunk Search Processing Language is a pipeline language for searching, transforming, correlating, and visualizing machine data. Commands filter events, extract fields, calculate statistics, join streams, build time series, and produce dashboard-ready results.\n\nSPL is used in log analytics, observability, security operations, incident response, compliance, and operational intelligence. Its command pipeline lets analysts move from raw events to metrics, alerts, reports, and investigations.',
    },
    es: {
      name: 'SPL',
      description: 'Splunk Search Processing Language para buscar y analizar datos de maquinas.',
      longDescription:
        'Splunk Search Processing Language es un lenguaje de pipelines para buscar, transformar, correlacionar y visualizar datos de maquinas. Los comandos filtran eventos, extraen campos, calculan estadisticas, unen flujos, crean series temporales y producen resultados listos para dashboards.\n\nSPL se usa en analitica de logs, observabilidad, operaciones de seguridad, respuesta a incidentes, cumplimiento e inteligencia operativa. Su pipeline permite pasar de eventos crudos a metricas, alertas, reportes e investigaciones.',
    },
    it: {
      name: 'SPL',
      description: 'Splunk Search Processing Language per cercare e analizzare dati macchina.',
      longDescription:
        'Splunk Search Processing Language e un linguaggio a pipeline per cercare, trasformare, correlare e visualizzare dati macchina. I comandi filtrano eventi, estraggono campi, calcolano statistiche, uniscono flussi, creano serie temporali e producono risultati pronti per dashboard.\n\nSPL e usato in log analytics, osservabilita, security operations, risposta incidenti, compliance e intelligence operativa. La sua pipeline permette agli analisti di passare da eventi grezzi a metriche, alert, report e indagini.',
    },
    fr: {
      name: 'SPL',
      description: 'Splunk Search Processing Language pour chercher et analyser donnees machine.',
      longDescription:
        'Splunk Search Processing Language est un langage en pipeline pour chercher, transformer, correler et visualiser des donnees machine. Les commandes filtrent evenements, extraient champs, calculent statistiques, joignent flux, construisent series temporelles et produisent des resultats pour tableaux de bord.\n\nSPL est utilise en analyse de logs, observabilite, operations securite, reponse a incident, conformite et intelligence operationnelle. Son pipeline aide a passer des evenements bruts aux metriques, alertes, rapports et enquetes.',
    },
    de: {
      name: 'SPL',
      description:
        'Splunk Search Processing Language zum Suchen und Analysieren von Maschinendaten.',
      longDescription:
        'Splunk Search Processing Language ist eine Pipeline-Sprache zum Suchen, Transformieren, Korrelieren und Visualisieren von Maschinendaten. Befehle filtern Events, extrahieren Felder, berechnen Statistiken, verbinden Streams, bauen Zeitreihen und erzeugen Dashboard-Ergebnisse.\n\nSPL wird in Log Analytics, Observability, Security Operations, Incident Response, Compliance und operativer Intelligenz genutzt. Die Befehlspipeline fuhrt von Rohereignissen zu Metriken, Alerts, Reports und Untersuchungen.',
    },
    pt: {
      name: 'SPL',
      description: 'Splunk Search Processing Language para buscar e analisar dados de maquinas.',
      longDescription:
        'Splunk Search Processing Language e uma linguagem de pipeline para buscar, transformar, correlacionar e visualizar dados de maquinas. Comandos filtram eventos, extraem campos, calculam estatisticas, juntam fluxos, criam series temporais e produzem resultados para dashboards.\n\nSPL e usada em analise de logs, observabilidade, operacoes de seguranca, resposta a incidentes, conformidade e inteligencia operacional. Seu pipeline leva analistas de eventos brutos a metricas, alertas, relatorios e investigacoes.',
    },
  },
} satisfies Language;
