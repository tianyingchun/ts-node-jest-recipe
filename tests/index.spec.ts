import { func } from "@/index";

describe("test suites", () => {
  it("it should be ok", async () => {
    const result = await func();
    expect(result).toBe(1);
  });
});
