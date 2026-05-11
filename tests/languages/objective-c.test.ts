import { describe, it } from "vitest";
import { objectiveC } from "../../src/languages/objective-c";
import { expectValidLanguage } from "../language-contract";

describe("objective-c", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(objectiveC, "objective-c");
  });
});
