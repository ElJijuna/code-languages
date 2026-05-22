import type { Language } from "../types";

export const v = {
  slug: "v",
  publishedDate: "2019-06-20",
  extensions: [".v", ".vsh"],
  author: "Alexander Medvednikov / V contributors",
  website: "https://vlang.io",
  paradigms: ["imperative", "systems", "multi-paradigm", "statically typed"],
  tooling: {
    runtimes: ["V compiler"],
    packageManagers: ["vpm"],
    ecosystems: ["Native", "Web", "Systems"],
  },
  version: "weekly.2025.49",
  logo: "https://cdn.simpleicons.org/v/5D87BF",
  i18n: {
    en: {
      name: "V",
      description: "A compiled statically typed language for simple native application builds.",
      longDescription:
        "V is a compiled language with modules, sum types, generics, concurrency syntax, C interop, and a toolchain that emphasizes quick compilation and small deployment workflows. It targets C and native outputs through its compiler.\n\nIt is used for command-line tools, native applications, experiments, web services, and projects that prefer an integrated lightweight toolchain.",
    },
    es: {
      name: "V",
      description: "Un lenguaje compilado y tipado para construir aplicaciones nativas simples.",
      longDescription:
        "V es un lenguaje compilado con modulos, sum types, generics, sintaxis concurrente, interop con C y un toolchain que enfatiza compilacion rapida y despliegues pequenos. Su compilador apunta a C y salidas nativas.\n\nSe usa en herramientas de linea de comandos, aplicaciones nativas, experimentos, servicios web y proyectos que prefieren un toolchain ligero e integrado.",
    },
  },
} satisfies Language;
