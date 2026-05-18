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
  },
} satisfies Language;
