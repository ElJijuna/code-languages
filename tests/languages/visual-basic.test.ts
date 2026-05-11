import { describe, it } from "vitest";
import { visualBasic } from "../../src/languages/visual-basic";
import { expectValidLanguage } from "../language-contract";

describe("visual-basic", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(visualBasic, "visual-basic");
  });
});
