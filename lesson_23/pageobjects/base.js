const BaseElements = require('../helpers/baseElements')

class Base extends BaseElements {
    async navigate(url) {
        await browser.url(url)
    }

    async switchTabByNumber(number) {
        const handles = await browser.getWindowHandles();
        await browser.switchWindow(handles[number]);
    }
}

module.exports = Base;
const base = new Base();