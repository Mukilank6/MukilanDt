const {test,expect} = require('@playwright/test');
import tags from '../utils/tags.json'

test.beforeEach(async({page})=>
{
    await page.route('https://conduit-api.bondaracademy.com/api/tags', async route =>
    {
        await route.fulfill({
            body: JSON.stringify(tags)
        })
    })

    // await page.goto('https://conduit.bondaracademy.com/');
})

test('APItest', async({page})=>
{
    await page.route('https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0', async route =>
    {
        const response = await route.fetch();
        const responseBody = await response.json();
         responseBody.articles[0].title = "This is a Mpck Test title"
         responseBody.articles[0].description = "This is Mock test desccription"
        await route.fulfill({
            body: JSON.stringify(responseBody)
        })
    })

    await page.getByText('Global Feed').click();
    await expect(page.locator('.navbar-brand')).toHaveText('conduit');
    await expect(page.locator('app-article-preview h1').first()).toContainText('This is a Mpck Test title');
    await expect(page.locator('app-article-preview p').first()).toContainText('This is Mock test desccription');
}
)

test('Delete Article', async({page})=>
{
    const response = await page.request.post('https://conduit-api.bondaracademy.com/api/users/login', {
        data: {
            "user":{"email":"APiTest@gmail.com","password":"Password1"}
        }
    })

    const responseBody = await response.json();
    const accessToken = await responseBody.user.token ;
    console.log(accessToken);

    const responseCode = await page.request.post('https://conduit-api.bondaracademy.com/api/articles/', {
        data: {
            "article":{"title":"This is a test article","description":"Test article description","body":"Desc","tagList":[]}
        }
        ,
        headers: {
            Authorization: `Token ${accessToken}`
        }
    })
    expect(responseCode.status()).toEqual(201);
})
