import { describe, it } from "vitest";
import { json } from "../../src/languages/json";
import { expectValidLanguage } from "../language-contract";

describe("json", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(json, "json");
  });
});
