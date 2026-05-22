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
  color: "#844FBA",
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
    it: {
      name: "HCL",
      description:
        "Linguaggio di configurazione di HashiCorp per la configurazione di infrastruttura e applicazioni leggibile dall'uomo.",
      longDescription:
        "HCL e il linguaggio di configurazione di HashiCorp, un linguaggio di configurazione strutturato progettato per essere leggibile dall'uomo, pur rimanendo facile da analizzare dagli strumenti. Supporta blocchi, attributi, espressioni, variabili, funzioni, valori di oggetti e riferimenti utilizzati per descrivere le impostazioni di infrastruttura e applicazioni.\n\nE noto principalmente tramite Terraform, ma viene utilizzato anche in vari strumenti di HashiCorp come Packer, Nomad, Vault e Consul. I file HCL definiscono comunemente risorse cloud, moduli, provider, job, policy, template e variabili specifiche dell'ambiente.",
    },
    fr: {
      name: "HCL",
      description:
        "Langage de configuration de HashiCorp pour la configuration d'infrastructure et d'applications lisible par l'homme.",
      longDescription:
        "HCL est le langage de configuration de HashiCorp, un langage de configuration structure concu pour etre lisible par l'homme tout en restant facile a analyser par les outils. Il prend en charge les blocs, les attributs, les expressions, les variables, les fonctions, les valeurs d'objets et les references utilises pour decrire les parametres d'infrastructure et d'applications. \n\nIl est principalement connu via Terraform, mais il est egalement utilise dans divers outils de HashiCorp tels que Packer, Nomad, Vault et Consul. Les fichiers HCL definissent couramment les ressources cloud, les modules, les fournisseurs, les taches, les politiques, les modeles et les variables specifiques a l'environnement.",
    },
  },
} satisfies Language;
