import type { Language } from '@/types';

export const jcl = {
  slug: 'jcl',
  publishedDate: '1964-04-07',
  extensions: ['.jcl'],
  author: 'IBM',
  website: 'https://www.ibm.com/docs/en/zos/3.1.0?topic=zos-mvs-jcl-reference',
  paradigms: ['declarative', 'batch'],
  tooling: {
    runtimes: ['z/OS', 'MVS', 'JES2', 'JES3'],
    ecosystems: ['Mainframe', 'Batch Processing'],
  },
  version: 'z/OS 3.1',
  logo: 'https://dummyimage.com/32x32/1F70C1/ffffff.png&text=JCL',
  color: '#1F70C1',
  i18n: {
    en: {
      name: 'JCL',
      description: 'IBM Job Control Language for describing batch jobs on z/OS mainframes.',
      longDescription:
        'JCL (Job Control Language) tells IBM mainframe operating systems how to run batch work: which programs to execute, in what order, with which datasets, and how to react to failures. JOB, EXEC, and DD statements describe jobs, steps, and data allocations processed by the JES2/JES3 subsystems.\n\nIntroduced with System/360 in 1964, JCL still orchestrates nightly batch processing in banking, insurance, and government workloads on z/OS, usually alongside COBOL, PL/I, and REXX.',
    },
    es: {
      name: 'JCL',
      description:
        'El Job Control Language de IBM para describir trabajos batch en mainframes z/OS.',
      longDescription:
        'JCL (Job Control Language) indica a los sistemas operativos de mainframe de IBM cómo ejecutar trabajo batch: qué programas ejecutar, en qué orden, con qué datasets y cómo reaccionar ante fallos. Las sentencias JOB, EXEC y DD describen trabajos, pasos y asignaciones de datos procesados por los subsistemas JES2/JES3.\n\nIntroducido con el System/360 en 1964, JCL sigue orquestando el procesamiento batch nocturno en cargas bancarias, de seguros y gubernamentales sobre z/OS, normalmente junto a COBOL, PL/I y REXX.',
    },
    it: {
      name: 'JCL',
      description: 'Il Job Control Language di IBM per descrivere job batch sui mainframe z/OS.',
      longDescription:
        "JCL (Job Control Language) indica ai sistemi operativi mainframe di IBM come eseguire il lavoro batch: quali programmi eseguire, in quale ordine, con quali dataset e come reagire ai fallimenti. Le istruzioni JOB, EXEC e DD descrivono job, step e allocazioni di dati elaborati dai sottosistemi JES2/JES3.\n\nIntrodotto con il System/360 nel 1964, JCL orchestra ancora l'elaborazione batch notturna nei carichi bancari, assicurativi e governativi su z/OS, di solito insieme a COBOL, PL/I e REXX.",
    },
    fr: {
      name: 'JCL',
      description:
        "Le Job Control Language d'IBM pour décrire les travaux batch sur mainframes z/OS.",
      longDescription:
        "JCL (Job Control Language) indique aux systèmes d'exploitation mainframe d'IBM comment exécuter le travail batch : quels programmes lancer, dans quel ordre, avec quels datasets et comment réagir aux échecs. Les instructions JOB, EXEC et DD décrivent les travaux, les étapes et les allocations de données traités par les sous-systèmes JES2/JES3.\n\nIntroduit avec le System/360 en 1964, JCL orchestre encore le traitement batch nocturne des charges bancaires, d'assurance et gouvernementales sous z/OS, généralement aux côtés de COBOL, PL/I et REXX.",
    },
    de: {
      name: 'JCL',
      description: 'IBMs Job Control Language zur Beschreibung von Batch-Jobs auf z/OS-Mainframes.',
      longDescription:
        'JCL (Job Control Language) sagt IBM-Mainframe-Betriebssystemen, wie Batch-Arbeit auszuführen ist: welche Programme in welcher Reihenfolge laufen, mit welchen Datasets und wie auf Fehler zu reagieren ist. JOB-, EXEC- und DD-Anweisungen beschreiben Jobs, Schritte und Datenzuweisungen, die von den JES2/JES3-Subsystemen verarbeitet werden.\n\nMit dem System/360 im Jahr 1964 eingeführt, orchestriert JCL noch heute die nächtliche Batch-Verarbeitung in Bank-, Versicherungs- und Behörden-Workloads auf z/OS, üblicherweise neben COBOL, PL/I und REXX.',
    },
    pt: {
      name: 'JCL',
      description: 'A Job Control Language da IBM para descrever jobs batch em mainframes z/OS.',
      longDescription:
        'JCL (Job Control Language) diz aos sistemas operacionais de mainframe da IBM como executar trabalho batch: quais programas executar, em que ordem, com quais datasets e como reagir a falhas. As instruções JOB, EXEC e DD descrevem jobs, passos e alocações de dados processados pelos subsistemas JES2/JES3.\n\nIntroduzida com o System/360 em 1964, a JCL ainda orquestra o processamento batch noturno em cargas bancárias, de seguros e governamentais no z/OS, geralmente ao lado de COBOL, PL/I e REXX.',
    },
  },
} satisfies Language;
