import { describe, it } from "vitest";
import { xslt } from "../../src/languages/xslt";
import { expectValidLanguage } from "../language-contract";

describe("xslt", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(xslt, "xslt");
  });
});
