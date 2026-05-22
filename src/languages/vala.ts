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
  },
} satisfies Language;
