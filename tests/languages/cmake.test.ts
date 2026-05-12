import { describe, it } from "vitest";
import { cmake } from "../../src/languages/cmake";
import { expectValidLanguage } from "../language-contract";

describe("cmake", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(cmake, "cmake");
  });
});
