import { test, expect } from '@playwright/test';

test('Post Search Product', async ({ request }) => {

    const response = await request.post('https://automationexercise.com/api/searchProduct');

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(body);

    
});