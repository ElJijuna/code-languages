import { describe, it } from "vitest";
import { go } from "../../src/languages/go";
import { expectValidLanguage } from "../language-contract";

describe("go", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(go, "go");
  });
});
