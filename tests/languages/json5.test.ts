import { describe, it } from "vitest";
import { json5 } from "../../src/languages/json5";
import { expectValidLanguage } from "../language-contract";

describe("json5", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(json5, "json5");
  });
});
