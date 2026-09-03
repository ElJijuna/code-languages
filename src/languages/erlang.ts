import type { Language } from '@/types';

export const erlang = {
  slug: 'erlang',
  publishedDate: '1986-01-01',
  extensions: ['.erl', '.hrl', '.app.src', '.escript', '.xrl', '.yrl', 'rebar.config'],
  author: 'Joe Armstrong, Robert Virding, Mike Williams / Ericsson',
  website: 'https://www.erlang.org',
  paradigms: ['concurrent', 'distributed', 'functional', 'message-passing'],
  tooling: {
    runtimes: ['BEAM', 'Erlang/OTP'],
    packageManagers: ['rebar3', 'Hex'],
    ecosystems: ['BEAM', 'Telecom', 'Distributed Systems', 'Fault-tolerant Systems'],
  },
  version: 'OTP 29.0.6',
  logo: 'https://cdn.simpleicons.org/erlang/A90533',
  color: '#A90533',
  i18n: {
    en: {
      name: 'Erlang',
      description:
        'A concurrent functional language for fault-tolerant, distributed, and highly available systems.',
      longDescription:
        'Erlang is a functional programming language and runtime system designed for concurrent, distributed, fault-tolerant applications. Erlang/OTP includes the BEAM virtual machine, lightweight processes, message passing, supervisors, applications, releases, and libraries for building resilient systems.\n\nIt is widely used in telecom platforms, messaging systems, databases, real-time services, network infrastructure, IoT, and systems where uptime, hot code upgrades, and fault isolation are central requirements.',
    },
    es: {
      name: 'Erlang',
      description:
        'Un lenguaje funcional concurrente para sistemas tolerantes a fallos, distribuidos y altamente disponibles.',
      longDescription:
        'Erlang es un lenguaje de programacion funcional y sistema runtime disenado para aplicaciones concurrentes, distribuidas y tolerantes a fallos. Erlang/OTP incluye la maquina virtual BEAM, procesos ligeros, paso de mensajes, supervisores, aplicaciones, releases y librerias para construir sistemas resilientes.\n\nSe usa ampliamente en plataformas de telecomunicaciones, sistemas de mensajeria, bases de datos, servicios en tiempo real, infraestructura de red, IoT y sistemas donde uptime, hot code upgrades y aislamiento de fallos son requisitos centrales.',
    },
    it: {
      name: 'Erlang',
      description:
        'Un linguaggio funzionale concorrente per sistemi fault-tolerant, distribuiti e altamente disponibili.',
      longDescription:
        "Erlang e un linguaggio di programmazione e sistema di runtime funzionale progettato per applicazioni concorrenti, distribuite e fault-tolerant. Erlang/OTP include la macchina virtuale BEAM, processi leggeri, passaggio di messaggi, supervisori, applicazioni, rilasci e librerie per la costruzione di sistemi resilienti.\n\nE ampiamente utilizzato in piattaforme di telecomunicazioni, sistemi di messaggistica, database, servizi in tempo reale, infrastrutture di rete, IoT e sistemi in cui l'uptime, gli aggiornamenti di codice",
    },
    fr: {
      name: 'Erlang',
      description:
        'Un langage fonctionnel concurrent pour les systemes tolerants aux pannes, distribues et hautement disponibles.',
      longDescription:
        "Erlang est un langage de programmation et un systeme d'execution fonctionnel concu pour les applications concurrentes, distribuees et tolerantes aux pannes. Erlang/OTP inclut la machine virtuelle BEAM, des processus legers, la communication par messages, des superviseurs, des applications, des versions et des bibliotheques pour construire des systemes resilients.\n\nIl est largement utilise dans les plateformes de telecommunications, les systemes de messagerie, les bases de donnees, les services en temps reel, l'infrastructure reseau, l'IoT et les systemes ou la disponibilite, les mises a jour de code en direct et l'isolement des pannes sont des exigences centrales.",
    },
    de: {
      name: 'Erlang',
      description:
        'Ein konkurrierender funktionaler Programmiersprache für fehlertolerante, verteilte und hochverfügbare Systeme.',
      longDescription:
        'Erlang ist eine funktionale Programmiersprache und Laufzeitumgebung, die für konkurrierende, verteilte, fehlertolerante Anwendungen entwickelt wurde. Erlang/OTP enthält die BEAM-virtuelle Maschine, leichte Prozesse, Nachrichtenübertragung, Supervisors, Anwendungen, Releases und Bibliotheken zum Aufbau robuster Systeme.\n\nEs wird häufig in Telekommunikationsplattformen, Messaging-Systemen, Datenbanken, Echtzeitdiensten, Netzwerkinfrastruktur, IoT und Systemen eingesetzt, bei denen Ausfallsicherheit, Hot-Code-Upgrades und Fehlerisolation von zentraler Bedeutung sind.',
    },
    pt: {
      name: 'Erlang',
      description:
        'Linguagem funcional concorrente para sistemas tolerantes a falhas, distribuídos e altamente disponíveis.',
      longDescription:
        'Erlang é uma linguagem de programação e sistema de tempo de execução funcional, projetada para aplicações concorrentes, distribuídas e tolerantes a falhas. Erlang/OTP inclui a máquina virtual BEAM, processos leves, passagem de mensagens, supervisores, aplicações, releases e bibliotecas para construir sistemas resilientes.\n\nÉ amplamente utilizada em plataformas de telecomunicações, sistemas de mensagens, bancos de dados, serviços em tempo real, infraestrutura de rede, IoT e sistemas onde a disponibilidade, atualizações de código quentes e isolamento de falhas são requisitos centrais.',
    },
  },
} satisfies Language;
