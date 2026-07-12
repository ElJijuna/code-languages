import type { Language } from '@/types';

export const jq = {
  slug: 'jq',
  publishedDate: '2012-10-21',
  extensions: ['.jq'],
  author: 'Stephen Dolan',
  website: 'https://jqlang.org',
  paradigms: ['functional', 'declarative', 'query'],
  tooling: {
    runtimes: ['jq CLI'],
    ecosystems: ['Data Processing', 'DevOps', 'Scripting'],
  },
  version: '1.8.1',
  logo: 'https://avatars.githubusercontent.com/u/125535133?v=4',
  color: '#C7254E',
  i18n: {
    en: {
      name: 'jq',
      description: 'A functional filter language for slicing, transforming, and querying JSON.',
      longDescription:
        'jq is a lightweight command-line language for processing JSON. Programs are written as filter pipelines that select, reshape, and combine values, with built-in functions for iteration, reduction, string handling, and arithmetic.\n\nIt is a staple of shell scripting and DevOps workflows, used to inspect API responses, transform configuration, and glue JSON-producing tools together. Larger filters can be stored in .jq files and reused as modules.',
    },
    es: {
      name: 'jq',
      description: 'Un lenguaje funcional de filtros para cortar, transformar y consultar JSON.',
      longDescription:
        'jq es un lenguaje ligero de línea de comandos para procesar JSON. Los programas se escriben como tuberías de filtros que seleccionan, remodelan y combinan valores, con funciones integradas para iteración, reducción, manejo de cadenas y aritmética.\n\nEs una pieza básica del scripting de shell y de los flujos DevOps, usado para inspeccionar respuestas de API, transformar configuración y conectar herramientas que producen JSON. Los filtros grandes pueden guardarse en archivos .jq y reutilizarse como módulos.',
    },
    it: {
      name: 'jq',
      description:
        'Un linguaggio funzionale di filtri per tagliare, trasformare e interrogare JSON.',
      longDescription:
        'jq è un linguaggio leggero da riga di comando per elaborare JSON. I programmi si scrivono come pipeline di filtri che selezionano, rimodellano e combinano valori, con funzioni integrate per iterazione, riduzione, gestione delle stringhe e aritmetica.\n\nÈ un elemento fondamentale dello scripting di shell e dei flussi DevOps, usato per ispezionare risposte di API, trasformare configurazioni e collegare strumenti che producono JSON. I filtri più grandi possono essere salvati in file .jq e riutilizzati come moduli.',
    },
    fr: {
      name: 'jq',
      description:
        'Un langage fonctionnel de filtres pour découper, transformer et interroger du JSON.',
      longDescription:
        "jq est un langage léger en ligne de commande pour traiter du JSON. Les programmes s'écrivent comme des pipelines de filtres qui sélectionnent, remodèlent et combinent des valeurs, avec des fonctions intégrées pour l'itération, la réduction, le traitement des chaînes et l'arithmétique.\n\nC'est un incontournable des scripts shell et des workflows DevOps, utilisé pour inspecter des réponses d'API, transformer de la configuration et relier des outils produisant du JSON. Les filtres volumineux peuvent être stockés dans des fichiers .jq et réutilisés comme modules.",
    },
    de: {
      name: 'jq',
      description:
        'Eine funktionale Filtersprache zum Zerlegen, Transformieren und Abfragen von JSON.',
      longDescription:
        'jq ist eine leichtgewichtige Kommandozeilensprache zur Verarbeitung von JSON. Programme werden als Filter-Pipelines geschrieben, die Werte auswählen, umformen und kombinieren, mit eingebauten Funktionen für Iteration, Reduktion, Zeichenkettenverarbeitung und Arithmetik.\n\nSie ist ein fester Bestandteil von Shell-Skripten und DevOps-Workflows und dient dazu, API-Antworten zu untersuchen, Konfigurationen zu transformieren und JSON-erzeugende Werkzeuge zu verbinden. Größere Filter können in .jq-Dateien abgelegt und als Module wiederverwendet werden.',
    },
    pt: {
      name: 'jq',
      description: 'Uma linguagem funcional de filtros para fatiar, transformar e consultar JSON.',
      longDescription:
        'jq é uma linguagem leve de linha de comando para processar JSON. Os programas são escritos como pipelines de filtros que selecionam, remodelam e combinam valores, com funções embutidas para iteração, redução, manipulação de strings e aritmética.\n\nÉ um item básico do scripting de shell e dos fluxos DevOps, usado para inspecionar respostas de API, transformar configurações e conectar ferramentas que produzem JSON. Filtros maiores podem ser guardados em arquivos .jq e reutilizados como módulos.',
    },
  },
} satisfies Language;
