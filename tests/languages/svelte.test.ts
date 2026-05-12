import { describe, it } from "vitest";
import { svelte } from "../../src/languages/svelte";
import { expectValidLanguage } from "../language-contract";

describe("svelte", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(svelte, "svelte");
  });
});
