import type { Language } from "../types";

export const webassembly = {
  slug: "webassembly",
  publishedDate: "2017-03-07",
  extensions: [".wasm", ".wat"],
  author: "W3C WebAssembly Community Group",
  website: "https://webassembly.org",
  paradigms: ["stack-based", "assembly", "low-level", "portable"],
  tooling: {
    runtimes: ["Browser", "Wasmtime", "Wasmer", "Node.js", "WASI"],
    packageManagers: ["Warg", "npm"],
    ecosystems: ["Web", "WASI", "WebAssembly Component Model"],
  },
  version: "3.0",
  logo: "https://upload.wikimedia.org/wikipedia/commons/1/1f/WebAssembly_Logo.svg",
  color: "#654FF0",
  i18n: {
    en: {
      name: "WebAssembly",
      description:
        "A portable low-level code format for safe, near-native execution across web and non-web runtimes.",
      longDescription:
        "WebAssembly is a compact binary instruction format with a structured text format, designed as a safe, portable compilation target for languages such as C, C++, Rust, Go, and many others.\n\nIt runs in browsers and standalone runtimes, supports sandboxed execution, and is used for performance-sensitive web applications, plugins, serverless workloads, edge computing, and portable components through WASI and the component model.",
    },
    es: {
      name: "WebAssembly",
      description:
        "Un formato de codigo de bajo nivel y portable para ejecucion segura y casi nativa en runtimes web y no web.",
      longDescription:
        "WebAssembly es un formato binario compacto de instrucciones con un formato textual estructurado, disenado como objetivo de compilacion seguro y portable para lenguajes como C, C++, Rust, Go y muchos otros.\n\nSe ejecuta en navegadores y runtimes independientes, soporta ejecucion en sandbox y se usa en aplicaciones web sensibles al rendimiento, plugins, cargas serverless, edge computing y componentes portables mediante WASI y el modelo de componentes.",
    },
    it: {
      name: "WebAssembly",
      description:
        "Un formato di codice a basso livello portatile per l'esecuzione sicura e vicina al nativo su runtime web e non-web.",
      longDescription:
        "WebAssembly e un formato di istruzioni binarie compatto con un formato di testo strutturato, progettato come target di compilazione sicuro e portatile per linguaggi come C, C++, Rust, Go e molti altri.\n\nFunziona nei browser e nei runtime autonomi, supporta l'esecuzione in sandbox e viene utilizzato per applicazioni web ad alte prestazioni, plugin, workload serverless, edge computing e componenti portatili tramite WASI e il modello di componenti.",
    },
    fr: {
      name: "WebAssembly",
      description:
        "Un format de code de bas niveau portable pour une execution securisee et proche du natif sur les environnements web et non-web.",
      longDescription:
        "WebAssembly est un format d'instruction binaire compact avec un format de texte structure, concu comme une cible de compilation securisee et portable pour des langages tels que C, C++, Rust, Go, et bien d'autres.\n\nIl fonctionne dans les navigateurs et les environnements autonomes, prend en charge l'execution sandboxee, et est utilise pour les applications web sensibles aux performances, les plugins, les charges de travail serverless, l'informatique de peripherie, et les composants portables via WASI et le modele de composants.",
    },
  },
} satisfies Language;
