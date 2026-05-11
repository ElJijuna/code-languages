import { describe, it } from "vitest";
import { zsh } from "../../src/languages/zsh";
import { expectValidLanguage } from "../language-contract";

describe("zsh", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(zsh, "zsh");
  });
});
