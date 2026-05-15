import { describe, it } from "vitest";
import { glsl } from "../../src/languages/glsl";
import { expectValidLanguage } from "../language-contract";

describe("glsl", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(glsl, "glsl");
  });
});
