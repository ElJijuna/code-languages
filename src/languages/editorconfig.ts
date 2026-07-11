import type { Language } from '@/types';

export const editorconfig = {
  slug: 'editorconfig',
  publishedDate: '2011-01-01',
  extensions: ['.editorconfig'],
  author: 'EditorConfig project',
  website: 'https://editorconfig.org',
  paradigms: ['configuration'],
  tooling: {
    ecosystems: ['Editors', 'Code formatting'],
  },
  version: 'stable',
  logo: 'https://editorconfig.org/logo.png',
  color: '#0F766E',
  i18n: {
    en: {
      name: 'EditorConfig',
      description:
        'A configuration format for sharing indentation, newline, and charset rules across editors.',
      longDescription:
        'EditorConfig files define coding style settings that editors and IDEs can apply consistently. Sections target filename globs and assign properties such as indentation style, indent size, end-of-line mode, charset, and trailing whitespace handling.\n\nThe format helps projects keep basic formatting stable across teams and tools. It is often committed at repository roots so contributors get consistent editor behavior without manual setup.',
    },
    es: {
      name: 'EditorConfig',
      description:
        'Formato de configuracion para compartir indentacion, saltos de linea y charset entre editores.',
      longDescription:
        'Los archivos EditorConfig definen ajustes de estilo que editores e IDEs pueden aplicar de forma consistente. Las secciones apuntan a globs de nombres de archivo y asignan propiedades como estilo de indentacion, tamano, modo de fin de linea, charset y manejo de espacios finales.\n\nEl formato ayuda a mantener estable el formato basico entre equipos y herramientas. Suele versionarse en la raiz del repositorio para que colaboradores obtengan comportamiento consistente sin configuracion manual.',
    },
    it: {
      name: 'EditorConfig',
      description:
        'Formato di configurazione per condividere indentazione, newline e charset tra editor.',
      longDescription:
        'I file EditorConfig definiscono impostazioni di stile che editor e IDE possono applicare in modo coerente. Le sezioni puntano a glob di nomi file e assegnano proprieta come stile e dimensione di indentazione, fine riga, charset e gestione degli spazi finali.\n\nIl formato aiuta i progetti a mantenere stabile la formattazione di base tra team e strumenti. Spesso viene committato alla radice del repository per dare ai contributori un comportamento editor coerente senza setup manuale.',
    },
    fr: {
      name: 'EditorConfig',
      description:
        'Format de configuration pour partager indentation, fins de ligne et charset entre editeurs.',
      longDescription:
        'Les fichiers EditorConfig definissent des reglages de style que les editeurs et IDE peuvent appliquer de facon coherente. Les sections ciblent des globs de fichiers et assignent des proprietes comme style d indentation, taille, fin de ligne, charset et gestion des espaces finaux.\n\nLe format aide les projets a garder un formatage de base stable entre equipes et outils. Il est souvent versionne a la racine du depot pour offrir un comportement editeur coherent sans configuration manuelle.',
    },
    de: {
      name: 'EditorConfig',
      description:
        'Konfigurationsformat fur Einruckung, Zeilenenden und Zeichensatze uber Editoren hinweg.',
      longDescription:
        'EditorConfig-Dateien definieren Stilvorgaben, die Editoren und IDEs konsistent anwenden konnen. Abschnitte zielen auf Dateinamen-Globs und setzen Eigenschaften wie Einruckungsstil, Einruckungsbreite, Zeilenende, Zeichensatz und Behandlung nachgestellter Leerzeichen.\n\nDas Format hilft Projekten, grundlegende Formatierung uber Teams und Werkzeuge stabil zu halten. Es liegt oft im Repository-Wurzelverzeichnis, damit Beitragende ohne manuelles Setup konsistentes Editorverhalten erhalten.',
    },
    pt: {
      name: 'EditorConfig',
      description:
        'Formato de configuracao para compartilhar indentacao, quebras de linha e charset entre editores.',
      longDescription:
        'Arquivos EditorConfig definem ajustes de estilo que editores e IDEs podem aplicar de forma consistente. Secoes miram globs de nomes de arquivo e atribuem propriedades como estilo de indentacao, tamanho, modo de fim de linha, charset e tratamento de espacos finais.\n\nO formato ajuda projetos a manter a formatacao basica estavel entre equipes e ferramentas. Ele costuma ser versionado na raiz do repositorio para que colaboradores tenham comportamento consistente no editor sem setup manual.',
    },
  },
} satisfies Language;
