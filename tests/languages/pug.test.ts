import { describe, it } from "vitest";
import { pug } from "../../src/languages/pug";
import { expectValidLanguage } from "../language-contract";

describe("pug", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(pug, "pug");
  });
});
