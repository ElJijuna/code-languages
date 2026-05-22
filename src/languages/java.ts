import type { Language } from "../types";

export const java = {
  slug: "java",
  publishedDate: "1995-05-23",
  extensions: [".java"],
  author: "James Gosling / Sun Microsystems",
  website: "https://www.java.com",
  paradigms: ["class-based", "concurrent", "generic", "imperative", "object-oriented"],
  tooling: {
    runtimes: ["JVM"],
    packageManagers: ["Maven", "Gradle"],
    ecosystems: ["JVM", "Android", "Enterprise"],
  },
  version: "26",
  logo: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
  color: "#007396",
  i18n: {
    en: {
      name: "Java",
      description:
        "A class-based, object-oriented language for portable applications and services.",
      longDescription:
        "Java is a statically typed language and runtime platform designed around portability, a large standard library, managed memory, and a mature virtual machine.\n\nIt is widely used for enterprise systems, Android applications, backend services, financial platforms, distributed systems, and long-lived production software.",
    },
    es: {
      name: "Java",
      description:
        "Un lenguaje orientado a objetos basado en clases para aplicaciones y servicios portables.",
      longDescription:
        "Java es un lenguaje de tipado estatico y una plataforma de ejecucion disenada alrededor de portabilidad, una biblioteca estandar amplia, memoria gestionada y una maquina virtual madura.\n\nSe usa ampliamente en sistemas empresariales, aplicaciones Android, servicios backend, plataformas financieras, sistemas distribuidos y software de produccion de larga vida.",
    },
    it: {
      name: "Java",
      description:
        "Un linguaggio di programmazione basato su classi e orientato agli oggetti per applicazioni e servizi portatili.",
      longDescription:
        "Java e un linguaggio di programmazione e piattaforma runtime staticamente tipizzato, progettato per la portabilita, una vasta libreria standard, la gestione della memoria e una macchina virtuale matura.\n\nE ampiamente utilizzato per sistemi aziendali, applicazioni Android, servizi backend, piattaforme finanziarie, sistemi distribuiti e software di produzione a lungo termine.",
    },
    fr: {
      name: "Java",
      description:
        "Un langage de programmation oriente objet, base sur des classes, pour les applications et services portables.",
      longDescription:
        "Java est un langage de programmation et une plateforme d'execution de type statique, concue autour de la portabilite, d'une grande bibliotheque standard, de la gestion de la memoire et d'une machine virtuelle mature.\n\nIl est largement utilise pour les systemes d'entreprise, les applications Android, les services backend, les plateformes financieres, les systemes distribues et les logiciels de production a long terme.",
    },
  },
} satisfies Language;
