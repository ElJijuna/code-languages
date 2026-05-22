import { describe, it } from "vitest";
import { ziggy } from "../../src/languages/ziggy";
import { expectValidLanguage } from "../language-contract";

describe("ziggy", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(ziggy, "ziggy");
  });
});
