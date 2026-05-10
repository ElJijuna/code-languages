import type { Language } from "../types";

export const python = {
  name: "Python",
  slug: "python",
  description: "A high-level, readable language used for applications, automation, data, and AI.",
  longDescription:
    "Python emphasizes readability, a compact syntax, and a broad standard library, making it popular for scripting, backend services, data analysis, education, and scientific computing.\n\nIts ecosystem includes major frameworks and packages for web development, automation, machine learning, numerical computing, testing, and command-line tooling.",
  publishedDate: "1991-02-20",
  extensions: [".py", ".pyw"],
  author: "Guido van Rossum",
  website: "https://www.python.org",
  paradigms: ["object-oriented", "functional", "imperative", "procedural"],
  version: "3.14.4",
  logo: "https://www.python.org/static/community_logos/python-logo-only.svg",
} satisfies Language;
