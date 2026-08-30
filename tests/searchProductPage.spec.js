import { loginPage } from "../Pages/loginPage";
import { searchProductPage } from "../Pages/searchProductPage";
import { test, expect } from "@playwright/test";

test("Search Product Test", async ({ page }) => {
    const login = new loginPage(page);
    const searchProduct = new searchProductPage(page);

    searchProduct.navigateToHomepage();
    login.loginlink.click();
    await login.loginAsUser(
        'thdevfive@gmail.com',
        'KwbRM@w4UPCEwT'
    );
    await searchProduct.clickProductsLink();
    await searchProduct.verifyProductsPage();
    await searchProduct.searchForProduct("shirt");
    await searchProduct.verifySearchResults();
});