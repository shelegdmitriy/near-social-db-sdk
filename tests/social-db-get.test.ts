import { SocialDb } from "../lib/index";

type Data = {
  profile: {
    description: string;
    name: string;
  }
}

describe('SocialDb methods', () => {
  test("'.get()' method should return expected result", async () => {
    const social = new SocialDb({ debug: true, networkId: "mainnet" });
    const resp = await social.get<Data>({ key: `root.near/profile/**` });
    expect(resp).toBeTruthy();
  });
});
