import type { Language } from '@/types';

export const vale = {
  slug: 'vale',
  status: 'experimental',
  publishedDate: '2018-01-01',
  extensions: ['.vale'],
  author: 'Evan Ovadia',
  website: 'https://vale.dev',
  paradigms: ['systems', 'imperative', 'object-oriented'],
  tooling: {
    runtimes: ['Vale compiler'],
    ecosystems: ['Native applications', 'Systems programming'],
  },
  version: 'experimental',
  logo: 'https://avatars.githubusercontent.com/u/67560249?v=4',
  color: '#059669',
  i18n: {
    en: {
      name: 'Vale',
      description:
        'A systems programming language exploring memory safety through ownership and generational references.',
      longDescription:
        'Vale is a systems programming language focused on fast native code, memory safety, and ergonomic ownership. Its design explores generational references, region-like ownership, and compile-time checks that avoid conventional garbage collection.\n\nThe language targets domains where C and C++ are common, including engines, tools, and performance-sensitive services. It remains experimental, with active design work around safety, concurrency, and interoperability.',
    },
    es: {
      name: 'Vale',
      description:
        'Lenguaje de sistemas que explora seguridad de memoria con ownership y referencias generacionales.',
      longDescription:
        'Vale es un lenguaje de programacion de sistemas centrado en codigo nativo rapido, seguridad de memoria y ownership ergonomico. Su diseno explora referencias generacionales, ownership parecido a regiones y comprobaciones en compilacion que evitan la recoleccion de basura convencional.\n\nEl lenguaje apunta a dominios donde C y C++ son comunes, como motores, herramientas y servicios sensibles al rendimiento. Sigue siendo experimental, con trabajo activo en seguridad, concurrencia e interoperabilidad.',
    },
    it: {
      name: 'Vale',
      description:
        'Linguaggio di sistema che esplora sicurezza della memoria con ownership e riferimenti generazionali.',
      longDescription:
        'Vale e un linguaggio di programmazione di sistema focalizzato su codice nativo veloce, sicurezza della memoria e ownership ergonomica. Il design esplora riferimenti generazionali, ownership simile a regioni e controlli a tempo di compilazione che evitano la garbage collection convenzionale.\n\nIl linguaggio mira a domini dove C e C++ sono comuni, inclusi motori, strumenti e servizi sensibili alle prestazioni. Rimane sperimentale, con lavoro attivo su sicurezza, concorrenza e interoperabilita.',
    },
    fr: {
      name: 'Vale',
      description:
        'Langage systeme explorant la surete memoire par ownership et references generationnelles.',
      longDescription:
        'Vale est un langage de programmation systeme centre sur le code natif rapide, la surete memoire et un ownership ergonomique. Sa conception explore les references generationnelles, un ownership proche des regions et des verifications a la compilation qui evitent le ramasse-miettes classique.\n\nLe langage vise les domaines ou C et C++ sont frequents, comme les moteurs, les outils et les services sensibles aux performances. Il reste experimental, avec un travail actif sur la surete, la concurrence et l interoperabilite.',
    },
    de: {
      name: 'Vale',
      description:
        'Systemprogrammiersprache fur Speichersicherheit durch Ownership und generationale Referenzen.',
      longDescription:
        'Vale ist eine Systemprogrammiersprache mit Fokus auf schnellen nativen Code, Speichersicherheit und ergonomisches Ownership. Das Design erforscht generationale Referenzen, regionenahnliches Ownership und Kompilierzeitprufungen, die klassische Garbage Collection vermeiden.\n\nDie Sprache zielt auf Bereiche, in denen C und C++ verbreitet sind, etwa Engines, Werkzeuge und leistungsensitive Dienste. Sie bleibt experimentell, mit aktiver Arbeit an Sicherheit, Nebenlaufigkeit und Interoperabilitat.',
    },
    pt: {
      name: 'Vale',
      description:
        'Linguagem de sistemas que explora seguranca de memoria com ownership e referencias geracionais.',
      longDescription:
        'Vale e uma linguagem de programacao de sistemas focada em codigo nativo rapido, seguranca de memoria e ownership ergonomico. Seu design explora referencias geracionais, ownership parecido com regioes e verificacoes em tempo de compilacao que evitam garbage collection convencional.\n\nA linguagem mira dominios onde C e C++ sao comuns, incluindo motores, ferramentas e servicos sensiveis a desempenho. Ela permanece experimental, com trabalho ativo em seguranca, concorrencia e interoperabilidade.',
    },
  },
} satisfies Language;
