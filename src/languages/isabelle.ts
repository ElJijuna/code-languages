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
  logo: 'https://isabelle.in.tum.de/img/favicon.ico',
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
    it: {
      name: 'Isabelle',
      description:
        'Un assistente di dimostrazione e linguaggio teorico per la matematica controllata, la logica e la verifica formale.',
      longDescription:
        'Isabelle è un assistente di dimostrazione generico con un ricco linguaggio teorico utilizzato per sviluppare progetti di matematica controllata e verifica formale. Il suo più comune sistema logico è Isabelle/HOL, una logica di ordine superiore utilizzata in numerosi sforzi accademici e industriali di verifica.\n\nI file teorici di Isabelle combinano definizioni, teoremi, prove strutturate Isar, automazione e markup orientato alla documentazione. Il sistema include un IDE, librerie, supporto per la generazione di codice e integrazioni con altri dimostratori automatizzati.',
    },
    fr: {
      name: 'Isabelle',
      description:
        'Assistant de preuve et langage théorique pour les mathématiques, la logique et la vérification formelle automatisées.',
      longDescription:
        "Isabelle est un assistant de preuve générique avec un langage théorique riche utilisé pour développer des projets de mathématiques vérifiées et de vérification formelle. Son système logique le plus courant est Isabelle/HOL, une logique d'ordre supérieur utilisée dans de nombreux efforts académiques et industriels de vérification.\n\nLes fichiers théoriques Isabelle combinent définitions, lemmes, preuves structurées Isar, automatisation et balisage orienté document. Le système comprend un IDE, des bibliothèques, un support pour la génération de code et une intégration avec des prouveurs automatisés externes.",
    },
    de: {
      name: 'Isabelle',
      description:
        'Ein Assistent und eine Theorie-Sprache für maschinell überprüfbare Mathematik, Logik und formale Verifikation.',
      longDescription:
        'Isabelle ist ein generischer Beweisassistent mit einer umfangreichen Theorie-Sprache, der zur Entwicklung von maschinell überprüften Mathematikprojekten und formalen Verifikationsprojekten verwendet wird. Seine am häufigsten verwendete Objektlogik ist Isabelle/HOL, eine höhere Logik, die in vielen akademischen und industriellen Verifikationsbemühungen eingesetzt wird.\n\nIsabelle-Theorie-Dateien kombinieren Definitionen, Lehmata, strukturierte Isar-Beweise, Automatisierung und dokumentenorientiertes Markup. Das System umfasst eine IDE, Bibliotheken, Unterstützung für Codegenerierung und Integrationen mit externen automatisierten Beweisprogrammen.',
    },
    pt: {
      name: 'Isabelle',
      description:
        'Assistente de prova e linguagem teórica para matemática, lógica e verificação formal.',
      longDescription:
        'Isabelle é um assistente de prova genérico com uma rica linguagem teórica usado para desenvolver projetos de matemática e verificação formal. Seu objeto lógico mais comum é Isabelle/HOL, uma lógica de ordem superior usada em muitos esforços acadêmicos e industriais de verificação.\n\nArquivos da teoria Isabelle combinam definições, lemas, provas estruturadas Isar, automação e marcação orientada a documentos. O sistema inclui um IDE, bibliotecas, suporte à geração de código e integrações com verificadores automatizados externos.',
    },
  },
} satisfies Language;
