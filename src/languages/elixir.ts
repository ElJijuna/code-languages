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
  },
} satisfies Language;
