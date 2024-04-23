const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

Given(/^I navigate to "(.*)"$/, async function(url)  {
    await browser.url(url);
});

When(/^I search text "(.*)" in search field$/, async function(searchText)  {
    await $('#top-s').setValue(searchText);
    await $('button.digi-ac-find__button').click();
});

Then("I should see text {string} in element {locator}{locator position}", async (text, element, elementNumber) => {
    if(elementNumber) {
        const number = parseInt(elementNumber, 10);
        await expect(await $$(element)[Number(number)].getText()).toContain(text);
    } else {
        await expect(await $(element).getText()).toContain(text);
    }
});

Then("I should see title {string}", async function(title) {
    await expect(await browser.getTitle()).toEqual(title)
})

