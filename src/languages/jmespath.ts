import type { Language } from '@/types';

export const jmespath = {
  slug: 'jmespath',
  publishedDate: '2013-01-01',
  extensions: ['.jmespath', '.jp'],
  author: 'James Saryerwinnie',
  website: 'https://jmespath.org',
  paradigms: ['query', 'functional'],
  tooling: {
    runtimes: ['JMESPath libraries', 'AWS CLI'],
    ecosystems: ['JSON', 'Cloud tooling'],
  },
  version: 'stable',
  logo: 'https://jmespath.org/_static/img/logo.png',
  color: '#2F80ED',
  i18n: {
    en: {
      name: 'JMESPath',
      description: 'A declarative query language for extracting and transforming JSON data.',
      longDescription:
        'JMESPath is a query language for selecting, projecting, filtering, and reshaping JSON documents. Expressions navigate objects and arrays, apply functions, flatten nested data, and produce JSON-compatible results.\n\nIt is embedded in command-line tools, SDKs, and automation systems, notably cloud workflows that need stable client-side JSON extraction. Its portable spec lets the same expression run across implementations in many host languages.',
    },
    es: {
      name: 'JMESPath',
      description: 'Lenguaje declarativo para extraer y transformar datos JSON.',
      longDescription:
        'JMESPath es un lenguaje de consultas para seleccionar, proyectar, filtrar y remodelar documentos JSON. Las expresiones navegan objetos y arreglos, aplican funciones, aplanan datos anidados y producen resultados compatibles con JSON.\n\nSe integra en herramientas de linea de comandos, SDKs y sistemas de automatizacion, especialmente flujos cloud que necesitan extraccion JSON estable del lado cliente. Su especificacion portable permite usar la misma expresion en implementaciones de muchos lenguajes anfitriones.',
    },
    it: {
      name: 'JMESPath',
      description: 'Linguaggio dichiarativo per estrarre e trasformare dati JSON.',
      longDescription:
        'JMESPath e un linguaggio di query per selezionare, proiettare, filtrare e rimodellare documenti JSON. Le espressioni navigano oggetti e array, applicano funzioni, appiattiscono dati annidati e producono risultati compatibili con JSON.\n\nE integrato in strumenti CLI, SDK e sistemi di automazione, soprattutto workflow cloud che richiedono estrazione JSON stabile lato client. La sua specifica portabile permette alla stessa espressione di girare in implementazioni per molti linguaggi host.',
    },
    fr: {
      name: 'JMESPath',
      description: 'Langage declaratif pour extraire et transformer des donnees JSON.',
      longDescription:
        'JMESPath est un langage de requete pour selectionner, projeter, filtrer et remodeler des documents JSON. Les expressions parcourent objets et tableaux, appliquent des fonctions, aplatissent des donnees imbriquees et produisent des resultats compatibles JSON.\n\nIl est integre dans outils en ligne de commande, SDK et systemes d automatisation, notamment les flux cloud qui ont besoin d extraction JSON stable cote client. Sa specification portable permet la meme expression dans beaucoup de langages hotes.',
    },
    de: {
      name: 'JMESPath',
      description: 'Deklarative Abfragesprache zum Extrahieren und Transformieren von JSON.',
      longDescription:
        'JMESPath ist eine Abfragesprache zum Auswahlen, Projizieren, Filtern und Umformen von JSON-Dokumenten. Ausdruecke navigieren Objekte und Arrays, wenden Funktionen an, flachen verschachtelte Daten ab und erzeugen JSON-kompatible Ergebnisse.\n\nSie ist in Kommandozeilenwerkzeuge, SDKs und Automationssysteme eingebettet, besonders in Cloud-Ablaufe mit stabiler clientseitiger JSON-Extraktion. Die portable Spezifikation lasst denselben Ausdruck in vielen Hostsprachen laufen.',
    },
    pt: {
      name: 'JMESPath',
      description: 'Linguagem declarativa para extrair e transformar dados JSON.',
      longDescription:
        'JMESPath e uma linguagem de consulta para selecionar, projetar, filtrar e remodelar documentos JSON. Expressoes navegam objetos e arrays, aplicam funcoes, achatam dados aninhados e produzem resultados compativeis com JSON.\n\nEla aparece em ferramentas de linha de comando, SDKs e sistemas de automacao, especialmente fluxos cloud que precisam de extracao JSON estavel no cliente. Sua especificacao portavel permite usar a mesma expressao em implementacoes de muitas linguagens hospedeiras.',
    },
  },
} satisfies Language;
