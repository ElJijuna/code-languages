import type { Language } from "../types";

export const mdx = {
  slug: "mdx",
  publishedDate: "2018-03-23",
  extensions: [".mdx"],
  author: "MDX contributors",
  website: "https://mdxjs.com",
  paradigms: ["markup", "component-oriented", "declarative", "documentation"],
  tooling: {
    runtimes: ["React", "Node.js"],
    packageManagers: ["npm", "Yarn", "pnpm"],
    ecosystems: ["Documentation", "React", "Static Sites", "Content"],
  },
  version: "3.1.1",
  logo: "https://cdn.simpleicons.org/mdx/1B1F24",
  color: "#1B1F24",
  i18n: {
    en: {
      name: "MDX",
      description: "A Markdown-based format that embeds JSX components in content documents.",
      longDescription:
        "MDX combines Markdown prose with JSX expressions and components, allowing documents to include interactive examples, imports, exports, and component-driven layouts. It is commonly compiled into JavaScript for React-based rendering pipelines.\n\nIt is used in documentation sites, design systems, blogs, tutorials, component demos, content platforms, and static site generators that need prose and UI components in the same source file.",
    },
    es: {
      name: "MDX",
      description:
        "Un formato basado en Markdown que inserta componentes JSX en documentos de contenido.",
      longDescription:
        "MDX combina prosa Markdown con expresiones y componentes JSX, permitiendo que los documentos incluyan ejemplos interactivos, imports, exports y layouts basados en componentes. Normalmente se compila a JavaScript para pipelines de renderizado con React.\n\nSe usa en sitios de documentacion, sistemas de diseno, blogs, tutoriales, demos de componentes, plataformas de contenido y generadores de sitios estaticos que necesitan prosa y UI en el mismo archivo fuente.",
    },
  },
} satisfies Language;
