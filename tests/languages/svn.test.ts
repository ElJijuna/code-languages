import { describe, it } from "vitest";
import { svn } from "../../src/languages/svn";
import { expectValidLanguage } from "../language-contract";

describe("svn", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(svn, "svn");
  });
});
