import { describe, it } from "vitest";
import { earthly } from "../../src/languages/earthly";
import { expectValidLanguage } from "../language-contract";

describe("earthly", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(earthly, "earthly");
  });
});
