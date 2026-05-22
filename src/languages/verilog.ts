import type { Language } from "../types";

export const verilog = {
  slug: "verilog",
  publishedDate: "1984-01-01",
  extensions: [".v", ".vh", ".sv", ".svh"],
  author: "Phil Moorby / Gateway Design Automation",
  website: "https://standards.ieee.org/standard/1800-2023.html",
  paradigms: ["hardware-description", "concurrent", "event-driven", "verification"],
  tooling: {
    runtimes: ["FPGA Toolchains", "ASIC EDA Tools", "Simulators"],
    packageManagers: ["FuseSoC"],
    ecosystems: ["Hardware Design", "FPGA", "ASIC", "Verification"],
  },
  version: "IEEE 1800-2023",
  logo: "https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@master/icons/file_type_verilog.svg",
  color: "#1488C6",
  i18n: {
    en: {
      name: "Verilog/SystemVerilog",
      description:
        "A hardware description and verification language for digital circuits and systems.",
      longDescription:
        "Verilog and SystemVerilog describe digital hardware at behavioral, register-transfer, and gate levels. The language supports modules, signals, continuous assignments, procedural blocks, timing, testbenches, assertions, interfaces, classes, and constrained random verification.\n\nIt is used for FPGA designs, ASIC development, hardware simulation, synthesis, verification environments, reusable IP blocks, and electronic design automation workflows.",
    },
    es: {
      name: "Verilog/SystemVerilog",
      description:
        "Un lenguaje de descripcion y verificacion de hardware para circuitos y sistemas digitales.",
      longDescription:
        "Verilog y SystemVerilog describen hardware digital en niveles conductual, register-transfer y de compuertas. El lenguaje soporta modulos, senales, asignaciones continuas, bloques procedurales, timing, testbenches, assertions, interfaces, clases y verificacion aleatoria restringida.\n\nSe usa en disenos FPGA, desarrollo ASIC, simulacion de hardware, sintesis, entornos de verificacion, bloques IP reutilizables y flujos de automatizacion de diseno electronico.",
    },
    it: {
      name: "Verilog/SystemVerilog",
      description: "Linguaggio di descrizione e verifica hardware per circuiti e sistemi digitali.",
      longDescription:
        "Verilog e SystemVerilog descrivono l'hardware digitale a livello comportamentale, di trasferimento di registri e di porte. Il linguaggio supporta moduli, segnali, assegnazioni continue, blocchi procedurali, temporizzazione, testbench, asserzioni, interfacce, classi e verifica casuale vincolata.\n\nViene utilizzato per progetti FPGA, sviluppo di ASIC, simulazione hardware, sintesi, ambienti di verifica, blocchi IP riutilizzabili e flussi di lavoro di automazione del design elettronico.",
    },
    fr: {
      name: "Verilog/SystemVerilog",
      description:
        "Langage de description et de verification du materiel pour les circuits et systemes numeriques.",
      longDescription:
        "Verilog et SystemVerilog decrivent le materiel numerique au niveau comportemental, registre-transfert et porte. Le langage prend en charge les modules, les signaux, les affectations continues, les blocs proceduraux, le temps, les bancs de test, les assertions, les interfaces, les classes et la verification par aleatoire contrainte.\n\nIl est utilise pour la conception de FPGA, le developpement d'ASIC, la simulation materielle, la synthese, les environnements de verification, les blocs IP reutilisables et les flux de travail d'automatisation de la conception electronique.",
    },
  },
} satisfies Language;
