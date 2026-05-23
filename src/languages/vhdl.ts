import type { Language } from "../types";

export const vhdl = {
  slug: "vhdl",
  publishedDate: "1987-01-01",
  extensions: [".vhd", ".vhdl"],
  author: "U.S. Department of Defense / IEEE",
  website: "https://standards.ieee.org/standard/1076-2019.html",
  paradigms: ["hardware-description", "concurrent", "dataflow", "verification"],
  tooling: {
    runtimes: ["FPGA Toolchains", "ASIC EDA Tools", "Simulators"],
    packageManagers: ["VUnit", "FuseSoC"],
    ecosystems: ["Hardware Design", "FPGA", "ASIC", "Verification"],
  },
  version: "IEEE 1076-2019",
  logo: "https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@master/icons/file_type_vhdl.svg",
  color: "#543978",
  i18n: {
    en: {
      name: "VHDL",
      description:
        "A hardware description and verification language for digital electronic systems.",
      longDescription:
        "VHDL describes digital systems using entities, architectures, signals, processes, concurrent statements, packages, generics, configurations, testbenches, and strongly typed design units. It supports simulation, synthesis, and verification across multiple abstraction levels.\n\nIt is used for FPGA development, ASIC design, hardware verification, reusable IP blocks, digital signal processing, safety-critical hardware, and electronic design automation workflows.",
    },
    es: {
      name: "VHDL",
      description:
        "Un lenguaje de descripcion y verificacion de hardware para sistemas electronicos digitales.",
      longDescription:
        "VHDL describe sistemas digitales usando entidades, arquitecturas, senales, procesos, sentencias concurrentes, paquetes, generics, configuraciones, testbenches y unidades de diseno fuertemente tipadas. Soporta simulacion, sintesis y verificacion en varios niveles de abstraccion.\n\nSe usa en desarrollo FPGA, diseno ASIC, verificacion de hardware, bloques IP reutilizables, procesamiento digital de senales, hardware critico para seguridad y flujos de automatizacion de diseno electronico.",
    },
    it: {
      name: "VHDL",
      description:
        "Un linguaggio di descrizione e verifica hardware per sistemi elettronici digitali.",
      longDescription:
        "VHDL descrive i sistemi digitali utilizzando entita, architetture, segnali, processi, istruzioni concorrenti, pacchetti, generici, configurazioni, testbench e unita di progettazione fortemente tipizzate. Supporta la simulazione, la sintesi e la verifica a diversi livelli di astrazione.\n\nE utilizzato per lo sviluppo di FPGA, la progettazione di ASIC, la verifica hardware, blocchi IP riutilizzabili, l'elaborazione del segnale digitale, hardware critico per la sicurezza e i flussi di lavoro di automazione del design elettronico.",
    },
    fr: {
      name: "VHDL",
      description:
        "Un langage de description et de verification du materiel pour les systemes electroniques numeriques.",
      longDescription:
        "VHDL decrit les systemes numeriques en utilisant des entites, des architectures, des signaux, des processus, des instructions concurrentes, des packages, des generiques, des configurations, des bancs de test et des unites de conception fortement typees. Il prend en charge la simulation, la synthese et la verification a plusieurs niveaux d'abstraction.\n\nIl est utilise pour le developpement de FPGA, la conception de circuits integres, la verification materielle, les blocs IP reutilisables, le traitement du signal numerique, le materiel critique pour la securite et les flux de travail d'automatisation de la conception electronique.",
    },
    de: {
      name: "VHDL",
      description:
        "Eine Hardware-Beschreibung und -Verifikationssprache f\u00fcr digitale elektronische Systeme.",
      longDescription:
        "VHDL beschreibt digitale Systeme mithilfe von Entit\u00e4ten, Architekturen, Signalen, Prozessen, nebenl\u00e4ufigen Anweisungen, Paketen, Generics und stark typisierten Designeinheiten. Es unterst\u00fctzt Simulation, Synthese und Verifikation auf verschiedenen Abstraktionsebenen.\n\nEs wird f\u00fcr FPGA-Entwicklung, ASIC-Design, Hardware-Verifikation, wiederverwendbare IP-Bl\u00f6cke, digitale Signalverarbeitung, sicherheitskritische Hardware und elektronische Designautomatisierung verwendet.",
    },
    pt: {
      name: "VHDL",
      description:
        "Linguagem de descri\u00e7\u00e3o e verifica\u00e7\u00e3o de hardware para sistemas eletr\u00f4nicos digitais.",
      longDescription:
        "VHDL descreve sistemas digitais usando entidades, arquiteturas, sinais, processos, declara\u00e7\u00f5es concorrentes, pacotes, gen\u00e9ricos, configura\u00e7\u00f5es, bancas de teste e unidades de projeto fortemente tipadas. Suporta simula\u00e7\u00e3o, s\u00edntese e verifica\u00e7\u00e3o em v\u00e1rios n\u00edveis de abstra\u00e7\u00e3o.\n\n\u00c9 usada para desenvolvimento de FPGA, design de ASIC, verifica\u00e7\u00e3o de hardware, blocos de IP reutiliz\u00e1veis, processamento de sinais digitais, hardware cr\u00edtico para seguran\u00e7a e fluxos de trabalho de automa\u00e7\u00e3o de design eletr\u00f4nico.",
    },
  },
} satisfies Language;
