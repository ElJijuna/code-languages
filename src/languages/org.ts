import type { Language } from '../types';

export const org = {
  slug: 'org',
  publishedDate: '2003-01-01',
  extensions: ['.org'],
  author: 'Carsten Dominik and Org mode contributors',
  website: 'https://orgmode.org',
  paradigms: ['markup', 'outlining', 'literate programming'],
  tooling: {
    runtimes: ['GNU Emacs'],
    ecosystems: ['Documentation', 'Knowledge Management', 'Reproducible Research'],
  },
  version: '9.8',
  logo: 'https://orgmode.org/resources/img/org-mode-unicorn.svg',
  color: '#77AA99',
  i18n: {
    en: {
      name: 'Org-mode',
      description:
        'A plain-text markup format for outlines, notes, planning, and literate programming.',
      longDescription:
        'Org syntax structures plain-text documents with headings, lists, links, tables, properties, timestamps, tasks, and source blocks. Files remain readable without specialized software while GNU Emacs provides rich editing and agenda features.\n\nOrg-mode supports note-taking, project planning, publishing, spreadsheets, code execution, and reproducible research. Exporters convert documents to formats such as HTML, LaTeX, Markdown, and OpenDocument.',
    },
    es: {
      name: 'Org-mode',
      description:
        'Formato de texto plano para esquemas, notas, planificacion y programacion literaria.',
      longDescription:
        'La sintaxis Org estructura documentos de texto con encabezados, listas, enlaces, tablas, propiedades, fechas, tareas y bloques de codigo. Los archivos siguen siendo legibles sin software especial, mientras GNU Emacs aporta edicion y agendas avanzadas.\n\nOrg-mode permite tomar notas, planificar proyectos, publicar, usar hojas de calculo, ejecutar codigo y crear investigacion reproducible. Sus exportadores generan HTML, LaTeX, Markdown y OpenDocument.',
    },
    it: {
      name: 'Org-mode',
      description:
        'Formato di testo semplice per outline, note, pianificazione e programmazione letterata.',
      longDescription:
        'La sintassi Org struttura documenti di testo con titoli, liste, link, tabelle, proprieta, timestamp, attivita e blocchi di codice. I file restano leggibili senza software speciale, mentre GNU Emacs offre modifica e agenda avanzate.\n\nOrg-mode supporta note, pianificazione, pubblicazione, fogli di calcolo, esecuzione di codice e ricerca riproducibile. Gli esportatori convertono i documenti in HTML, LaTeX, Markdown e OpenDocument.',
    },
    fr: {
      name: 'Org-mode',
      description: 'Format texte pour plans, notes, planification et programmation litteraire.',
      longDescription:
        'La syntaxe Org structure les documents texte avec titres, listes, liens, tableaux, proprietes, horodatages, taches et blocs de code. Les fichiers restent lisibles sans logiciel specialise, tandis que GNU Emacs fournit edition et agendas avances.\n\nOrg-mode prend en charge notes, gestion de projets, publication, feuilles de calcul, execution de code et recherche reproductible. Ses exportateurs produisent HTML, LaTeX, Markdown et OpenDocument.',
    },
    de: {
      name: 'Org-mode',
      description:
        'Klartext-Markupformat fur Gliederungen, Notizen, Planung und literarisches Programmieren.',
      longDescription:
        'Org-Syntax strukturiert Klartextdokumente mit Uberschriften, Listen, Links, Tabellen, Eigenschaften, Zeitangaben, Aufgaben und Codeblocken. Dateien bleiben ohne Spezialsoftware lesbar, wahrend GNU Emacs umfangreiche Bearbeitungs- und Agenda-Funktionen bietet.\n\nOrg-mode unterstutzt Notizen, Projektplanung, Publikation, Tabellenkalkulation, Codeausfuhrung und reproduzierbare Forschung. Exporter erzeugen HTML, LaTeX, Markdown und OpenDocument.',
    },
    pt: {
      name: 'Org-mode',
      description:
        'Formato de texto simples para estruturas, notas, planejamento e programacao literaria.',
      longDescription:
        'A sintaxe Org estrutura documentos de texto com titulos, listas, links, tabelas, propriedades, datas, tarefas e blocos de codigo. Arquivos continuam legiveis sem software especial, enquanto GNU Emacs oferece edicao e agendas avancadas.\n\nOrg-mode suporta notas, planejamento de projetos, publicacao, planilhas, execucao de codigo e pesquisa reproduzivel. Exportadores convertem documentos para HTML, LaTeX, Markdown e OpenDocument.',
    },
  },
} satisfies Language;
