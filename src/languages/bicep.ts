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
    it: {
      name: "Bicep",
      description: "Un linguaggio dichiarativo per descrivere l'infrastruttura Azure come codice.",
      longDescription:
        "Bicep e un linguaggio specifico per il dominio per la creazione di implementazioni di Azure Resource Manager con una sintassi concisa, moduli, parametri, nomi simbolici, cicli, condizioni e strumenti consapevoli dei tipi. Compila in modelli ARM fornendo agli autori un formato di origine piu intuitivo.\n\nViene utilizzato per implementazioni ripetibili di infrastruttura Azure, ingegneria della piattaforma, governance del cloud, moduli riutilizzabili, provisioning CI/CD e definizioni di risorse specifiche per l'ambiente.",
    },
    fr: {
      name: "Bicep",
      description: "Un langage declaratif pour decrire l'infrastructure Azure en tant que code.",
      longDescription:
        "Bicep est un langage specifique a un domaine pour la creation de deploiements Azure Resource Manager avec une syntaxe concise, des modules, des parametres, des noms symboliques, des boucles, des conditions et des outils de type. Il compile en modeles ARM tout en offrant aux auteurs un format de source plus convivial.\n\nIl est utilise pour les deploiements d'infrastructure Azure reproductibles, l'ingenierie de plateformes, la gouvernance du cloud, les modules reutilisables, la provisionnement CI/CD et les definitions de ressources specifiques a l'environnement.",
    },
    de: {
      name: "Bicep",
      description: "Eine deklarative Sprache zur Beschreibung der Azure-Infrastruktur als Code.",
      longDescription:
        "Bicep ist eine dom\u00e4nenspezifische Sprache zum Erstellen von Azure Resource Manager-Bereitstellungen mit einer pr\u00e4gnanten Syntax, Modulen, Parametern, symbolischen Namen, Schleifen, Bedingungen und typsicherem Werkzeug. Es kompiliert zu ARM-Vorlagen, bietet aber Autoren ein freundlicheres Quellformat.\n\nEs wird f\u00fcr wiederholte Bereitstellungen der Azure-Infrastruktur, Plattformentwicklung, Cloud-Governance, wiederverwendbare Module, CI/CD-Bereitstellung und ressourcenbezogene Definitionen verwendet, die auf bestimmte Umgebungen zugeschnitten sind.",
    },
    pt: {
      name: "Bicep",
      description:
        "Linguagem declarativa para descrever a infraestrutura do Azure como c\u00f3digo.",
      longDescription:
        "Bicep \u00e9 uma linguagem espec\u00edfica para a cria\u00e7\u00e3o de implanta\u00e7\u00f5es do Azure Resource Manager com uma sintaxe concisa, m\u00f3dulos, par\u00e2metros, nomes simb\u00f3licos, loops, condi\u00e7\u00f5es e ferramentas com suporte a tipos. Compila para modelos ARM, oferecendo um formato de c\u00f3digo mais amig\u00e1vel aos autores.\n\n\u00c9 utilizada para implanta\u00e7\u00f5es repet\u00edveis de infraestrutura do Azure, engenharia de plataforma, governan\u00e7a em nuvem, m\u00f3dulos reutiliz\u00e1veis, provisionamento CI/CD e defini\u00e7\u00f5es de recursos espec\u00edficas do ambiente.",
    },
  },
} satisfies Language;
