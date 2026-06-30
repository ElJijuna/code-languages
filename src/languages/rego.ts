import type { Language } from '../types';

export const rego = {
  slug: 'rego',
  publishedDate: '2016-01-01',
  extensions: ['.rego'],
  author: 'Open Policy Agent contributors / Styra',
  website: 'https://www.openpolicyagent.org/docs/latest/policy-language/',
  paradigms: ['declarative', 'logic', 'policy-as-code', 'query'],
  tooling: {
    runtimes: ['Open Policy Agent', 'Conftest', 'Gatekeeper', 'Regal'],
    packageManagers: ['OPA bundles'],
    ecosystems: ['Policy as Code', 'Kubernetes', 'Cloud Native', 'Authorization'],
  },
  version: 'OPA 1.18.1',
  logo: 'https://raw.githubusercontent.com/open-policy-agent/opa/main/logo/logo.svg',
  color: '#5C4EE5',
  i18n: {
    en: {
      name: 'Rego',
      description:
        "Open Policy Agent's declarative policy language for authorization and policy as code.",
      longDescription:
        'Rego is the declarative policy language used by Open Policy Agent to express rules, decisions, constraints, data queries, and authorization logic. It is designed around structured data such as JSON and lets policies evaluate inputs against rules, sets, objects, comprehensions, and built-in functions.\n\nIt is used for Kubernetes admission control, service authorization, infrastructure policy checks, CI validation, API gateways, compliance automation, and cloud-native systems that need policies kept separate from application code.',
    },
    es: {
      name: 'Rego',
      description:
        'El lenguaje declarativo de Open Policy Agent para autorizacion y policy as code.',
      longDescription:
        'Rego es el lenguaje declarativo de politicas usado por Open Policy Agent para expresar reglas, decisiones, restricciones, consultas de datos y logica de autorizacion. Esta disenado alrededor de datos estructurados como JSON y permite evaluar entradas contra reglas, conjuntos, objetos, comprehensions y funciones integradas.\n\nSe usa para admission control en Kubernetes, autorizacion de servicios, validaciones de politicas de infraestructura, CI, gateways de APIs, automatizacion de cumplimiento y sistemas cloud native que necesitan mantener las politicas separadas del codigo de aplicacion.',
    },
    it: {
      name: 'Rego',
      description:
        "Rego: linguaggio di policy dichiarativo di Open Policy Agent per l'autorizzazione e la policy come codice.",
      longDescription:
        "Rego e il linguaggio di policy dichiarativo utilizzato da Open Policy Agent per esprimere regole, decisioni, vincoli, query sui dati e logica di autorizzazione. E progettato per dati strutturati come JSON e consente alle policy di valutare gli input rispetto a regole, insiemi, oggetti, comprensioni e funzioni integrate.\n\nViene utilizzato per il controllo di accesso di Kubernetes, l'autorizzazione dei servizi, i controlli di policy di infrastruttura, la validazione CI, i gateway API, l'automazione della conformita e i sistemi nativi del cloud che necessitano di policy separate dal codice dell'applicazione.",
    },
    fr: {
      name: 'Rego',
      description:
        "Langage de politique declaratif de Open Policy Agent pour l'autorisation et la politique en tant que code.",
      longDescription:
        "Rego est le langage de politique declaratif utilise par Open Policy Agent pour exprimer des regles, des decisions, des contraintes, des requetes de donnees et la logique d'autorisation. Il est concu autour de donnees structurees telles que JSON et permet aux politiques d'evaluer les entrees par rapport aux regles, aux ensembles, aux objets, aux comprehensions et aux fonctions integrees. \n\nIl est utilise pour le controle d'admission Kubernetes, l'autorisation de service, les verifications de politique d'infrastructure, la validation CI, les API gateways, l'automatisation de la conformite et les systemes natifs du cloud qui ont besoin de politiques separees du code d'application.",
    },
    de: {
      name: 'Rego',
      description:
        'Rego ist die deklarative Policy-Sprache des Open Policy Agent für Autorisierung und Policy as Code.',
      longDescription:
        'Rego ist die deklarative Policy-Sprache, die vom Open Policy Agent verwendet wird, um Regeln, Entscheidungen, Einschränkungen, Datenabfragen und Autorisierungslogik auszudrücken. Sie basiert auf strukturierter Daten wie JSON und ermöglicht es, Eingaben anhand von Regeln, Sätzen, Objekten, Comprehensions und eingebauten Funktionen zu evaluieren.\n\nSie wird für Kubernetes-Admission-Control, Service-Autorisierung, Infrastruktur-Policy-Checks, CI-Validierung, API-Gateways, Compliance-Automatisierung und Cloud-native-Systeme verwendet, die separate Policies von Anwendungs-Code benötigen.',
    },
    pt: {
      name: 'Rego',
      description:
        'Linguagem de política declarativa do Open Policy Agent para autorização e política como código.',
      longDescription:
        'Rego é a linguagem de política declarativa usada pelo Open Policy Agent para expressar regras, decisões, restrições, consultas de dados e lógica de autorização. É projetada para dados estruturados, como JSON, e permite que as políticas avaliem entradas em relação a regras, conjuntos, objetos, compreensões e funções integradas.\n\nÉ usada para controle de admissão do Kubernetes, autorização de serviços, verificações de política de infraestrutura, validação de CI, gateways de API, automação de conformidade e sistemas nativos de nuvem que precisam de políticas separadas do código de aplicação.',
    },
  },
} satisfies Language;
