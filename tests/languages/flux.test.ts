import { describe, it } from "vitest";
import { flux } from "../../src/languages/flux";
import { expectValidLanguage } from "../language-contract";

describe("flux", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(flux, "flux");
  });
});
