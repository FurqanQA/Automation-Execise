import { test, expect } from "@playwright/test";
 import { ContactUsPage } from "../Pages/contactusPage.js";

import { loginPage } from "../Pages/loginPage.js";

test("Contact Us Form Submission", async ({ page }) => {
  const login = new loginPage(page);
 
const contactus = new ContactUsPage(page);

  this.loginlink = page.locator(loginLocators.loginlink);
  this.emailInput = page.locator(loginLocators.emailInput);
  this.passwordInput = page.locator(loginLocators.passwordInput);
  this.loginBtn = page.locator(loginLocators.loginBtn);
  this.loggedInUser = page.locator(loginLocators.loggedInUser);

  await contactus.navigateToHomepage();

  await contactus.clickContactUsLink();
  await contactus.enterName("John Doe");
  await contactus.enterEmail("john.doe@example.com");
  await contactus.enterSubject("Test Subject");
  await contactus.enterMessage(
    "This is a test message for the contact us form.",
  );
  await contactus.clickSubmitButton();
  await expect(contactus.successMessage).toBeVisible();
});
