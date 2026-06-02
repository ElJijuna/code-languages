import { describe, it } from "vitest";
import { kcl } from "../../src/languages/kcl";
import { expectValidLanguage } from "../language-contract";

describe("kcl", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(kcl, "kcl");
  });
});
