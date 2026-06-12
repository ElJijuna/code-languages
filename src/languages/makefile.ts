import type { Language } from '../types';

export const makefile = {
  slug: 'makefile',
  publishedDate: '1976-01-01',
  extensions: ['Makefile', 'makefile', 'GNUmakefile', '.mk', '.mak'],
  author: 'Stuart Feldman / GNU Project',
  website: 'https://www.gnu.org/software/make/',
  paradigms: ['build-automation', 'declarative', 'imperative', 'rule-based'],
  tooling: {
    runtimes: ['GNU Make', 'BSD make', 'POSIX make'],
    ecosystems: ['Unix', 'Linux', 'C', 'C++', 'Embedded Systems'],
  },
  version: '4.4.1',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Heckert_gnu.small.png',
  color: '#427819',
  i18n: {
    en: {
      name: 'Makefile',
      description:
        'A rule-based build automation format used by make tools to run reproducible tasks.',
      longDescription:
        'Makefiles describe targets, prerequisites, variables, and shell recipes that make tools use to decide what work must be rebuilt and which commands should run.\n\nThey are widely used for compiling C and C++ projects, driving Unix build pipelines, packaging software, running development tasks, generating artifacts, and coordinating commands across many programming language ecosystems.',
    },
    es: {
      name: 'Makefile',
      description:
        'Un formato de automatizacion de builds basado en reglas usado por herramientas make.',
      longDescription:
        'Los Makefiles describen targets, prerequisitos, variables y recetas de shell que las herramientas make usan para decidir que trabajo debe reconstruirse y que comandos deben ejecutarse.\n\nSe usan ampliamente para compilar proyectos C y C++, manejar pipelines de build en Unix, empaquetar software, ejecutar tareas de desarrollo, generar artefactos y coordinar comandos en muchos ecosistemas de lenguajes.',
    },
    it: {
      name: 'Makefile',
      description:
        'Un formato di automazione della compilazione basato su regole utilizzato dagli strumenti make per eseguire attivita riproducibili.',
      longDescription:
        'I Makefile descrivono target, prerequisiti, variabili e ricette di shell che gli strumenti make utilizzano per decidere quali attivita devono essere ricostruite e quali comandi devono essere eseguiti.\n\nSono ampiamente utilizzati per compilare progetti C e C++, per guidare i pipeline di build Unix, per impacchettare software, per eseguire attivita di sviluppo, per generare artefatti e per coordinare comandi in molti ecosistemi di linguaggi di programmazione.',
    },
    fr: {
      name: 'Makefile',
      description:
        "Un format d'automatisation de construction base sur des regles utilise par les outils make pour executer des taches reproductibles.",
      longDescription:
        'Les fichiers make decrivent des cibles, des prerequis, des variables et des recettes de shell que les outils make utilisent pour decider quelles taches doivent etre reconstruites et quels commandes doivent etre executees.\n\nElles sont largement utilisees pour compiler des projets C et C++, pour piloter les pipelines de construction Unix, pour empaqueter des logiciels, pour executer des taches de developpement, pour generer des artefacts et pour coordonner des commandes dans de nombreux ecosystemes de langages de programmation.',
    },
    de: {
      name: 'Makefile',
      description:
        'Ein regelbasiertes Build-Automatisierungsformat, das von Make-Tools verwendet wird, um reproduzierbare Aufgaben auszuführen.',
      longDescription:
        'Makefiles definieren Ziele, Abhängigkeiten, Variablen und Shell-Rezepte, die Make-Tools verwenden, um zu entscheiden, welche Aufgaben neu erstellt werden müssen und welche Befehle ausgeführt werden sollen.\n\nSie werden häufig für die Kompilierung von C- und C++-Projekten, das Steuern von Unix-Build-Pipelines, das Verpacken von Software, das Ausführen von Entwicklungstasks, das Generieren von Artefakten und die Koordination von Befehlen in verschiedenen Programmiersprachen-Ökosystemen verwendet.',
    },
    pt: {
      name: 'Makefile',
      description:
        'Formato de automação de construção baseado em regras usado pela ferramenta make para executar tarefas reproduzíveis.',
      longDescription:
        'Arquivos make descrevem alvos, dependências, variáveis e receitas de shell que as ferramentas make usam para decidir quais tarefas devem ser reconstruídas e quais comandos devem ser executados.\n\nSão amplamente utilizados para compilar projetos C e C++, para impulsionar pipelines de construção Unix, para empacotar software, para executar tarefas de desenvolvimento, para gerar artefatos e para coordenar comandos em vários ecossistemas de linguagens de programação.',
    },
  },
} satisfies Language;
