const Base = require('../base');

class Frame extends Base {
    constructor(page) {
        super(page);

    }
    get acceptCookiesButton() {
        return '.focusable.button.sp_choice_type_11';
    }

    async acceptCookies() {
        const iframeElement = await this.page.locator('iframe#sp_message_iframe_1091681').elementHandle()
        const frame = await iframeElement.contentFrame();
        await frame.waitForURL(new RegExp('.*cdn.privacy-mgmt.com*', 'i'));
        const acceptButton = await frame.locator(this.acceptCookiesButton);
        await acceptButton.click();
    }
}

module.exports = Frame;