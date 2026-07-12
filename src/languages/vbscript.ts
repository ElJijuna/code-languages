import type { Language } from '@/types';

export const vbscript = {
  slug: 'vbscript',
  status: 'legacy',
  publishedDate: '1996-08-01',
  extensions: ['.vbs', '.vbe'],
  author: 'Microsoft',
  website: 'https://learn.microsoft.com/en-us/previous-versions/t0aew7h6(v=vs.85)',
  paradigms: ['imperative', 'object-based', 'scripting'],
  relations: {
    dialectOf: ['visual-basic'],
  },
  tooling: {
    runtimes: ['Windows Script Host', 'Classic ASP', 'Internet Explorer'],
    ecosystems: ['Windows', 'Scripting'],
  },
  version: '5.8',
  logo: 'https://raw.githubusercontent.com/ElJijuna/code-languages/main/public/assets/placeholders/vbscript.svg',
  color: '#15DCDC',
  i18n: {
    en: {
      name: 'VBScript',
      description: 'A lightweight Visual Basic dialect for Windows automation and Classic ASP.',
      longDescription:
        'VBScript is a scripting language modeled on Visual Basic and executed by the Windows Script Host, Classic ASP, and legacy Internet Explorer. It was widely used for Windows administration, logon scripts, and early server-side web pages.\n\nMicrosoft has deprecated VBScript and is phasing it out of Windows in favor of PowerShell and JavaScript, but large volumes of .vbs automation still run in enterprise environments.',
    },
    es: {
      name: 'VBScript',
      description:
        'Un dialecto ligero de Visual Basic para automatización de Windows y ASP clásico.',
      longDescription:
        'VBScript es un lenguaje de scripting inspirado en Visual Basic y ejecutado por Windows Script Host, ASP clásico e Internet Explorer heredado. Se usó ampliamente para administración de Windows, scripts de inicio de sesión y las primeras páginas web del lado del servidor.\n\nMicrosoft ha marcado VBScript como obsoleto y lo está retirando de Windows en favor de PowerShell y JavaScript, pero grandes volúmenes de automatización .vbs siguen ejecutándose en entornos empresariales.',
    },
    it: {
      name: 'VBScript',
      description: 'Un dialetto leggero di Visual Basic per automazione Windows e ASP classico.',
      longDescription:
        "VBScript è un linguaggio di scripting modellato su Visual Basic ed eseguito da Windows Script Host, ASP classico e dal vecchio Internet Explorer. È stato ampiamente usato per l'amministrazione di Windows, gli script di accesso e le prime pagine web lato server.\n\nMicrosoft ha deprecato VBScript e lo sta rimuovendo da Windows in favore di PowerShell e JavaScript, ma grandi volumi di automazione .vbs sono ancora in esecuzione negli ambienti aziendali.",
    },
    fr: {
      name: 'VBScript',
      description:
        "Un dialecte léger de Visual Basic pour l'automatisation Windows et l'ASP classique.",
      longDescription:
        "VBScript est un langage de script inspiré de Visual Basic et exécuté par Windows Script Host, l'ASP classique et l'ancien Internet Explorer. Il a été largement utilisé pour l'administration Windows, les scripts d'ouverture de session et les premières pages web côté serveur.\n\nMicrosoft a déprécié VBScript et le retire progressivement de Windows au profit de PowerShell et de JavaScript, mais de grands volumes d'automatisation .vbs tournent encore dans les environnements d'entreprise.",
    },
    de: {
      name: 'VBScript',
      description: 'Ein leichter Visual-Basic-Dialekt für Windows-Automatisierung und Classic ASP.',
      longDescription:
        'VBScript ist eine an Visual Basic angelehnte Skriptsprache, die vom Windows Script Host, Classic ASP und dem alten Internet Explorer ausgeführt wird. Sie wurde breit für Windows-Administration, Anmeldeskripte und frühe serverseitige Webseiten eingesetzt.\n\nMicrosoft hat VBScript als veraltet markiert und entfernt es schrittweise aus Windows zugunsten von PowerShell und JavaScript, aber große Mengen an .vbs-Automatisierung laufen weiterhin in Unternehmensumgebungen.',
    },
    pt: {
      name: 'VBScript',
      description: 'Um dialeto leve de Visual Basic para automação do Windows e ASP clássico.',
      longDescription:
        'VBScript é uma linguagem de script baseada no Visual Basic e executada pelo Windows Script Host, pelo ASP clássico e pelo antigo Internet Explorer. Foi amplamente usada para administração do Windows, scripts de logon e as primeiras páginas web do lado do servidor.\n\nA Microsoft descontinuou o VBScript e o está removendo do Windows em favor do PowerShell e do JavaScript, mas grandes volumes de automação .vbs ainda rodam em ambientes corporativos.',
    },
  },
} satisfies Language;
