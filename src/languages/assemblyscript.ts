import type { Language } from '@/types';

export const assemblyscript = {
  slug: 'assemblyscript',
  publishedDate: '2017-06-06',
  extensions: ['.as'],
  author: 'Daniel Wirtz / AssemblyScript Contributors',
  website: 'https://www.assemblyscript.org',
  paradigms: ['imperative', 'object-oriented', 'compiled'],
  relations: {
    compilesTo: ['webassembly'],
  },
  tooling: {
    runtimes: ['Wasm', 'WASI'],
    ecosystems: ['WebAssembly'],
  },
  version: '0.28.19',
  logo: 'https://avatars.githubusercontent.com/u/28916798?v=4',
  color: '#007AAC',
  i18n: {
    en: {
      name: 'AssemblyScript',
      description: 'A TypeScript-like language that compiles to WebAssembly.',
      longDescription:
        'AssemblyScript is a variant of TypeScript designed to compile to WebAssembly using the Binaryen toolkit.\n\nIt offers TypeScript-like syntax with explicit integer and floating-point types, linear memory access, and low-level control, enabling near-native performance in browser and server environments that support WebAssembly.',
    },
    es: {
      name: 'AssemblyScript',
      description: 'Un lenguaje similar a TypeScript que compila a WebAssembly.',
      longDescription:
        'AssemblyScript es una variante de TypeScript diseñada para compilar a WebAssembly mediante el toolkit Binaryen.\n\nOfrece sintaxis similar a TypeScript con tipos enteros y de punto flotante explícitos, acceso a memoria lineal y control de bajo nivel, permitiendo rendimiento cercano al nativo en entornos de navegador y servidor que soportan WebAssembly.',
    },
    it: {
      name: 'AssemblyScript',
      description: 'Un linguaggio simile a TypeScript che compila in WebAssembly.',
      longDescription:
        'AssemblyScript è una variante di TypeScript progettata per compilare in WebAssembly utilizzando il toolkit Binaryen.\n\nOffre una sintassi simile a TypeScript con tipi interi e in virgola mobile espliciti, accesso alla memoria lineare e controllo di basso livello, consentendo prestazioni vicine a quelle native in ambienti browser e server che supportano WebAssembly.',
    },
    fr: {
      name: 'AssemblyScript',
      description: 'Un langage similaire à TypeScript qui compile en WebAssembly.',
      longDescription:
        "AssemblyScript est une variante de TypeScript conçue pour compiler en WebAssembly à l'aide du toolkit Binaryen.\n\nIl offre une syntaxe similaire à TypeScript avec des types entiers et à virgule flottante explicites, un accès à la mémoire linéaire et un contrôle de bas niveau, permettant des performances quasi natives dans les environnements navigateur et serveur prenant en charge WebAssembly.",
    },
    de: {
      name: 'AssemblyScript',
      description: 'Eine TypeScript-ähnliche Sprache, die zu WebAssembly kompiliert.',
      longDescription:
        'AssemblyScript ist eine TypeScript-Variante, die mit dem Binaryen-Toolkit zu WebAssembly kompiliert.\n\nEs bietet TypeScript-ähnliche Syntax mit expliziten Integer- und Gleitkommatypen, linearem Speicherzugriff und Low-Level-Kontrolle und ermöglicht Near-Native-Performance in Browser- und Serverumgebungen, die WebAssembly unterstützen.',
    },
    pt: {
      name: 'AssemblyScript',
      description: 'Uma linguagem semelhante ao TypeScript que compila para WebAssembly.',
      longDescription:
        'AssemblyScript é uma variante do TypeScript projetada para compilar em WebAssembly usando o toolkit Binaryen.\n\nOferece sintaxe semelhante ao TypeScript com tipos inteiros e de ponto flutuante explícitos, acesso à memória linear e controle de baixo nível, permitindo desempenho quase nativo em ambientes de navegador e servidor que suportam WebAssembly.',
    },
  },
} satisfies Language;
