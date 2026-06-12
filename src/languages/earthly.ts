import type { Language } from '../types';

export const earthly = {
  slug: 'earthly',
  publishedDate: '2020-04-15',
  extensions: ['Earthfile'],
  author: 'Earthly Technologies',
  website: 'https://earthly.dev',
  paradigms: ['declarative', 'build automation', 'container-based'],
  tooling: {
    runtimes: ['Earthly', 'BuildKit', 'Docker'],
    packageManagers: ['Docker'],
    ecosystems: ['CI/CD', 'Containers', 'DevOps'],
  },
  version: '0.8.16',
  logo: 'https://avatars.githubusercontent.com/u/63060917?v=4',
  color: '#2D7D46',
  i18n: {
    en: {
      name: 'Earthly',
      description: 'A container-oriented build language for repeatable CI/CD pipelines.',
      longDescription:
        'Earthly is a build automation language and tool centered on Earthfiles. Its syntax combines ideas from Dockerfiles and Makefiles to define repeatable builds, targets, artifacts, images, and CI-friendly workflows.\n\nIt is used by teams that want local and CI builds to behave consistently, especially in container-heavy projects where caching, reproducibility, and readable build steps matter.',
    },
    es: {
      name: 'Earthly',
      description:
        'Un lenguaje de builds orientado a contenedores para pipelines CI/CD repetibles.',
      longDescription:
        'Earthly es un lenguaje y herramienta de automatizacion de builds centrado en Earthfiles. Su sintaxis combina ideas de Dockerfiles y Makefiles para definir builds repetibles, targets, artefactos, imagenes y flujos adecuados para CI.\n\nLo usan equipos que quieren que los builds locales y de CI se comporten de forma consistente, especialmente en proyectos con muchos contenedores donde importan cache, reproducibilidad y pasos de build legibles.',
    },
    it: {
      name: 'Earthly',
      description: 'Un linguaggio di build orientato ai container per pipeline CI/CD ripetibili.',
      longDescription:
        'Earthly e un linguaggio e uno strumento di automazione della build incentrato su Earthfiles. La sua sintassi combina idee da Dockerfiles e Makefiles per definire build, target, artefatti, immagini e workflow adatti a CI.\n\nE utilizzato da team che desiderano che build locali e CI si comportino in modo coerente, in particolare in progetti con elevato utilizzo di container, dove la memorizzazione nella cache, la riproducibilita e passaggi di build leggibili sono importanti.',
    },
    fr: {
      name: 'Earthly',
      description:
        'Un langage de construction oriente conteneurs pour des pipelines CI/CD reproductibles.',
      longDescription:
        "Earthly est un langage et un outil d'automatisation de la construction axe sur les Earthfiles. Sa syntaxe combine des idees provenant des Dockerfiles et des Makefiles pour definir des constructions reproductibles, des cibles, des artefacts, des images et des workflows adaptes a la CI.\n\nIl est utilise par des equipes qui souhaitent que les constructions locales et CI se comportent de maniere coherente, en particulier dans les projets riches en conteneurs ou le cache, la reproductibilite et des etapes de construction lisibles sont importants.",
    },
    de: {
      name: 'Earthly',
      description: 'Eine containerbasierte Build-Sprache für wiederholbare CI/CD-Pipelines.',
      longDescription:
        'Earthly ist eine Build-Automatisierungssprache und -tool, das auf Earthfiles basiert. Ihre Syntax kombiniert Ideen aus Dockerfiles und Makefiles, um wiederholbare Builds, Ziele, Artefakte, Images und CI-freundliche Workflows zu definieren.\n\nEs wird von Teams verwendet, die lokale und CI-Builds konsistent gestalten möchten, insbesondere in containerlastigen Projekten, in denen Caching, Reproduzierbarkeit und lesbare Build-Schritte wichtig sind.',
    },
    pt: {
      name: 'Earthly',
      description:
        'Linguagem de construção orientada a contêineres para pipelines de CI/CD repetíveis.',
      longDescription:
        'Earthly é uma linguagem e ferramenta de automação de construção centrada em Earthfiles. Sua sintaxe combina ideias de Dockerfiles e Makefiles para definir construções, alvos, artefatos, imagens e fluxos de trabalho amigáveis ao CI.\n\nÉ usada por equipes que desejam que as construções locais e do CI se comportem de forma consistente, especialmente em projetos com muitos contêineres, onde o cache, a reprodutibilidade e etapas de construção legíveis são importantes.',
    },
  },
} satisfies Language;
