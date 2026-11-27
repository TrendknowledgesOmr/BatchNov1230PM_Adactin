export default class LoginPage{
    constructor(page){
        this.page = page 
        this.username = page.locator('//input[@id="username"]')
        this.password = page.locator('//input[@id="password"]')
        this.loginButton = page.locator('//input[@id="login"]')
    }
    async navigateTo(){
        await this.page.goto('https://adactinhotelapp.com/')
    }

    async enterUserName(username){
        await this.username.fill(username)
    }
    async enterPassword(password){
        await this.password.fill(password)
    }
    async clickLoginButton(){
        await this.loginButton.click()
    }
}