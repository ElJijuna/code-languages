import { describe, it } from "vitest";
import { tex } from "../../src/languages/tex";
import { expectValidLanguage } from "../language-contract";

describe("tex", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(tex, "tex");
  });
});
