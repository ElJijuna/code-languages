import type { Language } from '../types';

export const freemarker = {
  slug: 'freemarker',
  publishedDate: '1999-01-01',
  extensions: ['.ftl', '.ftlh', '.ftlx'],
  author: 'Apache Software Foundation',
  website: 'https://freemarker.apache.org',
  paradigms: ['template', 'declarative'],
  tooling: {
    runtimes: ['JVM'],
    packageManagers: ['Maven', 'Gradle'],
    ecosystems: ['Java', 'Web', 'Apache'],
  },
  version: '2.3.34',
  logo: 'https://dummyimage.com/32x32/326CE5/ffffff.png&text=FM',
  color: '#326CE5',
  i18n: {
    en: {
      name: 'FreeMarker',
      description:
        'A JVM template language used to generate HTML, emails, configuration files, and other text output.',
      longDescription:
        'Apache FreeMarker is a template engine and template language for Java applications. It separates presentation text from application code and can generate HTML pages, emails, source files, configuration files, and other structured text.\n\nFreeMarker templates use expressions, directives, macros, includes, and data-model access rather than embedding Java code directly. It is common in server-side Java web applications and code generation workflows.',
    },
    es: {
      name: 'FreeMarker',
      description:
        'Lenguaje de plantillas para la JVM usado para generar HTML, correos, configuracion y otras salidas de texto.',
      longDescription:
        'Apache FreeMarker es un motor y lenguaje de plantillas para aplicaciones Java. Separa el texto de presentacion del codigo de aplicacion y puede generar paginas HTML, correos, codigo fuente, archivos de configuracion y otros textos estructurados.\n\nLas plantillas FreeMarker usan expresiones, directivas, macros, inclusiones y acceso a modelos de datos en lugar de embeber codigo Java directamente.',
    },
  },
} satisfies Language;
