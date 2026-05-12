import { describe, it } from "vitest";
import { coffeescript } from "../../src/languages/coffeescript";
import { expectValidLanguage } from "../language-contract";

describe("coffeescript", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(coffeescript, "coffeescript");
  });
});
