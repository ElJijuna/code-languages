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
  color: "#009639",
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
    it: {
      name: "nginx",
      description:
        "Un linguaggio di configurazione basato su direttive per il server web e il reverse proxy nginx.",
      longDescription:
        "I file di configurazione di nginx utilizzano una sintassi basata su direttive per definire server HTTP, reverse proxy, upstream, bilanciamento del carico, impostazioni TLS, caching, logging, controllo degli accessi e il comportamento di proxy per stream o email.\n\nVengono utilizzati nell'infrastruttura web di produzione, immagini di container, servizi edge, gateway API, hosting di file statici, routing del traffico e flussi di lavoro DevOps in cui e necessario una configurazione ripetibile per nginx o server compatibili.",
    },
    fr: {
      name: "nginx",
      description:
        "Un langage de configuration base sur des directives pour le serveur web et le proxy inverse nginx.",
      longDescription:
        "Les fichiers de configuration nginx utilisent une syntaxe basee sur des directives pour definir des serveurs HTTP, des proxys inverses, des upstream, le routage de charge, les parametres TLS, le cache, la journalisation, le controle d'acces et le comportement de proxy de flux ou de courrier.\n\nIls sont utilises dans l'infrastructure web de production, les images de conteneurs, les services de peripherie, les passerelles API, l'hebergement de fichiers statiques, le routage du trafic et les flux de travail DevOps ou nginx ou des serveurs compatibles necessitent une configuration reproductible.",
    },
  },
} satisfies Language;
