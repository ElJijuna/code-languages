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
    it: {
      name: "ActionScript",
      description:
        "Un linguaggio basato su ECMAScript utilizzato per Flash, AIR, Flex e applicazioni multimediali interattive.",
      longDescription:
        "ActionScript e un linguaggio di scripting basato su ECMAScript creato per contenuti interattivi, animazioni, applicazioni di internet ricco e logica di applicazioni nella piattaforma Flash. ActionScript 3.0 ha introdotto un sistema di tipi piu robusto, classi, pacchetti, eventi, spazi dei nomi e una macchina virtuale progettata per applicazioni piu grandi.\n\nE principalmente rilevante oggi per la manutenzione di progetti legacy Flash, AIR e Flex, per la migrazione di contenuti interattivi piu vecchi e per la comprensione di codebase basate su tecnologie di runtime di Adobe.",
    },
    fr: {
      name: "ActionScript",
      description:
        "Un langage base sur ECMAScript utilise pour Flash, AIR, Flex et les applications multimedias interactives.",
      longDescription:
        "ActionScript est un langage de script base sur ECMAScript cree pour le contenu interactif, l'animation, les applications riches en fonctionnalites et la logique d'application sur la plateforme Flash. ActionScript 3.0 a introduit un systeme de types plus fort, des classes, des packages, des evenements, des espaces de noms et une machine virtuelle concue pour les applications plus importantes.\n\nIl est principalement pertinent aujourd'hui pour la maintenance des projets Flash, AIR et Flex existants, la migration du contenu interactif plus ancien et la comprehension des bases de code construites autour des technologies de runtime d'Adobe.",
    },
  },
} satisfies Language;
