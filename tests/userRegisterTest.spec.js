import { userRegisterPage } from "../Pages/userRegisterPage";
import { test, expect } from "@playwright/test";

test("User Registration Tests", async({page}) => {

    const userRegister = new userRegisterPage(page);

    await userRegister.navigateToHomepage();
    await userRegister.clickSignupLink();
    await userRegister.enterName("John Doe");
    await userRegister.enterEmail("john.doe@example.com");
    await userRegister.clickSignupButton();

    await expect(page).toHaveURL(/.*\/signup/);
    await expect(page).toHaveTitle("Enter Account Information");


});