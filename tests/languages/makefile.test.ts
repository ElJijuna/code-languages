import { describe, it } from "vitest";
import { makefile } from "../../src/languages/makefile";
import { expectValidLanguage } from "../language-contract";

describe("makefile", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(makefile, "makefile");
  });
});
