import type { Language } from '../types';

export const erb = {
  slug: 'erb',
  publishedDate: '2000-01-01',
  extensions: ['.erb', '.rhtml', '.html.erb'],
  author: 'Masatoshi Seki / Ruby',
  website: 'https://ruby-doc.org/stdlib/erb/',
  paradigms: ['templating', 'embedded', 'markup'],
  tooling: {
    runtimes: ['Ruby', 'Ruby on Rails'],
    packageManagers: ['RubyGems', 'Bundler'],
    ecosystems: ['Web', 'Ruby', 'Static Sites'],
  },
  version: 'Ruby stdlib',
  logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ruby_logo.svg',
  color: '#CC342D',
  i18n: {
    en: {
      name: 'ERB',
      description: 'A Ruby templating system for embedding Ruby code inside text documents.',
      longDescription:
        'ERB templates combine plain text, HTML, XML, or configuration output with embedded Ruby expressions and control flow markers.\n\nThey are commonly used in Ruby on Rails views, static site generators, configuration generation, email templates, and any Ruby workflow that needs programmable text rendering.',
    },
    es: {
      name: 'ERB',
      description:
        'Un sistema de plantillas de Ruby para incrustar codigo Ruby dentro de documentos de texto.',
      longDescription:
        'Las plantillas ERB combinan texto plano, HTML, XML o salidas de configuracion con expresiones Ruby incrustadas y marcadores de control de flujo.\n\nSe usan comunmente en vistas de Ruby on Rails, generadores de sitios estaticos, generacion de configuracion, plantillas de correo y cualquier flujo Ruby que necesite renderizado programable de texto.',
    },
    it: {
      name: 'ERB',
      description:
        "Un sistema di templating Ruby per l'incorporazione di codice Ruby all'interno di documenti di testo.",
      longDescription:
        'I template ERB combinano testo semplice, HTML, XML o output di configurazione con espressioni Ruby incorporate e marcatori di controllo del flusso.\n\nSono comunemente utilizzati nelle viste di Ruby on Rails, nei generatori di siti statici, nella generazione di configurazione, nei modelli di email e in qualsiasi flusso di lavoro Ruby che necessita di rendering di testo programmabile.',
    },
    fr: {
      name: 'ERB',
      description:
        'Un systeme de modelisation Ruby pour integrer du code Ruby dans des documents de texte.',
      longDescription:
        "Les modeles ERB combinent du texte brut, du HTML, du XML ou des sorties de configuration avec des expressions Ruby et des marqueurs de controle integres.\n\nIls sont couramment utilises dans les vues Ruby on Rails, les generateurs de sites statiques, la generation de configuration, les modeles d'e-mails et tout flux de travail Ruby qui necessite le rendu de texte programmable.",
    },
    de: {
      name: 'ERB',
      description: 'Ein Ruby-Templating-System zum Einf\u00fcgen von Ruby-Code in Textdokumente.',
      longDescription:
        'ERB-Vorlagen kombinieren reinen Text, HTML, XML oder Konfigurationsausgabe mit eingebetteten Ruby-Ausdr\u00fccken und Steuerungssymbolen.\n\nSie werden h\u00e4ufig in Ruby on Rails-Views, statischen Seitengeneratoren, Konfigurationsgenerierung, E-Mail-Vorlagen und jeder anderen Ruby-Workflow verwendet, die programmatische Textrendierung ben\u00f6tigt.',
    },
    pt: {
      name: 'ERB',
      description:
        'Sistema de modelagem Ruby para incorporar c\u00f3digo Ruby em documentos de texto.',
      longDescription:
        'Modelos ERB combinam texto simples, HTML, XML ou sa\u00edda de configura\u00e7\u00e3o com express\u00f5es Ruby e marcadores de controle.\n\nS\u00e3o comumente usados em visualiza\u00e7\u00f5es do Ruby on Rails, geradores de sites est\u00e1ticos, gera\u00e7\u00e3o de configura\u00e7\u00e3o, modelos de e-mail e qualquer fluxo de trabalho Ruby que precise de renderiza\u00e7\u00e3o de texto program\u00e1vel.',
    },
  },
} satisfies Language;
