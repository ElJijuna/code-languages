import type { Language } from '@/types';

export const mumps = {
  slug: 'mumps',
  publishedDate: '1966-01-01',
  extensions: ['.mac', '.int', '.ro', '.mro'],
  author: 'Neil Pappalardo',
  website: 'https://docs.intersystems.com',
  paradigms: ['imperative', 'procedural'],
  tooling: {
    ecosystems: ['Healthcare IT', 'InterSystems IRIS', 'InterSystems Caché'],
  },
  version: 'InterSystems IRIS 2025.1',
  logo: 'https://avatars.githubusercontent.com/u/1506671?v=4',
  color: '#00B4E3',
  i18n: {
    en: {
      name: 'MUMPS',
      description:
        'A general-purpose programming language with hierarchical database built in, widely used in healthcare IT.',
      longDescription:
        'MUMPS (Massachusetts General Hospital Utility Multi-Programming System), also known as M or Cache ObjectScript in its InterSystems implementation, is a language with a hierarchical key-value database built directly into the runtime.\n\nIt powers major healthcare information systems, including Epic and many electronic health record (EHR) platforms, making it one of the most widely deployed languages in healthcare IT despite its obscurity outside the domain.',
    },
    es: {
      name: 'MUMPS',
      description:
        'Un lenguaje de programación de propósito general con base de datos jerárquica integrada, ampliamente usado en TI sanitaria.',
      longDescription:
        'MUMPS (Massachusetts General Hospital Utility Multi-Programming System), conocido como M o Cache ObjectScript en su implementación de InterSystems, es un lenguaje con una base de datos jerárquica de clave-valor integrada directamente en el runtime.\n\nImpulsa los principales sistemas de información sanitaria, incluyendo Epic y muchas plataformas de historia clínica electrónica (EHR), convirtiéndolo en uno de los lenguajes más ampliamente desplegados en TI sanitaria a pesar de su oscuridad fuera del dominio.',
    },
    it: {
      name: 'MUMPS',
      description:
        "Un linguaggio di programmazione generico con database gerarchico integrato, ampiamente usato nell'informatica sanitaria.",
      longDescription:
        "MUMPS (Massachusetts General Hospital Utility Multi-Programming System), noto come M o Cache ObjectScript nell'implementazione InterSystems, e un linguaggio con un database gerarchico chiave-valore integrato direttamente nel runtime.\n\nAlimenta i principali sistemi informativi sanitari, tra cui Epic e molte piattaforme di cartella clinica elettronica (EHR), rendendolo uno dei linguaggi piu ampiamente distribuiti nell'informatica sanitaria nonostante la sua oscurita al di fuori del dominio.",
    },
    fr: {
      name: 'MUMPS',
      description:
        'Un langage de programmation à usage général avec base de données hiérarchique intégrée, largement utilisé en informatique de santé.',
      longDescription:
        "MUMPS (Massachusetts General Hospital Utility Multi-Programming System), également connu sous le nom de M ou Cache ObjectScript dans son implémentation InterSystems, est un langage avec une base de données hiérarchique clé-valeur intégrée directement dans le runtime.\n\nIl alimente les principaux systèmes d'information de santé, notamment Epic et de nombreuses plateformes de dossier médical électronique (DME), ce qui en fait l'un des langages les plus déployés en informatique de santé malgré son obscurité en dehors du domaine.",
    },
    de: {
      name: 'MUMPS',
      description:
        'Eine Allzweck-Programmiersprache mit eingebetteter hierarchischer Datenbank, weit verbreitet in der Healthcare-IT.',
      longDescription:
        'MUMPS (Massachusetts General Hospital Utility Multi-Programming System), auch bekannt als M oder Cache ObjectScript in der InterSystems-Implementierung, ist eine Sprache mit einer hierarchischen Schlüssel-Wert-Datenbank, die direkt in die Laufzeitumgebung integriert ist.\n\nEs treibt große Gesundheitsinformationssysteme an, darunter Epic und viele Plattformen für elektronische Gesundheitsakten (EHR), was es trotz seiner Obscurität außerhalb des Bereichs zu einer der am häufigsten eingesetzten Sprachen in der Healthcare-IT macht.',
    },
    pt: {
      name: 'MUMPS',
      description:
        'Uma linguagem de programação de propósito geral com banco de dados hierárquico integrado, amplamente usada em TI de saúde.',
      longDescription:
        'MUMPS (Massachusetts General Hospital Utility Multi-Programming System), também conhecido como M ou Cache ObjectScript em sua implementação InterSystems, é uma linguagem com um banco de dados hierárquico de chave-valor integrado diretamente no runtime.\n\nImpulsiona os principais sistemas de informação em saúde, incluindo o Epic e muitas plataformas de prontuário eletrônico (EHR), tornando-o um dos linguagens mais amplamente implantados em TI de saúde, apesar de sua obscuridade fora do domínio.',
    },
  },
} satisfies Language;
