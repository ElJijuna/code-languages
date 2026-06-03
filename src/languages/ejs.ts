import type { Language } from '../types';

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
  version: '3.1.10',
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
  },
} satisfies Language;
