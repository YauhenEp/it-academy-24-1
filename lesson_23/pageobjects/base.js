class Base {
    async navigate(url) {
        await browser.url(url)
    }

    async switchTabByNumber(number) {
        const handles = await browser.getWindowHandles();
        await browser.switchWindow(handles[number]);
    }
}

module.exports = Base;