import type { Language } from '../types';

export const factor = {
  slug: 'factor',
  publishedDate: '2003-01-01',
  extensions: ['.factor'],
  author: 'Slava Pestov',
  website: 'https://factorcode.org',
  paradigms: ['concatenative', 'functional', 'stack-based'],
  tooling: {
    runtimes: ['Factor VM'],
    packageManagers: ['Factor vocabularies'],
    ecosystems: ['Interactive Development', 'Language Research', 'Desktop Tools'],
  },
  version: '0.101',
  logo: 'https://dummyimage.com/32x32/F97316/ffffff.png&text=F',
  color: '#F97316',
  i18n: {
    en: {
      name: 'Factor',
      description:
        'A concatenative, stack-based language with an interactive image and rich standard library.',
      longDescription:
        'Factor is a concatenative programming language where programs are composed by chaining words that transform a data stack. It includes an optimizing compiler, interactive environment, and image-based workflow.\n\nIts ecosystem includes libraries called vocabularies for UI, parsing, networking, math, databases, and tooling, making it useful for language experimentation and interactive development.',
    },
    es: {
      name: 'Factor',
      description:
        'Un lenguaje concatenativo basado en pila con imagen interactiva y biblioteca amplia.',
      longDescription:
        'Factor es un lenguaje concatenativo donde los programas encadenan palabras que transforman una pila de datos. Incluye compilador optimizador y entorno interactivo.\n\nSu ecosistema usa vocabularios para UI, parsing, redes, matematicas, bases de datos y herramientas.',
    },
    it: {
      name: 'Factor',
      description:
        'Linguaggio concatenativo basato su stack con ambiente interattivo e libreria standard ricca.',
      longDescription:
        "Factor è un linguaggio di programmazione concatenativo in cui i programmi sono composti da catene di parole che trasformano uno stack di dati. Include un compilatore ottimizzato, un ambiente interattivo e un flusso di lavoro basato su immagini.\n\nIl suo ecosistema include librerie chiamate 'vocabularies' per l'interfaccia utente, il parsing, la rete, le operazioni matematiche, i database e gli strumenti, rendendolo utile per esperimenti linguistici e sviluppo interattivo.",
    },
    fr: {
      name: 'Factor',
      description:
        'Langage concaténatif basé sur des piles avec un environnement interactif et une bibliothèque standard riche.',
      longDescription:
        "Factor est un langage de programmation concaténatif où les programmes sont composés en chaînant des mots qui transforment une pile de données. Il inclut un compilateur optimisé, un environnement interactif et un flux de travail basé sur des images.\n\nSon écosystème comprend des bibliothèques appelées vocabulaire pour l'interface utilisateur, le parsing, le réseau, les mathématiques, les bases de données et les outils, ce qui le rend utile pour la recherche linguistique et le développement interactif.",
    },
    de: {
      name: 'Factor',
      description:
        'Ein concatenatives, stapelbasierter Programmiersprache mit interaktiver Benutzeroberfläche und umfangreicher Standardbibliothek.',
      longDescription:
        'Factor ist eine concatenative Programmiersprache, in der Programme durch das Verketten von Wörtern erstellt werden, die einen Datenstapel transformieren. Sie bietet einen optimierenden Compiler, eine interaktive Umgebung und ein bildbasiertes Workflow-System.\n\nDas Ökosystem umfasst Bibliotheken (Vocabulary), die für UI, Parsing, Networking, Mathematik, Datenbanken und Tools verwendet werden können. Dies macht Factor nützlich für Experimente mit neuen Sprachen und interaktives Entwickeln.',
    },
    pt: {
      name: 'Factor',
      description:
        'Linguagem concatenativa baseada em pilha com ambiente interativo e biblioteca padrão rica.',
      longDescription:
        'O Factor é uma linguagem concatenativa onde os programas são construídos por meio de palavras que transformam um stack de dados. Inclui um compilador otimizante, um ambiente interativo e um fluxo de trabalho baseado em imagens.\n\nSeu ecossistema inclui bibliotecas chamadas vocabulários para UI, parsing, networking, matemática, bancos de dados e ferramentas, tornando-o útil para experimentação de linguagem e desenvolvimento interativo.',
    },
  },
} satisfies Language;
