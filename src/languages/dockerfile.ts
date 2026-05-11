import type { Language } from "../types";

export const dockerfile = {
  slug: "dockerfile",
  publishedDate: "2013-03-20",
  extensions: ["Dockerfile", ".dockerfile"],
  author: "Docker, Inc.",
  website: "https://docs.docker.com/reference/dockerfile/",
  paradigms: ["declarative", "configuration", "containerization"],
  tooling: {
    runtimes: ["Docker", "BuildKit", "Podman"],
    ecosystems: ["Containers", "DevOps", "Cloud"],
  },
  version: "1.10",
  logo: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
  i18n: {
    en: {
      name: "Dockerfile",
      description: "A build instruction format for creating Docker container images.",
      longDescription:
        "Dockerfile is a text-based instruction format used to define how Docker images are built, including base images, copied files, environment variables, commands, and runtime metadata.\n\nIt is commonly used for packaging applications, defining reproducible build environments, and deploying software across container platforms.",
    },
    es: {
      name: "Dockerfile",
      description:
        "Un formato de instrucciones de build para crear imagenes de contenedores Docker.",
      longDescription:
        "Dockerfile es un formato de instrucciones basado en texto que define como se construyen imagenes Docker, incluyendo imagenes base, archivos copiados, variables de entorno, comandos y metadata de ejecucion.\n\nSe usa comunmente para empaquetar aplicaciones, definir entornos de build reproducibles y desplegar software en plataformas de contenedores.",
    },
  },
} satisfies Language;
