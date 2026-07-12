import type { Language } from '@/types';

export const c3 = {
  slug: 'c3',
  status: 'experimental',
  publishedDate: '2019-07-01',
  extensions: ['.c3', '.c3i'],
  author: 'Christoffer Lernö',
  website: 'https://c3-lang.org',
  paradigms: ['imperative', 'procedural', 'systems'],
  relations: {
    dialectOf: ['c'],
  },
  tooling: {
    runtimes: ['Native', 'LLVM'],
    ecosystems: ['Systems'],
  },
  version: '0.7.5',
  logo: 'https://avatars.githubusercontent.com/u/53541653?v=4',
  color: '#295B9A',
  i18n: {
    en: {
      name: 'C3',
      description: 'An evolution of C with modules, generics, and safety, keeping C ABI compatibility.',
      longDescription:
        'C3 is a systems programming language designed as an evolution of C rather than a replacement. It adds modules, semantic macros, generics, slices, optionals, and built-in error handling while staying close to C syntax and remaining fully ABI-compatible with existing C libraries.\n\nCompiled through LLVM, C3 targets the same niches as C — operating systems, embedded, and game development — and lets teams adopt it incrementally alongside existing C codebases.',
    },
    es: {
      name: 'C3',
      description: 'Una evolución de C con módulos, genéricos y seguridad, manteniendo compatibilidad ABI con C.',
      longDescription:
        'C3 es un lenguaje de programación de sistemas diseñado como una evolución de C y no como un reemplazo. Agrega módulos, macros semánticas, genéricos, slices, opcionales y manejo de errores integrado, manteniéndose cercano a la sintaxis de C y totalmente compatible a nivel ABI con las bibliotecas C existentes.\n\nCompilado mediante LLVM, C3 apunta a los mismos nichos que C — sistemas operativos, embebidos y desarrollo de juegos — y permite adoptarlo de forma incremental junto a bases de código C existentes.',
    },
    it: {
      name: 'C3',
      description: "Un'evoluzione di C con moduli, generics e sicurezza, mantenendo la compatibilità ABI con C.",
      longDescription:
        "C3 è un linguaggio di programmazione di sistemi progettato come evoluzione di C piuttosto che come sostituto. Aggiunge moduli, macro semantiche, generics, slice, optional e gestione degli errori integrata, restando vicino alla sintassi di C e pienamente compatibile a livello ABI con le librerie C esistenti.\n\nCompilato tramite LLVM, C3 punta alle stesse nicchie di C — sistemi operativi, embedded e sviluppo di giochi — e consente un'adozione incrementale accanto alle basi di codice C esistenti.",
    },
    fr: {
      name: 'C3',
      description: 'Une évolution de C avec modules, génériques et sûreté, compatible ABI avec C.',
      longDescription:
        "C3 est un langage de programmation système conçu comme une évolution de C plutôt qu'un remplacement. Il ajoute des modules, des macros sémantiques, des génériques, des slices, des optionnels et une gestion d'erreurs intégrée, tout en restant proche de la syntaxe C et entièrement compatible ABI avec les bibliothèques C existantes.\n\nCompilé via LLVM, C3 vise les mêmes niches que C — systèmes d'exploitation, embarqué et développement de jeux — et permet une adoption progressive aux côtés des bases de code C existantes.",
    },
    de: {
      name: 'C3',
      description: 'Eine Weiterentwicklung von C mit Modulen, Generics und Sicherheit, ABI-kompatibel zu C.',
      longDescription:
        'C3 ist eine Systemprogrammiersprache, die als Weiterentwicklung von C und nicht als Ersatz konzipiert ist. Sie ergänzt Module, semantische Makros, Generics, Slices, Optionals und eingebaute Fehlerbehandlung, bleibt dabei nah an der C-Syntax und vollständig ABI-kompatibel zu bestehenden C-Bibliotheken.\n\nÜber LLVM kompiliert, zielt C3 auf dieselben Nischen wie C — Betriebssysteme, Embedded und Spieleentwicklung — und lässt sich schrittweise neben bestehenden C-Codebasen einführen.',
    },
    pt: {
      name: 'C3',
      description: 'Uma evolução do C com módulos, genéricos e segurança, mantendo compatibilidade ABI com C.',
      longDescription:
        'C3 é uma linguagem de programação de sistemas projetada como uma evolução do C, não um substituto. Adiciona módulos, macros semânticas, genéricos, slices, opcionais e tratamento de erros embutido, mantendo-se próxima da sintaxe do C e totalmente compatível em nível de ABI com bibliotecas C existentes.\n\nCompilada via LLVM, a C3 mira os mesmos nichos do C — sistemas operacionais, embarcados e desenvolvimento de jogos — e permite adoção incremental ao lado de bases de código C existentes.',
    },
  },
} satisfies Language;
