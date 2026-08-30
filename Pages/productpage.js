import { BasePage } from "./basePage";
import { productPageLocators } from "../locators/productPageLocators";
import { expect } from "@playwright/test";

export class productPage extends BasePage {

    constructor(page) {
        super(page);

        this.productsLink = page.locator(productPageLocators.productsLink);
        this.allProductsTitle = page.locator(productPageLocators.allProductsTitle);
        this.productsList = page.locator(productPageLocators.productsList);
        this.productCards = page.locator(productPageLocators.productCards);
        this.firstViewProduct = page.locator(productPageLocators.firstViewProduct);
        this.productDetailName = page.locator(productPageLocators.productDetailName);
        this.productDetailCategory = page.locator(productPageLocators.productDetailCategory);
        this.productDetailPrice = page.locator(productPageLocators.productDetailPrice);
        this.productDetailAvailability = page.locator(productPageLocators.productDetailAvailability);
        this.productDetailCondition = page.locator(productPageLocators.productDetailCondition);
        this.productDetailBrand = page.locator(productPageLocators.productDetailBrand);
        this.subscribeInput = page.locator(productPageLocators.subscribeInput);
        this.subscribeButton = page.locator(productPageLocators.subscribeButton);
        this.subscribeSuccessMessage = page.locator(productPageLocators.subscribeSuccessMessage);
    }


    async clickProducts() {
        await this.productsLink.click();
    }


    async verifyAllProductsPage() {
        await expect(this.allProductsTitle)
            .toHaveText("All Products");
    }


    async verifyProductsList() {
        await expect(this.productsList).toBeVisible();
        await expect(this.productCards.first()).toBeVisible();
    }


    async clickFirstViewProduct() {
        await this.firstViewProduct.click();
    }


    async verifyProductDetailPage() {

        await expect(this.productDetailName).toBeVisible();

        

        await expect(this.productDetailPrice).toBeVisible();

        await expect(this.productDetailAvailability)
            .toContainText("Availability:");

        await expect(this.productDetailCondition)
            .toContainText("Condition:");

        await expect(this.productDetailBrand)
            .toContainText("Brand:");
    }

    async verifySubscription() {
    await expect(this.subscribeInput).toBeVisible();

    await this.subscribeInput.fill("furqan@gmail.com");

    await this.subscribeButton.click();

    await expect(this.subscribeSuccessMessage).toBeVisible();
}
}