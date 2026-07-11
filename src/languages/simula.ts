import type { Language } from '@/types';

export const simula = {
  slug: 'simula',
  publishedDate: '1962-01-01',
  extensions: ['.sim', '.simula'],
  author: 'Ole-Johan Dahl and Kristen Nygaard',
  website: 'https://www.simula67.info',
  paradigms: ['object-oriented', 'imperative', 'procedural'],
  tooling: {
    runtimes: ['Simula compilers'],
    ecosystems: ['Simulation', 'Language history'],
  },
  version: 'Simula 67',
  logo: 'https://dummyimage.com/32x32/2563EB/ffffff.png&text=Si',
  color: '#2563EB',
  i18n: {
    en: {
      name: 'Simula',
      description:
        'A pioneering simulation and object-oriented programming language descended from ALGOL.',
      longDescription:
        'Simula is a programming language family created for discrete-event simulation and later recognized as the first object-oriented language. Simula 67 introduced classes, objects, inheritance-like specialization, and coroutines in a form that shaped later object-oriented systems.\n\nIt is historically important in language design, education, simulation modeling, and the evolution of object-oriented programming. Modern use is mostly archival, academic, and through maintained compilers and historical implementations.',
    },
    es: {
      name: 'Simula',
      description:
        'Lenguaje pionero de simulacion y programacion orientada a objetos derivado de ALGOL.',
      longDescription:
        'Simula es una familia de lenguajes creada para simulacion de eventos discretos y luego reconocida como el primer lenguaje orientado a objetos. Simula 67 introdujo clases, objetos, especializacion similar a herencia y corrutinas en una forma que influyo en sistemas orientados a objetos posteriores.\n\nTiene importancia historica en diseno de lenguajes, educacion, modelado de simulacion y evolucion de la programacion orientada a objetos. Su uso moderno es principalmente archivistico, academico y mediante compiladores mantenidos e implementaciones historicas.',
    },
    it: {
      name: 'Simula',
      description:
        'Linguaggio pionieristico di simulazione e programmazione orientata agli oggetti derivato da ALGOL.',
      longDescription:
        'Simula e una famiglia di linguaggi creata per la simulazione a eventi discreti e poi riconosciuta come il primo linguaggio orientato agli oggetti. Simula 67 introdusse classi, oggetti, specializzazione simile all ereditarieta e coroutine in una forma che influenzo i sistemi orientati agli oggetti successivi.\n\nE storicamente importante per il design dei linguaggi, la didattica, la modellazione di simulazioni e l evoluzione della programmazione orientata agli oggetti. L uso moderno e soprattutto archivistico, accademico e tramite compilatori mantenuti o implementazioni storiche.',
    },
    fr: {
      name: 'Simula',
      description:
        'Langage pionnier de simulation et de programmation orientee objet issu d ALGOL.',
      longDescription:
        'Simula est une famille de langages creee pour la simulation a evenements discrets, puis reconnue comme le premier langage oriente objet. Simula 67 a introduit classes, objets, specialisation proche de l heritage et coroutines sous une forme qui a marque les systemes objets ulterieurs.\n\nIl est historiquement important pour la conception des langages, l enseignement, la modelisation de simulations et l evolution de la programmation orientee objet. Son usage moderne est surtout archivistique, academique et lie a des compilateurs maintenus ou des implementations historiques.',
    },
    de: {
      name: 'Simula',
      description:
        'Pioniersprache fur Simulation und objektorientierte Programmierung aus der ALGOL-Familie.',
      longDescription:
        'Simula ist eine Sprachfamilie, die fur diskrete Ereignissimulation entwickelt wurde und spater als erste objektorientierte Sprache anerkannt wurde. Simula 67 fuhrte Klassen, Objekte, vererbungsahnliche Spezialisierung und Koroutinen in einer Form ein, die spatere objektorientierte Systeme pragte.\n\nDie Sprache ist historisch wichtig fur Sprachdesign, Lehre, Simulationsmodellierung und die Entwicklung objektorientierter Programmierung. Moderne Nutzung ist vor allem archivalisch, akademisch und uber gepflegte Compiler oder historische Implementierungen.',
    },
    pt: {
      name: 'Simula',
      description:
        'Linguagem pioneira de simulacao e programacao orientada a objetos derivada de ALGOL.',
      longDescription:
        'Simula e uma familia de linguagens criada para simulacao de eventos discretos e depois reconhecida como a primeira linguagem orientada a objetos. Simula 67 introduziu classes, objetos, especializacao parecida com heranca e corrotinas em uma forma que influenciou sistemas orientados a objetos posteriores.\n\nEla e historicamente importante no design de linguagens, educacao, modelagem de simulacao e evolucao da programacao orientada a objetos. O uso moderno e principalmente arquivistico, academico e por compiladores mantidos ou implementacoes historicas.',
    },
  },
} satisfies Language;
