const {test,expect} = require("@playwright/test");

test('more', async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    // await page.goto("https://google.com/");
    // await page.goBack();
    // await page.goForward();

    // await expect(page.locator("#displayed-text")).toBeVisible();
    // await page.locator("#hide-textbox").click();
    // await expect(page.locator("#displayed-text")).toBeHidden();

    const frame = page.frameLocator("#courses-iframe");
    await frame.locator("[href*='lifetime']:visible").nth(1).click();
    const framevalue = await frame.locator(".text h2").textContent();
    console.log(framevalue.split(" ")[1]);
})