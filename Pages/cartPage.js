import { BasePage } from "./basePage.js";
import { cartLocators } from "../Locators/cartLocators.js";
import { expect } from "@playwright/test";

export class cartPage extends BasePage {

    constructor(page) {
        super(page);

        this.cartLink = page
            .locator(cartLocators.cartLink)
            .first();

        this.subscribeInput = page.locator(
            cartLocators.subscribeInput
        );

        this.subscribeButton = page.locator(
            cartLocators.subscribeButton
        );

        this.subscribeSuccessMessage = page.locator(
            cartLocators.subscribeSuccessMessage
        );
    }

    async clickCartLink() {
        await this.cartLink.click();
    }

    async verifySubscription(email) {

        await expect(this.subscribeInput).toBeVisible();

        await this.subscribeInput.fill(email);

        await this.subscribeButton.click();

        await expect(
            this.subscribeSuccessMessage
        ).toBeVisible();
    }
}