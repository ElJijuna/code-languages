import type { Language } from "../types";

export const erlang = {
  slug: "erlang",
  publishedDate: "1986-01-01",
  extensions: [".erl", ".hrl", ".app.src", ".escript", ".xrl", ".yrl", "rebar.config"],
  author: "Joe Armstrong, Robert Virding, Mike Williams / Ericsson",
  website: "https://www.erlang.org",
  paradigms: ["concurrent", "distributed", "functional", "message-passing"],
  tooling: {
    runtimes: ["BEAM", "Erlang/OTP"],
    packageManagers: ["rebar3", "Hex"],
    ecosystems: ["BEAM", "Telecom", "Distributed Systems", "Fault-tolerant Systems"],
  },
  version: "OTP 29.0",
  logo: "https://cdn.simpleicons.org/erlang/A90533",
  i18n: {
    en: {
      name: "Erlang",
      description:
        "A concurrent functional language for fault-tolerant, distributed, and highly available systems.",
      longDescription:
        "Erlang is a functional programming language and runtime system designed for concurrent, distributed, fault-tolerant applications. Erlang/OTP includes the BEAM virtual machine, lightweight processes, message passing, supervisors, applications, releases, and libraries for building resilient systems.\n\nIt is widely used in telecom platforms, messaging systems, databases, real-time services, network infrastructure, IoT, and systems where uptime, hot code upgrades, and fault isolation are central requirements.",
    },
    es: {
      name: "Erlang",
      description:
        "Un lenguaje funcional concurrente para sistemas tolerantes a fallos, distribuidos y altamente disponibles.",
      longDescription:
        "Erlang es un lenguaje de programacion funcional y sistema runtime disenado para aplicaciones concurrentes, distribuidas y tolerantes a fallos. Erlang/OTP incluye la maquina virtual BEAM, procesos ligeros, paso de mensajes, supervisores, aplicaciones, releases y librerias para construir sistemas resilientes.\n\nSe usa ampliamente en plataformas de telecomunicaciones, sistemas de mensajeria, bases de datos, servicios en tiempo real, infraestructura de red, IoT y sistemas donde uptime, hot code upgrades y aislamiento de fallos son requisitos centrales.",
    },
  },
} satisfies Language;
