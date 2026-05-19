import { describe, it } from "vitest";
import { erb } from "../../src/languages/erb";
import { expectValidLanguage } from "../language-contract";

describe("erb", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(erb, "erb");
  });
});
