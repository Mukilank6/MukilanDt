class PlaceOrder {
    constructor(page) {
        this.selectCountry = page.locator('[placeholder="Select Country"]');
        this.results = page.locator('.ta-results');
        this.cvv = page.locator('input[type="text"]').nth(1);
        this.name = page.locator('input[type="text"]').nth(2);
        this.coupon = page.locator('input[type="text"]').nth(3);
        this.submitBtn = page.locator('.action__submit');
    }

    async fillShippingInformation() {
        await this.selectCountry.pressSequentially('ind');

        await this.results.waitFor();
        const size2 = await this.results.locator('button').count();


        for (let i = 0; i <= size2; i++) {
            const text = await this.results.locator('button').nth(i).textContent();
            if (text === " India") {
                this.results.locator('button').nth(i).click();
                break;
            }
        }
    }

    async fillPersonalInformation(CVV,Name,Coupon){
        await this.cvv.fill(CVV);
        await this.name.fill(Name);
        await this.coupon.fill(Coupon);
        await this.submitBtn.click();
    }
}
module.exports = { PlaceOrder };