import type { Language } from "../types";

export const mustache = {
  slug: "mustache",
  publishedDate: "2009-06-01",
  extensions: [".mustache", ".mst"],
  author: "Chris Wanstrath",
  website: "https://mustache.github.io",
  paradigms: ["declarative", "templating"],
  tooling: {
    ecosystems: ["Web", "Node.js", "Ruby", "Python", "Java", "Go"],
  },
  version: "1.0",
  logo: "https://mustache.github.io/images/mustache.png",
  color: "#974A01",
  i18n: {
    en: {
      name: "Mustache",
      description:
        "A logic-less template language with implementations in many programming languages, using double-brace delimiters.",
      longDescription:
        "Mustache is a lightweight, logic-less template language that uses double curly braces ({{ }}) as delimiters for variable interpolation, sections, and partials. By avoiding conditionals and loops in the template itself, Mustache enforces a clean separation between logic and presentation.\n\nIt has official and community implementations in over 40 programming languages including JavaScript, Ruby, Python, Java, Go, and PHP. Mustache is used for generating HTML, configuration files, email bodies, and any text-based output where a simple substitution model suffices.",
    },
    es: {
      name: "Mustache",
      description:
        "Un lenguaje de plantillas sin lógica con implementaciones en muchos lenguajes de programación, usando delimitadores de llaves dobles.",
      longDescription:
        "Mustache es un lenguaje de plantillas ligero y sin lógica que usa llaves dobles ({{ }}) como delimitadores para interpolación de variables, secciones y parciales. Al evitar condicionales y bucles en la propia plantilla, Mustache impone una separación clara entre lógica y presentación.\n\nTiene implementaciones oficiales y de la comunidad en más de 40 lenguajes de programación. Se usa para generar HTML, archivos de configuración, cuerpos de correos electrónicos y cualquier salida basada en texto.",
    },
    it: {
      name: "Mustache",
      description:
        "Un linguaggio di template senza logica con implementazioni in molti linguaggi di programmazione, che usa delimitatori a doppie graffe.",
      longDescription:
        "Mustache è un linguaggio di template leggero e senza logica che usa doppie graffe ({{ }}) come delimitatori per l'interpolazione di variabili, sezioni e parziali. Evitando condizionali e cicli nel template stesso, Mustache impone una netta separazione tra logica e presentazione.\n\nHa implementazioni ufficiali e della comunità in oltre 40 linguaggi di programmazione. È utilizzato per generare HTML, file di configurazione, corpi di email e qualsiasi output basato su testo.",
    },
    fr: {
      name: "Mustache",
      description:
        "Un langage de template sans logique avec des implémentations dans de nombreux langages de programmation, utilisant des délimiteurs à doubles accolades.",
      longDescription:
        "Mustache est un langage de template léger et sans logique qui utilise des doubles accolades ({{ }}) comme délimiteurs pour l'interpolation de variables, les sections et les partiels. En évitant les conditionnelles et les boucles dans le template lui-même, Mustache impose une séparation nette entre la logique et la présentation.\n\nIl dispose d'implémentations officielles et communautaires dans plus de 40 langages de programmation. Mustache est utilisé pour générer du HTML, des fichiers de configuration, des corps d'emails et tout output textuel.",
    },
    de: {
      name: "Mustache",
      description:
        "Eine logiklose Template-Sprache mit Implementierungen in vielen Programmiersprachen, die doppelte geschweifte Klammern als Begrenzer verwendet.",
      longDescription:
        "Mustache ist eine leichtgewichtige, logiklose Template-Sprache, die doppelte geschweifte Klammern ({{ }}) als Begrenzer für Variableninterpolation, Abschnitte und Partials verwendet. Durch das Vermeiden von Bedingungen und Schleifen im Template selbst erzwingt Mustache eine saubere Trennung zwischen Logik und Darstellung.\n\nEs gibt offizielle und Community-Implementierungen in über 40 Programmiersprachen. Mustache wird zur Generierung von HTML, Konfigurationsdateien, E-Mail-Texten und beliebigen textbasierten Ausgaben verwendet.",
    },
    pt: {
      name: "Mustache",
      description:
        "Uma linguagem de template sem lógica com implementações em muitas linguagens de programação, usando delimitadores de chaves duplas.",
      longDescription:
        "Mustache é uma linguagem de template leve e sem lógica que usa chaves duplas ({{ }}) como delimitadores para interpolação de variáveis, seções e parciais. Ao evitar condicionais e loops no próprio template, o Mustache impõe uma separação limpa entre lógica e apresentação.\n\nTem implementações oficiais e da comunidade em mais de 40 linguagens de programação. É usado para gerar HTML, arquivos de configuração, corpos de e-mail e qualquer saída baseada em texto.",
    },
  },
} satisfies Language;
