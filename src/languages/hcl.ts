import type { Language } from "../types";

export const hcl = {
  slug: "hcl",
  publishedDate: "2014-01-01",
  extensions: [".hcl", ".tf", ".tfvars", ".pkr.hcl", ".nomad"],
  author: "HashiCorp",
  website: "https://github.com/hashicorp/hcl",
  paradigms: ["declarative", "configuration", "data-serialization"],
  tooling: {
    runtimes: ["Terraform", "Packer", "Nomad", "Vault", "Consul"],
    packageManagers: ["Terraform Registry"],
    ecosystems: ["Infrastructure as Code", "DevOps", "Cloud", "HashiCorp"],
  },
  version: "2.24.0",
  logo: "https://cdn.simpleicons.org/hashicorp/844FBA",
  i18n: {
    en: {
      name: "HCL",
      description:
        "HashiCorp Configuration Language for human-readable infrastructure and application configuration.",
      longDescription:
        "HCL is HashiCorp Configuration Language, a structured configuration language designed to be readable by humans while remaining easy for tools to parse. It supports blocks, attributes, expressions, variables, functions, object values, and references used to describe infrastructure and application settings.\n\nIt is best known through Terraform, but it is also used across HashiCorp tools such as Packer, Nomad, Vault, and Consul. HCL files commonly define cloud resources, modules, providers, jobs, policies, templates, and environment-specific variables.",
    },
    es: {
      name: "HCL",
      description:
        "El lenguaje de configuracion de HashiCorp para infraestructura y configuracion legible por humanos.",
      longDescription:
        "HCL es HashiCorp Configuration Language, un lenguaje de configuracion estructurado disenado para ser legible por humanos y facil de analizar por herramientas. Soporta bloques, atributos, expresiones, variables, funciones, valores de objeto y referencias usadas para describir infraestructura y configuracion de aplicaciones.\n\nEs conocido principalmente por Terraform, pero tambien se usa en herramientas de HashiCorp como Packer, Nomad, Vault y Consul. Los archivos HCL suelen definir recursos cloud, modulos, providers, jobs, politicas, templates y variables especificas por entorno.",
    },
  },
} satisfies Language;
