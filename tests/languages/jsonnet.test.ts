import { describe, it } from "vitest";
import { jsonnet } from "../../src/languages/jsonnet";
import { expectValidLanguage } from "../language-contract";

describe("jsonnet", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(jsonnet, "jsonnet");
  });
});
