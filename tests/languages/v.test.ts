import { describe, it } from "vitest";
import { v } from "../../src/languages/v";
import { expectValidLanguage } from "../language-contract";

describe("v", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(v, "v");
  });
});
