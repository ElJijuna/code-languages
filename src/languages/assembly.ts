import type { Language } from "../types";

export const assembly = {
  slug: "assembly",
  publishedDate: "1949-01-01",
  extensions: [".asm", ".s", ".S", ".inc"],
  author: "Machine architecture vendors and assembler implementers",
  website: "https://en.wikipedia.org/wiki/Assembly_language",
  paradigms: ["imperative", "low-level", "procedural"],
  tooling: {
    runtimes: ["Native"],
    packageManagers: ["APT", "DNF", "Pacman", "Homebrew"],
    ecosystems: ["Systems", "Embedded", "Reverse Engineering"],
  },
  version: "Architecture-specific",
  logo: "https://cdn.simpleicons.org/assemblyscript/007AAC",
  color: "#007AAC",
  i18n: {
    en: {
      name: "Assembly",
      description:
        "A family of low-level languages that map closely to machine instructions for specific CPU architectures.",
      longDescription:
        "Assembly language represents processor instructions, registers, memory addressing modes, labels, directives, and macros using symbolic text that is assembled into machine code.\n\nIt is used in operating systems, embedded firmware, bootloaders, drivers, reverse engineering, performance-critical routines, and educational material where direct control over hardware and instructions matters.",
    },
    es: {
      name: "Assembly",
      description:
        "Una familia de lenguajes de bajo nivel cercana a instrucciones de maquina para arquitecturas especificas.",
      longDescription:
        "Assembly representa instrucciones del procesador, registros, modos de direccionamiento de memoria, etiquetas, directivas y macros usando texto simbolico que se ensambla en codigo maquina.\n\nSe usa en sistemas operativos, firmware embebido, bootloaders, drivers, ingenieria inversa, rutinas criticas de rendimiento y material educativo donde importa el control directo del hardware y las instrucciones.",
    },
    it: {
      name: "Assembly",
      description:
        "Una famiglia di linguaggi di basso livello che corrispondono strettamente alle istruzioni per specifiche architetture CPU.",
      longDescription:
        "Il linguaggio Assembly rappresenta le istruzioni del processore, i registri, i modi di indirizzamento della memoria, le etichette, le direttive e le macro utilizzando testo simbolico che viene assemblato in codice macchina.\n\nViene utilizzato nei sistemi operativi, nel firmware embedded, nei bootloader, nei driver, nell'ingegneria inversa, nelle routine critiche per le prestazioni e nei materiali didattici dove il controllo diretto sull'hardware e sulle istruzioni e importante.",
    },
    fr: {
      name: "Assembly",
      description:
        "Une famille de langages de bas niveau qui correspondent etroitement aux instructions de la machine pour des architectures de CPU specifiques.",
      longDescription:
        "Le langage assembleur represente les instructions du processeur, les registres, les modes d'adressage de la memoire, les etiquettes, les directives et les macros en utilisant du texte symbolique qui est assemble en code machine.\n\nIl est utilise dans les systemes d'exploitation, les firmwares embarques, les chargeurs de demarrage, les pilotes, l'ingenierie inverse, les routines critiques en termes de performance et les supports pedagogiques ou un controle direct du materiel et des instructions est important.",
    },
  },
} satisfies Language;
