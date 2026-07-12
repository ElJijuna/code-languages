import type { Language } from '@/types';

export const cwl = {
  slug: 'cwl',
  publishedDate: '2016-07-08',
  extensions: ['.cwl'],
  author: 'Common Workflow Language project',
  website: 'https://www.commonwl.org',
  paradigms: ['declarative', 'workflow'],
  tooling: {
    runtimes: ['cwltool', 'Toil', 'Arvados'],
    ecosystems: ['Bioinformatics', 'Scientific Computing', 'HPC'],
  },
  version: 'v1.2',
  logo: 'https://avatars.githubusercontent.com/u/9947495?v=4',
  color: '#B5314C',
  i18n: {
    en: {
      name: 'Common Workflow Language',
      description:
        'An open standard for describing portable, reproducible data-analysis workflows.',
      longDescription:
        'The Common Workflow Language (CWL) is an open standard for describing command-line tools and connecting them into workflows, expressed in YAML/JSON documents. Explicit inputs, outputs, and container requirements make workflows portable across laptops, clusters, and clouds.\n\nCWL is widely adopted in bioinformatics and scientific computing, with implementations such as cwltool, Toil, and Arvados executing the same workflow description on very different infrastructure.',
    },
    es: {
      name: 'Common Workflow Language',
      description:
        'Un estándar abierto para describir flujos de análisis de datos portables y reproducibles.',
      longDescription:
        'El Common Workflow Language (CWL) es un estándar abierto para describir herramientas de línea de comandos y conectarlas en flujos de trabajo, expresados en documentos YAML/JSON. Las entradas, salidas y requisitos de contenedores explícitos hacen que los flujos sean portables entre portátiles, clústeres y nubes.\n\nCWL está ampliamente adoptado en bioinformática y computación científica, con implementaciones como cwltool, Toil y Arvados que ejecutan la misma descripción de flujo en infraestructuras muy distintas.',
    },
    it: {
      name: 'Common Workflow Language',
      description:
        'Uno standard aperto per descrivere flussi di analisi dati portabili e riproducibili.',
      longDescription:
        'Il Common Workflow Language (CWL) è uno standard aperto per descrivere strumenti da riga di comando e collegarli in flussi di lavoro, espressi in documenti YAML/JSON. Input, output e requisiti dei container espliciti rendono i flussi portabili tra laptop, cluster e cloud.\n\nCWL è ampiamente adottato nella bioinformatica e nel calcolo scientifico, con implementazioni come cwltool, Toil e Arvados che eseguono la stessa descrizione di workflow su infrastrutture molto diverse.',
    },
    fr: {
      name: 'Common Workflow Language',
      description:
        "Un standard ouvert pour décrire des workflows d'analyse de données portables et reproductibles.",
      longDescription:
        'Le Common Workflow Language (CWL) est un standard ouvert pour décrire des outils en ligne de commande et les relier en workflows, exprimés dans des documents YAML/JSON. Des entrées, sorties et exigences de conteneurs explicites rendent les workflows portables entre ordinateurs portables, clusters et clouds.\n\nCWL est largement adopté en bio-informatique et en calcul scientifique, avec des implémentations comme cwltool, Toil et Arvados exécutant la même description de workflow sur des infrastructures très différentes.',
    },
    de: {
      name: 'Common Workflow Language',
      description:
        'Ein offener Standard zur Beschreibung portabler, reproduzierbarer Datenanalyse-Workflows.',
      longDescription:
        'Die Common Workflow Language (CWL) ist ein offener Standard, um Kommandozeilenwerkzeuge zu beschreiben und zu Workflows zu verbinden, ausgedrückt in YAML/JSON-Dokumenten. Explizite Eingaben, Ausgaben und Container-Anforderungen machen Workflows über Laptops, Cluster und Clouds hinweg portabel.\n\nCWL ist in der Bioinformatik und im wissenschaftlichen Rechnen weit verbreitet; Implementierungen wie cwltool, Toil und Arvados führen dieselbe Workflow-Beschreibung auf sehr unterschiedlicher Infrastruktur aus.',
    },
    pt: {
      name: 'Common Workflow Language',
      description:
        'Um padrão aberto para descrever fluxos de análise de dados portáveis e reproduzíveis.',
      longDescription:
        'O Common Workflow Language (CWL) é um padrão aberto para descrever ferramentas de linha de comando e conectá-las em fluxos de trabalho, expressos em documentos YAML/JSON. Entradas, saídas e requisitos de contêineres explícitos tornam os fluxos portáveis entre laptops, clusters e nuvens.\n\nO CWL é amplamente adotado em bioinformática e computação científica, com implementações como cwltool, Toil e Arvados executando a mesma descrição de workflow em infraestruturas muito diferentes.',
    },
  },
} satisfies Language;
