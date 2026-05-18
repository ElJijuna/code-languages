import { describe, it } from "vitest";
import { handlebars } from "../../src/languages/handlebars";
import { expectValidLanguage } from "../language-contract";

describe("handlebars", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(handlebars, "handlebars");
  });
});
