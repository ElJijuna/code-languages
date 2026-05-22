import type { Language } from "../types";

export const ada = {
  slug: "ada",
  publishedDate: "1980-01-01",
  extensions: [".adb", ".ads", ".ada"],
  author: "Jean Ichbiah / CII Honeywell Bull",
  website: "https://www.adaic.org",
  paradigms: ["imperative", "object-oriented", "concurrent", "real-time", "modular"],
  tooling: {
    runtimes: ["Native", "GNAT Runtime", "Ravenscar"],
    packageManagers: ["Alire"],
    ecosystems: ["Embedded", "Aerospace", "Defense", "Safety-critical Systems"],
  },
  version: "Ada 2022",
  logo: "https://cdn.simpleicons.org/ada/02F88C",
  color: "#02F88C",
  i18n: {
    en: {
      name: "Ada",
      description:
        "A strongly typed language for reliable, maintainable, and safety-critical software.",
      longDescription:
        "Ada is a general-purpose programming language designed for reliability, readability, strong typing, modularity, concurrency, and real-time systems. Modern Ada includes packages, generics, tasking, protected objects, contracts, object-oriented features, and precise control over representation.\n\nIt is used in aerospace, defense, transportation, embedded systems, high-integrity applications, industrial control, and software where long-term maintainability and correctness are central requirements.",
    },
    es: {
      name: "Ada",
      description:
        "Un lenguaje de tipado fuerte para software confiable, mantenible y critico para la seguridad.",
      longDescription:
        "Ada es un lenguaje de programacion de proposito general disenado para confiabilidad, legibilidad, tipado fuerte, modularidad, concurrencia y sistemas de tiempo real. Ada moderno incluye paquetes, genericos, tareas, objetos protegidos, contratos, caracteristicas orientadas a objetos y control preciso de representacion.\n\nSe usa en aeroespacial, defensa, transporte, sistemas embebidos, aplicaciones de alta integridad, control industrial y software donde la mantenibilidad a largo plazo y la correccion son requisitos centrales.",
    },
    it: {
      name: "Ada",
      description:
        "Un linguaggio fortemente tipizzato per software affidabile, manutenibile e critico per la sicurezza.",
      longDescription:
        "Ada e un linguaggio di programmazione di uso generale progettato per l'affidabilita, la leggibilita, la tipizzazione forte, la modularita, la concorrenza e i sistemi in tempo reale. Ada moderna include pacchetti, generici, tasking, oggetti protetti, contratti, funzionalita orientate agli oggetti e un controllo preciso sulla rappresentazione.\n\nE utilizzato in aerospazio, difesa, trasporti, sistemi embedded, applicazioni ad alta integrita, controllo industriale e software in cui la manutenibilita e la correttezza a lungo termine sono requisiti centrali.",
    },
    fr: {
      name: "Ada",
      description:
        "Un langage fortement type pour les logiciels fiables, maintenables et critiques en termes de securite.",
      longDescription:
        "Ada est un langage de programmation general a usage, concu pour la fiabilite, la lisibilite, le typage fort, la modularite, la concurrence et les systemes temps reel. Ada moderne inclut des packages, des generiques, le multithreading, des objets proteges, des contrats, des fonctionnalites orientees objet et un controle precis de la representation.\n\nIl est utilise dans l'aerospatiale, la defense, les transports, les systemes embarques, les applications a haute integrite, le controle industriel et les logiciels ou la maintenabilite et la correction a long terme sont des exigences centrales.",
    },
  },
} satisfies Language;
