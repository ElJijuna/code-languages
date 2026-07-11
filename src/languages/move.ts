import type { Language } from '@/types';

export const move = {
  slug: 'move',
  publishedDate: '2019-10-01',
  extensions: ['.move'],
  author: 'Diem (Meta) Research',
  website: 'https://move-language.github.io/move/',
  paradigms: ['functional', 'imperative'],
  tooling: {
    runtimes: ['Move VM', 'Aptos CLI', 'Sui CLI'],
    packageManagers: ['Move package manager'],
    ecosystems: ['Blockchain', 'Smart Contracts', 'Aptos', 'Sui'],
  },
  version: '2.0.0',
  logo: 'https://avatars.githubusercontent.com/u/108696678?v=4',
  color: '#1C8F9C',
  i18n: {
    en: {
      name: 'Move',
      description:
        'A safe and flexible programming language for the Aptos and Sui blockchains, designed to express ownership of digital assets with first-class resource types.',
      longDescription:
        "Move is a programming language originally created at Meta (formerly Facebook) for the Diem (formerly Libra) blockchain and later adopted as the primary language for the Aptos and Sui networks. It is designed around the concept of resources — types that can never be copied or implicitly discarded, only moved, which maps naturally to the semantics of digital assets and tokens.\n\nMove's type system enforces ownership and access control at compile time, preventing common smart contract vulnerabilities like reentrancy, double-spending, and unauthorized mutations. The language features modules, structs, generics, and formal verification support. Aptos Move and Sui Move are the two main variants, with Sui extending the model with an object-centric ownership system.",
    },
    es: {
      name: 'Move',
      description:
        'Lenguaje seguro y flexible para las blockchains Aptos y Sui, diseñado para expresar la propiedad de activos digitales mediante tipos de recursos.',
      longDescription:
        'Move es un lenguaje de programación creado originalmente en Meta para la blockchain Diem y adoptado después como lenguaje principal de las redes Aptos y Sui. Está diseñado alrededor del concepto de recursos — tipos que nunca pueden copiarse ni descartarse implícitamente, solo moverse — lo que mapea naturalmente la semántica de activos digitales.\n\nEl sistema de tipos de Move aplica la propiedad y el control de acceso en tiempo de compilación, previniendo vulnerabilidades comunes de contratos inteligentes. El lenguaje incluye módulos, structs, genéricos y soporte para verificación formal.',
    },
    it: {
      name: 'Move',
      description:
        'Linguaggio sicuro e flessibile per le blockchain Aptos e Sui, per esprimere la proprietà di asset digitali con tipi di risorse di prima classe.',
      longDescription:
        'Move è un linguaggio di programmazione creato originariamente da Meta per la blockchain Diem e successivamente adottato come linguaggio principale per le reti Aptos e Sui. È progettato attorno al concetto di risorse — tipi che non possono mai essere copiati o scartati implicitamente, solo spostati — che mappa naturalmente la semantica degli asset digitali.\n\nIl sistema di tipi di Move applica ownership e controllo degli accessi a compile time, prevenendo vulnerabilità comuni degli smart contract. Il linguaggio include moduli, struct, generici e supporto per la verifica formale.',
    },
    fr: {
      name: 'Move',
      description:
        "Langage sûr pour les blockchains Aptos et Sui, exprimant la propriété d'actifs numériques via des types de ressources de première classe.",
      longDescription:
        "Move est un langage de programmation créé à l'origine par Meta pour la blockchain Diem et adopté ultérieurement comme langage principal pour les réseaux Aptos et Sui. Il est conçu autour du concept de ressources — des types qui ne peuvent jamais être copiés ou implicitement abandonnés, seulement déplacés — ce qui correspond naturellement à la sémantique des actifs numériques.\n\nLe système de types de Move applique l'ownership et le contrôle d'accès à la compilation, prévenant les vulnérabilités courantes des smart contracts. Le langage inclut des modules, des structs, des génériques et un support pour la vérification formelle.",
    },
    de: {
      name: 'Move',
      description:
        'Sichere Programmiersprache für Aptos und Sui, die Eigentum an digitalen Assets über erstklassige Ressourcentypen ausdrückt.',
      longDescription:
        'Move ist eine Programmiersprache, die ursprünglich bei Meta für die Diem-Blockchain entwickelt und später als Hauptsprache für die Aptos- und Sui-Netzwerke übernommen wurde. Sie ist um das Konzept von Ressourcen herum aufgebaut — Typen, die niemals kopiert oder implizit verworfen werden können, sondern nur verschoben werden — was natürlich der Semantik digitaler Assets entspricht.\n\nMoves Typsystem erzwingt Ownership und Zugriffskontrolle zur Kompilierzeit und verhindert gängige Smart-Contract-Schwachstellen. Die Sprache umfasst Module, Structs, Generics und formale Verifikationsunterstützung.',
    },
    pt: {
      name: 'Move',
      description:
        'Linguagem segura e flexível para as blockchains Aptos e Sui, para expressar propriedade de ativos digitais com tipos de recursos.',
      longDescription:
        'Move é uma linguagem de programação criada originalmente na Meta para a blockchain Diem e posteriormente adotada como linguagem principal para as redes Aptos e Sui. É projetada em torno do conceito de recursos — tipos que nunca podem ser copiados ou descartados implicitamente, apenas movidos — o que mapeia naturalmente a semântica de ativos digitais.\n\nO sistema de tipos do Move aplica ownership e controle de acesso em tempo de compilação, prevenindo vulnerabilidades comuns de contratos inteligentes. A linguagem inclui módulos, structs, genéricos e suporte para verificação formal.',
    },
  },
} satisfies Language;
