import type { Language } from '@/types';

export const coq = {
  slug: 'coq',
  aliases: ['rocq'],
  publishedDate: '1989-01-01',
  extensions: ['.v'],
  author: 'INRIA / Rocq Prover Development Team',
  website: 'https://rocq-prover.org',
  paradigms: ['functional', 'dependently typed', 'proof-oriented', 'tactic-based'],
  tooling: {
    runtimes: ['Rocq Prover', 'OCaml'],
    packageManagers: ['opam', 'Rocq Platform'],
    ecosystems: ['Formal methods', 'Proof assistants', 'OCaml'],
  },
  version: '9.2.0',
  logo: 'https://avatars.githubusercontent.com/u/621198?v=4',
  color: '#C1272D',
  i18n: {
    en: {
      name: 'Coq / Rocq',
      description:
        'A proof assistant and dependently typed language for certified mathematics and software.',
      longDescription:
        'Coq, now released under the Rocq Prover name, is an interactive theorem prover and dependently typed language. It lets users write definitions, executable programs, theorems, and machine-checked proofs in one environment.\n\nIt is widely used in formal verification, programming language metatheory, certified compilers, mathematics, cryptography, and projects where correctness arguments need to be checked with high confidence.',
    },
    es: {
      name: 'Coq / Rocq',
      description:
        'Un asistente de pruebas y lenguaje con tipos dependientes para software certificado.',
      longDescription:
        'Coq, publicado ahora bajo el nombre Rocq Prover, es un demostrador interactivo de teoremas y un lenguaje con tipos dependientes. Permite escribir definiciones, programas ejecutables, teoremas y pruebas verificadas por maquina en un mismo entorno.\n\nSe usa ampliamente en verificacion formal, metateoria de lenguajes, compiladores certificados, matematica, criptografia y proyectos donde los argumentos de correccion deben comprobarse con alta confianza.',
    },
    it: {
      name: 'Coq / Rocq',
      description:
        'Un assistente di dimostrazione e linguaggio con tipi dipendenti per la matematica e il software certificati.',
      longDescription:
        'Coq, ora rilasciato sotto il nome di Rocq Prover, e un dimostratore di teoremi interattivo e un linguaggio con tipi dipendenti. Permette agli utenti di scrivere definizioni, programmi eseguibili, teoremi e dimostrazioni verificate da macchine in un unico ambiente.\n\nE ampiamente utilizzato nella verifica formale, nella metateoria dei linguaggi di programmazione, nei compilatori certificati, nella matematica, nella crittografia e in progetti in cui e necessario verificare gli argomenti di correttezza con elevata confidenza.',
    },
    fr: {
      name: 'Coq / Rocq',
      description:
        'Un assistant de preuve et un langage de type dependant pour les mathematiques et les logiciels certifies.',
      longDescription:
        "Coq, desormais sous le nom de Rocq Prover, est un verificateur de theoremes interactif et un langage de type dependant. Il permet aux utilisateurs d'ecrire des definitions, des programmes executables, des theoremes et des preuves verifiees par machine dans un seul environnement.\n\nIl est largement utilise dans la verification formelle, la metatheorie des langages de programmation, les compilateurs certifies, les mathematiques, la cryptographie et les projets ou des arguments de correction doivent etre verifies avec un haut degre de confiance.",
    },
    de: {
      name: 'Coq / Rocq',
      description:
        'Ein Beweisassistent und eine dependently typisierte Sprache für zertifizierte Mathematik und Software.',
      longDescription:
        'Coq, jetzt unter dem Namen Rocq Prover veröffentlicht, ist ein interaktiver Theorembeweiser und eine dependently typisierte Sprache. Sie ermöglicht es Benutzern, Definitionen, ausführbaren Programme, Theoreme und maschinell überprüfte Beweise in einer Umgebung zu schreiben.\n\nEs wird häufig in der formalen Verifikation, der Metatheorie von Programmiersprachen, zertifizierten Compilern, Mathematik, Kryptographie und Projekten verwendet, bei denen Korrektheitsargumente mit hoher Sicherheit überprüft werden müssen.',
    },
    pt: {
      name: 'Coq / Rocq',
      description:
        'Assistente de prova e linguagem de tipos dependentes para matemática e software certificados.',
      longDescription:
        'Coq, agora sob o nome Rocq Prover, é um provedor de teoremas interativo e uma linguagem de tipos dependentes. Permite aos usuários escrever definições, programas executáveis, teoremas e provas verificadas por máquina em um único ambiente.\n\nÉ amplamente utilizado em verificação formal, teoria da linguagem de programação, compiladores certificados, matemática, criptografia e projetos onde argumentos de correção precisam ser verificados com alta confiança.',
    },
  },
} satisfies Language;
