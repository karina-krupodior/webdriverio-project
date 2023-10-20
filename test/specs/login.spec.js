const LoginPage = require("../pages/login.page");

describe("Login Test", () => {
  it("Checking login page", async () => {
    browser.url("https://the-internet.herokuapp.com/login");

    await LoginPage.login("tomsmith", "SuperSecretPassword!");

    await LoginPage.checkMessage("You logged into a secure area!");
  });
});