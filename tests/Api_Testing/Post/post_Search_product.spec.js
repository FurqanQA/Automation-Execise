import { test, expect } from '@playwright/test';

test('Post Search Product', async ({ request }) => {

    const response = await request.post(
        'https://automationexercise.com/api/searchProduct',
        {
            form: {
                search_product: 'tshirt'
            }
        }
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(body);

    expect(body.responseCode).toBe(200);
    expect(body.products).toBeDefined();
    expect(Array.isArray(body.products)).toBeTruthy();
});