import type { Language } from "../types";

export const pascal = {
  slug: "pascal",
  publishedDate: "1970-01-01",
  extensions: [".pas", ".pp", ".inc", ".lpr", ".dpr", ".dfm"],
  author: "Niklaus Wirth",
  website: "https://www.freepascal.org",
  paradigms: ["structured", "imperative", "procedural", "object-oriented"],
  tooling: {
    runtimes: ["Free Pascal", "Delphi Runtime"],
    packageManagers: ["fppkg", "OPM"],
    ecosystems: ["Desktop", "Education", "Embedded", "Cross-platform Native"],
  },
  version: "3.2.2",
  logo: "https://cdn.simpleicons.org/lazarus/000000",
  color: "#000000",
  i18n: {
    en: {
      name: "Pascal",
      description:
        "A structured programming language and Object Pascal family used for native applications.",
      longDescription:
        "Pascal is a structured programming language created by Niklaus Wirth and later expanded through Object Pascal dialects such as Delphi and Free Pascal. It emphasizes readable syntax, clear program structure, strong typing, procedures, records, units, and native compilation.\n\nIt is used in education, desktop software, cross-platform native applications, embedded systems, legacy business tools, and Lazarus or Delphi projects that rely on Pascal and Object Pascal source files.",
    },
    es: {
      name: "Pascal",
      description:
        "Un lenguaje estructurado y familia Object Pascal usado para aplicaciones nativas.",
      longDescription:
        "Pascal es un lenguaje de programacion estructurada creado por Niklaus Wirth y luego expandido mediante dialectos Object Pascal como Delphi y Free Pascal. Enfatiza sintaxis legible, estructura clara, tipado fuerte, procedimientos, records, units y compilacion nativa.\n\nSe usa en educacion, software de escritorio, aplicaciones nativas multiplataforma, sistemas embebidos, herramientas legacy de negocio y proyectos Lazarus o Delphi basados en archivos fuente Pascal y Object Pascal.",
    },
    it: {
      name: "Pascal",
      description:
        "Un linguaggio di programmazione strutturato e la famiglia Object Pascal, utilizzata per applicazioni native.",
      longDescription:
        "Pascal e un linguaggio di programmazione strutturato creato da Niklaus Wirth e successivamente esteso attraverso dialetti Object Pascal come Delphi e Free Pascal. Enfatizza una sintassi leggibile, una struttura di programma chiara, un forte tipaggio, procedure, record, unita e compilazione nativa.\n\nE utilizzato in ambito educativo, software desktop, applicazioni native cross-platform, sistemi embedded, strumenti aziendali legacy e progetti Lazarus o Delphi che si basano su file sorgente Pascal e Object Pascal.",
    },
    fr: {
      name: "Pascal",
      description:
        "Un langage de programmation structure et la famille Object Pascal utilises pour les applications natives.",
      longDescription:
        "Object Pascal est un langage de programmation structure cree par Niklaus Wirth et ulterieurement etendu grace a des dialectes tels que Delphi et Free Pascal. Il met l'accent sur une syntaxe lisible, une structure de programme claire, un typage fort, des procedures, des enregistrements, des unites et une compilation native. \n\nIl est utilise dans l'education, les logiciels de bureau, les applications natives multiplateformes, les systemes embarques, les outils d'entreprise herites et les projets Lazarus ou Delphi qui s'appuient sur les fichiers source Pascal et Object Pascal.",
    },
  },
} satisfies Language;
