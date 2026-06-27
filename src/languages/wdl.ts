import type { Language } from '../types';

export const wdl = {
  slug: 'wdl',
  publishedDate: '2016-01-01',
  extensions: ['.wdl'],
  author: 'Broad Institute and OpenWDL community',
  website: 'https://openwdl.org',
  paradigms: ['declarative', 'dataflow', 'pipeline'],
  tooling: {
    runtimes: ['Cromwell', 'miniwdl', 'Terra'],
    ecosystems: ['Bioinformatics', 'Scientific Workflows', 'Cloud Computing', 'Genomics'],
  },
  version: '1.2.0',
  logo: 'https://avatars.githubusercontent.com/u/23492081?v=4',
  color: '#3C6DA6',
  i18n: {
    en: {
      name: 'WDL',
      description:
        'A workflow definition language for describing portable and reproducible data pipelines.',
      longDescription:
        'WDL (Workflow Description Language) is a human-readable specification language for defining tasks, workflows, and their dependencies in a portable and reproducible way. Each task describes a command to run with typed inputs, outputs, and runtime requirements such as CPU, memory, and container images.\n\nOriginally developed at the Broad Institute, WDL is governed by the OpenWDL community and widely used in genomics and precision medicine on platforms such as Terra, Google Life Sciences, and AWS Batch. Its declarative syntax makes pipelines easy to read, maintain, and share across research groups and cloud environments.',
    },
    es: {
      name: 'WDL',
      description:
        'Lenguaje de definicion de flujos de trabajo para describir pipelines portables y reproducibles.',
      longDescription:
        'WDL (Workflow Description Language) es un lenguaje de especificacion legible para definir tareas, flujos de trabajo y sus dependencias de forma portable y reproducible. Cada tarea describe un comando a ejecutar con entradas y salidas tipadas y requisitos de ejecucion como CPU, memoria e imagenes de contenedor.\n\nDesarrollado originalmente en el Broad Institute, WDL es gobernado por la comunidad OpenWDL y ampliamente utilizado en genomica y medicina de precision en plataformas como Terra, Google Life Sciences y AWS Batch. Su sintaxis declarativa facilita la lectura, mantenimiento y comparticion de pipelines entre grupos de investigacion.',
    },
    it: {
      name: 'WDL',
      description:
        'Linguaggio di definizione dei workflow per descrivere pipeline dati portabili e riproducibili.',
      longDescription:
        'WDL (Workflow Description Language) e un linguaggio di specifica leggibile per definire task, workflow e dipendenze in modo portabile e riproducibile. Ogni task descrive un comando da eseguire con input e output tipizzati e requisiti di runtime come CPU, memoria e immagini container.\n\nSviluppato originariamente al Broad Institute, WDL e gestito dalla community OpenWDL ed e ampiamente usato in genomica e medicina di precisione su piattaforme come Terra, Google Life Sciences e AWS Batch. La sua sintassi dichiarativa rende le pipeline facili da leggere, mantenere e condividere tra gruppi di ricerca.',
    },
    fr: {
      name: 'WDL',
      description:
        'Langage de definition de workflows pour decrire des pipelines de donnees portables et reproductibles.',
      longDescription:
        'WDL (Workflow Description Language) est un langage de specification lisible pour definir des taches, des workflows et leurs dependances de maniere portable et reproductible. Chaque tache decrit une commande a executer avec des entrees et sorties typees et des exigences d execution telles que CPU, memoire et images conteneur.\n\nDeveloppe initialement au Broad Institute, WDL est gere par la communaute OpenWDL et largement utilise en genomique et medecine de precision sur des plateformes telles que Terra, Google Life Sciences et AWS Batch. Sa syntaxe declarative facilite la lecture, la maintenance et le partage des pipelines.',
    },
    de: {
      name: 'WDL',
      description: 'Workflow-Definitionssprache fur portable und reproduzierbare Daten-Pipelines.',
      longDescription:
        'WDL (Workflow Description Language) ist eine menschenlesbare Spezifikationssprache zur Definition von Tasks, Workflows und deren Abhangigkeiten auf portable und reproduzierbare Weise. Jeder Task beschreibt einen auszufuhrenden Befehl mit typisierten Ein- und Ausgaben sowie Laufzeitanforderungen wie CPU, Speicher und Container-Images.\n\nUrsprunglich am Broad Institute entwickelt, wird WDL von der OpenWDL-Community betreut und ist weit verbreitet in Genomik und Prazisionsmedizin auf Plattformen wie Terra, Google Life Sciences und AWS Batch. Die deklarative Syntax erleichtert das Lesen, Pflegen und Teilen von Pipelines zwischen Forschungsgruppen.',
    },
    pt: {
      name: 'WDL',
      description:
        'Linguagem de definicao de workflow para descrever pipelines de dados portaveis e reproduziveis.',
      longDescription:
        'WDL (Workflow Description Language) e uma linguagem de especificacao legivel para definir tarefas, workflows e suas dependencias de forma portavel e reproduzivel. Cada tarefa descreve um comando a ser executado com entradas e saidas tipadas e requisitos de execucao como CPU, memoria e imagens de container.\n\nDesenvolvido originalmente no Broad Institute, o WDL e gerenciado pela comunidade OpenWDL e amplamente utilizado em genomica e medicina de precisao em plataformas como Terra, Google Life Sciences e AWS Batch. Sua sintaxe declarativa facilita a leitura, manutencao e compartilhamento de pipelines entre grupos de pesquisa.',
    },
  },
} satisfies Language;
