import type { Language } from '../types';

export const chapel = {
  slug: 'chapel',
  publishedDate: '2009-04-01',
  extensions: ['.chpl'],
  author: 'Cray Inc. / Hewlett Packard Enterprise',
  website: 'https://chapel-lang.org',
  paradigms: ['parallel', 'imperative', 'object-oriented', 'generic'],
  tooling: {
    runtimes: ['Chapel runtime'],
    packageManagers: ['Mason'],
    ecosystems: ['High-performance computing', 'Parallel computing'],
  },
  version: '2.8.0',
  logo: 'https://chapel-lang.org/images/chapel-logo.png',
  color: '#8C1AFF',
  i18n: {
    en: {
      name: 'Chapel',
      description: 'A productive parallel programming language for scalable systems.',
      longDescription:
        'Chapel is a parallel programming language created to make high-performance and distributed computing more approachable. It provides domains, arrays, task parallelism, data parallelism, locality control, and abstractions for writing scalable programs without dropping into low-level message passing everywhere.\n\nIt is used for research, numerical computing, data analytics, simulations, and high-performance applications that need to express parallel algorithms clearly across laptops, clusters, and supercomputers.',
    },
    es: {
      name: 'Chapel',
      description: 'Un lenguaje de programacion paralela productivo para sistemas escalables.',
      longDescription:
        'Chapel es un lenguaje de programacion paralela creado para hacer mas accesible la computacion de alto rendimiento y distribuida. Ofrece dominios, arreglos, paralelismo de tareas, paralelismo de datos, control de localidad y abstracciones para escribir programas escalables sin depender siempre de paso de mensajes de bajo nivel.\n\nSe usa en investigacion, computacion numerica, analitica de datos, simulaciones y aplicaciones de alto rendimiento que necesitan expresar algoritmos paralelos con claridad en laptops, clusters y supercomputadoras.',
    },
    it: {
      name: 'Chapel',
      description: 'Un linguaggio di programmazione parallela produttivo per sistemi scalabili.',
      longDescription:
        "Chapel e un linguaggio di programmazione parallela creato per rendere l'informatica ad alte prestazioni e distribuita piu accessibile. Fornisce domini, array, parallelismo di task, parallelismo di dati, controllo della localita e astrazioni per scrivere programmi scalabili senza dover ricorrere costantemente alla comunicazione a basso livello.\n\nViene utilizzato per la ricerca, il calcolo numerico, l'analisi dei dati, le simulazioni e applicazioni ad alte prestazioni che necessitano di esprimere algoritmi paralleli in modo chiaro su laptop, cluster e supercomputer.",
    },
    fr: {
      name: 'Chapel',
      description: 'Un langage de programmation parallele productif pour les systemes evolutifs.',
      longDescription:
        "Chapel est un langage de programmation parallele cree pour rendre le calcul haute performance et distribue plus accessible. Il fournit des domaines, des tableaux, la parallelisation de taches, la parallelisation de donnees, le controle de la localisation et des abstractions pour ecrire des programmes evolutifs sans avoir recours a un passage de messages de bas niveau partout.\n\nIl est utilise pour la recherche, le calcul numerique, l'analyse de donnees, les simulations et les applications haute performance qui ont besoin d'exprimer clairement les algorithmes paralleles sur les ordinateurs portables, les clusters et les superordinateurs.",
    },
    de: {
      name: 'Chapel',
      description: 'Eine produktive parallele Programmiersprache für skalierbare Systeme.',
      longDescription:
        'Chapel ist eine parallele Programmiersprache, die entwickelt wurde, um Hochleistungs- und verteilte Computing zugänglicher zu machen. Sie bietet Domains, Arrays, Task-Parallelität, Datenparallelität, Lokalitätskontrolle und Abstraktionen, um skalierbare Programme zu schreiben, ohne ständig auf Low-Level-Messaging zurückgreifen zu müssen.\n\nSie wird für Forschung, numerische Berechnungen, Datenanalyse, Simulationen und Hochleistungsanwendungen verwendet, die parallele Algorithmen klar ausdrücken müssen, auf Laptops, Clustern und Supercomputern.',
    },
    pt: {
      name: 'Chapel',
      description: 'Linguagem de programação paralela produtiva para sistemas escaláveis.',
      longDescription:
        'Chapel é uma linguagem de programação paralela criada para tornar a computação de alto desempenho e distribuída mais acessível. Ela oferece domínios, arrays, paralelismo de tarefas, paralelismo de dados, controle de localidade e abstrações para escrever programas escaláveis sem precisar entrar em detalhes de passagem de mensagens de baixo nível em todos os lugares.\n\nÉ usada para pesquisa, computação numérica, análise de dados, simulações e aplicações de alto desempenho que precisam expressar algoritmos paralelos de forma clara em laptops, clusters e supercomputadores.',
    },
  },
} satisfies Language;
