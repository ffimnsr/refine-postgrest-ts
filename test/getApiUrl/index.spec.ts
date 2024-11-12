import { dataProvider } from "../../src/index";
import postgrestClient from "../postgrestClient";

describe("getApiUrl", () => {
  it("correct get response", async () => {
    try {
      dataProvider(postgrestClient).getApiUrl();
    } catch (error) {
      expect(error).toEqual(
        Error("Not implemented on refine-supabase data provider."),
      );
    }
  });
});
