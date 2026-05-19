import { describe, it } from "vitest";
import { applescript } from "../../src/languages/applescript";
import { expectValidLanguage } from "../language-contract";

describe("applescript", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(applescript, "applescript");
  });
});
