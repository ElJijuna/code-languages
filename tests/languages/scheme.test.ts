import { describe, it } from "vitest";
import { scheme } from "../../src/languages/scheme";
import { expectValidLanguage } from "../language-contract";

describe("scheme", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(scheme, "scheme");
  });
});
