import { Given, When, Then } from "@cucumber/cucumber";
import {expect} from '@playwright/test'

Given('the user is on the Adactin login page', async function (){
await this.loginpage.navigateTo();
});

When('the user enters a valid {string} in username field', async function (username){
await this.loginpage.enterUserName(username)
});

When('the user enters a valid {string} in password field', async function (password){
await this.loginpage.enterPassword(password)  
});

When('the user clicks on the Login button', async function (){
await this.loginpage.clickLoginButton()
});

Then('the user should navigate to search hotel page', async function () {
await expect(this.page).toHaveURL(/\/SearchHotel/);
});
