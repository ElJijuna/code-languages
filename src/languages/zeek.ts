import type { Language } from "../types";

export const zeek = {
  slug: "zeek",
  publishedDate: "1995-01-01",
  extensions: [".zeek", ".bro"],
  author: "Vern Paxson / Zeek Project",
  website: "https://zeek.org",
  paradigms: ["event-driven", "network-analysis", "domain-specific", "scripting"],
  tooling: {
    runtimes: ["Zeek"],
    packageManagers: ["zkg"],
    ecosystems: ["Network Security", "Observability", "Incident Response"],
  },
  version: "8.0.4",
  logo: "https://avatars.githubusercontent.com/u/10666805?v=4",
  i18n: {
    en: {
      name: "Zeek",
      description: "An event-driven scripting language for network analysis and security policy.",
      longDescription:
        "Zeek scripts describe events, records, analyzers, notices, logging, and policy logic over network traffic observed by the Zeek monitor. The language lets analysts extend protocol and detection behavior.\n\nIt is used in network security monitoring, incident response, traffic analysis, telemetry pipelines, and site-specific security policy.",
    },
    es: {
      name: "Zeek",
      description: "Un lenguaje event-driven para analisis de red y politicas de seguridad.",
      longDescription:
        "Los scripts Zeek describen eventos, records, analyzers, notices, logging y logica de politica sobre trafico de red observado por el monitor Zeek. El lenguaje permite extender comportamiento de protocolos y deteccion.\n\nSe usa en monitoreo de seguridad de red, respuesta a incidentes, analisis de trafico, pipelines de telemetria y politicas de seguridad especificas del sitio.",
    },
  },
} satisfies Language;
