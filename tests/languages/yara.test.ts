import { describe, it } from "vitest";
import { yara } from "../../src/languages/yara";
import { expectValidLanguage } from "../language-contract";

describe("yara", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(yara, "yara");
  });
});
