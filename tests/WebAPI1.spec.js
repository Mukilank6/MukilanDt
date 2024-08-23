const {test,expect,request} = require("@playwright/test");
// const { request } = require("http");

const LoginpayLoad = {userEmail: "harry12@gmail.com", userPassword: "Password1"};
let token;
test.beforeAll(async()=>
{
    const apicontext = await request.newContext();
    const loginResponce = await apicontext.post("https://www.rahulshettyacademy.com/api/ecom/auth/login",
    {
        data:LoginpayLoad
    })
    expect(loginResponce.ok()).toBeTruthy();
    const loginResponceJson = await loginResponce.json();
    token = loginResponceJson.token;
    console.log(token);
})

test('WebApi', async({browser})=>
{


    const context = await browser.newContext();
    const page = await context.newPage();
    const products = page.locator(".card-body");
    const productName = "ADIDAS ORIGINAL";
 
    await page.addInitScript(value=>
        {
            window.localStorage.setItem("token",value)
        }, token);


    await page.goto("https://rahulshettyacademy.com/client");
    // await page.locator('#userEmail').fill("harry12@gmail.com");
    // await page.locator('#userPassword').fill("Password1");
    // await page.locator('#login').click();
    await page.waitForLoadState('networkidle');
    

}
)