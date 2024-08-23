const {test,expect} = require('@playwright/test');

test('calendars', async({page})=>
{
    const year = '2024';
    const month = '4';
    const date = '29';
    const expectedList = [month,date,year];
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');
    await page.locator('.react-date-picker__inputGroup').click();
    await page.locator('.react-calendar__navigation__label__labelText').click();
    await page.locator('.react-calendar__navigation__label__labelText').click();
    await page.getByText(year).click();
    await page.locator('.react-calendar__tile').nth(Number(month)-1).click();
    await page.locator("//abbr[text()='"+date+"']").click();
    
    const inputs = page.locator(".react-date-picker__inputGroup__input");

    const inputsCount = await inputs.count();
  
    for (let i = 0; i < inputsCount; i++) {
  
      const value = await inputs.nth(i).getAttribute("value");
  
      expect(value).toBe(expectedList[i]); 
  
    }
})