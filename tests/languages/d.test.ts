import { describe, it } from "vitest";
import { d } from "../../src/languages/d";
import { expectValidLanguage } from "../language-contract";

describe("d", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(d, "d");
  });
});
