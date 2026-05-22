import type { Language } from "../types";

export const vyper = {
  slug: "vyper",
  publishedDate: "2017-07-19",
  extensions: [".vy"],
  author: "Vyper contributors",
  website: "https://vyperlang.org",
  paradigms: ["smart-contract", "statically typed", "domain-specific", "imperative"],
  tooling: {
    runtimes: ["Ethereum Virtual Machine"],
    packageManagers: ["pip", "uv"],
    ecosystems: ["Ethereum", "Smart Contracts", "Web3"],
  },
  version: "0.4.3",
  logo: "https://avatars.githubusercontent.com/u/37288461?v=4",
  color: "#3C3C3D",
  i18n: {
    en: {
      name: "Vyper",
      description: "A Pythonic smart contract language for the Ethereum Virtual Machine.",
      longDescription:
        "Vyper is a contract language for Ethereum that favors explicit behavior, bounds, and auditability over broad language surface area. Its syntax is Python-like while its compiler emits EVM bytecode.\n\nIt is used for Ethereum smart contracts, financial protocols, on-chain experiments, and codebases that prefer a deliberately constrained contract language.",
    },
    es: {
      name: "Vyper",
      description: "Un lenguaje de smart contracts con sintaxis Python para Ethereum.",
      longDescription:
        "Vyper es un lenguaje de contratos para Ethereum que favorece comportamiento explicito, limites y auditabilidad sobre una superficie amplia del lenguaje. Su sintaxis es parecida a Python y su compilador emite bytecode EVM.\n\nSe usa en smart contracts de Ethereum, protocolos financieros, experimentos on-chain y codebases que prefieren un lenguaje de contratos deliberadamente restringido.",
    },
  },
} satisfies Language;
