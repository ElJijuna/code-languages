import { describe, it } from "vitest";
import { cue } from "../../src/languages/cue";
import { expectValidLanguage } from "../language-contract";

describe("cue", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(cue, "cue");
  });
});
