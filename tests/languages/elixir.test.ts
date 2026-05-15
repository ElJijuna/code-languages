import { describe, it } from "vitest";
import { elixir } from "../../src/languages/elixir";
import { expectValidLanguage } from "../language-contract";

describe("elixir", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(elixir, "elixir");
  });
});
