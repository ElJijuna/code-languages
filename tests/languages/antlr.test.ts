import { describe, it } from "vitest";
import { antlr } from "../../src/languages/antlr";
import { expectValidLanguage } from "../language-contract";

describe("antlr", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(antlr, "antlr");
  });
});
