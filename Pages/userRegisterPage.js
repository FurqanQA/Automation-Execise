import {BasePage} from "./BasePage";
import { userRegisterLocator } from "../Locators/userRegisterLocator";

export class userRegisterPage extends BasePage {
    constructor(page) {
        super(page);

        this.signuplink = page.locator(userRegisterLocator.signuplink);
        this.pageInfo = page.locator(userRegisterLocator.pageInfo);
        this.nameInput = page.locator(userRegisterLocator.nameInput);
        this.emailInput = page.locator(userRegisterLocator.emailInput);
        this.signupBtn = page.locator(userRegisterLocator.signupBtn);
        this.errorMsg = page.locator(userRegisterLocator.errorMsg);
        this.successMsg = page.locator(userRegisterLocator.successMsg);
    }

    async clickSignupLink() {
        await this.signuplink.click();
    }

    async enterName(name) {
        await this.nameInput.fill(name);
    }

    async enterEmail(email) {
        await this.emailInput.fill(email);
    }

    async clickSignupButton() {
        await this.signupBtn.click();
    }



}