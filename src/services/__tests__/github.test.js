import {getUser} from "../github";
global.fetch = jest.fn().mockImplementation((string) => {
    return new Promise(resolve => resolve({ok:true, json: () => ({login:"jycle"})}));
});

describe("getUser() test", () => {
    it("load user info", async () => {
        let response = await getUser('jycl');
        // console.log('response login', response.login);
        expect(response.login).toBe('jycle');
    });
});