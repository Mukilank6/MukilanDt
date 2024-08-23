const {test} = require('@playwright/test');
const {SupportPOManager} = require('../SupportPageObject/SupportPOManager');

test.only('Directv Prod Test', async({page})=>
{
    await page.goto("https://www.directv.com/support");

    const supportPOManager = new SupportPOManager(page);

    const home = supportPOManager.unAuthenticatedHomePage();
    await home.homePageElementsCheck();
    await page.pause();
    await home.OutagesCheck();
    await home.ContactUs();
    await home.HomePageSearch();
})