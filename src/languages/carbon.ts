import type { Language } from "../types";

export const carbon = {
  slug: "carbon",
  publishedDate: "2022-07-19",
  extensions: [".carbon"],
  author: "Carbon Language Project",
  website: "https://docs.carbon-lang.dev",
  paradigms: ["imperative", "object-oriented", "generic", "statically typed"],
  tooling: {
    runtimes: ["LLVM"],
    packageManagers: ["Bazel"],
    ecosystems: ["C++", "Systems programming"],
  },
  version: "0.0.0 nightly",
  logo: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Carbon_logo.png",
  i18n: {
    en: {
      name: "Carbon",
      description: "An experimental successor language for C++ interoperability and migration.",
      longDescription:
        "Carbon is an experimental systems programming language designed as a possible successor to C++. It focuses on readable syntax, strong generics, modern tooling, and incremental migration paths for large C++ codebases.\n\nThe project is still pre-stable, so real-world use is centered on experiments, design evaluation, compiler development, and discussions about long-term interoperability with existing C++ ecosystems.",
    },
    es: {
      name: "Carbon",
      description: "Un lenguaje experimental sucesor para interoperabilidad y migracion desde C++.",
      longDescription:
        "Carbon es un lenguaje experimental de programacion de sistemas disenado como posible sucesor de C++. Se enfoca en sintaxis legible, genericos fuertes, herramientas modernas y rutas de migracion incremental para bases de codigo grandes en C++.\n\nEl proyecto aun no es estable, asi que su uso real se centra en experimentos, evaluacion de diseno, desarrollo del compilador y debates sobre interoperabilidad a largo plazo con ecosistemas C++ existentes.",
    },
  },
} satisfies Language;
