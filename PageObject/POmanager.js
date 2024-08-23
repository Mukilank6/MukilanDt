const {LoginPage} = require('../PageObject/LoginPage');
const {DashboardPage} = require('../PageObject/DashboardPage');
const { CheckoutPage } = require('../PageObject/CheckoutPage');
const { PlaceOrder } = require('../PageObject/PlaceOrder');

class POmanager
{
    constructor(page)
    {
        this.page=page;
        this.loginPage = new LoginPage(page);
        this.dashboardPage = new DashboardPage(page);
        this.checkoutPage = new CheckoutPage(page);
        this.placeOrder = new PlaceOrder(page);
    }

    getLoginPage()
    {
        return this.loginPage;
    }

    getDashboardPage()
    {
        return this.dashboardPage;
    }

    getCheckoutPage()
    {
        return this.checkoutPage;
    }

    getPlaceOrderPage()
    {
        return this.placeOrder;
    }

}
module.exports = {POmanager};