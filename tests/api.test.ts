import { describe, expect, it } from "vitest";
import { api, languages } from "../src";
import { languageIndex } from "../src/language-registry";

describe("api.language", () => {
  it("returns a localized language from the synchronous catalog", () => {
    const language = api.language("astro").locale("es-PE").get();

    expect(language?.slug).toBe("astro");
    expect(language?.locale).toBe("es-PE");
    expect(language?.resolvedLocale).toBe("es");
  });

  it("dynamically loads and localizes a language", async () => {
    const language = await api.language("vue").locale("es").load();

    expect(language?.slug).toBe("vue");
    expect(language?.resolvedLocale).toBe("es");
  });

  it("normalizes lookup values to language slugs", async () => {
    expect(api.language("Visual Basic").get()?.slug).toBe("visual-basic");
    await expect(api.language(" Jupyter Notebook! ").load()).resolves.toMatchObject({
      slug: "jupyter-notebook",
    });
  });

  it("returns undefined for unknown language slugs", async () => {
    expect(api.language("unknown-language").get()).toBeUndefined();
    await expect(api.language("unknown-language").load()).resolves.toBeUndefined();
  });
});

describe("api.languages", () => {
  it("returns every localized language from the synchronous catalog", () => {
    const localizedLanguages = api.languages().locale("en-US").get();

    expect(localizedLanguages).toHaveLength(languages.length);
    expect(localizedLanguages.at(0)?.locale).toBe("en-US");
  });

  it("dynamically loads every localized language", async () => {
    const localizedLanguages = await api.languages().locale("es").load();

    expect(localizedLanguages).toHaveLength(languages.length);
    expect(localizedLanguages.every((language) => language.resolvedLocale === "es")).toBe(true);
  });
});

describe("api.detect", () => {
  it("detects and localizes the first matching language from the catalog", () => {
    const language = api.detect("src/App.vue").locale("es").get();

    expect(language?.slug).toBe("vue");
    expect(language?.resolvedLocale).toBe("es");
  });

  it("dynamically detects and loads the first matching language", async () => {
    const language = await api.detect("scripts/deploy.ps1").locale("en").load();

    expect(language?.slug).toBe("powershell");
  });

  it("returns undefined when no filename match exists", async () => {
    expect(api.detect("LICENSE").get()).toBeUndefined();
    await expect(api.detect("LICENSE").load()).resolves.toBeUndefined();
  });
});

describe("api.detectAll", () => {
  it("detects every matching language from the catalog", () => {
    const detectedLanguages = api.detectAll("include/config.h").get();

    expect(detectedLanguages.map((language) => language.slug)).toEqual(["c", "cpp"]);
  });

  it("dynamically detects and loads every matching language", async () => {
    const detectedLanguages = await api.detectAll("include/config.h").load();

    expect(detectedLanguages.map((language) => language.slug)).toEqual(["c", "cpp"]);
  });
});

describe("languageIndex", () => {
  it("stays aligned with the catalog slugs and extensions", () => {
    expect(languageIndex).toEqual(
      languages.map((language) => ({
        extensions: language.extensions,
        slug: language.slug,
      })),
    );
  });
});
