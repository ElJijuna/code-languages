import { describe, it } from "vitest";
import { mathematica } from "../../src/languages/mathematica";
import { expectValidLanguage } from "../language-contract";

describe("mathematica", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(mathematica, "mathematica");
  });
});
