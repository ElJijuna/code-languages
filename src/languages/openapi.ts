import type { Language } from '../types';

export const openapi = {
  slug: 'openapi',
  publishedDate: '2011-08-10',
  extensions: ['.openapi.json', '.openapi.yaml', '.openapi.yml'],
  author: 'OpenAPI Initiative',
  website: 'https://www.openapis.org',
  paradigms: ['api description', 'schema', 'declarative'],
  tooling: {
    runtimes: ['OpenAPI tooling'],
    packageManagers: ['npm', 'Maven', 'Docker'],
    ecosystems: ['HTTP APIs', 'REST', 'Documentation'],
  },
  version: '3.2.0',
  logo: 'https://cdn.simpleicons.org/openapiinitiative/6BA539',
  color: '#6BA539',
  i18n: {
    en: {
      name: 'OpenAPI',
      description:
        'A language-neutral specification format for describing HTTP APIs, schemas, operations, and documentation.',
      longDescription:
        'OpenAPI is a specification format for describing HTTP APIs in a machine-readable and human-readable way. OpenAPI documents define paths, operations, parameters, request bodies, responses, authentication, reusable components, and schema information.\n\nThe format is commonly written in YAML or JSON and powers API documentation, client and server generation, contract testing, governance, and design workflows. It originated as Swagger and is now maintained by the OpenAPI Initiative.',
    },
    es: {
      name: 'OpenAPI',
      description:
        'Formato de especificacion neutral al lenguaje para describir APIs HTTP, esquemas, operaciones y documentacion.',
      longDescription:
        'OpenAPI es un formato de especificacion para describir APIs HTTP de manera legible para maquinas y personas. Los documentos OpenAPI definen rutas, operaciones, parametros, cuerpos de solicitud, respuestas, autenticacion, componentes reutilizables e informacion de esquemas.\n\nSuele escribirse en YAML o JSON y alimenta documentacion de APIs, generacion de clientes y servidores, pruebas de contrato, gobierno y flujos de diseno.',
    },
  },
} satisfies Language;
