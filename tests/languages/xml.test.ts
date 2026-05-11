import { describe, it } from "vitest";
import { xml } from "../../src/languages/xml";
import { expectValidLanguage } from "../language-contract";

describe("xml", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(xml, "xml");
  });
});
