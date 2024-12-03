const { test, expect } = require('@playwright/test');
const HomePage = require('../../pages/homepage')
const ProductDetailsPage = require('../../pages/product-details-page');

test('Airalo UI Automation Test - Verify Package Details', async ({ page }) => {
  const homePage = new HomePage(page);
  const productDetailsPage = new ProductDetailsPage(page);

  // Navigate and search
  await homePage.navigateToSite();
  await homePage.searchForDestination('Japan');
  await homePage.selectDestination();

  // Select the SIM package and verify details
  await productDetailsPage.selectSimPackage();
  const packageDetails = await productDetailsPage.getPackageDetails();
  expect(packageDetails.title).toContain('Moshi Moshi');
  expect(packageDetails.coverage.toLowerCase()).toContain('japan');
  expect(packageDetails.data).toContain('1 GB');
  expect(packageDetails.validity).toContain('7 Days');
  expect(packageDetails.price).toContain('4.50 €');

});