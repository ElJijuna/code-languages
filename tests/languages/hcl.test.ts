import { describe, it } from "vitest";
import { hcl } from "../../src/languages/hcl";
import { expectValidLanguage } from "../language-contract";

describe("hcl", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(hcl, "hcl");
  });
});
