import { describe, it } from "vitest";
import { liquid } from "../../src/languages/liquid";
import { expectValidLanguage } from "../language-contract";

describe("liquid", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(liquid, "liquid");
  });
});
