class LoginPage {
  get usernameTextBox() {
    return $("#username");
  }

  get passwordTextBox() {
    return $("#password");
  }

  get loginButton() {
    return $('button[type="submit"]');
  }

  get loginMessage() {
    return $("#flash");
  }

  async login(userName, password) {
    await this.usernameTextBox.setValue(userName);
    await this.passwordTextBox.setValue(password);
    await this.loginButton.click();
  }
  async checkMessage(msg) {
    await expect(this.loginMessage).toHaveTextContaining(msg);
  }
}
module.exports = new LoginPage();
