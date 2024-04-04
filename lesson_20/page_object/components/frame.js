const Base = require('../base');

class Frame extends Base {
    constructor(page) {
        super(page);

    }
    get acceptCookiesButton() {
        return '.focusable.button.sp_choice_type_11';
    }

    async acceptCookies() {
        await this.page.waitForTimeout(3000)
        const frame = await this.page.frame({ url: /.*cdn.privacy-mgmt.com*/ })
        const acceptButton = await frame.locator(this.acceptCookiesButton);
        await acceptButton.click();
    }
}

module.exports = Frame;