import type { Language } from "../types";

export const llvmIr = {
  slug: "llvm-ir",
  publishedDate: "2003-10-01",
  extensions: [".ll", ".bc"],
  author: "LLVM Project",
  website: "https://llvm.org/docs/LangRef.html",
  paradigms: ["intermediate representation", "static single assignment", "compiler"],
  tooling: {
    runtimes: ["LLVM"],
    packageManagers: ["LLVM releases"],
    ecosystems: ["Compilers", "Systems programming", "Toolchains"],
  },
  version: "22.1.5",
  logo: "https://cdn.simpleicons.org/llvm/262D3A",
  color: "#262D3A",
  i18n: {
    en: {
      name: "LLVM IR",
      description:
        "The typed intermediate representation used by the LLVM compiler infrastructure.",
      longDescription:
        "LLVM IR is the typed, low-level intermediate representation used by the LLVM compiler infrastructure. It has a textual form, bitcode form, SSA-based values, explicit control flow, and a language reference that defines instructions, types, attributes, and metadata.\n\nIt is used by compilers, optimizers, static analyzers, JIT systems, language implementations, and tools that need a portable representation between source languages and machine code.",
    },
    es: {
      name: "LLVM IR",
      description:
        "La representacion intermedia tipada usada por la infraestructura de compiladores LLVM.",
      longDescription:
        "LLVM IR es la representacion intermedia tipada y de bajo nivel usada por la infraestructura de compiladores LLVM. Tiene forma textual, forma bitcode, valores basados en SSA, flujo de control explicito y una referencia que define instrucciones, tipos, atributos y metadatos.\n\nSe usa en compiladores, optimizadores, analizadores estaticos, sistemas JIT, implementaciones de lenguajes y herramientas que necesitan una representacion portable entre lenguajes fuente y codigo maquina.",
    },
    it: {
      name: "LLVM IR",
      description:
        "La rappresentazione intermedia tipizzata utilizzata dall'infrastruttura del compilatore LLVM.",
      longDescription:
        "LLVM IR e la rappresentazione intermedia tipizzata e a basso livello utilizzata dall'infrastruttura del compilatore LLVM. Ha una forma testuale, una forma bitcode, valori basati su SSA, flusso di controllo esplicito e una guida linguistica che definisce istruzioni, tipi, attributi e metadati.\n\nE utilizzata da compilatori, ottimizzatori, analizzatori statici, sistemi JIT, implementazioni di linguaggio e strumenti che necessitano di una rappresentazione portabile tra linguaggi sorgente e codice macchina.",
    },
    fr: {
      name: "LLVM IR",
      description:
        "La representation intermediaire typee utilisee par l'infrastructure du compilateur LLVM.",
      longDescription:
        "LLVM IR est la representation intermediaire typee et de bas niveau utilisee par l'infrastructure du compilateur LLVM. Elle a une forme textuelle, une forme bitcode, des valeurs basees sur SSA, un controle de flux explicite et une reference linguistique qui definit les instructions, les types, les attributs et les metadonnees.\n\nElle est utilisee par les compilateurs, les optimiseurs, les analyseurs statiques, les systemes JIT, les implementations de langages et les outils qui ont besoin d'une representation portable entre les langages sources et le code machine.",
    },
    de: {
      name: "LLVM IR",
      description:
        "Die typisierte Zwischenrepr\u00e4sentation, die vom LLVM-Compiler-Infrastruktur verwendet wird.",
      longDescription:
        "LLVM IR ist die typisierte, Low-Level-Zwischenrepr\u00e4sentation, die von der LLVM-Compiler-Infrastruktur verwendet wird. Sie hat eine textuelle Form, Bitcode-Form, SSA-basierte Werte, expliziten Kontrollfluss und eine Sprachreferenz, die Anweisungen, Typen, Attribute und Metadaten definiert.\n\nSie wird von Compilern, Optimierern, statischen Analysatoren, JIT-Systemen, Sprachimplementierungen und Tools verwendet, die eine portable Darstellung zwischen Quellsprachen und Maschinencode ben\u00f6tigen.",
    },
    pt: {
      name: "LLVM IR",
      description:
        "Representa\u00e7\u00e3o intermedi\u00e1ria tipada usada pela infraestrutura do compilador LLVM.",
      longDescription:
        "LLVM IR \u00e9 a representa\u00e7\u00e3o intermedi\u00e1ria tipada e de baixo n\u00edvel usada pela infraestrutura do compilador LLVM. Possui uma forma textual, forma de bitcode, valores baseados em SSA, fluxo de controle expl\u00edcito e uma refer\u00eancia da linguagem que define instru\u00e7\u00f5es, tipos, atributos e metadados.\n\n\u00c9 usada por compiladores, otimizadores, analisadores est\u00e1ticos, sistemas JIT, implementa\u00e7\u00f5es de linguagem e ferramentas que precisam de uma representa\u00e7\u00e3o port\u00e1til entre linguagens de origem e c\u00f3digo de m\u00e1quina.",
    },
  },
} satisfies Language;
