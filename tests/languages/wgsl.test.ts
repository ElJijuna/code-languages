import { describe, it } from "vitest";
import { wgsl } from "../../src/languages/wgsl";
import { expectValidLanguage } from "../language-contract";

describe("wgsl", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(wgsl, "wgsl");
  });
});
