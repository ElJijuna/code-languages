import { describe, it } from "vitest";
import { haml } from "../../src/languages/haml";
import { expectValidLanguage } from "../language-contract";

describe("haml", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(haml, "haml");
  });
});
