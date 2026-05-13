import { describe, it } from "vitest";
import { r } from "../../src/languages/r";
import { expectValidLanguage } from "../language-contract";

describe("r", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(r, "r");
  });
});
