import type { Language } from "../types";

export const prolog = {
  slug: "prolog",
  publishedDate: "1972-01-01",
  extensions: [".pl", ".pro", ".prolog", ".P"],
  author: "Alain Colmerauer, Philippe Roussel, Robert Kowalski",
  website: "https://www.swi-prolog.org",
  paradigms: ["logic", "declarative", "relational", "constraint"],
  tooling: {
    runtimes: ["SWI-Prolog", "GNU Prolog", "Scryer Prolog"],
    packageManagers: ["SWI-Prolog pack"],
    ecosystems: ["Logic Programming", "AI", "Expert Systems", "Constraint Solving"],
  },
  version: "SWI-Prolog 10.0",
  logo: "https://www.swi-prolog.org/icons/swipl.png",
  color: "#74283C",
  i18n: {
    en: {
      name: "Prolog",
      description: "A logic programming language based on facts, rules, queries, and unification.",
      longDescription:
        "Prolog expresses programs as relations using facts, rules, terms, predicates, unification, backtracking, recursion, and constraint logic programming. Rather than spelling out step-by-step control flow, programs describe what is true and let the engine search for solutions.\n\nIt is used for symbolic AI, expert systems, theorem proving, language processing, rule engines, planning, scheduling, constraint solving, education, and domains where relational reasoning is more natural than imperative control flow.",
    },
    es: {
      name: "Prolog",
      description:
        "Un lenguaje de programacion logica basado en hechos, reglas, consultas y unificacion.",
      longDescription:
        "Prolog expresa programas como relaciones usando hechos, reglas, terminos, predicados, unificacion, backtracking, recursion y programacion logica con restricciones. En vez de detallar flujo de control paso a paso, los programas describen que es verdadero y el motor busca soluciones.\n\nSe usa en IA simbolica, sistemas expertos, demostracion de teoremas, procesamiento de lenguaje, motores de reglas, planificacion, scheduling, resolucion de restricciones, educacion y dominios donde el razonamiento relacional es mas natural que el control imperativo.",
    },
  },
} satisfies Language;
