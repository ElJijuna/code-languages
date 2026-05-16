import { describe, it } from "vitest";
import { tcl } from "../../src/languages/tcl";
import { expectValidLanguage } from "../language-contract";

describe("tcl", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(tcl, "tcl");
  });
});
