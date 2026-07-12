import type { Language } from '@/types';

export const brainfuck = {
  slug: 'brainfuck',
  publishedDate: '1993-01-01',
  extensions: ['.bf', '.b'],
  author: 'Urban Muller',
  website: 'https://esolangs.org/wiki/Brainfuck',
  paradigms: ['esoteric', 'imperative'],
  tooling: {
    runtimes: ['Interpreters', 'Compilers'],
    ecosystems: ['Esoteric programming'],
  },
  version: 'stable',
  logo: 'https://raw.githubusercontent.com/ElJijuna/code-languages/main/public/assets/placeholders/brainfuck.svg',
  color: '#111827',
  i18n: {
    en: {
      name: 'Brainfuck',
      description:
        'An esoteric minimal language built around a tape, a pointer, and eight commands.',
      longDescription:
        'Brainfuck is an intentionally tiny esoteric programming language with only eight commands. Programs move a pointer across a memory tape, mutate cells, read or write bytes, and use bracketed loops for control flow.\n\nThe language is rarely used for practical software, but it is influential as a teaching, golfing, interpreter, and compiler exercise. Its extreme simplicity makes it a compact test case for parsers, virtual machines, and code generation.',
    },
    es: {
      name: 'Brainfuck',
      description: 'Lenguaje esoterico minimo basado en una cinta, un puntero y ocho comandos.',
      longDescription:
        'Brainfuck es un lenguaje de programacion esoterico deliberadamente pequeno con solo ocho comandos. Los programas mueven un puntero sobre una cinta de memoria, mutan celdas, leen o escriben bytes y usan bucles con corchetes para control de flujo.\n\nEl lenguaje casi nunca se usa para software practico, pero influye como ejercicio de ensenanza, code golf, interpretes y compiladores. Su simplicidad extrema lo vuelve un caso de prueba compacto para parsers, maquinas virtuales y generacion de codigo.',
    },
    it: {
      name: 'Brainfuck',
      description: 'Linguaggio esoterico minimo basato su nastro, puntatore e otto comandi.',
      longDescription:
        'Brainfuck e un linguaggio di programmazione esoterico volutamente minuscolo con solo otto comandi. I programmi muovono un puntatore su un nastro di memoria, modificano celle, leggono o scrivono byte e usano cicli tra parentesi quadre per il flusso di controllo.\n\nIl linguaggio e usato raramente per software pratico, ma e influente come esercizio didattico, di code golf, interpreti e compilatori. La sua estrema semplicita lo rende un caso di prova compatto per parser, macchine virtuali e generazione di codice.',
    },
    fr: {
      name: 'Brainfuck',
      description: 'Langage esoterique minimal fonde sur un ruban, un pointeur et huit commandes.',
      longDescription:
        'Brainfuck est un langage de programmation esoterique volontairement minuscule avec seulement huit commandes. Les programmes deplacent un pointeur sur un ruban memoire, modifient des cellules, lisent ou ecrivent des octets et utilisent des boucles entre crochets.\n\nLe langage est rarement utilise pour du logiciel pratique, mais il est influent comme exercice d enseignement, de code golf, d interpreteur et de compilateur. Sa simplicite extreme en fait un cas de test compact pour parseurs, machines virtuelles et generation de code.',
    },
    de: {
      name: 'Brainfuck',
      description: 'Esoterische minimale Sprache mit Speicherband, Zeiger und acht Befehlen.',
      longDescription:
        'Brainfuck ist eine absichtlich winzige esoterische Programmiersprache mit nur acht Befehlen. Programme bewegen einen Zeiger uber ein Speicherband, verandern Zellen, lesen oder schreiben Bytes und nutzen geklammerte Schleifen fur Kontrollfluss.\n\nDie Sprache wird selten fur praktische Software genutzt, ist aber einflussreich als Ubung fur Lehre, Code Golf, Interpreter und Compiler. Ihre extreme Einfachheit macht sie zu einem kompakten Testfall fur Parser, virtuelle Maschinen und Codegenerierung.',
    },
    pt: {
      name: 'Brainfuck',
      description: 'Linguagem esoterica minima baseada em fita, ponteiro e oito comandos.',
      longDescription:
        'Brainfuck e uma linguagem de programacao esoterica intencionalmente pequena com apenas oito comandos. Programas movem um ponteiro por uma fita de memoria, alteram celulas, leem ou escrevem bytes e usam loops entre colchetes para fluxo de controle.\n\nA linguagem raramente e usada para software pratico, mas e influente como exercicio de ensino, code golf, interpretadores e compiladores. Sua simplicidade extrema a torna um caso de teste compacto para parsers, maquinas virtuais e geracao de codigo.',
    },
  },
} satisfies Language;
