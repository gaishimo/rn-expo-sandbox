import { withExample } from "./withExample"

describe("withExample", () => {
  it("sets name in config", () => {
    const config = {}
    const result = withExample(config as any, { name: "hello" })
    expect(result.name).toBe("hello")
  })
})
