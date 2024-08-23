// const {expect} = require('@playwright/test');

class CheckoutPage
{
    constructor(page)
    {
        this.checkOut = page.locator('text=Checkout');
        this.rows = page.locator('div li');
        // this.addedProduct = page.locator("h3:has-text('ADIDAS ORIGINAL')");
    }

    async checkout()
    {
        await this.rows.last().waitFor();
        // const bool = await this.addedProduct.isVisible();
        // expect(bool).toBeTruthy();
        await this.checkOut.click();
    }
}
module.exports = {CheckoutPage};