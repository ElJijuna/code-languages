import { describe, it } from "vitest";
import { gdscript } from "../../src/languages/gdscript";
import { expectValidLanguage } from "../language-contract";

describe("gdscript", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(gdscript, "gdscript");
  });
});
