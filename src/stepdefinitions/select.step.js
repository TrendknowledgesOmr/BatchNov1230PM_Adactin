import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

When('the user select the hotel', async function (){
await this.selecthotel.hotel()  
});

When('the user click the continue button', async function(){
await this.selecthotel.clickContinueButton()
});

Then('the user should navigate to book hotel page', async function () {
await expect(this.page).toHaveURL(/\/BookHotel/);
});