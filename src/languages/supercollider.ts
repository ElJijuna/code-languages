import type { Language } from '@/types';

export const supercollider = {
  slug: 'supercollider',
  aliases: ['sclang'],
  publishedDate: '1996-03-01',
  extensions: ['.scd', '.sc'],
  author: 'James McCartney',
  website: 'https://supercollider.github.io',
  paradigms: ['object-oriented', 'functional', 'audio'],
  tooling: {
    runtimes: ['sclang', 'scsynth'],
    packageManagers: ['Quarks'],
    ecosystems: ['Audio', 'Music', 'Creative Coding'],
  },
  version: '3.13.0',
  logo: 'https://avatars.githubusercontent.com/u/1706741?v=4',
  color: '#46390B',
  i18n: {
    en: {
      name: 'SuperCollider',
      description: 'A platform and language for real-time audio synthesis and algorithmic composition.',
      longDescription:
        'SuperCollider pairs an interpreted, Smalltalk-inspired language (sclang) with a real-time audio synthesis server (scsynth). Code builds synth definitions, schedules musical patterns, and rewires signal graphs live, making it a foundation of the live-coding and computer-music communities.\n\nOpen source since 2002, SuperCollider runs on Linux, macOS, and Windows, extends through Quarks packages, and serves as the synthesis engine behind environments such as TidalCycles.',
    },
    es: {
      name: 'SuperCollider',
      description: 'Una plataforma y lenguaje para síntesis de audio en tiempo real y composición algorítmica.',
      longDescription:
        'SuperCollider combina un lenguaje interpretado inspirado en Smalltalk (sclang) con un servidor de síntesis de audio en tiempo real (scsynth). El código construye definiciones de sintetizadores, agenda patrones musicales y recablea grafos de señal en vivo, siendo una base de las comunidades de live coding y música por computadora.\n\nDe código abierto desde 2002, SuperCollider corre en Linux, macOS y Windows, se extiende mediante paquetes Quarks y actúa como motor de síntesis detrás de entornos como TidalCycles.',
    },
    it: {
      name: 'SuperCollider',
      description: 'Una piattaforma e linguaggio per la sintesi audio in tempo reale e la composizione algoritmica.',
      longDescription:
        'SuperCollider abbina un linguaggio interpretato ispirato a Smalltalk (sclang) a un server di sintesi audio in tempo reale (scsynth). Il codice costruisce definizioni di sintetizzatori, pianifica pattern musicali e ricollega grafi di segnale dal vivo, costituendo una base delle comunità di live coding e computer music.\n\nOpen source dal 2002, SuperCollider gira su Linux, macOS e Windows, si estende tramite i pacchetti Quarks e funge da motore di sintesi dietro ambienti come TidalCycles.',
    },
    fr: {
      name: 'SuperCollider',
      description: 'Une plateforme et un langage pour la synthèse audio temps réel et la composition algorithmique.',
      longDescription:
        "SuperCollider associe un langage interprété inspiré de Smalltalk (sclang) à un serveur de synthèse audio temps réel (scsynth). Le code construit des définitions de synthés, planifie des motifs musicaux et recâble des graphes de signal en direct, ce qui en fait un pilier des communautés de live coding et de musique par ordinateur.\n\nOpen source depuis 2002, SuperCollider fonctionne sous Linux, macOS et Windows, s'étend via les paquets Quarks et sert de moteur de synthèse à des environnements comme TidalCycles.",
    },
    de: {
      name: 'SuperCollider',
      description: 'Eine Plattform und Sprache für Echtzeit-Audiosynthese und algorithmische Komposition.',
      longDescription:
        'SuperCollider verbindet eine interpretierte, Smalltalk-inspirierte Sprache (sclang) mit einem Echtzeit-Audiosynthese-Server (scsynth). Code baut Synth-Definitionen, plant musikalische Patterns und verdrahtet Signalgraphen live um — ein Fundament der Live-Coding- und Computermusik-Szene.\n\nSeit 2002 Open Source, läuft SuperCollider auf Linux, macOS und Windows, wird über Quarks-Pakete erweitert und dient als Synthese-Engine hinter Umgebungen wie TidalCycles.',
    },
    pt: {
      name: 'SuperCollider',
      description: 'Uma plataforma e linguagem para síntese de áudio em tempo real e composição algorítmica.',
      longDescription:
        'O SuperCollider combina uma linguagem interpretada inspirada em Smalltalk (sclang) com um servidor de síntese de áudio em tempo real (scsynth). O código constrói definições de sintetizadores, agenda padrões musicais e religa grafos de sinal ao vivo, sendo uma base das comunidades de live coding e música computacional.\n\nDe código aberto desde 2002, o SuperCollider roda em Linux, macOS e Windows, estende-se por meio de pacotes Quarks e serve como motor de síntese por trás de ambientes como o TidalCycles.',
    },
  },
} satisfies Language;
