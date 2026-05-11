import type { Language } from "../types";

export const dockerfile = {
  slug: "dockerfile",
  publishedDate: "2013-03-20",
  extensions: ["Dockerfile", ".dockerfile"],
  author: "Docker, Inc.",
  website: "https://docs.docker.com/reference/dockerfile/",
  paradigms: ["declarative", "configuration", "containerization"],
  version: "1.10",
  logo: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
  i18n: {
    en: {
      name: "Dockerfile",
      description: "A build instruction format for creating Docker container images.",
      longDescription:
        "Dockerfile is a text-based instruction format used to define how Docker images are built, including base images, copied files, environment variables, commands, and runtime metadata.\n\nIt is commonly used for packaging applications, defining reproducible build environments, and deploying software across container platforms.",
    },
  },
} satisfies Language;
