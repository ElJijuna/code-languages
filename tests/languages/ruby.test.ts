import { describe, it } from "vitest";
import { ruby } from "../../src/languages/ruby";
import { expectValidLanguage } from "../language-contract";

describe("ruby", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(ruby, "ruby");
  });
});
