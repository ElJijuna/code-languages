import { describe, it } from "vitest";
import { coq } from "../../src/languages/coq";
import { expectValidLanguage } from "../language-contract";

describe("coq", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(coq, "coq");
  });
});
