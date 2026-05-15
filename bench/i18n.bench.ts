import { bench, describe } from "vitest";
import { languages, localizeLanguage, typescript } from "../src";

describe("i18n", () => {
  bench("localizeLanguage base locale", () => {
    localizeLanguage(typescript, "es");
  });

  bench("localizeLanguage regional locale fallback", () => {
    localizeLanguage(typescript, "es-PE");
  });

  bench("localize every language to Spanish", () => {
    for (const language of languages) {
      localizeLanguage(language, "es-PE");
    }
  });
});
