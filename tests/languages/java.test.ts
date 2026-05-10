import { describe, it } from "vitest";
import { java } from "../../src/languages/java";
import { expectValidLanguage } from "../language-contract";

describe("java", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(java, "java");
  });
});
