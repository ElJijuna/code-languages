import { describe, it } from "vitest";
import { mojo } from "../../src/languages/mojo";
import { expectValidLanguage } from "../language-contract";

describe("mojo", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(mojo, "mojo");
  });
});
