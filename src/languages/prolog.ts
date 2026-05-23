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
    it: {
      name: "Prolog",
      description:
        "Un linguaggio di programmazione logica basato su fatti, regole, query e unificazione.",
      longDescription:
        "Prolog esprime i programmi come relazioni utilizzando fatti, regole, termini, predicati, unificazione, backtracking, ricorsione e programmazione logica basata su vincoli. Invece di specificare il flusso di controllo passo dopo passo, i programmi descrivono cosa e vero e lasciano che il motore cerchi le soluzioni.\n\nViene utilizzato per l'intelligenza artificiale simbolica, sistemi esperti, dimostrazione di teoremi, elaborazione del linguaggio, motori di regole, pianificazione, programmazione, risoluzione di vincoli, istruzione e domini in cui il ragionamento relazionale e piu naturale del flusso di controllo imperativo.",
    },
    fr: {
      name: "Prolog",
      description:
        "Un langage de programmation logique base sur les faits, les regles, les requetes et l'unification.",
      longDescription:
        "Prolog exprime les programmes sous forme de relations en utilisant des faits, des regles, des termes, des predicats, l'unification, le retour en arriere, la recursion et la programmation logique par contraintes. Plutot que de specifier un flux de controle etape par etape, les programmes decrivent ce qui est vrai et permettent au moteur de rechercher des solutions.\n\nIl est utilise pour l'IA symbolique, les systemes experts, la demonstration de theoremes, le traitement du langage, les moteurs de regles, la planification, la planification, la resolution de contraintes, l'education et les domaines ou le raisonnement relationnel est plus naturel que le flux de controle imperatif.",
    },
    de: {
      name: "Prolog",
      description:
        "Eine logische Programmiersprache, die auf Fakten, Regeln, Abfragen und Vereinigung basiert.",
      longDescription:
        "Prolog dr\u00fcckt Programme als Beziehungen aus, wobei Fakten, Regeln, Terme, Pr\u00e4dikate, Vereinigung, R\u00fcckverfolgung und Rekursion verwendet werden. Anstatt Schritt-f\u00fcr-Schritt-Steuerung zu definieren, beschreiben Programme, was wahr ist, und lassen den Engine nach L\u00f6sungen suchen.\n\nEs wird f\u00fcr symbolische KI, Expertensysteme, Theorembeweise, Sprachverarbeitung, Regel-Engines, Planung, Terminplanung, Constraint-L\u00f6sung, Bildung und Bereiche verwendet, in denen relationales Schlussfolgern nat\u00fcrlicher ist als imperative Steuerung.",
    },
    pt: {
      name: "Prolog",
      description:
        "Linguagem de programa\u00e7\u00e3o l\u00f3gica baseada em fatos, regras, consultas e unifica\u00e7\u00e3o.",
      longDescription:
        "Prolog expressa programas como rela\u00e7\u00f5es usando fatos, regras, termos, predicados, unifica\u00e7\u00e3o, retrocesso e recurs\u00e3o. Em vez de especificar o fluxo de controle passo a passo, os programas descrevem o que \u00e9 verdadeiro e permitem que o motor encontre solu\u00e7\u00f5es.\n\n\u00c9 usada para IA simb\u00f3lica, sistemas especialistas, prova de teoremas, processamento de linguagem, motores de regras, planejamento, agendamento, resolu\u00e7\u00e3o de restri\u00e7\u00f5es, educa\u00e7\u00e3o e dom\u00ednios onde o racioc\u00ednio relacional \u00e9 mais natural do que o controle imperativo.",
    },
  },
} satisfies Language;
