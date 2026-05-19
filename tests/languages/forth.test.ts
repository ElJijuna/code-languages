import { describe, it } from "vitest";
import { forth } from "../../src/languages/forth";
import { expectValidLanguage } from "../language-contract";

describe("forth", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(forth, "forth");
  });
});
