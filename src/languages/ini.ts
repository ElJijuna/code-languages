import type { Language } from "../types";

export const ini = {
  slug: "ini",
  publishedDate: "1985-01-01",
  extensions: [".ini"],
  author: "Microsoft / community conventions",
  website: "https://en.wikipedia.org/wiki/INI_file",
  paradigms: ["configuration", "declarative", "key-value"],
  tooling: {
    ecosystems: ["Windows", "Configuration", "Desktop Applications", "Legacy Systems"],
  },
  version: "Informal format",
  logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Configure.svg",
  color: "#525252",
  i18n: {
    en: {
      name: "INI",
      description:
        "A simple section-based configuration format built around keys, values, and comments.",
      longDescription:
        "INI files store configuration as sections with key-value pairs, usually with comments and implementation-specific parsing rules. The format is intentionally simple and has no single formal standard, so behavior can vary across parsers.\n\nINI-style files are common in Windows applications, legacy desktop software, game configuration, developer tools, and small projects that need readable configuration without a heavier serialization format.",
    },
    es: {
      name: "INI",
      description:
        "Un formato simple de configuracion por secciones basado en claves, valores y comentarios.",
      longDescription:
        "Los archivos INI guardan configuracion como secciones con pares clave-valor, normalmente con comentarios y reglas de parseo especificas de cada implementacion. El formato es intencionalmente simple y no tiene un estandar formal unico, por lo que el comportamiento puede variar entre parsers.\n\nLos archivos estilo INI son comunes en aplicaciones Windows, software de escritorio legacy, configuracion de juegos, herramientas de desarrollo y proyectos pequenos que necesitan configuracion legible sin un formato de serializacion mas pesado.",
    },
    it: {
      name: "INI",
      description:
        "Un formato di configurazione semplice basato su sezioni, costruito attorno a chiavi, valori e commenti.",
      longDescription:
        "I file INI memorizzano la configurazione come sezioni con coppie chiave-valore, solitamente con commenti e regole di parsing specifiche per l'implementazione. Il formato e intenzionalmente semplice e non ha uno standard formale unico, quindi il comportamento puo variare a seconda dei parser.\n\nI file di tipo INI sono comuni nelle applicazioni Windows, nel software desktop legacy, nella configurazione di giochi, negli strumenti di sviluppo e in piccoli progetti che necessitano di una configurazione leggibile senza un formato di serializzazione piu pesante.",
    },
    fr: {
      name: "INI",
      description:
        "Un format de configuration simple base sur des sections, des cles, des valeurs et des commentaires.",
      longDescription:
        "Les fichiers INI stockent la configuration sous forme de sections avec des paires cle-valeur, generalement avec des commentaires et des regles d'analyse specifiques a l'implementation. Le format est intentionnellement simple et n'a pas de norme formelle unique, de sorte que le comportement peut varier selon les interpretes.\n\nLes fichiers de type INI sont courants dans les applications Windows, les logiciels de bureau herites, la configuration des jeux, les outils de developpement et les petits projets qui ont besoin d'une configuration lisible sans un format de serialisation plus lourd.",
    },
  },
} satisfies Language;
