import { writeFile } from 'node:fs/promises';

import { languages } from '../dist/index.js';

const dataFile = new URL('../docs/data/languages.json', import.meta.url);
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

await writeFile(dataFile, `${JSON.stringify(siteData, null, 2)}\n`);

console.log(
  `Generated website language data for ${siteData.total} languages and ${siteData.extensions} extensions.`,
);
