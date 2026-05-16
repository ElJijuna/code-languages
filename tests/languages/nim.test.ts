import { describe, it } from "vitest";
import { nim } from "../../src/languages/nim";
import { expectValidLanguage } from "../language-contract";

describe("nim", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(nim, "nim");
  });
});
