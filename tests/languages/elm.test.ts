import { describe, it } from "vitest";
import { elm } from "../../src/languages/elm";
import { expectValidLanguage } from "../language-contract";

describe("elm", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(elm, "elm");
  });
});
