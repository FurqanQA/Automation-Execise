import { BasePage } from "./BasePage.js";
import { loginLocators } from "../Locators/loginLocators.js";
import { expect } from "@playwright/test";

export class loginPage extends BasePage {
  constructor(page) {
    super(page);
    this.loginlink = page.locator(loginLocators.loginlink);
    this.emailInput = page.locator(loginLocators.emailInput);
    this.passwordInput = page.locator(loginLocators.passwordInput);
    this.loginBtn = page.locator(loginLocators.loginBtn);
    this.loggedInUser = page.locator(loginLocators.loggedInUser);
  }

  async clickLoginLink() {
    await this.loginlink.click();
  }

  async clickLoginButton() {
    await this.loginBtn.click();
  }

  async enterEmail(email) {
    await this.emailInput.fill(email);
  }

  async enterPassword(password) {
    await this.passwordInput.fill(password);
  }

  async clickLoginButton() {
    await this.loginBtn.click();
  }

  async verifyLoginSuccess() {
    await expect(this.loggedInUser).toBeVisible();
  }

  async logout() {
    await this.page.locator(loginLocators.logoutBtn).click();
  }
}
