import { describe, it } from "vitest";
import { dart } from "../../src/languages/dart";
import { expectValidLanguage } from "../language-contract";

describe("dart", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(dart, "dart");
  });
});
