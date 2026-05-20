import type { Language } from "../types";

export const hack = {
  slug: "hack",
  publishedDate: "2014-03-20",
  extensions: [".hack", ".hh", ".hhi"],
  author: "Meta",
  website: "https://docs.hhvm.com/hack/",
  paradigms: ["object-oriented", "functional", "gradually typed", "imperative"],
  tooling: {
    runtimes: ["HHVM"],
    packageManagers: ["Composer"],
    ecosystems: ["HHVM", "Web", "PHP"],
  },
  version: "HHVM 4.x",
  logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Hack_%28programming_language%29_logo.svg",
  i18n: {
    en: {
      name: "Hack",
      description: "A gradually typed language for HHVM with PHP heritage.",
      longDescription:
        "Hack is a programming language for HHVM that evolved from PHP and adds static typing, generics, async features, shapes, collections, and tooling built around the Hack typechecker. It is designed for large web codebases that need gradual typing and fast feedback.\n\nIt is used mainly in HHVM deployments and large server-side applications where PHP-like ergonomics are paired with stronger static analysis and modern language constructs.",
    },
    es: {
      name: "Hack",
      description: "Un lenguaje con tipado gradual para HHVM con herencia de PHP.",
      longDescription:
        "Hack es un lenguaje de programacion para HHVM que evoluciono desde PHP y agrega tipado estatico, genericos, funciones async, shapes, colecciones y herramientas basadas en el typechecker de Hack. Esta disenado para grandes bases de codigo web que necesitan tipado gradual y feedback rapido.\n\nSe usa principalmente en despliegues HHVM y aplicaciones grandes del lado servidor donde la ergonomia similar a PHP se combina con analisis estatico mas fuerte y construcciones modernas del lenguaje.",
    },
  },
} satisfies Language;
