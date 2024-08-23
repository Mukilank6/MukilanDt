const { test } = require('@playwright/test');
test('Upload download excel validation',async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");
//   const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button',{name:'Download'}).click();
}
)