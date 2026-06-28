import type { Language } from '../types';

export const rpg = {
  slug: 'rpg',
  publishedDate: '1959-01-01',
  extensions: ['.rpg', '.rpgle', '.sqlrpgle', '.clle', '.dspf'],
  author: 'IBM',
  website: 'https://www.ibm.com/docs/en/i/7.5?topic=programming-rpg',
  paradigms: ['procedural', 'object-oriented'],
  tooling: {
    ecosystems: ['IBM i', 'AS/400', 'iSeries'],
  },
  version: 'RPG IV Free-Form (IBM i 7.5)',
  logo: 'https://avatars.githubusercontent.com/u/733939?v=4',
  color: '#052FAD',
  i18n: {
    en: {
      name: 'RPG',
      description:
        'A high-level programming language for business applications on IBM i (formerly AS/400).',
      longDescription:
        'Report Program Generator (RPG) is a high-level programming language created by IBM for business data processing on IBM midrange systems.\n\nRPG IV (RPGLE), the modern free-format iteration, supports object-oriented features, embedded SQL, and service programs. It remains the dominant language for ERP systems, banking, and government workloads running on IBM i (iSeries, AS/400).',
    },
    es: {
      name: 'RPG',
      description:
        'Un lenguaje de programación de alto nivel para aplicaciones empresariales en IBM i (anteriormente AS/400).',
      longDescription:
        'Report Program Generator (RPG) es un lenguaje de programación de alto nivel creado por IBM para el procesamiento de datos empresariales en sistemas midrange de IBM.\n\nRPG IV (RPGLE), la iteración moderna en formato libre, soporta características orientadas a objetos, SQL embebido y programas de servicio. Sigue siendo el lenguaje dominante para sistemas ERP, banca y cargas de trabajo gubernamentales que se ejecutan en IBM i (iSeries, AS/400).',
    },
    it: {
      name: 'RPG',
      description:
        'Un linguaggio di programmazione ad alto livello per applicazioni aziendali su IBM i (ex AS/400).',
      longDescription:
        "Report Program Generator (RPG) e un linguaggio di programmazione ad alto livello creato da IBM per l'elaborazione dei dati aziendali sui sistemi midrange IBM.\n\nRPG IV (RPGLE), la moderna iterazione in formato libero, supporta funzionalita orientate agli oggetti, SQL incorporato e programmi di servizio. Rimane il linguaggio dominante per i sistemi ERP, il settore bancario e i carichi di lavoro governativi in esecuzione su IBM i (iSeries, AS/400).",
    },
    fr: {
      name: 'RPG',
      description:
        "Un langage de programmation de haut niveau pour les applications d'entreprise sur IBM i (anciennement AS/400).",
      longDescription:
        "Report Program Generator (RPG) est un langage de programmation de haut niveau créé par IBM pour le traitement de données d'entreprise sur les systèmes midrange IBM.\n\nRPG IV (RPGLE), l'itération moderne au format libre, prend en charge les fonctionnalités orientées objet, SQL intégré et les programmes de service. Il reste le langage dominant pour les systèmes ERP, les activités bancaires et les charges de travail gouvernementales exécutées sur IBM i (iSeries, AS/400).",
    },
    de: {
      name: 'RPG',
      description:
        'Eine High-Level-Programmiersprache für Business-Anwendungen auf IBM i (früher AS/400).',
      longDescription:
        'Report Program Generator (RPG) ist eine von IBM entwickelte Hochsprache für die Verarbeitung von Geschäftsdaten auf IBM-Midrange-Systemen.\n\nRPG IV (RPGLE), die moderne Freiformat-Iteration, unterstützt objektorientierte Funktionen, eingebettetes SQL und Service-Programme. Es bleibt die dominierende Sprache für ERP-Systeme, Bankwesen und behördliche Workloads auf IBM i (iSeries, AS/400).',
    },
    pt: {
      name: 'RPG',
      description:
        'Uma linguagem de programação de alto nível para aplicações empresariais no IBM i (anteriormente AS/400).',
      longDescription:
        'Report Program Generator (RPG) é uma linguagem de programação de alto nível criada pela IBM para processamento de dados empresariais em sistemas midrange IBM.\n\nRPG IV (RPGLE), a iteração moderna em formato livre, suporta recursos orientados a objetos, SQL incorporado e programas de serviço. Permanece a linguagem dominante para sistemas ERP, setor bancário e cargas de trabalho governamentais em execução no IBM i (iSeries, AS/400).',
    },
  },
} satisfies Language;
