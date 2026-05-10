import { describe, it } from "vitest";
import { c } from "../../src/languages/c";
import { expectValidLanguage } from "../language-contract";

describe("c", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(c, "c");
  });
});
