import { test, expect } from '@playwright/test';

test('Post Login With Valid Credential', async ({ request }) => {
    const response = await request.post('https://automationexercise.com/api/login', {
        data: {
            email: 'furqanmehdi.sqa@gmail.com',
            password: '123456'
        }
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
});