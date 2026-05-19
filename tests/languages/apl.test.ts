import { describe, it } from "vitest";
import { apl } from "../../src/languages/apl";
import { expectValidLanguage } from "../language-contract";

describe("apl", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(apl, "apl");
  });
});
