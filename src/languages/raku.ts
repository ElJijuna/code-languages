import type { Language } from '@/types';

export const raku = {
  slug: 'raku',
  publishedDate: '2015-12-25',
  extensions: ['.raku', '.rakumod', '.rakudoc', '.rakutest', '.p6', '.pm6'],
  author: 'Raku Community',
  website: 'https://raku.org',
  paradigms: ['multi-paradigm', 'object-oriented', 'functional', 'concurrent'],
  tooling: {
    runtimes: ['Rakudo', 'MoarVM'],
    packageManagers: ['zef'],
    ecosystems: ['Raku', 'CLI', 'Text Processing'],
  },
  version: '6.d',
  logo: 'https://github.com/Raku.png',
  color: '#0000FB',
  i18n: {
    en: {
      name: 'Raku',
      description: 'A multi-paradigm language with grammars, concurrency, and rich dispatch.',
      longDescription:
        'Raku is a sibling of Perl with gradual typing, signatures, multiple dispatch, grammars, junctions, concurrency primitives, and expressive operators. It is designed for both small scripts and larger language-oriented programs.\n\nIt is used for text processing, command-line tools, parsers, automation, experimentation, and applications that benefit from built-in grammar support.',
    },
    es: {
      name: 'Raku',
      description: 'Un lenguaje multiparadigma con grammars, concurrencia y dispatch expresivo.',
      longDescription:
        'Raku es un lenguaje hermano de Perl con tipado gradual, firmas, multiple dispatch, grammars, junctions, primitivas concurrentes y operadores expresivos. Sirve tanto para scripts pequenos como para programas orientados a lenguajes.\n\nSe usa en procesamiento de texto, herramientas de linea de comandos, parsers, automatizacion, experimentacion y aplicaciones que aprovechan soporte integrado para grammars.',
    },
    it: {
      name: 'Raku',
      description: 'Un linguaggio multi-paradigma con grammatiche, concorrenza e dispatch ricco.',
      longDescription:
        "Raku e un linguaggio affine a Perl con tipizzazione graduale, firme, dispatch multiplo, grammatiche, giunzioni, primitive di concorrenza e operatori espressivi. E progettato sia per piccoli script che per programmi piu grandi orientati al linguaggio.\n\nViene utilizzato per l'elaborazione di testo, strumenti da riga di comando, parser, automazione, sperimentazione e applicazioni che beneficiano del supporto integrato per le grammatiche.",
    },
    fr: {
      name: 'Raku',
      description:
        'Un langage multi-paradigme avec des grammaires, la concurrence et un dispatch riche.',
      longDescription:
        "Raku est un langage apparente a Perl, avec un typage progressif, des signatures, un dispatch multiple, des grammaires, des junctions, des primitives de concurrence et des operateurs expressifs. Il est concu pour les petits scripts et les programmes plus importants orientes langage.\n\nIl est utilise pour le traitement de texte, les outils en ligne de commande, les parseurs, l'automatisation, l'experimentation et les applications qui beneficient d'un support de grammaire integre.",
    },
    de: {
      name: 'Raku',
      description:
        'Eine mehrparadigmige Sprache mit Grammatiken, Nebenläufigkeit und umfangreicher Dispatch-Funktionalität.',
      longDescription:
        'Raku ist ein Verwandter von Perl mit progressiver Typisierung, Signatur, Mehrfachdispatch, Grammatiken, Junctions, Nebenläufigkeitsprimitiven und ausdrucksstarken Operatoren. Es ist für kleine Skripte und größere, sprachorientierte Programme konzipiert.\n\nEs wird für Textverarbeitung, Kommandozeilen-Tools, Parser, Automatisierung, Experimente und Anwendungen verwendet, die von integrierter Grammatikunterstützung profitieren.',
    },
    pt: {
      name: 'Raku',
      description: 'Linguagem multi-paradigma com gramáticas, concorrência e despacho rico.',
      longDescription:
        'Raku é um parente do Perl com tipagem gradual, assinaturas, despacho múltiplo, gramáticas, junções, primitivas de concorrência e operadores expressivos. É projetado para scripts pequenos e programas maiores orientados por linguagem.\n\nÉ usado para processamento de texto, ferramentas de linha de comando, analisadores, automação, experimentação e aplicações que se beneficiam do suporte de gramática embutido.',
    },
  },
} satisfies Language;
