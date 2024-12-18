import { dataProvider } from "../../src/index";
import postgrestClient from "../postgrestClient";
import "./index.mock";

describe("deleteOne", () => {
  it("correct response", async () => {
    const promise = dataProvider(postgrestClient).deleteOne({
      resource: "posts",
      id: "40",
    });

    expect(promise).resolves.not.toThrow();
  });

  it("should change schema", async () => {
    const id = 27;

    const promise = dataProvider(postgrestClient).deleteOne({
      resource: "posts",
      id,
      meta: {
        schema: "public",
      },
    });

    await expect(promise).resolves.not.toThrow();

    const promise2 = dataProvider(postgrestClient).deleteOne({
      resource: "posts",
      id: 41,
      meta: {
        schema: "private",
      },
    });

    await expect(promise2).rejects.toEqual(
      expect.objectContaining({ code: "PGRST106" }),
    );
  });
});
