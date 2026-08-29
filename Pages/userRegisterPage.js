import { BasePage } from "./BasePage";
import { userRegisterLocator } from "../Locators/userRegisterLocator";
import { expect } from "@playwright/test";

export class userRegisterPage extends BasePage {
  constructor(page) {
    super(page);

    this.signuplink = page.locator(userRegisterLocator.signuplink);
    this.pageInfo = page.locator(userRegisterLocator.pageInfo);
    this.nameInput = page.locator(userRegisterLocator.nameInput);
    this.emailInput = page.locator(userRegisterLocator.emailInput);
    this.signupBtn = page.locator(userRegisterLocator.signupBtn);
    this.errorMsg = page.locator(userRegisterLocator.errorMsg);
    this.successMsg = page.locator(userRegisterLocator.successMsg);
    this.accountInformationHeading = page.locator(
      userRegisterLocator.accountInformationHeading,
    );
    this.genderMr = page.locator(userRegisterLocator.genderMr);
    this.genderMrs = page.locator(userRegisterLocator.genderMrs);
    this.passwordInput = page.locator(userRegisterLocator.passwordInput);
    this.dayField = page.locator(userRegisterLocator.dayField);
    this.monthField = page.locator(userRegisterLocator.monthField);
    this.yearField = page.locator(userRegisterLocator.yearField);
    this.newsletterCheckbox = page.locator(
      userRegisterLocator.newsletterCheckbox,
    );
    this.receiveOffersCheckbox = page.locator(
      userRegisterLocator.receiveOffersCheckbox,
    );
    this.firstNameInput = page.locator(userRegisterLocator.firstNameInput);
    this.lastNameInput = page.locator(userRegisterLocator.lastNameInput);
    this.companyInput = page.locator(userRegisterLocator.companyInput);
    this.address1Input = page.locator(userRegisterLocator.address1Input);
    this.address2Input = page.locator(userRegisterLocator.address2Input);
    this.countryField = page.locator(userRegisterLocator.countryField);
    this.stateInput = page.locator(userRegisterLocator.stateInput);
    this.cityInput = page.locator(userRegisterLocator.cityInput);
    this.zipcodeInput = page.locator(userRegisterLocator.zipcodeInput);
    this.mobileNumberInput = page.locator(
      userRegisterLocator.mobileNumberInput,
    );
    this.createAccountBtn = page.locator(userRegisterLocator.createAccountBtn);
    this.errorMsg = page.locator(userRegisterLocator.errorMsg);
  }

  async clickSignupLink() {
    await this.signuplink.click();
  }

  async enterName(name) {
    await this.nameInput.fill(name);
  }

  async enterEmail(email) {
    await this.emailInput.fill(email);
  }

  async clickSignupButton() {
    await this.signupBtn.click();
  }
  async verifyAccountInformationPage() {
    await expect(this.accountInformationHeading).toBeVisible();
    await expect(this.accountInformationHeading).toHaveText(
      "Enter Account Information",
    );
  }

  async GenderSelection(gender) {
    if (gender === "Mr") {
      await this.page.locator(userRegisterLocator.genderMr).click();
    } else if (gender === "Mrs") {
      await this.page.locator(userRegisterLocator.genderMrs).click();
    }
  }

  async enterPassword(password) {
    await this.page.locator(userRegisterLocator.passwordInput).fill(password);
  }

  async selectDateOfBirth(day, month, year) {
    await this.page.locator(userRegisterLocator.dayField).selectOption(day);
    await this.page.locator(userRegisterLocator.monthField).selectOption(month);
    await this.page.locator(userRegisterLocator.yearField).selectOption(year);
  }

  async selectNewsletterCheckbox() {
    await this.page.locator(userRegisterLocator.newsletterCheckbox).check();
  }

  async selectReceiveOffersCheckbox() {
    await this.page.locator(userRegisterLocator.receiveOffersCheckbox).check();
  }

  async enterFirstName(firstName) {
    await this.page.locator(userRegisterLocator.firstNameInput).fill(firstName);
  }

  async enterLastName(lastName) {
    await this.page.locator(userRegisterLocator.lastNameInput).fill(lastName);
  }

  async enterCompany(company) {
    await this.page.locator(userRegisterLocator.companyInput).fill(company);
  }

  async enterAddress1(address1) {
    await this.page.locator(userRegisterLocator.address1Input).fill(address1);
  }

  async enterAddress2(address2) {
    await this.page.locator(userRegisterLocator.address2Input).fill(address2);
  }

  async selectCountry(country) {
    await this.page
      .locator(userRegisterLocator.countryField)
      .selectOption(country);
  }

  async enterState(state) {
    await this.page.locator(userRegisterLocator.stateInput).fill(state);
  }

  async enterCity(city) {
    await this.page.locator(userRegisterLocator.cityInput).fill(city);
  }

  async enterZipcode(zipcode) {
    await this.page.locator(userRegisterLocator.zipcodeInput).fill(zipcode);
  }

  async enterMobileNumber(mobileNumber) {
    await this.page
      .locator(userRegisterLocator.mobileNumberInput)
      .fill(mobileNumber);
  }

  async clickCreateAccountButton() {
    await this.page.locator(userRegisterLocator.createAccountBtn).click();
  }

  async getValidationMessage(locator) {
    return await locator.evaluate((element) => element.validationMessage);
  }

  async getErrorMessage() {
    return await this.errorMsg.textContent();
  }
}
