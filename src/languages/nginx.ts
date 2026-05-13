import type { Language } from "../types";

export const nginx = {
  slug: "nginx",
  publishedDate: "2004-10-04",
  extensions: ["nginx.conf", ".nginx", ".conf"],
  author: "Igor Sysoev / NGINX",
  website: "https://nginx.org",
  paradigms: ["configuration", "declarative", "directive-based"],
  tooling: {
    runtimes: ["nginx", "NGINX Plus", "OpenResty"],
    ecosystems: ["Web Servers", "Reverse Proxies", "Load Balancing", "DevOps"],
  },
  version: "1.30.1",
  logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg",
  i18n: {
    en: {
      name: "nginx",
      description:
        "A directive-based configuration language for the nginx web server and reverse proxy.",
      longDescription:
        "nginx configuration files use a directive-based syntax to define HTTP servers, reverse proxies, upstreams, load balancing, TLS settings, caching, logging, access control, and stream or mail proxy behavior.\n\nThey are used in production web infrastructure, container images, edge services, API gateways, static file hosting, traffic routing, and DevOps workflows where nginx or compatible servers need repeatable configuration.",
    },
    es: {
      name: "nginx",
      description:
        "Un lenguaje de configuracion basado en directivas para el servidor web y proxy inverso nginx.",
      longDescription:
        "Los archivos de configuracion de nginx usan una sintaxis basada en directivas para definir servidores HTTP, proxies inversos, upstreams, balanceo de carga, ajustes TLS, cache, logging, control de acceso y comportamiento de proxy stream o mail.\n\nSe usan en infraestructura web de produccion, imagenes de contenedores, servicios edge, API gateways, hosting de archivos estaticos, ruteo de trafico y flujos DevOps donde nginx o servidores compatibles necesitan configuracion repetible.",
    },
  },
} satisfies Language;
