const Base = require('./base');
const frame = require('./components/frame')

class MainPage extends Base {
    get acceptAllCookiesButton() {
        return $(`#notice button.sp_choice_type_11`)
    }

    get earthTitle() {
        return $('.sc-e6d79fb3-2.huflns');
    }

    async acceptCookies() {
        await frame.switchToFrame(frame.acceptCookiesBodySelector);
        await this.acceptAllCookiesButton.waitForDisplayed();
        await this.acceptAllCookiesButton.click();
        await browser.switchToParentFrame();
    }
}

module.exports = new MainPage();