import type { Language } from "../types";

export const moonbit = {
  slug: "moonbit",
  publishedDate: "2023-08-18",
  extensions: [".mbt"],
  author: "MoonBit Team",
  website: "https://www.moonbitlang.com",
  paradigms: ["functional", "statically typed", "multi-paradigm", "wasm"],
  tooling: {
    runtimes: ["MoonBit toolchain", "WebAssembly", "JavaScript"],
    packageManagers: ["moon"],
    ecosystems: ["WebAssembly", "Web", "Embedded"],
  },
  version: "0.9.2",
  logo: "https://avatars.githubusercontent.com/u/124476259?v=4",
  color: "#F4B728",
  i18n: {
    en: {
      name: "MoonBit",
      description: "A statically typed language and toolchain designed for WebAssembly output.",
      longDescription:
        "MoonBit is a language and toolchain built around fast feedback, algebraic data types, pattern matching, and multiple backends including WebAssembly. Its package and test tools are designed as part of the language workflow.\n\nIt is used for WebAssembly libraries, command-line experiments, web runtimes, teaching, and projects that want compact typed code with integrated tooling.",
    },
    es: {
      name: "MoonBit",
      description: "Un lenguaje tipado y toolchain disenado para generar WebAssembly.",
      longDescription:
        "MoonBit es un lenguaje y toolchain construido alrededor de feedback rapido, tipos algebraicos, pattern matching y varios backends, incluido WebAssembly. Sus herramientas de paquetes y pruebas forman parte del flujo del lenguaje.\n\nSe usa en bibliotecas WebAssembly, experimentos de linea de comandos, runtimes web, ensenanza y proyectos que buscan codigo tipado compacto con tooling integrado.",
    },
    it: {
      name: "MoonBit",
      description:
        "Un linguaggio e un set di strumenti staticamente tipizzato progettato per l'output WebAssembly.",
      longDescription:
        "MoonBit e un linguaggio e un set di strumenti costruiti attorno a un feedback rapido, a tipi di dati algebrici, a pattern matching e a backend multipli, tra cui WebAssembly. I suoi strumenti per la gestione dei pacchetti e dei test sono progettati come parte del flusso di lavoro del linguaggio.\n\nViene utilizzato per librerie WebAssembly, esperimenti da riga di comando, runtime web, didattica e progetti che desiderano codice tipizzato compatto con strumenti integrati.",
    },
    fr: {
      name: "MoonBit",
      description:
        "Un langage et un ensemble d'outils de compilation statiquement types concus pour la sortie WebAssembly.",
      longDescription:
        "MoonBit est un langage et un ensemble d'outils construits autour d'un retour rapide, de types de donnees algebriques, de la correspondance de motifs et de plusieurs backends, notamment WebAssembly. Ses outils de package et de test sont concus comme faisant partie du flux de travail du langage.\n\nIl est utilise pour les bibliotheques WebAssembly, les experiences en ligne de commande, les environnements d'execution web, l'enseignement et les projets qui souhaitent un code type compact avec des outils integres.",
    },
    de: {
      name: "MoonBit",
      description: "Eine statisch typisierte Sprache und Toolchain f\u00fcr WebAssembly-Ausgabe.",
      longDescription:
        "MoonBit ist eine Sprache und Toolchain, die auf schnellen R\u00fcckmeldungen, algebraischen Datentypen, Pattern Matching und mehreren Backends, einschlie\u00dflich WebAssembly, basiert. Ihre Paket- und Testwerkzeuge sind Teil des Sprachworkflows.\n\nSie wird f\u00fcr WebAssembly-Bibliotheken, Kommandozeilen-Experimente, Web-Runtimes, Lehre und Projekte verwendet, die kompakten, typisierten Code mit integrierten Werkzeugen ben\u00f6tigen.",
    },
    pt: {
      name: "MoonBit",
      description:
        "Linguagem e conjunto de ferramentas estaticamente tipadas, projetado para sa\u00edda WebAssembly.",
      longDescription:
        "MoonBit \u00e9 uma linguagem e conjunto de ferramentas constru\u00eddas em torno de feedback r\u00e1pido, tipos de dados alg\u00e9bricos, correspond\u00eancia de padr\u00f5es e v\u00e1rios backends, incluindo WebAssembly. Suas ferramentas de pacote e teste s\u00e3o projetadas como parte do fluxo de trabalho da linguagem.\n\n\u00c9 usado para bibliotecas WebAssembly, experimentos de linha de comando, ambientes de execu\u00e7\u00e3o web, ensino e projetos que desejam c\u00f3digo tipado compacto com ferramentas integradas.",
    },
  },
} satisfies Language;
