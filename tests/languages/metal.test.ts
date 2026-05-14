import { describe, it } from "vitest";
import { metal } from "../../src/languages/metal";
import { expectValidLanguage } from "../language-contract";

describe("metal", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(metal, "metal");
  });
});
