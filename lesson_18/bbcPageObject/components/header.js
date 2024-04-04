const Base = require('../base')

class Header extends Base {
    constructor() {
        super();
        this.leftNavMenuButton = async () => $('button.sc-75742244-3.eupXpe:not(.hKHSDc)');
    }

    async openLeftNavMenu() {
        await (await this.leftNavMenuButton()).waitForDisplayed();
        await (await this.leftNavMenuButton()).click()
    }
}

module.exports = new Header();