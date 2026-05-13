import { describe, it } from "vitest";
import { batch } from "../../src/languages/batch";
import { expectValidLanguage } from "../language-contract";

describe("batch", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(batch, "batch");
  });
});
