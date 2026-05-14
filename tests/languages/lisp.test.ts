import { describe, it } from "vitest";
import { lisp } from "../../src/languages/lisp";
import { expectValidLanguage } from "../language-contract";

describe("lisp", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(lisp, "lisp");
  });
});
