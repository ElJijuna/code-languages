import { describe, it } from "vitest";
import { fsharp } from "../../src/languages/fsharp";
import { expectValidLanguage } from "../language-contract";

describe("fsharp", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(fsharp, "fsharp");
  });
});
