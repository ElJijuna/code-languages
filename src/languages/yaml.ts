import type { Language } from "../types";

export const yaml = {
  slug: "yaml",
  publishedDate: "2001-05-11",
  extensions: [".yaml", ".yml"],
  author: "Clark Evans, Ingy dot Net, Oren Ben-Kiki",
  website: "https://yaml.org",
  paradigms: ["data serialization", "declarative"],
  version: "1.2.2",
  logo: "https://yaml.org/spec/1.2.2/ext/img/yaml-logo.svg",
  i18n: {
    en: {
      name: "YAML",
      description:
        "A human-readable data serialization language used for configuration and documents.",
      longDescription:
        "YAML represents structured data with indentation-based syntax, supporting mappings, sequences, scalars, anchors, aliases, and multiple documents in a stream.\n\nIt is widely used for configuration files, CI/CD workflows, infrastructure definitions, application settings, and data exchange where readability is important.",
    },
  },
} satisfies Language;
