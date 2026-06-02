import { describe, it } from "vitest";
import { grain } from "../../src/languages/grain";
import { expectValidLanguage } from "../language-contract";

describe("grain", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(grain, "grain");
  });
});
