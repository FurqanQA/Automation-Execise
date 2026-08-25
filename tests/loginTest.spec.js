import { loginPage } from '../Pages/loginPage.js';
import { test, expect } from '@playwright/test';

test('Login with Valid Credentials', async ({ page }) => {

    const login = new loginPage(page);

    await login.navigateToHomepage();
    await login.clickLoginLink();
    await login.enterEmail('thdevfive@gmail.com');
    await login.enterPassword('KwbRM@w4UPCEwT');
    await login.clickLoginButton();

    await expect(page).toHaveURL(/automationexercise\.com\/$/);

    await login.verifyLoginSuccess();
});

test('logout after login', async ({ page }) => {

    const login = new loginPage(page);
    await login.navigateToHomepage();
    await login.clickLoginLink();
    await login.enterEmail('thdevfive@gmail.com');
    await login.enterPassword('KwbRM@w4UPCEwT');
    await login.clickLoginButton();
    await expect(page).toHaveURL(/automationexercise\.com\/$/);
    await login.logout();
});