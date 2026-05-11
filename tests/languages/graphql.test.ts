import { describe, it } from "vitest";
import { graphql } from "../../src/languages/graphql";
import { expectValidLanguage } from "../language-contract";

describe("graphql", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(graphql, "graphql");
  });
});
