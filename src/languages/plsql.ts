import type { Language } from "../types";

export const plsql = {
  slug: "plsql",
  publishedDate: "1992-01-01",
  extensions: [".pls", ".pks", ".pkb", ".plsql"],
  author: "Oracle",
  website: "https://www.oracle.com/database/technologies/appdev/plsql.html",
  paradigms: ["procedural", "database", "declarative", "imperative"],
  tooling: {
    runtimes: ["Oracle Database"],
    ecosystems: ["Oracle", "SQL", "Enterprise Data"],
  },
  version: "Oracle Database 26ai",
  logo: "https://github.com/oracle.png",
  i18n: {
    en: {
      name: "Oracle PL/SQL",
      description: "Oracle's procedural extension to SQL for database programs and packages.",
      longDescription:
        "PL/SQL adds blocks, variables, exceptions, procedures, functions, packages, cursors, and triggers to Oracle SQL. It keeps database logic close to data and transactional behavior inside Oracle Database.\n\nIt is used for stored procedures, migration scripts, business rules, batch jobs, packages, and enterprise database applications built on Oracle.",
    },
    es: {
      name: "Oracle PL/SQL",
      description:
        "La extension procedural de SQL de Oracle para programas y paquetes de base de datos.",
      longDescription:
        "PL/SQL agrega bloques, variables, excepciones, procedimientos, funciones, paquetes, cursores y triggers a Oracle SQL. Mantiene logica de base de datos cerca de los datos y del comportamiento transaccional en Oracle Database.\n\nSe usa en stored procedures, scripts de migracion, reglas de negocio, trabajos batch, paquetes y aplicaciones empresariales construidas sobre Oracle.",
    },
  },
} satisfies Language;
