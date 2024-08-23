const {When, Then, Given}=require('@cucumber/cucumber')
const { POmanager } = require('../../PageObject/POmanager');
const {expect} = require('@playwright/test');
const playwright = require('playwright');

Given('User logins with {username} and {password}', async function(username,password){
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    const poManager = new POmanager(page);

    const loginPage = poManager.getLoginPage();
    await loginPage.goTo(data.homePage);
    await loginPage.validLogin(data.email,data.Password);

})

When('User add {string} to cart', async function(string){
    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.searchProductAddToCart(data.productName);
    await dashboardPage.navigateToCart();
})

And('User enter valid information and place the order', async function(){
    const checkoutPage = poManager.getCheckoutPage();
    await checkoutPage.checkout();
})

Then('Verify the order in order history page', async function(){
    const placeOrder = poManager.getPlaceOrderPage();
    await placeOrder.fillShippingInformation();
    await placeOrder.fillPersonalInformation(data.CVV,data.Name,data.Coupon);
})