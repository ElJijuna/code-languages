import type { Language } from "../types";

export const sql = {
  slug: "sql",
  publishedDate: "1986-01-01",
  extensions: [".sql"],
  author: "Donald D. Chamberlin, Raymond F. Boyce / IBM",
  website: "https://www.iso.org/standard/76583.html",
  paradigms: ["declarative", "data query", "relational"],
  version: "SQL:2023",
  logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
  i18n: {
    en: {
      name: "SQL",
      description: "A standard language for querying, defining, and managing relational databases.",
      longDescription:
        "SQL is a domain-specific language for working with relational databases, including querying data, defining schemas, modifying records, and controlling access.\n\nIt is used across database systems such as PostgreSQL, MySQL, SQLite, SQL Server, Oracle Database, and many analytics platforms.",
    },
  },
} satisfies Language;
