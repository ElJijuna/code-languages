import { describe, it } from "vitest";
import { vue } from "../../src/languages/vue";
import { expectValidLanguage } from "../language-contract";

describe("vue", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(vue, "vue");
  });
});
