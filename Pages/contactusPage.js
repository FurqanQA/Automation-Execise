import { contactusLocators } from "../locators/contactusLocators";

export class ContactUsPage {
    
    constructor(page) {
        this.page = page;
        this.contactUsLink = page.locator(contactusLocators.contactUsLink);
        this.contactUsHeading = page.locator(contactusLocators.contactUsHeading);
        
    }

    async navigateToContactUsPage() {
        await this.page.goto('https://automationexercise.com/contact_us');
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

    async UploadFile(filePath) {
        await this.page.setInputFiles(contactusLocators.uploadFileInput, filePath);
    }

    async ClickSubmitButton() {
        await this.page.click(contactusLocators.submitButton);
    }

    async VerifySuccessMessage() {
        await this.page.waitForSelector(contactusLocators.successMessage);
        const successMessage = await this.page.textContent(contactusLocators.successMessage);
        return successMessage;
    }

    async VerifyErrorMessage() {
        await this.page.waitForSelector(contactusLocators.errorMessage);
        const errorMessage = await this.page.textContent(contactusLocators.errorMessage);
        return errorMessage;
    }
}