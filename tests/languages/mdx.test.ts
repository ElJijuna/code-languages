import { describe, it } from "vitest";
import { mdx } from "../../src/languages/mdx";
import { expectValidLanguage } from "../language-contract";

describe("mdx", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(mdx, "mdx");
  });
});
