const Base = require('../base')

class Header extends Base {
    constructor(page) {
        super(page);
        this.leftNavMenuButton = page.locator('button.sc-75742244-3.eupXpe:not(.hKHSDc)');
    }

    async openLeftNavMenu() {
        await this.leftNavMenuButton.click()
    }
}

module.exports = Header;