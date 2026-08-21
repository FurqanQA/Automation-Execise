import { userRegisterPage } from "../Pages/userRegisterPage";
import { test, expect } from "@playwright/test";

test("User Registration Tests", async({page}) => {

    const userRegister = new userRegisterPage(page);

    await userRegister.navigateToHomepage();
    await userRegister.clickSignupLink();
    await userRegister.enterName("Alice Smith");
    await userRegister.enterEmail("alice.smith@example.com");
    await userRegister.clickSignupButton();
    await expect(page).toHaveURL(/.*\/signup/);
    await expect(page).toHaveTitle('Automation Exercise - Signup / Login');
    await userRegister.verifyAccountInformationPage();
    await userRegister.GenderSelection("Mr");
    await userRegister.enterPassword("password123");
    await userRegister.selectDateOfBirth("1", "January", "1990");
    await userRegister.selectNewsletterCheckbox();
    await userRegister.selectReceiveOffersCheckbox();
    await userRegister.enterFirstName("Alice");
    await userRegister.enterLastName("Smith");
    await userRegister.enterCompany("Example Company");
    await userRegister.enterAddress1("123 Main Street");
    await userRegister.enterAddress2("Apt 4B");
    await userRegister.selectCountry("United States");
    await userRegister.enterState("California");
    await userRegister.enterCity("Los Angeles");
    await userRegister.enterZipcode("90001");
    await userRegister.enterMobileNumber("1234567890");
    await userRegister.clickCreateAccountButton();



});