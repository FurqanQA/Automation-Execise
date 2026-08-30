import { productPage } from "../Pages/productpage";
import { test , expect } from "@playwright/test";
import { loginPage } from "../Pages/loginPage";

test("Product Page Test", async ({ page }) => {
    const login = new loginPage(page);
    const product = new productPage(page);

    await product.navigateToHomepage();
    await login.loginlink.click();
    await login.loginAsUser(
        'thdevfive@gmail.com',
        'KwbRM@w4UPCEwT'
    );
     await product.clickProducts();

    // 3. Verify All Products page
    await product.verifyAllProductsPage();

    // 4. Verify products list
    await product.verifyProductsList();

    // 5. Click View Product of first product
    await product.clickFirstViewProduct();

    // 6. Verify product details
    await product.verifyProductDetailPage();
});