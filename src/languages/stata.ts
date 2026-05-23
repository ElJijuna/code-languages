import type { Language } from "../types";

export const stata = {
  slug: "stata",
  publishedDate: "1985-01-01",
  extensions: [".do", ".ado", ".mata"],
  author: "StataCorp",
  website: "https://www.stata.com",
  paradigms: ["statistical", "scripting", "data-analysis", "domain-specific"],
  tooling: {
    runtimes: ["Stata"],
    ecosystems: ["Statistics", "Econometrics", "Research"],
  },
  version: "19",
  logo: "https://www.stata.com/includes/images/stata-logo-blue.svg",
  color: "#1A5276",
  i18n: {
    en: {
      name: "Stata",
      description: "A command language for statistical analysis, data management, and graphics.",
      longDescription:
        "Stata commands and do-files cover data preparation, estimation, graphics, reporting, and programmable workflows, with Mata available for matrix-oriented programming. The language is tied to the Stata statistical environment.\n\nIt is used in economics, public health, social science, policy analysis, teaching, and reproducible statistical research.",
    },
    es: {
      name: "Stata",
      description: "Un lenguaje de comandos para analisis estadistico, datos y graficos.",
      longDescription:
        "Los comandos y do-files de Stata cubren preparacion de datos, estimacion, graficos, reportes y flujos programables, con Mata para programacion orientada a matrices. El lenguaje esta ligado al entorno estadistico Stata.\n\nSe usa en economia, salud publica, ciencias sociales, analisis de politicas, ensenanza e investigacion estadistica reproducible.",
    },
    it: {
      name: "Stata",
      description:
        "Un linguaggio di comando per l'analisi statistica, la gestione dei dati e la creazione di grafici.",
      longDescription:
        "I comandi e i file do di Stata coprono la preparazione dei dati, la stima, la creazione di grafici, la generazione di report e i flussi di lavoro programmabili, con Mata disponibile per la programmazione orientata alle matrici. Il linguaggio e legato all'ambiente statistico Stata.\n\nViene utilizzato in economia, sanita pubblica, scienze sociali, analisi delle politiche, insegnamento e ricerca statistica riproducibile.",
    },
    fr: {
      name: "Stata",
      description:
        "Un langage de commande pour l'analyse statistique, la gestion des donnees et la creation de graphiques.",
      longDescription:
        "Les commandes et les fichiers do de Stata couvrent la preparation des donnees, l'estimation, la creation de graphiques, la generation de rapports et les flux de travail programmables, avec Mata disponible pour la programmation orientee matrice. Le langage est lie a l'environnement statistique Stata.\n\nIl est utilise en economie, en sante publique, en sciences sociales, en analyse de politiques, dans l'enseignement et dans la recherche statistique reproductible.",
    },
    de: {
      name: "Stata",
      description:
        "Eine Programmiersprache f\u00fcr statistische Analyse, Datenverwaltung und Grafik.",
      longDescription:
        "Stata-Befehle und Do-Dateien decken Datenvorbereitung, Sch\u00e4tzung, Grafik, Berichterstellung und programmierbare Arbeitsabl\u00e4ufe ab, wobei Mata f\u00fcr matrixorientierte Programmierung verf\u00fcgbar ist. Die Sprache ist an die Stata-Statistikumgebung gebunden.\n\nSie wird in der Wirtschaft, der \u00f6ffentlichen Gesundheit, den Sozialwissenschaften, der Politikanalyse, im Unterricht und f\u00fcr reproduzierbare statistische Forschung eingesetzt.",
    },
    pt: {
      name: "Stata",
      description:
        "Uma linguagem de programa\u00e7\u00e3o para an\u00e1lise estat\u00edstica, gerenciamento de dados e gr\u00e1ficos.",
      longDescription:
        "Os comandos e arquivos do tipo do Stata cobrem a prepara\u00e7\u00e3o de dados, a estima\u00e7\u00e3o, a cria\u00e7\u00e3o de gr\u00e1ficos, a gera\u00e7\u00e3o de relat\u00f3rios e fluxos de trabalho program\u00e1veis, com o Mata dispon\u00edvel para programa\u00e7\u00e3o orientada a matrizes. A linguagem est\u00e1 integrada ao ambiente estat\u00edstico Stata.\n\n\u00c9 utilizada em economia, sa\u00fade p\u00fablica, ci\u00eancias sociais, an\u00e1lise de pol\u00edticas, ensino e pesquisa estat\u00edstica reprodut\u00edvel.",
    },
  },
} satisfies Language;
