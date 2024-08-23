const {expect} = require('@playwright/test');
const {HomePageLocators} = require('../HomePageLocators');
const exp = require('constants');
class UnAuthHomePage
{
    constructor(page)
    {
        this.page = page;
        this.homePageLocators = new HomePageLocators(page);
    }

    async homePageElementsCheck()
    {
        await expect(this.homePageLocators.welcomeMessage).toBeVisible();
        await expect(this.homePageLocators.welcomeBanner).toBeVisible();
        await expect(this.homePageLocators.helpMessage).toBeVisible();
        await expect(this.homePageLocators.homePageSearch).toBeVisible();
        await expect(this.homePageLocators.BillingAndAccount).toBeVisible();
        await expect(this.homePageLocators.ChannelsPackagesAndPrograms).toBeVisible();
        await expect(this.homePageLocators.OrdersAppsEquipments).toBeVisible();
        await expect(this.homePageLocators.QuickfixesAndTroubleshooting).toBeVisible();
    }

    async OutagesCheck()
    {
        await expect(this.homePageLocators.OutagesZipCode).toBeVisible();
        await this.homePageLocators.OutagesZipCode.fill('10475');
        await this.homePageLocators.CheckForOutagesBtn.click();
    }

    async ContactUs()
    {
        await this.homePageLocators.contactUs.click();
        const title = await this.page.title();
        await expect(title).toBe('DIRECTV Customer Service, Phone Numbers, Chat');
    }

    async HomePageSearch()
    {
        await this.homePageLocators.homePageSearch.fill('remote');
        await this.page.keyboard.press('Enter');
    }
}
module.exports = {UnAuthHomePage};