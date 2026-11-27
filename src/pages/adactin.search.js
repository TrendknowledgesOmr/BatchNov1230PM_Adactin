export default class SearchPage{
    constructor(page){
        this.page = page 
        this.location = page.locator('//select[@id = "location"]')
        this.hotel = page.locator('//select[@id = "hotels"]')
        this.roomType = page.locator('//select[@id = "room_type"]')
        this.noOfRooms = page.locator('//select[@id = "room_nos"]')
        this.adult = page.locator('//select[@id = "adult_room"]')
        this.child = page.locator('//select[@id = "child_room"]')
        this.submitButton = page.locator('//input[@id = "Submit"]')
        }  
    async selectlocation(location) {
        await this.location.selectOption({ value: location })
    }
    async selecthotel(hotel) {
        await this.hotel.selectOption({ value: hotel })
    }
    async selectroomtype(roomType) {
        await this.roomType.selectOption({value: roomType })
    }
    async selectnochild(childperroom) {
        await this.child.selectOption({ Label: childperroom })
    }
    async clickSearchButton() {
        await this.submitButton.click()
    }
}