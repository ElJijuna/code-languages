import { describe, it } from "vitest";
import { php } from "../../src/languages/php";
import { expectValidLanguage } from "../language-contract";

describe("php", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(php, "php");
  });
});
