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
  },
} satisfies Language;
