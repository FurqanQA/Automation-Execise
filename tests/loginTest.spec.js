import { loginPage } from '../Pages/loginPage.js';
import { test, expect } from '@playwright/test';

test('Login with Valid Credentials', async ({ page }) => {
    const login = new loginPage(page);
    await login.navigateToHomepage();
    await login.enterEmail('john.doe@example.com');
    await login.enterPassword('password123');
    await login.clickLoginButton();
});