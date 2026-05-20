import { describe, it } from "vitest";
import { dita } from "../../src/languages/dita";
import { expectValidLanguage } from "../language-contract";

describe("dita", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(dita, "dita");
  });
});
