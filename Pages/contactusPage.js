import { contactusLocators } from "../locators/contactusLocators";
import { BasePage } from "./basePage";
import { expect } from "@playwright/test";

export class ContactUsPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this.contactUsLink = page.locator(contactusLocators.contactUsLink);
    this.contactUsHeading = page.locator(contactusLocators.contactUsHeading);
    this.uploadFileInput = page.locator(contactusLocators.uploadFileInput);
    this.successMessage = page.locator(contactusLocators.successMessage);
    this.errorMessage = page.locator(contactusLocators.errorMessage);
  }

  async navigateToContactUsPage() {
    await this.page.goto("https://automationexercise.com/contact_us");
  }

  async InputName(name) {
    await this.page.fill(contactusLocators.nameInput, name);
  }

  async InputEmail(email) {
    await this.page.fill(contactusLocators.emailInput, email);
  }

  async InputSubject(subject) {
    await this.page.fill(contactusLocators.subjectInput, subject);
  }

  async InputMessage(message) {
    await this.page.fill(contactusLocators.messageInput, message);
  }

  async uploadFile(filePath) {
    await this.page.setInputFiles(contactusLocators.uploadFileInput, filePath);
  }
  async clickSubmitButton() {
    this.page.once("dialog", async (dialog) => {
      await dialog.accept();
    });

    await this.page.click(contactusLocators.submitButton);
  }

  async verifySuccessMessage() {
    await expect(this.successMessage).toBeVisible();
    await expect(this.successMessage).toHaveText(
      "Success! Your details have been submitted successfully.",
    );
  }

  async verifyErrorMessage() {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toHaveText("Error! Invalid email address.");
  }
}