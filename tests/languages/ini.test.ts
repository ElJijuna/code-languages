import { describe, it } from "vitest";
import { ini } from "../../src/languages/ini";
import { expectValidLanguage } from "../language-contract";

describe("ini", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(ini, "ini");
  });
});
