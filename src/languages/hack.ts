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
  color: "#8892BF",
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
    it: {
      name: "Hack",
      description: "Un linguaggio a tipizzazione graduale per HHVM con eredita da PHP.",
      longDescription:
        "Hack e un linguaggio di programmazione per HHVM che si e evoluto da PHP e aggiunge la tipizzazione statica, i generics, le funzionalita asincrone, le shapes, le collezioni e strumenti basati sul controllore di tipi Hack. E progettato per codebase web di grandi dimensioni che necessitano di tipizzazione graduale e feedback rapido.\n\nE utilizzato principalmente in ambienti HHVM e in applicazioni lato server di grandi dimensioni dove l'ergonomia simile a PHP e abbinata a un'analisi statica piu rigorosa e a costrutti linguistici moderni.",
    },
    fr: {
      name: "Hack",
      description:
        "Un langage de programmation a typage progressif pour HHVM avec un heritage de PHP.",
      longDescription:
        "Hack est un langage de programmation pour HHVM qui a evolue a partir de PHP et ajoute le typage statique, les generiques, les fonctionnalites asynchrones, les types, les collections et des outils bases sur le verificateur de type Hack. Il est concu pour les grandes bases de code web qui ont besoin d'un typage progressif et de commentaires rapides.\n\nIl est principalement utilise dans les deploiements HHVM et les grandes applications cote serveur ou l'ergonomie similaire a PHP est associee a une analyse statique plus forte et a des constructions de langage modernes.",
    },
  },
} satisfies Language;
