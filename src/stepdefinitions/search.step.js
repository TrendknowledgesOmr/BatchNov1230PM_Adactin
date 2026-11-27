import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

When('user select the {string} by clicking select location field', async function(location){
  await this.searchpage.selectlocation(location);
});

When('user select the {string} by clicking select hotel field', async function(hotel){
  await this.searchpage.selecthotel(hotel);
});

When('user select the {string} by clicking select room type field', async function(roomType){
  await this.searchpage.selectroomtype(roomType);
});

When('User select the {string} by clicking select click per room field', async function(childperroom){
  await this.searchpage.selectnochild(childperroom);
});

When('user click the search button', async function(){
 await this.searchpage.clickSearchButton();
});

Then('the user should navigate to select hotel page', async function() {
    await expect(this.page).toHaveURL(/\/SelectHotel/);
});