import { describe, it } from "vitest";
import { haxe } from "../../src/languages/haxe";
import { expectValidLanguage } from "../language-contract";

describe("haxe", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(haxe, "haxe");
  });
});
