import { test, expect } from '@playwright/test';

test('DELETE USER ACCOUNT', async ({ request }) => {

    const email = `furqanmehdijafferi@example.com`;
    const password = '123456';

    // 1. Create user
    const createResponse = await request.post(
        'https://automationexercise.com/api/createAccount',
        {
            form: {
                name: 'Furqan Mehdi',
                email: email,
                password: password,
                title: 'Mr',
                birth_date: '1',
                birth_month: '1',
                birth_year: '1990',
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
    );

    const createBody = await createResponse.json();

console.log('Create Status:', createResponse.status());
console.log('Create Response:', createBody);

expect(createResponse.status()).toBe(200);
expect(createBody.responseCode).toBe(201);
expect(createBody.message).toBe('User created!');


    // 2. Delete same user
    const deleteResponse = await request.delete(
        'https://automationexercise.com/api/deleteAccount',
        {
            form: {
                email: email,
                password: password
            }
        }
    );

    const deleteBody = await deleteResponse.json();

    console.log('Delete Response:', deleteBody);

    expect(deleteResponse.status()).toBe(200);
    expect(deleteBody.responseCode).toBe(200);
    expect(deleteBody.message).toBe('Account deleted!');
});