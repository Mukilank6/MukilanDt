const {test, expect} = require('@playwright/test');

test('UIcontrols Test', async ({page})=>
{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const selectDropdown = page.locator('select.form-control');
    const docLink = page.locator("[href*='documents-request']");
    await selectDropdown.selectOption('teach');
    await page.locator('.radiotextsty').last().click();
    await page.locator('#okayBtn').click();
    await expect(page.locator('.radiotextsty').last()).toBeChecked();
    await page.locator('#terms').click();
    await expect(page.locator('#terms')).toBeChecked();
    await page.locator('#terms').uncheck();
    expect(await  page.locator('#terms').isChecked()).toBeFalsy(); 
    await expect(docLink).toHaveAttribute('class', 'blinkingText');
})