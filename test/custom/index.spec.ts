import { dataProvider } from "../../src/index";
import postgrestClient from "../postgrestClient";

describe("custom", () => {
  it("correct get response", async () => {
    try {
      await dataProvider(postgrestClient).custom!({
        url: "posts",
        method: "get",
      });
    } catch (error) {
      expect(error).toEqual(
        Error("Not implemented on refine-postgrest data provider."),
      );
    }
  });
});
