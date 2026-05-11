import { describe, it } from "vitest";
import { astro } from "../../src/languages/astro";
import { expectValidLanguage } from "../language-contract";

describe("astro", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(astro, "astro");
  });
});
