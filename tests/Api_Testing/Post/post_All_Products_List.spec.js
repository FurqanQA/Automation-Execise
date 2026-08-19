import { test, expect } from '@playwright/test';

test('Post All Product', async({request}) => {
    const response = await request.post('https://automationexercise.com/api/productsList');
    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log(body);
    console.log(response.status());


});