import type { Language } from "../types";

export const php = {
  slug: "php",
  publishedDate: "1995-06-08",
  extensions: [".php", ".phtml", ".php3", ".php4", ".php5", ".phps"],
  author: "Rasmus Lerdorf / The PHP Group",
  website: "https://www.php.net",
  paradigms: ["imperative", "object-oriented", "functional", "scripting"],
  tooling: {
    runtimes: ["PHP CLI", "PHP-FPM", "Apache mod_php"],
    packageManagers: ["Composer"],
    ecosystems: ["Web", "WordPress", "Laravel", "Symfony"],
  },
  version: "8.5.6",
  logo: "https://www.php.net/images/logos/new-php-logo.svg",
  color: "#777BB4",
  i18n: {
    en: {
      name: "PHP",
      description:
        "A server-side scripting language widely used for web applications and dynamic websites.",
      longDescription:
        "PHP is a general-purpose scripting language especially suited to server-side web development, with built-in support for request handling, templating, databases, extensions, package management, and deployment on common hosting platforms.\n\nIt powers content management systems, ecommerce platforms, APIs, frameworks, command-line tools, and long-running web applications across a large ecosystem.",
    },
    es: {
      name: "PHP",
      description:
        "Un lenguaje de scripting del lado del servidor muy usado en aplicaciones web y sitios dinamicos.",
      longDescription:
        "PHP es un lenguaje de scripting de proposito general especialmente adecuado para desarrollo web del lado del servidor, con soporte integrado para manejar solicitudes, plantillas, bases de datos, extensiones, gestion de paquetes y despliegue en plataformas comunes de hosting.\n\nImpulsa sistemas de gestion de contenido, plataformas de ecommerce, APIs, frameworks, herramientas de linea de comandos y aplicaciones web de larga duracion dentro de un ecosistema amplio.",
    },
  },
} satisfies Language;
