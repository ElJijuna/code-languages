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
  },
} satisfies Language;
