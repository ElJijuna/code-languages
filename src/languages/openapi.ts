import type { Language } from '@/types';

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
    it: {
      name: 'OpenAPI',
      description:
        'Un formato di specifica linguaggio-neutro per descrivere le API HTTP, gli schemi, le operazioni e la documentazione.',
      longDescription:
        "OpenAPI è un formato di specifica per descrivere le API HTTP in modo leggibile sia da macchine che da persone. I documenti OpenAPI definiscono i percorsi, le operazioni, i parametri, i corpi delle richieste, le risposte, l'autenticazione e le informazioni sugli schemi.\n\nIl formato viene comunemente scritto in YAML o JSON ed è utilizzato per la documentazione API, la generazione di client e server, il test dei contratti, la governance e i flussi di lavoro di progettazione. Originariamente chiamato Swagger, ora è mantenuto dall'OpenAPI Initiative.",
    },
    fr: {
      name: 'OpenAPI',
      description:
        'Format de spécification langage-indépendant pour décrire les APIs HTTP, les schémas, les opérations et la documentation.',
      longDescription:
        "OpenAPI est un format de spécification pour décrire les APIs HTTP d'une manière lisible par machine et humaine. Les documents OpenAPI définissent des chemins, des opérations, des paramètres, des corps de requête, des réponses, l'authentification, des composants réutilisables et des informations sur le schéma.\n\nLe format est couramment écrit en YAML ou JSON et permet la documentation d'API, la génération client et serveur, les tests contractuels, la gouvernance et les flux de travail de conception. Il a été créé sous le nom de Swagger et est maintenant maintenu par l'OpenAPI Initiative.",
    },
    de: {
      name: 'OpenAPI',
      description:
        'Ein sprachunabhängiges Spezifikationsformat zur Beschreibung von HTTP-APIs, Schemas, Operationen und Dokumentation.',
      longDescription:
        'OpenAPI ist ein Spezifikationsformat zum beschreibenden API in maschinenlesbarer und menschenlesbarer Form. OpenAPI-Dokumente definieren Pfade, Operationen, Parameter, Anfragenkörper, Antworten, Authentifizierung, wiederverwendbare Komponenten und Schema-Informationen.\n\nDas Format wird üblicherweise in YAML oder JSON geschrieben und ermöglicht die Erstellung von API-Dokumentation, Client- und Servergenerierung, Vertragsprüfung, Governance und Designworkflows. Es entstand als Swagger und wird jetzt vom OpenAPI Initiative verwaltet.',
    },
    pt: {
      name: 'OpenAPI',
      description:
        'Formato de especificação linguagem-neutro para descrever APIs HTTP, esquemas, operações e documentação.',
      longDescription:
        'OpenAPI é um formato de especificação para descrever APIs HTTP de forma legível por máquina e humana. Os documentos OpenAPI definem caminhos, operações, parâmetros, corpos de solicitação, respostas, autenticação, componentes reutilizáveis ​​e informações do esquema.\n\nO formato é comumente escrito em YAML ou JSON e impulsiona a documentação da API, geração de clientes e servidores, testes de contrato, governança e fluxos de trabalho de design. Originou-se como Swagger e agora é mantido pela OpenAPI Initiative.',
    },
  },
} satisfies Language;
