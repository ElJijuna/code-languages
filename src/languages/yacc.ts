import type { Language } from '@/types';

export const yacc = {
  slug: 'yacc',
  aliases: ['bison'],
  publishedDate: '1973-01-01',
  extensions: ['.y', '.yacc'],
  author: 'Stephen C. Johnson (Bell Labs)',
  website: 'https://pubs.opengroup.org/onlinepubs/9699919799/utilities/yacc.html',
  paradigms: ['declarative', 'generator'],
  tooling: {
    runtimes: ['C toolchains'],
    ecosystems: ['Compilers', 'Language Tooling', 'Unix'],
  },
  version: 'POSIX yacc / Bison 3.8.2',
  logo: 'https://cdn.simpleicons.org/gnu/A42E2B',
  color: '#4B6C4B',
  i18n: {
    en: {
      name: 'Yacc',
      description: 'A parser generator that turns context-free grammars into LALR parser code.',
      longDescription:
        'Yacc ("Yet Another Compiler-Compiler") is a classic Unix parser generator. A .y grammar file declares tokens, precedences, and production rules with embedded C actions, from which Yacc produces an LALR(1) parser that pairs naturally with a Lex-generated scanner.\n\nGNU Bison is the dominant modern implementation and remains widely used to build compilers, interpreters, configuration readers, and query languages across open-source projects.',
    },
    es: {
      name: 'Yacc',
      description:
        'Un generador de parsers que convierte gramáticas libres de contexto en parsers LALR.',
      longDescription:
        'Yacc ("Yet Another Compiler-Compiler") es un generador de parsers clásico de Unix. Un archivo de gramática .y declara tokens, precedencias y reglas de producción con acciones en C incrustadas, a partir de las cuales Yacc produce un parser LALR(1) que se combina de forma natural con un escáner generado por Lex.\n\nGNU Bison es la implementación moderna dominante y sigue siendo muy usada para construir compiladores, intérpretes, lectores de configuración y lenguajes de consulta en proyectos de código abierto.',
    },
    it: {
      name: 'Yacc',
      description:
        'Un generatore di parser che trasforma grammatiche libere dal contesto in parser LALR.',
      longDescription:
        'Yacc ("Yet Another Compiler-Compiler") è un generatore di parser classico di Unix. Un file di grammatica .y dichiara token, precedenze e regole di produzione con azioni C incorporate, da cui Yacc produce un parser LALR(1) che si abbina naturalmente a uno scanner generato da Lex.\n\nGNU Bison è l\'implementazione moderna dominante e rimane ampiamente usata per costruire compilatori, interpreti, lettori di configurazione e linguaggi di interrogazione nei progetti open source.',
    },
    fr: {
      name: 'Yacc',
      description:
        'Un générateur de parseurs qui transforme des grammaires hors contexte en parseurs LALR.',
      longDescription:
        "Yacc (« Yet Another Compiler-Compiler ») est un générateur de parseurs Unix classique. Un fichier de grammaire .y déclare des jetons, des précédences et des règles de production avec des actions C intégrées, à partir desquelles Yacc produit un parseur LALR(1) qui se combine naturellement avec un scanner généré par Lex.\n\nGNU Bison est l'implémentation moderne dominante et reste largement utilisée pour construire des compilateurs, des interpréteurs, des lecteurs de configuration et des langages de requête dans les projets open source.",
    },
    de: {
      name: 'Yacc',
      description:
        'Ein Parser-Generator, der kontextfreie Grammatiken in LALR-Parser-Code übersetzt.',
      longDescription:
        'Yacc („Yet Another Compiler-Compiler") ist ein klassischer Unix-Parser-Generator. Eine .y-Grammatikdatei deklariert Tokens, Präzedenzen und Produktionsregeln mit eingebetteten C-Aktionen, aus denen Yacc einen LALR(1)-Parser erzeugt, der sich natürlich mit einem von Lex erzeugten Scanner kombinieren lässt.\n\nGNU Bison ist die dominierende moderne Implementierung und wird weiterhin breit eingesetzt, um Compiler, Interpreter, Konfigurationsleser und Abfragesprachen in Open-Source-Projekten zu bauen.',
    },
    pt: {
      name: 'Yacc',
      description:
        'Um gerador de parsers que converte gramáticas livres de contexto em parsers LALR.',
      longDescription:
        'Yacc ("Yet Another Compiler-Compiler") é um gerador de parsers clássico do Unix. Um arquivo de gramática .y declara tokens, precedências e regras de produção com ações em C embutidas, a partir das quais o Yacc produz um parser LALR(1) que combina naturalmente com um scanner gerado pelo Lex.\n\nO GNU Bison é a implementação moderna dominante e continua amplamente usado para construir compiladores, interpretadores, leitores de configuração e linguagens de consulta em projetos de código aberto.',
    },
  },
} satisfies Language;
