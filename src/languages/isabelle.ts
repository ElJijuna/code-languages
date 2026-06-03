import type { Language } from '../types';

export const isabelle = {
  slug: 'isabelle',
  publishedDate: '1986-01-01',
  extensions: ['.thy'],
  author: 'Lawrence Paulson / University of Cambridge and TU Munich',
  website: 'https://isabelle.in.tum.de',
  paradigms: ['theorem proving', 'declarative', 'functional'],
  tooling: {
    runtimes: ['Isabelle/jEdit', 'Poly/ML', 'Scala'],
    ecosystems: ['Formal Methods', 'Proof Assistants', 'Higher-order Logic'],
  },
  version: 'Isabelle2025-2',
  logo: 'https://dummyimage.com/32x32/6A5ACD/ffffff.png&text=Is',
  color: '#6A5ACD',
  i18n: {
    en: {
      name: 'Isabelle',
      description:
        'A proof assistant and theory language for machine-checked mathematics, logic, and formal verification.',
      longDescription:
        'Isabelle is a generic proof assistant with a rich theory language used to develop machine-checked mathematics and formal verification projects. Its most common object logic is Isabelle/HOL, a higher-order logic used in many academic and industrial verification efforts.\n\nIsabelle theory files combine definitions, lemmas, structured Isar proofs, automation, and document-oriented markup. The system includes an IDE, libraries, code generation support, and integrations with external automated provers.',
    },
    es: {
      name: 'Isabelle',
      description:
        'Asistente de pruebas y lenguaje de teorias para matematica, logica y verificacion formal comprobadas por maquina.',
      longDescription:
        'Isabelle es un asistente de pruebas generico con un lenguaje de teorias usado para desarrollar matematica comprobada por maquina y proyectos de verificacion formal. Su logica objeto mas comun es Isabelle/HOL, una logica de orden superior usada en muchos trabajos academicos e industriales.\n\nLos archivos de teoria combinan definiciones, lemas, pruebas estructuradas Isar, automatizacion y marcado orientado a documentos.',
    },
  },
} satisfies Language;
