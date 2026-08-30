import { userRegisterPage } from "../Pages/userRegisterPage";
import { test, expect } from "@playwright/test";

test("User Registration Tests With Valid Data", async ({ page }) => {
  const userRegister = new userRegisterPage(page);

  await userRegister.navigateToHomepage();
  await userRegister.clickSignupLink();
  await userRegister.enterName("Alic Smith");
  await userRegister.enterEmail("alic.smith@example.com");
  await userRegister.clickSignupButton();
  await expect(page).toHaveURL(/.*\/signup/);
  await expect(page).toHaveTitle("Automation Exercise - Signup");
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
  await expect(page).toHaveURL(/.*\/account_created/);
});

test("User Registration Tests With Missing Password Input", async ({page}) => {
  const userRegister = new userRegisterPage(page);

  await userRegister.navigateToHomepage();
  await userRegister.clickSignupLink();
  await userRegister.enterName("Furqan Mehdi");
  await userRegister.enterEmail("furqanmehdi110.smith@example.com");
  await userRegister.clickSignupButton();
  await expect(page).toHaveURL(/.*\/signup/);
  await expect(page).toHaveTitle("Automation Exercise - Signup");
  await userRegister.verifyAccountInformationPage();
  await userRegister.GenderSelection("Mr");
  await userRegister.enterPassword("");
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

  const message = await userRegister.getValidationMessage(
    userRegister.passwordInput
  );

    await expect(message).toBe("Please fill out this field.");
});

test("User Registration With Already Existing Email", async ({ page }) => {
    const userRegister = new userRegisterPage(page);

  await userRegister.navigateToHomepage();
  await userRegister.clickSignupLink();
  await userRegister.enterName("Alic Smith");
  await userRegister.enterEmail("alic.smith@example.com");
  await userRegister.clickSignupButton();
  expect(await userRegister.getErrorMessage()).toContain("Email Address already exist!");

});

test("User Registration With Only Required Fields", async ({ page }) => {
    const userRegister = new userRegisterPage(page);

  await userRegister.navigateToHomepage();
  await userRegister.clickSignupLink();
  await userRegister.enterName("Alic Smith");
  await userRegister.enterEmail("alic.smith@example.com");
  await userRegister.clickSignupButton();
  await userRegister.enterPassword("password123");
  await userRegister.enterFirstName("Alice");
  await userRegister.enterLastName("Smith");
  await userRegister.enterAddress1("123 Main Street");
  await userRegister.selectCountry("United States");
  await userRegister.enterState("California");
  await userRegister.enterCity("Los Angeles");
  await userRegister.enterZipcode("90001");
  await userRegister.enterMobileNumber("1234567890");
  await userRegister.clickCreateAccountButton();
  await expect(page).toHaveURL(/.*\/account_created/);
  
});
