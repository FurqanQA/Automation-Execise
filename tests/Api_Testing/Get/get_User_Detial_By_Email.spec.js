import { test, expect } from '@playwright/test';

test('Get User Detail By Email', async ({ request }) => {

    const response = await request.get(
        'https://automationexercise.com/api/getUserDetailByEmail',
        {
            params: {
                email: 'furqan@gmail.com'
            }
        }
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(body);

    expect(body.responseCode).toBe(200);
});