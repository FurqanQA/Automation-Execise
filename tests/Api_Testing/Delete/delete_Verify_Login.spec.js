import {test, expect} from '@playwright/test';

test('Delete To Verify Login', async ({request}) => {
    const response = await request.delete('https://automationexercise.com/api/verifyLogin');
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.responseCode).toBe(200);
    expect(body.message).toBe('User exist');
});