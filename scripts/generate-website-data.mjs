import { writeFile } from "node:fs/promises";

import { languages } from "../dist/index.js";

const dataFile = new URL("../docs/data/languages.json", import.meta.url);

const siteData = {
  generatedAt: new Date().toISOString(),
  total: languages.length,
  extensions: languages.reduce((total, language) => total + language.extensions.length, 0),
  locales: ["en", "es"],
  languages: languages
    .map((language) => ({
      slug: language.slug,
      name: language.i18n.en.name,
      description: language.i18n.en.description,
      longDescription: language.i18n.en.longDescription,
      esName: language.i18n.es?.name ?? language.i18n.en.name,
      esDescription: language.i18n.es?.description ?? language.i18n.en.description,
      esLongDescription: language.i18n.es?.longDescription ?? language.i18n.en.longDescription,
      publishedDate: language.publishedDate,
      extensions: language.extensions,
      author: language.author,
      website: language.website,
      paradigms: language.paradigms,
      tooling: language.tooling ?? {},
      version: language.version,
      logo: language.logo,
    }))
    .sort((first, second) => first.name.localeCompare(second.name)),
};

await writeFile(dataFile, `${JSON.stringify(siteData, null, 2)}\n`);

console.log(
  `Generated website language data for ${siteData.total} languages and ${siteData.extensions} extensions.`,
);
