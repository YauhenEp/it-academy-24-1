const Base = require('../base');
const { waitForFrameExist } = require('../../helpers/waiter')

class Frame extends Base {

    get acceptCookiesBodySelector() {
        return '#sp_message_iframe_1091681as';
    }

    async switchToFrame(frameSelector) {
        await waitForFrameExist(frameSelector);
        await browser.switchToFrame(await browser.$(frameSelector));
    }
}

module.exports = new Frame();