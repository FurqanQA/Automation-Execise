import { searchProduct } from "../Locators/searchProduct";
import { BasePage } from "./BasePage";
import { expect } from "@playwright/test";

export class searchProductPage extends BasePage {

    constructor(page) {
        super(page);

        this.productLink = page.locator(searchProduct.productsLink);
        this.productTitle = page.locator(searchProduct.productTitle);
        this.searchInput = page.locator(searchProduct.searchInput);
        this.searchButton = page.locator(searchProduct.searchButton);
        this.searchResults = page.locator(searchProduct.searchResults);
        this.productCards = page.locator(searchProduct.productCards);
    }

    async clickProductsLink() {
        await this.productLink.click();
    }

    async verifyProductsPage() {
        await expect(this.productTitle).toHaveText("All Products");
    }

    async searchForProduct(productName) {
        await this.searchInput.fill(productName);
        await this.searchButton.click();
    }

    async verifySearchResults() {
        await expect(this.searchResults).toBeVisible();
        await expect(this.productCards.first()).toBeVisible();
    }
}
