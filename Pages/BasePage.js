export class BasePage{

    constructor(page){
        this.page = page;
    }

    async navigateToHomepage() {
        await this.page.goto('https://automationexercise.com/');
    }
}