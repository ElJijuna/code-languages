import { describe, it } from "vitest";
import { janet } from "../../src/languages/janet";
import { expectValidLanguage } from "../language-contract";

describe("janet", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(janet, "janet");
  });
});
