import { describe, it } from "vitest";
import { julia } from "../../src/languages/julia";
import { expectValidLanguage } from "../language-contract";

describe("julia", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(julia, "julia");
  });
});
