import { describe, it } from "vitest";
import { csharp } from "../../src/languages/csharp";
import { expectValidLanguage } from "../language-contract";

describe("csharp", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(csharp, "csharp");
  });
});
