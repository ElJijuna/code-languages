import type { Language } from "../types";

export const dart = {
  slug: "dart",
  publishedDate: "2011-10-10",
  extensions: [".dart"],
  author: "Google",
  website: "https://dart.dev",
  paradigms: ["class-based", "functional", "object-oriented", "structured"],
  tooling: {
    runtimes: ["Dart VM", "Dart Native", "JavaScript"],
    packageManagers: ["pub"],
    ecosystems: ["Flutter", "Web", "Server-side"],
  },
  version: "3.11.6",
  logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Dart_programming_language_logo.svg",
  color: "#0175C2",
  i18n: {
    en: {
      name: "Dart",
      description:
        "A client-optimized language for fast apps across mobile, web, desktop, and server.",
      longDescription:
        "Dart is a programming language from Google designed for productive, client-oriented application development. It combines sound null safety, classes, generics, async programming, isolates, ahead-of-time compilation, just-in-time development workflows, and compilation to JavaScript.\n\nIt is widely used with Flutter for mobile, web, and desktop apps, and also supports command-line tools, backend services, build systems, and teams that want a typed language with fast iteration and native compilation paths.",
    },
    es: {
      name: "Dart",
      description:
        "Un lenguaje optimizado para crear apps rapidas en movil, web, escritorio y servidor.",
      longDescription:
        "Dart es un lenguaje de programacion de Google disenado para el desarrollo productivo de aplicaciones orientadas al cliente. Combina null safety solido, clases, genericos, programacion asincrona, isolates, compilacion anticipada, flujos de desarrollo just-in-time y compilacion a JavaScript.\n\nSe usa ampliamente con Flutter para aplicaciones moviles, web y de escritorio, y tambien soporta herramientas de linea de comandos, servicios backend, sistemas de build y equipos que quieren un lenguaje tipado con iteracion rapida y rutas de compilacion nativa.",
    },
  },
} satisfies Language;
