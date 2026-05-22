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
  },
} satisfies Language;
