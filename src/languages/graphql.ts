import type { Language } from "../types";

export const graphql = {
  slug: "graphql",
  publishedDate: "2015-07-02",
  extensions: [".graphql", ".gql", ".graphqls"],
  author: "Facebook / GraphQL Foundation",
  website: "https://graphql.org",
  paradigms: ["declarative", "query", "schema", "typed"],
  tooling: {
    runtimes: ["GraphQL.js", "Apollo Server", "GraphQL Yoga", "Mercurius"],
    packageManagers: ["npm", "pnpm", "Yarn", "Bun"],
    ecosystems: ["APIs", "Web", "Mobile", "Data Graphs"],
  },
  version: "September 2025",
  logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
  color: "#E10098",
  i18n: {
    en: {
      name: "GraphQL",
      description:
        "A typed query and schema language for APIs that lets clients request exact data shapes.",
      longDescription:
        "GraphQL is a typed query language, schema language, and execution model for APIs that lets clients describe the exact data they need and servers expose capabilities through a strongly typed graph.\n\nIt is widely used in web and mobile applications, API gateways, federated service graphs, developer platforms, content systems, and tooling workflows that need introspection, validation, code generation, and predictable client-server contracts.",
    },
    es: {
      name: "GraphQL",
      description:
        "Un lenguaje tipado de consultas y esquemas para APIs que permite pedir datos exactos.",
      longDescription:
        "GraphQL es un lenguaje tipado de consultas, lenguaje de esquemas y modelo de ejecucion para APIs que permite a los clientes describir exactamente los datos que necesitan y a los servidores exponer capacidades mediante un grafo fuertemente tipado.\n\nSe usa ampliamente en aplicaciones web y moviles, API gateways, grafos de servicios federados, plataformas para desarrolladores, sistemas de contenido y flujos de tooling que necesitan introspeccion, validacion, generacion de codigo y contratos cliente-servidor predecibles.",
    },
    it: {
      name: "GraphQL",
      description:
        "Un linguaggio di query e schema tipizzato per API che consente ai client di richiedere forme di dati esatte.",
      longDescription:
        "GraphQL e un linguaggio di query tipizzato, un linguaggio di schema e un modello di esecuzione per API che consente ai client di descrivere i dati esatti di cui hanno bisogno e ai server di esporre le proprie capacita attraverso un grafo fortemente tipizzato.\n\nE ampiamente utilizzato in applicazioni web e mobili, gateway API, grafi di servizi federati, piattaforme per sviluppatori, sistemi di contenuti e flussi di lavoro di strumenti che richiedono introspezione, validazione, generazione di codice e contratti prevedibili tra client e server.",
    },
    fr: {
      name: "GraphQL",
      description:
        "Un langage de requete et de schema type pour les API, qui permet aux clients de demander des formes de donnees precises.",
      longDescription:
        "GraphQL est un langage de requete type, un langage de schema et un modele d'execution pour les API, qui permet aux clients de decrire les donnees exactes dont ils ont besoin et aux serveurs d'exposer des capacites via un graphe fortement type.\n\nIl est largement utilise dans les applications web et mobiles, les API gateways, les graphes de services federes, les plateformes de developpement, les systemes de contenu et les flux de travail d'outillage qui necessitent l'introspection, la validation, la generation de code et des contrats clients-serveurs previsibles.",
    },
    de: {
      name: "GraphQL",
      description:
        "Eine typisierte Abfragesprache und Schemalingua f\u00fcr APIs, die Clients pr\u00e4zise Datenstrukturen anfordern l\u00e4sst.",
      longDescription:
        "GraphQL ist eine typisierte Abfragesprache, Schemalingua und Ausf\u00fchrungsmodell f\u00fcr APIs, das Clients erm\u00f6glicht, die exakt ben\u00f6tigten Daten zu beschreiben, w\u00e4hrend Server \u00fcber ein stark typisiertes Graph M\u00f6glichkeiten bereitstellen. \n\nEs wird h\u00e4ufig in Web- und Mobile-Anwendungen, API-Gateways, federierten Service-Graphen, Entwicklerplattformen, Inhalts-Systemen und Tooling-Workflows verwendet, die Introspektion, Validierung, Code-Generierung und vorhersagbare Client-Server-Vertr\u00e4ge ben\u00f6tigen.",
    },
    pt: {
      name: "GraphQL",
      description:
        "Linguagem de consulta e esquema com tipagem para APIs, permitindo que os clientes solicitem formatos de dados exatos.",
      longDescription:
        "GraphQL \u00e9 uma linguagem de consulta e esquema com tipagem para APIs, permitindo que os clientes definam os dados exatos que precisam e os servidores exponham capacidades atrav\u00e9s de um grafo fortemente tipado. \n\n\u00c9 amplamente utilizada em aplica\u00e7\u00f5es web e m\u00f3veis, gateways de API, grafos de servi\u00e7os federados, plataformas de desenvolvedores, sistemas de conte\u00fado e fluxos de trabalho de ferramentas que necessitam de introspec\u00e7\u00e3o, valida\u00e7\u00e3o, gera\u00e7\u00e3o de c\u00f3digo e contratos previs\u00edveis entre cliente e servidor.",
    },
  },
} satisfies Language;
