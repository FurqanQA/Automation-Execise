import { test, expect } from '@playwright/test';

test('Get All Product', async({page}) => {
    const response = await page.request.get('https://automationexercise.com/api/productsList');
    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log(body);

});