// @ts-check
const { devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */

const config ={
  testDir: './tests',
  timeout: 60 * 1000,
  expect:{

    timeout: 5000

  },
  reporter: 'html',
  projects : [
{
  name : "chrome",
  use: {
   
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',         
    trace: 'off',
    ignoreHTTPSErrors: true,
    ...devices['Galaxy S5']
  }
},
{
  name : "safari",
  use: {
   
    browserName: 'webkit',
    headless: false,
    screenshot: 'on',         
    trace: 'off',
    ignoreHTTPSErrors: true,
  }
}
  ],

}
module.exports = config;


