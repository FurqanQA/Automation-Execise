import { test, expect } from '@playwright/test';

test('Post Login With Valid Credential', async ({ request }) => {

    const response = await request.post(
        'https://automationexercise.com/api/verifyLogin',
        {
            form: {
                password: '123456'
            }
        }
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(body);

    expect(body.responseCode).toBe(400);
    expect(body.message).toBe('Bad request, email or password parameter is missing in POST request.');
});