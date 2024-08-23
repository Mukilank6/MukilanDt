// const {expect} = require('@playwright/test');
class HomePageLocators
{
    constructor(page)
    {
            this.welcomeMessage = page.getByRole('heading', { name: 'Welcome to Support!' });
            this.welcomeBanner = page.getByText('Need help? We’re here for you.')
            this.helpMessage = page.getByRole('heading', { name: 'How can we help you today?' })
            this.homePageSearch = page.getByLabel('Search DIRECTV support')
            this.BillingAndAccount = page.getByLabel('Billing & account management')
            this.ChannelsPackagesAndPrograms = page.getByLabel('Channels, packages & programs')
            this.OrdersAppsEquipments = page.getByLabel('Orders, apps & equipment')
            this.QuickfixesAndTroubleshooting = page.getByLabel('Quick fixes & troubleshooting')
            this.OutagesZipCode = page.locator('[aria-label="ZIP Code"]');
            this.CheckForOutagesBtn = page.getByRole('button', { name: 'Check for outages' });
            this.contactUs = page.locator('button.css-79xub');
    }

    
}
module.exports = {HomePageLocators};