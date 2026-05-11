import { describe, it } from "vitest";
import { bash } from "../../src/languages/bash";
import { expectValidLanguage } from "../language-contract";

describe("bash", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(bash, "bash");
  });
});
