import type { Language } from "../types";

export const elixir = {
  slug: "elixir",
  publishedDate: "2012-05-25",
  extensions: [".ex", ".exs", ".eex", ".leex", ".heex"],
  author: "Jose Valim",
  website: "https://elixir-lang.org",
  paradigms: ["functional", "concurrent", "distributed", "metaprogramming"],
  tooling: {
    runtimes: ["BEAM", "Erlang/OTP"],
    packageManagers: ["Mix", "Hex"],
    ecosystems: ["Web", "Distributed Systems", "Fault-tolerant Systems", "Data Processing"],
  },
  version: "1.19.5",
  logo: "https://cdn.simpleicons.org/elixir/4B275F",
  color: "#4B275F",
  i18n: {
    en: {
      name: "Elixir",
      description:
        "A dynamic functional language for scalable, maintainable, and fault-tolerant systems.",
      longDescription:
        "Elixir runs on the BEAM virtual machine and combines functional programming, lightweight processes, message passing, pattern matching, macros, and OTP libraries for building concurrent and distributed software.\n\nIt is widely used for web applications with Phoenix, real-time systems, background jobs, data pipelines, embedded systems, and services that need resilience, observability, and high concurrency.",
    },
    es: {
      name: "Elixir",
      description:
        "Un lenguaje funcional dinamico para sistemas escalables, mantenibles y tolerantes a fallos.",
      longDescription:
        "Elixir corre sobre la maquina virtual BEAM y combina programacion funcional, procesos ligeros, paso de mensajes, pattern matching, macros y librerias OTP para construir software concurrente y distribuido.\n\nSe usa ampliamente en aplicaciones web con Phoenix, sistemas en tiempo real, trabajos en segundo plano, pipelines de datos, sistemas embebidos y servicios que necesitan resiliencia, observabilidad y alta concurrencia.",
    },
    it: {
      name: "Elixir",
      description:
        "Un linguaggio funzionale dinamico per sistemi scalabili, manutenibili e tolleranti ai guasti.",
      longDescription:
        "Elixir viene eseguito sulla macchina virtuale BEAM e combina la programmazione funzionale, processi leggeri, passaggio di messaggi, corrispondenza di pattern, macro e librerie OTP per costruire software concorrenti e distribuiti.\n\nE ampiamente utilizzato per applicazioni web con Phoenix, sistemi in tempo reale, lavori in background, pipeline di dati, sistemi embedded e servizi che necessitano di resilienza, osservabilita e alta concorrenza.",
    },
    fr: {
      name: "Elixir",
      description:
        "Un langage fonctionnel dynamique pour des systemes evolutifs, maintenables et tolerants aux pannes.",
      longDescription:
        "Elixir fonctionne sur la machine virtuelle BEAM et combine la programmation fonctionnelle, des processus legers, la communication par messages, la correspondance de motifs, les macros et les bibliotheques OTP pour construire des logiciels concurrents et distribues.\n\nIl est largement utilise pour les applications web avec Phoenix, les systemes en temps reel, les taches en arriere-plan, les pipelines de donnees, les systemes embarques et les services qui necessitent une resilience, une observabilite et une forte concurrence.",
    },
  },
} satisfies Language;
