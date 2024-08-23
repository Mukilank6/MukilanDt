const {test, expect} = require('@playwright/test');
const { count } = require('console');

test('Ecommerce Test', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const products = page.locator(".card-body");
    const productName = "ADIDAS ORIGINAL";
 
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator('#userEmail').fill("harry12@gmail.com");
    await page.locator('#userPassword').fill("Password1");
    await page.locator('#login').click();
    await page.waitForLoadState('networkidle');
    
    const siZe = await products.count();
 
    for(let i=0;i<=siZe;i++)
    {    if(await products.nth(i).locator("b").textContent() === productName)
        {
            await products.nth(i).locator("text= Add To Cart").click();
            break;   
        }
    }
   await page.locator('[routerlink*="cart"]').click();

   await page.locator('div li').last().waitFor();
   const bool = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
   expect(bool).toBeTruthy();
   await page.locator('text=Checkout').click();

   await page.locator('[placeholder="Select Country"]').pressSequentially('ind');

   const results = page.locator('.ta-results');
   await results.waitFor();
    const size2 = await results.locator('button').count();
    

   for(let i=0;i<=size2;i++)
   {
    const text = await results.locator('button').nth(i).textContent();
    if(text===" India")
    {
        results.locator('button').nth(i).click();
        break;
    }
   }

   await page.locator('.small input').first().fill("123");
   await page.locator('input[type="text"]').nth(2).fill("Harry");
   await page.locator('input[type="text"]').nth(3).fill("Rahul");
   await page.locator('.action__submit').click();

   await expect(page.locator('.hero-primary')).toHaveText(" Thankyou for the order. ");
   const orderId = await page.locator('label.ng-star-inserted').textContent();
   console.log(orderId);
   await page.locator("[routerlink*='myorders']").nth(1).click();

   await page.locator('tbody tr th').last().waitFor();
   const size3 = await page.locator('tbody tr th').count();
   console.log(size3);
   for(let i=0;i<=size3;i++)
   {
    const expectOrder = await page.locator('tbody tr th').nth(i).textContent();
    if(orderId.includes(expectOrder))
    {
        await page.locator('tbody tr').locator('button').first().click();
        console.log('pass');
        break;
    }
   }

   const summaryOrder = await page.locator('.col-text').textContent();
   expect(orderId.includes(summaryOrder)).toBeTruthy();
}
);