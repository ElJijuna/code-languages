import { describe, it } from "vitest";
import { xaml } from "../../src/languages/xaml";
import { expectValidLanguage } from "../language-contract";

describe("xaml", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(xaml, "xaml");
  });
});
