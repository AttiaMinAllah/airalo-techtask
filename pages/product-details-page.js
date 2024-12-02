const locators = require('../locators/airaloLocators');

class ProductDetailsPage {
  constructor(page) {
    this.page = page;
  }

  async selectSimPackage() {
    await this.page.waitForSelector(locators.simPackageItem);
    const simPackage = await this.page.locator(locators.simPackageItem);
    await simPackage.click();
  }

  async getPackageDetails() {
    const packageDetails = await this.page.locator(locators.packageDetailsList);

    const title = await this.page.locator(locators.operatorTitle).textContent();
    const coverage = await packageDetails.locator(locators.coverageValue).textContent();
    const data = await packageDetails.locator(locators.dataValue).textContent();
    const validity = await packageDetails.locator(locators.validityValue).textContent();
    const price = await packageDetails.locator(locators.priceValue).textContent();

    return { title, coverage, data, validity, price };
  }
}

module.exports = ProductDetailsPage;
