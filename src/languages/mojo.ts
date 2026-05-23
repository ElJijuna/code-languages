import type { Language } from "../types";

export const mojo = {
  slug: "mojo",
  publishedDate: "2023-05-02",
  extensions: [".mojo"],
  author: "Modular",
  website: "https://www.modular.com/mojo",
  paradigms: ["imperative", "systems", "statically typed", "data-oriented"],
  tooling: {
    runtimes: ["Mojo toolchain", "MAX"],
    packageManagers: ["pixi", "pip"],
    ecosystems: ["AI", "Accelerators", "Python"],
  },
  version: "0.26.1",
  logo: "https://avatars.githubusercontent.com/u/107116314?v=4",
  color: "#FF5A1F",
  i18n: {
    en: {
      name: "Mojo",
      description: "A systems-oriented language for AI and accelerator-aware programming.",
      longDescription:
        "Mojo is a language from Modular that combines Python-friendly syntax with ownership, value semantics, low-level control, and compiler features aimed at performance-sensitive code. Its toolchain targets CPUs and accelerator workflows.\n\nIt is used in experiments around AI kernels, numeric code, systems programming, Python-adjacent libraries, and workloads that need explicit performance control.",
    },
    es: {
      name: "Mojo",
      description: "Un lenguaje orientado a sistemas para IA y programacion con aceleradores.",
      longDescription:
        "Mojo es un lenguaje de Modular que combina una sintaxis cercana a Python con ownership, semantica de valores, control de bajo nivel y funciones de compilador pensadas para codigo sensible al rendimiento. Su toolchain apunta a CPUs y flujos con aceleradores.\n\nSe usa en experimentos con kernels de IA, codigo numerico, programacion de sistemas, bibliotecas cercanas a Python y cargas que necesitan control explicito del rendimiento.",
    },
    it: {
      name: "Mojo",
      description:
        "Un linguaggio orientato ai sistemi per l'IA e la programmazione consapevole degli acceleratori.",
      longDescription:
        "Mojo e un linguaggio di Modular che combina una sintassi simile a Python con la gestione della proprieta, la semantica dei valori, il controllo a basso livello e le funzionalita del compilatore, mirate al codice sensibile alle prestazioni. Il suo strumento mira a CPU e flussi di lavoro di acceleratori.\n\nViene utilizzato in esperimenti su kernel di IA, codice numerico, programmazione di sistemi, librerie correlate a Python e carichi di lavoro che richiedono un controllo esplicito delle prestazioni.",
    },
    fr: {
      name: "Mojo",
      description:
        "Un langage oriente systemes pour la programmation de l'IA et des accelerateurs.",
      longDescription:
        "Mojo est un langage de Modular qui combine une syntaxe conviviale pour Python avec la gestion de la propriete, la semantique des valeurs, un controle de bas niveau et des fonctionnalites de compilateur visant a optimiser le code sensible aux performances. Son outil cible les architectures CPU et les workflows d'accelerateurs.\n\nIl est utilise dans des experiences sur les noyaux d'IA, le code numerique, la programmation systeme, les bibliotheques Python et les charges de travail necessitant un controle explicite des performances.",
    },
    de: {
      name: "Mojo",
      description: "Eine systemorientierte Sprache f\u00fcr KI und Beschleuniger-Programmierung.",
      longDescription:
        "Mojo ist eine Sprache von Modular, die Python-\u00e4hnliche Syntax mit Ownership, Wertsemantik, Low-Level-Kontrolle und Compiler-Funktionen kombiniert, die auf performanzsensiblen Code abzielen. Ihr Toolchain richtet sich an CPUs und Beschleuniger-Workflows.\n\nSie wird in Experimenten mit KI-Kernen, numerischem Code, Systemprogrammierung, Python-nahen Bibliotheken und Workloads eingesetzt, die explizite Performance-Kontrolle ben\u00f6tigen.",
    },
    pt: {
      name: "Mojo",
      description:
        "Linguagem orientada a sistemas para IA e programa\u00e7\u00e3o consciente de aceleradores.",
      longDescription:
        "Mojo \u00e9 uma linguagem da Modular que combina a sintaxe amig\u00e1vel do Python com propriedade, sem\u00e2ntica de valores, controle de baixo n\u00edvel e recursos de compilador, visando c\u00f3digo sens\u00edvel ao desempenho. Sua ferramenta visa CPUs e fluxos de trabalho de aceleradores.\n\n\u00c9 usada em experimentos com n\u00facleos de IA, c\u00f3digo num\u00e9rico, programa\u00e7\u00e3o de sistemas, bibliotecas pr\u00f3ximas ao Python e cargas de trabalho que exigem controle de desempenho expl\u00edcito.",
    },
  },
} satisfies Language;
