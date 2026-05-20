import { describe, it } from "vitest";
import { luau } from "../../src/languages/luau";
import { expectValidLanguage } from "../language-contract";

describe("luau", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(luau, "luau");
  });
});
