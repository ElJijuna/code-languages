import { describe, it } from "vitest";
import { rescript } from "../../src/languages/rescript";
import { expectValidLanguage } from "../language-contract";

describe("rescript", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(rescript, "rescript");
  });
});
