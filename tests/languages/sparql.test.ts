import { describe, it } from "vitest";
import { sparql } from "../../src/languages/sparql";
import { expectValidLanguage } from "../language-contract";

describe("sparql", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(sparql, "sparql");
  });
});
