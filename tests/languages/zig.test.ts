import { describe, it } from "vitest";
import { zig } from "../../src/languages/zig";
import { expectValidLanguage } from "../language-contract";

describe("zig", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(zig, "zig");
  });
});
