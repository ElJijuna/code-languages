import { describe, it } from "vitest";
import { pony } from "../../src/languages/pony";
import { expectValidLanguage } from "../language-contract";

describe("pony", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(pony, "pony");
  });
});
