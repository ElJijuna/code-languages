import { writeFile } from 'node:fs/promises';

import {
  api,
  getEcosystems,
  getPackageManagers,
  getParadigms,
  getRuntimes,
  languages,
} from '../dist/index.js';

const dataFile = new URL('../docs/data/languages.json', import.meta.url);
const toolingFile = new URL('../docs/data/tooling.json', import.meta.url);
const locales = ['en', 'es', 'it', 'fr', 'de', 'pt'];
const localizedFieldName = (locale, field) => {
  if (locale === 'en') {
    return field;
  }

  return `${locale}${field[0].toUpperCase()}${field.slice(1)}`;
};
const siteData = {
  generatedAt: new Date().toISOString(),
  total: languages.length,
  extensions: languages.reduce((total, language) => total + language.extensions.length, 0),
  locales,
  languages: languages
    .map((language) => {
      const localizedContent = Object.fromEntries(
        locales.flatMap((locale) => {
          const content = language.i18n[locale] ?? language.i18n.en;

          return [
            [localizedFieldName(locale, 'name'), content.name],
            [localizedFieldName(locale, 'description'), content.description],
            [localizedFieldName(locale, 'longDescription'), content.longDescription],
          ];
        }),
      );

      return {
        slug: language.slug,
        ...localizedContent,
        publishedDate: language.publishedDate,
        extensions: language.extensions,
        author: language.author,
        website: language.website,
        paradigms: language.paradigms,
        tooling: language.tooling ?? {},
        version: language.version,
        logo: language.logo,
        color: language.color,
      };
    })
    .sort((first, second) => first.name.localeCompare(second.name)),
};
const toolingData = {
  generatedAt: new Date().toISOString(),
  runtimes: getRuntimes().map((runtime) => ({
    ...runtime,
    languageCount: api.runtime(runtime.aliases[0]).langs().get().length,
  })),
  packageManagers: getPackageManagers().map((pm) => ({
    ...pm,
    languageCount: api.packageManager(pm.aliases[0]).langs().get().length,
  })),
  paradigms: getParadigms().map((paradigm) => ({
    ...paradigm,
    languageCount: api.paradigm(paradigm.aliases[0]).langs().get().length,
  })),
  ecosystems: getEcosystems().map((ecosystem) => ({
    ...ecosystem,
    languageCount: api.ecosystem(ecosystem.aliases[0]).langs().get().length,
  })),
};

await Promise.all([
  writeFile(dataFile, `${JSON.stringify(siteData, null, 2)}\n`),
  writeFile(toolingFile, `${JSON.stringify(toolingData, null, 2)}\n`),
]);

console.log(
  `Generated website language data for ${siteData.total} languages and ${siteData.extensions} extensions.`,
);
console.log(
  `Generated tooling data for ${toolingData.runtimes.length} runtimes, ${toolingData.packageManagers.length} package managers, ${toolingData.paradigms.length} paradigms, and ${toolingData.ecosystems.length} ecosystems.`,
);
