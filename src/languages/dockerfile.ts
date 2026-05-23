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
    de: {
      name: "Dockerfile",
      description:
        "Ein Format f\u00fcr Build-Anweisungen zum Erstellen von Docker-Container-Images.",
      longDescription:
        "Dockerfile ist ein textbasiertes Format, das verwendet wird, um zu definieren, wie Docker-Images erstellt werden, einschlie\u00dflich Basis-Images, kopierten Dateien, Umgebungsvariablen, Befehlen und Laufzeit-Metadaten.\n\nEs wird h\u00e4ufig f\u00fcr die Verpackung von Anwendungen, die Definition reproduzierbarer Build-Umgebungen und den Einsatz von Software auf Container-Plattformen verwendet.",
    },
    pt: {
      name: "Dockerfile",
      description: "Formato de instru\u00e7\u00e3o para construir imagens Docker.",
      longDescription:
        "Dockerfile \u00e9 um formato de instru\u00e7\u00e3o baseado em texto usado para definir como as imagens Docker s\u00e3o constru\u00eddas, incluindo imagens base, arquivos copiados, vari\u00e1veis de ambiente, comandos e metadados de tempo de execu\u00e7\u00e3o.\n\n\u00c9 comumente usado para empacotar aplicativos, definir ambientes de constru\u00e7\u00e3o reproduz\u00edveis e implantar software em plataformas de cont\u00eainer.",
    },
  },
} satisfies Language;
