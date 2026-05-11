import { describe, it } from "vitest";
import { dockerfile } from "../../src/languages/dockerfile";
import { expectValidLanguage } from "../language-contract";

describe("dockerfile", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(dockerfile, "dockerfile");
  });
});
