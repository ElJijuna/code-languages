import type { Language } from "../types";

export const rego = {
  slug: "rego",
  publishedDate: "2016-01-01",
  extensions: [".rego"],
  author: "Open Policy Agent contributors / Styra",
  website: "https://www.openpolicyagent.org/docs/latest/policy-language/",
  paradigms: ["declarative", "logic", "policy-as-code", "query"],
  tooling: {
    runtimes: ["Open Policy Agent", "Conftest", "Gatekeeper", "Regal"],
    packageManagers: ["OPA bundles"],
    ecosystems: ["Policy as Code", "Kubernetes", "Cloud Native", "Authorization"],
  },
  version: "OPA 1.16.2",
  logo: "https://raw.githubusercontent.com/open-policy-agent/opa/main/logo/logo.svg",
  i18n: {
    en: {
      name: "Rego",
      description:
        "Open Policy Agent's declarative policy language for authorization and policy as code.",
      longDescription:
        "Rego is the declarative policy language used by Open Policy Agent to express rules, decisions, constraints, data queries, and authorization logic. It is designed around structured data such as JSON and lets policies evaluate inputs against rules, sets, objects, comprehensions, and built-in functions.\n\nIt is used for Kubernetes admission control, service authorization, infrastructure policy checks, CI validation, API gateways, compliance automation, and cloud-native systems that need policies kept separate from application code.",
    },
    es: {
      name: "Rego",
      description:
        "El lenguaje declarativo de Open Policy Agent para autorizacion y policy as code.",
      longDescription:
        "Rego es el lenguaje declarativo de politicas usado por Open Policy Agent para expresar reglas, decisiones, restricciones, consultas de datos y logica de autorizacion. Esta disenado alrededor de datos estructurados como JSON y permite evaluar entradas contra reglas, conjuntos, objetos, comprehensions y funciones integradas.\n\nSe usa para admission control en Kubernetes, autorizacion de servicios, validaciones de politicas de infraestructura, CI, gateways de APIs, automatizacion de cumplimiento y sistemas cloud native que necesitan mantener las politicas separadas del codigo de aplicacion.",
    },
  },
} satisfies Language;
