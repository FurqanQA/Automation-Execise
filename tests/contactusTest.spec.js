import { test, expect } from "@playwright/test";
import { ContactUsPage } from "../Pages/contactusPage.js";
import { loginPage } from "../Pages/loginPage.js";

test("Contact Us Form Submission", async ({ page }) => {
  const contactus = new ContactUsPage(page);
  const login = new loginPage(page);
  await contactus.navigateToHomepage();
  await login.loginAsUser("thdevfive@gmail.com", "KwbRM@w4UPCEwT");
  await contactus.navigateToContactUsPage();
  await contactus.InputName("Furqan Mehdi");
  await contactus.InputEmail("furqan.mehdi@example.com");
  await contactus.InputSubject("Test Subject");
  await contactus.InputMessage(
    "This is a test message for the contact us form.",
  );
  await contactus.uploadFile("C:/Users/PC/Desktop/Th new Bugs.txt");
  await contactus.clickSubmitButton();
  await contactus.verifySuccessMessage();
});