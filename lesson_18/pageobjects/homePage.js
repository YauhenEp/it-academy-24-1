const Base = require('./base')

class HomePage extends Base {
    get searchField() {
        return $('.search3__input.mini-suggest__input');
    }

    get translatorSuggestLink() {
        return $('[href^="https://translate.yandex.by"]')
    }

    get geolocationLink() {
        return $('a.informers3__geo');
    }

    get acceptAllCookiesButton() {
        return $('.gdpr-popup-v3-button_id_all');
    }

    get suggestItemsList() {
        return $$('.services-suggest__list-item a')
    }

    async getSuggestItemByName(itemName) {
        return $(`//*[contains(@class,"services-suggest__item-title") and text()='${itemName}']//ancestor::a`)
    }

    async acceptAllCookies() {
        await this.acceptAllCookiesButton.waitForDisplayed();
        await this.acceptAllCookiesButton.click();
    }

    async gotoTranslatorPage(webElement) {
        await this.searchField.waitForDisplayed();
        await this.searchField.click();
        await webElement.waitForDisplayed();
        await webElement.click();
    }

    async gotoSuggestItemByNumber(suggestItemNumber) {
        await this.searchField.waitForDisplayed();
        await this.searchField.click();
        await this.suggestItemsList[suggestItemNumber].waitForDisplayed();
        await this.suggestItemsList[suggestItemNumber].click();
    }

    async gotoSuggestItemByName(itemName) {
        await this.searchField.waitForDisplayed();
        await this.searchField.click();
        await (await this.getSuggestItemByName(itemName)).waitForDisplayed();
        await (await this.getSuggestItemByName(itemName)).click();
    }
}

module.exports = new HomePage();