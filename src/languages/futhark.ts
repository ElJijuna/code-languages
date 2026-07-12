import type { Language } from '@/types';

export const futhark = {
  slug: 'futhark',
  status: 'experimental',
  publishedDate: '2014-01-01',
  extensions: ['.fut'],
  author: 'Troels Henriksen / DIKU, University of Copenhagen',
  website: 'https://futhark-lang.org',
  paradigms: ['functional', 'array', 'parallel'],
  relations: {
    compilesTo: ['c'],
  },
  tooling: {
    runtimes: ['OpenCL', 'CUDA', 'Multicore CPU'],
    ecosystems: ['GPU', 'HPC', 'Scientific Computing'],
  },
  version: '0.25.32',
  logo: 'https://raw.githubusercontent.com/diku-dk/futhark/master/assets/logo.svg',
  color: '#5F021F',
  i18n: {
    en: {
      name: 'Futhark',
      description: 'A purely functional array language that compiles to fast GPU code.',
      longDescription:
        'Futhark is a purely functional, data-parallel array language developed at DIKU. Programs express computation as bulk operations — map, reduce, scan — over multidimensional arrays, which the optimizing compiler fuses and flattens into efficient OpenCL, CUDA, or multicore C code.\n\nFuthark is not a general-purpose language: it is designed to write the numeric cores of larger applications, exposing them as C libraries callable from Python, Rust, or any FFI-capable host.',
    },
    es: {
      name: 'Futhark',
      description: 'Un lenguaje de arrays puramente funcional que compila a código GPU rápido.',
      longDescription:
        'Futhark es un lenguaje de arrays puramente funcional y data-paralelo desarrollado en DIKU. Los programas expresan la computación como operaciones masivas — map, reduce, scan — sobre arrays multidimensionales, que el compilador optimizador fusiona y aplana en código OpenCL, CUDA o C multinúcleo eficiente.\n\nFuthark no es un lenguaje de propósito general: está diseñado para escribir los núcleos numéricos de aplicaciones más grandes, exponiéndolos como bibliotecas C invocables desde Python, Rust o cualquier host con FFI.',
    },
    it: {
      name: 'Futhark',
      description: 'Un linguaggio di array puramente funzionale che compila in codice GPU veloce.',
      longDescription:
        "Futhark è un linguaggio di array puramente funzionale e data-parallelo sviluppato al DIKU. I programmi esprimono la computazione come operazioni di massa — map, reduce, scan — su array multidimensionali, che il compilatore ottimizzante fonde e appiattisce in codice OpenCL, CUDA o C multicore efficiente.\n\nFuthark non è un linguaggio general-purpose: è progettato per scrivere i nuclei numerici di applicazioni più grandi, esponendoli come librerie C richiamabili da Python, Rust o qualsiasi host con FFI.",
    },
    fr: {
      name: 'Futhark',
      description: 'Un langage de tableaux purement fonctionnel qui compile en code GPU rapide.',
      longDescription:
        "Futhark est un langage de tableaux purement fonctionnel et data-parallèle développé au DIKU. Les programmes expriment le calcul sous forme d'opérations massives — map, reduce, scan — sur des tableaux multidimensionnels, que le compilateur optimisant fusionne et aplatit en code OpenCL, CUDA ou C multicœur efficace.\n\nFuthark n'est pas un langage généraliste : il est conçu pour écrire les cœurs numériques d'applications plus larges, exposés comme des bibliothèques C appelables depuis Python, Rust ou tout hôte doté d'une FFI.",
    },
    de: {
      name: 'Futhark',
      description: 'Eine rein funktionale Array-Sprache, die zu schnellem GPU-Code kompiliert.',
      longDescription:
        'Futhark ist eine rein funktionale, datenparallele Array-Sprache, die am DIKU entwickelt wird. Programme drücken Berechnungen als Massenoperationen — map, reduce, scan — über mehrdimensionale Arrays aus, die der optimierende Compiler zu effizientem OpenCL-, CUDA- oder Multicore-C-Code fusioniert und abflacht.\n\nFuthark ist keine Allzwecksprache: Sie ist dafür gedacht, die numerischen Kerne größerer Anwendungen zu schreiben und sie als C-Bibliotheken bereitzustellen, die aus Python, Rust oder jedem FFI-fähigen Host aufrufbar sind.',
    },
    pt: {
      name: 'Futhark',
      description: 'Uma linguagem de arrays puramente funcional que compila para código GPU rápido.',
      longDescription:
        'Futhark é uma linguagem de arrays puramente funcional e data-paralela desenvolvida no DIKU. Os programas expressam a computação como operações em massa — map, reduce, scan — sobre arrays multidimensionais, que o compilador otimizador funde e achata em código OpenCL, CUDA ou C multicore eficiente.\n\nFuthark não é uma linguagem de propósito geral: foi projetada para escrever os núcleos numéricos de aplicações maiores, expondo-os como bibliotecas C chamáveis de Python, Rust ou qualquer host com FFI.',
    },
  },
} satisfies Language;
