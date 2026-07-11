import type { Language } from '@/types';

export const tcsh = {
  slug: 'tcsh',
  publishedDate: '1981-01-01',
  extensions: ['.tcsh', '.csh', '.tcshrc', '.cshrc'],
  author: 'Ken Greer, Paul Placeway, Christos Zoulas, and contributors',
  website: 'https://www.tcsh.org',
  paradigms: ['shell', 'scripting', 'imperative'],
  tooling: {
    runtimes: ['tcsh'],
    ecosystems: ['Unix', 'BSD'],
  },
  version: '6.24.16',
  logo: 'https://dummyimage.com/32x32/2563EB/ffffff.png&text=TC',
  color: '#2563EB',
  i18n: {
    en: {
      name: 'Tcsh',
      description:
        'A C shell-compatible Unix command interpreter with editing and programmable completion.',
      longDescription:
        'Tcsh extends the C shell with command-line editing, history, aliases, job control, and programmable completion. It remains largely compatible with csh scripts while providing a more interactive command environment.\n\nThe shell is available across Unix-like systems and has longstanding use in BSD environments, engineering workstations, and legacy automation. Scripts typically use csh-style control flow and variable syntax.',
    },
    es: {
      name: 'Tcsh',
      description: 'Interprete Unix compatible con C shell, con edicion y completado programable.',
      longDescription:
        'Tcsh amplia C shell con edicion de linea, historial, alias, control de trabajos y completado programable. Mantiene amplia compatibilidad con scripts csh y ofrece un entorno de comandos mas interactivo.\n\nEl shell esta disponible en sistemas tipo Unix y tiene una larga presencia en entornos BSD, estaciones de ingenieria y automatizacion heredada. Sus scripts usan control de flujo y variables al estilo csh.',
    },
    it: {
      name: 'Tcsh',
      description:
        'Interprete Unix compatibile con C shell, con modifica e completamento programmabile.',
      longDescription:
        'Tcsh estende C shell con modifica della riga di comando, cronologia, alias, controllo dei job e completamento programmabile. Mantiene ampia compatibilita con gli script csh offrendo un ambiente interattivo piu ricco.\n\nLa shell e disponibile sui sistemi Unix-like ed e usata da tempo in ambienti BSD, workstation tecniche e automazione legacy. Gli script adottano flusso di controllo e sintassi delle variabili in stile csh.',
    },
    fr: {
      name: 'Tcsh',
      description: 'Interpreteur Unix compatible C shell avec edition et completion programmable.',
      longDescription:
        'Tcsh etend C shell avec edition de ligne, historique, alias, controle des taches et completion programmable. Il conserve une large compatibilite avec les scripts csh tout en offrant un environnement interactif plus riche.\n\nLe shell est disponible sur les systemes de type Unix et reste utilise dans les environnements BSD, les stations techniques et l automatisation historique. Les scripts emploient le controle de flux et les variables de style csh.',
    },
    de: {
      name: 'Tcsh',
      description:
        'C-Shell-kompatibler Unix-Interpreter mit Bearbeitung und programmierbarer Erganzung.',
      longDescription:
        'Tcsh erweitert die C Shell um Kommandozeilenbearbeitung, Verlauf, Aliase, Job-Steuerung und programmierbare Vervollstandigung. Die Sprache bleibt weitgehend mit csh-Skripten kompatibel und bietet eine reichere interaktive Umgebung.\n\nDie Shell ist auf Unix-artigen Systemen verfugbar und wird seit langem in BSD-Umgebungen, technischen Workstations und alterer Automatisierung eingesetzt. Skripte verwenden Kontrollfluss und Variablensyntax im csh-Stil.',
    },
    pt: {
      name: 'Tcsh',
      description: 'Interpretador Unix compativel com C shell, com edicao e conclusao programavel.',
      longDescription:
        'Tcsh estende C shell com edicao de linha, historico, aliases, controle de tarefas e conclusao programavel. Mantem ampla compatibilidade com scripts csh e oferece um ambiente interativo mais rico.\n\nO shell esta disponivel em sistemas semelhantes ao Unix e tem uso historico em ambientes BSD, estacoes tecnicas e automacao legada. Scripts usam fluxo de controle e sintaxe de variaveis no estilo csh.',
    },
  },
} satisfies Language;
