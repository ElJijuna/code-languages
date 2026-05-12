import { describe, it } from "vitest";
import { abap } from "../../src/languages/abap";
import { expectValidLanguage } from "../language-contract";

describe("abap", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(abap, "abap");
  });
});
