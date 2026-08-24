import type { Language } from '@/types';

export const snakemake = {
  slug: 'snakemake',
  publishedDate: '2012-01-01',
  extensions: ['.smk', 'Snakefile'],
  author: 'Johannes Koster and contributors',
  website: 'https://snakemake.github.io',
  paradigms: ['declarative', 'dataflow', 'rule-based', 'pipeline'],
  tooling: {
    runtimes: ['Snakemake'],
    ecosystems: ['Bioinformatics', 'Scientific Workflows', 'Python', 'HPC'],
  },
  version: '9.25.2',
  logo: 'https://avatars.githubusercontent.com/u/33450111?v=4',
  color: '#419544',
  i18n: {
    en: {
      name: 'Snakemake',
      description:
        'A Python-based workflow management system for reproducible and scalable data analyses.',
      longDescription:
        'Snakemake is a workflow management system that uses a Python-based domain-specific language to define pipelines as sets of rules. Each rule specifies input files, output files, and the shell command or Python code needed to produce the outputs, with automatic dependency resolution and parallelization across cores and clusters.\n\nWidely adopted in bioinformatics, Snakemake supports execution on local machines, cluster engines, and cloud platforms. It integrates with Conda environments and container systems for full reproducibility, and its modular design allows workflows to be shared through the Snakemake workflow catalog.',
    },
    es: {
      name: 'Snakemake',
      description:
        'Sistema de gestion de flujos de trabajo basado en Python para analisis de datos reproducibles.',
      longDescription:
        'Snakemake es un sistema de gestion de flujos de trabajo que usa un lenguaje especifico de dominio basado en Python para definir pipelines como conjuntos de reglas. Cada regla especifica archivos de entrada, salida y el comando o codigo Python necesario para producirlos, con resolucion automatica de dependencias y paralelizacion.\n\nAmplimente adoptado en bioinformatica, Snakemake admite ejecucion en maquinas locales, clusters y plataformas en la nube. Se integra con entornos Conda y contenedores para reproducibilidad completa, y su diseno modular permite compartir flujos de trabajo en el catalogo de Snakemake.',
    },
    it: {
      name: 'Snakemake',
      description:
        'Sistema di gestione dei workflow basato su Python per analisi dati riproducibili e scalabili.',
      longDescription:
        'Snakemake e un sistema di gestione dei workflow che usa un linguaggio specifico di dominio basato su Python per definire pipeline come insiemi di regole. Ogni regola specifica file di input, output e il comando shell o codice Python necessario per produrli, con risoluzione automatica delle dipendenze e parallelizzazione.\n\nAmpiamente adottato in bioinformatica, Snakemake supporta l esecuzione su macchine locali, cluster e piattaforme cloud. Si integra con ambienti Conda e container per piena riproducibilita, e il suo design modulare permette di condividere workflow tramite il catalogo Snakemake.',
    },
    fr: {
      name: 'Snakemake',
      description:
        'Systeme de gestion de workflows base sur Python pour des analyses de donnees reproductibles.',
      longDescription:
        'Snakemake est un systeme de gestion de workflows qui utilise un langage dedie base sur Python pour definir des pipelines sous forme d ensembles de regles. Chaque regle specifie des fichiers d entree, de sortie et la commande ou le code Python necessaire, avec resolution automatique des dependances et parallelisation.\n\nLargement adopte en bioinformatique, Snakemake prend en charge l execution sur des machines locales, des clusters et des plateformes cloud. Il s integre avec les environnements Conda et les conteneurs pour une reproductibilite complete, et son design modulaire permet le partage de workflows via le catalogue Snakemake.',
    },
    de: {
      name: 'Snakemake',
      description:
        'Python-basiertes Workflow-Management-System fur reproduzierbare und skalierbare Datenanalysen.',
      longDescription:
        'Snakemake ist ein Workflow-Management-System, das eine Python-basierte DSL verwendet, um Pipelines als Regelmengen zu definieren. Jede Regel gibt Eingabe-, Ausgabedateien und den Shell-Befehl oder Python-Code an, der zur Erzeugung der Ausgaben benotigt wird, mit automatischer Abhangigkeitsauflosung und Parallelisierung.\n\nWeit verbreitet in der Bioinformatik, unterstutzt Snakemake die Ausfuhrung auf lokalen Rechnern, Cluster-Engines und Cloud-Plattformen. Es integriert sich mit Conda-Umgebungen und Container-Systemen fur vollstandige Reproduzierbarkeit, und sein modulares Design erlaubt das Teilen von Workflows im Snakemake-Workflow-Katalog.',
    },
    pt: {
      name: 'Snakemake',
      description:
        'Sistema de gerenciamento de workflows baseado em Python para analises de dados reproduziveis.',
      longDescription:
        'Snakemake e um sistema de gerenciamento de workflows que usa uma linguagem de dominio especifico baseada em Python para definir pipelines como conjuntos de regras. Cada regra especifica arquivos de entrada, saida e o comando shell ou codigo Python necessario para produzi-los, com resolucao automatica de dependencias e paralelizacao.\n\nAmplamente adotado em bioinformatica, o Snakemake suporta execucao em maquinas locais, clusters e plataformas em nuvem. Integra-se com ambientes Conda e sistemas de containers para reprodutibilidade total, e seu design modular permite compartilhar workflows pelo catalogo do Snakemake.',
    },
  },
} satisfies Language;
