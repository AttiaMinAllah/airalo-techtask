const locators = require('../locators/airaloLocators');

class BasePage {
  constructor(page) {
    this.page = page;
  }

  async manageCookiePreferences() {
    const manageButton = this.page.locator(locators.manageCookiePreferences);
    const confirmButton = this.page.locator(locators.confirmMyChoicesButton);
    if (await manageButton.isVisible()) {
      await manageButton.click();
    }

    if (await confirmButton.isVisible()) {
      await confirmButton.click();
    }
  }
}

module.exports = BasePage;
