import { describe, it } from "vitest";
import { qml } from "../../src/languages/qml";
import { expectValidLanguage } from "../language-contract";

describe("qml", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(qml, "qml");
  });
});
