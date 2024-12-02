const locators = require('../locators/airaloLocators');

class HomePage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto('https://www.airalo.com/');
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
