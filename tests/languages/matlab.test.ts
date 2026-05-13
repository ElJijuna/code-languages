import { describe, it } from "vitest";
import { matlab } from "../../src/languages/matlab";
import { expectValidLanguage } from "../language-contract";

describe("matlab", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(matlab, "matlab");
  });
});
