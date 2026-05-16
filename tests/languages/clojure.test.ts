import { describe, it } from "vitest";
import { clojure } from "../../src/languages/clojure";
import { expectValidLanguage } from "../language-contract";

describe("clojure", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(clojure, "clojure");
  });
});
