const {When} = require('@wdio/cucumber-framework');
const BaseElements = require('../helpers/baseElements');

const baseElements = new BaseElements()

When('I click element {locator}{locator position}', async function(locator, locatorPosition) {
  await baseElements.click(locator, locatorPosition);
})