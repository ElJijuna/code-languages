import type { Language } from '@/types';

export const odin = {
  slug: 'odin',
  publishedDate: '2016-11-05',
  extensions: ['.odin'],
  author: 'Ginger Bill',
  website: 'https://odin-lang.org',
  paradigms: ['imperative', 'procedural', 'systems', 'data-oriented'],
  tooling: {
    runtimes: ['Odin compiler'],
    packageManagers: ['odin'],
    ecosystems: ['Systems', 'Game Development', 'Native'],
  },
  version: 'dev-2026-02',
  logo: 'https://avatars.githubusercontent.com/u/12533910?v=4',
  color: '#3882D2',
  i18n: {
    en: {
      name: 'Odin',
      description: 'A data-oriented systems language for native software and game tooling.',
      longDescription:
        'Odin is a procedural systems programming language with explicit memory control, packages, foreign interfaces, custom allocators, and language features oriented toward data layout. It favors straightforward native code over large runtime machinery.\n\nIt is used for engines, tools, graphics programs, native utilities, and performance-sensitive applications where predictable control over data matters.',
    },
    es: {
      name: 'Odin',
      description: 'Un lenguaje de sistemas orientado a datos para software nativo y juegos.',
      longDescription:
        'Odin es un lenguaje procedural de programacion de sistemas con control explicito de memoria, paquetes, interfaces externas, allocators personalizados y funciones orientadas al layout de datos. Favorece codigo nativo directo sobre runtimes grandes.\n\nSe usa en motores, herramientas, programas graficos, utilidades nativas y aplicaciones sensibles al rendimiento donde importa el control predecible de los datos.',
    },
    it: {
      name: 'Odin',
      description:
        'Un linguaggio di sistemi orientato ai dati per software nativo e strumenti di sviluppo di giochi.',
      longDescription:
        'Odin e un linguaggio di programmazione di sistemi procedurale con controllo esplicito della memoria, pacchetti, interfacce esterne, allocatori personalizzati e funzionalita linguistiche orientate alla disposizione dei dati. Favorisce il codice nativo semplice rispetto a complesse macchine di runtime.\n\nViene utilizzato per motori, strumenti, programmi di grafica, utility native e applicazioni sensibili alle prestazioni in cui il controllo prevedibile dei dati e fondamentale.',
    },
    fr: {
      name: 'Odin',
      description:
        'Un langage de programmation oriente donnees pour les logiciels natifs et les outils de developpement de jeux.',
      longDescription:
        "Odin est un langage de programmation systeme procedural avec un controle explicite de la memoire, des paquets, des interfaces etrangeres, des allocateurs personnalises et des fonctionnalites de langage orientees vers la disposition des donnees. Il privilegie le code natif simple plutot que des grandes machines d'execution.\n\nIl est utilise pour les moteurs, les outils, les programmes de graphiques, les utilitaires natifs et les applications sensibles aux performances ou un controle previsible des donnees est important.",
    },
    de: {
      name: 'Odin',
      description:
        'Eine datenorientierte Programmiersprache für native Software und Spieleentwicklung.',
      longDescription:
        'Odin ist eine prozedurale Programmiersprache für Systemprogrammierung mit expliziter Speicherverwaltung, Paketen, externen Schnittstellen, benutzerdefinierten Allokatoren und Sprachfunktionen, die auf die Datenlayout-Orientierung ausgerichtet sind. Sie bevorzugt einfachen, nativen Code gegenüber umfangreicher Laufzeit-Maschinerie.\n\nSie wird für Engines, Tools, Grafikprogramme, native Utilities und leistungskritische Anwendungen verwendet, bei denen eine vorhersehbare Kontrolle über die Daten wichtig ist.',
    },
    pt: {
      name: 'Odin',
      description: 'Linguagem orientada a dados para software nativo e ferramentas de jogos.',
      longDescription:
        'Odin é uma linguagem de programação procedural de sistemas com controle explícito de memória, pacotes, interfaces estrangeiras, alocadores personalizados e recursos de linguagem orientados ao layout de dados. Ela favorece código nativo simples em vez de grande maquinaria de tempo de execução.\n\nÉ usada para engines, ferramentas, programas de gráficos, utilitários nativos e aplicações sensíveis ao desempenho onde o controle previsível sobre os dados é importante.',
    },
  },
} satisfies Language;
