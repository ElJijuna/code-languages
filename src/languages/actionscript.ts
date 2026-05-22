import type { Language } from "../types";

export const actionscript = {
  slug: "actionscript",
  publishedDate: "1998-01-01",
  extensions: [".as"],
  author: "Gary Grossman / Macromedia",
  website: "https://airsdk.dev/docs/development/actionscript-3.0",
  paradigms: ["event-driven", "imperative", "object-oriented", "scripting"],
  tooling: {
    runtimes: ["Adobe Flash Player", "Adobe AIR", "Apache Royale"],
    ecosystems: ["Flash", "AIR", "Flex", "Legacy Web"],
  },
  version: "3.0",
  logo: "https://icons.iconarchive.com/icons/fatcow/farm-fresh/32/page-white-actionscript-icon.png",
  color: "#CF302A",
  i18n: {
    en: {
      name: "ActionScript",
      description:
        "An ECMAScript-based language used for Flash, AIR, Flex, and interactive media applications.",
      longDescription:
        "ActionScript is an ECMAScript-based scripting language created for interactive content, animation, rich internet applications, and application logic in the Flash platform. ActionScript 3.0 introduced a stronger type system, classes, packages, events, namespaces, and a virtual machine designed for larger applications.\n\nIt is mostly relevant today for maintaining legacy Flash, AIR, and Flex projects, migrating older interactive content, and understanding codebases built around Adobe runtime technologies.",
    },
    es: {
      name: "ActionScript",
      description:
        "Un lenguaje basado en ECMAScript usado para Flash, AIR, Flex y aplicaciones multimedia interactivas.",
      longDescription:
        "ActionScript es un lenguaje de scripting basado en ECMAScript creado para contenido interactivo, animacion, aplicaciones rich internet y logica de aplicaciones en la plataforma Flash. ActionScript 3.0 introdujo un sistema de tipos mas fuerte, clases, paquetes, eventos, namespaces y una maquina virtual disenada para aplicaciones mas grandes.\n\nHoy es relevante principalmente para mantener proyectos legacy de Flash, AIR y Flex, migrar contenido interactivo antiguo y entender codebases construidas alrededor de tecnologias runtime de Adobe.",
    },
  },
} satisfies Language;
