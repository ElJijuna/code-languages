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
  },
} satisfies Language;
