import { cartPage } from '../Pages/cartPage.js';
import { test, expect } from '@playwright/test';
import { loginPage } from '../Pages/loginPage.js';
import { productPage } from '../Pages/productpage.js';

test('Verify Subscription in Cart Page', async ({ page }) => {

    const login = new loginPage(page);
    const cart = new cartPage(page);

    await cart.navigateToHomepage();

    await login.loginAsUser(
        'thdevfive@gmail.com',
        'KwbRM@w4UPCEwT'
    );

    await cart.clickCartLink();

    await cart.verifySubscription('furqan@gmail.com');
});