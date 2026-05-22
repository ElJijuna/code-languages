import { describe, it } from "vitest";
import { standardMl } from "../../src/languages/standard-ml";
import { expectValidLanguage } from "../language-contract";

describe("standard-ml", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(standardMl, "standard-ml");
  });
});
