import { describe, it } from "vitest";
import { toml } from "../../src/languages/toml";
import { expectValidLanguage } from "../language-contract";

describe("toml", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(toml, "toml");
  });
});
