const{UnAuthHomePage} = require('../SupportPageObject/Tests/UnAuthHomePage')
class SupportPOManager
{
    constructor(page)
    {
        this.page=page;
        this.unAuthHomePage= new UnAuthHomePage(page);
    }

    unAuthenticatedHomePage()
    {
        return this.unAuthHomePage;
    }
}
module.exports = {SupportPOManager};