import type { Language } from '../types';

export const zeek = {
  slug: 'zeek',
  publishedDate: '1995-01-01',
  extensions: ['.zeek', '.bro'],
  author: 'Vern Paxson / Zeek Project',
  website: 'https://zeek.org',
  paradigms: ['event-driven', 'network-analysis', 'domain-specific', 'scripting'],
  tooling: {
    runtimes: ['Zeek'],
    packageManagers: ['zkg'],
    ecosystems: ['Network Security', 'Observability', 'Incident Response'],
  },
  version: '8.0.4',
  logo: 'https://avatars.githubusercontent.com/u/10666805?v=4',
  color: '#8B1E3F',
  i18n: {
    en: {
      name: 'Zeek',
      description: 'An event-driven scripting language for network analysis and security policy.',
      longDescription:
        'Zeek scripts describe events, records, analyzers, notices, logging, and policy logic over network traffic observed by the Zeek monitor. The language lets analysts extend protocol and detection behavior.\n\nIt is used in network security monitoring, incident response, traffic analysis, telemetry pipelines, and site-specific security policy.',
    },
    es: {
      name: 'Zeek',
      description: 'Un lenguaje event-driven para analisis de red y politicas de seguridad.',
      longDescription:
        'Los scripts Zeek describen eventos, records, analyzers, notices, logging y logica de politica sobre trafico de red observado por el monitor Zeek. El lenguaje permite extender comportamiento de protocolos y deteccion.\n\nSe usa en monitoreo de seguridad de red, respuesta a incidentes, analisis de trafico, pipelines de telemetria y politicas de seguridad especificas del sitio.',
    },
    it: {
      name: 'Zeek',
      description:
        "Un linguaggio di scripting basato su eventi per l'analisi di rete e le politiche di sicurezza.",
      longDescription:
        "Gli script di Zeek descrivono eventi, record, analizzatori, avvisi, registrazione e logica di policy relativi al traffico di rete osservato dal monitor Zeek. Il linguaggio consente agli analisti di estendere il comportamento dei protocolli e del rilevamento.\n\nViene utilizzato nel monitoraggio della sicurezza di rete, nella risposta agli incidenti, nell'analisi del traffico, nei pipeline di telemetria e nelle politiche di sicurezza specifiche del sito.",
    },
    fr: {
      name: 'Zeek',
      description:
        "Un langage de script oriente evenements pour l'analyse de reseau et les politiques de securite.",
      longDescription:
        "Les scripts Zeek decrivent les evenements, les enregistrements, les analyseurs, les notifications, la journalisation et la logique de politique sur le trafic reseau observe par le moniteur Zeek. Le langage permet aux analystes d'etendre le comportement des protocoles et de detection.\n\nIl est utilise dans la surveillance de la securite reseau, la reponse aux incidents, l'analyse du trafic, les pipelines de telemetrie et les politiques de securite specifiques au site.",
    },
    de: {
      name: 'Zeek',
      description:
        'Eine ereignisgesteuerte Skriptsprache für die Netzwerk-Analyse und Sicherheitsrichtlinien.',
      longDescription:
        'Zeek-Skripte beschreiben Ereignisse, Aufzeichnungen, Analyzer, Benachrichtigungen, Protokollierung und Richtlinienlogik im Netzwerkverkehr, der von dem Zeek-Monitor beobachtet wird. Die Sprache ermöglicht es Analysten, das Verhalten von Protokollen und Erkennung zu erweitern.\n\nSie wird in der Netzwerk-Sicherheitsüberwachung, der Incident Response, der Verkehrs-Analyse, der Telemetrie-Pipeline und der spezifischen Sicherheitsrichtlinien verwendet.',
    },
    pt: {
      name: 'Zeek',
      description:
        'Uma linguagem de scripting orientada a eventos para análise de rede e políticas de segurança.',
      longDescription:
        'Os scripts Zeek descrevem eventos, registros, analisadores, avisos, registro e lógica de política sobre o tráfego de rede observado pelo monitor Zeek. A linguagem permite que os analistas estendam o comportamento de protocolos e detecção.\n\nÉ utilizada em monitoramento de segurança de rede, resposta a incidentes, análise de tráfego, pipelines de telemetria e políticas de segurança específicas do site.',
    },
  },
} satisfies Language;
