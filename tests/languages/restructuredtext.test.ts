import { describe, it } from "vitest";
import { restructuredtext } from "../../src/languages/restructuredtext";
import { expectValidLanguage } from "../language-contract";

describe("restructuredtext", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(restructuredtext, "restructuredtext");
  });
});
