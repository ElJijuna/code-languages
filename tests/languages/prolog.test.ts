import { describe, it } from "vitest";
import { prolog } from "../../src/languages/prolog";
import { expectValidLanguage } from "../language-contract";

describe("prolog", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(prolog, "prolog");
  });
});
