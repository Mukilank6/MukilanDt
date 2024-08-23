class LoginPage {

    constructor(page){
        this.page=page;
        this.userName=page.locator('#userEmail');
        this.password=page.locator('#userPassword');
        this.signInBtn=page.locator('#login');
    }

    async goTo(homePage)
    {
        await this.page.goto(homePage);
    }

    async validLogin(email,Password)
    {
        await this.userName.fill(email);
        await this.password.fill(Password);
        await this.signInBtn.click();
        await this.page.waitForLoadState('networkidle');
    }
}
module.exports = {LoginPage};