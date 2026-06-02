import { describe, it } from "vitest";
import { pkl } from "../../src/languages/pkl";
import { expectValidLanguage } from "../language-contract";

describe("pkl", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(pkl, "pkl");
  });
});
