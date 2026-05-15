import { describe, it } from "vitest";
import { razor } from "../../src/languages/razor";
import { expectValidLanguage } from "../language-contract";

describe("razor", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(razor, "razor");
  });
});
