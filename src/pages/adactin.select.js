export default class SelectHotel{
    constructor(page){
        this.page = page 
        this.selectHotelRadio = page.locator('//input[@id="radiobutton_0"]')
        this.continueButton = page.locator('//input[@id="continue" ]')
    }

async hotel(){
    await this.selectHotelRadio.check({force: true})
}
async clickContinueButton(){
    await this.continueButton.click()
}
}
