import type { Language } from "../types";

export const perl = {
  slug: "perl",
  publishedDate: "1987-12-18",
  extensions: [".pl", ".pm", ".pod", ".t", ".psgi"],
  author: "Larry Wall",
  website: "https://www.perl.org",
  paradigms: ["functional", "imperative", "object-oriented", "procedural", "scripting"],
  tooling: {
    runtimes: ["Perl interpreter", "mod_perl", "PSGI/Plack"],
    packageManagers: ["CPAN", "cpanm", "Carton"],
    ecosystems: ["Unix", "Web", "Text Processing", "System Administration", "Bioinformatics"],
  },
  version: "5.42.2",
  logo: "https://cdn.simpleicons.org/perl/39457E",
  i18n: {
    en: {
      name: "Perl",
      description:
        "A flexible scripting language for text processing, automation, web systems, and CPAN modules.",
      longDescription:
        "Perl is a high-level scripting language created by Larry Wall, known for practical text processing, regular expressions, system scripting, dynamic typing, CPAN, and a strong culture of reusable modules. Perl 5 remains the main production language in the Perl family.\n\nIt is used for Unix automation, log processing, legacy web applications, bioinformatics, data munging, release tooling, network services, and long-lived operational scripts where expressive text handling and mature libraries matter.",
    },
    es: {
      name: "Perl",
      description:
        "Un lenguaje de scripting flexible para procesamiento de texto, automatizacion, web y modulos CPAN.",
      longDescription:
        "Perl es un lenguaje de scripting de alto nivel creado por Larry Wall, conocido por el procesamiento practico de texto, expresiones regulares, scripting de sistemas, tipado dinamico, CPAN y una cultura fuerte de modulos reutilizables. Perl 5 sigue siendo el lenguaje principal de produccion dentro de la familia Perl.\n\nSe usa en automatizacion Unix, procesamiento de logs, aplicaciones web legacy, bioinformatica, transformacion de datos, tooling de releases, servicios de red y scripts operacionales de larga vida donde importan el manejo expresivo de texto y librerias maduras.",
    },
  },
} satisfies Language;
