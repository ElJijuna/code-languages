import type { Language } from "../types";

export const vala = {
  slug: "vala",
  publishedDate: "2006-07-15",
  extensions: [".vala", ".vapi"],
  author: "Jurg Billeter / GNOME contributors",
  website: "https://vala.dev",
  paradigms: ["object-oriented", "statically typed", "gnome", "c-targeted"],
  tooling: {
    runtimes: ["GLib", "GObject"],
    packageManagers: ["Meson", "pkg-config"],
    ecosystems: ["GNOME", "GTK", "Native"],
  },
  version: "0.56.18",
  logo: "https://cdn.simpleicons.org/gnome/4A86CF",
  color: "#4A86CF",
  i18n: {
    en: {
      name: "Vala",
      description: "A GNOME-oriented language that compiles high-level syntax to C.",
      longDescription:
        "Vala provides classes, interfaces, properties, generics, signals, and async syntax over GLib and GObject conventions, compiling source into C. VAPI files describe bindings to existing C libraries.\n\nIt is used for GTK applications, GNOME libraries, native tools, bindings, and projects that want high-level source while integrating with C APIs.",
    },
    es: {
      name: "Vala",
      description: "Un lenguaje orientado a GNOME que compila sintaxis de alto nivel a C.",
      longDescription:
        "Vala ofrece clases, interfaces, propiedades, generics, signals y sintaxis async sobre las convenciones de GLib y GObject, compilando fuente hacia C. Los archivos VAPI describen bindings a bibliotecas C existentes.\n\nSe usa en aplicaciones GTK, bibliotecas GNOME, herramientas nativas, bindings y proyectos que buscan fuente de alto nivel integrada con APIs C.",
    },
    it: {
      name: "Vala",
      description: "Un linguaggio orientato a GNOME che compila la sintassi di alto livello in C.",
      longDescription:
        "Vala fornisce classi, interfacce, proprieta, generics, segnali e sintassi asincrona basate sulle convenzioni di GLib e GObject, compilando il codice sorgente in C. I file VAPI descrivono i binding alle librerie C esistenti.\n\nViene utilizzato per applicazioni GTK, librerie GNOME, strumenti nativi, binding e progetti che desiderano una sintassi di alto livello pur integrandosi con le API C.",
    },
    fr: {
      name: "Vala",
      description: "Un langage oriente GNOME qui compile une syntaxe de haut niveau en C.",
      longDescription:
        "Vala fournit des classes, des interfaces, des proprietes, des generiques, des signaux et une syntaxe asynchrone sur les conventions GLib et GObject, compilant la source en C. Les fichiers VAPI decrivent les liaisons aux bibliotheques C existantes.\n\nIl est utilise pour les applications GTK, les bibliotheques GNOME, les outils natifs, les liaisons et les projets qui souhaitent une source de haut niveau tout en s'integrant aux API C.",
    },
    de: {
      name: "Vala",
      description: "Eine GNOME-orientierte Sprache, die eine High-Level-Syntax in C kompiliert.",
      longDescription:
        "Vala bietet Klassen, Interfaces, Eigenschaften, Generics, Signale und asynchrone Syntax \u00fcber GLib und GObject-Konventionen, wobei der Quellcode in C kompiliert wird. VAPI-Dateien beschreiben Bindungen zu bestehenden C-Bibliotheken.\n\nEs wird f\u00fcr GTK-Anwendungen, GNOME-Bibliotheken, native Tools, Bindungen und Projekte verwendet, die eine High-Level-Quelle ben\u00f6tigen und gleichzeitig mit C-APIs interagieren.",
    },
    pt: {
      name: "Vala",
      description: "Linguagem orientada ao GNOME que compila a sintaxe de alto n\u00edvel para C.",
      longDescription:
        "O Vala fornece classes, interfaces, propriedades, gen\u00e9ricos, sinais e sintaxe ass\u00edncrona sobre as conven\u00e7\u00f5es GLib e GObject, compilando o c\u00f3digo fonte para C. Os arquivos .vapi descrevem as vincula\u00e7\u00f5es para bibliotecas C existentes.\n\n\u00c9 usado para aplica\u00e7\u00f5es GTK, bibliotecas GNOME, ferramentas nativas, vincula\u00e7\u00f5es e projetos que desejam uma sintaxe de alto n\u00edvel, integrando-se com APIs C.",
    },
  },
} satisfies Language;
