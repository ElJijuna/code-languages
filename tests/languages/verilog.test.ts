import { describe, it } from "vitest";
import { verilog } from "../../src/languages/verilog";
import { expectValidLanguage } from "../language-contract";

describe("verilog", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(verilog, "verilog");
  });
});
