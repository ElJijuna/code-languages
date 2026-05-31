import type { Language } from "../types";

export const eiffel = {
  slug: "eiffel",
  publishedDate: "1986-01-01",
  extensions: [".e"],
  author: "Bertrand Meyer",
  website: "https://www.eiffel.org",
  paradigms: ["object-oriented", "concurrent", "generic", "imperative"],
  tooling: {
    runtimes: ["EiffelStudio", "Native"],
    packageManagers: ["iron"],
    ecosystems: ["Enterprise", "Systems"],
  },
  version: "24.05",
  logo: "https://www.eiffel.org/images/eiffel_logo.png",
  color: "#4D6977",
  i18n: {
    en: {
      name: "Eiffel",
      description:
        "An object-oriented language by Bertrand Meyer that pioneered Design by Contract, generics, and multiple inheritance.",
      longDescription:
        "Eiffel is an object-oriented programming language designed by Bertrand Meyer and first released in 1986. It introduced the concept of Design by Contract (DbC), where preconditions, postconditions, and class invariants are first-class language features that enforce correctness at runtime.\n\nEiffel supports multiple inheritance, generics, and automatic memory management. It has influenced many modern languages including Java and C#. EiffelStudio is the primary IDE and compiler, targeting native code. Eiffel is used in safety-critical, financial, and enterprise software systems.",
    },
    es: {
      name: "Eiffel",
      description:
        "Un lenguaje orientado a objetos de Bertrand Meyer que fue pionero en el Diseño por Contrato, los genéricos y la herencia múltiple.",
      longDescription:
        "Eiffel es un lenguaje de programación orientado a objetos diseñado por Bertrand Meyer y lanzado por primera vez en 1986. Introdujo el concepto de Diseño por Contrato (DbC), donde las precondiciones, postcondiciones e invariantes de clase son características del lenguaje de primera clase.\n\nEiffel soporta herencia múltiple, genéricos y gestión automática de memoria. Ha influenciado muchos lenguajes modernos incluyendo Java y C#. Se usa en sistemas de software de misión crítica, financieros y empresariales.",
    },
    it: {
      name: "Eiffel",
      description:
        "Un linguaggio orientato agli oggetti di Bertrand Meyer che ha introdotto il Design by Contract, i generici e l'ereditarietà multipla.",
      longDescription:
        "Eiffel è un linguaggio di programmazione orientato agli oggetti progettato da Bertrand Meyer e rilasciato per la prima volta nel 1986. Ha introdotto il concetto di Design by Contract (DbC), dove le precondizioni, le postcondizioni e gli invarianti di classe sono funzionalità di prima classe del linguaggio.\n\nEiffel supporta l'ereditarietà multipla, i generici e la gestione automatica della memoria. Ha influenzato molti linguaggi moderni tra cui Java e C#. Viene utilizzato in sistemi software mission-critical, finanziari e aziendali.",
    },
    fr: {
      name: "Eiffel",
      description:
        "Un langage orienté objet de Bertrand Meyer qui a introduit la Conception par Contrat, les génériques et l'héritage multiple.",
      longDescription:
        "Eiffel est un langage de programmation orienté objet conçu par Bertrand Meyer et publié pour la première fois en 1986. Il a introduit le concept de Conception par Contrat (DbC), où les préconditions, les postconditions et les invariants de classe sont des fonctionnalités de première classe du langage.\n\nEiffel supporte l'héritage multiple, les génériques et la gestion automatique de la mémoire. Il a influencé de nombreux langages modernes dont Java et C#. Il est utilisé dans les systèmes logiciels critiques, financiers et d'entreprise.",
    },
    de: {
      name: "Eiffel",
      description:
        "Eine objektorientierte Sprache von Bertrand Meyer, die Design by Contract, Generics und Mehrfachvererbung eingeführt hat.",
      longDescription:
        "Eiffel ist eine objektorientierte Programmiersprache, die von Bertrand Meyer entworfen und erstmals 1986 veröffentlicht wurde. Sie führte das Konzept des Design by Contract (DbC) ein, bei dem Vorbedingungen, Nachbedingungen und Klasseninvarianten erstklassige Sprachmerkmale sind.\n\nEiffel unterstützt Mehrfachvererbung, Generics und automatisches Speichermanagement. Es hat viele moderne Sprachen wie Java und C# beeinflusst. EiffelStudio ist die primäre IDE und der Compiler. Eiffel wird in sicherheitskritischen, finanziellen und Unternehmenssoftwaresystemen eingesetzt.",
    },
    pt: {
      name: "Eiffel",
      description:
        "Uma linguagem orientada a objetos de Bertrand Meyer que foi pioneira no Design by Contract, generics e herança múltipla.",
      longDescription:
        "Eiffel é uma linguagem de programação orientada a objetos projetada por Bertrand Meyer e lançada pela primeira vez em 1986. Introduziu o conceito de Design by Contract (DbC), onde pré-condições, pós-condições e invariantes de classe são recursos de primeira classe da linguagem.\n\nEiffel suporta herança múltipla, generics e gerenciamento automático de memória. Influenciou muitas linguagens modernas incluindo Java e C#. EiffelStudio é a IDE e compilador principal. É usado em sistemas de software de missão crítica, financeiros e empresariais.",
    },
  },
} satisfies Language;
