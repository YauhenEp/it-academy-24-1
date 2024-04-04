const Base = require('../base')

class Popup extends Base {
    get popupBody() {
        return $('div.simple-popup__content');
    }

    get closePopupButton() {
        return $('button.simple-popup__close ')
    }

    async closePopup() {
        await browser.pause(500);
        if(await this.closePopupButton.isDisplayed() === true) {
            await this.closePopupButton.waitForDisplayed();
            await this.closePopupButton.click()
        }
    }
}

module.exports = new Popup();