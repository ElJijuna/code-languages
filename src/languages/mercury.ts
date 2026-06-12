import type { Language } from '../types';

export const mercury = {
  slug: 'mercury',
  publishedDate: '1995-04-08',
  extensions: ['.m'],
  author: 'University of Melbourne',
  website: 'https://www.mercurylang.org',
  paradigms: ['logic', 'functional', 'declarative'],
  tooling: {
    runtimes: ['Melbourne Mercury Compiler'],
    packageManagers: ['mmc build tooling'],
    ecosystems: ['Logic Programming', 'Declarative Systems', 'Academic Computing'],
  },
  version: '22.01.8',
  logo: 'https://dummyimage.com/32x32/0891B2/ffffff.png&text=Me',
  color: '#0891B2',
  i18n: {
    en: {
      name: 'Mercury',
      description:
        'A pure logic and functional language with strong static typing and determinism analysis.',
      longDescription:
        'Mercury is a declarative programming language that combines logic programming with functional programming, strong static typing, modes, and determinism analysis. It aims to make logic programs more reliable and efficient for larger software.\n\nMercury is used in research, compiler work, and specialized systems where Prolog-like relations benefit from compile-time checks, explicit module structure, and predictable execution behavior.',
    },
    es: {
      name: 'Mercury',
      description:
        'Lenguaje logico y funcional puro con tipado estatico fuerte y analisis de determinismo.',
      longDescription:
        'Mercury es un lenguaje declarativo que combina programacion logica y funcional con tipado estatico fuerte, modos y analisis de determinismo. Busca que programas de estilo logico sean mas fiables y eficientes en software grande.\n\nSe usa en investigacion, compiladores y sistemas especializados donde relaciones estilo Prolog se benefician de chequeos en compilacion, modulos explicitos y ejecucion predecible.',
    },
    it: {
      name: 'Mercury',
      description:
        'Linguaggio puramente logico e funzionale con forte tipizzazione statica e analisi deterministica.',
      longDescription:
        'Mercury è un linguaggio di programmazione dichiarativo che combina la programmazione logica con quella funzionale, una forte tipizzazione statica, modalità ed analisi deterministica. Mira a rendere i programmi logici più affidabili ed efficienti per software di grandi dimensioni.\n\nMercury viene utilizzato nella ricerca, nello sviluppo di compilatori e in sistemi specializzati dove le relazioni simili a Prolog beneficiano di controlli a tempo di compilazione, una struttura modulare esplicita e un comportamento di esecuzione prevedibile.',
    },
    fr: {
      name: 'Mercury',
      description:
        'Langage purement logique et fonctionnel avec typage statique fort et analyse de déterminisme.',
      longDescription:
        "Mercury est un langage de programmation déclaratif qui combine la programmation logique avec la programmation fonctionnelle, le typage statique fort, les modes et l'analyse de déterminisme. Il vise à rendre les programmes logiques plus fiables et efficaces pour des logiciels plus importants.\n\nMercury est utilisé dans la recherche, le développement de compilateurs et les systèmes spécialisés où les relations semblables à Prolog bénéficient des vérifications au moment de la compilation, d'une structure modulaire explicite et d'un comportement d'exécution prévisible.",
    },
    de: {
      name: 'Mercury',
      description:
        'Eine reine Logik- und Funktionssprache mit starker statischer Typisierung und deterministischer Analyse.',
      longDescription:
        'Mercury ist eine deklarative Programmiersprache, die Logikprogrammierung mit funktionaler Programmierung, starker statischer Typisierung, Modi und deterministischer Analyse kombiniert. Sie zielt darauf ab, Logikprogramme zuverlässiger und effizienter für größere Software zu machen.\n\nMercury wird in Forschung, Compiler-Entwicklung und spezialisierten Systemen eingesetzt, wo Prolog-ähnliche Beziehungen von Compile-Zeitprüfungen, einer expliziten Modulstruktur und einem vorhersagbaren Ausführungsverhalten profitieren.',
    },
    pt: {
      name: 'Mercury',
      description:
        'Linguagem pura de lógica e funcional com tipagem estática forte e análise determinística.',
      longDescription:
        'Mercury é uma linguagem de programação declarativa que combina a programação lógica com a funcional, tipagem estática forte, modos e análise determinística. Visa tornar os programas lógicos mais confiáveis e eficientes para softwares maiores.\n\nMercury é usado em pesquisa, desenvolvimento de compiladores e sistemas especializados onde as relações semelhantes ao Prolog se beneficiam de verificações em tempo de compilação, estrutura modular explícita e comportamento de execução previsível.',
    },
  },
} satisfies Language;
