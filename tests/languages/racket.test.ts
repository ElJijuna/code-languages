import { describe, it } from "vitest";
import { racket } from "../../src/languages/racket";
import { expectValidLanguage } from "../language-contract";

describe("racket", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(racket, "racket");
  });
});
