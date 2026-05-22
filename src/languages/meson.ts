import type { Language } from "../types";

export const meson = {
  slug: "meson",
  publishedDate: "2013-01-01",
  extensions: ["meson.build", "meson_options.txt", "meson.options", ".wrap"],
  author: "Jussi Pakkanen / Meson contributors",
  website: "https://mesonbuild.com",
  paradigms: ["build-automation", "declarative", "configuration", "domain-specific"],
  tooling: {
    runtimes: ["Meson"],
    packageManagers: ["WrapDB"],
    ecosystems: ["C", "C++", "GNOME", "Linux", "Cross-platform Builds"],
  },
  version: "1.11.1",
  logo: "https://raw.githubusercontent.com/mesonbuild/meson/master/graphics/meson_logo.svg",
  color: "#0077C8",
  i18n: {
    en: {
      name: "Meson",
      description:
        "A fast, user-friendly build system DSL used to describe cross-platform native builds.",
      longDescription:
        "Meson build files describe projects, targets, dependencies, compiler options, tests, install rules, subprojects, and cross-compilation settings using a readable non-Turing-complete DSL.\n\nIt is commonly used with Ninja for C, C++, C#, D, Fortran, Java, Rust, GNOME, Linux desktop, system software, native libraries, and projects that need fast incremental builds with clear build definitions.",
    },
    es: {
      name: "Meson",
      description:
        "Un DSL de build rapido y amigable usado para describir builds nativos multiplataforma.",
      longDescription:
        "Los archivos Meson describen proyectos, targets, dependencias, opciones de compilador, tests, reglas de instalacion, subproyectos y configuracion de cross-compilation usando un DSL legible y no Turing-completo.\n\nSe usa comunmente con Ninja para C, C++, C#, D, Fortran, Java, Rust, GNOME, escritorio Linux, software de sistema, librerias nativas y proyectos que necesitan builds incrementales rapidos con definiciones claras.",
    },
    it: {
      name: "Meson",
      description:
        "Un sistema DSL di build veloce e facile da usare, utilizzato per descrivere build native cross-platform.",
      longDescription:
        "I file di build di Meson descrivono progetti, target, dipendenze, opzioni del compilatore, test, regole di installazione, sottoprogetti e impostazioni di cross-compilation utilizzando un DSL non Turing-completo, facile da leggere.\n\nE comunemente utilizzato con Ninja per C, C++, C#, D, Fortran, Java, Rust, GNOME, Linux desktop, software di sistema, librerie native e progetti che richiedono build incrementali veloci con definizioni di build chiare.",
    },
    fr: {
      name: "Meson",
      description:
        "Un systeme de construction DSL rapide et convivial, utilise pour decrire des constructions natives multiplateformes.",
      longDescription:
        "Les fichiers de construction Meson decrivent les projets, les cibles, les dependances, les options du compilateur, les tests, les regles d'installation, les sous-projets et les parametres de cross-compilation en utilisant un DSL non Turing-complet, facile a lire.\n\nIl est couramment utilise avec Ninja pour C, C++, C#, D, Fortran, Java, Rust, GNOME, Linux desktop, logiciels systeme, bibliotheques natives et les projets qui necessitent des constructions incrementales rapides avec des definitions de construction claires.",
    },
  },
} satisfies Language;
