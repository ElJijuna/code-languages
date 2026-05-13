import { describe, it } from "vitest";
import { gradle } from "../../src/languages/gradle";
import { expectValidLanguage } from "../language-contract";

describe("gradle", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(gradle, "gradle");
  });
});
