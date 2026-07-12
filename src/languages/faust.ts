import type { Language } from '@/types';

export const faust = {
  slug: 'faust',
  publishedDate: '2002-01-01',
  extensions: ['.dsp'],
  author: 'GRAME-CNCM',
  website: 'https://faust.grame.fr',
  paradigms: ['functional', 'dataflow', 'audio'],
  relations: {
    compilesTo: ['cpp', 'webassembly'],
  },
  tooling: {
    runtimes: ['Native', 'Browser', 'Embedded DSP'],
    ecosystems: ['Audio', 'Music', 'DSP'],
  },
  version: 'stable',
  logo: 'https://faust.grame.fr/img/faustText.svg',
  color: '#C6613F',
  i18n: {
    en: {
      name: 'Faust',
      description: 'A functional language for real-time audio DSP that compiles to C++, WebAssembly, and more.',
      longDescription:
        'Faust (Functional Audio Stream) is a functional language for real-time signal processing developed at GRAME. Programs describe audio processors as block-diagram compositions of signal functions, which the compiler translates into highly optimized C++, WebAssembly, LLVM IR, or Rust.\n\nFrom one Faust source, build tools generate VST/AU plugins, standalone applications, microcontroller firmware, and web audio nodes — making it a standard tool for synthesizer, effect, and audio-research development.',
    },
    es: {
      name: 'Faust',
      description: 'Un lenguaje funcional para DSP de audio en tiempo real que compila a C++, WebAssembly y más.',
      longDescription:
        'Faust (Functional Audio Stream) es un lenguaje funcional para procesamiento de señales en tiempo real desarrollado en GRAME. Los programas describen procesadores de audio como composiciones en diagrama de bloques de funciones de señal, que el compilador traduce a C++, WebAssembly, LLVM IR o Rust altamente optimizados.\n\nDesde una sola fuente Faust, las herramientas generan plugins VST/AU, aplicaciones independientes, firmware para microcontroladores y nodos de audio web — una herramienta estándar para el desarrollo de sintetizadores, efectos e investigación de audio.',
    },
    it: {
      name: 'Faust',
      description: 'Un linguaggio funzionale per DSP audio in tempo reale che compila in C++, WebAssembly e altro.',
      longDescription:
        'Faust (Functional Audio Stream) è un linguaggio funzionale per l\'elaborazione dei segnali in tempo reale sviluppato al GRAME. I programmi descrivono processori audio come composizioni a diagramma a blocchi di funzioni di segnale, che il compilatore traduce in C++, WebAssembly, LLVM IR o Rust altamente ottimizzati.\n\nDa un\'unica sorgente Faust, gli strumenti di build generano plugin VST/AU, applicazioni standalone, firmware per microcontrollori e nodi web audio — uno strumento standard per lo sviluppo di sintetizzatori, effetti e ricerca audio.',
    },
    fr: {
      name: 'Faust',
      description: 'Un langage fonctionnel pour le DSP audio temps réel, compilant vers C++, WebAssembly et plus.',
      longDescription:
        "Faust (Functional Audio Stream) est un langage fonctionnel pour le traitement du signal en temps réel développé au GRAME. Les programmes décrivent des processeurs audio comme des compositions en schéma-bloc de fonctions de signal, que le compilateur traduit en C++, WebAssembly, LLVM IR ou Rust hautement optimisés.\n\nÀ partir d'une même source Faust, les outils génèrent des plugins VST/AU, des applications autonomes, du firmware pour microcontrôleurs et des nœuds web audio — un outil standard pour le développement de synthétiseurs, d'effets et la recherche audio.",
    },
    de: {
      name: 'Faust',
      description: 'Eine funktionale Sprache für Echtzeit-Audio-DSP, die zu C++, WebAssembly und mehr kompiliert.',
      longDescription:
        'Faust (Functional Audio Stream) ist eine am GRAME entwickelte funktionale Sprache für Echtzeit-Signalverarbeitung. Programme beschreiben Audioprozessoren als Blockdiagramm-Kompositionen von Signalfunktionen, die der Compiler in hochoptimiertes C++, WebAssembly, LLVM IR oder Rust übersetzt.\n\nAus einer Faust-Quelle erzeugen die Build-Werkzeuge VST/AU-Plugins, eigenständige Anwendungen, Mikrocontroller-Firmware und Web-Audio-Knoten — ein Standardwerkzeug für Synthesizer-, Effekt- und Audio-Forschungsentwicklung.',
    },
    pt: {
      name: 'Faust',
      description: 'Uma linguagem funcional para DSP de áudio em tempo real que compila para C++, WebAssembly e mais.',
      longDescription:
        'Faust (Functional Audio Stream) é uma linguagem funcional para processamento de sinais em tempo real desenvolvida no GRAME. Os programas descrevem processadores de áudio como composições em diagrama de blocos de funções de sinal, que o compilador traduz em C++, WebAssembly, LLVM IR ou Rust altamente otimizados.\n\nDe uma única fonte Faust, as ferramentas de build geram plugins VST/AU, aplicações independentes, firmware para microcontroladores e nós de web audio — uma ferramenta padrão para o desenvolvimento de sintetizadores, efeitos e pesquisa em áudio.',
    },
  },
} satisfies Language;
