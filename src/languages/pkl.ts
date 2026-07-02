import type { Language } from '../types';

export const pkl = {
  slug: 'pkl',
  publishedDate: '2024-02-01',
  extensions: ['.pkl'],
  author: 'Apple',
  website: 'https://pkl-lang.org',
  paradigms: ['declarative', 'functional'],
  tooling: {
    runtimes: ['pkl CLI', 'GraalVM native image'],
    packageManagers: ['pkl package'],
    ecosystems: ['Configuration', 'Infrastructure', 'Cloud', 'Kubernetes'],
  },
  version: '0.31.1',
  logo: 'https://avatars.githubusercontent.com/u/10639145?v=4',
  color: '#72AE44',
  i18n: {
    en: {
      name: 'Pkl',
      description:
        "Apple's programmable configuration language that brings type safety, validation, and code generation to structured configuration files.",
      longDescription:
        "Pkl (pronounced 'Pickle') is a configuration language created by Apple and open-sourced in 2024. It is designed to replace ad-hoc YAML, JSON, and TOML configurations with a language that provides type safety, validation, reuse through inheritance, and multi-format output.\n\nPkl files can be evaluated to generate JSON, YAML, TOML, or Java properties output. It features a class-based module system, expressive templates, first-class functions, and built-in support for rendering configuration for Kubernetes, Terraform, and other cloud infrastructure tools. The CLI tool and native libraries are available for multiple languages.",
    },
    es: {
      name: 'Pkl',
      description:
        'El lenguaje de configuración programable de Apple que aporta seguridad de tipos, validación y generación de código a los archivos de configuración.',
      longDescription:
        "Pkl (pronunciado 'Pickle') es un lenguaje de configuración creado por Apple y publicado como código abierto en 2024. Está diseñado para reemplazar configuraciones ad-hoc de YAML, JSON y TOML con un lenguaje que ofrece seguridad de tipos, validación, reutilización por herencia y salida en múltiples formatos.\n\nLos archivos Pkl pueden evaluarse para generar JSON, YAML, TOML o propiedades Java. Incluye un sistema de módulos basado en clases, plantillas expresivas y soporte para Kubernetes, Terraform y otras herramientas de infraestructura.",
    },
    it: {
      name: 'Pkl',
      description:
        'Il linguaggio di configurazione programmabile di Apple che porta type safety, validazione e generazione di codice ai file di configurazione strutturati.',
      longDescription:
        "Pkl (pronunciato 'Pickle') è un linguaggio di configurazione creato da Apple e reso open source nel 2024. È progettato per sostituire le configurazioni ad-hoc di YAML, JSON e TOML con un linguaggio che offre type safety, validazione, riutilizzo tramite ereditarietà e output in più formati.\n\nI file Pkl possono essere valutati per generare JSON, YAML, TOML o proprietà Java. Include un sistema di moduli basato su classi, template espressivi e supporto per Kubernetes, Terraform e altri strumenti di infrastruttura cloud.",
    },
    fr: {
      name: 'Pkl',
      description:
        "Le langage de configuration programmable d'Apple qui apporte la sûreté de type, la validation et la génération de code aux fichiers de configuration structurés.",
      longDescription:
        "Pkl (prononcé 'Pickle') est un langage de configuration créé par Apple et publié en open source en 2024. Il est conçu pour remplacer les configurations YAML, JSON et TOML ad-hoc par un langage offrant la sûreté de type, la validation, la réutilisation par héritage et la sortie en plusieurs formats.\n\nLes fichiers Pkl peuvent être évalués pour générer du JSON, YAML, TOML ou des propriétés Java. Il comprend un système de modules basé sur des classes, des templates expressifs et un support pour Kubernetes, Terraform et d'autres outils d'infrastructure cloud.",
    },
    de: {
      name: 'Pkl',
      description:
        'Apples programmierbare Konfigurationssprache, die Typsicherheit, Validierung und Code-Generierung in strukturierte Konfigurationsdateien bringt.',
      longDescription:
        "Pkl (ausgesprochen 'Pickle') ist eine von Apple entwickelte Konfigurationssprache, die 2024 als Open Source veröffentlicht wurde. Sie soll ad-hoc YAML-, JSON- und TOML-Konfigurationen durch eine Sprache ersetzen, die Typsicherheit, Validierung, Wiederverwendung durch Vererbung und Ausgabe in mehreren Formaten bietet.\n\nPkl-Dateien können ausgewertet werden, um JSON, YAML, TOML oder Java-Properties zu generieren. Es umfasst ein klassenbasiertes Modulsystem, ausdrucksstarke Templates und Unterstützung für Kubernetes, Terraform und andere Cloud-Infrastruktur-Tools.",
    },
    pt: {
      name: 'Pkl',
      description:
        'A linguagem de configuração programável da Apple que traz segurança de tipos, validação e geração de código para arquivos de configuração estruturados.',
      longDescription:
        "Pkl (pronunciado 'Pickle') é uma linguagem de configuração criada pela Apple e publicada como código aberto em 2024. Foi projetada para substituir configurações ad-hoc de YAML, JSON e TOML por uma linguagem que oferece segurança de tipos, validação, reutilização por herança e saída em múltiplos formatos.\n\nArquivos Pkl podem ser avaliados para gerar JSON, YAML, TOML ou propriedades Java. Inclui um sistema de módulos baseado em classes, templates expressivos e suporte para Kubernetes, Terraform e outras ferramentas de infraestrutura cloud.",
    },
  },
} satisfies Language;
