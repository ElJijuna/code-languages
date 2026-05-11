import { describe, it } from "vitest";
import { nginx } from "../../src/languages/nginx";
import { expectValidLanguage } from "../language-contract";

describe("nginx", () => {
  it("satisfies the Language contract", () => {
    expectValidLanguage(nginx, "nginx");
  });
});
