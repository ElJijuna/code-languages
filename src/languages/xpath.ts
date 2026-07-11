import type { Language } from '@/types';

export const xpath = {
  slug: 'xpath',
  publishedDate: '1999-11-16',
  extensions: ['.xpath', '.xpth'],
  author: 'W3C',
  website: 'https://www.w3.org/TR/xpath-31/',
  paradigms: ['declarative', 'functional'],
  tooling: {
    ecosystems: ['XML', 'HTML', 'XSLT', 'XQuery'],
  },
  version: 'XPath 3.1',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/6/68/XML.svg',
  color: '#0076A8',
  i18n: {
    en: {
      name: 'XPath',
      description: 'A query language for selecting nodes from XML and HTML documents.',
      longDescription:
        'XPath (XML Path Language) is a query language for selecting nodes from XML and HTML documents and computing values from their content.\n\nIt uses a path syntax to navigate the document tree and is embedded in XSLT, XQuery, XSD, and many XML-aware APIs. XPath 3.1 adds functional programming features including higher-order functions and maps.',
    },
    es: {
      name: 'XPath',
      description: 'Un lenguaje de consulta para seleccionar nodos de documentos XML y HTML.',
      longDescription:
        'XPath (XML Path Language) es un lenguaje de consulta para seleccionar nodos de documentos XML y HTML y calcular valores a partir de su contenido.\n\nUtiliza una sintaxis de ruta para navegar por el árbol del documento y está integrado en XSLT, XQuery, XSD y muchas APIs compatibles con XML. XPath 3.1 añade características de programación funcional incluyendo funciones de orden superior y mapas.',
    },
    it: {
      name: 'XPath',
      description: 'Un linguaggio di query per selezionare nodi da documenti XML e HTML.',
      longDescription:
        "XPath (XML Path Language) e un linguaggio di query per selezionare nodi da documenti XML e HTML e calcolare valori dal loro contenuto.\n\nUtilizza una sintassi di percorso per navigare nell'albero del documento ed e incorporato in XSLT, XQuery, XSD e molte API compatibili con XML. XPath 3.1 aggiunge funzionalita di programmazione funzionale tra cui funzioni di ordine superiore e mappe.",
    },
    fr: {
      name: 'XPath',
      description:
        'Un langage de requête pour sélectionner des nœuds dans des documents XML et HTML.',
      longDescription:
        "XPath (XML Path Language) est un langage de requête pour sélectionner des nœuds dans des documents XML et HTML et calculer des valeurs à partir de leur contenu.\n\nIl utilise une syntaxe de chemin pour naviguer dans l'arborescence du document et est intégré dans XSLT, XQuery, XSD et de nombreuses API compatibles XML. XPath 3.1 ajoute des fonctionnalités de programmation fonctionnelle, notamment des fonctions d'ordre supérieur et des cartes.",
    },
    de: {
      name: 'XPath',
      description: 'Eine Abfragesprache zum Auswählen von Knoten aus XML- und HTML-Dokumenten.',
      longDescription:
        'XPath (XML Path Language) ist eine Abfragesprache zum Auswählen von Knoten aus XML- und HTML-Dokumenten und zum Berechnen von Werten aus deren Inhalt.\n\nSie verwendet eine Pfadsyntax zur Navigation im Dokumentenbaum und ist in XSLT, XQuery, XSD und viele XML-fähige APIs eingebettet. XPath 3.1 fügt funktionale Programmierfunktionen hinzu, einschließlich Funktionen höherer Ordnung und Maps.',
    },
    pt: {
      name: 'XPath',
      description: 'Uma linguagem de consulta para selecionar nós de documentos XML e HTML.',
      longDescription:
        'XPath (XML Path Language) é uma linguagem de consulta para selecionar nós de documentos XML e HTML e calcular valores a partir de seu conteúdo.\n\nUsa uma sintaxe de caminho para navegar na árvore de documentos e está incorporado em XSLT, XQuery, XSD e muitas APIs compatíveis com XML. O XPath 3.1 adiciona recursos de programação funcional, incluindo funções de ordem superior e mapas.',
    },
  },
} satisfies Language;
