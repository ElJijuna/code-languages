import type { Language } from '../types';

export const basic = {
  slug: 'basic',
  publishedDate: '1964-05-01',
  extensions: ['.bas', '.bi', '.bb'],
  author: 'John G. Kemeny, Thomas E. Kurtz',
  website: 'https://freebasic.net',
  paradigms: ['imperative', 'procedural', 'structured'],
  version: 'FreeBASIC 1.10.1',
  logo: 'https://avatars.githubusercontent.com/u/5598624?v=4',
  color: '#00599C',
  i18n: {
    en: {
      name: 'BASIC',
      description:
        'A family of general-purpose high-level programming languages designed for ease of use.',
      longDescription:
        "BASIC (Beginners' All-purpose Symbolic Instruction Code) was designed in 1964 to enable non-science students to use computers.\n\nModern descendants include FreeBASIC, QB64, and Visual Basic. FreeBASIC remains actively maintained, offering compiled programs, inline assembly, and compatibility with classic BASIC code while adding modern structures like objects, pointers, and preprocessor directives.",
    },
    es: {
      name: 'BASIC',
      description:
        'Una familia de lenguajes de programación de alto nivel de propósito general diseñados para la facilidad de uso.',
      longDescription:
        "BASIC (Beginners' All-purpose Symbolic Instruction Code) fue diseñado en 1964 para permitir a estudiantes no científicos usar computadoras.\n\nLos descendientes modernos incluyen FreeBASIC, QB64 y Visual Basic. FreeBASIC sigue mantenido activamente, ofreciendo programas compilados, ensamblador en línea y compatibilidad con código BASIC clásico, al tiempo que añade estructuras modernas como objetos, punteros y directivas de preprocesador.",
    },
    it: {
      name: 'BASIC',
      description:
        "Una famiglia di linguaggi di programmazione di alto livello a uso generale progettati per la facilità d'uso.",
      longDescription:
        "BASIC (Beginners' All-purpose Symbolic Instruction Code) fu progettato nel 1964 per consentire agli studenti non scientifici di usare i computer.\n\nI discendenti moderni includono FreeBASIC, QB64 e Visual Basic. FreeBASIC e ancora attivamente mantenuto, offrendo programmi compilati, assembly inline e compatibilita con il codice BASIC classico, aggiungendo strutture moderne come oggetti, puntatori e direttive del preprocessore.",
    },
    fr: {
      name: 'BASIC',
      description:
        "Une famille de langages de programmation de haut niveau à usage général conçus pour la facilité d'utilisation.",
      longDescription:
        "BASIC (Beginners' All-purpose Symbolic Instruction Code) a été conçu en 1964 pour permettre aux étudiants non scientifiques d'utiliser des ordinateurs.\n\nLes descendants modernes comprennent FreeBASIC, QB64 et Visual Basic. FreeBASIC est encore activement maintenu, offrant des programmes compilés, de l'assembleur en ligne et une compatibilité avec le code BASIC classique tout en ajoutant des structures modernes comme des objets, des pointeurs et des directives de préprocesseur.",
    },
    de: {
      name: 'BASIC',
      description:
        'Eine Familie von allgemeinen Hochsprachen, die auf Benutzerfreundlichkeit ausgelegt sind.',
      longDescription:
        "BASIC (Beginner's All-purpose Symbolic Instruction Code) wurde 1964 entwickelt, um Nicht-Informatikstudenten die Nutzung von Computern zu ermöglichen.\n\nModerne Nachfolger sind FreeBASIC, QB64 und Visual Basic. FreeBASIC wird aktiv gepflegt und bietet kompilierte Programme, Inline-Assembler und Kompatibilität mit klassischem BASIC-Code, während moderne Strukturen wie Objekte, Zeiger und Präprozessor-Direktiven hinzugefügt werden.",
    },
    pt: {
      name: 'BASIC',
      description:
        'Uma família de linguagens de programação de alto nível de propósito geral projetadas para facilidade de uso.',
      longDescription:
        "BASIC (Beginners' All-purpose Symbolic Instruction Code) foi projetado em 1964 para permitir que estudantes de áreas não científicas usassem computadores.\n\nOs descendentes modernos incluem FreeBASIC, QB64 e Visual Basic. O FreeBASIC ainda é ativamente mantido, oferecendo programas compilados, assembly inline e compatibilidade com código BASIC clássico, enquanto adiciona estruturas modernas como objetos, ponteiros e diretivas de pré-processador.",
    },
  },
} satisfies Language;
