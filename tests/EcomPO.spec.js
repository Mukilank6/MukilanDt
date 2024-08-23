const {test, expect} = require('@playwright/test');
const { POmanager } = require('../PageObject/POmanager');
const dataset = JSON.parse(JSON.stringify(require("../utils/EcomTestdata.json")));
for(const data of dataset)
{
    test(`Ecommerce Test for ${data.productName}`, async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();

    const poManager = new POmanager(page);

    const loginPage = poManager.getLoginPage();
    await loginPage.goTo(data.homePage);
    await loginPage.validLogin(data.email,data.Password);

    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.searchProductAddToCart(data.productName);
    await dashboardPage.navigateToCart();
    
    const checkoutPage = poManager.getCheckoutPage();
    await checkoutPage.checkout();

    const placeOrder = poManager.getPlaceOrderPage();
    await placeOrder.fillShippingInformation();
    await placeOrder.fillPersonalInformation(data.CVV,data.Name,data.Coupon);
    
}
)
}
