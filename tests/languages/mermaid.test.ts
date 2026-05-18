import { describe, it } from "vitest";
import { mermaid } from "../../src/languages/mermaid";
import { expectValidLanguage } from "../language-contract";

describe("mermaid", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(mermaid, "mermaid");
  });
});
