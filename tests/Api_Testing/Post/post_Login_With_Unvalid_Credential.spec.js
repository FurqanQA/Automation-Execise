import { test, expect } from '@playwright/test';

test('Post Login With Valid Credential', async ({ request }) => {

    const response = await request.post(
        'https://automationexercise.com/api/verifyLogin',
        {
            form: {
                email: 'furqanmehdi.sqa@gmail.com',
                password: 'wrongpassword'
            }
        }
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(body);

    expect(body.responseCode).toBe(404);
    expect(body.message).toBe('User not found!');
});