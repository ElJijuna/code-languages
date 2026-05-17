import type { Language } from "../types";

export const tcl = {
  slug: "tcl",
  publishedDate: "1988-01-01",
  extensions: [".tcl", ".tm", ".test"],
  author: "John Ousterhout",
  website: "https://www.tcl-lang.org",
  paradigms: ["scripting", "command", "event-driven", "embeddable"],
  tooling: {
    runtimes: ["Tcl", "Tk", "tclsh", "wish"],
    packageManagers: ["Teapot", "Tcl Modules"],
    ecosystems: ["GUI Applications", "EDA", "Automation", "Embedded Scripting"],
  },
  version: "9.0.3",
  logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Tcl.svg",
  i18n: {
    en: {
      name: "Tcl/Tk",
      description:
        "An embeddable command language and GUI toolkit for automation, tools, and applications.",
      longDescription:
        "Tcl is a dynamic command language designed for embedding, scripting, automation, and extension. Tk is its cross-platform GUI toolkit. Together they provide a simple command syntax, event loop, strings-as-data model, embeddability, and portable user interface components.\n\nTcl/Tk is used for desktop tools, EDA and CAD automation, test harnesses, embedded scripting, build and deployment scripts, rapid prototypes, and applications that need a small extensible command language.",
    },
    es: {
      name: "Tcl/Tk",
      description:
        "Un lenguaje de comandos embebible y toolkit GUI para automatizacion, herramientas y aplicaciones.",
      longDescription:
        "Tcl es un lenguaje dinamico de comandos disenado para embedding, scripting, automatizacion y extension. Tk es su toolkit GUI multiplataforma. Juntos ofrecen una sintaxis simple de comandos, event loop, modelo de strings como datos, capacidad de embedding y componentes de interfaz portables.\n\nTcl/Tk se usa en herramientas de escritorio, automatizacion EDA y CAD, bancos de prueba, scripting embebido, scripts de build y despliegue, prototipos rapidos y aplicaciones que necesitan un lenguaje de comandos pequeno y extensible.",
    },
  },
} satisfies Language;
