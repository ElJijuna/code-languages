import { describe, it } from "vitest";
import { less } from "../../src/languages/less";
import { expectValidLanguage } from "../language-contract";

describe("less", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(less, "less");
  });
});
