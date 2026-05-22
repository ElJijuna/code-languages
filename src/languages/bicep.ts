import type { Language } from "../types";

export const bicep = {
  slug: "bicep",
  publishedDate: "2020-09-01",
  extensions: [".bicep", ".bicepparam"],
  author: "Microsoft",
  website: "https://github.com/Azure/bicep",
  paradigms: ["declarative", "infrastructure-as-code", "configuration"],
  tooling: {
    runtimes: ["Azure Resource Manager"],
    packageManagers: ["Azure Verified Modules", "Bicep Registry"],
    ecosystems: ["Azure", "Cloud", "DevOps", "Infrastructure as Code"],
  },
  version: "0.43.8",
  logo: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/azure-bicep.svg",
  color: "#0078D4",
  i18n: {
    en: {
      name: "Bicep",
      description: "A declarative language for describing Azure infrastructure as code.",
      longDescription:
        "Bicep is a domain-specific language for authoring Azure Resource Manager deployments with a concise syntax, modules, parameters, symbolic names, loops, conditions, and type-aware tooling. It compiles to ARM templates while giving authors a friendlier source format.\n\nIt is used for repeatable Azure infrastructure deployments, platform engineering, cloud governance, reusable modules, CI/CD provisioning, and environment-specific resource definitions.",
    },
    es: {
      name: "Bicep",
      description: "Un lenguaje declarativo para describir infraestructura de Azure como codigo.",
      longDescription:
        "Bicep es un lenguaje de dominio especifico para crear despliegues de Azure Resource Manager con sintaxis concisa, modulos, parametros, nombres simbolicos, bucles, condiciones y tooling con tipos. Compila a plantillas ARM y ofrece un formato fuente mas comodo.\n\nSe usa para despliegues repetibles de infraestructura en Azure, platform engineering, gobierno cloud, modulos reutilizables, aprovisionamiento en CI/CD y definiciones de recursos por entorno.",
    },
  },
} satisfies Language;
