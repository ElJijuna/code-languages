import type { Language } from '../types';

export const nextflow = {
  slug: 'nextflow',
  publishedDate: '2013-01-01',
  extensions: ['.nf'],
  author: 'Paolo Di Tommaso and contributors',
  website: 'https://nextflow.io',
  paradigms: ['dataflow', 'reactive', 'declarative', 'pipeline'],
  tooling: {
    runtimes: ['Nextflow'],
    ecosystems: ['Bioinformatics', 'Scientific Workflows', 'HPC', 'Cloud Computing'],
  },
  version: '26.04.4',
  logo: 'https://avatars.githubusercontent.com/u/6698688?v=4',
  color: '#0DC09D',
  i18n: {
    en: {
      name: 'Nextflow',
      description:
        'A workflow language for scalable and reproducible scientific data analysis pipelines.',
      longDescription:
        'Nextflow is a domain-specific language and runtime for writing scientific workflows that can be executed transparently on local machines, HPC clusters, and cloud platforms such as AWS, Google Cloud, and Azure. Pipelines are composed of processes connected by channels, using a dataflow programming model that enables parallelism by default.\n\nOriginally developed for bioinformatics, Nextflow has become a standard tool in genomics, proteomics, and computational biology. It supports container technologies such as Docker and Singularity, version-controlled pipeline sharing via Nextflow Tower, and full integration with popular workflow registries.',
    },
    es: {
      name: 'Nextflow',
      description:
        'Lenguaje de flujo de trabajo para pipelines de analisis cientifico escalables y reproducibles.',
      longDescription:
        'Nextflow es un lenguaje de dominio especifico y entorno de ejecucion para escribir flujos de trabajo cientificos que pueden ejecutarse transparentemente en maquinas locales, clusters HPC y plataformas en la nube como AWS, Google Cloud y Azure. Los pipelines se componen de procesos conectados por canales, usando un modelo de programacion de flujo de datos con paralelismo por defecto.\n\nDesarrollado originalmente para bioinformatica, Nextflow se ha convertido en una herramienta estandar en genomica, proteomica y biologia computacional. Admite contenedores Docker y Singularity, intercambio de pipelines con control de versiones mediante Nextflow Tower e integracion con registros de flujos de trabajo.',
    },
    it: {
      name: 'Nextflow',
      description: 'Linguaggio per pipeline di analisi scientifica scalabili e riproducibili.',
      longDescription:
        'Nextflow e un linguaggio specifico di dominio e runtime per scrivere flussi di lavoro scientifici eseguibili su macchine locali, cluster HPC e piattaforme cloud come AWS, Google Cloud e Azure. Le pipeline sono composte da processi connessi da canali, usando un modello di programmazione a flusso di dati con parallelismo predefinito.\n\nSviluppato originariamente per la bioinformatica, Nextflow e diventato uno strumento standard in genomica, proteomica e biologia computazionale. Supporta container Docker e Singularity, condivisione di pipeline con controllo versione tramite Nextflow Tower e integrazione con i principali registri di workflow.',
    },
    fr: {
      name: 'Nextflow',
      description:
        'Langage de workflow pour pipelines d analyse scientifique evolutifs et reproductibles.',
      longDescription:
        'Nextflow est un langage dedie et un environnement d execution pour ecrire des workflows scientifiques pouvant etre executes sur des machines locales, des clusters HPC et des plateformes cloud telles qu AWS, Google Cloud et Azure. Les pipelines sont composes de processus connectes par des canaux, utilisant un modele de programmation par flux de donnees avec parallelisme natif.\n\nDeveloppe initialement pour la bioinformatique, Nextflow est devenu un outil standard en genomique, proteomique et biologie computationnelle. Il prend en charge les conteneurs Docker et Singularity, le partage de pipelines avec Nextflow Tower et l integration avec les registres de workflows.',
    },
    de: {
      name: 'Nextflow',
      description:
        'Workflow-Sprache fur skalierbare und reproduzierbare wissenschaftliche Analyse-Pipelines.',
      longDescription:
        'Nextflow ist eine domainenspezifische Sprache und Laufzeitumgebung fur wissenschaftliche Workflows, die transparent auf lokalen Rechnern, HPC-Clustern und Cloud-Plattformen wie AWS, Google Cloud und Azure ausgefuhrt werden konnen. Pipelines bestehen aus durch Kanale verbundenen Prozessen und nutzen ein Datenflussprogrammiermodell mit standardmassiger Parallelisierung.\n\nUrsprunglich fur die Bioinformatik entwickelt, ist Nextflow zum Standardwerkzeug in Genomik, Proteomik und Computerbiologie geworden. Es unterstutzt Container wie Docker und Singularity, versionskontrolliertes Pipeline-Sharing uber Nextflow Tower und Integration mit gangigen Workflow-Registries.',
    },
    pt: {
      name: 'Nextflow',
      description:
        'Linguagem de workflow para pipelines de analise cientifica escalaveis e reproduziveis.',
      longDescription:
        'Nextflow e uma linguagem de dominio especifico e ambiente de execucao para escrever fluxos de trabalho cientificos que podem ser executados em maquinas locais, clusters HPC e plataformas em nuvem como AWS, Google Cloud e Azure. Os pipelines sao compostos por processos conectados por canais, usando um modelo de programacao por fluxo de dados com paralelismo padrao.\n\nDesenvolvido originalmente para bioinformatica, o Nextflow se tornou uma ferramenta padrao em genomica, proteomica e biologia computacional. Suporta containers Docker e Singularity, compartilhamento de pipelines com controle de versao via Nextflow Tower e integracao com registros de workflows.',
    },
  },
} satisfies Language;
