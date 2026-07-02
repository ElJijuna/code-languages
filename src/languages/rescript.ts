import type { Language } from '../types';

export const rescript = {
  slug: 'rescript',
  publishedDate: '2020-07-01',
  extensions: ['.res', '.resi'],
  author: 'ReScript Association',
  website: 'https://rescript-lang.org',
  paradigms: ['functional', 'statically typed', 'multi-paradigm', 'javascript-targeted'],
  tooling: {
    runtimes: ['JavaScript', 'Node.js', 'Browser'],
    packageManagers: ['npm', 'pnpm', 'Yarn'],
    ecosystems: ['Web', 'React', 'JavaScript'],
  },
  version: '12.3.0',
  logo: 'https://cdn.simpleicons.org/rescript/E6484A',
  color: '#E6484A',
  i18n: {
    en: {
      name: 'ReScript',
      description: 'A typed language and compiler focused on ergonomic JavaScript output.',
      longDescription:
        'ReScript is a statically typed language for JavaScript targets with pattern matching, variants, modules, records, interop annotations, and a syntax tuned for web development. Its compiler and build tools focus on predictable generated JavaScript.\n\nIt is used in front-end applications, React codebases, shared libraries, and JavaScript projects that want compact type-safe source with explicit interop.',
    },
    es: {
      name: 'ReScript',
      description: 'Un lenguaje tipado y compilador enfocado en generar JavaScript ergonomico.',
      longDescription:
        'ReScript es un lenguaje de tipado estatico para objetivos JavaScript con pattern matching, variants, modulos, records, anotaciones de interop y una sintaxis ajustada al desarrollo web. Su compilador y herramientas buscan JavaScript generado predecible.\n\nSe usa en aplicaciones front-end, codebases React, bibliotecas compartidas y proyectos JavaScript que buscan fuente compacta y segura con interop explicito.',
    },
    it: {
      name: 'ReScript',
      description:
        "Un linguaggio e compilatore tipizzato incentrato sull'output JavaScript ergonomico.",
      longDescription:
        'ReScript e un linguaggio tipizzato staticamente per destinazioni JavaScript con pattern matching, varianti, moduli, record, annotazioni di interop e una sintassi ottimizzata per lo sviluppo web. Il suo compilatore e gli strumenti di build si concentrano sulla generazione JavaScript prevedibile.\n\nViene utilizzato in applicazioni front-end, codebase React, librerie condivise e progetti JavaScript che desiderano una fonte compatta e sicura dal punto di vista dei tipi con interop esplicita.',
    },
    fr: {
      name: 'ReScript',
      description: 'Un langage et un compilateur types axes sur la sortie JavaScript ergonomique.',
      longDescription:
        "ReScript est un langage type statiquement pour les cibles JavaScript, avec la correspondance de motifs, les variantes, les modules, les enregistrements, les annotations d'interoperabilite et une syntaxe adaptee au developpement web. Son compilateur et ses outils de construction se concentrent sur la generation JavaScript previsible.\n\nIl est utilise dans les applications front-end, les bases de code React, les bibliotheques partagees et les projets JavaScript qui souhaitent une source compacte et securisee en termes de types avec une interoperabilite explicite.",
    },
    de: {
      name: 'ReScript',
      description:
        'Eine typisierte Sprache und ein Compiler, der auf ergonomische JavaScript-Ausgabe ausgerichtet ist.',
      longDescription:
        'ReScript ist eine statisch typisierte Sprache für JavaScript-Ziele mit Pattern Matching, Varianten, Modulen, Records, Interop-Annotationen und einer Syntax, die für die Webentwicklung optimiert ist. Sein Compiler und seine Build-Tools konzentrieren sich auf die Erzeugung von vorhersehbarem JavaScript.\n\nEs wird in Front-End-Anwendungen, React-Codebasen, gemeinsamen Bibliotheken und JavaScript-Projekten verwendet, die eine kompakte, typsichere Quelle mit expliziter Interoperabilität wünschen.',
    },
    pt: {
      name: 'ReScript',
      description: 'Linguagem e compilador tipados focados em saída JavaScript ergonômica.',
      longDescription:
        'ReScript é uma linguagem tipada estaticamente para destinos JavaScript com correspondência de padrões, variantes, módulos, registros, anotações de interoperabilidade e uma sintaxe otimizada para desenvolvimento web. Seu compilador e ferramentas de construção se concentram em JavaScript gerado previsível.\n\nÉ usado em aplicações front-end, bases de código React, bibliotecas compartilhadas e projetos JavaScript que desejam código-fonte compacto e seguro com interoperabilidade explícita.',
    },
  },
} satisfies Language;
