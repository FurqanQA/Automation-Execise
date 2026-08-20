import { BasePage } from "./BasePage.js";
import { loginLocators } from "../Locators/loginLocators.js";

export class loginPage extends BasePage {
    constructor(page) {
        super(page);
        this.emailInput = page.locator(loginLocators.emailInput);
        this.passwordInput = page.locator(loginLocators.passwordInput);
        this.loginBtn = page.locator(loginLocators.loginBtn);
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
};