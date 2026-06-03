import type { Language } from '../types';

export const jsonc = {
  slug: 'jsonc',
  publishedDate: '2015-04-29',
  extensions: ['.jsonc', '.code-workspace'],
  author: 'Microsoft',
  website: 'https://jsonc.org',
  paradigms: ['data serialization', 'configuration'],
  tooling: {
    runtimes: ['Editors', 'Build tools'],
    ecosystems: ['JavaScript', 'TypeScript', 'Configuration'],
  },
  version: 'JSON with Comments',
  logo: 'https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_json.svg',
  color: '#F5DE19',
  i18n: {
    en: {
      name: 'JSONC',
      description:
        'A JSON-compatible configuration format that permits JavaScript-style comments and optional editor-friendly extensions.',
      longDescription:
        'JSONC, or JSON with Comments, is a JSON-derived configuration format that allows comments while preserving the familiar JSON data model. It is widely recognized because Visual Studio Code uses it for settings, launch configurations, and workspace files.\n\nThe format is intended for human-maintained configuration rather than data interchange between services. Tooling usually parses JSONC into ordinary JSON-like values after stripping comments and handling the accepted extensions.',
    },
    es: {
      name: 'JSONC',
      description:
        'Formato de configuracion compatible con JSON que permite comentarios estilo JavaScript y extensiones amigables para editores.',
      longDescription:
        'JSONC, o JSON con comentarios, es un formato de configuracion derivado de JSON que permite comentarios sin abandonar el modelo de datos familiar. Es muy conocido porque Visual Studio Code lo usa en ajustes, configuraciones de ejecucion y archivos de workspace.\n\nEsta pensado para configuracion mantenida por humanos, no para intercambio de datos entre servicios. Las herramientas suelen convertir JSONC a valores similares a JSON tras quitar comentarios.',
    },
  },
} satisfies Language;
