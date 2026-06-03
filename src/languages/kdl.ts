import type { Language } from '../types';

export const kdl = {
  slug: 'kdl',
  publishedDate: '2021-08-29',
  extensions: ['.kdl'],
  author: 'Kat Marchan and contributors',
  website: 'https://kdl.dev',
  paradigms: ['configuration', 'document language', 'data serialization'],
  tooling: {
    runtimes: ['Parsers', 'CLI tools'],
    ecosystems: ['Configuration', 'Rust', 'Structured Documents'],
  },
  version: '2.0.0',
  logo: 'https://dummyimage.com/32x32/6B4E9B/ffffff.png&text=KDL',
  color: '#6B4E9B',
  i18n: {
    en: {
      name: 'KDL',
      description:
        'A node-based document language for readable configuration, structured data, and tree-shaped documents.',
      longDescription:
        'KDL is a document language built around named nodes with arguments, properties, and nested children. Its syntax is designed to be easier to read and edit by hand than many dense data formats while still mapping cleanly to structured data.\n\nIt is used for configuration files, domain-specific documents, and tools that need comments, ordering, and tree-shaped data. The KDL ecosystem includes parsers for multiple languages and a versioned specification.',
    },
    es: {
      name: 'KDL',
      description:
        'Lenguaje documental basado en nodos para configuracion legible, datos estructurados y documentos en forma de arbol.',
      longDescription:
        'KDL es un lenguaje documental basado en nodos con argumentos, propiedades e hijos anidados. Su sintaxis busca ser mas facil de leer y editar a mano que muchos formatos densos, sin perder una correspondencia clara con datos estructurados.\n\nSe usa para archivos de configuracion, documentos especificos de dominio y herramientas que necesitan comentarios, orden y datos en forma de arbol.',
    },
  },
} satisfies Language;
