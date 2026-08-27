import type { Language } from '../types.js';

export const uiua = {
  slug: 'uiua',
  publishedDate: '2023-02-27',
  extensions: ['.ua'],
  author: 'Kai Schmidt and contributors',
  website: 'https://www.uiua.org',
  paradigms: ['array', 'tacit', 'stack-based'],
  status: 'experimental',
  tooling: {
    runtimes: ['Uiua interpreter'],
    packageManagers: ['Cargo'],
    ecosystems: ['Array Programming', 'Rust', 'Multimedia'],
  },
  version: '0.19.0',
  logo: 'https://raw.githubusercontent.com/uiua-lang/uiua/main/src/assets/uiua-logo-512.png',
  color: '#181818',
  i18n: {
    en: {
      name: 'Uiua',
      description:
        'A general-purpose, stack-based array language focused on tacit code and concise notation.',
      longDescription:
        'Uiua is a general-purpose array programming language that combines rank-polymorphic arrays with a fully tacit, stack-based execution model. Its compact glyphs aim to keep dense programs readable while avoiding variable-heavy ceremony.\n\nThe interpreter includes multimedia and system functions, a language server, a browser playground, and embedding support for Rust. The language is powerful but remains experimental while its design continues to evolve.',
    },
    es: {
      name: 'Uiua',
      description:
        'Lenguaje general de arreglos y pila, centrado en código tácito y notación concisa.',
      longDescription:
        'Uiua es un lenguaje de programación de arreglos de propósito general que combina arreglos polimórficos por rango con un modelo de ejecución tácito basado en pila. Sus glifos compactos buscan mantener legibles los programas densos sin depender de muchas variables.\n\nEl intérprete incluye funciones multimedia y de sistema, servidor de lenguaje, entorno web y soporte para integrarse con Rust. El lenguaje es potente, pero sigue siendo experimental mientras su diseño evoluciona.',
    },
    it: {
      name: 'Uiua',
      description:
        'Linguaggio general-purpose per array e stack, incentrato su codice tacito e notazione concisa.',
      longDescription:
        'Uiua è un linguaggio di programmazione general-purpose per array che combina array polimorfici rispetto al rango con un modello di esecuzione completamente tacito e basato su stack. I suoi glifi compatti mirano a mantenere leggibili i programmi densi.\n\nL’interprete include funzioni multimediali e di sistema, un language server, un ambiente web e il supporto per l’integrazione con Rust. Il linguaggio è potente, ma resta sperimentale mentre il progetto continua a evolvere.',
    },
    fr: {
      name: 'Uiua',
      description:
        'Langage généraliste de tableaux et de pile, axé sur le code tacite et une notation concise.',
      longDescription:
        'Uiua est un langage généraliste de programmation par tableaux qui associe des tableaux polymorphes en rang à un modèle d’exécution entièrement tacite et fondé sur une pile. Ses glyphes compacts visent à garder lisibles les programmes denses.\n\nL’interpréteur propose des fonctions multimédias et système, un serveur de langage, un environnement web et une intégration avec Rust. Le langage est puissant, mais reste expérimental pendant que sa conception évolue.',
    },
    de: {
      name: 'Uiua',
      description:
        'Eine universelle Array- und Stack-Sprache mit Fokus auf implizitem Code und knapper Notation.',
      longDescription:
        'Uiua ist eine universelle Array-Programmiersprache, die rangpolymorphe Arrays mit einem vollständig impliziten, stackbasierten Ausführungsmodell verbindet. Ihre kompakten Glyphen sollen dichte Programme ohne viele Variablen lesbar halten.\n\nDer Interpreter enthält Multimedia- und Systemfunktionen, einen Language Server, eine Webumgebung und Unterstützung zur Einbettung in Rust. Die Sprache ist leistungsfähig, bleibt aber während ihrer Weiterentwicklung experimentell.',
    },
    pt: {
      name: 'Uiua',
      description: 'Linguagem geral de arrays e pilha, focada em código tácito e notação concisa.',
      longDescription:
        'Uiua é uma linguagem de programação de propósito geral orientada a arrays que combina arrays polimórficos por posto com um modelo de execução totalmente tácito e baseado em pilha. Seus glifos compactos buscam manter programas densos legíveis.\n\nO interpretador inclui funções multimídia e de sistema, servidor de linguagem, ambiente web e suporte para integração com Rust. A linguagem é poderosa, mas continua experimental enquanto seu projeto evolui.',
    },
  },
} satisfies Language;
