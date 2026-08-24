import type { Language } from '@/types';

export const pony = {
  slug: 'pony',
  publishedDate: '2015-04-29',
  extensions: ['.pony'],
  author: 'Sylvan Clebsch / Pony contributors',
  website: 'https://www.ponylang.io',
  paradigms: ['actor-model', 'object-oriented', 'capability-secure', 'concurrent'],
  tooling: {
    runtimes: ['Pony runtime'],
    packageManagers: ['ponyup', 'corral'],
    ecosystems: ['Actors', 'Native', 'Distributed Systems'],
  },
  version: '0.67.0',
  logo: 'https://avatars.githubusercontent.com/u/14593805?v=4',
  color: '#7D5BA6',
  i18n: {
    en: {
      name: 'Pony',
      description: 'An actor language with reference capabilities and data-race safety.',
      longDescription:
        'Pony combines actors, object capabilities, static typing, and reference capabilities to make concurrent native programs explicit about aliasing and mutation. The language runtime schedules isolated actors that communicate by messages.\n\nIt is used for concurrent services, native experiments, actor systems, and programs that want compile-time guarantees around data races.',
    },
    es: {
      name: 'Pony',
      description:
        'Un lenguaje de actores con capacidades de referencia y seguridad ante data races.',
      longDescription:
        'Pony combina actores, object capabilities, tipado estatico y capacidades de referencia para que programas nativos concurrentes sean explicitos sobre aliasing y mutacion. El runtime agenda actores aislados que se comunican por mensajes.\n\nSe usa en servicios concurrentes, experimentos nativos, sistemas de actores y programas que buscan garantias de compilacion frente a data races.',
    },
    it: {
      name: 'Pony',
      description:
        'Un linguaggio di programmazione con capacita di riferimento e sicurezza contro le corse di dati.',
      longDescription:
        'Pony combina attori, capacita di oggetti, tipizzazione statica e capacita di riferimento per rendere esplicite le operazioni di alias e mutazione nei programmi concorrenti nativi. Il runtime del linguaggio programma attori isolati che comunicano tramite messaggi.\n\nViene utilizzato per servizi concorrenti, esperimenti nativi, sistemi di attori e programmi che desiderano garanzie in fase di compilazione riguardo alle corse di dati.',
    },
    fr: {
      name: 'Pony',
      description:
        'Un langage de programmation avec des capacites de reference et de securite contre les courses de donnees.',
      longDescription:
        "Pony combine les acteurs, les capacites d'objets, le typage statique et les capacites de reference pour rendre les programmes concurrents natifs explicites concernant l'aliasing et la mutation. Le runtime du langage planifie des acteurs isoles qui communiquent par des messages.\n\nIl est utilise pour les services concurrents, les experimentations natives, les systemes d'acteurs et les programmes qui souhaitent des garanties au moment de la compilation concernant les courses de donnees.",
    },
    de: {
      name: 'Pony',
      description: 'Eine Actor-Sprache mit Referenzfähigkeiten und Daten-Races-Sicherheit.',
      longDescription:
        'Pony kombiniert Actors, Objektfähigkeiten, statische Typisierung und Referenzfähigkeiten, um explizite Aliasing- und Mutationsverhalten in nativen, nebenläufigen Programmen zu ermöglichen. Die Sprache verwendet einen Runtime, der isolierte Actors plant, die über Nachrichten kommunizieren.\n\nEs wird für nebenläufige Dienste, native Experimente, Actor-Systeme und Programme verwendet, die Compile-Time-Garantien für Daten-Races benötigen.',
    },
    pt: {
      name: 'Pony',
      description:
        'Uma linguagem baseada em atores com capacidades de referência e segurança contra corridas de dados.',
      longDescription:
        'Pony combina atores, capacidades de objeto, tipagem estática e capacidades de referência para tornar os programas nativos concorrentes explícitos sobre alias e mutação. O runtime da linguagem agenda atores isolados que se comunicam por mensagens.\n\nÉ usado para serviços concorrentes, experimentos nativos, sistemas de atores e programas que desejam garantias em tempo de compilação sobre corridas de dados.',
    },
  },
} satisfies Language;
