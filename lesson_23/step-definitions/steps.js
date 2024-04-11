const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

Given(/^I navigate to "(.*)"$/, async function(url)  {
    const world = this;
    console.log('1 -- ', world);
    await browser.url(url);
});

When(/^I search text "(.*)" in search field$/, async function(searchText)  {
    const world = this;
    console.log('1 -- ', world);
    await $('#top-s').setValue(searchText);
    await $('button.digi-ac-find__button').click();
});

Then(/^I should see text "(.*)" in element "(.*)"(| .* number)$/, async (text, element, elementNumber) => {
    if(elementNumber) {
        const number = parseInt(elementNumber, 10);
        await expect(await $$(element)[Number(number)].getText()).toContain(text);
    } else {
        await expect(await $(element).getText()).toContain(text);
    }
});

