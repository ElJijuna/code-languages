import type { Language } from '@/types';

export const lex = {
  slug: 'lex',
  aliases: ['flex'],
  publishedDate: '1975-07-01',
  extensions: ['.l', '.lex'],
  author: 'Mike Lesk / Eric Schmidt (Bell Labs)',
  website: 'https://pubs.opengroup.org/onlinepubs/9699919799/utilities/lex.html',
  paradigms: ['declarative', 'generator'],
  tooling: {
    runtimes: ['C toolchains'],
    ecosystems: ['Compilers', 'Language Tooling', 'Unix'],
  },
  version: 'POSIX lex / flex 2.6.4',
  logo: 'https://raw.githubusercontent.com/ElJijuna/code-languages/main/public/assets/placeholders/lex.svg',
  color: '#DBCA00',
  i18n: {
    en: {
      name: 'Lex',
      description: 'A lexical analyzer generator that turns regex rules into scanner code.',
      longDescription:
        'Lex is a classic Unix tool that generates lexical analyzers. A .l specification pairs regular expressions with C actions; the generated scanner reads input, groups characters into tokens, and hands them to a parser, typically one produced by Yacc or Bison.\n\nThe modern open-source implementation is flex, which remains a standard part of compiler courses and production language tooling wherever hand-written lexers are not required.',
    },
    es: {
      name: 'Lex',
      description:
        'Un generador de analizadores léxicos que convierte reglas regex en código de escaneo.',
      longDescription:
        'Lex es una herramienta clásica de Unix que genera analizadores léxicos. Una especificación .l empareja expresiones regulares con acciones en C; el escáner generado lee la entrada, agrupa caracteres en tokens y los entrega a un parser, normalmente producido por Yacc o Bison.\n\nLa implementación moderna de código abierto es flex, que sigue siendo parte estándar de los cursos de compiladores y de las herramientas de lenguajes en producción donde no se requieren lexers escritos a mano.',
    },
    it: {
      name: 'Lex',
      description:
        'Un generatore di analizzatori lessicali che trasforma regole regex in codice scanner.',
      longDescription:
        "Lex è uno strumento classico di Unix che genera analizzatori lessicali. Una specifica .l abbina espressioni regolari ad azioni in C; lo scanner generato legge l'input, raggruppa i caratteri in token e li passa a un parser, tipicamente prodotto da Yacc o Bison.\n\nL'implementazione open source moderna è flex, che rimane una parte standard dei corsi sui compilatori e degli strumenti linguistici in produzione dove non servono lexer scritti a mano.",
    },
    fr: {
      name: 'Lex',
      description:
        "Un générateur d'analyseurs lexicaux qui transforme des règles regex en code de scanner.",
      longDescription:
        "Lex est un outil Unix classique qui génère des analyseurs lexicaux. Une spécification .l associe des expressions régulières à des actions en C ; le scanner généré lit l'entrée, regroupe les caractères en jetons et les transmet à un parseur, généralement produit par Yacc ou Bison.\n\nL'implémentation open source moderne est flex, qui reste un élément standard des cours de compilation et de l'outillage de langages en production lorsque des lexers écrits à la main ne sont pas nécessaires.",
    },
    de: {
      name: 'Lex',
      description:
        'Ein Generator für lexikalische Analysatoren, der Regex-Regeln in Scanner-Code übersetzt.',
      longDescription:
        'Lex ist ein klassisches Unix-Werkzeug zur Erzeugung lexikalischer Analysatoren. Eine .l-Spezifikation verknüpft reguläre Ausdrücke mit C-Aktionen; der erzeugte Scanner liest die Eingabe, gruppiert Zeichen zu Tokens und übergibt sie an einen Parser, der typischerweise von Yacc oder Bison erzeugt wird.\n\nDie moderne Open-Source-Implementierung ist flex, die weiterhin fester Bestandteil von Compiler-Kursen und produktivem Sprach-Tooling ist, wo keine handgeschriebenen Lexer erforderlich sind.',
    },
    pt: {
      name: 'Lex',
      description:
        'Um gerador de analisadores léxicos que converte regras regex em código de scanner.',
      longDescription:
        'Lex é uma ferramenta clássica do Unix que gera analisadores léxicos. Uma especificação .l combina expressões regulares com ações em C; o scanner gerado lê a entrada, agrupa caracteres em tokens e os entrega a um parser, normalmente produzido pelo Yacc ou Bison.\n\nA implementação moderna de código aberto é o flex, que continua sendo parte padrão dos cursos de compiladores e das ferramentas de linguagens em produção onde lexers escritos à mão não são necessários.',
    },
  },
} satisfies Language;
