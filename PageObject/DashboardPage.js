class DashboardPage
{
    constructor(page)
    {
        this.products = page.locator(".card-body");
        this.cart = page.locator('[routerlink*="cart"]');
    }

    async searchProductAddToCart(productName)
    {
        const siZe = await this.products.count();
 
        for(let i=0;i<=siZe;i++)
        {    if(await this.products.nth(i).locator("b").textContent() === productName)
            {
                await this.products.nth(i).locator("text= Add To Cart").click();
                break;   
            }
        }
    }

    async navigateToCart()
    {
        await this.cart.click();
    }
}
module.exports = {DashboardPage};