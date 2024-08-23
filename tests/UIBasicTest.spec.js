const {test, expect} = require('@playwright/test');

test('My first Test', async ({page})=>
{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const username = page.locator('#username');
    const password = page.locator('#password');
    const signin = page.locator('#signInBtn');
    const title = page.locator('.card-body a');
    await username.fill('rahul');
    await password.fill('learning');
    await signin.click();
    console.log(await page.locator("[style*='display']").textContent());
    await expect(page.locator("[style*='display']")).toContainText('Incorrect');

    await username.fill("");
    await username.fill("rahulshettyacademy");
    await password.fill("learning");
    await signin.click();

    console.log(await title.first().textContent());
    console.log(await title.nth(1).textContent());
    const allTitles = await title.allTextContents();
    console.log(allTitles);
})