import { test, expect } from '@playwright/test';

test('Updaate User Account', async({request}) => {
    const response = await request.put('https://automationexercise.com/api/updateAccount', {
        form: {
                name: 'Furqan Mehdi',
                email: `furqan@example.com`,
                password: '123456',
                title: 'Mr',
                birth_date: '1',
                birth_month: '1',
                birth_year: '2004',
                firstname: 'Furqan',
                lastname: 'Mehdi',
                company: 'Test Company',
                address1: '123 Test Street',
                address2: '',
                country: 'United States',
                zipcode: '12345',
                state: 'California',
                city: 'Los Angeles',
                mobile_number: '1234567890'
            }
        }
    )
    const body = await response.json();
    expect(response.status()).toBe(200);
    expect(body.responseCode).toBe(200);
    expect(body.message).toBe('User updated!');
});