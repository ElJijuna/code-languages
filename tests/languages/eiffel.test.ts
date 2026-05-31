import { describe, it } from "vitest";
import { eiffel } from "../../src/languages/eiffel";
import { expectValidLanguage } from "../language-contract";

describe("eiffel", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(eiffel, "eiffel");
  });
});
