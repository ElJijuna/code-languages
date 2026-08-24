import type { Language } from '@/types';

export const ejs = {
  slug: 'ejs',
  publishedDate: '2011-02-01',
  extensions: ['.ejs'],
  author: 'Matthew Eernisse',
  website: 'https://ejs.co',
  paradigms: ['template', 'embedded', 'imperative'],
  tooling: {
    runtimes: ['Node.js', 'Browser'],
    packageManagers: ['npm', 'pnpm', 'Yarn'],
    ecosystems: ['JavaScript', 'Web', 'Express'],
  },
  version: '6.0.1',
  logo: 'https://cdn.simpleicons.org/ejs/B4CA65',
  color: '#B4CA65',
  i18n: {
    en: {
      name: 'EJS',
      description:
        'An embedded JavaScript templating language for generating HTML and text from familiar JavaScript expressions.',
      longDescription:
        'EJS, short for Embedded JavaScript, is a templating language that lets developers generate markup with ordinary JavaScript control flow and interpolation. Templates are commonly used to render server-side HTML in Node.js applications.\n\nIt is intentionally small and direct: template files mix literal output with tags for evaluation, escaped output, and unescaped output. EJS is popular in Express applications, documentation generators, and simple build workflows.',
    },
    es: {
      name: 'EJS',
      description:
        'Lenguaje de plantillas con JavaScript embebido para generar HTML y texto usando expresiones familiares.',
      longDescription:
        'EJS, abreviatura de Embedded JavaScript, es un lenguaje de plantillas que permite generar marcado con interpolacion y control de flujo de JavaScript. Se usa con frecuencia para renderizar HTML del lado del servidor en aplicaciones Node.js.\n\nEs pequeno y directo: los archivos mezclan salida literal con etiquetas para evaluacion, salida escapada y salida sin escapar. EJS es comun en aplicaciones Express, generadores de documentacion y flujos de build simples.',
    },
    it: {
      name: 'EJS',
      description:
        'Linguaggio di templating JavaScript incorporato per generare HTML e testo da espressioni JavaScript familiari.',
      longDescription:
        "EJS, abbreviazione di Embedded JavaScript, è un linguaggio di templating che consente agli sviluppatori di generare markup utilizzando il flusso di controllo e l'interpolazione standard di JavaScript. I template sono comunemente utilizzati per rendere HTML lato server in applicazioni Node.js.\n\nÈ intenzionalmente piccolo e diretto: i file di template combinano output letterali con tag per la valutazione, l'output escapato e l'output non escapato. EJS è popolare nelle applicazioni Express, nei generatori di documentazione e nei semplici flussi di lavoro di build.",
    },
    fr: {
      name: 'EJS',
      description:
        "Langage de modélisation JavaScript embarqué pour générer du HTML et du texte à partir d'expressions JavaScript familières.",
      longDescription:
        "EJS, abréviation de Embedded JavaScript, est un langage de modélisation qui permet aux développeurs de générer des balises en utilisant le flux de contrôle et l'interpolation JavaScript standard. Les modèles sont couramment utilisés pour rendre du HTML côté serveur dans les applications Node.js.\n\nIl est intentionnellement petit et direct : les fichiers de modèle mélangent la sortie littérale avec des balises pour l'évaluation, la sortie échappée et la sortie non échappée. EJS est populaire dans les applications Express, les générateurs de documentation et les workflows simples.",
    },
    de: {
      name: 'EJS',
      description:
        'Eine eingebettete JavaScript-Templating-Sprache zur Generierung von HTML und Text aus vertrauten JavaScript-Ausdrücken.',
      longDescription:
        'EJS, kurz für Embedded JavaScript, ist eine Templating-Sprache, die es Entwicklern ermöglicht, Markup mit normalem JavaScript-Steuerfluss und Interpolation zu generieren. Templates werden häufig verwendet, um serverseitiges HTML in Node.js-Anwendungen darzustellen.\n\nSie ist absichtlich klein und direkt: Template-Dateien mischen Literal-Ausgabe mit Tags für Evaluierung, escaped Ausgabe und ungeescapte Ausgabe. EJS ist beliebt in Express-Anwendungen, Dokumentationsgeneratoren und einfachen Build-Workflows.',
    },
    pt: {
      name: 'EJS',
      description:
        'Linguagem de modelagem JavaScript embutida para gerar HTML e texto a partir de expressões JavaScript familiares.',
      longDescription:
        'EJS, abreviação de Embedded JavaScript, é uma linguagem de modelagem que permite aos desenvolvedores gerar markup usando o fluxo de controle e interpolação do JavaScript. Os templates são comumente usados para renderizar HTML no lado do servidor em aplicações Node.js.\n\nÉ intencionalmente pequena e direta: os arquivos de template misturam saída literal com tags para avaliação, saída escapada e saída não escapada. EJS é popular em aplicações Express, geradores de documentação e fluxos de trabalho simples.',
    },
  },
} satisfies Language;
