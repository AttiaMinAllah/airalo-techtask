const BasePage = require('../pages/base-page');
const locators = require('../locators/airaloLocators');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
  }

  async navigateToSite() {
    await this.page.goto('/');
    await this.manageCookiePreferences()
  }

  async searchForDestination(destination) {
    await this.page.locator(locators.searchInput).click();
    await this.page.locator(locators.searchInput).fill(destination);
  }

  async selectDestination() {
    const selectDestination = await this.page.locator(locators.japanOption);
    await selectDestination.click();
  }
}

module.exports = HomePage;
