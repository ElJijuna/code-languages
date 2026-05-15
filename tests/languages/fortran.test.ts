import { describe, it } from "vitest";
import { fortran } from "../../src/languages/fortran";
import { expectValidLanguage } from "../language-contract";

describe("fortran", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(fortran, "fortran");
  });
});
