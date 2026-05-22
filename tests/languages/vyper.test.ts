import { describe, it } from "vitest";
import { vyper } from "../../src/languages/vyper";
import { expectValidLanguage } from "../language-contract";

describe("vyper", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(vyper, "vyper");
  });
});
