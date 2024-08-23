const {test, expect} = require('@playwright/test');

test('Child window', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const username = page.locator('#username');
    const docLink = page.locator("[href*='documents-request']");

    const [newpage] = await Promise.all([
        context.waitForEvent('page'),
        docLink.click()
    ])
    
    const text = await newpage.locator('.red').textContent();
    console.log(text);

    const arrayText = text.split('@');
    const domain = arrayText[1].split(' ')[0];
    await page.locator('#username').fill(domain);
    // await page.pause();
    console.log(await page.locator('#username').textContent());
})