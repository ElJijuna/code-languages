import type { Language } from '../types';

export const modelica = {
  slug: 'modelica',
  publishedDate: '1997-09-01',
  extensions: ['.mo'],
  author: 'Modelica Association',
  website: 'https://modelica.org',
  paradigms: ['object-oriented', 'declarative', 'equation-based', 'modeling'],
  tooling: {
    runtimes: ['OpenModelica', 'Dymola', 'MapleSim'],
    ecosystems: ['Physical Modeling', 'Simulation', 'Control Systems', 'Scientific Computing'],
  },
  version: '3.6.1',
  logo: 'https://avatars.githubusercontent.com/u/3727943?v=4',
  color: '#FF7300',
  i18n: {
    en: {
      name: 'Modelica',
      description:
        'An object-oriented, equation-based language for modeling and simulation of physical systems.',
      longDescription:
        'Modelica is a non-proprietary modeling language for describing complex physical systems in domains such as mechanical, electrical, thermal, hydraulic, and control engineering. It uses equations rather than assignment statements, enabling acausal modeling where the system structure is described independently of the computation direction.\n\nDeveloped by the Modelica Association, the language supports component-based design through class hierarchies, packages, and connectors. OpenModelica and Dymola are the most widely used environments, applied in automotive, aerospace, and energy simulation workflows.',
    },
    es: {
      name: 'Modelica',
      description:
        'Lenguaje orientado a objetos basado en ecuaciones para modelar y simular sistemas fisicos.',
      longDescription:
        'Modelica es un lenguaje de modelado no propietario para describir sistemas fisicos complejos en dominios como mecanica, electronica, termofluidos, hidraulica e ingenieria de control. Usa ecuaciones en lugar de asignaciones, permitiendo el modelado acausal donde la estructura del sistema se describe independientemente de la direccion de calculo.\n\nDesarrollado por la Asociacion Modelica, el lenguaje soporta diseno basado en componentes mediante jerarquias de clases, paquetes y conectores. OpenModelica y Dymola son los entornos mas utilizados, aplicados en simulacion automotriz, aeroespacial y energetica.',
    },
    it: {
      name: 'Modelica',
      description:
        'Linguaggio orientato agli oggetti basato su equazioni per la modellazione di sistemi fisici.',
      longDescription:
        'Modelica e un linguaggio di modellazione non proprietario per descrivere sistemi fisici complessi in domini come meccanica, elettronica, termodinamica, idraulica e controllo. Usa equazioni invece di assegnazioni, abilitando la modellazione acausale in cui la struttura del sistema e indipendente dalla direzione di calcolo.\n\nSviluppato dalla Modelica Association, supporta la progettazione basata su componenti tramite gerarchie di classi, pacchetti e connettori. OpenModelica e Dymola sono gli ambienti piu utilizzati, impiegati in simulazioni automotive, aerospaziali ed energetiche.',
    },
    fr: {
      name: 'Modelica',
      description:
        'Langage oriente objet base sur des equations pour la modelisation de systemes physiques.',
      longDescription:
        'Modelica est un langage de modelisation non proprietaire pour decrire des systemes physiques complexes dans des domaines tels que la mecanique, l electronique, la thermodynamique, l hydraulique et le controle. Il utilise des equations plutot que des affectations, permettant une modelisation acausale independante de la direction de calcul.\n\nDeveloppe par la Modelica Association, il prend en charge la conception par composants via des hierarchies de classes, des packages et des connecteurs. OpenModelica et Dymola sont les environnements les plus utilises, appliques aux simulations automobile, aerospatiale et energetique.',
    },
    de: {
      name: 'Modelica',
      description:
        'Objektorientierte gleichungsbasierte Sprache zur Modellierung und Simulation physikalischer Systeme.',
      longDescription:
        'Modelica ist eine nicht-proprietare Modellierungssprache zur Beschreibung komplexer physikalischer Systeme in Bereichen wie Mechanik, Elektrotechnik, Thermodynamik, Hydraulik und Regelungstechnik. Sie verwendet Gleichungen statt Zuweisungen und ermoglicht akausale Modellierung, bei der die Systemstruktur unabhangig von der Berechnungsrichtung beschrieben wird.\n\nEntwickelt von der Modelica Association, unterstutzt die Sprache komponentenbasiertes Design durch Klassenhierarchien, Pakete und Konnektoren. OpenModelica und Dymola sind die am weitesten verbreiteten Umgebungen fur Simulation in Automobil-, Luft- und Energietechnik.',
    },
    pt: {
      name: 'Modelica',
      description:
        'Linguagem orientada a objetos baseada em equacoes para modelagem e simulacao de sistemas fisicos.',
      longDescription:
        'Modelica e uma linguagem de modelagem nao proprietaria para descrever sistemas fisicos complexos em dominios como mecanica, eletronica, termodinamica, hidraulica e controle. Usa equacoes em vez de atribuicoes, permitindo modelagem acausal onde a estrutura do sistema e descrita independentemente da direcao de calculo.\n\nDesenvolvida pela Modelica Association, suporta design baseado em componentes por meio de hierarquias de classes, pacotes e conectores. OpenModelica e Dymola sao os ambientes mais utilizados em simulacoes automotivas, aeroespaciais e energeticas.',
    },
  },
} satisfies Language;
