async function waitForFrameExist(selector, timeout = 5000){
    return browser.waitUntil(() => {
        return browser.$(selector).isExisting();
    }, {
        timeout: timeout,
        timeoutMsg: `iFrame with selector ${selector} doesn't exist in DOM after ${timeout}`
    })
}

module.exports = { waitForFrameExist }