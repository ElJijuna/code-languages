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
  color: "#2496ED",
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
    it: {
      name: "Dockerfile",
      description: "Un formato di istruzione per la creazione di immagini Docker container.",
      longDescription:
        "Dockerfile e un formato di istruzione basato su testo utilizzato per definire come vengono create le immagini Docker, inclusi le immagini di base, i file copiati, le variabili d'ambiente, i comandi e i metadati di runtime.\n\nE comunemente utilizzato per il confezionamento di applicazioni, la definizione di ambienti di build riproducibili e il deployment di software su piattaforme di container.",
    },
    fr: {
      name: "Dockerfile",
      description: "Un format d'instruction pour la creation d'images Docker conteneurs.",
      longDescription:
        "Dockerfile est un format d'instruction base sur du texte utilise pour definir comment les images Docker sont creees, y compris les images de base, les fichiers copies, les variables d'environnement, les commandes et les metadonnees d'execution.\n\nIl est couramment utilise pour empaqueter des applications, definir des environnements de construction reproductibles et deployer des logiciels sur des plateformes de conteneurs.",
    },
  },
} satisfies Language;
