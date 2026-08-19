import { test, expect } from '@playwright/test';

test('Put All Brand List', async({request}) => {
    const response = await request.put('https://automationexercise.com/api/brandsList');
    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log(body);
});